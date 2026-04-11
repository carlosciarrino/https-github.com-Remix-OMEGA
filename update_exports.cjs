const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, 'src', 'chapters');

for (let i = 5; i <= 20; i++) {
  const filePath = path.join(chaptersDir, `chapter${i}.ts`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace the export name
    content = content.replace(new RegExp(`export const chapter${i-1}Content`, 'g'), `export const chapter${i}Content`);
    fs.writeFileSync(filePath, content);
    console.log(`Updated export in chapter${i}.ts`);
  }
}
