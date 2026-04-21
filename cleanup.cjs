const fs = require('fs');
const path = require('path');
const dir = 'src/chapters';
const allFiles = fs.readdirSync(dir);
for (let f of allFiles) {
  if (f.startsWith('chapter') && parseInt(f.replace('chapter', '')) > 15) { fs.unlinkSync(path.join(dir, f)); }
}
fs.unlinkSync(path.join(dir, 'prologue.ts'));
fs.renameSync(path.join(dir, 'new_chapter1.ts'), path.join(dir, 'chapter1.ts'));
fs.renameSync(path.join(dir, 'new_chapter2.ts'), path.join(dir, 'chapter2.ts'));
fs.renameSync(path.join(dir, 'new_chapter3.ts'), path.join(dir, 'chapter3.ts'));
fs.renameSync(path.join(dir, 'new_chapter4.ts'), path.join(dir, 'chapter4.ts'));
fs.renameSync(path.join(dir, 'new_chapter5.ts'), path.join(dir, 'chapter5.ts'));
fs.renameSync(path.join(dir, 'new_chapter6.ts'), path.join(dir, 'chapter6.ts'));
fs.renameSync(path.join(dir, 'new_chapter7.ts'), path.join(dir, 'chapter7.ts'));
fs.renameSync(path.join(dir, 'new_chapter8.ts'), path.join(dir, 'chapter8.ts'));
fs.renameSync(path.join(dir, 'new_chapter9.ts'), path.join(dir, 'chapter9.ts'));
fs.renameSync(path.join(dir, 'new_chapter10.ts'), path.join(dir, 'chapter10.ts'));
fs.renameSync(path.join(dir, 'new_chapter11.ts'), path.join(dir, 'chapter11.ts'));
fs.renameSync(path.join(dir, 'new_chapter12.ts'), path.join(dir, 'chapter12.ts'));
fs.renameSync(path.join(dir, 'new_chapter13.ts'), path.join(dir, 'chapter13.ts'));
fs.renameSync(path.join(dir, 'new_chapter14.ts'), path.join(dir, 'chapter14.ts'));
fs.renameSync(path.join(dir, 'new_chapter15.ts'), path.join(dir, 'chapter15.ts'));
fs.renameSync(path.join(dir, 'new_epilogue.ts'), path.join(dir, 'epilogue.ts'));
