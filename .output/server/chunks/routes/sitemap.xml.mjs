import { c as defineEventHandler, e as setHeader } from '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';
import 'node:crypto';

const sitemap_xml = defineEventHandler((event) => {
  setHeader(event, "content-type", "application/xml");
  const siteUrl = "http://localhost:3000";
  const currentDate = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/id</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
});

export { sitemap_xml as default };
//# sourceMappingURL=sitemap.xml.mjs.map
