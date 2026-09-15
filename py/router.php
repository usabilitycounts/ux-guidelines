<?php
// Router for the PHP built-in dev server — mirrors what .htaccess does on
// Apache so language URLs work locally: /fr/loi-de-fitts.html and
// /fr/fitts-law.html both serve fitts-law.html, /de/tokens.css serves
// tokens.css, extensionless and trailing-slash forms resolve, and unknown
// paths get the 404 page. Lives in py/ so it is never uploaded.
$root = dirname(__DIR__);
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '/');

$mime = [
  'html' => 'text/html; charset=utf-8', 'css' => 'text/css; charset=utf-8', 'js' => 'application/javascript; charset=utf-8',
  'json' => 'application/json; charset=utf-8', 'svg' => 'image/svg+xml', 'png' => 'image/png', 'jpg' => 'image/jpeg',
  'jpeg' => 'image/jpeg', 'webp' => 'image/webp', 'ico' => 'image/x-icon', 'xml' => 'application/xml; charset=utf-8',
  'txt' => 'text/plain; charset=utf-8', 'woff2' => 'font/woff2', 'woff' => 'font/woff', 'webmanifest' => 'application/manifest+json',
];
function send_file($path, $mime, $status = 200) {
  $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
  http_response_code($status);
  header('Content-Type: ' . ($mime[$ext] ?? 'application/octet-stream'));
  header('Cache-Control: no-store');
  readfile($path);
  return true;
}
function not_found($root, $mime) {
  $p = $root . '/404.html';
  if (is_file($p)) return send_file($p, $mime, 404);
  http_response_code(404);
  echo 'Not found';
  return true;
}

// The localized slug map, read from the generated block in tokens.js
function slug_map($root) {
  static $map = null;
  if ($map !== null) return $map;
  $map = [];
  $js = @file_get_contents($root . '/tokens.js');
  if ($js && preg_match('/window\.UX_SLUGS = (\{.*?\});\n/s', $js, $m)) {
    $decoded = json_decode($m[1], true);
    if (is_array($decoded)) $map = $decoded;
  }
  return $map;
}

// Language prefix: /fr, /fr/, /fr/<slug>.html, /fr/<slug>, /fr/<asset>
if (preg_match('#^/(fr|de|es|ja|zh)(?:/(.*))?$#', $uri, $m)) {
  $lang = $m[1];
  $rest = isset($m[2]) ? $m[2] : '';
  if ($rest === '' || $rest === 'index') $rest = 'index.html';
  if (substr($rest, -1) === '/') $rest = rtrim($rest, '/') . '.html';
  // an asset under the prefix is the same asset at the root
  if (is_file($root . '/' . $rest) && !preg_match('/\.html$/', $rest)) return send_file($root . '/' . $rest, $mime);
  if (!preg_match('/\.html$/', $rest)) $rest .= '.html';
  $slug = preg_replace('/\.html$/', '', $rest);
  $map = slug_map($root);
  $en = $slug;
  if (isset($map[$lang])) {
    $flip = array_flip($map[$lang]);
    if (isset($flip[$slug])) $en = $flip[$slug];
  }
  if (preg_match('/^(roadmap|design-system)$/', $en)) return not_found($root, $mime);
  $page = $root . '/' . $en . '.html';
  if (preg_match('/^[a-z0-9-]+$/', $en) && is_file($page)) return send_file($page, $mime);
  return not_found($root, $mime);
}

// Extensionless and trailing-slash English URLs: /fitts-law, /fitts-law/
if (preg_match('#^/([a-z0-9-]+)/?$#', $uri, $m) && !is_file($root . $uri) && !is_dir($root . $uri)) {
  $page = $root . '/' . $m[1] . '.html';
  if (is_file($page)) return send_file($page, $mime);
}

// Everything else is a real file or a 404
$path = $root . ($uri === '/' ? '/index.html' : $uri);
if (is_file($path)) return false;   // let the built-in server serve it
if (is_dir($path) && is_file($path . '/index.html')) return send_file($path . '/index.html', $mime);
return not_found($root, $mime);
