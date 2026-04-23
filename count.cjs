const fs = require('fs');
const path = require('path');
let totalWords = 0;
const dir = path.join(process.cwd(), 'src', 'chapters');
const files = fs.readdirSync(dir).filter(f => {
  // includiamo solo i file dei capitoli e l'epilogo, ignoriamo chapter27, 39, 40 etc se sono vuoti
  const isTarget = f.match(/chapter(?:[1-9]|1[0-9]|20)\.ts/) || f === 'epilogue.ts';
  return isTarget;
});

console.log('-- Dettaglio --');
files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf-8');
    const text = content.replace(/export const .*? = `/g, '').replace(/`;?$/g, '');
    const words = text.split(/[\s\n\r]+/).filter(w => w.trim().length > 0).length;
    totalWords += words;
    console.log(`${f}: ${words} parole`);
});
console.log('----------------');
console.log('Totale parole narratore: ' + totalWords);
console.log('Stima pagine (A) 200 parole/pagina: ' + Math.ceil(totalWords / 200));
console.log('Stima pagine (B) 250 parole/pagina: ' + Math.ceil(totalWords / 250));
