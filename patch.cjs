const fs = require('fs');

const appTsx = fs.readFileSync('src/App.tsx', 'utf8');

// Extract Chapter 1
const cap1Match = appTsx.match(/'vol-1-cap-1': `([\s\S]*?)`,\n\s*'vol-1-cap-2'/);
const cap1Content = cap1Match ? cap1Match[1] : '';

// Extract Chapter 2
const cap2Match = appTsx.match(/'vol-1-cap-2': `([\s\S]*?)`,\n\s*'vol-1-cap-3'/);
const cap2Content = cap2Match ? cap2Match[1] : '';

// Extract Chapter 3
const cap3Match = appTsx.match(/'vol-1-cap-3': `([\s\S]*?)`,\n\s*'vol-1-cap-4'/);
const cap3Content = cap3Match ? cap3Match[1] : '';

// Find the end of manuscriptDrafts[0]
const draftMatch = appTsx.match(/(Come tutte le cose che contengono molta informazione compressa\.)`\n\s*\]\);/);

if (draftMatch && cap1Content && cap2Content && cap3Content) {
  const newDraftContent = `${draftMatch[1]}\n\n${cap1Content}\n\n${cap2Content}\n\n${cap3Content}\``;
  const newAppTsx = appTsx.replace(/(Come tutte le cose che contengono molta informazione compressa\.)`\n\s*\]\);/, newDraftContent + '\n  ]);');
  fs.writeFileSync('src/App.tsx', newAppTsx);
  console.log('Successfully patched App.tsx');
} else {
  console.log('Failed to match');
  console.log('draftMatch:', !!draftMatch);
  console.log('cap1Content:', !!cap1Content);
  console.log('cap2Content:', !!cap2Content);
  console.log('cap3Content:', !!cap3Content);
}
