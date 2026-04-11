import fs from 'fs';
import path from 'path';

const replacements = [
  {
    file: 'chapter20.ts',
    target: "il silenzio assoluto dei suoi passi.",
    replacement: "l'assenza assoluta di rumore dei suoi passi."
  },
  {
    file: 'chapter20.ts',
    target: "Il flash EMP fu silenzioso.",
    replacement: "Il flash EMP esplose senza alcun suono."
  },
  {
    file: 'chapter1.ts',
    target: "— Sì — disse. Silenzio. Un'immobilità densa",
    replacement: "— Sì — disse. Un'immobilità densa"
  },
  {
    file: 'chapter14.ts',
    target: "Claudio fece una pausa.",
    replacement: "Claudio prese fiato."
  },
  {
    file: 'chapter4.ts',
    target: "Questa volta il silenzio fu diverso. Più corto. Più denso.",
    replacement: "L'aria nella stanza cambiò. Più pesante. Più densa."
  },
  {
    file: 'chapter3.ts',
    target: "Il silenzio che seguì era diverso dal precedente. Più denso. Il silenzio di chi ha capito che quello che potrebbe dire non basta.",
    replacement: "Nessuno parlò. L'immobilità di chi ha capito che quello che potrebbe dire non basta."
  },
  {
    file: 'chapter6.ts',
    target: "Poi, in un istante, il silenzio.",
    replacement: "Poi, in un istante, il buio acustico."
  },
  {
    file: 'chapter6.ts',
    target: "Il silenzio aveva la consistenza delle cose irreversibili.",
    replacement: "L'assenza di rumore aveva la consistenza delle cose irreversibili."
  },
  {
    file: 'chapter6.ts',
    target: "Aris fece una pausa, esitando come faceva sempre quando decideva di aggiungere qualcosa all'ultimo momento, quasi temesse di renderlo troppo reale.",
    replacement: "Aris esitò, il respiro trattenuto di chi decide di aggiungere qualcosa all'ultimo momento, temendo di renderlo troppo reale."
  },
  {
    file: 'chapter10.ts',
    target: "Fece una pausa. «ABITES fa la stessa cosa.",
    replacement: "«ABITES fa la stessa cosa."
  },
  {
    file: 'chapter10.ts',
    target: "Il silenzio tra loro era pieno del suono dell'acqua",
    replacement: "Lo spazio tra loro era riempito solo dal suono dell'acqua"
  },
  {
    file: 'chapter10.ts',
    target: "sa dove si trova la serratura.» Una pausa. «Non dove",
    replacement: "sa dove si trova la serratura. Non dove"
  },
  {
    file: 'chapter10.ts',
    target: "sotto il peso silenzioso di ABITES",
    replacement: "sotto il peso inesorabile di ABITES"
  },
  {
    file: 'chapter15.ts',
    target: "LA SINFONIA DEL SILENZIO",
    replacement: "LA SINFONIA DEL VUOTO"
  },
  {
    file: 'chapter15.ts',
    target: "Le ore passarono in un silenzio rotto solo dal cricchettio",
    replacement: "Le ore passarono, scandite solo dal cricchettio"
  }
];

const chaptersDir = path.join(process.cwd(), 'src', 'chapters');

for (const {file, target, replacement} of replacements) {
  const filePath = path.join(chaptersDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('Fixed remaining violations');
