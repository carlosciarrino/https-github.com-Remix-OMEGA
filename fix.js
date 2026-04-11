const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf-8');
const lines = content.split('\n');
const start = lines.findIndex(l => l.trim() === '>>>>');
const end = lines.findIndex((l, i) => i > start && l.trim() === '>>>>');
if (start !== -1 && end !== -1) {
  lines.splice(start, end - start + 1);
  fs.writeFileSync('src/App.tsx', lines.join('\n'));
  console.log('Fixed');
} else {
  console.log('Not found');
}
