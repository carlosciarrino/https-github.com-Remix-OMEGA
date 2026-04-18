const fs = require('fs');
const path = require('path');

const dir = './src/chapters';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && !f.includes('index') && f !== 'test.ts');

let totalWords = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  const regex = /(`[\s\S]*?`)/g;
  let matches = content.match(regex);
  if (matches) {
    matches.forEach(match => {
      let text = match.slice(1, -1);
      const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
      console.log(`${file}: ${words}`);
      totalWords += words;
    });
  }
});

console.log(`TOTAL_WORDS: ${totalWords}`);
