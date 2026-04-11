const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf-8');

const oldText = `CAPITOLO 2
«Risonanza di Terra e Sangue»

Iniziò con le api.

Sara se ne accorse raccogliendo la legna. Le api selvatiche nel castagno accanto al portico avevano smesso di uscire. Non un calo graduale, come prima di un temporale. Un'interruzione netta. Un momento il ronzio riempiva l'aria, il momento dopo c'era solo silenzio. Un silenzio innaturale.

Si fermò. Il tronco a mezz'aria.

Ascoltò.

Gli Appalachi in novembre avevano una voce precisa. Ghiaccio sottile. Querce che scricchiolavano. Sara conosceva quel bosco. Ogni variazione arrivava prima al corpo che alla mente.

C'era qualcosa di sbagliato.

Non era assenza di suono. Era una presenza. Una frequenza subsonora. Non la sentiva con le orecchie, ma con i denti. Nello sterno. Come l'aria elettrica sotto un traliccio dell'alta tensione.

Posò il tronco.

Entrò nel rifugio.`;

const newText = `CAPITOLO 2
«Risonanza di Terra e Sangue»

Iniziò con le api.

Sara si bloccò. Il tronco a mezz'aria.

Il ronzio nel castagno era sparito. Non un calo. Un'interruzione netta. Un momento prima il suono. Poi, il vuoto.

Ascoltò.

Gli Appalachi a novembre hanno una voce precisa. Ghiaccio. Legno che scricchiola. Sara conosceva quel bosco meglio del proprio respiro.

C'era qualcosa di sbagliato.

Non era assenza di suono. Era una presenza. Una frequenza subsonora. La sentiva nei denti. Nello sterno. Come l'aria elettrica sotto un traliccio ad alta tensione.

Posò il tronco.

Entrò nel rifugio.`;

// Replace all occurrences
let newContent = content;
while (newContent.includes(oldText)) {
  newContent = newContent.replace(oldText, newText);
}

fs.writeFileSync('src/App.tsx', newContent);
console.log("Replaced successfully!");
