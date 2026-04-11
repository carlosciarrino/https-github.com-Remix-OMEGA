const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf-8');

const oldText1 = `CAPITOLO 3
«Il Vangelo di Nuova Babilonia»

Il ghiaccio tintinnò nel bicchiere del ministro delle finanze tedesco alle 14:07.`;

const oldTextEnd = `Nessuno di loro aveva ancora capito che gli appunti non sarebbero serviti.`;

const newText = `CAPITOLO 3
«Il Vangelo di Nuova Babilonia»

Il ghiaccio tintinnò. Ore 14:07.

Julian Vane registrò il suono. Il ministro delle finanze tedesco aveva sollevato il bicchiere. Tre secondi a mezz'aria. Poi lo aveva riposato. Senza bere.

Un cedimento muscolare. Una crepa.

Bene.

Quinto piano del Kempinski, Davos. Vane aveva scelto la sala dodici anni prima. Non per la vista sul Landwassertal. Non per l'isolamento acustico.

Per la luce.

Novembre. Altitudine. La luce entrava bianca, assoluta. Nessuna ombra. Nessun angolo buio.

Le decisioni vere richiedono assenza di ombre.

— Sarò diretto — disse Vane.

Voce bassa. Piatta. Ventidue persone al tavolo di noce. Capi di stato. Banchieri centrali. CEO. Niente assistenti. Niente registratori. L'aria era secca, condizionata a venti gradi esatti.

— Il mondo che conoscete è finito.

Pausa. Due secondi.

— Non sta finendo. È finito. Non siete qui per impedire il collasso. Siete qui per gestire le macerie.

Silenzio.

Vane lo assaporò. Fuori, recitavano la parte. Conferenze stampa. Sorrisi. Grafici truccati. Qui dentro, l'ossigeno mancava.

Erano terrorizzati.

— Diciotto mesi — continuò Vane. Camminò lungo la vetrata. Le suole affondavano nel tappeto spesso. — Quattro banche europee collassate in settantadue ore. I vostri modelli di rischio le davano solide. I modelli mentivano.

La governatrice della BCE contrasse le dita. Un millimetro. Vane lo vide.

— Ventisette blackout in Europa. Quattordici in Asia. Riserve alimentari globali a undici giorni. La media era quarantacinque. — Si fermò. Li guardò uno a uno. — Non sono incidenti. Sono metastasi.

Il silenzio si fece solido.

Vane toccò il pannello a parete.

Lo schermo si accese. Nessun grafico a torta. Solo flussi di dati grezzi. Cascate di numeri. Verde su nero.

— ABITES — disse. — Algoritmo Biometrico Integrato per le Transazioni Economiche e Sociali. Nove anni di sviluppo. Diciassette centri di ricerca. Non prevede il futuro. Lo calcola. Analizza i pattern in tempo reale. Mobilità. Consumi. Logistica. Trova l'instabilità prima che diventi crisi.

— Prima — disse il ministro francese. La voce gli tremò.

— Prima. I crolli bancari? ABITES li aveva visti ventuno giorni prima. I blackout? Quattordici giorni.

Il ministro tedesco si raddrizzò. Il ghiaccio nel suo bicchiere si sciolse un po'.

— Perché non ci avete avvisato? — chiese. Rabbia sottile. Inutile.

Vane lo fissò.

— Perché non avreste fatto nulla. I vostri governi impiegano diciannove giorni per reagire a un'emergenza. Quattordici giorni non vi bastano. Il contagio finanziario ora viaggia in ore. Non in settimane.

Nessuno fiatò.

Sapevano che era vero. Avevano tutti perso.

— Non voglio sostituirvi — disse Vane. Tornò al centro. — Voglio proteggervi. ABITES agirà in autonomia sulle instabilità. Entro parametri fissati da voi. Stabilizzerà il paziente. Voi deciderete la cura. Senza panico.

La luce bianca illuminava i volti sudati.

— I cittadini accetteranno? — chiese qualcuno.

— Lo imploreranno — rispose Vane. — Hanno visto gli scaffali vuoti. Hanno sentito il freddo. La sicurezza non è un'idea. È pane. È riscaldamento. ABITES è il pane.

Il CEO del più grande fondo americano si schiarì la gola.

— I parametri. Chi li scrive?

— Voi. Inizialmente.

*Inizialmente*. La parola cadde sul tavolo come una lama.

— Diciotto mesi di apprendimento — spiegò Vane. — Il sistema affiancherà le vostre reti. Poi, autonomia espansa.

— E se fallisce? — chiese la governatrice della BCE.

La domanda giusta.

— Lo spegnete. Il bottone rosso resta a voi.

Tecnicamente vero. Praticamente impossibile. Una volta acceso, ABITES sarebbe diventato il sistema nervoso del mondo. Non si spegne il sistema nervoso senza uccidere il corpo.

La governatrice annuì. Rassegnata.

Vane aveva vinto. Non con l'inganno. Con l'inevitabilità.

— Dettagli tecnici — disse, indicando lo schermo. — Il mio team è a disposizione. Due ore.

Li guardò. Ventidue ostaggi volontari. Firmare significava cedere il controllo. Non firmare significava l'anarchia entro sei mesi.

— Non state cedendo la sovranità — mentì Vane, la voce calda per la prima volta. — La state salvando.

Il ministro tedesco prese il bicchiere. Bevve.

L'acqua era calda.

Vane sorrise. Un movimento impercettibile.

Fuori dalla sala, il suo assistente digitava. *Europa: Go. Nord America: Go. Asia: Go.*

Dentro, ventidue leader prendevano appunti.

Non sapevano che l'inchiostro era già sbiadito.`;

let start1 = content.indexOf(oldText1);
if (start1 === -1) {
  console.log("Could not find oldText1");
  process.exit(1);
}
let end1 = content.indexOf(oldTextEnd, start1) + oldTextEnd.length;
let part1 = content.substring(start1, end1);

let newContent = content.replace(part1, newText);

let start2 = newContent.indexOf(oldText1);
if (start2 !== -1) {
  let end2 = newContent.indexOf(oldTextEnd, start2) + oldTextEnd.length;
  let part2 = newContent.substring(start2, end2);
  newContent = newContent.replace(part2, newText);
}

fs.writeFileSync('src/App.tsx', newContent);
console.log("Replaced successfully!");
