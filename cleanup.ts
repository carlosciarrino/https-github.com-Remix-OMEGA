import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'chapters');
const files = fs.readdirSync(dir).filter(f => f.startsWith('chapter') && f.endsWith('.ts'));

files.forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  // Rimuove la formattazione markdown
  c = c.replace(/# PROGETTO OMEGA\r?\n/g, '');
  c = c.replace(/---\r?\n/g, '');
  c = c.replace(/### /g, '');
  c = c.replace(/## /g, '');
  c = c.replace(/\*/g, '');
  
  // Rimuove gli a capo vuoti all'inizio del template literal
  c = c.replace(/export const (\w+) = `\r?\n+/g, 'export const $1 = `\n');
  
  // Riduce gli a capo multipli a un singolo a capo (paragrafo normale senza riga vuota)
  c = c.replace(/\n\s*\n+/g, '\n');
  
  fs.writeFileSync(p, c, 'utf8');
});

console.log('Pulizia completata con successo su ' + files.length + ' file.');
