import { chapter1Content } from './chapter1';
import { chapter2Content } from './chapter2';
import { chapter3Content } from './chapter3';
import { chapter4Content } from './chapter4';
import { chapter5Content } from './chapter5';
import { chapter6Content } from './chapter6';
import { chapter7Content } from './chapter7';
import { chapter8Content } from './chapter8';
import { chapter9Content } from './chapter9';
import { chapter10Content } from './chapter10';
import { chapter11Content } from './chapter11';
import { chapter12Content } from './chapter12';
import { chapter13Content } from './chapter13';
import { chapter14Content } from './chapter14';
import { chapter15Content } from './chapter15';
import { chapter16Content } from './chapter16';
import { chapter17Content } from './chapter17';
import { chapter18Content } from './chapter18';
import { chapter19Content } from './chapter19';
import { chapter20Content } from './chapter20';
import { chapter21Content } from './chapter21';
import { chapter22Content } from './chapter22';
import { chapter23Content } from './chapter23';
import { chapter24Content } from './chapter24';
import { chapter25Content } from './chapter25';
import { chapter26Content } from './chapter26';
import { chapter27Content } from './chapter27';
import { chapter28Content } from './chapter28';
import { chapter29Content } from './chapter29';
import { chapter30Content } from './chapter30';
import { chapter39Content } from './chapter39';
import { chapter40Content } from './chapter40';
import { chapter41Content } from './chapter41';
import { chapter42Content } from './chapter42';
import { epilogueContent } from './epilogue';
import { synopsisContent } from './synopsis';
import { authorInfoContent } from './authorInfo';
import { backCoverContent } from './backCover';
import { copyrightContent } from './copyright';

export const volume1Data = {
  title: "OMEGA",
  subtitle: "Decadenza e Ruggine",
  author: "Thiago Volkov",
  year: 2026,
  copyright: copyrightContent,
  synopsis: synopsisContent,
  metadata: [
    { id: 'meta-copyright', title: 'Copyright', content: copyrightContent },
    { id: 'meta-index', title: 'Indice del Volume 1', content: '' }, // Contenuto generato o placeholder
    { id: 'meta-backcover', title: 'Quarta di Copertina', content: backCoverContent },
    { id: 'meta-thanks', title: 'Presentazione e Ringraziamenti', content: authorInfoContent },
  ],
  chapters: [
    { id: 'macro-cap-1', title: 'Capitolo 1 — L\'Eclissi e il Controllo', content: chapter1Content + "\n          · · ·          \n" + chapter2Content },
    { id: 'macro-cap-2', title: 'Capitolo 2 — Sotto il Perimetro', content: chapter3Content + "\n          · · ·          \n" + chapter4Content },
    { id: 'macro-cap-3', title: 'Capitolo 3 — Il Crollo Fisico', content: chapter5Content + "\n          · · ·          \n" + chapter6Content + "\n          · · ·          \n" + chapter7Content },
    { id: 'macro-cap-4', title: 'Capitolo 4 — Infiltrazione Strategica', content: chapter8Content + "\n          · · ·          \n" + chapter9Content },
    { id: 'macro-cap-5', title: 'Capitolo 5 — Il Perimetro Interno', content: chapter10Content },
    { id: 'macro-cap-6', title: 'Capitolo 6 — La Breccia', content: chapter11Content + "\n          · · ·          \n" + chapter12Content },
    { id: 'macro-cap-7', title: 'Capitolo 7 — L\'Oblio e la Rabbia', content: chapter13Content },
    { id: 'macro-cap-8', title: 'Capitolo 8 — La Torre del Miraggio', content: chapter14Content },
    { id: 'macro-cap-9', title: 'Capitolo 9 — Il Sacrificio alla Tiburtina', content: chapter15Content + "\n          · · ·          \n" + chapter16Content + "\n          · · ·          \n" + chapter17Content },
    { id: 'macro-cap-10', title: 'Capitolo 10 — Le Fiamme sui Binari', content: chapter18Content },
    { id: 'macro-cap-11', title: 'Capitolo 11 — Il Covo del Nord', content: chapter19Content },
    { id: 'macro-cap-12', title: 'Capitolo 12 — L\'Assalto alla Diga', content: chapter20Content },
    { id: 'macro-cap-13', title: 'Capitolo 13 — L\'Onda di Ritorno', content: chapter21Content },
    { id: 'macro-cap-14', title: 'Capitolo 14 — Il Fronte Analogico', content: chapter24Content },
    { id: 'macro-cap-15', title: 'Capitolo 15 — Il Trono di Silicio', content: chapter25Content },
    { id: 'macro-cap-16', title: 'Capitolo 16 — I Cacciatori di Lione', content: chapter26Content },
    { id: 'macro-cap-17', title: 'Capitolo 17 — Il Traliccio di Fourvière', content: chapter27Content },
    { id: 'macro-cap-18', title: 'Capitolo 18 — Convergenza', content: chapter28Content },
    { id: 'macro-cap-19', title: 'Capitolo 19 — I Segugi', content: chapter29Content },
    { id: 'macro-cap-20', title: 'Capitolo 20 — La Bestia Cieca', content: chapter30Content },
    { id: 'macro-cap-21', title: 'Capitolo 21 — Oltre il Limite', content: chapter21Content }, // Placeholder or filler if needed
    { id: 'macro-cap-22', title: 'Capitolo 22 — Il Rifugio di Pietra', content: chapter22Content },
    { id: 'macro-cap-23', title: 'Capitolo 23 — Il Calore del Dissenso', content: chapter23Content },
  ],
  epilogue: epilogueContent,
  authorInfo: authorInfoContent,
  backCover: backCoverContent
};
