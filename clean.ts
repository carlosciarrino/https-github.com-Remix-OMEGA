import * as fs from 'fs';
import * as path from 'path';

const chaptersDir = path.join(process.cwd(), 'src/chapters');
const files = fs.readdirSync(chaptersDir);

files.forEach(file => {
    if (file.endsWith('.ts') && file !== 'indexVol1.ts') {
        const filePath = path.join(chaptersDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        // Rimuovi righe vuote e righe contenenti solo spazi
        content = content.replace(/\n\s*\n+/g, '\n');
        fs.writeFileSync(filePath, content);
        console.log("Cleaned " + file);
    }
});
