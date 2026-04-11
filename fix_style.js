import fs from 'fs';
import path from 'path';

const chaptersDir = path.join(process.cwd(), 'src', 'chapters');
const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
    const filePath = path.join(chaptersDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove standalone "Pausa." or "Silenzio." or "Una pausa."
    content = content.replace(/^Una pausa\.\s*$/gm, '');
    content = content.replace(/^Pausa\.\s*$/gm, '');
    content = content.replace(/^Silenzio\.\s*$/gm, '');
    content = content.replace(/— Una pausa\. —/g, '—');
    content = content.replace(/— Pausa\. —/g, '—');
    content = content.replace(/Una pausa di un secondo esatto\./g, '');
    content = content.replace(/Una pausa\. Breve, calibrata\./g, '');
    content = content.replace(/Un'altra pausa\./g, '');
    
    // Replace "Il silenzio che seguì..."
    content = content.replace(/Il silenzio che seguì aveva una temperatura\./g, '');
    content = content.replace(/Il silenzio che seguì era diverso\./g, '');
    content = content.replace(/Il silenzio che seguì ebbe una consistenza fisica\./g, '');
    content = content.replace(/Il silenzio che seguì aveva una forma precisa\./g, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Done basic cleanup');
