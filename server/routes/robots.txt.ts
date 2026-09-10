export default defineEventHandler((event) => {
  setHeader(event, 'content-type', 'text/plain')
  return `User-agent: *
Allow: /

Sitemap: http://localhost:3000/sitemap.xml`
})
