const fs = require('fs');

const appPath = 'src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

// Remove old imports 1-43
content = content.replace(/import \{ chapter\d+Content \} from '\.\/chapters\/chapter\d+';\n/g, '');
// Add new imports 1-16
let newImports = '';
for (let i = 1; i <= 15; i++) {
  newImports += `import { chapter${i}Content } from './chapters/chapter${i}';\n`;
}
newImports += `import { chapter16Content as epilogueContent } from './chapters/epilogue';\n`;

// Insert after prologue import or similar
content = content.replace(/(import \{ indexVol1 \} from '\.\/chapters\/indexVol1';\n)/, `$1${newImports}`);
// Also wait, prologue import?
content = content.replace(/import \{ prologueContent \} from '\.\/chapters\/prologue';\n/, '');

// Now replace useState for chapterContent
const initMatch = content.match(/const \[chapterContent, setChapterContent\] = useState<Record<string, string>>\(\{([\s\S]*?)\}\);/);
if (initMatch) {
  let newInit = '';
  newInit += `    'vol-1-cap-0': '',\n`;
  for (let i = 1; i <= 15; i++) {
    newInit += `    'vol-1-cap-${i}': chapter${i}Content,\n`;
  }
  newInit += `    'vol-1-cap-16': epilogueContent,\n    'vol-1-cap-17': indexVol1\n`;
  
  content = content.replace(initMatch[0], `const [chapterContent, setChapterContent] = useState<Record<string, string>>({\n${newInit}  });`);
}

// Now replace plots array
const plotMatch = content.match(/summary: "La Conquista del Cavallo Bianco: [^"]+",\s*chapters: \[([\s\S]*?)\]\s*\},/);
if (plotMatch) {
  const newChapters = `
        { title: "Sinossi", description: "Sinossi del Volume 1" },
        { title: "Capitolo 1: La Caduta Analitica", description: "Prologo, Piazza Vittorio e Appalachi. Claudio scopre la B.E.S.T.I.A e Sara percepisce le interferenze." },
        { title: "Capitolo 2: Il Controllo Delle Masse", description: "Julian Vane presenta la Sincronia a Davos e si autorizza la Fase di Emergenza." },
        { title: "Capitolo 3: Il Battesimo della Caccia", description: "Claudio e Aris nelle catacombe, il blackout, e Cyrus implanta il cerotto neurale con la forza." },
        { title: "Capitolo 4: Risonanza Ribelle", description: "Cyrus instaura il regime biometrico. Vengono scoperti segreti nell'impianto." },
        { title: "Capitolo 5: Il Canto di Cemento e Sangue", description: "Claudio recupera il drive Mythos. La fuga mozzafiato nei tunnel." },
        { title: "Capitolo 6: L'Equazione della Fede", description: "Blackout bancario di Vane e la comunicazione globale controllata." },
        { title: "Capitolo 7: Oltre il Velo", description: "Scoperte sui server. Pioggia acida e primi accenni di hacking interno." },
        { title: "Capitolo 8: Sangue nel Silicio", description: "Infiltrazione profonda nelle fogne e nella scuola di Bologna. Primi veri incontri ravvicinati con i Lealisti." },
        { title: "Capitolo 9: L'Invasione della Base ABITES", description: "Scontri fisici. Il sacrificio nel magazzino dei Rotti." },
        { title: "Capitolo 10: Sacrificio e Tradimento", description: "Il sacrificio di Aris. Il calore rimane tra i superstiti." },
        { title: "Capitolo 11: Il Nucleo Freddo", description: "I corridoi di vetro e l'Intelligenza interrogatrice (Agente Oro). L'onda d'urto globale espande la resistenza in Medio Oriente, Europa, e Americhe." },
        { title: "Capitolo 12: Il Dialogo con Dio", description: "Il Volition engine. Scontro dialettico con le macchine prima dell'iniezione virale." },
        { title: "Capitolo 13: Crollo dell'Umanità", description: "Collasso dei sistemi di contenimento, blackout del centro e confusione generale." },
        { title: "Capitolo 14: La Torre del Miraggio", description: "La scalata finale alla Modulazione Centrale, danni collaterali letali." },
        { title: "Capitolo 15: I Cinque Minuti di OMEGA", description: "Il Virus viene innescato. Ultimo confronto sanguinoso sulla cima." },
        { title: "Epilogo: L'Eco nel Sangue", description: "Alba su un mondo distrutto ma non del tutto disconnesso." },
        { title: "Indice del Volume 1", description: "Indice strutturale e logico per uso interno." }
  `;
  content = content.replace(plotMatch[1], newChapters);
}

fs.writeFileSync(appPath, content);
console.log('App.tsx patched.');
