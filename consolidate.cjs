const fs = require('fs');
const path = require('path');

const dir = 'src/chapters';

function getContent(filename) {
  const filepath = path.join(dir, filename);
  if (!fs.existsSync(filepath)) return '';
  const content = fs.readFileSync(filepath, 'utf8');
  // Match everything inside the backticks, handling escapes if necessary
  const match = content.match(/export const \w+\s*=\s*`([\s\S]*?)`;/);
  return match ? match[1] : '';
}

const mapping = {
  1: ['prologue.ts', 'chapter1.ts', 'chapter2.ts'],
  2: ['chapter3.ts', 'chapter4.ts', 'chapter5.ts'],
  3: ['chapter6.ts', 'chapter7.ts', 'chapter8.ts'],
  4: ['chapter9.ts', 'chapter10.ts', 'chapter11.ts'],
  5: ['chapter12.ts', 'chapter13.ts', 'chapter14.ts'],
  6: ['chapter15.ts', 'chapter16.ts', 'chapter17.ts'],
  7: ['chapter18.ts', 'chapter19.ts'],
  8: ['chapter20.ts', 'chapter21.ts', 'chapter22.ts', 'chapter23.ts'],
  9: ['chapter24.ts', 'chapter25.ts', 'chapter26.ts'],
  10: ['chapter27.ts', 'chapter28.ts', 'chapter29.ts'],
  11: ['chapter30.ts', 'chapter31.ts', 'chapter32.ts'],
  12: ['chapter33.ts', 'chapter34.ts', 'chapter35.ts'],
  13: ['chapter36.ts', 'chapter37.ts'],
  14: ['chapter38.ts', 'chapter39.ts'],
  15: ['chapter40.ts', 'chapter41.ts', 'chapter42.ts'],
  16: ['chapter43.ts'] // Epilogo
};

for (const [newCap, files] of Object.entries(mapping)) {
  let combined = '';
  for (const f of files) {
    const text = getContent(f);
    if (text) {
      combined += text + '\n\n';
    }
  }
  
  // Quick fix for extra spaces/newlines at the end
  combined = combined.trimEnd();

  const varName = newCap == 16 ? 'chapter16Content' : `chapter${newCap}Content`;
  const exportStatement = `export const ${varName} = \`${combined}\`;\n`;
  
  const outFilename = newCap == 16 ? 'epilogue.ts' : `chapter${newCap}.ts`;
  fs.writeFileSync(path.join(dir, 'new_' + outFilename), exportStatement);
}

// Write a batch script to replace the old ones
let cleanupScript = `const fs = require('fs');\nconst path = require('path');\nconst dir = '${dir}';\n`;
cleanupScript += `const allFiles = fs.readdirSync(dir);\n`;
cleanupScript += `for (let f of allFiles) {\n  if (f.startsWith('chapter') && parseInt(f.replace('chapter', '')) > 15) { fs.unlinkSync(path.join(dir, f)); }\n}\n`;
cleanupScript += `fs.unlinkSync(path.join(dir, 'prologue.ts'));\n`;
for (let i = 1; i <= 15; i++) {
  cleanupScript += `fs.renameSync(path.join(dir, 'new_chapter${i}.ts'), path.join(dir, 'chapter${i}.ts'));\n`;
}
cleanupScript += `fs.renameSync(path.join(dir, 'new_epilogue.ts'), path.join(dir, 'epilogue.ts'));\n`;

fs.writeFileSync('cleanup.cjs', cleanupScript);
console.log('Concatenation done. Run cleanup.cjs to apply.');
