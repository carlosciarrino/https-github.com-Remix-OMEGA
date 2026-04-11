import fs from 'fs';
import path from 'path';

const replacements = [
  {
    file: 'chapter1.ts',
    target: "Mani affondate nelle tasche, come se stringessero qualcosa che non esisteva più.",
    replacement: "Mani affondate nelle tasche, aggrappate al vuoto di qualcosa che non esisteva più."
  },
  {
    file: 'chapter1.ts',
    target: "Un'espirazione brusca, come se avesse ingoiato un grido.",
    replacement: "Un'espirazione brusca, il suono di un grido ingoiato a forza."
  },
  {
    file: 'chapter2.ts',
    target: "Poi tornò verso il gruppo. Come se avesse già ottenuto quello che cercava.",
    replacement: "Poi tornò verso il gruppo, la postura di chi ha già ottenuto quello che cercava."
  },
  {
    file: 'prologue.ts',
    target: "Ci si abitua a tutto, diceva Aris — e aveva ragione nel modo sbagliato, il modo in cui si ha ragione quando si descrive qualcosa di irreversibile come se fosse normale.",
    replacement: "Ci si abitua a tutto, diceva Aris — e aveva ragione nel modo sbagliato, il modo in cui si razionalizza l'irreversibile."
  },
  {
    file: 'chapter7.ts',
    target: "che Claudio sentiva ormai dentro i polmoni come se li avesse rivestiti di qualcosa che non era suo.",
    replacement: "che Claudio sentiva ormai dentro i polmoni, un rivestimento tossico che non gli apparteneva."
  },
  {
    file: 'chapter7.ts',
    target: "È come se la luce non venisse spenta ma abbassata",
    replacement: "La luce non viene spenta, viene abbassata"
  },
  {
    file: 'chapter7.ts',
    target: "quel suono antico, quasi normale, come se la città cercasse di ricordare com'era prima.",
    replacement: "quel suono antico, quasi normale, il tentativo della città di ricordare com'era prima."
  },
  {
    file: 'chapter5.ts',
    target: "La sua voce scese di registro, come se stesse abbassando la fiamma sotto una pentola sul punto di traboccare.",
    replacement: "La sua voce scese di registro, abbassando la fiamma sotto una pentola sul punto di traboccare."
  },
  {
    file: 'chapter13.ts',
    target: "Tutti nella stessa direzione, tutti con la stessa pendenza, come se qualcuno avesse inclinato il piano e i mercati stessero semplicemente obbedendo alla gravità.",
    replacement: "Tutti nella stessa direzione, tutti con la stessa pendenza. Qualcuno aveva inclinato il piano e i mercati stavano semplicemente obbedendo alla gravità."
  },
  {
    file: 'chapter13.ts',
    target: "Come se stesse parlando a qualcosa che teneva tra i palmi invece che a novantadue virgola tre percento dell'umanità connessa.",
    replacement: "Parlava a qualcosa che teneva tra i palmi, non al novantadue virgola tre percento dell'umanità connessa."
  },
  {
    file: 'chapter13.ts',
    target: "«Il terminale,» disse — come se avesse seguito lo stesso ragionamento in parallelo, come se la risposta fosse ovvia da entrambi i punti di arrivo.",
    replacement: "«Il terminale,» disse. Aveva seguito lo stesso ragionamento in parallelo, la risposta ovvia da entrambi i punti di arrivo."
  },
  {
    file: 'chapter8.ts',
    target: "Si avvicinò allo schermo come se ridurre la distanza potesse cambiare quello che leggeva.",
    replacement: "Si avvicinò allo schermo, cercando di cambiare quello che leggeva riducendo la distanza."
  },
  {
    file: 'chapter11.ts',
    target: "Come se stesse descrivendo un processo che riguardava qualcun altro.",
    replacement: "Il tono di chi descrive un processo che riguarda qualcun altro."
  },
  {
    file: 'chapter4.ts',
    target: "il tablet stretto sotto il braccio sinistro come se temesse che qualcuno glielo portasse via.",
    replacement: "il tablet stretto sotto il braccio sinistro, protetto da un furto invisibile."
  },
  {
    file: 'chapter4.ts',
    target: "Müller si fermò a metà frase come se avesse incontrato qualcosa di solido.",
    replacement: "Müller si fermò a metà frase, bloccato contro qualcosa di solido."
  },
  {
    file: 'chapter6.ts',
    target: "si spensero e basta, come se una mano enorme avesse abbassato un interruttore nel cielo.",
    replacement: "si spensero e basta. Una mano enorme aveva abbassato un interruttore nel cielo."
  },
  {
    file: 'chapter6.ts',
    target: "Come se tre minuti bastassero per quello che era appena successo.",
    replacement: "Tre minuti non bastavano per quello che era appena successo."
  },
  {
    file: 'chapter6.ts',
    target: "Eppure sentiva un bruciore febbrile sotto la pelle, come se il corpo stesse chiudendo tutte le porte non essenziali per concentrarsi su un'unica cosa.",
    replacement: "Eppure sentiva un bruciore febbrile sotto la pelle, il corpo che chiudeva tutte le porte non essenziali per concentrarsi su un'unica cosa."
  },
  {
    file: 'chapter10.ts',
    target: "come se avesse paura di illuminare troppo.",
    replacement: "per paura di illuminare troppo."
  },
  {
    file: 'chapter10.ts',
    target: "La sua voce era bassa e rauca, come se non l'usasse spesso ma sapesse esattamente come usarla quando serviva.",
    replacement: "La sua voce era bassa e rauca, arrugginita dal disuso ma precisa."
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
console.log('Fixed more "come se"');
