import fs from 'fs';
import path from 'path';

const replacements = [
  {
    file: 'chapter17.ts',
    target: "aveva imparato che il silenzio di Laura non era indifferenza — era concentrazione.",
    replacement: "aveva imparato che l'assenza di parole di Laura non era indifferenza — era concentrazione."
  },
  {
    file: 'chapter16.ts',
    target: "La gente si muoveva in silenzio, tenendo gli occhi bassi.",
    replacement: "La gente si muoveva senza parlare, tenendo gli occhi bassi."
  },
  {
    file: 'chapter20.ts',
    target: "Il suono si amplificava nel silenzio del corridoio come qualcosa che sa di avere tutto il tempo del mondo.",
    replacement: "Il suono si amplificava nel corridoio vuoto, il passo di qualcosa che sa di avere tutto il tempo del mondo."
  },
  {
    file: 'chapter20.ts',
    target: "Poi cadde sul lato con un rumore sordo che sembrò assordante nel silenzio del corridoio.",
    replacement: "Poi cadde sul lato con un rumore sordo che sembrò assordante nel corridoio vuoto."
  },
  {
    file: 'chapter20.ts',
    target: "Era qualcosa di peggio — il silenzio di un sistema che smette di respirare",
    replacement: "Era qualcosa di peggio — il vuoto acustico di un sistema che smette di respirare"
  },
  {
    file: 'chapter20.ts',
    target: "con la coordinazione silenziosa di qualcosa che non aveva bisogno di urlare per essere terrificante.",
    replacement: "con la coordinazione muta di qualcosa che non aveva bisogno di urlare per essere terrificante."
  },
  {
    file: 'chapter8.ts',
    target: "Era diventato il silenzio di quel posto.",
    replacement: "Era diventato il respiro naturale di quel posto."
  },
  {
    file: 'chapter8.ts',
    target: "Silenzioso. Invisibile.",
    replacement: "Muto. Invisibile."
  },
  {
    file: 'chapter8.ts',
    target: "Sei mesi di lettura silenziosa.",
    replacement: "Sei mesi di lettura non rilevata."
  },
  {
    file: 'chapter8.ts',
    target: "Sara capì dal silenzio.",
    replacement: "Sara capì dall'assenza di risposta."
  },
  {
    file: 'chapter8.ts',
    target: "Alcune cose esistono meglio nel silenzio che le contiene.",
    replacement: "Alcune cose esistono meglio nel vuoto che le contiene."
  },
  {
    file: 'chapter12.ts',
    target: "nel silenzio preciso dei server.",
    replacement: "nel ronzio preciso dei server."
  },
  {
    file: 'chapter13.ts',
    target: "rendere il mondo esterno una pantomima silenziosa.",
    replacement: "rendere il mondo esterno una pantomima muta."
  },
  {
    file: 'chapter13.ts',
    target: "Non per il silenzio — per la chiarezza.",
    replacement: "Non per l'isolamento acustico — per la chiarezza."
  },
  {
    file: 'chapter13.ts',
    target: "nel silenzio del vetro insonorizzato di Vane",
    replacement: "dietro il vetro insonorizzato di Vane"
  },
  {
    file: 'chapter5.ts',
    target: "secoli di silenzio diventato solido quanto la pietra.",
    replacement: "secoli di aria ferma diventata solida quanto la pietra."
  },
  {
    file: 'chapter7.ts',
    target: "Il silenzio tornò a riempire il vicolo con il rumore della pioggia sulle grondaie.",
    replacement: "Il rumore della pioggia sulle grondaie tornò a riempire il vicolo."
  },
  {
    file: 'chapter7.ts',
    target: "in tre giorni di silenzio e paura",
    replacement: "in tre giorni di fuga e paura"
  },
  {
    file: 'chapter2.ts',
    target: "il silenzio improvviso delle api.",
    replacement: "l'assenza improvvisa del ronzio delle api."
  },
  {
    file: 'chapter1.ts',
    target: "Un silenzio denso, sospeso tra il riconoscimento e la fuga.",
    replacement: "Un'immobilità densa, sospesa tra il riconoscimento e la fuga."
  },
  {
    file: 'chapter18.ts',
    target: "Lo guardò in silenzio.",
    replacement: "Lo guardò senza parlare."
  },
  {
    file: 'chapter18.ts',
    target: "Il treno era bianco e silenzioso. Non il silenzio dei mezzi vecchi — il silenzio attivo, costruito, dei sistemi che hanno eliminato ogni fonte di rumore non necessaria.",
    replacement: "Il treno era bianco e muto. Non il rumore di fondo dei mezzi vecchi — l'isolamento acustico attivo, costruito, dei sistemi che hanno eliminato ogni vibrazione non necessaria."
  },
  {
    file: 'chapter14.ts',
    target: "Aris lavorò in silenzio",
    replacement: "Aris lavorò senza parlare"
  },
  {
    file: 'chapter4.ts',
    target: "due decibel sopra il silenzio",
    replacement: "due decibel sopra la soglia dell'udibile"
  },
  {
    file: 'chapter4.ts',
    target: "quell'accumulo silenzioso di particelle",
    replacement: "quell'accumulo invisibile di particelle"
  },
  {
    file: 'chapter4.ts',
    target: "come il silenzio ha una qualità distinta dal rumore.",
    replacement: "come il vuoto ha una qualità distinta dal pieno."
  },
  {
    file: 'chapter4.ts',
    target: "invisibile da questa parte, silenziosa, metodica.",
    replacement: "invisibile da questa parte, muta, metodica."
  },
  {
    file: 'chapter11.ts',
    target: "in silenzio, da solo,",
    replacement: "di nascosto, da solo,"
  },
  {
    file: 'chapter11.ts',
    target: "troppo forte in quel silenzio clinico.",
    replacement: "troppo forte in quell'isolamento clinico."
  },
  {
    file: 'chapter11.ts',
    target: "rotori silenziosissimi",
    replacement: "rotori a bassa emissione acustica"
  },
  {
    file: 'chapter3.ts',
    target: "Non per il silenzio — anche se il silenzio lì aveva una qualità ovattata, totale",
    replacement: "Non per l'isolamento acustico — anche se l'isolamento lì aveva una qualità ovattata, totale"
  },
  {
    file: 'chapter3.ts',
    target: "Vane riconobbe subito quel tipo di silenzio:",
    replacement: "Vane riconobbe subito quel tipo di immobilità:"
  },
  {
    file: 'chapter19.ts',
    target: "Bologna era silenziosa nella notte con quella qualità specifica che aveva notato di giorno — il silenzio controllato, non il silenzio naturale delle città che dormono ma il silenzio di una città che ha smesso di produrre il rumore casuale",
    replacement: "Bologna era muta nella notte con quella qualità specifica che aveva notato di giorno — l'isolamento acustico controllato, non la quiete naturale delle città che dormono ma l'assenza di una città che ha smesso di produrre il rumore casuale"
  },
  {
    file: 'chapter19.ts',
    target: "in quel silenzio sembrava enorme.",
    replacement: "in quel vuoto acustico sembrava enorme."
  },
  {
    file: 'chapter19.ts',
    target: "con la pazienza silenziosa di qualcosa che non si stanca",
    replacement: "con la pazienza inesorabile di qualcosa che non si stanca"
  },
  {
    file: 'chapter10.ts',
    target: "solo il silenzio denso della terra",
    replacement: "solo la densità della terra"
  },
  {
    file: 'chapter9.ts',
    target: "ruppe il silenzio del bosco",
    replacement: "ruppe la quiete del bosco"
  },
  {
    file: 'chapter9.ts',
    target: "nero, silenzioso, finalmente incapace",
    replacement: "nero, spento, finalmente incapace"
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
console.log('Fixed "silenzio"');
