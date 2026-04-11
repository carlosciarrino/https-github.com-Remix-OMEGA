import fs from 'fs';
import path from 'path';

const replacements = [
  {
    file: 'chapter15.ts',
    target: "Odore di gomma bruciata e di qualcosa di più antico, come se la città stessa stesse esalando l'ultimo respiro.",
    replacement: "Odore di gomma bruciata e di qualcosa di più antico, l'esalazione finale della città stessa."
  },
  {
    file: 'chapter16.ts',
    target: "La sua voce era roca, come se non la usasse da anni.",
    replacement: "La sua voce era roca, raschiata da anni di inutilizzo."
  },
  {
    file: 'chapter17.ts',
    target: "mostravano come la curva scendesse drasticamente sopra i dodici anni — come se il sistema avesse già capito che oltre una certa soglia il condizionamento richiedeva troppo sforzo, e avesse deciso di concentrarsi su chi non aveva ancora gli strumenti per resistere.",
    replacement: "mostravano come la curva scendesse drasticamente sopra i dodici anni. Il sistema aveva calcolato lo sforzo del condizionamento oltre quella soglia, riposizionando i vettori su chi non aveva ancora gli strumenti per resistere."
  },
  {
    file: 'chapter18.ts',
    target: "Si muovevano lungo il corridoio con gesti lenti e metodici, ignorati dai passeggeri come se fossero parte dell'arredamento.",
    replacement: "Si muovevano lungo il corridoio con gesti lenti e metodici, assimilati all'arredamento dagli sguardi vuoti dei passeggeri."
  },
  {
    file: 'chapter19.ts',
    target: "Il tremore sottile delle sue mani che stringevano le sue spalle come se stesse per cadere o come se stesse per volare — e Claudio non capiva quale delle due, e forse non importava.",
    replacement: "Il tremore sottile delle sue mani che stringevano le sue spalle, in bilico tra una caduta e un volo — e Claudio non capiva quale delle due, e forse non importava."
  },
  {
    file: 'chapter20.ts',
    target: "Solo il corpo che lasciava il muro e scivolava verso la porta con una velocità che non quadrava con il silenzio assoluto dei suoi passi — come se il suono fosse una scelta che aveva semplicemente deciso di non fare.",
    replacement: "Solo il corpo che lasciava il muro e scivolava verso la porta con una velocità che non quadrava con il silenzio assoluto dei suoi passi. Il suono era una variabile scartata a priori."
  },
  {
    file: 'chapter20.ts',
    target: "Claudio lo respirò mentre correva e sentì qualcosa di quasi familiare in quella fetidità, come se il peggio avesse sempre questo odore e ormai lo riconoscesse.",
    replacement: "Claudio lo respirò mentre correva e sentì qualcosa di quasi familiare in quella fetidità. Il peggio aveva sempre questo odore, e ormai lo riconosceva."
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
console.log('Fixed "come se" in chapters 15-20');
