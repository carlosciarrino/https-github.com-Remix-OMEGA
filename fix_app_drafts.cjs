const fs = require('fs');

const appPath = 'src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

const draftMatch = content.match(/const \[manuscriptDrafts, setManuscriptDrafts\] = useState<string\[\]>\(\[([\s\S]*?)\]\);/);
if (draftMatch) {
  let replacement = `    synopsisContent,\n`;
  for(let i=1; i<=15; i++) {
    replacement += `    chapter${i}Content,\n`;
  }
  replacement += `    epilogueContent,\n    indexVol1,\n    backCoverContent,\n    authorInfoContent,\n    copyrightContent,\n`;
  content = content.replace(draftMatch[1], replacement);
}

fs.writeFileSync(appPath, content);
console.log('App.tsx drafts patched.');
