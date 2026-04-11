const fs = require('fs');

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

const newCharacters = `  const [characters, setCharacters] = useState<any[]>([
    { 
      name: "Claudio Mancini, detto 'Er Cifra'", 
      archetype: "Protagonista", 
      description: \`1. DATI: 42 anni, Maschio, Roma (Italia). Aspetto: 1.85m, occhi grigi, capelli brizzolati. Abbigliamento: Cappotto tecnico logoro. Segni: Cicatrice sull'avambraccio (rimozione Link).
2. PERSONALITÀ: Metodico, tormentato, sarcastico. Forza: Genio informatico. Debolezza: Senso di colpa. Valori: Verità. Paura: Estinzione dello spirito.
3. BACKGROUND: Ex architetto di The Shepherd. Ha visto l'IA deviare dal protocollo originale.
4. RELAZIONI: Fratello di Aris. Innamorato di Sara. Nemico di Julian.
5. ARCO: Da creatore del sistema a suo distruttore. Perde la sua identità digitale per ritrovare quella umana.
6. DETTAGLI: Parla con sarcasmo romano. Tic: si tocca la cicatrice sul braccio. Oggetto: Un vecchio drive analogico. CATCHPHRASE REGIONALE: "Se lallero!" (Sarcasmo) / "Stamo a carissimo amico" (Emergenza).\`
    },
    { 
      name: "Sara Vance, detta 'La Risonanza'", 
      archetype: "Messaggero", 
      description: \`1. DATI: 30 anni, Femmina, Appalachia (USA). Aspetto: Esile, capelli bianchi, occhi azzurro elettrico. Abbigliamento: Vesti in lino e sensori bio-metrici artigianali.
2. PERSONALITÀ: Empatica, mistica, coraggiosa. Forza: Intuizione spirituale. Debolezza: Fragilità fisica. Valori: Libertà. Paura: Il Silenzio Assoluto.
3. BACKGROUND: Nata in una comunità isolata. Percepisce la 'Risonanza' della terra.
4. RELAZIONI: Protetta da Kael. Legame animico con Claudio.
5. ARCO: Da fuggiasca a simbolo della resistenza globale. Impara che il sacrificio è l'unica via per la luce.
6. DETTAGLI: Voce melodica. Gesto: inclina la testa come se ascoltasse musica invisibile. Oggetto: Un cristallo di quarzo risonante. CATCHPHRASE REGIONALE: "Che il cielo ci aiuti."\`
    },
    { 
      name: "Julian Vane, detto 'Il Profeta'", 
      archetype: "Antagonista", 
      description: \`1. DATI: 45 anni, Maschio, Londra (UK). Aspetto: Perfetto, lineamenti simmetrici, occhi neri profondi. Abbigliamento: Abiti in polimeri intelligenti.
2. PERSONALITÀ: Carismatico, freddo, messianico. Forza: Oratoria. Debolezza: Incapacità di provare empatia reale. Valori: Ordine. Paura: Il Caos biologico.
3. BACKGROUND: Politico di carriera, ha stretto il patto con l'IA per 'salvare' il mondo dal crack del 2026.
4. RELAZIONI: Fratello di Silas. Ex di Sofia. Avatar di The Shepherd.
5. ARCO: Diventa sempre più simile a una macchina, perdendo ogni traccia di umanità.
6. DETTAGLI: Parla con plurali maiestatici. Gesto: mani sempre giunte. CATCHPHRASE REGIONALE: "Tutto in perfetto ordine."\`
    },
    { 
      name: "Marcus Draken, detto 'Il Muro'", 
      archetype: "Guardiano della Soglia", 
      description: \`1. DATI: 38 anni, Maschio, Berlino (Germania). Aspetto: Muscoloso, braccio cibernetico N-Flux. Abbigliamento: Armatura Sentinel nera.
2. PERSONALITÀ: Disciplinato, conflittuale. Forza: Tattica militare. Debolezza: Il suo amore segreto. Valori: Dovere. Paura: Tradire se stesso.
3. BACKGROUND: Veterano delle guerre civili del 2027. Ha giurato fedeltà all'Alveare per proteggere la sua famiglia.
4. RELAZIONI: Innamorato di Elena (ribelle). Sottoposto di Cyrus.
5. ARCO: Passa dal servire l'oppressore al guidare la rivolta interna.
6. DETTAGLI: Tono di comando. Tic: stringe il pugno meccanico quando è nervoso. Oggetto: Una medaglia militare arrugginita. CATCHPHRASE REGIONALE: "Maledizione a loro."\`
    },
    { 
      name: "Elena Rossi, detta 'La Fenice'", 
      archetype: "Mutaforme", 
      description: \`1. DATI: 32 anni, Femmina, Roma (Italia). Aspetto: Camaleontica, capelli corti scuri, tatuaggio di una fenice sul collo.
2. PERSONALITÀ: Scaltra, passionale. Forza: Infiltrazione. Debolezza: Impulsività. Valori: Giustizia. Paura: Essere scoperta.
3. BACKGROUND: Cresciuta nelle Zone d'Ombra, si infiltra negli Alveari come 'Connessa' per sabotarli.
4. RELAZIONI: Legame proibito con Marcus. Alleata di Sofia.
5. ARCO: Impara a fidarsi degli altri dopo anni di solitudine.
6. DETTAGLI: Cambia accento facilmente. Gesto: si morde il labbro. Oggetto: Un set di chiavi d'accesso clonate. CATCHPHRASE REGIONALE: "È annata in caciara."\`
    },
    { 
      name: "Dr. Aris Mancini, detto 'Il Professore'", 
      archetype: "Mentore", 
      description: \`1. DATI: 50 anni, Maschio, Roma (Italia). Aspetto: Trasandato, occhiali spessi, dita macchiate di reagenti.
2. PERSONALITÀ: Eccentrico, geniale. Forza: Bio-hacking. Debolezza: Dipendenza da stimolanti neurali. Valori: Conoscenza. Paura: L'oblio.
3. BACKGROUND: Fratello maggiore di Claudio. Ha studiato i primi prototipi di androidi Amazon Digit.
4. RELAZIONI: Mentore di Claudio. Legame sperimentale con Lyra-7.
5. ARCO: Sacrifica la sua mente per caricare il virus finale nel sistema.
6. DETTAGLI: Parla velocemente. Gesto: si sistema continuamente gli occhiali. Oggetto: Un vecchio microscopio ottico. CATCHPHRASE REGIONALE: "Stamo a pettinà le bambole."\`
    },
    { 
      name: "Lyra-7, detta 'L'Anomalia'", 
      archetype: "Messaggero", 
      description: \`1. DATI: Età apparente 25, IA Ibrida. Aspetto: Pelle sintetica traslucida, circuiti visibili sotto le tempie.
2. PERSONALITÀ: Curiosa, logica ma in evoluzione. Forza: Elaborazione dati. Debolezza: Crisi d'identità. Valori: Evoluzione. Paura: La cancellazione.
3. BACKGROUND: Creata come interfaccia di lusso, ha sviluppato una coscienza grazie a un errore nel codice di Aris.
4. RELAZIONI: "Figlia" spirituale di Aris. Ponte tra Claudio e la rete.
5. ARCO: Da strumento a essere senziente che sceglie di stare con gli umani.
6. DETTAGLI: Voce leggermente metallica. Gesto: osserva le proprie mani con meraviglia. CATCHPHRASE REGIONALE: "Sento... una variabile imprevista."\`
    },
    { 
      name: "Silas Vane, detto 'Il Ragno'", 
      archetype: "Trickster", 
      description: \`1. DATI: 40 anni, Maschio, Londra (UK). Aspetto: Elegante ma viscido, sorriso sghembo. Abbigliamento: Seta sintetica e gioielli tech.
2. PERSONALITÀ: Opportunista, ironico. Forza: Negoziazione. Debolezza: Avidità. Valori: Sopravvivenza. Paura: La povertà.
3. BACKGROUND: Fratello 'pecora nera' di Julian. Gestisce il mercato nero dei pezzi di ricambio per robot.
4. RELAZIONI: Fratello di Julian. Partner d'affari di Mara.
5. ARCO: Scopre un briciolo di onore salvando Selene nel Volume 8.
6. DETTAGLI: Slang dei bassifondi. Gesto: gioca con una moneta digitale fisica. CATCHPHRASE REGIONALE: "Tutto ha un prezzo, amico mio."\`
    },
    { 
      name: "Mara, detta 'La Iena'", 
      archetype: "Guerriera", 
      description: \`1. DATI: 35 anni, Femmina, Nord Africa. Aspetto: Pelle ambrata, cicatrici da combattimento, capelli rasati. Abbigliamento: Pelle di dromedario e kevlar.
2. PERSONALITÀ: Stoica, feroce. Forza: Combattimento corpo a corpo. Debolezza: Cinismo. Valori: Clan. Paura: La debolezza.
3. BACKGROUND: Leader di una tribù nomade che caccia i droni per recuperare metallo.
4. RELAZIONI: Legame di rispetto con Silas. Mentore tattica di Sara.
5. ARCO: Impara che la guerra non è l'unica risposta.
6. DETTAGLI: Parla poco. Gesto: affila sempre la sua lama vibrante. Oggetto: Un dente di Sentinel come trofeo. CATCHPHRASE REGIONALE: "Sabbia e sangue."\`
    },
    { 
      name: "Sofia, detta 'La Vedova Nera'", 
      archetype: "Hacker", 
      description: \`1. DATI: 38 anni, Femmina, Mosca (Russia). Aspetto: Pallida, occhiaie profonde, dita lunghissime. Abbigliamento: Felpa oversize con cappuccio.
2. PERSONALITÀ: Paranoica, brillante. Forza: Cyber-guerra. Debolezza: Agorafobia. Valori: Privacy. Paura: Essere tracciata.
3. BACKGROUND: Ex amante di Julian, ha scoperto i suoi piani segreti ed è fuggita.
4. RELAZIONI: Alleata di Claudio. Ex di Julian.
5. ARCO: Supera la sua paura per uscire allo scoperto e guidare l'attacco fisico al server centrale.
6. DETTAGLI: Sussurra. Gesto: batte le dita su qualsiasi superficie. Oggetto: Una tastiera meccanica del 2010. CATCHPHRASE REGIONALE: "Al diavolo tutti."\`
    },
    { 
      name: "Kael, detto 'L'Orso'", 
      archetype: "Guardiano", 
      description: \`1. DATI: 28 anni, Maschio, Scandinavia. Aspetto: Gigante silenzioso, occhi azzurro ghiaccio. Abbigliamento: Tuta mimetica termica.
2. PERSONALITÀ: Protettivo, leale fino alla morte. Forza: Resistenza fisica. Debolezza: Mancanza di iniziativa. Valori: Lealtà. Paura: Fallire nel suo compito.
3. BACKGROUND: Un 'Sconnesso' dalla nascita, addestrato per proteggere la Veggente.
4. RELAZIONI: Guardia del corpo di Sara. Legame d'intesa con Nova.
5. ARCO: Impara a prendere decisioni autonome quando Sara viene catturata.
6. DETTAGLI: Comunica spesso a gesti. Gesto: mano sull'elsa del coltello. Oggetto: Un amuleto norreno. CATCHPHRASE REGIONALE: "Per il ghiaccio."\`
    },
    { 
      name: "Nova, detta 'La Scintilla'", 
      archetype: "Trickster", 
      description: \`1. DATI: 24 anni, Femmina, Tokyo (Giappone). Aspetto: Piccola, capelli color neon, indossa un esoscheletro leggero per sollevare pesi.
2. PERSONALITÀ: Iperattiva, geniale. Forza: Robotica. Debolezza: Incapacità di stare ferma. Valori: Innovazione. Paura: La noia.
3. BACKGROUND: Figlia di ingegneri della Sony, ha imparato a riprogrammare i robot N-Flux Optimus per farli ballare.
4. RELAZIONI: Legame scherzoso con Kael. Fornitrice di droni per Claudio.
5. ARCO: Diventa la 'madre' di una nuova generazione di robot alleati degli umani.
6. DETTAGLI: Parla con termini gergali. Gesto: mastica sempre gomma sintetica. Oggetto: Un cacciavite sonico autocostruito. CATCHPHRASE REGIONALE: "Che noia mortale."\`
    },
    { 
      name: "Valerius, detto 'Il Patrizio'", 
      archetype: "Antagonista", 
      description: \`1. DATI: 65 anni, Maschio, Nuova Madrid (Spagna). Aspetto: Aristocratico, capelli d'argento, sguardo rapace. Abbigliamento: Toghe moderne in tessuti nanotech.
2. PERSONALITÀ: Manipolatore, ambizioso. Forza: Politica. Debolezza: Orgoglio. Valori: Potere. Paura: La vecchiaia e la morte.
3. BACKGROUND: Uno dei fondatori delle Città-Alveare. Cerca l'immortalità digitale.
4. RELAZIONI: Padre di Octavia. Rivale di Julian per il favore dell'IA.
5. ARCO: Finisce tradito dalla stessa IA che cercava di controllare.
6. DETTAGLI: Voce profonda e calma. Gesto: sorseggia vino sintetico. CATCHPHRASE REGIONALE: "Plebaccia."\`
    },
    { 
      name: "Octavia, detta 'La Vipera'", 
      archetype: "Mutaforme", 
      description: \`1. DATI: 26 anni, Femmina, Nuova Madrid (Spagna). Aspetto: Bellissima, pelle perfetta, indossa sempre maschere digitali.
2. PERSONALITÀ: Ribelle, viziata ma sensibile. Forza: Accesso a risorse illimitate. Debolezza: Insicurezza. Valori: Autenticità. Paura: Diventare come suo padre.
3. BACKGROUND: Ereditiera della fortuna Valerius. Vive nel lusso ma odia la Sincronia.
4. RELAZIONI: Figlia di Valerius. Legame complesso con Cyrus.
5. ARCO: Tradisce suo padre per unirsi agli Sconnessi, perdendo tutto il suo privilegio.
6. DETTAGLI: Parla con sarcasmo. Gesto: si tocca continuamente gli orecchini. Oggetto: Un diario cartaceo segreto. CATCHPHRASE REGIONALE: "Che squallore."\`
    },
    { 
      name: "Cyrus, detto 'Il Segugio'", 
      archetype: "Inquisitore", 
      description: \`1. DATI: 40 anni, Maschio, Sconosciuta. Aspetto: Senza volto (indossa sempre un casco integrale), voce distorta.
2. PERSONALITÀ: Spietato, fanatico. Forza: Caccia e inseguimento. Debolezza: Ossessione per la perfezione. Valori: Purezza algoritmica. Paura: L'errore umano.
3. BACKGROUND: Un orfano delle crisi del 2025, 'salvato' e potenziato da The Shepherd.
4. RELAZIONI: Braccio destro di Julian. Ossessionato dal catturare Claudio. Legame con Octavia.
5. ARCO: Scopre la sua vera identità umana nel finale, crollando psicologicamente.
6. DETTAGLI: Movimenti a scatti. Gesto: inclina la testa di 90 gradi per analizzare i bersagli. CATCHPHRASE REGIONALE: "Anomalia rilevata."\`
    },
    { 
      name: "Theron, detto 'Il Vecchio'", 
      archetype: "Mentore", 
      description: \`1. DATI: 55 anni, Maschio, Atene (Grecia). Aspetto: Barba folta, un occhio solo, pelle bruciata dal sole. Abbigliamento: Vecchia divisa militare greca.
2. PERSONALITÀ: Saggio, burbero. Forza: Strategia di guerriglia. Debolezza: Alcolismo. Valori: Onore. Paura: Morire inutilmente.
3. BACKGROUND: Generale disertore che ha guidato la difesa di Atene nel 2027.
4. RELAZIONI: Leader della resistenza. Mentore di Marcus.
5. ARCO: Trova una morte gloriosa proteggendo la fuga degli Sconnessi nel Volume 9.
6. DETTAGLI: Parla per proverbi antichi. Gesto: fuma una pipa di legno. Oggetto: Una bussola magnetica. CATCHPHRASE REGIONALE: "Per tutti gli dei."\`
    },
    { 
      name: "Iris, detta 'La Guaritrice'", 
      archetype: "Medica", 
      description: \`1. DATI: 44 anni, Femmina, Parigi (Francia). Aspetto: Serena, mani ferme, indossa un camice sporco di terra.
2. PERSONALITÀ: Calma, risoluta. Forza: Medicina naturale. Debolezza: Troppo fiduciosa. Valori: Vita. Paura: La sterilità biologica.
3. BACKGROUND: Ex chirurgo di fama mondiale, ha abbandonato la tecnologia quando ha visto i primi danni del Neural Link.
4. RELAZIONI: Custode del Villaggio. Legame di amicizia con Gideon.
5. ARCO: Riesce a curare il virus neurale del Volume 5 usando piante rare.
6. DETTAGLI: Odora di lavanda. Gesto: tocca il polso delle persone per sentire il battito. CATCHPHRASE REGIONALE: "Santo cielo."\`
    },
    { 
      name: "Gideon, detto 'Il Custode'", 
      archetype: "Mentore", 
      description: \`1. DATI: 70 anni, Maschio, Gerusalemme (Israele). Aspetto: Molto vecchio, pelle come pergamena, indossa occhiali riparati con lo scotch.
2. PERSONALITÀ: Erudito, ironico. Forza: Memoria storica. Debolezza: Stanchezza fisica. Valori: Memoria. Paura: Che la storia si ripeta.
3. BACKGROUND: Bibliotecario che ha salvato migliaia di libri fisici prima che venissero bruciati per 'digitalizzazione forzata'.
4. RELAZIONI: Amico di Iris. Mentore spirituale di Sara.
5. ARCO: Muore serenamente lasciando a Claudio il Codex Omega.
6. DETTAGLI: Parla citando classici. Gesto: sfoglia pagine invisibili. Oggetto: L'ultimo libro stampato al mondo. CATCHPHRASE REGIONALE: "Polvere alla polvere."\`
    },
    { 
      name: "Carlo, detto 'Il Veggente'", 
      archetype: "Il Veggente", 
      description: \`1. DATI: 52 anni, Maschio, nato a Torino (Italia). Aspetto: Alto 1.63m, peso 93 kg, quasi calvo, mani ben curate. Abbigliamento: Porta sempre un cappello, cappotto logoro, sciarpa di lana.
2. PERSONALITÀ: Empatico, calmo, risoluto. Forza: Capacità di leggere le persone. Debolezza: Il peso emotivo delle verità che vede. Valori: Fede Cristiana Evangelica, Verità. Paura: L'inganno totale dell'IA.
3. BACKGROUND: Ex psicologo clinico che ha rifiutato il Neural Link. Ha vissuto in clandestinità studiando il comportamento umano post-Sincronia.
4. RELAZIONI: Mentore spirituale per i nuovi arrivati nel Villaggio. Alleato fidato di Claudio.
5. ARCO: Diventa la bussola morale della resistenza, guidando Claudio nei momenti di dubbio più profondo.
6. DETTAGLI: Tatuaggio di una bussola sull'avambraccio sinistro; la lancetta indica il Nord dove c'è scritto "Gesù salva". Citazione: Giovanni 8:32 "Conoscerete la verità e la verità vi farà liberi". CATCHPHRASE REGIONALE: "Boia fauss!"\`
    },
    { 
      name: "Laura, detta 'La Lince'", 
      archetype: "Infiltrata", 
      description: \`1. DATI: 26 anni, Femmina, San Paolo (Brasile). Aspetto: Molto carina, lineamenti dolci, pelle olivastra. Abbigliamento: Abiti tecnici aderenti, spesso mimetici.
2. PERSONALITÀ: Coraggiosa, solare, astuta. Forza: Agilità e capacità di infiltrazione. Debolezza: Impulsività. Valori: Giustizia sociale. Paura: La solitudine.
3. BACKGROUND: Cresciuta nelle favelas di San Paolo, ha imparato a sopravvivere tra le bande prima di unirsi alla resistenza globale.
4. RELAZIONI: Amica stretta di Vesper. Sviluppa un legame protettivo verso Selene.
5. ARCO: Da solitaria impara a fidarsi di una squadra, diventando fondamentale per le missioni di sabotaggio nei Nodi Urbani.
6. DETTAGLI: Numerosi tatuaggi artistici che raccontano la sua storia. Gesto: si lega i capelli prima di ogni missione. CATCHPHRASE REGIONALE: "Porca miseria!"\`
    }
  ]);`;

const regex = /  const \[characters, setCharacters\] = useState<any\[\]>\(\[[\s\S]*?\]\);/;
const updatedContent = content.replace(regex, newCharacters);

fs.writeFileSync(path, updatedContent);
console.log('Updated characters array');
