const fs = require('fs');
const lines = fs.readFileSync('src/App.tsx', 'utf8').split('\n');
const newLines = [...lines.slice(0, 1007), ...lines.slice(1429)];
fs.writeFileSync('src/App.tsx', newLines.join('\n'));
console.log('Successfully removed duplicated Chapter 1');
