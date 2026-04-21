const fs = require('fs');

const appPath = 'src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

// The problematic block starts around 'vol-1-cap-0' inside reset btn
// We can just find 'vol-1-cap-16': chapter15Content, in the file and replace everything down to vol-1-cap-48
for (let i=16; i<=50; i++) {
  content = content.replace(new RegExp(`'vol-1-cap-${i}':.*?,\n`, 'g'), '');
}
content = content.replace(/'vol-1-cap-0': synopsisContent,/g, "'vol-1-cap-0': synopsisContent,");
content = content.replace(/'vol-1-cap-1': prologueContent,/g, "'vol-1-cap-1': chapter1Content,");
content = content.replace(/'vol-1-cap-2': chapter1Content,/g, "'vol-1-cap-2': chapter2Content,");
content = content.replace(/'vol-1-cap-3': chapter2Content,/g, "'vol-1-cap-3': chapter3Content,");
content = content.replace(/'vol-1-cap-4': chapter3Content,/g, "'vol-1-cap-4': chapter4Content,");
content = content.replace(/'vol-1-cap-5': chapter4Content,/g, "'vol-1-cap-5': chapter5Content,");
content = content.replace(/'vol-1-cap-6': chapter5Content,/g, "'vol-1-cap-6': chapter6Content,");
content = content.replace(/'vol-1-cap-7': chapter6Content,/g, "'vol-1-cap-7': chapter7Content,");
content = content.replace(/'vol-1-cap-8': chapter7Content,/g, "'vol-1-cap-8': chapter8Content,");
content = content.replace(/'vol-1-cap-9': chapter8Content,/g, "'vol-1-cap-9': chapter9Content,");
content = content.replace(/'vol-1-cap-10': chapter9Content,/g, "'vol-1-cap-10': chapter10Content,");
content = content.replace(/'vol-1-cap-11': chapter10Content,/g, "'vol-1-cap-11': chapter11Content,");
content = content.replace(/'vol-1-cap-12': chapter11Content,/g, "'vol-1-cap-12': chapter12Content,");
content = content.replace(/'vol-1-cap-13': chapter12Content,/g, "'vol-1-cap-13': chapter13Content,");
content = content.replace(/'vol-1-cap-14': chapter13Content,/g, "'vol-1-cap-14': chapter14Content,");
content = content.replace(/'vol-1-cap-15': chapter14Content,/g, "'vol-1-cap-15': chapter15Content,\n'vol-1-cap-16': epilogueContent,\n'vol-1-cap-17': indexVol1,\n'vol-1-cap-18': backCoverContent,\n'vol-1-cap-19': authorInfoContent,\n'vol-1-cap-20': copyrightContent,\n");

fs.writeFileSync(appPath, content);
console.log('Force fix completed.');
