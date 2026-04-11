const fs = require('fs');
const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/Elias Thorne/g, 'Claudio Mancini');
content = content.replace(/Elias/g, 'Claudio');
fs.writeFileSync(path, content);
console.log('Replaced Elias with Claudio');
