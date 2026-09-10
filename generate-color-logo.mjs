import fs from 'node:fs'

const svg = fs.readFileSync('public/logo/logo-megaresort.svg', 'utf-8')
const lines = svg.split('\n').map(l => l.trim()).filter(Boolean)

lines[1] = lines[1].replace(/fill="[^"]+"/, 'fill="#1EB265"')
lines[2] = lines[2].replace(/fill="[^"]+"/, 'fill="#F59E0B"')
lines[3] = lines[3].replace(/fill="[^"]+"/, 'fill="#EA580C"')
lines[4] = lines[4].replace(/fill="[^"]+"/, 'fill="#29241f"')
lines[5] = lines[5].replace(/fill="[^"]+"/, 'fill="#29241f"')

fs.writeFileSync('public/logo/logo-megaresort-color.svg', lines.join('\n'), 'utf-8')
console.log('Created logo-megaresort-color.svg successfully!')
