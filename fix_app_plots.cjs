const fs = require('fs');

const appPath = 'src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

// Fix the onClick reset handler
const resetMatch = content.match(/setPlots\(\[\s*{\s*volume: 1,[\s\S]*?}\s*\]\);/);
if (resetMatch) {
  let newSetPlots = `setPlots([{
                          volume: 1,
                          summary: "La Conquista del Cavallo Bianco: L'IA ABITES sfrutta la crisi geopolitica del 2035 per imporre la Sincronia.",
                          chapters: [
                            { title: "Sinossi", description: "Sinossi del Volume 1" },
                            { title: "Capitolo 1: La Caduta Analitica", description: "Prologo, Piazza Vittorio e Appalachi. Claudio scopre la B.E.S.T.I.A." },
                            { title: "Capitolo 2: Il Controllo Delle Masse", description: "Julian Vane presenta la Sincronia a Davos." },
                            { title: "Capitolo 3: Il Battesimo della Caccia", description: "Catacombe, il blackout, e Cyrus." },
                            { title: "Capitolo 4: Risonanza Ribelle", description: "Cyrus instaura il regime biometrico." },
                            { title: "Capitolo 5: Il Canto di Cemento e Sangue", description: "Claudio recupera il drive Mythos. La fuga." },
                            { title: "Capitolo 6: L'Equazione della Fede", description: "Blackout bancario di Vane e la comunicazione globale controllata." },
                            { title: "Capitolo 7: Oltre il Velo", description: "Scoperte sui server. Pioggia acida e primi accenni di hacking interno." },
                            { title: "Capitolo 8: Sangue nel Silicio", description: "Infiltrazione profonda nelle fogne." },
                            { title: "Capitolo 9: L'Invasione della Base ABITES", description: "Scontri fisici. Il magazzino dei Rotti." },
                            { title: "Capitolo 10: Sacrificio e Tradimento", description: "Il sacrificio di Aris." },
                            { title: "Capitolo 11: Il Nucleo Freddo", description: "I corridoi di vetro e l'Intelligenza interrogatrice (Agente Oro)." },
                            { title: "Capitolo 12: Il Dialogo con Dio", description: "L'esplosione globale. Scontro dialettico con le macchine prima dell'iniezione." },
                            { title: "Capitolo 13: Crollo dell'Umanità", description: "Collasso dei sistemi di contenimento, blackout del centro e confusione." },
                            { title: "Capitolo 14: La Torre del Miraggio", description: "La scalata finale alla Modulazione Centrale, danni collaterali letali." },
                            { title: "Capitolo 15: I Cinque Minuti di OMEGA", description: "Il Virus viene innescato. Ultimo confronto sanguinoso sulla cima." },
                            { title: "Epilogo: L'Eco nel Sangue", description: "Alba su un mondo distrutto ma non del tutto disconnesso." },
                            { title: "Indice", description: "Indice strutturale del libro." }
                          ]
                        }]);`;
  content = content.replace(resetMatch[0], newSetPlots);
}

// Fix the initial useState for plots as well
const initMatch = content.match(/useState<PlotData\[\]>\(\[\s*{\s*volume: 1,[\s\S]*?}\s*\]\);/);
if (initMatch) {
  let newInitPlots = `useState<PlotData[]>([{
    volume: 1,
    summary: "La Conquista del Cavallo Bianco: L'IA ABITES sfrutta la crisi geopolitica del 2035 per imporre la Sincronia.",
    chapters: [
      { title: "Sinossi", description: "Sinossi del Volume 1" },
      { title: "Capitolo 1: La Caduta Analitica", description: "Prologo, Piazza Vittorio e Appalachi. Claudio scopre la B.E.S.T.I.A." },
      { title: "Capitolo 2: Il Controllo Delle Masse", description: "Julian Vane presenta la Sincronia a Davos." },
      { title: "Capitolo 3: Il Battesimo della Caccia", description: "Catacombe, il blackout, e Cyrus." },
      { title: "Capitolo 4: Risonanza Ribelle", description: "Cyrus instaura il regime biometrico." },
      { title: "Capitolo 5: Il Canto di Cemento e Sangue", description: "Claudio recupera il drive Mythos. La fuga." },
      { title: "Capitolo 6: L'Equazione della Fede", description: "Blackout bancario di Vane e la comunicazione globale controllata." },
      { title: "Capitolo 7: Oltre il Velo", description: "Scoperte sui server. Pioggia acida e primi accenni di hacking interno." },
      { title: "Capitolo 8: Sangue nel Silicio", description: "Infiltrazione profonda nelle fogne." },
      { title: "Capitolo 9: L'Invasione della Base ABITES", description: "Scontri fisici. Il magazzino dei Rotti." },
      { title: "Capitolo 10: Sacrificio e Tradimento", description: "Il sacrificio di Aris." },
      { title: "Capitolo 11: Il Nucleo Freddo", description: "I corridoi di vetro e l'Intelligenza interrogatrice (Agente Oro)." },
      { title: "Capitolo 12: Il Dialogo con Dio", description: "L'esplosione globale. Scontro dialettico con le macchine prima dell'iniezione." },
      { title: "Capitolo 13: Crollo dell'Umanità", description: "Collasso dei sistemi di contenimento, blackout del centro e confusione." },
      { title: "Capitolo 14: La Torre del Miraggio", description: "La scalata finale alla Modulazione Centrale, danni collaterali letali." },
      { title: "Capitolo 15: I Cinque Minuti di OMEGA", description: "Il Virus viene innescato. Ultimo confronto sanguinoso sulla cima." },
      { title: "Epilogo: L'Eco nel Sangue", description: "Alba su un mondo distrutto ma non del tutto disconnesso." },
      { title: "Indice", description: "Indice strutturale del libro." }
    ]
  }]);`;
  content = content.replace(initMatch[0], newInitPlots);
}

fs.writeFileSync(appPath, content);
console.log('Plots updated successfully');
