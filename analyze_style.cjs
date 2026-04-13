const fs = require('fs');
const path = require('path');

const chaptersDir = path.join(__dirname, 'src', 'chapters');
const files = fs.readdirSync(chaptersDir).filter(f => f.endsWith('.ts'));

let violations = [];

files.forEach(file => {
    const content = fs.readFileSync(path.join(chaptersDir, file), 'utf-8');
    const match = content.match(/`([\s\S]*?)`/);
    if (!match) return;
    const text = match[1];

    const sentences = text.split(/(?<=[.!?])\s+/);
    
    sentences.forEach(sentence => {
        const cleanSentence = sentence.replace(/\n/g, ' ').trim();
        if (!cleanSentence) return;
        
        const words = cleanSentence.split(/\s+/).length;
        const commas = (cleanSentence.match(/,/g) || []).length;
        const gerunds = (cleanSentence.match(/\b\w+ndo\b/g) || []).length;
        const ands = (cleanSentence.match(/\b e \b/g) || []).length;

        // Criteria for "run-on" or non-linear: > 35 words, > 4 commas, or multiple gerunds
        if (words > 35 || commas > 4 || gerunds > 1) {
            violations.push({
                file,
                words,
                commas,
                gerunds,
                sentence: cleanSentence
            });
        }
    });
});

violations.sort((a, b) => (b.words + b.commas*2) - (a.words + a.commas*2));

console.log(`Found ${violations.length} potential run-on sentences.`);
violations.slice(0, 10).forEach(v => {
    console.log(`\nFile: ${v.file} (Words: ${v.words}, Commas: ${v.commas}, Gerunds: ${v.gerunds})`);
    console.log(`Text: ${v.sentence}`);
});
