export const chapter24 = `
Capitolo 24 — La Rete a Strascico
PARTE I — L'ANOMALIA
La breccia durava undici secondi.
Cyrus la guardò sui monitor senza muoversi dalla posizione in cui si trovava — in piedi, le braccia lungo i fianchi, a un metro e mezzo dalla parete di schermi che occupava l'intera facciata nord della sala operativa. Undici secondi in cui il perimetro di contenimento aveva smesso di esistere in un segmento di quarantadue metri nella sezione sud-ovest, con una propagazione da sinistra a destra che aveva seguito esattamente la sequenza di disattivazione dei nodi.
Non una sequenza casuale. Una sequenza progettata.
La sala operativa del centro di Milano era lunga trenta metri e larga dodici, con un soffitto alto sei metri che ospitava l'impianto di raffreddamento — tubi grigi, isolamento bianco, ventole che giravano a velocità costante e producevano un flusso d'aria fredda che scendeva verticalmente sulle postazioni di lavoro. La temperatura era mantenuta a sedici gradi. Ogni postazione aveva due monitor, una tastiera, un operatore in turno di dodici ore. Adesso erano le tre e undici del mattino e metà degli operatori stava fissando la stessa sezione di mappa che fissava Cyrus.
Nessuno disse niente.
Cyrus si avvicinò al monitor centrale e ingrandì la sezione della breccia. Il sistema aveva già registrato la sequenza di riavvio dei nodi e la stava analizzando — i tempi di risposta, l'ordine di propagazione, la durata della finestra. Cyrus lesse i parametri senza usare la funzione di analisi automatica. Non ne aveva bisogno.
Lethe. Conosceva il nome perché era nel codice sorgente che aveva letto quando gli avevano dato accesso ai layer più profondi del Volition Engine sei mesi prima. Un sottoprotocollo di emergenza, documentato in tre righe di commento nel codice originale di Ferretti, classificato come misura teorica e non operativa. Mai testato in ambiente reale. Mai usato.
Fino a undici secondi prima.
Quello che il sistema non poteva sapere — quello che nessun algoritmo di analisi avrebbe estratto dal log del riavvio — era la ragione per cui Lethe funzionava in quel modo specifico. Cyrus la conosceva perché aveva letto il file di Ferretti dall'inizio alla fine e aveva capito come pensava. Ferretti costruiva i failsafe partendo dal presupposto che il sistema principale fosse già compromesso. Costruiva le uscite di emergenza usando la struttura del sistema contro se stessa — non sfondando i muri, ma chiedendo ai muri di aprirsi e poi di dimenticare di averlo fatto.
Era elegante. Era anche una firma perfetta.
Cyrus aprì una finestra di analisi topografica sulla sezione sud-ovest del perimetro e iniziò a lavorare.
PARTE II — LA TRAPPOLA
Il canale aperto verso Müller si aprì alle 03:14.
«Cyrus.» La voce del Generale era piatta, con una qualità che indicava che era sveglio da ore e che non era la stanchezza a rendere la voce così. «Il perimetro ha ceduto.»
«Per undici secondi. È già richiuso.»
«È entrato.»
«Sì.»
Il respiro di Müller sul canale — controllato, nasale, l'aria forzata a fatica attraverso i denti serrati. «Voglio squadre di terra nella zona della breccia entro—»
«No.»
Il canale rimase aperto. L'assenza di voce di Müller pesò sulla linea, una pressione fisica che non cambiò niente nella postura di Cyrus o nel suo tono quando riprese a parlare.
«Lethe non è una via d'ingresso,» disse Cyrus. «È una firma. Ferretti ha usato un protocollo che lui stesso ha scritto, con parametri che conosco perché li ho studiati. So da dove è entrato. So la direzione di fuga probabile nel raggio di duecento metri dal punto di breccia.» Fece scorrere la mappa sulla schermata davanti a lui e ingrandì la zona. «Se mandiamo squadre di terra adesso, lui le vede arrivare e cambia direzione. Perdono la firma e lo perdiamo.»
«Allora cosa proponi.»
«I droni mantengono il pattern di griglia sopra la zona di breccia per altri trenta minuti. Non cercano — simulano un pattern di ricerca attivo. Nel frattempo uso i dati topografici per identificare dove si è nascosto.»
Müller non rispose subito. Sul monitor, la mappa mostrava i droni in griglia — puntini bianchi che si muovevano in strisce parallele sopra la periferia sud di Milano, regolari, metodici, alla ricerca di un obiettivo che non trovavano.
«Tienimi aggiornato,» disse Müller, e il canale si chiuse.
Cyrus non si mosse dalla posizione davanti ai monitor. Un operatore alla sua sinistra stava per dirgli qualcosa — aprì la bocca, poi la richiuse quando Cyrus spostò lo sguardo verso di lui senza girare la testa, solo con gli occhi, e l'operatore tornò al proprio schermo.
PARTE III — IL SOTTOSUOLO
La topografia del settore era sul monitor in quaranta secondi.
Cyrus sovrapppose tre livelli di dati: la mappa stradale della periferia sud, la rete fognaria del comune di Milano aggiornata al 2019 — l'ultimo anno in cui le mappe erano state rese disponibili prima che ABITES assorbisse la gestione delle infrastrutture urbane — e il registro delle ispezioni tecniche dei tombini nel raggio di mezzo chilometro dal punto di breccia.
Il tombino era su Via Savona, sezione C. L'ultimo dato di ispezione registrava il coperchio come «parzialmente disallineato, intervento non urgente». Data: sette mesi prima. Nessun intervento successivo.
Un coperchio parzialmente disallineato era abbastanza da permettere a qualcuno di infilare le dita nel gap e sollevarlo senza attrezzi, in tempo reale, sotto la pioggia, con i droni in sorvolo.
Cyrus aprì la rete fognaria del settore e la analizzò per direzione di flusso. Il collettore principale che serviva quella sezione correva in direzione est-nordest — verso il centro della città, verso il centro operativo. La direzione logica per qualcuno che voleva avvicinarsi al bersaglio usando la copertura del sottosuolo.
La rete fognaria del settore aveva quattro paratie di controllo del flusso, installate nel 2018 come parte di un progetto di gestione delle acque meteoriche. Paratie automatizzate, collegate al sistema di controllo idrico comunale. Che adesso era gestito da ABITES.
Cyrus aprì il pannello di controllo idrico del settore.
Le quattro paratie erano visibili come icone verdi sulla mappa — aperte, in posizione standard. Cyrus le selezionò tutte e quattro e aprì la finestra di comando. Poi si fermò un momento. Rilesse la sequenza sul monitor. Se chiudeva le paratie in ordine sbagliato, il flusso trovava vie alternative e il risultato era imprevedibile. Doveva chiuderle a partire dalla più lontana dal punto di ingresso, lavorando verso il centro.
Cominciò dalla parata quattro.
Il comando impiegò tre secondi a propagarsi al sistema di controllo e altri sei a tradursi nell'azione meccanica della paratia. Sul monitor, l'icona passò da verde a rossa. Poi la tre. Poi la due. Poi la uno — quella più vicina al tombino di Via Savona, quella che chiudeva la via di ritorno.
Con le quattro paratie chiuse, l'acqua meteorica che continuava ad affluire nella rete — la pioggia non aveva smesso — non aveva più dove andare. Si accumulava nei collettori. Il livello saliva.
Cyrus aprì un monitor secondario che mostrava i sensori di livello idrico nei collettori del settore. I valori erano già in movimento — lentamente, qualche centimetro per minuto, ma in modo continuo e misurabile.
PARTE IV — L'ATTESA
La sala operativa respirava nel suo ritmo notturno.
Le ventole del soffitto giravano. Gli operatori digitavano a intervalli irregolari. Il monitor centrale mostrava la mappa del perimetro con i droni in griglia e i sensori idrici con i valori che salivano — due display paralleli, due progressioni che andavano nella stessa direzione ma a velocità diverse.
Cyrus rimase in piedi davanti ai monitor.
Sul display idrico, il collettore principale aveva già guadagnato ventidue centimetri dal momento in cui le paratie erano state chiuse. Il ritmo di accumulo dipendeva dall'intensità della pioggia in superficie — che non mostrava segni di diminuzione, secondo i dati meteorologici integrati nel sistema. A quella velocità, il livello nel collettore principale avrebbe raggiunto il metro e venti in poco più di un'ora. A un metro e venti, un essere umano in piedi poteva ancora muoversi, ma ogni cosa che portava con sé — zaino, attrezzatura, qualsiasi oggetto che non poteva bagnare — diventava un problema. A un metro e ottanta, la fisica decideva al posto delle intenzioni.
Ferretti aveva due scelte, entrambe visibili sui monitor davanti a Cyrus: restare nel condotto finché l'acqua non lo costringeva a emergere, o emergere autonomamente prima che il livello diventasse critico. In entrambi i casi emergeva. La domanda era solo dove e quando.
La rete fognaria del settore aveva sedici uscite in superficie — tombini, griglie di scarico, accessi tecnici. Cyrus aveva già selezionato i sette con la posizione più favorevole rispetto alla topografia e alle linee di fuga logiche verso il centro operativo, e aveva riposizionato i droni in modo da coprire tutti e sette senza rendere la copertura ovvia. Non erano in griglia adesso — erano in posizioni apparentemente casuali, distribuite sull'area, che a uno sguardo non esperto non avrebbero rivelato nessuna logica. La logica c'era, ma era invisibile a meno di non sapere già cosa stava coprendo.
Ferretti sapeva leggere i pattern dei droni. Era stata una delle sue specializzazioni originali — aveva progettato i protocolli di sorveglianza aerea del sistema. Poteva guardare una distribuzione di droni e identificare il pattern sottostante.
Cyrus aveva tenuto conto anche di questo, e aveva introdotto una variazione casuale nelle posizioni — abbastanza da rendere il pattern non immediatamente decodificabile, non abbastanza da renderlo efficacemente casuale. Ferretti avrebbe visto qualcosa di irregolare ma non avrebbe avuto il tempo di analizzarlo completamente prima di dover scegliere un'uscita.
Sul monitor, il livello del collettore principale segnava quarantaquattro centimetri.
Un operatore alla postazione tre si girò verso Cyrus. «Segnale termico debole nel collettore C, sezione est. Potrebbe essere—»
«È la variazione termica dell'acqua che si accumula. Non è biologico.» Cyrus non aveva guardato il monitor dell'operatore. Aveva già visto lo stesso dato sul suo schermo e aveva già calcolato l'origine. «Continuate a monitorare i tombini di uscita.»
L'operatore si girò verso il suo monitor.
Cyrus pensò a Ferretti nel buio del condotto — l'acqua che saliva intorno alle caviglie, poi ai polmoni, il polso ustionato che la temperatura dell'acqua avrebbe reso più acuto, il drive che cercava di tenere fuori dal livello crescente. Pensò a come Ferretti stava leggendo la situazione in quel preciso momento — il lettore modificato che gli mostrava i droni in superficie, la pressione dell'acqua che cresceva alle gambe, la necessità di una decisione da prendere con dati incompleti e tempo che si consumava.
Ferretti era un problema architetturale — aveva costruito un sistema con un difetto strutturale, e quel difetto si chiamava Radice, e finché il difetto esisteva il sistema non era integro. Cyrus correggeva i difetti strutturali. Era quello per cui era lì.
Il monitor idrico segnò cinquantotto centimetri.
I droni in superficie mantenevano le loro posizioni apparentemente irregolari, le loro rotte apparentemente casuali, la loro logica invisibile a qualsiasi occhio tranne quello che l'aveva costruita.
Cyrus incrociò le braccia sul petto e aspettò.
`;
