import fs from 'fs';
import path from 'path';

const replacements = [
  {
    file: 'chapter12.ts',
    target: "Un'azione involontaria, meccanica, il corpo che reagisce prima del pensiero: un braccio che trovò la sua spalla",
    replacement: "Un braccio trovò la sua spalla"
  },
  {
    file: 'chapter12.ts',
    target: "Non come una minaccia — come un dato.",
    replacement: "Il tono piatto di una constatazione."
  }
];

const chaptersDir = path.join(process.cwd(), 'src', 'chapters');

for (const {file, target, replacement} of replacements) {
  const filePath = path.join(chaptersDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('Fixed clinical explanations in chapter 12');
