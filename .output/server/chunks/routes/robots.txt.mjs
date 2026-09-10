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

const robots_txt = defineEventHandler((event) => {
  setHeader(event, "content-type", "text/plain");
  return `User-agent: *
Allow: /

Sitemap: http://localhost:3000/sitemap.xml`;
});

export { robots_txt as default };
//# sourceMappingURL=robots.txt.mjs.map
