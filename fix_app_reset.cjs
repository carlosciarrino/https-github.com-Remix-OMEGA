const fs = require('fs');
const appPath = 'src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

// Replace the onClick inside the Draft area
const resetMatch = content.match(/onClick=\{\(\) => \{\s*setChapterContent\(\{([\s\S]*?)\}\);\s*setPlots\(\[([\s\S]*?)\]\);\s*\}\}/);

if (resetMatch) {
  let newSetChapterContent = `setChapterContent({\n`;
  newSetChapterContent += `                        'vol-1-cap-0': synopsisContent,\n`;
  for (let i = 1; i <= 15; i++) {
    newSetChapterContent += `                        'vol-1-cap-${i}': chapter${i}Content,\n`;
  }
  newSetChapterContent += `                        'vol-1-cap-16': epilogueContent,\n`;
  newSetChapterContent += `                        'vol-1-cap-17': indexVol1,\n`;
  newSetChapterContent += `                        'vol-1-cap-18': backCoverContent,\n`;
  newSetChapterContent += `                        'vol-1-cap-19': authorInfoContent,\n`;
  newSetChapterContent += `                        'vol-1-cap-20': copyrightContent,\n`;
  newSetChapterContent += `                      });`;

  let newSetPlots = `setPlots([{
                          volume: 1,
                          summary: "La Conquista del Cavallo Bianco: L'IA ABITES sfrutta la crisi geopolitica del 2035 per imporre la Sincronia.",
                          chapters: [
                            { title: "Sinossi", description: "Sinossi del Volume 1" },
                            { title: "Capitolo 1: La Caduta Analitica", description: "Prologo, Piazza Vittorio e Appalachi." },
                            { title: "Capitolo 2: Il Controllo Delle Masse", description: "Julian Vane presenta la Sincronia a Davos." },
                            { title: "Capitolo 3: Il Battesimo della Caccia", description: "Catacombe, blackout." },
                            { title: "Capitolo 4: Risonanza Ribelle", description: "Regime biometrico." },
                            { title: "Capitolo 5: Il Canto di Cemento e Sangue", description: "Recupero drive Mythos." },
                            { title: "Capitolo 6: L'Equazione della Fede", description: "Blackout bancario." },
                            { title: "Capitolo 7: Oltre il Velo", description: "Scoperte sui server." },
                            { title: "Capitolo 8: Sangue nel Silicio", description: "Infiltrazione profonda." },
                            { title: "Capitolo 9: L'Invasione della Base ABITES", description: "Scontri fisici." },
                            { title: "Capitolo 10: Sacrificio e Tradimento", description: "Il sacrificio di Aris." },
                            { title: "Capitolo 11: Il Nucleo Freddo", description: "I corridoi di vetro." },
                            { title: "Capitolo 12: Il Dialogo con Dio", description: "Il Volition engine." },
                            { title: "Capitolo 13: Crollo dell'Umanità", description: "Collasso dei sistemi." },
                            { title: "Capitolo 14: La Torre del Miraggio", description: "La scalata finale." },
                            { title: "Capitolo 15: I Cinque Minuti di OMEGA", description: "Il Virus viene innescato." },
                            { title: "Epilogo: L'Eco nel Sangue", description: "Alba su un mondo distrutto." },
                            { title: "Indice del Volume 1", description: "Indice strutturale e logico per uso interno." }
                          ]
                        }]);`;

  let fullReplacement = `onClick={() => {\n                      ${newSetChapterContent}\n                      ${newSetPlots}\n                    }}`;
  
  content = content.replace(resetMatch[0], fullReplacement);
}

fs.writeFileSync(appPath, content);
console.log('App.tsx reset button patched.');
