<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
<xsl:output method="html" encoding="UTF-8"/>
<xsl:template match="/">
<html>
<head>
<title>Sitemap — UX Guidelines</title>
<style>
  body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #111; margin: 0; background: #fff; }
  .wrap { max-width: 960px; margin: 0 auto; padding: 40px 24px 80px; }
  h1 { font-size: 28px; letter-spacing: -1px; margin: 0 0 4px; }
  p.meta { color: #6b6b6b; font-size: 14px; margin: 0 0 28px; }
  table { width: 100%; border-collapse: collapse; font-size: 14px; }
  th { text-align: left; font-weight: 600; padding: 8px 10px; border-bottom: 2px solid #111; }
  td { padding: 7px 10px; border-bottom: 1px solid #e2e2e2; }
  a { color: #111; text-decoration: none; }
  a:hover { text-decoration: underline; }
  td.lm { color: #767676; white-space: nowrap; }
</style>
</head>
<body>
<div class="wrap">
  <h1>Sitemap</h1>
  <p class="meta"><xsl:value-of select="count(s:urlset/s:url)"/> URLs — UX Guidelines</p>
  <table>
    <tr><th>URL</th><th>Last modified</th></tr>
    <xsl:for-each select="s:urlset/s:url">
      <tr>
        <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
        <td class="lm"><xsl:value-of select="s:lastmod"/></td>
      </tr>
    </xsl:for-each>
  </table>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
