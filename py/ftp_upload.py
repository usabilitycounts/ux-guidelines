#!/usr/bin/env python3
import os
import subprocess

from ftp_credentials import ftp_host, ftp_user, ftp_pass
local_dir = "/Users/patrickneeman/Claude/UX Guidelines"

# The FTP user lands in its home dir; the document root is the `www`
# subdirectory (mapped server-side to /httpdocs/ux-guidelines.com/).
remote_dir = "www"

# Files and directories to exclude from upload
exclude = {
    '.DS_Store',
    '.git',
    '.claude',
    '.env',
    '.gitignore',
    '.vscode',
    '.idea',
    '__pycache__',
    'py',
    'README.md',
    'i18n/src',
}

# Extra lftp glob patterns to ensure dev/internal stuff is excluded recursively.
lftp_exclude_globs = [
    "i18n/src",
    "i18n/src/**",
    ".git",
    ".git/**",
    "**/.git",
    "**/.git/**",
    ".claude",
    ".claude/**",
    "**/.claude",
    "**/.claude/**",
    ".vscode",
    ".vscode/**",
    "**/.vscode",
    "**/.vscode/**",
    ".idea",
    ".idea/**",
    "**/.idea",
    "**/.idea/**",
    "__pycache__",
    "__pycache__/**",
    "**/__pycache__",
    "**/__pycache__/**",
    "*.log",
    "**/*.log",
    # py/ holds the upload script and credentials — keep local only
    "py",
    "py/**",
    "README.md",
]

def create_exclude_file():
    """Create a temporary file with exclude patterns for lftp"""
    exclude_file = "/tmp/ftp_exclude_uxg.txt"
    with open(exclude_file, 'w') as f:
        for item in exclude:
            f.write(f"{item}\n")
    return exclude_file

import re
import shutil
import tempfile

def _strip_css_comments(text):
    # remove /* ... */ comments (CSS has no other comment syntax); collapse blank lines
    text = re.sub(r'/\*.*?\*/', '', text, flags=re.DOTALL)
    return re.sub(r'\n\s*\n+', '\n', text)

def _strip_js_comments(text):
    # conservative: only full-line // comments and standalone /* */ blocks at line
    # starts — never touches string or regex literals mid-line
    text = re.sub(r'^\s*//[^\n]*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*/\*.*?\*/\s*$', '', text, flags=re.DOTALL | re.MULTILINE)
    return re.sub(r'\n\s*\n+', '\n', text)

def build_staging():
    """Copy the site into a temp dir and lighten the big shared assets there."""
    staging = tempfile.mkdtemp(prefix='uxg-deploy-')
    dest = os.path.join(staging, 'site')
    shutil.copytree(local_dir, dest, ignore=shutil.ignore_patterns(
        '.git', '.claude', '.vscode', '.idea', '__pycache__', 'py', 'src',
        '.DS_Store', '.env', '.gitignore', 'README.md', '*.log'))
    for name, strip in (('tokens.css', _strip_css_comments),
                        ('tokens.js', _strip_js_comments),
                        ('i18n.js', _strip_js_comments)):
        path = os.path.join(dest, name)
        if os.path.exists(path):
            before = os.path.getsize(path)
            with open(path) as f:
                out = strip(f.read())
            with open(path, 'w') as f:
                f.write(out)
            print(f"minified {name}: {before} -> {os.path.getsize(path)} bytes")
    return staging, dest

def run_preflight():
    """Refuse to deploy if the site's invariants are broken."""
    script = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'check.py')
    result = subprocess.run(['python3', script])
    if result.returncode != 0:
        print("Deploy aborted: fix the preflight failures above (or run check.py directly).")
        raise SystemExit(1)

def upload_with_lftp():
    """Upload all files using lftp with parallel transfers"""
    run_preflight()
    exclude_file = create_exclude_file()
    staging, source_dir = build_staging()

    print("="*50)
    print(f"Starting FTP upload to: {ftp_host} ({remote_dir}/)")
    print("="*50)

    exclude_glob_args = " ".join(f"--exclude-glob {pattern}" for pattern in lftp_exclude_globs)

    lftp_script = f"""
        set ftp:ssl-allow no;
        set ssl:verify-certificate no;
        set mirror:parallel-transfer-count 5;
        set mirror:use-pget-n 5;
        set net:connection-limit 10;
        mirror -R --exclude-glob-from={exclude_file} {exclude_glob_args} --verbose=1 . {remote_dir}/;
        exit;
    """

    cmd = f"lftp -u {ftp_user},{ftp_pass} ftp://{ftp_host} -e '{lftp_script}'"

    try:
        print("Using lftp with parallel transfers (5 concurrent connections)...")
        result = subprocess.run(cmd, shell=True, cwd=source_dir, timeout=600)

        if result.returncode == 0:
            print("="*50)
            print("Upload complete!")
            print("="*50)
        else:
            print(f"Upload failed with return code: {result.returncode}")

    except subprocess.TimeoutExpired:
        print("Upload timed out after 10 minutes")
    except Exception as e:
        print(f"Upload failed: {e}")
    finally:
        if os.path.exists(exclude_file):
            os.remove(exclude_file)
        shutil.rmtree(staging, ignore_errors=True)

if __name__ == "__main__":
    upload_with_lftp()
