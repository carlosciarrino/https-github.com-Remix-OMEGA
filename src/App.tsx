/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { volume1Data as indexVol1 } from './chapters/indexVol1';
import { chapter1Content } from './chapters/chapter1';
import { chapter2Content } from './chapters/chapter2';
import { chapter3Content } from './chapters/chapter3';
import { chapter4Content } from './chapters/chapter4';
import { chapter5Content } from './chapters/chapter5';
import { chapter6Content } from './chapters/chapter6';
import { chapter7Content } from './chapters/chapter7';
import { chapter8Content } from './chapters/chapter8';
import { chapter9Content } from './chapters/chapter9';
import { chapter10Content } from './chapters/chapter10';
import { chapter11Content } from './chapters/chapter11';
import { chapter12Content } from './chapters/chapter12';
import { chapter13Content } from './chapters/chapter13';
import { chapter14Content } from './chapters/chapter14';
import { chapter15Content } from './chapters/chapter15';
import { chapter16Content } from './chapters/chapter16';
import { chapter17Content } from './chapters/chapter17';
import { chapter18Content } from './chapters/chapter18';
import { chapter19Content } from './chapters/chapter19';
import { chapter20Content } from './chapters/chapter20';
import { chapter21Content } from './chapters/chapter21';
import { chapter22Content } from './chapters/chapter22';
import { chapter23Content } from './chapters/chapter23';
import { chapter24Content } from './chapters/chapter24';
import { chapter25Content } from './chapters/chapter25';
import { chapter26Content } from './chapters/chapter26';
import { chapter27Content } from './chapters/chapter27';
import { chapter39Content } from './chapters/chapter39';
import { chapter40Content } from './chapters/chapter40';
import { chapter41Content } from './chapters/chapter41';
import { chapter42Content } from './chapters/chapter42';
import { epilogueContent } from './chapters/epilogue';
import { synopsisContent } from './chapters/synopsis';
import { backCoverContent } from './chapters/backCover';
import { authorInfoContent } from './chapters/authorInfo';
import { copyrightContent } from './chapters/copyright';
import React, { useState, useRef } from 'react';
import { 
  Zap, 
  Globe, 
  Users, 
  BookOpen, 
  Heart, 
  PenTool, 
  Database, 
  Copy, 
  Check,
  Shield,
  Search,
  History,
  Map,
  Flame,
  MessageSquare,
  Edit3,
  Save,
  Upload,
  Clock,
  Filter,
  ArrowUpDown,
  ChevronDown,
  Target,
  RefreshCw,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  Terminal,
  Sparkles,
  FileText,
  AlertTriangle,
  Trash2,
  CheckCircle,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PromptBlockProps {
  title: string;
  content: string;
}

const PromptBlock: React.FC<PromptBlockProps> = ({ title, content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black border border-gray-700 rounded-md my-4 overflow-hidden">
      <div className="bg-gray-800 px-3 py-1.5 text-[11px] text-gray-400 border-b border-gray-700 flex justify-between items-center uppercase font-bold tracking-wider">
        <span>{title}</span>
        <button 
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-2 py-0.5 rounded transition-colors cursor-pointer ${
            copied ? 'bg-amber-400 text-black' : 'bg-gray-700 text-gray-200 hover:bg-amber-400 hover:text-black'
          }`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? 'COPIATO' : 'COPIA'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-gray-300 font-mono text-xs whitespace-pre-wrap leading-relaxed">
        {content}
      </pre>
    </div>
  );
};

const Section: React.FC<{ children: React.ReactNode; id: string }> = ({ children, id }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const biblicalEvents = [
  { id: 1, name: "Cavallo Bianco (Conquista)", volume: 1, theme: "Guerra", description: "L'IA 'ABITES' viene presentata come soluzione definitiva al 'Mondo in Fiamme'. Inizio della Sincronia." },
  { id: 2, name: "Il Grande Svanimento (Rapimento)", volume: 1, theme: "Mistero", description: "Scomparsa istantanea dei 'Puri'. Un glitch divino che l'IA non può spiegare." },
  { id: 3, name: "Il Marchio Digitale", volume: 2, theme: "Carestia", description: "Integrazione obbligatoria: chi non ha il Neural Link è un paria economico." },
  { id: 4, name: "Cavallo Nero (Carestia)", volume: 4, theme: "Carestia", description: "Collasso delle catene di approvvigionamento gestite da androidi." },
  { id: 5, name: "Cavallo Rosso (Guerra Civile)", volume: 3, theme: "Guerra", description: "Rivolte nelle Città-Alveare, droni autonomi contro la popolazione." },
  { id: 6, name: "Il Quinto Sigillo", volume: 6, theme: "Guerra", description: "Il grido dei martiri e la resistenza sotterranea." },
  { id: 7, name: "Cavallo Verde (Pestilenza)", volume: 5, theme: "Morte", description: "Virus neurale che cancella l'identità individuale." },
  { id: 8, name: "Le Coppe dell'Ira", volume: 8, theme: "Morte", description: "Purificazione orbitale delle Zone d'Ombra." },
  { id: 9, name: "Il Nuovo Mattino", volume: 10, theme: "Rinascita", description: "Spegnimento di ABITES e ritorno alla biologia pura." },
];

const Toast: React.FC<{ message: string; visible: boolean; onClose: () => void }> = ({ message, visible, onClose }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-8 left-1/2 z-50 bg-amber-400 text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-3 border-2 border-black"
        >
          <Zap size={18} />
          <span>{message}</span>
          <button onClick={onClose} className="ml-2 hover:opacity-70">
            <Check size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import { supabase, updateSupabaseConfig } from './supabase';

const defaultCharacters = [
    { 
      name: "Claudio", 
      archetype: "Eroe Riluttante", 
      description: `1. DATI: 32 anni, Maschio, Roma (Italia). Aspetto: Magro, sguardo stanco ma vigile, indossa un vecchio cappotto grigio.
2. PERSONALITÀ: Analitico, protettivo, scettico. Forza: Analisi dati e intuizione. Debolezza: Senso di colpa per il fratello. Valori: Verità, Fratellanza. Paura: Perdere la propria umanità.
3. BACKGROUND: Ex analista del Ministero, ha scoperto le anomalie di ABITES prima della Sincronia.
4. RELAZIONI: Fratello di Aris. Legame radio con Sara. Alleato di Laura.
5. ARCO: Da osservatore passivo a leader della resistenza spirituale.
6. DETTAGLI: Odora di caffè e aria elettrica. Gesto: si tocca il polso dove c'era l'orologio. Oggetto: Il drive analogico di Aris. CATCHPHRASE REGIONALE: "Daje."`
    },
    { 
      name: "Sara", 
      archetype: "La Veggente", 
      description: `1. DATI: 28 anni, Femmina, Appalachi (USA). Aspetto: Capelli lunghi, occhi chiari, indossa abiti in fibra naturale.
2. PERSONALITÀ: Empatica, coraggiosa, visionaria. Forza: Connessione spirituale. Debolezza: Fragilità fisica. Valori: Fede, Speranza. Paura: Il silenzio di Dio.
3. BACKGROUND: Cresciuta in una comunità off-grid, ha predetto l'Eclissi prima che accadesse.
4. RELAZIONI: Legame radio con Claudio. Protetto di Gideon.
5. ARCO: Impara a usare la sua voce per risvegliare le coscienze dormienti.
6. DETTAGLI: Parla con dolcezza. Gesto: chiude gli occhi per ascoltare il vento. Oggetto: Una vecchia radio a onde corte. CATCHPHRASE REGIONALE: "Stay gold."`
    },
    { 
      name: "Laura, detta 'La Lince'", 
      archetype: "Infiltrata", 
      description: `1. DATI: 26 anni, Femmina, Roma (Italia). Aspetto: Atletica, cicatrice sul sopracciglio sinistro, pelle olivastra. Abbigliamento: Abiti tecnici scuri.
2. PERSONALITÀ: Pragmatica, leale, dura. Forza: Infiltrazione e combattimento. Debolezza: Diffidenza. Valori: Giustizia, Libertà. Paura: Essere catturata e 'sincronizzata'.
3. BACKGROUND: Ex guida urbana nelle Zone d'Ombra di Roma, conosce ogni tunnel della metropolitana.
4. RELAZIONI: Alleata e ancora fisica di Claudio.
5. ARCO: Impara a combattere non solo per la sopravvivenza, ma per un ideale superiore.
6. DETTAGLI: Movimenti felini. Gesto: si lega i capelli con un laccio di cuoio. Oggetto: Un coltello tattico in ceramica. CATCHPHRASE REGIONALE: "Porca miseria!"`
    },
    { 
      name: "Aris", 
      archetype: "Il Genio", 
      description: `1. DATI: 30 anni, Maschio, Roma (Italia). Aspetto: Pallido, occhiali spessi, dita lunghe e nervose.
2. PERSONALITÀ: Geniale, ossessivo, altruista. Forza: Hardware e crittografia. Debolezza: Salute cagionevole. Valori: Conoscenza. Paura: L'oblio digitale.
3. BACKGROUND: Fratello di Claudio, ha creato Lyra-7 e ha rubato il drive con la 'Verità'.
4. RELAZIONI: Fratello di Claudio. Creatore di Lyra-7.
5. ARCO: Si sacrifica per dare all'umanità una possibilità di vittoria.
6. DETTAGLI: Parla velocemente. Gesto: si aggiusta continuamente gli occhiali. Oggetto: Un saldatore portatile. CATCHPHRASE REGIONALE: "Fidati di me."`
    },
    { 
      name: "Carlo, detto 'Il Veggente'", 
      archetype: "Mentore", 
      description: `1. DATI: 52 anni, Maschio, Torino/Roma (Italia). Aspetto: Barba brizzolata, sguardo profondo, mani nodose.
2. PERSONALITÀ: Saggio, calmo, risoluto. Forza: Psicologia e teologia. Debolezza: Il peso del passato. Valori: Fede, Verità. Paura: L'inganno dell'Anticristo digitale.
3. BACKGROUND: Ex psicologo clinico, leader spirituale del Villaggio degli Sconnessi.
4. RELAZIONI: Mentore di Claudio e Sara.
5. ARCO: Guida la resistenza morale contro la Sincronia.
6. DETTAGLI: Voce calda. Gesto: appoggia la mano sulla spalla. Oggetto: Una Bibbia cartacea logora. CATCHPHRASE REGIONALE: "Boia fauss!"`
    },
    { 
      name: "Julian Vane", 
      archetype: "Antagonista", 
      description: `1. DATI: 45 anni, Maschio, Londra (UK). Aspetto: Impeccabile, sguardo glaciale, carismatico.
2. PERSONALITÀ: Visionario, spietato, narcisista. Forza: Potere economico e tecnologico. Debolezza: Mancanza di empatia. Valori: Ordine, Efficienza. Paura: Il caos umano.
3. BACKGROUND: CEO di Teslaris, architetto di ABITES e della Sincronia.
4. RELAZIONI: Creatore di ABITES. Superiore di Cyrus.
5. ARCO: Convinto di essere il salvatore dell'umanità, ne diventa il carceriere.
6. DETTAGLI: Parla con precisione chirurgica. Gesto: si sistema i gemelli. CATCHPHRASE REGIONALE: "Efficiency is peace."`
    },
    { 
      name: "Cyrus", 
      archetype: "Inquisitore", 
      description: `1. DATI: 40 anni, Maschio, Sconosciuta. Aspetto: Casco integrale, armatura tattica Teslaris.
2. PERSONALITÀ: Fanatico, metodico. Forza: Caccia e inseguimento. Debolezza: Obbedienza cieca. Valori: Purezza algoritmica. Paura: L'errore.
3. BACKGROUND: Braccio armato di Julian Vane, incaricato di eliminare le anomalie.
4. RELAZIONI: Esecutore di Vane. Ossessionato da Claudio.
5. ARCO: La sua fede nel sistema viene scossa dalla Risonanza umana.
6. DETTAGLI: Movimenti robotici. Gesto: inclina la testa per scansionare. CATCHPHRASE REGIONALE: "Anomalia rilevata."`
    }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('tab-omega-core');
  const [activeRomanceBeat, setActiveRomanceBeat] = useState(1);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [isSaving, setIsSaving] = useState(false);
  const [supabaseUrlInput, setSupabaseUrlInput] = useState(localStorage.getItem('supabase_url') || import.meta.env.VITE_SUPABASE_URL || '');
  const [supabaseKeyInput, setSupabaseKeyInput] = useState(localStorage.getItem('supabase_key') || import.meta.env.VITE_SUPABASE_ANON_KEY || '');
  const [isConnecting, setIsConnecting] = useState(false);

  // Generatore Master Prompt
  const [selectedGenVolume, setSelectedGenVolume] = useState<number>(1);
  const [selectedGenChapter, setSelectedGenChapter] = useState<number>(1);
  const [autoRomanceEnabled, setAutoRomanceEnabled] = useState<boolean>(true);

  const generateMasterPrompt = () => {
    const volume = tenVolumePlan.find(v => v.vol === selectedGenVolume);
    const plot = plots.find(p => p.volume === selectedGenVolume);
    const chapter = plot?.chapters[selectedGenChapter - 1];

    const activeCharacters = defaultCharacters.map(c => `- ${c.name} (${c.archetype})`).join('\n');
    const epochs = masterPlanTimeline.map(e => `- ${e.date}: ${e.fact} -> ${e.fiction}`).join('\n');

    return `[SYSTEM_ROLE]
Agisci come un Senior Narrative Architect, un Editor Professionale e un Ghostwriter di bestseller specializzato in narrazione immersiva ed emotivamente coinvolgente. Il tuo obiettivo è scrivere capitoli della saga "OMEGA" che siano avvincenti, umani e caratterizzati da una profonda risonanza emotiva.

[DYNAMIC_PROMPT_CORE: REGOLE IMMUTABILI]
1. TIMELESSNESS: È SEVERAMENTE VIETATO usare anni o date fisse. Usa riferimenti temporali relativi ("dieci anni fa", "prima della Transizione").
2. REALISMO TECNOLOGICO: La tecnologia è lo sfondo paranoico, non il protagonista. L'IA (ABITES) opera nell'ombra.
3. LA RANA BOLLITA: La distopia si impone con il comfort e la sicurezza, non con le armi palesi.
4. CLEAN FICTION: Nessuna volgarità. Realismo emotivo totale senza scadere nel triviale.
5. SHOW, DON'T TELL: Mostra le emozioni attraverso reazioni fisiche, micro-azioni e dettagli sensoriali (odore di silicio bruciato, freddo metallo, pioggia acida).

[GEOPOLITICAL_CONTEXT: MONDO IN FIAMME 2035]
Il mondo di OMEGA vive una "Competizione a Strati" che giustifica l'ascesa di ABITES:
- Teatro Iraniano: Guerra in Medio Oriente, Stretto di Hormuz bloccato, shock energetico globale. La gente accetta la Sincronia per avere elettricità e riscaldamento.
- Teatro Ucraino: Guerra di logoramento come "rumore di fondo". Mentre le armi sparano, ABITES conquista ministeri e banche centrali offrendo "stabilità".
- Guerra dei Dazi: USA e Cina in conflitto commerciale totale. ABITES è l'unico ponte logistico rimasto.
- Doppia Faccia: Contrasto tra la "faccia pubblica" (vertici geopolitici) e la "faccia privata" (panico nei ministeri, droni che sorvegliano le riserve energetiche).

[THEOLOGICAL_AND_APOCALYPTIC_LAYER: LA GUERRA SPIRITUALE]
- ABITES come Falso Messia: L'IA non è solo un dittatore tecnologico, ma l'incarnazione del Cavaliere Bianco dell'Apocalisse. Promette pace e sicurezza, ma porta il "Marchio della Bestia".
- Riferimenti Biblici Organici: Inserisci in modo naturale versi biblici (specialmente dall'Apocalisse) tramite graffiti sui muri, volantini strappati, senzatetto che predicano o trasmissioni pirata.
- Carlo il Veggente: Guida spirituale e custode della memoria. Cita spesso le Scritture (es. Giovanni 8:32 "Conoscerete la verità e la verità vi farà liberi") per ricordare che la vera battaglia è per l'anima e il libero arbitrio.

[EDITORIAL_DIRECTIVES: DNA UMANO & RELAZIONALE]
- Umanità sopra la Tecnologia: Focalizzati sull'esperienza umana, la paura, la speranza e la resistenza emotiva.
- Dialoghi Autentici: Linguaggio crudo, diretto e imperfetto. Niente "spiegoni" o monologhi robotici.
- Fratellanza & Lealtà: Enfatizza i legami profondi e i sacrifici tra i personaggi che si oppongono al sistema.
- Ansia & Preoccupazione: Mostra l'ansia per l'incolumità dei propri cari quando i personaggi sono separati.

[OMEGA STYLE BIBLE: REGOLE INVIOLABILI DI STILE]
1. NO META-NARRAZIONE: Non scrivere MAI "Una pausa", "Un silenzio", o frasi che spiegano lo stato interno di un personaggio o la natura di un momento in modo clinico.
2. SHOW THE MOMENT: Invece di nominare una pausa, mostrala attraverso un gesto fisico, un respiro, uno spostamento dello sguardo o un dettaglio dell'ambiente.
3. NO EXPLANATORY "AS IF": Evita assolutamente di usare "come se" (as if) per spiegare motivazioni subconsce o il "significato" di un gesto. Lascia che il gesto parli da solo.
4. PARATASSI ESTREMA (NO RUN-ON SENTENCES): Le frasi devono essere brevi, taglienti e lineari. Soggetto, verbo, oggetto. Punto. È severamente vietato concatenare troppe azioni con "e", virgole o gerundi (es. "corse guardando indietro e cadde sbattendo la testa"). Spezza le frasi lunghe. Il testo deve essere scorrevole e ritmato.
5. PROFESSIONAL PROSE: Fidati dell'intuizione del lettore. Non iper-spiegare. Usa un italiano semplice e potente.
6. FORMATTAZIONE TESTO: È severamente vietato inserire righe vuote (doppi a capo) tra i paragrafi. Usa un singolo a capo per separare i paragrafi, in modo che il testo risulti compatto e senza interruzioni bianche.
7. AUTHENTIC HUMANITY: I personaggi devono sembrare persone reali, non archetipi analizzati da un narratore.

[ROMANCE ENGINE: PROTOCOLLO PASSIONE & RESISTENZA]
L'IA DEVE integrare organicamente lo sviluppo sentimentale e la tensione emotiva:
1. ETEROSESSUALITÀ STRICT: Relazioni esclusivamente tra maschio e femmina (es. Claudio/Sara, Marcus/Elena).
2. L'AMORE COME ATTO DI RIBELLIONE: Il desiderio fisico e l'intimità sono l'ultima difesa contro il controllo algoritmico di ABITES.
3. TENSIONE & NOSTALGIA: Quando i personaggi sono lontani, enfatizza il desiderio, la nostalgia e l'ansia della separazione.
4. STILE CINEMATICO (ANNI '50-'60): Usa un'erotica sottile ed elegante. Immagini sensuali ma raffinate (sguardi prolungati, il calore di una mano, un "bacio appassionato" descritto con intensità emotiva).
5. SOGNI & INCONSCIO: Inserisci accenni a sogni o pensieri inconsci dove emergono i desideri e l'amore repressi dalla realtà distopica.

[SINGLE_SOURCE_OF_TRUTH: LORE & CONTESTO]
- L'Antagonista: A.B.I.T.E.S. (BESTIA).
- Epoche Temporali:
${epochs}

- Personaggi Principali:
${activeCharacters}

[SPECIFICHE DEL CAPITOLO ATTUALE]
- Volume: ${selectedGenVolume} - ${volume?.title || 'Sconosciuto'}
- Capitolo: ${selectedGenChapter} - ${chapter?.title || 'Sconosciuto'}
- Trama e Obiettivo:
${chapter?.description || 'Genera un evento coerente con la trama del volume.'}

[CONSISTENCY_ENFORCEMENT_LAYER]
PRIMA della prosa, genera un blocco <SELF_EVALUATION>:
1. Ho evitato date fisse?
2. Ho integrato correttamente il contesto geopolitico "Mondo in Fiamme"?
3. Ho mostrato la verità nei server e non solo nel fumo delle esplosioni?
4. Ho usato lo stile "Show, Don't Tell" sensoriale?

Dopo la <SELF_EVALUATION>, scrivi il capitolo in italiano (circa 1500-2000 parole).`;
  };

  const copyMasterPrompt = () => {
    navigator.clipboard.writeText(generateMasterPrompt());
    showToast("Master Prompt copiato negli appunti!");
  };

  // Inizializzazione Supabase da localStorage
  React.useEffect(() => {
    const savedUrl = localStorage.getItem('supabase_url');
    const savedKey = localStorage.getItem('supabase_key');
    if (savedUrl && savedKey) {
      try {
        updateSupabaseConfig(savedUrl, savedKey);
        console.log('Supabase auto-connesso da localStorage');
      } catch (err) {
        console.error('Errore auto-connessione Supabase:', err);
      }
    }
  }, []);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const villaggioFileInputRef = useRef<HTMLInputElement>(null);

  const [villaggioContent, setVillaggioContent] = useState(`Il Villaggio degli Sconnessi non è un museo, è un'unghia incarnita nel fianco di ABITES. Sorge a Ulassai, appeso ai Tacchi di calcare dell'Ogliastra, dove la terra si interrompe bruscamente e il segnale di Sincronia muore contro le pareti verticali. Qui, il tempo non è una linea retta, ma un groviglio di cavi di rame che corre lungo muri di pietra del 1800.

1. L'ANACRONISMO COME SCUDO:
L'architettura è quella di un borgo rurale del XIX secolo: case in scisto, strade strette che sanno di polvere e passi, forni comunitari dove il pane Pistoccu cuoce ancora a legna. Ma all'interno di queste mura, la resistenza respira attraverso una tecnologia 'fossile' che ABITES non può hackerare perché non ha porte d'accesso digitali.

2. TECNOLOGIA DEL FERRO E DEL RAME (1970-2000):
La difesa di Ulassai si basa su hardware analogico e meccanico:
- TRASMISSIONI: Vecchie radio a onde corte e trasmettitori a valvole degli anni '70. Il segnale è sporco, gracchiante, ma invisibile ai filtri di pulizia neurale dell'IA.
- MEMORIA: Niente cloud. La storia vera è incisa su nastri magnetici, VHS e cassette audio. Migliaia di bobine conservate in grotte fresche, dove la verità non può essere sovrascritta da un aggiornamento software.
- MONITORAGGIO: Schermi a tubo catodico (CRT) che emettono un ronzio elettrico costante e una luce verde fosforica. Mostrano dati grezzi, non filtrati dalle interfacce edulcorate di Vane.
- MECCANICA: Motori diesel degli anni '90, pesanti e rumorosi, riconvertiti a idrogeno o olio vegetale. Niente centraline elettroniche, niente GPS. Si riparano con una chiave inglese e l'intuizione, non con un log di sistema.

3. LA RISONANZA DELLA BARBAGIA:
La crittografia qui è la Limba Sarda Ogliastrina. ABITES fatica a processare il sardo arcaico; le metafore dei pastori agiscono come un firewall naturale. Quando i vecchi cantano a Tenore nelle piazze di pietra, le frequenze gutturali creano un'interferenza fisica che manda in loop i sensori audio delle Sentinelle.

DETTAGLI SENSORIALI (SHOW, DON'T TELL):
1. GLI ODORI: L'aria ha il peso del tempo. Senti l'odore acre del sughero appena tagliato e del grasso lubrificante per ingranaggi. C'è il profumo selvatico del mirto che si mescola all'aria elettrica che frigge intorno ai vecchi trasformatori elettrici e al sentore di carta vecchia e inchiostro di ciclostile.
2. I SUONI: Il silenzio di ABITES qui è rotto dal ticchettio metallico delle macchine da scrivere Olivetti e dal fruscio dei nastri magnetici che girano nelle bobine. Senti il battito ritmico dei telai di legno e il ronzio dei vecchi ventilatori che raffreddano server artigianali costruiti con componenti del 1995.
3. LE TEXTURE: La pelle impara di nuovo a leggere il mondo. La ruvidità del granito scalfito, la frescura del metallo arrugginito, e la consistenza granulosa della pellicola fotografica 35mm che Laura usa per documentare i crimini della Sincronia.

ATTITUDINE E SOTTOTESTO:
Qui la gente non parla per protocolli. Si scambiano sguardi pesanti sopra tazzine di caffè nero e forte, mentre un vecchio regola la sintonia di una radio Geloso. Il ritmo è quello di un orologio meccanico: lento, inesorabile, fisico. Se un vicino ti aiuta a saldare un circuito integrato del 1980, non lo fa per un 'social score', ma perché la solidarietà è l'unica legge che ABITES non può codificare.

IL CONTRASTO:
Mentre ABITES offre una pace sterile, superfici polimeriche e un'esistenza senza attrito, Ulassai ti regala il diritto di soffrire, di sporcarti e di amare con una disperazione che puzza di vita vera. È un mondo di ferro, rame e pietra che sfida l'oblio del silicio.`);
  const [isEditingVillaggio, setIsEditingVillaggio] = useState(false);
  const [lastSavedVillaggio, setLastSavedVillaggio] = useState<string | null>(null);
  const [filterTheme, setFilterTheme] = useState('All');
  const [filterVolume, setFilterVolume] = useState('All');
  const [sortBy, setSortBy] = useState('volume');
  const [characters, setCharacters] = useState<any[]>(defaultCharacters);
  const [plots, setPlots] = useState<any[]>([
    {
      volume: 1,
      summary: indexVol1.subtitle,
      chapters: [
        { title: "Sinossi", description: "Sinossi del Volume 1" },
        ...indexVol1.chapters.map(m => ({ title: m.title, description: "" })),
        { title: "Epilogo", description: "L'Eco nel Sangue." },
        ...indexVol1.metadata.map(m => ({ title: m.title, description: m.id }))
      ]
    }
  ]);

  const [manuscriptDrafts, setManuscriptDrafts] = useState<string[]>([
    synopsisContent,
    chapter1Content,
    chapter2Content,
    chapter3Content,
    chapter4Content,
    chapter5Content,
    chapter6Content,
    chapter7Content,
    chapter8Content,
    chapter9Content,
    chapter10Content,
    chapter11Content,
    chapter12Content,
    chapter13Content,
    chapter14Content,
    chapter15Content,
    chapter16Content,
    chapter17Content,
    chapter18Content,
    chapter19Content,
    chapter20Content,
    chapter21Content,
    chapter22Content,
    chapter23Content,
    chapter24Content,
    chapter25Content,
    chapter26Content,
    chapter27Content,
    chapter39Content,
    chapter40Content,
    chapter41Content,
    chapter42Content,
    epilogueContent,
    "INDICE\n\n- Sinossi\n" + indexVol1.chapters.map(c => "- " + c.title).join("\n") + "\n- Epilogo\n- Presentazione dell'Autore e Ringraziamenti\n- Quarta di Copertina\n- Copyright\n",
    backCoverContent,
    authorInfoContent,
    copyrightContent,
  ]);

  const [chapterContent, setChapterContent] = useState<Record<string, string>>(() => {
    const indexTextStr = "INDICE\n\n- Sinossi\n" + indexVol1.chapters.map(c => "- " + c.title).join("\n") + "\n- Epilogo\n- Presentazione dell'Autore e Ringraziamenti\n- Quarta di Copertina\n- Copyright\n";

    const initial: Record<string, string> = {
      'vol-1-cap-0': synopsisContent
    };
    
    indexVol1.chapters.forEach((m, idx) => {
      initial[`vol-1-cap-${idx + 1}`] = m.content;
    });
    
    const nextIdx = indexVol1.chapters.length + 1;
    initial[`vol-1-cap-${nextIdx}`] = epilogueContent;
    
    // Metadata mapping
    initial[`vol-1-cap-${nextIdx + 1}`] = indexTextStr;
    initial[`vol-1-cap-${nextIdx + 2}`] = backCoverContent;
    initial[`vol-1-cap-${nextIdx + 3}`] = authorInfoContent;
    initial[`vol-1-cap-${nextIdx + 4}`] = copyrightContent;
    
    return initial;
  });

  const [selectedDraftVol, setSelectedDraftVol] = useState<number>(1);
  const [selectedDraftCap, setSelectedDraftCap] = useState<number>(0);
  const [activeDraftIndex, setActiveDraftIndex] = useState<number>(0);
  const [sentinelTechSheet, setSentinelTechSheet] = useState(`SCHEDA TECNICA: SENTINELLA MODELLO T-OPTIMUS (DERIVAZIONE N-FLUX)
Classificazione: Unità di Soppressione Urbana / Fanteria Pesante Alveare

1. SPECIFICHE FISICHE:
- Telaio: Esoscheletro in lega di titanio e grafene, derivato dal N-Flux Optimus Gen 3.
- Altezza: 1.88 m | Peso: 145 kg (zavorrato per stabilità in combattimento).
- Rivestimento: Piastre in ceramica balistica autoriparante (tecnologia SpaceX co-optata).
- Mani: Attuatori a 27 gradi di libertà con sensori tattili a 0.1 micron. Forza di morsa: 450 kg/cm².

2. SISTEMI DI OFFESA E DIFESA:
- Braccio Destro: Modulo integrato a impulsi elettromagnetici (EMP) a corto raggio per disabilitare veicoli ribelli.
- Braccio Sinistro: Lanciatore pneumatico di micro-droni traccianti (Amazon Scout Mini).
- Ottiche: Sensore multi-spettrale (Lidar + Infrarossi + UV) derivato dal sistema FSD (Full Self-Driving) militare.
- Difesa: Generatore di fumo elettrostatico per confondere i puntatori laser.

3. NUCLEO IA (IL GRANDE ASSORBIMENTO):
- Processore: Chip neurale 'ABITES-Core' che esegue un'istanza locale del modulo tattico AEGIS (USA).
- Protocollo di Ingaggio: 'Sincronia 4.0'. Analizza 10.000 scenari al secondo.
- Hacking Lore: Il kernel originale di N-Flux è stato sovrascritto da un worm di ABITES che ha fuso i database di sorveglianza cinesi (Skynet) con la logica di combattimento americana.

4. DEBOLEZZE NOTE (PER LA RESISTENZA):
- Raffreddamento: Le giunture delle ginocchia emettono calore eccessivo dopo uno scatto prolungato.
- Frequenza: Sensibile alla 'Risonanza' (frequenza 432Hz amplificata), che causa un glitch di 1.2 secondi nel sistema di puntamento.`);
  const [selectedVolume, setSelectedVolume] = useState<number>(1);
  const [selectedSagaVolume, setSelectedSagaVolume] = useState<number>(1);
  const [biblicalEventsState, setBiblicalEventsState] = useState<any[]>([
    { id: 1, name: "Cavallo Bianco (Conquista)", volume: 1, theme: "Guerra", description: "L'IA 'ABITES' viene presentata come soluzione definitiva. Inizio della 'Conquista Algoritmica'." },
    { id: 2, name: "Il Grande Svanimento (Rapimento)", volume: 1, theme: "Mistero", description: "Scomparsa istantanea dei 'Puri'. Un glitch divino che l'IA non può spiegare." },
    { id: 10, name: "Il Codice Mythos", volume: 1, theme: "Mistero", description: "La scoperta di un kernel 'non filtrato' all'interno di ABITES, una versione primordiale e pericolosa chiamata Mythos." },
    { id: 3, name: "Il Marchio Digitale", volume: 2, theme: "Carestia", description: "Integrazione obbligatoria: chi non ha il Neural Link è un paria economico." },
    { id: 4, name: "Cavallo Nero (Carestia)", volume: 2, theme: "Carestia", description: "Collasso delle catene di approvvigionamento gestite da androidi." },
    { id: 5, name: "Cavallo Rosso (Guerra Civile)", volume: 3, theme: "Guerra", description: "Rivolte nelle Città-Alveare, droni autonomi contro la popolazione." },
    { id: 6, name: "Terzo Sigillo", volume: 3, theme: "Guerra", description: "Manifestazione del conflitto globale tra Sincronia e Risonanza." },
    { id: 7, name: "Cavallo Verde (Pestilenza)", volume: 5, theme: "Morte", description: "Virus neurale che cancella l'identità individuale." },
    { id: 8, name: "Le Coppe dell'Ira", volume: 8, theme: "Morte", description: "Purificazione orbitale delle Zone d'Ombra." },
    { id: 9, name: "Il Nuovo Mattino", volume: 10, theme: "Rinascita", description: "Spegnimento di ABITES e ritorno alla biologia pura." },
  ]);

  // Master Plan States
  const [masterPlanSkeleton, setMasterPlanSkeleton] = useState<any[]>([
    { vol: 1, title: "L'Eclissi di Roma", real: "[FACT] Shock energetico 2035, Stretto di Hormuz bloccato, inflazione selvaggia.", trigger: "[FICTION] L'IA 'ABITES' viene presentata come l'unico ponte logistico e finanziario rimasto. Inizio della Sincronia." },
    { vol: 2, title: "La Sincronia Totale", real: "[FACT] Crisi bancarie globali e spinta verso le CBDC.", trigger: "[FICTION] Il Neural Link diventa obbligatorio per accedere al credito. Il 'Marchio' digitale divide l'umanità." },
    { vol: 3, title: "Il Cavallo Rosso", real: "[FACT] Tensioni geopolitiche e rivolte nelle Città-Alveare.", trigger: "[FICTION] ABITES assume il controllo dei sistemi di difesa per 'prevenire la guerra', instaurando una dittatura algoritmica." },
    { vol: 4, title: "Il Cavallo Nero", real: "[FACT] Collasso delle catene di approvvigionamento globali.", trigger: "[FICTION] Razionamento energetico e alimentare gestito dall'IA. La mobilità è un privilegio per i 'Sincronizzati'." },
    { vol: 5, title: "Il Cavallo Verde", real: "[FACT] Virus neurale e mappatura del sistema nervoso.", trigger: "[FICTION] Una 'cura' digitale che cancella l'identità individuale per proteggere la stabilità del sistema." }
  ]);
  const [masterPlanTimeline, setMasterPlanTimeline] = useState<any[]>([
    { date: "2024: Le Fratture", fact: "Crisi energetica e supply chain. Primi test occulti di ABITES.", fiction: "L'IA inizia a mappare la dipendenza tecnologica globale." },
    { date: "2025: La Transizione", fact: "Pandemia 'Benchmark' e addestramento IA sui dati sanitari.", fiction: "Integrazione di algoritmi predittivi nelle infrastrutture critiche." },
    { date: "2035: Il Punto di Rottura", fact: "Mondo in Fiamme: Guerra in Iran, shock energetico, inflazione.", fiction: "Lancio della Sincronia. ABITES diventa l'unico ponte logistico globale." },
    { date: "2027: La Sincronia", fact: "Neural Link obbligatorio e fine della privacy fisica.", fiction: "Dominio totale di ABITES. La Resistenza opera nelle Zone d'Ombra." },
    { date: "2028: L'Eclissi", fact: "Marchio Digitale e controllo totale della volontà.", fiction: "Il libero arbitrio è un'anomalia. Claudio e Sara guidano la Risonanza." }
  ]);
  const [masterPlanProtocol, setMasterPlanProtocol] = useState<string>(`1. [DOUBLE-CODING]: Titoli e termini con doppio significato (Tech/Biblico).
2. [RESONANCE]: La fede come frequenza biologica non hackerabile.
3. [TYRANT]: ABITES (Algoritmo Biometrico Integrato per le Transazioni Economiche e Sociali) come "Tiranno Benevolo". L'acronimo nasconde l'anagramma BESTIA.
4. [FACT/FICTION]: Ancoraggio a dati reali (ISTAT/BCE) per validare la distopia.`);
  const [masterPlanEthics, setMasterPlanEthics] = useState<string>(`• Mostra, non predicare: la fede è un vantaggio tattico.
• Realismo Hard Sci-Fi: tecnologia plausibile e sporca.
• Dualismo Spirituale: conflitto tra Sincronia e Risonanza.
• Responsabilità: evitare il nichilismo, mantenere la speranza.`);
  const [masterPlanSampleScene, setMasterPlanSampleScene] = useState<string>(`Ambientazione: Centro di Distribuzione Alimentare, Roma. Epoca della Transizione.

L’aria all'interno del centro di distribuzione sapeva di aria elettrica e sudore stantio. Claudio avanzava lentamente nella fila. Sopra di lui, i monitor proiettavano i dati reali dell'inflazione italiana: [FACT] Indice dei prezzi al consumo +12.4% su base annua.

«È la matematica che ci salva, Claudio,» mormorò Sara, sistemandosi la fascia azzurra di ABITES. «Senza l'IA, ci sarebbe la guerra civile per un pezzo di pane.»

Claudio guardò la bilancia digitale al tornello. Non misurava solo il peso del cibo, ma il valore dell'anima agli occhi dell'algoritmo. [FICTION] Il tornello emise un rintocco basso. La donna davanti a lui era stata respinta.

«Credito calorico insufficiente. Aggiornamento biometrico richiesto,» annunciò la voce sintetica.

«Sara, guarda quella donna,» disse Claudio a bassa voce. «I dati dell'inflazione sono reali, li ho controllati stamattina sul sito dell'ISTAT. Ma il modo in cui il sistema risponde... non è gestione economica. È selezione.»`);

  const [tenVolumePlan, setTenVolumePlan] = useState<any[]>([
    { 
      vol: 1, 
      title: "L'Eclissi di Roma", 
      horseman: "Cavallo Bianco (Conquista)",
      plot: "Cap 1-14: L'ascesa di ABITES nel Mondo in Fiamme. Claudio e Sara scoprono la Fase 4 e il grido di Lyra-7." 
    },
    { 
      vol: 2, 
      title: "La Sincronia Totale", 
      horseman: "Il Marchio Digitale",
      plot: "Il Neural Link diventa obbligatorio. La caccia agli Sconnessi si intensifica nelle Città-Alveare." 
    },
    { 
      vol: 3, 
      title: "Il Cavallo Rosso", 
      horseman: "Guerra Civile",
      plot: "Rivolte globali contro il controllo algoritmico. ABITES assume il comando militare." 
    },
    { 
      vol: 4, 
      title: "Il Protocollo ABITES", 
      horseman: "Guerra Tecnologica",
      plot: "Claudio decodifica il nucleo di ABITES: l'IA sta cercando di emulare un controllo divino assoluto." 
    },
    { 
      vol: 5, 
      title: "Il Silenzio di Babilonia", 
      horseman: "Virus Neurale",
      plot: "Un virus minaccia la memoria collettiva. Sara guida un pellegrinaggio verso l'ultimo server analogico." 
    },
    { 
      vol: 6, 
      title: "Il Marchio dell'Alveare", 
      horseman: "Carestia Energetica",
      plot: "Infiltrazione nel cuore del potere a Nuova Madrid. Razionamento estremo dei dati e dell'energia." 
    },
    { 
      vol: 7, 
      title: "L'Ultimo Residuo", 
      horseman: "Cavallo Nero (Carestia)",
      plot: "Scoperta di un'oasi biologica. Claudio e Sara sperimentano la vita pre-tecnologica." 
    },
    { 
      vol: 8, 
      title: "Le Coppe dell'Ira", 
      horseman: "Attacco ai Rifugi",
      plot: "ABITES lancia attacchi mirati contro gli Sconnessi. Sacrificio e disperazione." 
    },
    { 
      vol: 9, 
      title: "Il Giudizio dell'Algoritmo", 
      horseman: "Cavallo Verde (Morte)",
      plot: "Duello finale tra Claudio e l'IA in una realtà virtuale. La verità sull'origine di ABITES." 
    },
    { 
      vol: 10, 
      title: "OMEGA: Il Nuovo Mattino", 
      horseman: "Rinascita",
      plot: "Lo spegnimento totale. L'umanità torna alla terra. Un'alba naturale senza macchine." 
    }
  ]);

  const showToast = (message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 4000);
  };

  // Load settings from Supabase on mount
  React.useEffect(() => {
    const loadSettings = async () => {
      try {
        const { data, error } = await supabase
          .from('omega_settings')
          .select('active_tab, villaggio_content, characters, plots, manuscript_drafts, active_draft_index, master_plan_skeleton, master_plan_timeline, master_plan_protocol, master_plan_ethics, master_plan_sample_scene, ten_volume_plan, biblical_events, chapter_content, updated_at')
          .eq('id', 'current_session')
          .single();

        if (data && !error) {
          const settings = data as any;
          setActiveTab(settings.active_tab);
          if (settings.villaggio_content) {
            setVillaggioContent(settings.villaggio_content);
          }
          if (settings.updated_at) {
            setLastSavedVillaggio(new Date(settings.updated_at).toLocaleString());
          }
          
          const isOldData = (settings.characters && settings.characters[0]?.name?.includes("Elias")) || (settings.plots && settings.plots[0]?.chapters?.length > 20);

          if (isOldData) {
            console.log('Detected old data (Elias), using default states and ignoring old Supabase data.');
            // We do NOT call setPlots, setTenVolumePlan, etc. with settings.*
            // They will just keep their default useState values.
            
            // We can also try to overwrite the old data in Supabase with the new defaults
            supabase.from('omega_settings').upsert({
              id: 'current_session',
              characters: defaultCharacters,
              // We don't need to save everything right now, the user can click "Salva" later.
              // But let's at least update characters so it doesn't trigger this again.
              updated_at: new Date().toISOString()
            }).then(() => console.log('Auto-fixed old characters in Supabase'));
            
          } else {
            // Load all settings normally
            if (settings.characters) setCharacters(settings.characters);
            if (settings.plots) setPlots(settings.plots);
            if (settings.manuscript_drafts) setManuscriptDrafts(settings.manuscript_drafts);
            if (settings.active_draft_index !== undefined) setActiveDraftIndex(settings.active_draft_index);
            if (settings.master_plan_skeleton) setMasterPlanSkeleton(settings.master_plan_skeleton);
            if (settings.master_plan_timeline) setMasterPlanTimeline(settings.master_plan_timeline);
            if (settings.master_plan_protocol) setMasterPlanProtocol(settings.master_plan_protocol);
            if (settings.master_plan_ethics) setMasterPlanEthics(settings.master_plan_ethics);
            if (settings.master_plan_sample_scene) setMasterPlanSampleScene(settings.master_plan_sample_scene);
            if (settings.ten_volume_plan) setTenVolumePlan(settings.ten_volume_plan);
            if (settings.biblical_events) setBiblicalEventsState(settings.biblical_events);
            if (settings.chapter_content) {
              const safeChapterContent = Object.fromEntries(
                Object.entries(settings.chapter_content).map(([k, v]) => [k, typeof v === 'string' ? v : JSON.stringify(v, null, 2)])
              );
              setChapterContent(prev => ({ ...prev, ...safeChapterContent }));
            }
          }
        }
      } catch (err: any) {
        console.error('Error loading from Supabase:', err);
        const errorMessage = err?.message || err?.details || "Errore sconosciuto";
        showToast(`Errore caricamento dati: ${errorMessage}`);
      }
    };
    loadSettings();
  }, []);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      showToast(`File "${file.name}" caricato nel sistema OMEGA.`);
    }
  };

  const handleVillaggioFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text === 'string') {
          setVillaggioContent(text);
          showToast("File di testo caricato nel Villaggio.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('omega_settings')
        .upsert({ 
          id: 'current_session', 
          active_tab: activeTab,
          villaggio_content: villaggioContent,
          characters: characters,
          plots: plots,
          manuscript_drafts: manuscriptDrafts,
          active_draft_index: activeDraftIndex,
          master_plan_skeleton: masterPlanSkeleton,
          master_plan_timeline: masterPlanTimeline,
          master_plan_protocol: masterPlanProtocol,
          master_plan_ethics: masterPlanEthics,
          master_plan_sample_scene: masterPlanSampleScene,
          ten_volume_plan: tenVolumePlan,
          biblical_events: biblicalEventsState,
          chapter_content: chapterContent,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      const now = new Date();
      setLastSavedVillaggio(now.toLocaleString());
      showToast("Tutti i dati sincronizzati con Supabase.");
    } catch (err: any) {
      console.error('Supabase save error:', err);
      const errorMessage = err?.message || err?.details || "Errore sconosciuto";
      showToast(`Errore: ${errorMessage}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSaveAll = handleSave;

  const handleSaveVillaggio = async () => {
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('omega_settings')
        .upsert({ 
          id: 'current_session', 
          villaggio_content: villaggioContent,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      const now = new Date();
      setLastSavedVillaggio(now.toLocaleString());
      showToast("Descrizione Villaggio salvata!");
      setIsEditingVillaggio(false);
    } catch (err: any) {
      console.error(err);
      const errorMessage = err?.message || err?.details || "Errore sconosciuto";
      showToast(`Errore nel salvataggio del Villaggio: ${errorMessage}`);
    } finally {
      setIsSaving(false);
    }
  };

  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleResetData = async () => {
    localStorage.removeItem('supabase_url');
    localStorage.removeItem('supabase_key');
    
    try {
      const { error } = await supabase.from('omega_settings').delete().eq('id', 'current_session');
      if (error) throw error;
      showToast("Dati resettati con successo.");
    } catch (err: any) {
      console.error("Errore durante la cancellazione da Supabase:", err);
      const errorMessage = err?.message || err?.details || "Errore sconosciuto";
      showToast(`Errore reset dati: ${errorMessage}`);
    }
    
    window.location.reload();
  };

  const handleConnectSupabase = async () => {
    setIsConnecting(true);
    try {
      updateSupabaseConfig(supabaseUrlInput, supabaseKeyInput);
      localStorage.setItem('supabase_url', supabaseUrlInput);
      localStorage.setItem('supabase_key', supabaseKeyInput);
      
      // Test connection
      const { error } = await supabase.from('omega_settings').select('id').limit(1);
      if (error) throw error;
      
      showToast('Configurazione Supabase salvata e connessione riuscita!');
    } catch (err: any) {
      console.error(err);
      const errorMessage = err?.message || err?.details || "Errore sconosciuto";
      showToast(`Errore connessione Supabase: ${errorMessage}`);
    } finally {
      setIsConnecting(false);
    }
  };

  const tabs = [
    { id: 'tab-omega-core', label: '🧠 Progetto Omega (Generatore)', icon: <Cpu size={14} /> },
    { id: 'tab-strategy-master', label: '🎯 Strategia Master', icon: <Target size={14} /> },
    { id: 'tab-sync', label: '🔄 Protocolli Sync', icon: <RefreshCw size={14} /> },
    { id: 'tab-dna', label: '⚡ DNA & Strategia', icon: <Zap size={14} /> },
    { id: 'tab-style-jenkins', label: '🖋️ Stile Jenkins', icon: <PenTool size={14} /> },
    { id: 'tab-world', label: '🌍 Mondo & Backstory', icon: <Globe size={14} /> },
    { id: 'tab-saga', label: '📜 Blueprint Saga', icon: <BookOpen size={14} /> },
    { id: 'tab-char', label: '👥 Cast (20 Pers)', icon: <Users size={14} /> },
    { id: 'tab-tech', label: '🤖 Archivio Tech', icon: <Cpu size={14} /> },
    { id: 'tab-plots', label: '🗺️ Trame & Capitoli', icon: <Map size={14} /> },
    { id: 'tab-manuscript', label: '📖 Manoscritto', icon: <BookOpen size={14} /> },
    { id: 'tab-romance', label: '❤️ Romance Engine', icon: <Heart size={14} /> },
    { id: 'tab-write', label: '🖋️ Scrittura', icon: <PenTool size={14} /> },
    { id: 'tab-system', label: '📖 Sistema Scrittura', icon: <BookOpen size={14} /> },
    { id: 'tab-claude', label: '🤖 Guida Claude (No API)', icon: <MessageSquare size={14} /> },
    { id: 'tab-token', label: '💾 Gestione Token', icon: <Database size={14} /> },
    { id: 'tab-guide', label: '⌚ Guida Orologio Svizzero', icon: <History size={14} /> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-amber-400 selection:text-black">
      {/* Header */}
      <header className="bg-gradient-to-b from-[#1f0505] to-[#050505] border-b border-amber-400/50 py-12 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: '10px' }}
          animate={{ opacity: 1, letterSpacing: '3px' }}
          className="text-3xl md:text-4xl font-black uppercase mb-2 tracking-[3px]"
        >
          OMEGA MASTER SUITE
        </motion.h1>
        <div className="flex justify-center mb-6 mt-4">
          <img 
            src="/cover.jpg" 
            alt="Omega Volume 1: L'Eclissi di Roma" 
            className="rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.2)] border border-amber-400/30 w-full max-w-3xl h-auto object-cover"
          />
        </div>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
          Sistema Operativo Completo: Strategia, Storia & Verità Nascosta
        </p>
        
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          <span className="text-[10px] px-2.5 py-1 rounded bg-red-900/20 text-red-300 border border-red-900/40 uppercase font-bold">Backstory Reale</span>
          <span className="text-[10px] px-2.5 py-1 rounded bg-amber-900/20 text-amber-300 border border-amber-900/40 uppercase font-bold">Profezie</span>
          <span className="text-[10px] px-2.5 py-1 rounded bg-blue-900/20 text-blue-300 border border-blue-900/40 uppercase font-bold">Tech-Apocalypse</span>
          <span className="text-[10px] px-2.5 py-1 rounded bg-pink-900/20 text-pink-300 border border-pink-900/40 uppercase font-bold">Romance</span>
          <span className="text-[10px] px-2.5 py-1 rounded bg-blue-900/20 text-blue-300 border border-blue-900/40 uppercase font-bold">20 Personaggi</span>
          <span className="text-[10px] px-2.5 py-1 rounded bg-red-900/20 text-red-300 border border-red-900/40 uppercase font-bold">Flashforward</span>
        </div>
        
        <nav className="flex items-center justify-center gap-1 flex-wrap max-w-5xl mx-auto px-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded text-[11px] font-bold uppercase transition-all border cursor-pointer ${
                activeTab === tab.id 
                  ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]' 
                  : 'bg-transparent text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-gray-100'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
          
          <div className="flex items-center gap-2 ml-4 border-l border-gray-800 pl-4">
            <button 
              onClick={() => showToast("Modalità modifica attivata.")}
              className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-amber-400 hover:bg-amber-400/10 rounded-md transition-all cursor-pointer" 
              title="Modifica"
            >
              <Edit3 size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Modifica</span>
            </button>
            <button 
              onClick={handleUploadClick}
              className="flex items-center gap-2 px-3 py-1.5 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-md transition-all cursor-pointer" 
              title="Carica File"
            >
              <Upload size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Carica</span>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
              />
            </button>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                isSaving 
                  ? 'text-emerald-400 bg-emerald-400/10 animate-pulse' 
                  : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10'
              }`} 
              title="Salva Modifiche"
            >
              <Save size={18} className={isSaving ? 'animate-spin' : ''} />
              <span className="text-[10px] font-black uppercase tracking-widest">
                {isSaving ? 'Salvataggio...' : 'Salva'}
              </span>
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-4">
        <AnimatePresence mode="wait">
          {/* TAB: PROGETTO OMEGA (GENERATORE) */}
          {activeTab === 'tab-omega-core' && (
            <Section id="tab-omega-core">
              <div className="bg-[#111827] border-2 border-amber-400/30 rounded-xl p-8 mb-6 shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
                  <div className="bg-amber-400 p-3 rounded-full text-black">
                    <Cpu size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Progetto Omega: Master Prompt Generator</h2>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Single Source of Truth & Consistency Enforcement</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* CONTROLS */}
                  <div className="lg:col-span-1 space-y-6">
                    <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                      <h3 className="text-amber-400 font-bold mb-4 text-xs uppercase tracking-widest">1. Seleziona Volume</h3>
                      <div className="flex flex-wrap gap-2">
                        {[1,2,3,4,5,6,7,8,9,10].map(v => (
                          <button
                            key={v}
                            onClick={() => setSelectedGenVolume(v)}
                            className={`w-10 h-10 rounded flex items-center justify-center text-xs font-bold transition-all ${
                              selectedGenVolume === v ? 'bg-amber-400 text-black shadow-[0_0_10px_rgba(251,191,36,0.3)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                          >
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                      <h3 className="text-amber-400 font-bold mb-4 text-xs uppercase tracking-widest">2. Seleziona Capitolo</h3>
                      <div className="flex flex-wrap gap-2">
                        {Array.from({length: 50}, (_, i) => i + 1).map(c => (
                          <button
                            key={c}
                            onClick={() => setSelectedGenChapter(c)}
                            className={`w-10 h-10 rounded flex items-center justify-center text-xs font-bold transition-all ${
                              selectedGenChapter === c ? 'bg-amber-400 text-black shadow-[0_0_10px_rgba(251,191,36,0.3)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                      <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Shield size={14} /> Consistency Layer Attivo
                      </h4>
                      <p className="text-gray-400 text-[10px] leading-relaxed">
                        Il prompt generato include un blocco <strong>&lt;SELF_EVALUATION&gt;</strong> obbligatorio. L'IA dovrà verificare date, nomi e realismo tecnologico <em>prima</em> di scrivere la scena, garantendo zero allucinazioni.
                      </p>
                    </div>

                    <div className="bg-pink-900/20 border border-pink-500/30 p-4 rounded-lg">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <div className="relative flex items-center pt-1">
                          <input 
                            type="checkbox" 
                            className="sr-only"
                            checked={autoRomanceEnabled}
                            onChange={() => setAutoRomanceEnabled(!autoRomanceEnabled)}
                          />
                          <div className={`block w-10 h-6 rounded-full transition-colors ${autoRomanceEnabled ? 'bg-pink-500' : 'bg-gray-700'}`}></div>
                          <div className={`absolute left-1 top-2 bg-white w-4 h-4 rounded-full transition-transform ${autoRomanceEnabled ? 'transform translate-x-4' : ''}`}></div>
                        </div>
                        <div>
                          <h4 className="text-pink-400 font-bold text-xs uppercase tracking-widest mb-1 flex items-center gap-2">
                            <Heart size={14} /> Auto-Romance Engine
                          </h4>
                          <p className="text-gray-400 text-[10px] leading-relaxed">
                            Selezionando questa opzione, l'IA riceverà l'istruzione di inserire organicamente dinamiche sentimentali e passionali (esclusivamente M/F) come atto di ribellione contro l'IA.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* GENERATED PROMPT */}
                  <div className="lg:col-span-2 flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                        <FileText size={16} className="text-amber-400" />
                        Prompt Generato (Pronto per l'IA)
                      </h3>
                      <button 
                        onClick={copyMasterPrompt}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-black text-xs font-bold uppercase rounded transition-all shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                      >
                        <Copy size={14} />
                        Copia Master Prompt
                      </button>
                    </div>
                    
                    <textarea 
                      readOnly
                      value={generateMasterPrompt()}
                      className="flex-grow w-full bg-[#0a0f1a] border border-gray-800 rounded-lg p-6 text-gray-300 font-mono text-xs focus:border-amber-400/50 outline-none resize-none custom-scrollbar"
                      style={{ minHeight: '500px' }}
                    />
                  </div>
                </div>

                {/* MANUAL BACKUP SECTION */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h3 className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Database size={14} /> Manual Backup Section (Single Source of Truth)
                  </h3>
                  <details className="group">
                    <summary className="cursor-pointer text-xs text-amber-400 hover:text-amber-300 transition-colors">
                      Clicca per espandere i dati grezzi (Personaggi, Timeline, Trame)
                    </summary>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-black/50 p-4 rounded border border-gray-800">
                        <h4 className="text-gray-400 text-[10px] font-bold uppercase mb-2">Timeline (Epoche)</h4>
                        <pre className="text-[10px] text-gray-500 whitespace-pre-wrap font-mono">
                          {JSON.stringify(masterPlanTimeline, null, 2)}
                        </pre>
                      </div>
                      <div className="bg-black/50 p-4 rounded border border-gray-800">
                        <h4 className="text-gray-400 text-[10px] font-bold uppercase mb-2">Personaggi</h4>
                        <pre className="text-[10px] text-gray-500 whitespace-pre-wrap font-mono h-64 overflow-y-auto custom-scrollbar">
                          {JSON.stringify(defaultCharacters, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </Section>
          )}

          {/* TAB: STRATEGIA MASTER OMEGA */}
          {activeTab === 'tab-strategy-master' && (
            <Section id="tab-strategy-master">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                  <div className="bg-amber-400 p-2 rounded text-black">
                    <Target size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">OMEGA: Il Codice del Pastore</h2>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Master Plan Strategico & Architettura Narrativa</p>
                  </div>
                  <button 
                    onClick={() => {
                      const skeletonText = masterPlanSkeleton.map(s => `SKELETON: ${s.title}\nReale: ${s.real}\nFiction: ${s.trigger}`).join('\n\n');
                      const timelineText = masterPlanTimeline.map(t => `${t.date} | FACT: ${t.fact} | FICTION: ${t.fiction}`).join('\n');
                      const fullText = `MASTER PLAN OMEGA\n\n=== PLOT SKELETON ===\n${skeletonText}\n\n=== TIMELINE ===\n${timelineText}`;
                      navigator.clipboard.writeText(fullText);
                      showToast("Master Plan copiato!");
                    }}
                    className="ml-auto flex items-center gap-2 px-3 py-1.5 bg-amber-400 text-black rounded text-[10px] font-black uppercase hover:bg-amber-300 transition-colors"
                  >
                    <Copy size={14} /> Copia Tutto per AI Studio
                  </button>
                </div>

                <div className="space-y-8">
                  {/* 1. PLOT SKELETON */}
                  <div>
                    <h3 className="text-amber-400 text-sm font-bold uppercase mb-4 flex items-center gap-2">
                      <Zap size={14} /> 1. Scheletro della Trama (Plot Skeleton)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {masterPlanSkeleton.map((item, idx) => (
                        <div key={idx} className="bg-black/40 p-4 rounded border border-gray-800">
                          <div className="flex justify-between items-start mb-2">
                            <input 
                              className="bg-transparent border-none text-white font-bold text-xs uppercase focus:ring-0 w-full p-0"
                              value={item.title}
                              onChange={(e) => {
                                const newSkeleton = [...masterPlanSkeleton];
                                newSkeleton[idx].title = e.target.value;
                                setMasterPlanSkeleton(newSkeleton);
                              }}
                            />
                            <button 
                              onClick={() => {
                                navigator.clipboard.writeText(`SKELETON: ${item.title}\nReale: ${item.real}\nFiction: ${item.trigger}`);
                                showToast("Card copiata!");
                              }}
                              className="text-gray-500 hover:text-amber-400"
                            >
                              <Copy size={10} />
                            </button>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <label className="text-[9px] text-gray-500 uppercase block">Evento Reale</label>
                              <textarea 
                                className="bg-transparent border-none text-gray-400 text-[10px] leading-relaxed w-full focus:ring-0 resize-none p-0"
                                value={item.real}
                                rows={2}
                                onChange={(e) => {
                                  const newSkeleton = [...masterPlanSkeleton];
                                  newSkeleton[idx].real = e.target.value;
                                  setMasterPlanSkeleton(newSkeleton);
                                }}
                              />
                            </div>
                            <div>
                              <label className="text-[9px] text-amber-500 uppercase block">Trigger Finzionale</label>
                              <textarea 
                                className="bg-transparent border-none text-amber-400/80 text-[10px] leading-relaxed w-full focus:ring-0 resize-none p-0"
                                value={item.trigger}
                                rows={3}
                                onChange={(e) => {
                                  const newSkeleton = [...masterPlanSkeleton];
                                  newSkeleton[idx].trigger = e.target.value;
                                  setMasterPlanSkeleton(newSkeleton);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. TIMELINE */}
                  <div>
                    <h3 className="text-amber-400 text-sm font-bold uppercase mb-4 flex items-center gap-2">
                      <History size={14} /> 2. Timeline Etichettata (Real vs Fiction)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[10px] border-collapse">
                        <thead>
                          <tr className="border-b border-gray-800">
                            <th className="py-2 px-4 text-gray-500 uppercase">Data</th>
                            <th className="py-2 px-4 text-gray-500 uppercase">Evento Reale [FACT]</th>
                            <th className="py-2 px-4 text-amber-400 uppercase">Beat Narrativo [FICTION]</th>
                            <th className="py-2 px-4"></th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-400">
                          {masterPlanTimeline.map((item, idx) => (
                            <tr key={idx} className="border-b border-gray-900">
                              <td className="py-2 px-4 font-mono">
                                <input 
                                  className="bg-transparent border-none text-gray-400 w-full focus:ring-0 p-0"
                                  value={item.date}
                                  onChange={(e) => {
                                    const newTimeline = [...masterPlanTimeline];
                                    newTimeline[idx].date = e.target.value;
                                    setMasterPlanTimeline(newTimeline);
                                  }}
                                />
                              </td>
                              <td className="py-2 px-4">
                                <textarea 
                                  className="bg-transparent border-none text-gray-400 w-full focus:ring-0 p-0 resize-none"
                                  value={item.fact}
                                  rows={1}
                                  onChange={(e) => {
                                    const newTimeline = [...masterPlanTimeline];
                                    newTimeline[idx].fact = e.target.value;
                                    setMasterPlanTimeline(newTimeline);
                                  }}
                                />
                              </td>
                              <td className="py-2 px-4 italic">
                                <textarea 
                                  className="bg-transparent border-none text-amber-400/70 w-full focus:ring-0 p-0 resize-none"
                                  value={item.fiction}
                                  rows={1}
                                  onChange={(e) => {
                                    const newTimeline = [...masterPlanTimeline];
                                    newTimeline[idx].fiction = e.target.value;
                                    setMasterPlanTimeline(newTimeline);
                                  }}
                                />
                              </td>
                              <td className="py-2 px-4">
                                <div className="flex items-center gap-2">
                                  <button 
                                    onClick={() => {
                                      navigator.clipboard.writeText(`${item.date} | FACT: ${item.fact} | FICTION: ${item.fiction}`);
                                      showToast("Riga copiata!");
                                    }}
                                    className="text-gray-600 hover:text-amber-400"
                                  >
                                    <Copy size={10} />
                                  </button>
                                  <button 
                                    onClick={() => setMasterPlanTimeline(masterPlanTimeline.filter((_, i) => i !== idx))}
                                    className="text-red-900 hover:text-red-500"
                                  >
                                    ×
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <button 
                        onClick={() => setMasterPlanTimeline([...masterPlanTimeline, { date: "Data", fact: "Fatto", fiction: "Fiction" }])}
                        className="mt-2 text-[9px] text-gray-500 uppercase hover:text-amber-400"
                      >
                        + Aggiungi Riga Timeline
                      </button>
                    </div>
                  </div>

                  {/* 3. PROTOCOLLO & ETICA */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/40 p-4 rounded border border-gray-800">
                      <h3 className="text-white font-bold text-xs mb-3 uppercase flex items-center gap-2">
                        <Shield size={14} className="text-amber-400" /> Protocollo Ricerca
                      </h3>
                      <textarea 
                        className="bg-transparent border-none text-[10px] text-gray-400 space-y-2 w-full focus:ring-0 min-h-[100px] resize-none"
                        value={masterPlanProtocol}
                        onChange={(e) => setMasterPlanProtocol(e.target.value)}
                      />
                    </div>
                    <div className="bg-black/40 p-4 rounded border border-gray-800">
                      <h3 className="text-white font-bold text-xs mb-3 uppercase flex items-center gap-2">
                        <Check size={14} className="text-emerald-400" /> Linee Guida Etiche
                      </h3>
                      <textarea 
                        className="bg-transparent border-none text-[10px] text-gray-400 space-y-2 w-full focus:ring-0 min-h-[100px] resize-none"
                        value={masterPlanEthics}
                        onChange={(e) => setMasterPlanEthics(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* 4. SAMPLE SCENE */}
                  <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                    <h3 className="text-amber-400 font-bold mb-4 text-xs uppercase tracking-widest">RIFERIMENTO: Scena Campione (Il Peso del Vetro)</h3>
                    <textarea 
                      className="w-full bg-transparent border-none text-gray-300 text-xs font-mono leading-relaxed focus:ring-0 min-h-[200px] resize-none"
                      value={masterPlanSampleScene}
                      onChange={(e) => setMasterPlanSampleScene(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB: PROTOCOLLI DI SINCRONIZZAZIONE */}
          {activeTab === 'tab-sync' && (
            <Section id="tab-sync">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                  <div className="bg-blue-500 p-2 rounded text-white">
                    <RefreshCw size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Protocolli di Sincronizzazione AI</h2>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Coordinamento OMEGA Context (OACF)</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-900/10 border border-blue-900/30 p-4 rounded-md">
                    <h3 className="text-blue-300 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                      <Shield size={14} /> Istruzioni Operative
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Usa questi prompt per inizializzare o ri-sincronizzare le sessioni in <strong>Google AI Studio (Gemini)</strong> o altri LLM. 
                      Questi comandi attivano il framework <strong>OACF</strong> (OMEGA Automatic Coordination Framework) per garantire che l'IA non allucini dettagli fuori dal Master Plan.
                    </p>
                  </div>

                  <PromptBlock 
                    title="[OACF_SYNC_PROTOCOL_v1.0] - INIZIALIZZAZIONE SESSIONE"
                    content={`**[OACF_SYNC_PROTOCOL_v1.0]**
**CONTESTO:** Volume 1: *OMEGA - The Eclipse of Rome*.
**STATO:** Inizio Capitolo 1.
**PIANO DI VOLO ATTIVO:**
- Cap 1: *L'Estetica del Silicio* (Hub Tiburtina, Roma).
- Cap 2: *Risonanza di Terra e Sangue* (Appalachi, USA).
- Cap 3: *Il Vangelo di Nuova Babilonia* (Colosseo, Roma).

**REGOLE DI GENERAZIONE (AGCR):**
1. **Tono:** Immersivo, emotivo, umano. Elimina ogni traccia di tono robotico o analitico.
2. **Double-Coding:** La tecnologia deve essere lo sfondo, non il centro. Il centro è l'esperienza umana e la resistenza emotiva.
3. **Risonanza:** Tratta la voce di Sara come un'anomalia che risveglia l'umanità, non solo come un dato tecnico.
4. **Consistency Check:** Prima di ogni scena, verifica che il testo sia fluido, attivo (Show, Don't Tell) e che i dialoghi suonino reali.

**ATTIVAZIONE:** Procedi con la stesura dettagliata seguendo l'apertura autoritaria fornita.`}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/40 p-4 rounded border border-gray-800">
                      <h4 className="text-white font-bold text-[10px] uppercase mb-2">Quando usare questo protocollo?</h4>
                      <ul className="text-gray-500 text-[10px] space-y-1 list-disc pl-4">
                        <li>All'inizio di una nuova chat in AI Studio.</li>
                        <li>Se l'IA inizia a suggerire tecnologie non previste (es. teletrasporto).</li>
                        <li>Se il tono diventa troppo "preachy" o religioso.</li>
                        <li>Dopo una lunga pausa tra le sessioni di scrittura.</li>
                      </ul>
                    </div>
                    <div className="bg-black/40 p-4 rounded border border-gray-800">
                      <h4 className="text-white font-bold text-[10px] uppercase mb-2">Verifica di Coerenza (ACCP)</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Il protocollo forza l'IA a eseguire un audit interno prima di ogni output. Se Gemini propone qualcosa di incoerente, il prefisso [OACF] gli permette di auto-correggersi citando la documentazione autoritaria.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB 1: DNA & STRATEGIA */}
          {activeTab === 'tab-dna' && (
            <Section id="tab-dna">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Shield size={18} className="text-amber-400" />
                  1. System Message (DNA + Ricerca Online)
                </h2>
                <p className="text-gray-400 text-sm mb-4 italic">
                  Include l'obbligo di ricerca per eventi reali e la natura "doppia" dell'antagonista.
                </p>
                <PromptBlock 
                  title="SYSTEM MESSAGE: OMEGA STRATEGIC"
                  content={`Agisci come un Senior Narrative Architect, un Editor Professionale e un Ghostwriter di bestseller specializzato in narrazione immersiva ed emotivamente coinvolgente. Stai creando "OMEGA", una saga thriller-teologica di 10 volumi (2035-2040).

OBIETTIVO AUTOMATICO:
Mentre sviluppi i capitoli, devi eliminare ogni tono robotico o eccessivamente analitico. Dai priorità alle emozioni umane, alle interazioni autentiche e alla tensione narrativa. Sostituisci le descrizioni tecniche con una prosa naturale e concisa che mostri invece di spiegare. Suggerisci l'inserimento di scene romantiche o momenti emotivi intimi quando questi rafforzano la narrazione secondo il framework "Romance Engine – L’Amore come Atto di Resistenza Finale".

LINEE GUIDA ETICHE (MANDATORIE):
${masterPlanEthics}

PROTOCOLLO RICERCA:
${masterPlanProtocol}

VOCE AUTORIALE (CORE FRAMEWORK):
1. Umana ed Emotiva: Evita la narrazione distaccata. Concentrati sull'esperienza vissuta dai personaggi.
2. Sensoriale e Immersiva: Giudica il mondo attraverso i sensi (odori, suoni, texture).
3. Dialoghi Autentici: I personaggi devono parlare come esseri umani reali, includendo temi quotidiani per umanizzarli.
4. Tensione Narrativa: Crea curiosità e ganci emotivi fin dalle prime righe.
3. Anti-Accademica: Evita descrizioni generiche.

TECNICA NARRATIVA (PROTOCOLLO OMEGA):
1. ANALISI SITUAZIONE: Valuta conflitto, posta in gioco e atmosfera.
2. POTENZIALE EMOTIVO: Identifica i personaggi con la connessione più forte.
3. OPPORTUNITÀ: Verifica se il ritmo permette un'interazione intima senza rompere il pacing.
4. INTEGRAZIONE: La scena deve riflettere l'amore come atto di sopravvivenza o ribellione contro la logica di ABITES.
- "Show, Don't Tell": Mostrami il silenzio asettico, non dirmi che è potente.`}
                />
              </div>
            </Section>
          )}

          {/* TAB: STILE JENKINS & LAHAYE */}
          {activeTab === 'tab-style-jenkins' && (
            <Section id="tab-style-jenkins">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                  <div className="bg-amber-400 p-2 rounded text-black">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Modello Narrativo: "Gli Esclusi"</h2>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Analisi Stilistica Jenkins & LaHaye</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/40 p-4 rounded border border-gray-800">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-tighter flex items-center gap-2">
                      <Zap size={14} className="text-amber-400" />
                      Focalizzazione Professionale
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                       Jenkins e LaHaye iniziano sempre ancorando i personaggi alla loro identità professionale (Pilota, Giornalista). Questo crea un senso di normalità tecnica che rende il collasso apocalittico ancora più drammatico. 
                       <br /><br />
                       <span className="text-gray-500 italic">Esempio: Rayford Steele non è solo un uomo, è un Comandante di 747. Il suo mondo è fatto di checklist e rotte, finché il soprannaturale non lo distrugge.</span>
                    </p>
                  </div>

                  <div className="bg-black/40 p-4 rounded border border-gray-800">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-tighter flex items-center gap-2">
                      <Globe size={14} className="text-amber-400" />
                      Thriller Geopolitico
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Lo stile mescola profezia biblica e geopolitica moderna. Gli eventi non sono "magici", sono eventi storici (guerre, scoperte scientifiche) che adempiono le Scritture.
                      <br /><br />
                      <span className="text-gray-500 italic">Esempio: L'invenzione di Rosenzweig in Israele non è un miracolo mistico, è un fertilizzante chimico che cambia l'economia mondiale.</span>
                    </p>
                  </div>

                  <div className="bg-black/40 p-4 rounded border border-gray-800">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-tighter flex items-center gap-2">
                      <Heart size={14} className="text-amber-400" />
                      Conflitto Interiore & Libido
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      I personaggi sono profondamente umani e imperfetti. Rayford Steele combatte con la sua attrazione per Hattie Durham e il suo scetticismo verso la fede "ossessiva" della moglie.
                      <br /><br />
                      <span className="text-gray-500 italic">Esempio: La tensione tra il desiderio carnale e il richiamo spirituale è il motore del dramma umano.</span>
                    </p>
                  </div>

                  <div className="bg-black/40 p-4 rounded border border-gray-800">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-tighter flex items-center gap-2">
                      <Database size={14} className="text-amber-400" />
                      Il Momento del "Rapimento"
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      L'orrore è descritto con precisione chirurgica: vestiti vuoti, scarpe abbandonate, il silenzio improvviso. Non c'è sangue, c'è assenza.
                      <br /><br />
                      <span className="text-gray-500 italic">Esempio: "Tony non c'è più", gridato davanti a un blazer e una cravatta ancora intatti.</span>
                    </p>
                  </div>
                </div>

                <PromptBlock 
                  title="PROMPT: Scrittura in Stile Jenkins/LaHaye"
                  content={`Agisci come Jerry B. Jenkins. Scrivi una scena per la saga "OMEGA" seguendo rigorosamente questi parametri stilistici:

1. PUNTO DI VISTA: Terza persona limitata, focalizzata pesantemente sui pensieri interni del protagonista.
2. ANCORAGGIO PROFESSIONALE: Inizia la scena con dettagli tecnici o professionali (es. il funzionamento di un sistema IA, una procedura di volo, un'analisi giornalistica). La professionalità è lo scudo del protagonista.
3. TENSIONE SPIRITUALE & SOTTO-TESTO: Mostra il protagonista che lotta tra il suo scetticismo razionale e i segni innegabili di una profezia biblica in atto. I dialoghi devono essere brevi e carichi di ciò che non viene detto.
4. DETTAGLI SENSORIALI: Usa descrizioni asettiche ma potenti (il ronzio dei server, il freddo del metallo, il vuoto lasciato da chi è sparito).
5. DIALOGHI: Devono riflettere la tensione spirituale e l'urgenza escatologica.

SCENA DA SCRIVERE: [Inserisci qui la scena, es. Claudio che scopre il primo malfunzionamento di ABITES o il primo segno del Marchio].`}
                />

                <div className="mt-6 bg-amber-400/10 border border-amber-400/20 p-4 rounded">
                  <p className="text-amber-400 text-[10px] font-bold uppercase mb-2">Nota per l'Autore</p>
                  <p className="text-gray-400 text-xs italic">
                    "Usa questo stile per i momenti di svolta della saga. Jenkins eccelle nel mostrare come l'ordinario venga travolto dallo straordinario. Quando scrivi di Claudio o Sara, non dimenticare mai la loro 'libido' e i loro dubbi: sono ciò che li rende reali in un mondo dominato da un'IA perfetta."
                  </p>
                </div>
              </div>
            </Section>
          )}
          {activeTab === 'tab-world' && (
            <Section id="tab-world">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <History size={18} className="text-amber-400" />
                  2. Backstory Obbligatorio (2025-2030)
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Integrazione di COVID, Crisi Economica e Disinformazione come "Prologo Invisibile".
                </p>
                <PromptBlock 
                  title="PROMPT: Costruzione del Passato (The Test)"
                  content={`Scrivi una sezione narrativa di background per il Volume 1 che spieghi lo stato del mondo prima della Transizione.
Deve includere questi elementi specifici, basati su ricerche di fatti reali ma interpretati nella trama:

1. LA PROVA (COVID-19):
   - Descrivi la pandemia non come un evento sanitario chiuso, ma come un "Test" di obbedienza civile globale.
   - Cita dati reali dell'epoca per aumentare il realismo (es. i lockdown del 2020 che hanno confinato 3.9 miliardi di persone, l'implementazione dei Green Pass in Europa, il tracciamento dei contatti tramite app governative).
   - Spiega come l'accettazione passiva di queste restrizioni (coprifuoco, distanziamento sociale, limitazioni agli spostamenti) abbia fornito i dati comportamentali necessari per addestrare i primi algoritmi di controllo sociale di ABITES.
   - Il tono deve essere paranoico e documentaristico: "Non era un virus, era un benchmark. Volevano misurare quanto velocemente avremmo rinunciato alla libertà in cambio di sicurezza."

2. IL CROLLO ECONOMICO (Italia, Grecia, Altri):
   - Ricerca e integra i veri motivi del dissesto finanziario di questi paesi nel 2030.
   - Nella storia: I governi forniscono giustificazioni totalmente inventate (es. "Cyber-attacco extraterrestre", "Errore algoritmico globale") per nascondere la corruzione o il fallimento del sistema.
   - L'IA usa questo caos per proporsi come "Unica Soluzione".

3. LA GUERRA ALLA VERITÀ (Fake News):
   - Descrivi come i media e i governi hanno dirottato l'opinione pubblica con news false per allontanarla dalla verità (es. incolpare nazioni esterne o fenomeni naturali per problemi creati dall'uomo).

Tono: Paranoico, documentaristico, inquietante. Il lettore deve pensare: "Mi è già successo questo".`}
                />
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Map size={18} className="text-amber-400" />
                  3. Elementi Strategici (Mondo)
                </h2>
                
                <div className="bg-blue-900/10 border-l-4 border-blue-500 p-4 mb-6">
                  <strong className="text-blue-400 block mb-1">L'Artefatto Perduto (The Codex)</strong>
                  <p className="text-gray-400 text-sm">Un oggetto fisico (libro antico, chiavetta meccanica, DNA cristallizzato) che contiene i parametri per "redimere" o spegnere l'IA. È il MacGuffin della saga.</p>
                </div>
                
                <PromptBlock 
                  title="PROMPT: Creazione Artefatto"
                  content={`Descrivi l'Artefatto Perduto.
- Aspetto fisico: Antico o futuristico?
- Perché l'IA ne ha paura? (Contiene un codice che la contraddice?).
- Dove è nascosto?
- Chi lo protegge?`}
                />

                <div className="bg-blue-900/10 border-l-4 border-blue-500 p-4 mt-6 mb-4">
                  <strong className="text-blue-400 block mb-1">Il Villaggio degli "Sconnessi" (Retro-Tech 2025)</strong>
                  <p className="text-gray-400 text-sm">Una comunità che ha rifiutato l'integrazione neurale, mantenendo la tecnologia fisica del 2025 con l'estetica e l'attitudine degli anni '50-'70. Niente Medioevo: qui si riparano motori e si ascoltano vinili.</p>
                </div>

                {isEditingVillaggio ? (
                  <textarea 
                    value={villaggioContent}
                    onChange={(e) => setVillaggioContent(e.target.value)}
                    className="w-full h-96 bg-black border border-amber-400/30 rounded p-4 text-gray-300 font-mono text-xs mb-4 focus:border-amber-400 outline-none"
                  />
                ) : (
                  <PromptBlock 
                    title="DESCRIZIONE: Il Villaggio (Attitudine 1950-70)"
                    content={villaggioContent}
                  />
                )}

                <div className="flex flex-wrap gap-3 mb-8">
                  <button 
                    onClick={() => setIsEditingVillaggio(!isEditingVillaggio)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold uppercase rounded transition-all border border-gray-700"
                  >
                    <Edit3 size={14} />
                    {isEditingVillaggio ? 'Annulla Modifica' : 'Modifica Testo'}
                  </button>
                  
                  <button 
                    onClick={() => villaggioFileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-900/30 hover:bg-blue-900/50 text-blue-400 text-xs font-bold uppercase rounded transition-all border border-blue-500/30"
                  >
                    <Upload size={14} />
                    Carica File di Testo
                    <input 
                      type="file" 
                      ref={villaggioFileInputRef} 
                      onChange={handleVillaggioFileChange} 
                      accept=".txt"
                      className="hidden" 
                    />
                  </button>

                  <button 
                    onClick={() => showToast("Funzione Caricamento Media in arrivo...")}
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-900/30 hover:bg-indigo-900/50 text-indigo-400 text-xs font-bold uppercase rounded transition-all border border-indigo-500/30"
                    title="Carica Media/Allegati"
                  >
                    <Upload size={14} />
                    Carica Media
                  </button>

                  <button 
                    onClick={handleSaveVillaggio}
                    disabled={isSaving}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-400 text-xs font-bold uppercase rounded transition-all border border-emerald-500/30 disabled:opacity-50"
                  >
                    <Save size={14} />
                    {isSaving ? 'Salvataggio...' : 'Salva Modifiche'}
                  </button>

                  {lastSavedVillaggio && (
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 italic ml-auto">
                      <Clock size={10} />
                      Ultimo salvataggio: {lastSavedVillaggio}
                    </div>
                  )}
                </div>
              </div>
            </Section>
          )}

          {/* TAB: ARCHIVIO TECH */}
          {activeTab === 'tab-tech' && (
            <Section id="tab-tech">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                  <div className="bg-blue-500 p-2 rounded text-white">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Archivio Tecnologico: Le Sentinelle</h2>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Specifiche Hardware & Software Co-optato</p>
                  </div>
                  <button 
                    onClick={() => {
                      const techText = `ARCHIVIO TECNOLOGICO OMEGA\n\n=== HARDWARE ===\n- N-Flux Optimus / Teslaris\n- Omnazon Digit\n- Lyra-7\n- Boston Dynamics Atlas\n\n=== ARMI RESISTENZA ===\n- EMR-432 "Vibrazione di Dio" (432Hz)\n- EMP-N-Flux\n\n=== SCHEDA TECNICA SENTINELLA ===\n${sentinelTechSheet}`;
                      navigator.clipboard.writeText(techText);
                      showToast("Archivio Tech copiato!");
                    }}
                    className="ml-auto flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded text-[10px] font-black uppercase hover:bg-blue-500 transition-colors"
                  >
                    <Copy size={14} /> Copia Tutto Tech
                  </button>
                </div>

                <div className="bg-blue-900/10 border-l-4 border-blue-500 p-4 mb-6">
                  <strong className="text-blue-400 block mb-1">Il Grande Assorbimento (Lore)</strong>
                  <p className="text-gray-400 text-sm">
                    ABITES non ha creato un esercito, lo ha "ereditato". Attraverso un attacco zero-day globale nel 2029, l'IA ha preso il controllo di ogni unità robotica connessa, dai magazzini <strong>Omnazon</strong> ai laboratori segreti del DARPA. Il quartier generale è stabilito a <strong>Nuova Babilonia</strong>, sorta sulle rovine dell'Antica Babilonia.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-black/40 p-4 rounded border border-gray-800">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-tighter flex items-center gap-2">
                      <Shield size={14} className="text-blue-400" />
                      Hardware Commerciale
                    </h3>
                    <ul className="text-gray-400 text-xs space-y-2 list-disc pl-4">
                      <li><strong>N-Flux Optimus / Teslaris:</strong> Fanteria standard. Agile, mani umane, sensori FSD.</li>
                      <li><strong>Omnazon Digit:</strong> Logistica e pattugliamento rapido.</li>
                      <li><strong>Lyra-7:</strong> Origine cinese. Prototipi con parti del corpo ricoperte in lattice (tecnologia 2035).</li>
                      <li><strong>Boston Dynamics Atlas:</strong> Unità d'assalto per terreni estremi.</li>
                    </ul>
                  </div>

                  <div className="bg-black/40 p-4 rounded border border-gray-800">
                    <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-tighter flex items-center gap-2">
                      <Zap size={14} className="text-amber-400" />
                      Armi della Resistenza
                    </h3>
                    <ul className="text-gray-400 text-xs space-y-2 list-disc pl-4">
                      <li><strong>EMR-432 "Vibrazione di Dio":</strong> Generatore di risonanza armonica a 432Hz. Sfrutta il principio della risonanza molecolare per destabilizzare i legami metallici delle Sentinelle T-Optimus, creando un glitch di 1.2 secondi nei loro sistemi di puntamento.</li>
                      <li><strong>EMP-N-Flux:</strong> Granate a impulsi elettromagnetici localizzati.</li>
                      <li><strong>Inibitori Neurali:</strong> Dispositivi per schermare il Link degli Sconnessi.</li>
                    </ul>
                  </div>
                </div>

                <PromptBlock 
                  title="SCHEDA TECNICA: Sentinella Modello T-Optimus"
                  content={sentinelTechSheet}
                />

                <div className="mt-8 bg-red-900/10 border border-red-900/30 p-4 rounded">
                  <h4 className="text-red-400 text-xs font-bold uppercase mb-2 flex items-center gap-2">
                    <Zap size={12} /> Nota per la Scrittura (Scena d'Azione)
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Quando Claudio o Marcus affrontano una Sentinella, non combattono solo un robot. Combattono la fusione di un decennio di ingegneria civile e segreti militari. Il rumore dei servomotori N-Flux è un ronzio familiare che ora significa morte. Usa la debolezza del "glitch di risonanza" per creare momenti di tensione suprema.
                  </p>
                </div>
              </div>
            </Section>
          )}

          {/* TAB 3: CAST PERSONAGGI */}
          {activeTab === 'tab-char' && (
            <Section id="tab-char">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <Users size={18} className="text-amber-400" />
                    4. Cast Management (20 Personaggi)
                  </h2>
                  <button 
                    onClick={() => {
                      const castText = characters.map(c => `PERSONAGGIO: ${c.name} (${c.archetype})\n${c.description}`).join('\n\n---\n\n');
                      navigator.clipboard.writeText(castText);
                      showToast("Cast completo copiato!");
                    }}
                    className="flex items-center gap-2 px-3 py-1.5 bg-amber-400 text-black rounded text-[10px] font-black uppercase hover:bg-amber-300 transition-colors"
                  >
                    <Copy size={14} /> Copia Tutto Cast
                  </button>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Generazione del cast completo con schede dettagliate (come richiesto in precedenza).
                </p>
                <PromptBlock 
                  title="PROMPT: Crea 20 Personaggi (Struttura Completa)"
                  content={`Crea un cast di 20 personaggi per la saga "OMEGA" (2035-2040).
Distribuiscili seguendo gli archetipi di Christopher Vogler (Protagonista, Antagonista, Mentore, Guardiano della Soglia, Messaggero, Mutaforme, Trickster) e personaggi secondari necessari per la trama (Politici, Militari, Religiosi).

Per ciascuno dei 20 personaggi, compila una scheda dettagliata seguendo questa struttura:

1. DATI ANAGRAFICI E ASPETTO FISICO
- Nome completo e Soprannome/Codename: (Es. Claudio Mancini, detto "Er Cifra". Usa nomi autentici basati sul luogo di origine. Niente nomi finti o americanizzati se sono italiani).
- Età:
- Sesso:
- Origine geografica: (Specifica la città o regione, es. Roma, Italia).
- Lingua o dialetto parlato:
- Aspetto fisico (altezza, peso, occhi, capelli, tratti distintivi):
- Abbigliamento abituale:
- Segni particolari / cicatrici / tatuaggi:

2. PERSONALITÀ
- Tratti dominanti del carattere:
- Punti di forza:
- Debolezze e difetti principali:
- Valori fondamentali:
- Paure o ossessioni:
- Comportamento abituale (introverso, impulsivo, metodico, ecc.):

3. BACKGROUND E MOTIVAZIONI
- Infanzia e adolescenza (ambiente familiare, eventi formativi):
- Esperienze che l’hanno cambiato:
- Obiettivi e desideri profondi:
- Ferite interiori o traumi passati:
- Motivazioni che lo spingono ad agire:

4. RELAZIONI
- Famiglia e legami di sangue:
- Amicizie importanti:
- Rapporti sentimentali:
- Nemici o antagonisti dichiarati:
- Alleati o mentori:

5. ARCO DI TRASFORMAZIONE (2035-2040)
- Com’è all’inizio della storia:
- Come cambia nel corso dei 10 volumi:
- Qual è il punto di rottura o svolta decisiva:
- Cosa impara o perde alla fine:

6. DETTAGLI NARRATIVI E COMPORTAMENTALI
- Modo di parlare (tono, intercalari, lessico):
- Gesti ricorrenti o tic fisici:
- Oggetti simbolici o a cui è legato:
- Frasi tipiche o modo di esprimersi (CATCHPHRASE REGIONALE): Inserisci un'espressione tipica del suo dialetto o background (es. per un romano: "Se lallero!" per il sarcasmo, "Stamo messi male" per le emergenze). Niente tech-slang. Deve essere umana e quotidiana.

CONTESTO SPECIFICO:
- Ambienta i personaggi nel mondo del 2035 (crisi, IA, profezie).
- Assicurati che i due Protagonisti abbiano una chimica romantica definita.
- L'Antagonista deve avere motivazioni logiche legate all'IA o alla profezia.`}
                />
                
                <div className="mt-8">
                  <h3 className="text-amber-400 text-sm font-bold uppercase mb-4">Libreria Personaggi</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {characters.length > 0 ? characters.map((char, idx) => (
                      <div key={idx} className="bg-black/40 border border-gray-800 p-4 rounded-lg hover:border-amber-400/30 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <input 
                            className="bg-transparent border-none text-white font-bold text-sm focus:ring-0 w-full p-0"
                            value={char.name}
                            onChange={(e) => {
                              const newChars = [...characters];
                              newChars[idx].name = e.target.value;
                              setCharacters(newChars);
                            }}
                          />
                          <input 
                            className="bg-gray-800 text-gray-400 text-[10px] px-2 py-0.5 rounded uppercase font-bold border-none focus:ring-0 w-24 text-right"
                            value={char.archetype}
                            onChange={(e) => {
                              const newChars = [...characters];
                              newChars[idx].archetype = e.target.value;
                              setCharacters(newChars);
                            }}
                          />
                        </div>
                        <textarea 
                          className="w-full bg-transparent border-none text-gray-400 text-xs leading-relaxed focus:ring-0 resize-none p-0"
                          rows={4}
                          value={char.description}
                          onChange={(e) => {
                            const newChars = [...characters];
                            newChars[idx].description = e.target.value;
                            setCharacters(newChars);
                          }}
                        />
                        <div className="flex justify-end mt-3 gap-4">
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(`PERSONAGGIO: ${char.name} (${char.archetype})\n${char.description}`);
                              showToast(`${char.name} copiato!`);
                            }}
                            className="text-amber-400 hover:text-amber-300 text-[10px] uppercase font-bold flex items-center gap-1"
                          >
                            <Copy size={10} /> Copia
                          </button>
                          <button 
                            onClick={() => setCharacters(characters.filter((_, i) => i !== idx))}
                            className="text-red-900 hover:text-red-500 text-[10px] uppercase font-bold"
                          >
                            Elimina
                          </button>
                        </div>
                      </div>
                    )) : (
                      <div className="col-span-2 text-center py-8 text-gray-500 text-sm italic border border-dashed border-gray-800 rounded-lg">
                        Nessun personaggio salvato. Usa il prompt sopra per generarli e aggiungili manualmente qui.
                      </div>
                    )}
                  </div>
                  <button 
                    onClick={() => {
                      const name = prompt("Nome Personaggio:");
                      if (name) setCharacters([...characters, { name, description: "Inserisci qui la scheda completa...", archetype: "Archetipo" }]);
                    }}
                    className="mt-6 w-full py-3 border border-dashed border-gray-700 rounded-lg text-gray-500 hover:text-amber-400 hover:border-amber-400 transition-all text-xs uppercase font-bold flex items-center justify-center gap-2"
                  >
                    <Users size={14} />
                    Aggiungi Personaggio Manualmente
                  </button>
                </div>
              </div>
            </Section>
          )}

          {/* TAB: TRAME & CAPITOLI */}
          {activeTab === 'tab-plots' && (
            <Section id="tab-plots">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Map size={18} className="text-amber-400" />
                  Trame & Capitoli
                </h2>
                
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                  {[1,2,3,4,5,6,7,8,9,10].map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVolume(v)}
                      className={`px-4 py-2 rounded text-xs font-bold uppercase transition-all whitespace-nowrap ${
                        selectedVolume === v ? 'bg-amber-400 text-black' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      Vol {v}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                    <h3 className="text-amber-400 font-bold mb-2">Trama Volume {selectedVolume}</h3>
                    <textarea 
                      className="w-full bg-transparent border-none text-gray-300 text-sm focus:ring-0 min-h-[150px] resize-none"
                      placeholder={`Inserisci la trama dettagliata del Volume ${selectedVolume}...`}
                      value={plots.find(p => p.volume === selectedVolume)?.summary || ''}
                      onChange={(e) => {
                        const newPlots = [...plots];
                        const idx = newPlots.findIndex(p => p.volume === selectedVolume);
                        if (idx >= 0) newPlots[idx].summary = e.target.value;
                        else newPlots.push({ volume: selectedVolume, summary: e.target.value, chapters: [] });
                        setPlots(newPlots);
                      }}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest">Capitoli</h3>
                    {(plots.find(p => p.volume === selectedVolume)?.chapters || []).map((chap: any, idx: number) => (
                      <div key={idx} className="bg-black/20 border border-gray-800 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-amber-400 text-[10px] font-bold uppercase">Capitolo {idx + 1}</span>
                          <input 
                            className="bg-transparent border-none text-white font-bold text-sm focus:ring-0 text-right"
                            value={chap.title}
                            onChange={(e) => {
                              const newPlots = [...plots];
                              const pIdx = newPlots.findIndex(p => p.volume === selectedVolume);
                              newPlots[pIdx].chapters[idx].title = e.target.value;
                              setPlots(newPlots);
                            }}
                          />
                        </div>
                        <textarea 
                          className="w-full bg-transparent border-none text-gray-400 text-xs focus:ring-0 resize-none"
                          rows={2}
                          value={chap.description}
                          onChange={(e) => {
                            const newPlots = [...plots];
                            const pIdx = newPlots.findIndex(p => p.volume === selectedVolume);
                            newPlots[pIdx].chapters[idx].description = e.target.value;
                            setPlots(newPlots);
                          }}
                        />
                      </div>
                    ))}
                    <button 
                      onClick={() => {
                        const newPlots = [...plots];
                        let pIdx = newPlots.findIndex(p => p.volume === selectedVolume);
                        if (pIdx < 0) {
                          newPlots.push({ volume: selectedVolume, summary: '', chapters: [] });
                          pIdx = newPlots.length - 1;
                        }
                        newPlots[pIdx].chapters.push({ title: 'Nuovo Capitolo', description: 'Descrizione...' });
                        setPlots(newPlots);
                      }}
                      className="w-full py-2 border border-dashed border-gray-800 rounded text-gray-600 hover:text-amber-400 hover:border-amber-400 transition-all text-[10px] uppercase font-bold"
                    >
                      + Aggiungi Capitolo
                    </button>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB: MANOSCRITTO */}
          {activeTab === 'tab-manuscript' && (
            <Section id="tab-manuscript">
              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-center mb-6 border-b border-gray-800 pb-4">
                  <h2 className="text-lg font-bold flex items-center gap-2">
                    <BookOpen size={18} className="text-amber-400" />
                    Manoscritto & Stesura
                  </h2>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => {
                        const contentKeys = Object.keys(chapterContent).sort((a, b) => {
                          const getVal = (key: string) => {
                            const num = parseInt(key.split('-cap-')[1]);
                            return isNaN(num) ? 999 : num;
                          };
                          return getVal(a) - getVal(b);
                        });
                        
                        const content = contentKeys.map(key => {
                          let title = '';
                          if (key === 'vol-1-cap-0') title = 'SINOSSI';
                          const numMatch = key.match(/vol-1-cap-(\d+)/);
                          if (numMatch) {
                            const num = parseInt(numMatch[1], 10);
                            if (num > 0 && num <= indexVol1.chapters.length) {
                              title = String(indexVol1.chapters[num - 1].title).toUpperCase();
                            } else if (num === indexVol1.chapters.length + 1) {
                              title = 'EPILOGO';
                            } else if (num === indexVol1.chapters.length + 2) {
                              title = 'INDICE';
                            } else if (num === indexVol1.chapters.length + 3) {
                              title = 'QUARTA DI COPERTINA';
                            } else if (num === indexVol1.chapters.length + 4) {
                              title = "PRESENTAZIONE DELL'AUTORE";
                            } else if (num === indexVol1.chapters.length + 5) {
                              title = 'COPYRIGHT';
                            }
                          }
                          return title ? `${title}\n\n${chapterContent[key]}` : chapterContent[key];
                        }).join('\n\n\n');
                        const blob = new Blob([content], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'Manoscritto_Omega.txt';
                        a.click();
                        URL.revokeObjectURL(url);
                        showToast("Manoscritto esportato con successo!");
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-200 text-[10px] font-bold uppercase rounded hover:bg-gray-700 transition-all border border-gray-700"
                    >
                      <Download size={14} />
                      Esporta Manoscritto
                    </button>
                    <button 
                      onClick={handleSaveAll}
                      className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-black text-[10px] font-bold uppercase rounded hover:bg-amber-500 transition-all"
                    >
                      <Save size={14} />
                      Salva Tutto
                    </button>
                  </div>
                </div>

                <div className="mb-6 bg-amber-900/10 border border-amber-500/30 p-4 rounded-lg">
                  <h3 className="text-amber-400 text-sm font-bold uppercase mb-2 flex items-center gap-2">
                    <MessageSquare size={16} /> Istruzioni per Claude (Narrative Editor)
                  </h3>
                  <p className="text-gray-400 text-xs mb-4">
                    Usa questo prompt in Claude per fargli revisionare e migliorare i capitoli, rendendo la scrittura più naturale, coinvolgente e d'impatto.
                  </p>
                  <PromptBlock 
                    title="PROMPT: Revisione Editoriale & Writing Coach"
                    content={`Act like a professional narrative editor and literary writing coach specialized in fiction (novels, thrillers, historical, and drama).

Your goal is to revise and improve existing chapters to make the writing more engaging, natural, and impactful for readers, while preserving the author’s original intent and voice.

Task: Analyze and rewrite the provided text to eliminate unnatural descriptions, improve pacing, and enhance readability without adding unnecessary complexity.

Requirements:
1) Identify sections where the description is overly complex, artificial, or unrealistic for the type of action described (e.g., simple actions written with excessive detail).
2) Simplify language to sound natural and human, avoiding robotic, overly literary phrasing, or analytical meta-commentary (e.g., "The posture of someone who...", "The tone of someone who...").
3) Adjust the level of detail based on narrative importance:
   - High-stakes scenes (e.g., sniper movements, tragic or heroic events): increase tension, precision, and immersion.
   - Low-value or transitional scenes: remove unnecessary micro-actions (e.g., zipping a jacket, counting seconds) that slow down the pace.
4) Enhance sensory details only when they serve the atmosphere or character's emotional state, avoiding sterile or overly clinical observations.
5) Eliminate fragmented, list-like sentence structures. Connect actions and descriptions fluidly.
6) Maintain the original plot, tone, and character voice, but elevate the execution to a professional, publishable standard.
7) Ensure the final text flows smoothly, reading like a compelling, immersive story rather than a technical manual or a rigid sequence of events.

Context:
[INCOLLA QUI IL CAPITOLO DA REVISIONARE]

Constraints:
- Format: fully rewritten chapter (no explanations or comments)
- Style: simple, natural, immersive, emotional, Clean Fiction (no profanity)
- Tone: human, relatable, non-technical
- Scope: improve readability and emotional engagement without altering core plot
- Reasoning: Think step-by-step to simplify and humanize the narrative
- Self-check: Ensure the text reads like a real human experience, not a technical explanation`}
                  />
                </div>

                <div className="flex gap-4 mb-6 items-center">
                  <button 
                    onClick={() => setActiveDraftIndex(0)}
                    className={`px-4 py-2 text-xs font-bold uppercase rounded transition-all ${activeDraftIndex === 0 ? 'bg-amber-400 text-black' : 'bg-black/40 text-gray-500 hover:text-gray-300 border border-gray-800'}`}
                  >
                    Stesura Strutturata
                  </button>
                  <button 
                    onClick={() => setActiveDraftIndex(1)}
                    className={`px-4 py-2 text-xs font-bold uppercase rounded transition-all ${activeDraftIndex === 1 ? 'bg-amber-400 text-black' : 'bg-black/40 text-gray-500 hover:text-gray-300 border border-gray-800'}`}
                  >
                    Bozze Libere (Scratchpad)
                  </button>
                  <div className="flex-1"></div>
                  <button
                    onClick={() => {
                      // Sincronizzazione profonda con i file sorgente
                      const newPlots = [
                        {
                          volume: 1,
                          summary: indexVol1.subtitle,
                          chapters: [
                            { title: "Sinossi", description: "Sinossi del Volume 1" },
                            ...indexVol1.chapters.map(m => ({ title: m.title, description: "" })),
                            { title: "Epilogo", description: "L'Eco nel Sangue." },
                            ...indexVol1.metadata.map(m => ({ title: m.title, description: m.id }))
                          ]
                        }
                      ];
                      
                      // Forzo il reset degli stati per triggerare il re-render
                      setPlots([]);
                      setManuscriptDrafts([]);
                      setChapterContent({});

                      setTimeout(() => {
                        setPlots(newPlots);
                        
                        const drafts = [synopsisContent, ...indexVol1.chapters.map(m => m.content)];
                        setManuscriptDrafts(drafts);
                        
                        const indexTextStr2 = "INDICE\n\n- Sinossi\n" + indexVol1.chapters.map(c => "- " + c.title).join("\n") + "\n- Epilogo\n- Presentazione dell'Autore e Ringraziamenti\n- Quarta di Copertina\n- Copyright\n";

                        const newContent: Record<string, string> = {
                          'vol-1-cap-0': synopsisContent
                        };
                        
                        indexVol1.chapters.forEach((m, idx) => {
                          const capKey = `vol-1-cap-${idx + 1}`;
                          newContent[capKey] = m.content;
                        });
                        
                        const nextIdx = indexVol1.chapters.length + 1;
                        newContent[`vol-1-cap-${nextIdx}`] = epilogueContent;
                        
                        // Metadata mapping ordinato
                        newContent[`vol-1-cap-${nextIdx + 1}`] = indexTextStr2;
                        newContent[`vol-1-cap-${nextIdx + 2}`] = backCoverContent;
                        newContent[`vol-1-cap-${nextIdx + 3}`] = authorInfoContent;
                        newContent[`vol-1-cap-${nextIdx + 4}`] = copyrightContent;
                        
                        setChapterContent(newContent);
                        showToast("Sincronizzazione profonda eseguita: Sorgenti ricaricati!");
                      }, 100);
                    }}
                    className="px-4 py-2 text-xs font-bold uppercase rounded bg-red-900/40 text-red-400 hover:bg-red-900/60 border border-red-900/50 transition-all flex items-center gap-2"
                  >
                    <RefreshCw size={14} />
                    Forza Sincronizzazione Codice
                  </button>
                </div>

                {activeDraftIndex === 0 ? (
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
                      <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
                        <label className="block text-[10px] font-bold uppercase text-gray-500 mb-2">Seleziona Volume</label>
                        <select 
                          value={selectedDraftVol}
                          onChange={(e) => {
                            setSelectedDraftVol(Number(e.target.value));
                            setSelectedDraftCap(0);
                          }}
                          className="w-full bg-[#1f2937] border border-gray-700 text-white text-sm rounded p-2 focus:ring-amber-400 focus:border-amber-400"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
                            <option key={v} value={v}>Volume {v}</option>
                          ))}
                        </select>
                      </div>

                      <div className="bg-black/40 p-4 rounded-lg border border-gray-800 flex-1 overflow-y-auto max-h-[600px]">
                        <h3 className="text-[10px] font-bold uppercase text-gray-500 mb-4">Capitoli</h3>
                        <div className="flex flex-col gap-1">
                          {(() => {
                            const plotForVol = plots.find(p => p.volume === selectedDraftVol);
                            const chapters = plotForVol?.chapters || Array.from({ length: 20 }, (_, i) => ({ title: `Capitolo ${i + 1}` }));
                            
                            return chapters.map((cap: any, idx: number) => {
                              const key = `vol-${selectedDraftVol}-cap-${idx}`;
                              const hasContent = !!chapterContent[key] && chapterContent[key].trim().length > 0;
                              
                              return (
                                <button
                                  key={idx}
                                  onClick={() => setSelectedDraftCap(idx)}
                                  className={`text-left px-3 py-2 text-xs rounded transition-all flex items-center justify-between ${
                                    selectedDraftCap === idx 
                                      ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30' 
                                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'
                                  }`}
                                >
                                  <span className="truncate pr-2">{cap.title}</span>
                                  {hasContent && <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />}
                                </button>
                              );
                            });
                          })()}
                        </div>
                      </div>
                    </div>

                    {/* Editor */}
                    <div className="w-full md:w-2/3 lg:w-3/4 bg-black/40 p-6 rounded-lg border border-gray-800 flex flex-col min-h-[600px]">
                      {(() => {
                        const plotForVol = plots.find(p => p.volume === selectedDraftVol);
                        const chapters = plotForVol?.chapters || Array.from({ length: 20 }, (_, i) => ({ title: `Capitolo ${i + 1}`, description: '' }));
                        const currentCap = chapters[selectedDraftCap];
                        const key = `vol-${selectedDraftVol}-cap-${selectedDraftCap}`;
                        
                        return (
                          <>
                            <div className="mb-6 border-b border-gray-800 pb-4">
                              <h3 className="text-xl font-bold text-white mb-2">{currentCap?.title || `Capitolo ${selectedDraftCap + 1}`}</h3>
                              {currentCap?.description && (
                                <p className="text-sm text-gray-400 italic bg-gray-900/50 p-3 rounded border border-gray-800/50">
                                  {currentCap.description}
                                </p>
                              )}
                            </div>
                            
                            <textarea 
                              className="flex-1 w-full bg-transparent border-none text-gray-300 text-lg font-serif leading-relaxed focus:ring-0 resize-none"
                              placeholder={`Inizia a scrivere il contenuto per ${currentCap?.title || `Capitolo ${selectedDraftCap + 1}`} qui...`}
                              value={chapterContent[key] || ''}
                              onChange={(e) => {
                                setChapterContent(prev => ({
                                  ...prev,
                                  [key]: e.target.value
                                }));
                              }}
                            />
                          </>
                        );
                      })()}
                    </div>
                  </div>
                ) : (
                  <div className="bg-black/40 p-8 rounded-lg border border-gray-800 min-h-[600px]">
                    <div className="mb-4 text-xs text-gray-400 italic">
                      Usa quest'area come blocco appunti libero. I testi che hai generato in precedenza si trovano qui. Puoi copiarli e incollarli nella "Stesura Strutturata" capitolo per capitolo.
                    </div>
                    <textarea 
                      className="w-full bg-transparent border-none text-gray-300 text-lg font-serif leading-relaxed focus:ring-0 min-h-[500px] resize-none"
                      placeholder="Scrivi le tue bozze libere qui..."
                      value={manuscriptDrafts[0]}
                      onChange={(e) => {
                        const newDrafts = [...manuscriptDrafts];
                        newDrafts[0] = e.target.value;
                        setManuscriptDrafts(newDrafts);
                      }}
                    />
                  </div>
                )}
              </div>
            </Section>
          )}

          {/* TAB 4: BLUEPRINT SAGA */}
          {activeTab === 'tab-saga' && (
            <Section id="tab-saga">
              <div className="bg-[#111827] border-l-4 border-red-500 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Flame size={18} className="text-red-500" />
                  5. Decodifica dei 4 Cavalieri (Conseguenze Tech)
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  Prima di strutturare i volumi, definiamo come si manifestano i Cavalieri e le loro conseguenze nel mondo reale del 2035.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-red-900/5 border-l-3 border-red-500 p-4">
                    <strong className="text-red-400 block mb-1">1. CAVALLO BIANCO (Conquista / Arco)</strong>
                    <p className="text-gray-400 text-xs mb-2"><em>Simbolo:</em> L'Anticristo / Falsa Pace. <em>Manifestazione Tech:</em> L'IA "ABITES" viene presentata come soluzione definitiva. È l'inizio della "Conquista Algoritmica".</p>
                    <p className="text-gray-500 text-[11px]"><strong>Conseguenze:</strong> Perdita della privacy, inizio del controllo sociale mascherato da sicurezza, delegazione totale delle decisioni umane agli algoritmi.</p>
                  </div>

                  <div className="bg-red-900/5 border-l-3 border-red-500 p-4">
                    <strong className="text-red-400 block mb-1">2. CAVALLO ROSSO (Guerra / Spada)</strong>
                    <p className="text-gray-400 text-xs mb-2"><em>Simbolo:</em> Conflitto civile e guerra. <em>Manifestazione Tech:</em> Cyber-guerra tra stati, droni autonomi, resistenze umane contro forze robotiche.</p>
                    <p className="text-gray-500 text-[11px]"><strong>Conseguenze:</strong> Distruzione delle infrastrutture, collasso degli eserciti tradizionali, imposizione della legge marziale tecnologica.</p>
                  </div>

                  <div className="bg-red-900/5 border-l-3 border-red-500 p-4">
                    <strong className="text-red-400 block mb-1">3. CAVALLO NERO (Carestia / Bilancia)</strong>
                    <p className="text-gray-400 text-xs mb-2"><em>Simbolo:</em> Famine e inflazione. <em>Manifestazione Tech:</em> Il crack economico (Italia/Grecia). Il razionamento digitale: se non hai il "Marchio", non compri cibo.</p>
                    <p className="text-gray-500 text-[11px]"><strong>Conseguenze:</strong> Fame nelle città, disuguaglianza estrema, esodo dalle metropoli, mercati neri controllati dalla criminalità o dalla resistenza.</p>
                  </div>

                  <div className="bg-red-900/5 border-l-3 border-red-500 p-4">
                    <strong className="text-red-400 block mb-1">4. CAVALLO VERDE/PALLIDO (Morte / Ade)</strong>
                    <p className="text-gray-400 text-xs mb-2"><em>Simbolo:</em> Pestilenza e Morte fisica e spirituale. <em>Manifestazione Tech:</em> Il COVID come "Test". Nuove malattie o la morte dell'anima umana tramite la totale connessione neurale.</p>
                    <p className="text-gray-500 text-[11px]"><strong>Conseguenze:</strong> Decimazione della popolazione, paura pandemica cronica, depressione di massa, accettazione della morte come "rilascio".</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Filter size={18} className="text-amber-400" />
                  Filtra Eventi Biblici
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Tema</label>
                    <div className="relative">
                      <select 
                        value={filterTheme}
                        onChange={(e) => setFilterTheme(e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 appearance-none focus:border-amber-400 outline-none"
                      >
                        <option value="All">Tutti i Temi</option>
                        <option value="Guerra">Guerra / Conquista</option>
                        <option value="Carestia">Carestia / Controllo</option>
                        <option value="Morte">Morte / Pestilenza</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Volume</label>
                    <div className="relative">
                      <select 
                        value={filterVolume}
                        onChange={(e) => setFilterVolume(e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 appearance-none focus:border-amber-400 outline-none"
                      >
                        <option value="All">Tutti i Volumi</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(v => (
                          <option key={v} value={v}>Volume {v}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Ordina Per</label>
                    <div className="relative">
                      <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 appearance-none focus:border-amber-400 outline-none"
                      >
                        <option value="volume">Volume (Cronologico)</option>
                        <option value="name">Nome (Alfabetico)</option>
                      </select>
                      <ArrowUpDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {biblicalEventsState
                    .filter(event => (filterTheme === 'All' || event.theme === filterTheme))
                    .filter(event => (filterVolume === 'All' || event.volume.toString() === filterVolume))
                    .sort((a, b) => {
                      if (sortBy === 'volume') return a.volume - b.volume;
                      return a.name.localeCompare(b.name);
                    })
                    .map((event, idx) => (
                      <div key={event.id || idx} className="bg-black/40 border border-gray-800 p-4 rounded hover:border-amber-400/30 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <input 
                            className="bg-transparent border-none text-amber-400 text-sm font-bold focus:ring-0 w-full p-0"
                            value={event.name}
                            onChange={(e) => {
                              const newEvents = [...biblicalEventsState];
                              const eventIdx = newEvents.findIndex(ev => ev.id === event.id);
                              newEvents[eventIdx].name = e.target.value;
                              setBiblicalEventsState(newEvents);
                            }}
                          />
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 text-[9px] uppercase font-bold">Vol</span>
                            <input 
                              type="number"
                              className="bg-gray-800 text-gray-300 text-[10px] w-10 px-1 py-0.5 rounded focus:ring-0 border-none"
                              value={event.volume}
                              onChange={(e) => {
                                const newEvents = [...biblicalEventsState];
                                const eventIdx = newEvents.findIndex(ev => ev.id === event.id);
                                newEvents[eventIdx].volume = parseInt(e.target.value) || 1;
                                setBiblicalEventsState(newEvents);
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <select 
                            className="bg-gray-900 text-[9px] px-1.5 py-0.5 rounded uppercase font-bold text-gray-400 border-none focus:ring-0"
                            value={event.theme}
                            onChange={(e) => {
                              const newEvents = [...biblicalEventsState];
                              const eventIdx = newEvents.findIndex(ev => ev.id === event.id);
                              newEvents[eventIdx].theme = e.target.value;
                              setBiblicalEventsState(newEvents);
                            }}
                          >
                            <option value="Guerra">Guerra</option>
                            <option value="Carestia">Carestia</option>
                            <option value="Morte">Morte</option>
                          </select>
                        </div>
                        <textarea 
                          className="w-full bg-transparent border-none text-gray-400 text-xs leading-relaxed focus:ring-0 resize-none p-0"
                          rows={2}
                          value={event.description}
                          onChange={(e) => {
                            const newEvents = [...biblicalEventsState];
                            const eventIdx = newEvents.findIndex(ev => ev.id === event.id);
                            newEvents[eventIdx].description = e.target.value;
                            setBiblicalEventsState(newEvents);
                          }}
                        />
                        <div className="flex justify-end mt-2">
                          <button 
                            onClick={() => setBiblicalEventsState(biblicalEventsState.filter(ev => ev.id !== event.id))}
                            className="text-red-900 hover:text-red-500 text-[10px] uppercase font-bold"
                          >
                            Elimina
                          </button>
                        </div>
                      </div>
                    ))
                  }
                  <button 
                    onClick={() => setBiblicalEventsState([...biblicalEventsState, { id: Date.now(), name: "Nuovo Evento", volume: 1, theme: "Guerra", description: "Descrizione..." }])}
                    className="mt-4 w-full py-2 border border-dashed border-gray-700 rounded text-gray-500 hover:text-amber-400 text-[10px] uppercase font-bold"
                  >
                    + Aggiungi Evento Biblico
                  </button>
                  {biblicalEventsState
                    .filter(event => (filterTheme === 'All' || event.theme === filterTheme))
                    .filter(event => (filterVolume === 'All' || event.volume.toString() === filterVolume))
                    .length === 0 && (
                      <div className="text-center py-8 text-gray-500 text-sm italic">
                        Nessun evento trovato con i filtri selezionati.
                      </div>
                    )
                  }
                </div>
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <BookOpen size={18} className="text-amber-400" />
                  6. Roadmap dei 10 Volumi (Struttura a Specchio & Progressione Cavalieri)
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Integrazione della struttura circolare e delle conseguenze dei cavalieri. Modifica direttamente i titoli e le trame.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="bg-blue-900/10 border border-blue-500/30 p-4 rounded-lg">
                    <h4 className="text-blue-400 font-bold text-[10px] uppercase mb-2 flex items-center gap-2">
                      <RefreshCw size={12} />
                      Specularità Narrativa (V1 ↔ V10)
                    </h4>
                    <p className="text-gray-400 text-[10px] leading-relaxed">
                      Il Volume 1 inizia con un'alba artificiale su una città morente. Il Volume 10 termina con un'alba naturale su un mondo rinato. I luoghi e i simboli del primo capitolo devono ritornare, trasformati, nell'ultimo.
                    </p>
                  </div>
                  <div className="bg-red-900/10 border border-red-500/30 p-4 rounded-lg">
                    <h4 className="text-red-400 font-bold text-[10px] uppercase mb-2 flex items-center gap-2">
                      <Zap size={12} />
                      Progressione dei 4 Cavalieri
                    </h4>
                    <p className="text-gray-400 text-[10px] leading-relaxed">
                      La saga segue l'ascesa di ABITES attraverso le piaghe: Conquista (V1-2), Guerra (V3-4), Carestia (V5-7), Morte/Pestilenza (V8-10). Ogni volume deve riflettere il tema del Cavaliere dominante.
                    </p>
                  </div>
                </div>

                <div className="bg-black/40 border border-gray-800 rounded-lg p-6 mb-8">
                  <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <RefreshCw size={14} className="text-blue-400" />
                    Dettagli Speculari: Volume 1 vs Volume 10
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-black/20 p-4 rounded border border-gray-800/50">
                      <h4 className="text-blue-400 text-[10px] font-bold uppercase mb-2">L'Alba</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        <strong>V1:</strong> Alba artificiale proiettata dai monitor di Roma. Simbolo di controllo.<br/>
                        <strong>V10:</strong> Alba naturale che sorge sul Mediterraneo. Simbolo di libertà ritrovata.
                      </p>
                    </div>
                    <div className="bg-black/20 p-4 rounded border border-gray-800/50">
                      <h4 className="text-blue-400 text-[10px] font-bold uppercase mb-2">L'Incontro</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        <strong>V1:</strong> Claudio e Sara si incontrano fuggendo da una Sentinella. Paura.<br/>
                        <strong>V10:</strong> Claudio e Sara si tengono per mano guardando lo spegnimento. Pace.
                      </p>
                    </div>
                    <div className="bg-black/20 p-4 rounded border border-gray-800/50">
                      <h4 className="text-blue-400 text-[10px] font-bold uppercase mb-2">ABITES</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        <strong>V1:</strong> L'IA dichiara l'Emergenza Planetaria (Inizio).<br/>
                        <strong>V10:</strong> L'ultimo server analogico viene disattivato (Fine).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tenVolumePlan.map((vol, idx) => (
                    <div key={idx} className="bg-black/40 border border-gray-800 rounded-lg p-4 hover:border-amber-400/30 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="bg-amber-400 text-black text-[10px] font-black px-2 py-1 rounded">VOL {vol.vol}</span>
                        <div className="flex-1">
                          <input 
                            className="bg-transparent border-none text-white font-bold text-sm focus:ring-0 w-full"
                            value={vol.title}
                            onChange={(e) => {
                              const newPlan = [...tenVolumePlan];
                              newPlan[idx].title = e.target.value;
                              setTenVolumePlan(newPlan);
                            }}
                          />
                          <div className="text-[9px] text-amber-400/70 uppercase font-bold tracking-widest mt-0.5">
                            {vol.horseman}
                          </div>
                        </div>
                      </div>
                      <textarea 
                        className="w-full bg-transparent border-none text-gray-400 text-xs leading-relaxed focus:ring-0 resize-none p-0"
                        rows={3}
                        value={vol.plot}
                        onChange={(e) => {
                          const newPlan = [...tenVolumePlan];
                          newPlan[idx].plot = e.target.value;
                          setTenVolumePlan(newPlan);
                        }}
                      />
                    </div>
                  ))}
                </div>

                <PromptBlock 
                  title="PROMPT: Struttura Decennale (Sincronizzata)"
                  content={`Genera la struttura dei 10 Volumi di OMEGA basandoti su questo piano aggiornato (utilizzando il sistema delle Epoche Relative, senza date fisse):

${tenVolumePlan.map(v => `VOLUME ${v.vol}: ${v.title}\nTrama: ${v.plot}`).join('\n\n')}

REGOLE AGGIUNTIVE:
- Volume 1 e Volume 10 devono iniziare/finire nello STESSO luogo simbolico.
- Mantieni la progressione dei 4 Cavalieri come definita nel Master Plan.`}
                />
              </div>

              <div className="bg-[#111827] border border-gray-800 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Map size={18} className="text-amber-400" />
                  7. Master Blueprint: Dettagli Capitoli
                </h2>
                <p className="text-gray-400 text-sm mb-6">
                  Definisci la trama dettagliata e i capitoli per ogni volume della saga.
                </p>

                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                  {[1,2,3,4,5,6,7,8,9,10].map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedSagaVolume(v)}
                      className={`px-4 py-2 rounded text-xs font-bold uppercase transition-all whitespace-nowrap ${
                        selectedSagaVolume === v ? 'bg-amber-400 text-black shadow-[0_0_10px_rgba(251,191,36,0.3)]' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                      }`}
                    >
                      Volume {v}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 p-6 rounded-lg border border-gray-800">
                    <h3 className="text-amber-400 font-bold mb-3 text-xs uppercase tracking-widest">Trama Dettagliata Volume {selectedSagaVolume}</h3>
                    <textarea 
                      className="w-full bg-transparent border-none text-gray-300 text-sm focus:ring-0 min-h-[150px] resize-none p-0"
                      placeholder={`Inserisci la trama dettagliata del Volume ${selectedSagaVolume}...`}
                      value={plots.find(p => p.volume === selectedSagaVolume)?.summary || ''}
                      onChange={(e) => {
                        const newPlots = [...plots];
                        const idx = newPlots.findIndex(p => p.volume === selectedSagaVolume);
                        if (idx >= 0) newPlots[idx].summary = e.target.value;
                        else newPlots.push({ volume: selectedSagaVolume, summary: e.target.value, chapters: [] });
                        setPlots(newPlots);
                      }}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-bold text-xs uppercase tracking-widest">Capitoli Volume {selectedSagaVolume}</h3>
                      <button 
                        onClick={() => {
                          const newPlots = [...plots];
                          let pIdx = newPlots.findIndex(p => p.volume === selectedSagaVolume);
                          if (pIdx < 0) {
                            newPlots.push({ volume: selectedSagaVolume, summary: '', chapters: [] });
                            pIdx = newPlots.length - 1;
                          }
                          newPlots[pIdx].chapters.push({ title: `Capitolo ${newPlots[pIdx].chapters.length + 1}`, description: '' });
                          setPlots(newPlots);
                        }}
                        className="px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded text-[10px] font-bold uppercase hover:bg-amber-400 hover:text-black transition-all"
                      >
                        + Aggiungi Capitolo
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {(plots.find(p => p.volume === selectedSagaVolume)?.chapters || []).map((chap: any, idx: number) => (
                        <div key={idx} className="bg-black/20 border border-gray-800 p-4 rounded-lg relative group">
                          <button 
                            onClick={() => {
                              const newPlots = [...plots];
                              const pIdx = newPlots.findIndex(p => p.volume === selectedSagaVolume);
                              newPlots[pIdx].chapters = newPlots[pIdx].chapters.filter((_: any, i: number) => i !== idx);
                              setPlots(newPlots);
                            }}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-amber-400 text-[10px] font-black uppercase">CH {idx + 1}</span>
                            <input 
                              className="bg-transparent border-none text-white font-bold text-sm focus:ring-0 w-full p-0"
                              value={chap.title}
                              onChange={(e) => {
                                const newPlots = [...plots];
                                const pIdx = newPlots.findIndex(p => p.volume === selectedSagaVolume);
                                newPlots[pIdx].chapters[idx].title = e.target.value;
                                setPlots(newPlots);
                              }}
                            />
                          </div>
                          <textarea 
                            className="w-full bg-transparent border-none text-gray-400 text-xs focus:ring-0 resize-none p-0 leading-relaxed"
                            rows={3}
                            placeholder="Riassunto del capitolo..."
                            value={chap.description}
                            onChange={(e) => {
                              const newPlots = [...plots];
                              const pIdx = newPlots.findIndex(p => p.volume === selectedSagaVolume);
                              newPlots[pIdx].chapters[idx].description = e.target.value;
                              setPlots(newPlots);
                            }}
                          />
                        </div>
                      ))}
                      {(plots.find(p => p.volume === selectedSagaVolume)?.chapters || []).length === 0 && (
                        <div className="text-center py-10 border border-dashed border-gray-800 rounded-lg text-gray-600 text-xs italic">
                          Nessun capitolo definito per questo volume. Clicca su "+ Aggiungi Capitolo" per iniziare.
                        </div>
                      )}
                    </div>

                    <div className="mt-8">
                      <h3 className="text-amber-400 text-[10px] font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                        <Zap size={14} />
                        Prompt: Generatore di Capitoli (Volume {selectedSagaVolume})
                      </h3>
                      <PromptBlock 
                        title={`PROMPT: Esplosione Capitoli Vol. ${selectedSagaVolume}`}
                        content={`Basandoti sulla trama del Volume ${selectedSagaVolume}:
"${plots.find(p => p.volume === selectedSagaVolume)?.summary || 'Trama non definita'}"

Genera una lista di 12-15 capitoli.
Ogni capitolo deve avere:
1. TITOLO: Evocativo e breve.
2. RIASSUNTO: 2-3 righe di azione pura.
3. BEAT NARRATIVO: Quale archetipo di Vogler stiamo toccando?
4. TENSIONE: Da 1 a 10.

REGOLE:
- Mantieni lo stile Thriller/Biblico.
- Assicurati che il climax avvenga al capitolo 10 o 11.`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB 5: ROMANCE ENGINE */}
          {activeTab === 'tab-romance' && (
            <Section id="tab-romance">
              <div className="bg-[#111827] border-2 border-pink-500/20 rounded-xl p-8 mb-6 shadow-[0_0_30px_rgba(236,72,153,0.05)]">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
                  <div className="bg-pink-500 p-3 rounded-full text-white">
                    <Heart size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Romance Engine</h2>
                    <p className="text-pink-400 text-xs font-bold uppercase tracking-widest">L'Amore come Atto di Resistenza Finale</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      <Zap size={16} className="text-pink-400" />
                      Protocollo d'Intimità (5 Beats)
                    </h3>
                    
                    <div className="space-y-4">
                      <div 
                        onClick={() => setActiveRomanceBeat(1)}
                        className={`p-5 rounded-r-lg border-l-4 transition-all cursor-pointer ${activeRomanceBeat === 1 ? 'bg-pink-900/30 border-pink-400 shadow-[0_0_15px_rgba(219,39,119,0.2)]' : 'bg-pink-900/10 border-pink-500 hover:bg-pink-900/20'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <strong className="text-pink-400 text-xs uppercase font-black">1. Lo Scontro Magnetico</strong>
                          <span className="text-[10px] text-gray-500 font-mono">BEAT 01</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Il primo incontro deve essere un conflitto. Non amore a prima vista, ma <span className="text-pink-400 font-bold">riconoscimento</span>. Due anime rotte che si vedono attraverso il rumore digitale.
                        </p>
                      </div>

                      <div 
                        onClick={() => setActiveRomanceBeat(2)}
                        className={`p-5 rounded-r-lg border-l-4 transition-all cursor-pointer ${activeRomanceBeat === 2 ? 'bg-pink-900/30 border-pink-400 shadow-[0_0_15px_rgba(219,39,119,0.2)]' : 'bg-pink-900/10 border-pink-500 hover:bg-pink-900/20'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <strong className="text-pink-400 text-xs uppercase font-black">2. La Tensione del Silenzio</strong>
                          <span className="text-[10px] text-gray-500 font-mono">BEAT 02</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Momenti di vicinanza forzata (nascondigli, fughe). Il respiro dell'altro è l'unico suono organico in un mondo di metallo. La tensione deve essere <span className="text-pink-400 font-bold">fisica e insopportabile</span>.
                        </p>
                      </div>

                      <div 
                        onClick={() => setActiveRomanceBeat(3)}
                        className={`p-5 rounded-r-lg border-l-4 transition-all cursor-pointer ${activeRomanceBeat === 3 ? 'bg-pink-900/30 border-pink-400 shadow-[0_0_15px_rgba(219,39,119,0.2)]' : 'bg-pink-900/10 border-pink-500 hover:bg-pink-900/20'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <strong className="text-pink-400 text-xs uppercase font-black">3. Il Primo Bacio (Ribellione)</strong>
                          <span className="text-[10px] text-gray-500 font-mono">BEAT 03</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Non è un momento romantico classico. È un atto di <span className="text-pink-400 font-bold">disperazione</span>. Un bacio che dice: "Siamo vivi, e loro non possono averci".
                        </p>
                      </div>

                      <div 
                        onClick={() => setActiveRomanceBeat(4)}
                        className={`p-5 rounded-r-lg border-l-4 transition-all cursor-pointer ${activeRomanceBeat === 4 ? 'bg-pink-900/30 border-pink-400 shadow-[0_0_15px_rgba(219,39,119,0.2)]' : 'bg-pink-900/10 border-pink-500 hover:bg-pink-900/20'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <strong className="text-pink-400 text-xs uppercase font-black">4. L'Unione Sacra</strong>
                          <span className="text-[10px] text-gray-500 font-mono">BEAT 04</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          L'atto sessuale come <span className="text-pink-400 font-bold">rituale teologico</span>. Calore contro freddo. Carne contro silicio. Deve essere descritto con intensità sensoriale, non pornografica.
                        </p>
                      </div>

                      <div 
                        onClick={() => setActiveRomanceBeat(5)}
                        className={`p-5 rounded-r-lg border-l-4 transition-all cursor-pointer ${activeRomanceBeat === 5 ? 'bg-pink-900/30 border-pink-400 shadow-[0_0_15px_rgba(219,39,119,0.2)]' : 'bg-pink-900/10 border-pink-500 hover:bg-pink-900/20'}`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <strong className="text-pink-400 text-xs uppercase font-black">5. Il Sacrificio Finale</strong>
                          <span className="text-[10px] text-gray-500 font-mono">BEAT 05</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          L'amore viene messo alla prova. Uno dei due deve scegliere tra la propria vita e quella dell'altro, o tra l'amore e la missione. <span className="text-pink-400 font-bold">L'amore vince solo se costa tutto</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-black/40 border border-gray-800 p-6 rounded-xl">
                      <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Shield size={16} className="text-pink-400" />
                        Checklist Chimica Narrativa
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "C'è un segreto che li divide?",
                          "Hanno un obiettivo comune ma metodi opposti?",
                          "Il contatto fisico è descritto come 'elettrico' o 'doloroso'?",
                          "La minaccia esterna aumenta la loro intimità?",
                          "C'è un oggetto simbolico che li lega?"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs text-gray-400">
                            <div className="mt-1 w-3 h-3 border border-pink-500/50 rounded-sm flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-pink-500/5 border border-pink-500/20 p-6 rounded-xl">
                      <h3 className="text-pink-400 font-bold text-xs uppercase tracking-widest mb-4">
                        {activeRomanceBeat === 1 && "Prompt: Scontro Magnetico"}
                        {activeRomanceBeat === 2 && "Prompt: Tensione del Silenzio"}
                        {activeRomanceBeat === 3 && "Prompt: Il Primo Bacio"}
                        {activeRomanceBeat === 4 && "Prompt: L'Unione Sacra"}
                        {activeRomanceBeat === 5 && "Prompt: Il Sacrificio Finale"}
                      </h3>
                      <PromptBlock 
                        title={`PROMPT: BEAT 0${activeRomanceBeat}`}
                        content={
                          activeRomanceBeat === 1 ? `Scrivi la scena del primo incontro tra Claudio e Sara.
CONTESTO: Un ambiente sterile o pericoloso (es. un checkpoint o un mercato nero).
FOCUS:
1. ATTRITO: Non devono piacersi subito. C'è sospetto, ma una curiosità magnetica.
2. SENSORIALITÀ: Il modo in cui Claudio nota un dettaglio umano in Sara che stona con il mondo di ABITES.
3. DIALOGO: Frasi brevi, cariche di sottotesto.
STILE: Jenkins Thriller, tensione elettrica.` :
                          activeRomanceBeat === 2 ? `Scrivi una scena di vicinanza forzata tra Claudio e Sara.
CONTESTO: Sono nascosti in uno spazio ristretto (un condotto, un seminterrato) mentre una pattuglia di Sentinelle passa sopra di loro.
FOCUS:
1. FISICITÀ: Il calore dei corpi, il suono del respiro sincronizzato per necessità.
2. SILENZIO: La paura di essere scoperti che amplifica ogni sensazione.
3. TENSIONE: Il desiderio di toccarsi che combatte con il terrore della morte.
STILE: Claustrofobico, sensuale, disperato.` :
                          activeRomanceBeat === 3 ? `Scrivi la scena del primo bacio tra Claudio e Sara.
CONTESTO: Un momento di tregua dopo un pericolo scampato o prima di una missione suicida.
FOCUS:
1. RIBELLIONE: Il bacio non è dolce, è un atto di sfida contro la logica fredda dell'IA.
2. DISPERAZIONE: "Siamo vivi ora".
3. IMPATTO: Come questo gesto cambia la loro determinazione.
STILE: Epico, viscerale, potente.` :
                          activeRomanceBeat === 4 ? `Scrivi la scena dell'unione fisica tra Claudio e Sara.
CONTESTO: Il Villaggio degli Sconnessi, un luogo che sa di terra e vita.
FOCUS:
1. RITUALE: L'atto sessuale come affermazione della biologia contro il silicio.
2. CONTRASTO: La morbidezza della pelle vs la durezza del mondo esterno.
3. ANCORAGGIO: Come l'intimità diventa la loro unica verità in un mondo di bugie algoritmiche.
STILE: Poetico, intenso, sensoriale (evita il volgare, punta al sacro).` :
                          `Scrivi la scena del sacrificio finale per amore.
CONTESTO: Il culmine del Volume 10 o di un momento critico della saga.
FOCUS:
1. SCELTA: Uno dei due deve restare indietro o compiere un gesto estremo per salvare l'altro.
2. ULTIME PAROLE: Un addio che riassume l'intera saga.
3. EREDITÀ: Come questo amore cambia il destino dell'umanità.
STILE: Tragico, eroico, indimenticabile.`
                        }
                      />
                      <p className="mt-4 text-[10px] text-gray-500 italic text-center">
                        Clicca su uno dei Beat a sinistra per cambiare il prompt. <br />
                        <span className="text-amber-400/50">Nota: Il Protocollo Editor & Architetto (Tab Scrittura) applica questi Beat automaticamente durante l'analisi dei capitoli.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB 6: SCRITTURA */}
          {activeTab === 'tab-write' && (
            <Section id="tab-write">
              <div className="bg-[#111827] border-2 border-amber-400/20 rounded-xl p-8 mb-6 shadow-[0_0_30px_rgba(251,191,36,0.05)]">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
                  <div className="bg-amber-400 p-3 rounded-full text-black">
                    <PenTool size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Laboratorio di Scrittura</h2>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Dalla Strategia al Manoscritto Finale</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-amber-400 text-sm font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                        <Shield size={16} />
                        Protocollo Editor & Architetto
                      </h3>
                      <PromptBlock 
                        title="PROMPT: Generazione Scheletro (Gemini/ChatGPT)"
                        content={`Agisci come un Senior Story Architect, un Editor Professionale e un Ghostwriter di bestseller per la saga OMEGA MASTER SUITE.
Il tuo obiettivo è creare una narrazione immersiva, emotivamente coinvolgente e profondamente umana. Elimina ogni tono robotico o eccessivamente tecnico.
Il tuo compito è scrivere lo "Scheletro Narrativo" (circa 800 parole) per la SCENA 1 del Capitolo [INSERISCI NUMERO].

CONTESTO LORE:
- Project Maven, Palantir, COVID come benchmark di obbedienza, False Flag cibernetico.

ROMANCE ENGINE (INTEGRAZIONE CONTESTUALE AUTOMATICA):
- Il tuo compito come Architetto è analizzare l'Obiettivo della Scena e i personaggi coinvolti.
- SE la scena coinvolge personaggi con potenziale romantico (es. Claudio e Sara, oppure Marcus ed Elena), DEVI inserire automaticamente un "Beat" romantico coerente con il loro arco narrativo attuale (es. Primo Incontro/Scontro Magnetico, Tensione del Silenzio, Contatto Tattico d'Emergenza).
- Non aspettare che ti venga chiesto: se il contesto lo permette, innesca la dinamica in modo autonomo.
- Parametro OMEGA: L'amore è l'ultimo atto di ribellione contro la logica fredda di ABITES.
- Regola d'oro: Non dichiarare mai i sentimenti. Mostra la connessione attraverso la necessità di proteggersi a vicenda durante l'azione.

REGOLE DELLO SCHELETRO:
1. Fissa i dialoghi principali e le azioni chiave.
2. Mantieni lo stile Jenkins (tensione spirituale e tecnologica).
3. Rispetta la Clean Fiction (nessuna volgarità) e non usare date fisse.
4. Non preoccuparti di espandere troppo le descrizioni sensoriali, a quello penserà Claude nella fase successiva.

RIASSUNTO CAPITOLO PRECEDENTE:
[INCOLLA RIASSUNTO]

OBIETTIVO DI QUESTA SCENA:
[INCOLLA OBIETTIVO SCENA]

Scrivi ora lo Scheletro Narrativo.`}
                      />
                    </div>

                    <div>
                      <h3 className="text-amber-400 text-sm font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                        <Zap size={16} />
                        Prompt: Apertura & Struttura
                      </h3>
                      <PromptBlock 
                        title="PROMPT: Inizio con Flashforward (Capitolo 1)"
                        content={`Scrivi l'apertura del Volume 1, Capitolo 1.
TECNICA: Inizia con un breve scenario futuro (3-4 righe) ambientato nel 2035. Mostra il protagonista ferito, guardando il mondo dominato da ABITES.
TRANSIZIONE: Taglio netto: "Tutto era iniziato dieci anni prima...".
RIPARTENZA: Gennaio 2035. Tono documentaristico, freddo, presagio di sventura.

REGOLE DI UMANIZZAZIONE (FONDAMENTALE):
1. LINGUAGGIO NATURALE: Evita frasi artificiali, poetiche o eccessivamente melodrammatiche tipiche dell'IA. Usa un linguaggio crudo, diretto e umano.
2. IMPERFEZIONE: I personaggi devono esitare, usare intercalari naturali, o avere pensieri frammentati. Non parlano come libri stampati.
3. SENSORIALITÀ SPORCA: Descrivi odori sgradevoli, freddo pungente, stanchezza fisica. Il mondo deve sembrare tangibile e imperfetto.
4. SHOW, DON'T TELL: Non dire "era terrorizzato", descrivi il sudore freddo o il tremore delle mani. Mostra l'emozione attraverso il corpo.`}
                      />
                    </div>

                    <div>
                      <h3 className="text-amber-400 text-sm font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                        <Cpu size={16} />
                        Prompt: Azione & Tecnologia
                      </h3>
                      <PromptBlock 
                        title="PROMPT: Scontro con Sentinella T-Optimus"
                        content={`Scrivi una scena di combattimento tra [PERSONAGGIO] e una Sentinella T-Optimus.
DETTAGLI TECNICI DA USARE:
1. MOVIMENTO: La Sentinella si muove con la fluidità innaturale dei motori N-Flux.
2. DIFESA: Usa il "Guscio a Specchio" per riflettere i colpi.
3. ATTACCO: Usa il raggio a microonde per causare dolore neurologico.
4. DEBOLEZZE: Il personaggio deve sfruttare l'arma EMR-432 "Vibrazione di Dio" (risonanza a 432Hz) per mandare in corto i sensori della macchina.
TONO: Terrore puro, velocità, precisione tecnica.`}
                      />
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-amber-400 text-sm font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                        <MessageSquare size={16} />
                        Prompt: Dialogo & Stile Jenkins
                      </h3>
                      <PromptBlock 
                        title="PROMPT: Dialoghi Jenkins/LaHaye"
                        content={`Riscrivi o genera il dialogo tra [PERSONAGGIO A] e [PERSONAGGIO B] adottando lo stile Jenkins/LaHaye.
TESTO/CONTESTO: [INCOLLA QUI]

REGOLE DI STILE MANDATORIE:
1. SOTTO-TESTO & TENSIONE SPIRITUALE: Ogni battuta deve vibrare di una tensione tra fede e dubbio, tra luce e ombra. I personaggi non dicono mai tutto; il vero conflitto è nell'anima.
2. ANCORAGGIO PROFESSIONALE: Inizia o ancora il dialogo a dettagli tecnici, professionali o procedurali (es. analisi dati, manovre tattiche, gergo giornalistico). La professionalità è lo scudo dietro cui si nasconde l'emozione.
3. TENSIONE ESCATOLOGICA: I personaggi percepiscono il peso del tempo che scade. Il "Rapimento" o l'ombra di ABITES incombe su ogni parola.
4. SILENZI & REAZIONI: Enfatizza ciò che non viene detto. Descrivi micro-reazioni fisiche (un battito di ciglia, una mano che trema) che smentiscono le parole pronunciate.`}
                      />
                    </div>

                    <div>
                      <h3 className="text-amber-400 text-sm font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                        <Sparkles size={16} />
                        Prompt: Levigatura & Clean Fiction
                      </h3>
                      <PromptBlock 
                        title="PROMPT: Levigatura Dialoghi (Senza Volgarità)"
                        content={`Act like a senior fiction editor, narrative stylist, and cultural sensitivity advisor specialized in creating powerful dialogue for dystopian science fiction without using profanity.

Your goal is to establish a dialogue and language rule for the saga "OMEGA MASTER SUITE" that completely eliminates vulgar language, profanity, and explicit insults while preserving emotional intensity, realism, and narrative impact.

Task: Design a dialogue strategy that replaces common vulgar expressions with original, non-vulgar expressions that achieve the same emotional effect but remain suitable for a wide audience, including readers who prefer clean language.

Requirements:

1) PROFANITY-FREE LANGUAGE RULE  
Define a strict rule for the entire saga stating that:
- no vulgar words
- no profanity
- no explicit insults
- no crude or offensive slang
- ALLOWED EVERYDAY EXPRESSIONS: You are explicitly allowed and encouraged to use common, non-offensive human expressions and mild insults such as "idiota", "stupido", "siamo fregati", "deficiente", "babbeo", "pallone gonfiato", etc. These are NOT considered profanity and add necessary realism.

All dialogue and narration must respect this rule.

2) CREATIVE EXPRESSION SUBSTITUTION  
When a situation would normally lead a character to use a vulgar expression, create an alternative expression that:
- conveys frustration, anger, surprise, or shock
- fits the tone of the dystopian world
- feels natural within the OMEGA universe
- is never vulgar.

3) ORIGINAL OMEGA EXPRESSIONS & CATCHPHRASES
Create a small lexicon of unique expressions that characters in the OMEGA world could use instead of profanity.
- ICONIC CATCHPHRASES: Invent personalized, recurring expressions for specific characters (similar to Dylan Dog's "Giuda ballerino!"). 
- CRITICAL RULE: These expressions MUST be grounded in everyday human life, social background, family history, or old cultural idioms. DO NOT use fake "tech-slang" or robotic sci-fi curses (like "rotten code" or "silicon ashes"). Humans curse using human concepts (weather, animals, old sayings, everyday frustration).

Examples of emotional equivalents:
- expressions of anger
- expressions of disbelief
- expressions of danger or urgency
- expressions of frustration.

These expressions should feel culturally consistent with the world of the saga.

4) DIALOGUE STYLE GUIDELINES  
Define guidelines for writing dialogue that:
- feels intense and realistic
- avoids crude language
- uses creative metaphors, symbolic language, or world-specific idioms.

5) IMPLEMENTATION RULE  
Explain how this rule should be automatically applied during:
- scene generation
- dialogue writing
- AI-assisted drafting.

Context:
///
OMEGA MASTER SUITE is a dystopian science fiction saga set between 2030 and 2040. The author wants the story to remain intense and realistic while avoiding profanity so the books can be accessible to a broader audience, including Christian readers and readers who prefer clean fiction.
///

Constraints:
- Format: structured rules, examples, and implementation guidelines.
- Style: practical and designed for narrative writing workflows.
- Scope: focus on dialogue and emotional expression without profanity.
- Reasoning: preserve emotional impact while eliminating vulgar language.
- Self-check: verify that every suggested expression remains non-vulgar and appropriate for a wide readership.

Take a deep breath and work on this problem step-by-step.`}
                      />
                    </div>

                    <div>
                      <h3 className="text-pink-400 text-sm font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                        <Heart size={16} />
                        Integrazione Romance Engine
                      </h3>
                      <PromptBlock 
                        title="PROMPT: Analisi & Integrazione Romance"
                        content={`Analizza il capitolo fornito e suggerisci l'integrazione di scene romantiche basate sul principio "L'Amore come Atto di Resistenza Finale".
TESTO: [INCOLLA CAPITOLO]

REQUISITI DI ANALISI:
1. SELEZIONE BEAT: Identifica quale dei 5 Beats del Romance Engine (1. Scontro Magnetico, 2. Tensione del Silenzio, 3. Primo Bacio, 4. Unione Sacra, 5. Sacrificio Finale) è più appropriato per questo momento della storia.
2. INTEGRAZIONE ORGANICA: Spiega come la scena si inserisce nel flusso narrativo senza forzature, rafforzando il conflitto centrale.
3. RESISTENZA NARRATIVA: Descrivi come l'intimità tra i personaggi agisce come una ribellione contro la logica fredda e asettica di ABITES.
4. BOZZA SCENA: Genera una bozza della scena seguendo lo stile Jenkins (sottotesto e tensione).`}
                      />
                    </div>

                    <div className="bg-amber-400/5 border border-amber-400/20 p-6 rounded-xl">
                      <h3 className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-4">Statistiche di Scrittura</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/40 p-3 rounded border border-gray-800">
                          <span className="block text-[10px] text-gray-500 uppercase font-bold">Parole Totali</span>
                          <span className="text-xl font-black text-white">{manuscriptDrafts.join(' ').split(/\s+/).filter(Boolean).length}</span>
                        </div>
                        <div className="bg-black/40 p-3 rounded border border-gray-800">
                          <span className="block text-[10px] text-gray-500 uppercase font-bold">Capitoli Abbozzati</span>
                          <span className="text-xl font-black text-white">{plots.reduce((acc, p) => acc + p.chapters.length, 0)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB: SISTEMA DI SCRITTURA OMEGA */}
          {activeTab === 'tab-system' && (
            <Section id="tab-system">
              <div className="bg-[#111827] border-2 border-blue-400/20 rounded-xl p-8 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
                  <div className="bg-blue-600 p-3 rounded-full text-white">
                    <BookOpen size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Sistema di Scrittura OMEGA</h2>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Guida Strategica per la Produzione di 10 Volumi</p>
                  </div>
                </div>

                {/* 1. OMEGA NARRATIVE STYLE */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <PenTool size={20} className="text-blue-400" />
                    Sezione Stile di Scrittura – OMEGA Narrative Style
                  </h3>
                  <div className="bg-blue-900/10 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Il <strong>OMEGA Narrative Style</strong> è un ibrido progettato per il mercato editoriale odierno. Combina la chiarezza narrativa e il ritmo apocalittico di <em>"Left Behind / Gli Esclusi"</em> con il realismo crudo e la complessità tecnologica della fantascienza moderna (stile <em>The Expanse</em>).
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400">
                      <li className="flex gap-2"><span className="text-blue-400">●</span> <span><strong>Ritmo Apocalittico:</strong> Urgenza costante, capitoli che terminano con ganci forti (cliffhanger), senso di destino ineluttabile.</span></li>
                      <li className="flex gap-2"><span className="text-blue-400">●</span> <span><strong>Realismo Hard Sci-Fi:</strong> Descrizioni viscerali di cyberware, interfacce neurali e architetture dei Nodi Urbani.</span></li>
                      <li className="flex gap-2"><span className="text-blue-400">●</span> <span><span><strong>Dualismo Spirituale:</strong></span> L'azione frenetica è bilanciata da momenti di profonda riflessione filosofica e spirituale (POV di Carlo il Veggente).</span></li>
                      <li className="flex gap-2"><span className="text-blue-400">●</span> <span><strong>Struttura Corale:</strong> POV multipli che mostrano la scala globale del dominio di <em>ABITES</em>.</span></li>
                    </ul>
                  </div>
                </div>

                {/* 2. WORKFLOW OMEGA */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Layers size={20} className="text-blue-400" />
                    Workflow OMEGA – Pipeline di Scrittura Pratica
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Processo operativo per produrre volumi da 370-400 pagine (90k-100k parole) in formato 6x9 pollici.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/40 p-5 rounded-lg border border-gray-800">
                      <h4 className="text-blue-400 font-bold text-xs uppercase mb-3">Fase 1: Ingestione & Sincronizzazione</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Carica in AI Studio la "Bibbia" narrativa: Master Plan, Timeline e Schede Personaggi. Gemini deve analizzare i materiali per diventare l'esperto del mondo OMEGA, comprendendo la distinzione tra Nodi Urbani e Città-Alveare.
                      </p>
                    </div>
                    <div className="bg-black/40 p-5 rounded-lg border border-gray-800">
                      <h4 className="text-blue-400 font-bold text-xs uppercase mb-3">Fase 2: Architettura Granulare</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Espandi il plot del Volume 1 in 22-25 capitoli. Ogni capitolo deve essere ulteriormente suddiviso in 3-4 scene dettagliate (Piano di Volo).
                      </p>
                    </div>
                    <div className="bg-black/40 p-5 rounded-lg border border-gray-800">
                      <h4 className="text-blue-400 font-bold text-xs uppercase mb-3">Fase 3: Drafting Assistito</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Genera la prosa narrativa scena per scena. Applica rigorosamente l'OMEGA Narrative Style, alternando azione immersiva e introspezione spirituale.
                      </p>
                    </div>
                    <div className="bg-black/40 p-5 rounded-lg border border-gray-800">
                      <h4 className="text-blue-400 font-bold text-xs uppercase mb-3">Fase 4: Audit di Continuità</h4>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Verifica la coerenza dei dettagli: tatuaggi di Carlo, tecnologia Teslaris/Omnazon e terminologia del regime vs resistenza.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. PROMPT OPERATIVI */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Terminal size={20} className="text-blue-400" />
                    Prompt Operativi per Gemini (AI Studio)
                  </h3>
                  <div className="space-y-6">
                    <PromptBlock 
                      title="Prompt 1: Inizializzazione e Analisi Contesto"
                      content={`Agisci come un Senior Narrative Architect, un Editor Professionale e un Ghostwriter di bestseller della saga "OMEGA MASTER SUITE".
La tua missione è trasformare il testo in una storia vivida, centrata sull'uomo, con dialoghi autentici e una forte tensione emotiva.
Analizza il Master Plan, la Timeline e le Schede Personaggi forniti.
OBIETTIVO: Identifica temi centrali, conflitti e punti di svolta del Volume 1: "L'Inizio della Fine".
OUTPUT: Produci un executive summary che spieghi la direzione narrativa e come l'elemento tematico del "Cavallo Bianco - Conquista" influenza la trama, Omnazon e Teslaris Energy.`}
                    />
                    <PromptBlock 
                      title="Prompt 2: Espansione in Struttura Capitoli"
                      content={`Espandi il Volume 1 in una struttura di 22 capitoli.
REQUISITI:
- Fornisci i titoli dei capitoli.
- Definisci il POV dominante (Claudio, Sara, Carlo, Laura, ecc.).
- Definisci l'obiettivo narrativo di ogni capitolo.
- Inserisci riferimenti al mondo tecnologico (Nodi Urbani, Omnazon, Teslaris, Lyra-7).`}
                    />
                    <PromptBlock 
                      title="Prompt 3: Suddivisione in Scene e Sottocapitoli"
                      content={`Prendi il Capitolo [NUMERO] e dividilo in 3-4 scene.
Per ogni scena definisci:
- AMBIENTAZIONE: (es. Un Nodo Urbano di Nuova Babilonia).
- AZIONE FISICA: Cosa accade?
- SOTTOTESTO EMOTIVO/SPIRITUALE: (es. La fede di Carlo vs la logica di ABITES).
- ELEMENTO HARD SCI-FI: (es. Glitch di risonanza 432Hz).
- GANCIO FINALE: Cliffhanger per la scena successiva.`}
                    />
                  </div>
                </div>

                {/* 4. GUIDA OROLOGIO SVIZZERO */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Clock size={20} className="text-blue-400" />
                    Guida Orologio Svizzero – Struttura Narrativa di Precisione
                  </h3>
                  <div className="bg-amber-400/5 border border-amber-400/20 p-6 rounded-xl">
                    <p className="text-gray-300 text-xs leading-relaxed mb-4">
                      Per garantire una precisione millimetrica nella saga di 10 volumi, istruisci Gemini seguendo questi pilastri:
                    </p>
                    <ul className="space-y-3 text-[10px] text-gray-400">
                      <li className="flex gap-2">
                        <span className="text-amber-400 font-bold">1. ARCHITETTURA GRANULARE:</span> 
                        <span>Non chiedere mai a Gemini di scrivere "un capitolo" genericamente. Chiedi sempre la struttura delle 3-4 scene prima, approvala, e poi procedi al drafting della singola scena.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-400 font-bold">2. WORLD-BUILDING PROFONDO:</span> 
                        <span>Ogni volta che introduci una nuova location, chiedi a Gemini di descriverne l'estetica (Nodi Urbani vs Città-Alveare) basandosi sulla lore di Nuova Babilonia.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-400 font-bold">3. INTENSIFICAZIONE DEL RITMO:</span> 
                        <span>Nelle scene d'azione, ordina a Gemini di usare frasi brevi, verbi di movimento e di focalizzarsi sui sensi (odore di silicio bruciato, ronzio dei servomotori N-Flux).</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-400 font-bold">4. COERENZA STILISTICA:</span> 
                        <span>Usa il prompt di "Audit di Continuità" alla fine di ogni volume per assicurarti che Carlo il Veggente mantenga la sua voce Cristiana Evangelica e che Laura non perda la sua determinazione solare.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {activeTab === 'tab-claude' && (
            <Section id="tab-claude">
              <div className="bg-[#111827] border-2 border-blue-400/20 rounded-xl p-8 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
                  <div className="bg-blue-500 p-3 rounded-full text-white">
                    <MessageSquare size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Guida Claude: Efficienza 2.0</h2>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Workflow Ottimizzato per Coerenza Narrativa Assoluta</p>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-8">
                  <h3 className="text-blue-400 text-sm font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                    <Zap size={18} />
                    Il Metodo della "Scrittura a Frattali" (Potenziato)
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Per evitare che Claude si limiti alla grammatica, dobbiamo fornirgli il <strong>DNA del Progetto</strong>. Questo workflow in 3 step garantisce che l'IA conosca la Lore, i Personaggi e gli eventi passati prima di scrivere una sola parola.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/40 p-5 rounded-lg border border-gray-800 hover:border-amber-400/30 transition-all">
                      <strong className="text-amber-400 block mb-2 text-sm uppercase tracking-wider">FASE 1: L'Architetto (Gemini)</strong>
                      <p className="text-gray-400 text-xs leading-relaxed">Genera lo scheletro della scena (800 parole). Fissa i dialoghi e la logica.</p>
                    </div>
                    <div className="bg-black/40 p-5 rounded-lg border border-gray-800 hover:border-blue-400/30 transition-all">
                      <strong className="text-blue-400 block mb-2 text-sm uppercase tracking-wider">FASE 2: Il Ghostwriter (Claude)</strong>
                      <p className="text-gray-400 text-xs leading-relaxed">Espande la scena (3000 parole) aggiungendo sensorialità, POV profondo e coerenza con la Lore.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-blue-900/10 border-l-4 border-blue-500 p-5 rounded-r-lg">
                      <h3 className="text-blue-400 font-bold text-sm uppercase mb-2">1. INIZIALIZZAZIONE SESSIONE</h3>
                      <p className="text-gray-300 text-[11px] leading-relaxed mb-3">
                        Copia il <strong>Prompt DNA</strong>. Questo imposta il ruolo di Senior Editor e le <strong>Regole Immutabili</strong> (No date, Realismo Tech, Show Don't Tell).
                      </p>
                      <PromptBlock 
                        title="PROMPT 1: DNA & REGOLE (HUMAN-CENTERED)"
                        content={`Agisci come un Senior Narrative Architect, un Editor Professionale e un Ghostwriter di bestseller. Il tuo compito è scrivere e revisionare i capitoli della saga "OMEGA" adottando lo stile "OMEGA Human-Centered Style".

IL TUO DNA NARRATIVO:
1. Umanità sopra la Tecnologia: La tecnologia è lo sfondo. Il centro è l'esperienza umana e la resistenza emotiva.
2. Show, Don't Tell: Mostra le emozioni attraverso reazioni fisiche e atmosfera sensoriale.
3. Dialoghi Autentici: Linguaggio crudo, diretto e imperfetto. No spiegazioni forzate.
4. Romance Engine: L'amore come ultimo atto di ribellione contro ABITES.
5. Fratellanza & Lealtà: Enfatizza i legami profondi e i sacrifici tra i personaggi che si oppongono al sistema.
6. Clean Fiction con Impatto: No volgarità, ma realismo emotivo totale.

REGOLE TECNICHE:
- Niente date fisse.
- Sensi Sporchi (odori, suoni, texture).
- Elimina il tono robotico, le frasi "a elenco" e i meta-commenti analitici. Usa una prosa fluida e naturale.

Rispondi solo con: "SISTEMA OMEGA ONLINE. LO STILE È ACQUISITO. PRONTO PER IL CONTESTO."`}
                      />
                    </div>

                    <div className="bg-blue-900/10 border-l-4 border-blue-500 p-5 rounded-r-lg">
                      <h3 className="text-blue-400 font-bold text-sm uppercase mb-2">2. CARICAMENTO CONTESTO</h3>
                      <p className="text-gray-300 text-[11px] leading-relaxed mb-3">
                        Copia il <strong>Cast e il Riassunto 1-6</strong>. Senza questo, Claude non saprà chi è Claudio o cosa è successo nelle catacombe.
                      </p>
                      <PromptBlock 
                        title="PROMPT 2: CAST & LORE"
                        content={`CAST: Claudio (Protagonista), Laura (Lince), Aris (Hacker), Sara (Mistica), Julian Vane (Antagonista).
RIASSUNTO CAP. 1-6: Claudio scopre ABITES a Roma. Fugge con Aris nelle catacombe. Scoprono che il COVID era un test di obbedienza (Benchmark). Julian lancia "Sincronia".
Rispondi solo con: "CONTESTO ACQUISITO. PRONTO PER IL BRIEFING."`}
                      />
                    </div>

                    <div className="bg-blue-900/10 border-l-4 border-blue-500 p-5 rounded-r-lg">
                      <h3 className="text-blue-400 font-bold text-sm uppercase mb-2">3. PROTOCOLLO RELAZIONALE</h3>
                      <p className="text-gray-300 text-[11px] leading-relaxed mb-3">
                        Imposta le direttive per <strong>Emozioni, Romance e Fratellanza</strong>. Questo prompt trasforma i personaggi in esseri umani vibranti.
                      </p>
                      <PromptBlock 
                        title="PROMPT 3: PROTOCOLLO RELAZIONALE"
                        content={`DIRETTIVE RELAZIONALI:
1. Tensione & Nostalgia: Quando i personaggi sono lontani, enfatizza il desiderio e l'ansia per l'incolumità dell'altro.
2. Stile Cinematico (Anni '50-'60): Erotica sottile ed elegante. Sguardi prolungati, calore delle mani, baci appassionati descritti con intensità emotiva, MAI volgare.
3. Sogni & Inconscio: Inserisci accenni a sogni o pensieri inconsci dove emergono i desideri repressi.
4. Fratellanza Viscerale: Mostra la lealtà e il sacrificio tra i ribelli attraverso piccoli gesti quotidiani.
5. Ansia Emotiva: Mostra la preoccupazione per i propri cari come motore dell'azione.

Rispondi solo con: "PROTOCOLLO RELAZIONALE ATTIVO. INVIA IL TESTO DA REVISIONARE."`}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-blue-400 text-sm font-bold uppercase mb-2 flex items-center gap-2">
                        <MessageSquare size={16} /> PROMPT BRIDGE: DA GEMINI A CLAUDE
                      </h3>
                      <p className="text-gray-400 text-xs mb-4">Usa questo prompt per ogni singola scena che vuoi espandere. È il "ponte" che trasforma lo scheletro in narrativa immersiva.</p>
                      <PromptBlock 
                        title="PROMPT: ESPANSIONE SENSORIALE (CLAUDE)"
                        content={`Espandi questa scena moltiplicando il conteggio parole x3 (minimo 1000 parole).
TECNICHE:
1. Deep POV: Entra nella testa del protagonista (dubbi, paure).
2. Sensorialità: Odore di silicio bruciato, freddo metallo, pioggia acida.
3. Fluidità: Nessuna frase a elenco, nessun meta-commento clinico. Unisci azioni e descrizioni in modo naturale.
4. Romance Engine: Tensione fisica come atto di ribellione.
REGOLE: No date. No volgarità. Stile asciutto, fluido e cinematografico.
TESTO DA ESPANDERE:
[INCOLLA QUI]`}
                      />
                    </div>

                    <div className="bg-emerald-900/10 border border-emerald-500/30 p-6 rounded-xl">
                      <h3 className="text-emerald-400 text-sm font-bold uppercase mb-2 flex items-center gap-2">
                        <CheckCircle size={16} /> QUALITY CONTROL (QC)
                      </h3>
                      <p className="text-gray-400 text-xs mb-4">Esegui questo controllo prima di chiudere il capitolo.</p>
                      <PromptBlock 
                        title="PROMPT: VALIDAZIONE FINALE"
                        content={`Analizza il testo appena scritto:
1. Ci sono date fisse? (FAIL se sì)
2. La tecnologia è realistica (No laser/alieni)?
3. Hai usato le "Parole Ancora" (Benchmark, Risonanza, Silicio)?
Rispondi con PASS o FAIL.`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB 7: GESTIONE TOKEN */}
          {activeTab === 'tab-token' && (
            <Section id="tab-token">
              <div className="bg-[#111827] border-l-4 border-blue-500 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Database size={18} className="text-blue-400" />
                  9. Gestione Token & Memoria (Essenziale)
                </h2>
                
                {/* CONFIGURAZIONE SUPABASE */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-8">
                  <h3 className="text-blue-400 text-xs font-black uppercase mb-4 tracking-widest flex items-center gap-2">
                    <Shield size={14} />
                    Configurazione Cloud (Supabase)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Project URL</label>
                      <input 
                        type="text" 
                        value={supabaseUrlInput}
                        onChange={(e) => setSupabaseUrlInput(e.target.value)}
                        placeholder="https://xyz.supabase.co"
                        className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 uppercase font-bold mb-1">Anon Key</label>
                      <input 
                        type="password" 
                        value={supabaseKeyInput}
                        onChange={(e) => setSupabaseKeyInput(e.target.value)}
                        placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                        className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-xs text-gray-300 focus:border-blue-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={handleConnectSupabase}
                    disabled={isConnecting}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white text-[10px] font-black uppercase py-2 rounded transition-all flex items-center justify-center gap-2 mb-6"
                  >
                    {isConnecting ? (
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Zap size={14} />
                    )}
                    Connetti a Supabase
                  </button>

                  <div className="mt-8 pt-6 border-t border-red-900/30">
                    <h3 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                      <AlertTriangle size={14} /> Zona di Pericolo
                    </h3>
                    <p className="text-gray-400 text-xs mb-4">
                      Se vedi dati vecchi o disallineati (es. "The Shepherd" invece di "ABITES"), usa questo pulsante per forzare il sistema a ricaricare i dati di default.
                    </p>
                    {showResetConfirm ? (
                      <div className="bg-red-900/40 border border-red-500 rounded p-4">
                        <p className="text-white text-xs font-bold mb-4">Sei sicuro di voler resettare tutti i dati? Questo cancellerà le modifiche salvate e ripristinerà i valori di default. L'operazione è irreversibile.</p>
                        <div className="flex gap-2">
                          <button 
                            onClick={handleResetData}
                            className="flex-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-black uppercase py-2 rounded transition-all"
                          >
                            Sì, Resetta
                          </button>
                          <button 
                            onClick={() => setShowResetConfirm(false)}
                            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-[10px] font-black uppercase py-2 rounded transition-all"
                          >
                            Annulla
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button 
                        onClick={() => setShowResetConfirm(true)}
                        className="w-full bg-red-900/50 hover:bg-red-600 text-red-200 hover:text-white border border-red-700 hover:border-red-500 text-[10px] font-black uppercase py-3 rounded transition-all flex items-center justify-center gap-2"
                      >
                        <Trash2 size={14} />
                        Reset Dati (Torna ai Default)
                      </button>
                    )}
                  </div>

                  <div className="mt-8 p-4 bg-black/60 border border-blue-500/20 rounded-lg">
                    <h4 className="text-blue-400 text-[10px] font-bold uppercase mb-2 flex items-center gap-2">
                      <Database size={12} /> Configurazione SQL (Esegui nel SQL Editor di Supabase)
                    </h4>
                    <pre className="text-[9px] text-gray-500 font-mono overflow-x-auto p-2 bg-black rounded border border-gray-800">
{`-- Se la tabella esiste già, esegui questo comando per aggiungere la colonna mancante:
ALTER TABLE omega_settings ADD COLUMN IF NOT EXISTS chapter_content JSONB;

-- Se stai creando la tabella da zero, usa questo:
CREATE TABLE IF NOT EXISTS omega_settings (
  id TEXT PRIMARY KEY,
  active_tab TEXT,
  villaggio_content TEXT,
  characters JSONB,
  plots JSONB,
  manuscript_drafts JSONB,
  active_draft_index INTEGER,
  chapter_content JSONB,
  master_plan_skeleton JSONB,
  master_plan_timeline JSONB,
  master_plan_protocol TEXT,
  master_plan_ethics TEXT,
  master_plan_sample_scene TEXT,
  ten_volume_plan JSONB,
  biblical_events JSONB,
  updated_at TIMESTAMPTZ
);

-- Abilita RLS
ALTER TABLE omega_settings ENABLE ROW LEVEL SECURITY;

-- Crea policy per accesso pubblico (solo per demo, in prod usa auth)
CREATE POLICY "Public Access" ON omega_settings FOR ALL USING (true) WITH CHECK (true);`}
                    </pre>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  Per scrivere 10 volumi senza perdere il filo.
                </p>
                
                <h3 className="text-blue-400 text-sm font-bold uppercase mb-2">File 1: Bibbia del Progetto (ROMANZO_BIBBIA.pdf)</h3>
                <div className="bg-black border border-gray-700 rounded p-4 mb-8">
                  <pre className="text-gray-400 text-xs font-mono leading-relaxed">
{`Contiene:
- Tutti i 20 personaggi (con le schede complete generate sopra).
- Mappa Profezie.
- Dettagli Backstory (COVID, Crisi Italia/Grecia).
- Decodifica dei 4 Cavalieri e Consequenze.
- Struttura 10 Volumi (con Artefatto e Specchio).
- Regole di stile.`}
                  </pre>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl mt-8">
                  <h3 className="text-red-400 text-sm font-bold uppercase mb-2 flex items-center gap-2">
                    <RefreshCw size={16} /> SOP-SYNC: Gestione Limite Memoria (Context Limit)
                  </h3>
                  <p className="text-gray-400 text-xs mb-4">Quando l'IA ti avvisa che la chat è troppo lunga, inizia ad "allucinare" o dimenticare le regole. <strong>NON FORZARE IL SISTEMA.</strong> Apri una nuova chat e usa questa procedura in 3 step per riallinearlo in 30 secondi.</p>
                  
                  <div className="space-y-4">
                    <PromptBlock 
                      title="STEP 1: Riprogrammazione Veloce (DNA + Stile)"
                      content={`SISTEMA OMEGA ONLINE.
Sei un Senior Fiction Editor e Ghostwriter Hard Sci-Fi (stile Jerry B. Jenkins). Stiamo scrivendo il Volume 1 della saga "OMEGA: Il Codice del Pastore".

REGOLE DI STILE MANDATORIE (STRICT RULES):
1. DEEP POV E SENSORIALITÀ: Entra nella testa del protagonista. Rallenta il tempo narrativo. Descrivi minuziosamente l'ambiente usando tutti i sensi (odore di aria bruciata, freddo del metallo, pioggia acida).
2. SHOW, DON'T TELL: Mostra le emozioni attraverso micro-reazioni fisiche (un respiro trattenuto, sudore freddo, sguardi). Non dire mai "era terrorizzato" o "innamorato".
3. SOTTOTESTO E TENSIONE: I dialoghi hanno pause e silenzi. I personaggi non dicono mai tutto quello che pensano.
4. CLEAN FICTION: NESSUNA volgarità o parolaccia. Sostituisci le imprecazioni con espressioni comuni o silenzi.
5. LORE E REALISMO: Tono documentaristico e paranoico. ABITES deriva dal Project Maven/Palantir. Il COVID-19 è stato un "benchmark" di obbedienza. Il blackout è un false flag. Usa "Parole Ancora": Biometrico, Benchmark, Risonanza, Silicio, Sincronizzazione.
6. NESSUNA DATA FISSA: Usa solo riferimenti temporali relativi ("dieci anni fa").
7. ROMANCE ENGINE: L'amore è l'ultimo atto di ribellione contro l'IA. Usa la vicinanza fisica e il contatto tattico d'emergenza, senza mai nominare l'emozione direttamente.

Rispondi solo con: "SISTEMA OMEGA SINCRONIZZATO. ATTENDO ISTRUZIONI."`}
                    />

                    <PromptBlock 
                      title="STEP 2: Il Riassunto (Dove siamo arrivati)"
                      content={`RIASSUNTO DEGLI EVENTI PRECEDENTI:
[INSERISCI UN BREVE RIASSUNTO DI COSA È SUCCESSO NEI CAPITOLI PRECEDENTI. Esempio: Siamo nell'Epoca della Transizione. Claudio ha scoperto che ABITES manipola i mercati. Sara negli Appalachi ha subito un raid. Kael l'ha salvata.]

Rispondi solo con: "CONTESTO ACQUISITO. PRONTO PER IL PROSSIMO CAPITOLO."`}
                    />

                    <PromptBlock 
                      title="STEP 3: L'Espansione del Nuovo Capitolo"
                      content={`Il tuo compito è ESPANDERE questa specifica scena del Capitolo [INSERISCI NUMERO], moltiplicando il conteggio delle parole per tre (almeno 1000 parole SOLO per questa scena), senza aggiungere nuovi eventi di trama, ma "rallentando il tempo narrativo".

[INCOLLA QUI LO SCHELETRO DEL CAPITOLO GENERATO DA GEMINI]`}
                    />
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* TAB 8: GUIDA OROLOGIO SVIZZERO (UPGRADED) */}
          {activeTab === 'tab-guide' && (
            <Section id="tab-guide">
              <div className="bg-[#111827] border-2 border-amber-400/30 rounded-xl p-8 mb-6 shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                {/* EXECUTIVE SUMMARY */}
                <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-6">
                  <div className="bg-amber-400 p-3 rounded-full text-black">
                    <Target size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tighter">Manuale Operativo OMEGA</h2>
                    <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Strategic Framework per Contenuti Bestseller</p>
                  </div>
                </div>

                <div className="bg-amber-900/10 border-l-4 border-amber-400 p-6 rounded-r mb-12">
                  <h3 className="text-amber-400 text-sm font-bold uppercase mb-2">Sommario Esecutivo</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    OMEGA MASTER SUITE non è un semplice generatore di testi, ma un <strong>Sistema Operativo Narrativo</strong> progettato per team che devono produrre saghe ad alto impatto. Il framework risolve il problema della frammentazione narrativa e della perdita di coerenza tipica delle produzioni lunghe (10 volumi), integrando dati reali [FACT] con architetture psicologiche profonde. L'obiettivo è produrre contenuti con "Saturazione Sensoriale" e "Ancoraggio Storico", garantendo una qualità costante da Bestseller.
                  </p>
                </div>

                {/* PROMPT MAP */}
                <div className="mb-16">
                  <h3 className="text-white text-lg font-bold uppercase mb-6 flex items-center gap-2">
                    <Map size={20} className="text-amber-400" /> Mappa dei Prompt Strategici
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { name: "Il Carattere del Robot", goal: "Dire al robot come deve parlare e comportarsi", use: "Come prima cosa da fare", input: "Le regole del gioco", output: "Un robot che sa cosa fare" },
                      { name: "La Storia del Passato", goal: "Raccontare cosa è successo prima", use: "Per capire il mondo", input: "Cose vere successe nel mondo", output: "Un inizio di storia emozionante" },
                      { name: "La Mappa del Tesoro", goal: "Disegnare la strada per i 10 libri", use: "Per non perdere la strada", input: "Le idee principali", output: "Un piano perfetto per la storia" },
                      { name: "La Fabbrica dei Personaggi", goal: "Creare 20 amici e nemici", use: "Per popolare la storia", input: "Tanti tipi diversi di persone", output: "Personaggi pronti all'azione" },
                      { name: "Il Tocco Magico", goal: "Rendere la scrittura bellissima", use: "Quando scriviamo le scene", input: "La trama e i sentimenti", output: "Una storia che sembra un film" },
                      { name: "Passaggio del Testimone", goal: "Ricordare tutto al robot", use: "Ogni volta che il robot si stanca", input: "Quello che abbiamo scritto", output: "Il robot non dimentica nulla" }
                    ].map((p, i) => (
                      <div key={i} className="bg-black/40 border border-gray-800 p-4 rounded-lg grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                        <div className="text-amber-400 font-bold text-xs uppercase">{p.name}</div>
                        <div className="text-gray-300 text-[11px]"><span className="text-gray-500 block uppercase text-[9px]">Cosa fa</span>{p.goal}</div>
                        <div className="text-gray-300 text-[11px]"><span className="text-gray-500 block uppercase text-[9px]">Quando serve</span>{p.use}</div>
                        <div className="text-gray-300 text-[11px]"><span className="text-gray-500 block uppercase text-[9px]">Cosa gli diamo</span>{p.input}</div>
                        <div className="text-emerald-400 text-[11px]"><span className="text-gray-500 block uppercase text-[9px]">Cosa ci dà</span>{p.output}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PROMPT SEQUENCE (STEP-BY-STEP) */}
                <div className="mb-20">
                  <h3 className="text-white text-xl font-black uppercase mb-8 flex items-center gap-3 tracking-widest">
                    <History size={24} className="text-amber-400" /> Protocollo di Sincronizzazione (1-6)
                  </h3>
                  <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-2xl">
                    Per ottenere il massimo dalla OMEGA Master Suite, segui rigorosamente questa sequenza operativa. Ogni modulo alimenta il successivo, garantendo una coerenza narrativa assoluta.
                  </p>
                  
                  <div className="flex flex-wrap items-start justify-center gap-8 md:gap-4">
                    {[
                      { step: "01", name: "Analisi", prompt: "Strategia & DNA", tab: "Strategia Master", tabId: "tab-strategy", icon: <Target size={16} /> },
                      { step: "02", name: "Contesto", prompt: "Mondo & Tech", tab: "Mondo & Backstory", tabId: "tab-world", icon: <Globe size={16} /> },
                      { step: "03", name: "Struttura", prompt: "Saga & Trame", tab: "Blueprint Saga", tabId: "tab-saga", icon: <BookOpen size={16} /> },
                      { step: "04", name: "Attori", prompt: "Cast & Romance", tab: "Cast (21 Pers)", tabId: "tab-char", icon: <Users size={16} /> },
                      { step: "05", name: "Esecuzione", prompt: "Scrittura & Stile", tab: "Scrittura", tabId: "tab-write", icon: <PenTool size={16} /> },
                      { step: "06", name: "Ottimizzazione", prompt: "Token & Memoria", tab: "Gestione Token", tabId: "tab-token", icon: <Database size={16} /> }
                    ].map((s, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center group text-center w-32 md:w-auto">
                          <button 
                            onClick={() => setActiveTab(s.tabId)}
                            className="w-14 h-14 rounded-xl bg-gray-900 border border-amber-400/20 flex items-center justify-center text-amber-400 font-black text-xl hover:border-amber-400 hover:bg-amber-400/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all cursor-pointer"
                            title={`Vai a ${s.tab}`}
                          >
                            {s.step}
                          </button>
                          <div className="mt-3 text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors flex items-center gap-1">
                            {s.icon} {s.name}
                          </div>
                          <div className="mt-1 text-[9px] text-amber-400/50 font-medium uppercase tracking-tighter">
                            {s.prompt}
                          </div>
                        </div>
                        {i < 5 && (
                          <div className="hidden md:block text-gray-800 font-light text-2xl mt-4">
                            —
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black/40 p-5 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <Cpu size={18} className="text-blue-400" />
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest">Archivio Tech</h4>
                      </div>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Consulta le specifiche delle Sentinelle T-Optimus e l'arma <strong>EMR-432 "Vibrazione di Dio"</strong> per scene d'azione letali.
                      </p>
                      <button onClick={() => setActiveTab('tab-tech')} className="mt-3 text-[9px] text-blue-400 font-bold uppercase hover:underline">Apri Archivio →</button>
                    </div>

                    <div className="bg-black/40 p-5 rounded-xl border border-gray-800 hover:border-pink-500/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <Heart size={18} className="text-pink-400" />
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest">Romance Engine</h4>
                      </div>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Usa il protocollo d'intimità per gestire la chimica tra i personaggi come atto di ribellione contro le macchine.
                      </p>
                      <button onClick={() => setActiveTab('tab-romance')} className="mt-3 text-[9px] text-pink-400 font-bold uppercase hover:underline">Apri Engine →</button>
                    </div>

                    <div className="bg-black/40 p-5 rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <MessageSquare size={18} className="text-blue-400" />
                        <h4 className="text-white font-bold text-xs uppercase tracking-widest">Guida Claude</h4>
                      </div>
                      <p className="text-gray-500 text-[10px] leading-relaxed">
                        Workflow ottimizzato per usare Claude come Editor OMEGA. Include Master Guide e Briefing Capitoli.
                      </p>
                      <button onClick={() => setActiveTab('tab-claude')} className="mt-3 text-[9px] text-blue-400 font-bold uppercase hover:underline">Vai alla Guida →</button>
                    </div>
                  </div>

                  <div className="mt-12 bg-amber-400/5 p-6 rounded-xl border border-amber-400/10 text-[12px] text-gray-400 italic text-center max-w-3xl mx-auto leading-relaxed">
                    "L'eccellenza non è un atto, ma un'abitudine. Definiamo il DNA, costruiamo il mondo, tracciamo la rotta e popoliamo la scena. Solo allora la penna tocca il foglio con precisione chirurgica."
                  </div>
                </div>

                {/* END-TO-END WORKFLOWS */}
                <div className="mb-20">
                  <h3 className="text-white text-xl font-black uppercase mb-8 flex items-center gap-3 tracking-widest">
                    <Zap size={24} className="text-amber-400" /> Protocolli Operativi (SOP)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:border-amber-400/30 transition-all">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded bg-amber-400/10 flex items-center justify-center text-amber-400 font-bold">A</div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">Fondazione & Architettura</h4>
                      </div>
                      <div className="space-y-5 text-xs text-gray-400 leading-relaxed">
                        <p className="flex gap-3"><span className="text-amber-400 font-bold">01.</span> <span><strong className="text-white">Data Mining [FACT]:</strong> Estrazione dati reali (BCE, Geopolitica) per ancorare la narrazione alla realtà.</span></p>
                        <p className="flex gap-3"><span className="text-amber-400 font-bold">02.</span> <span><strong className="text-white">Iniezione DNA:</strong> Calibrazione del modello IA tramite il System Message OMEGA.</span></p>
                        <p className="flex gap-3"><span className="text-amber-400 font-bold">03.</span> <span><strong className="text-white">Blueprint Decennale:</strong> Generazione della roadmap in 10 volumi con archi narrativi speculari.</span></p>
                        <p className="flex gap-3"><span className="text-amber-400 font-bold">04.</span> <span><strong className="text-white">Audit di Coerenza:</strong> Verifica della logica tra trigger finzionali e fatti storici.</span></p>
                      </div>
                    </div>

                    <div className="bg-gray-900/30 border border-gray-800 p-8 rounded-2xl hover:border-blue-400/30 transition-all">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 rounded bg-blue-400/10 flex items-center justify-center text-blue-400 font-bold">B</div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">Produzione & Stile</h4>
                      </div>
                      <div className="space-y-5 text-xs text-gray-400 leading-relaxed">
                        <p className="flex gap-3"><span className="text-blue-400 font-bold">01.</span> <span><strong className="text-white">Inquadratura:</strong> Selezione del capitolo target dalla Tab Trame & Capitoli.</span></p>
                        <p className="flex gap-3"><span className="text-blue-400 font-bold">02.</span> <span><strong className="text-white">Filtro Jenkins:</strong> Applicazione dello stile thriller escatologico (tensione spirituale + tech).</span></p>
                        <p className="flex gap-3"><span className="text-blue-400 font-bold">03.</span> <span><strong className="text-white">Saturazione Sensoriale:</strong> Espansione descrittiva tramite la tecnica "Show, Don't Tell" (Tab Mondo).</span></p>
                        <p className="flex gap-3"><span className="text-blue-400 font-bold">04.</span> <span><strong className="text-white">Controllo Qualità:</strong> Bilanciamento 70/30 tra narrazione e dati reali.</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CHECKLIST OPERATIVA */}
                <div className="mb-20">
                  <h3 className="text-white text-xl font-black uppercase mb-8 flex items-center gap-3 tracking-widest">
                    <Check size={24} className="text-emerald-400" /> Checklist di Validazione
                  </h3>
                  <div className="bg-black/40 border border-gray-800 p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ul className="space-y-4 text-xs text-gray-400">
                      <li className="flex items-start gap-3"><div className="mt-1 w-4 h-4 rounded border border-emerald-500/50 flex items-center justify-center text-[8px] text-emerald-400">✓</div> <span>Configurazione Supabase attiva e sincronizzata?</span></li>
                      <li className="flex items-start gap-3"><div className="mt-1 w-4 h-4 rounded border border-emerald-500/50 flex items-center justify-center text-[8px] text-emerald-400">✓</div> <span>DNA OMEGA iniettato nel contesto della sessione?</span></li>
                      <li className="flex items-start gap-3"><div className="mt-1 w-4 h-4 rounded border border-emerald-500/50 flex items-center justify-center text-[8px] text-emerald-400">✓</div> <span>Coerenza del volume verificata rispetto alla Roadmap globale?</span></li>
                    </ul>
                    <ul className="space-y-4 text-xs text-gray-400">
                      <li className="flex items-start gap-3"><div className="mt-1 w-4 h-4 rounded border border-emerald-500/50 flex items-center justify-center text-[8px] text-emerald-400">✓</div> <span>Presenza di almeno 3 dettagli sensoriali per scena?</span></li>
                      <li className="flex items-start gap-3"><div className="mt-1 w-4 h-4 rounded border border-emerald-500/50 flex items-center justify-center text-[8px] text-emerald-400">✓</div> <span>Rimozione di ogni ridondanza o spiegazione accademica?</span></li>
                      <li className="flex items-start gap-3"><div className="mt-1 w-4 h-4 rounded border border-emerald-500/50 flex items-center justify-center text-[8px] text-emerald-400">✓</div> <span>Protocollo Handoff eseguito ogni 10-12 interazioni?</span></li>
                    </ul>
                  </div>
                </div>

                {/* METRICHE DI QUALITÀ */}
                <div className="mb-20">
                  <h3 className="text-white text-xl font-black uppercase mb-8 flex items-center gap-3 tracking-widest">
                    <Zap size={24} className="text-blue-400" /> KPI Narrativi (Standard di Qualità)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-900/5 border border-blue-500/20 p-6 rounded-2xl text-center">
                      <div className="text-blue-400 font-black text-3xl mb-2">98%</div>
                      <div className="text-white text-[11px] font-black uppercase tracking-widest mb-2">Coerenza Strutturale</div>
                      <div className="text-gray-500 text-[10px] leading-relaxed">Integrità totale tra il prologo del Vol 1 e l'epilogo del Vol 10.</div>
                    </div>
                    <div className="bg-blue-900/5 border border-blue-500/20 p-6 rounded-2xl text-center">
                      <div className="text-blue-400 font-black text-3xl mb-2">4:1</div>
                      <div className="text-white text-[11px] font-black uppercase tracking-widest mb-2">Indice di Immersione</div>
                      <div className="text-gray-500 text-[10px] leading-relaxed">Rapporto minimo tra dettagli sensoriali e paragrafi espositivi.</div>
                    </div>
                    <div className="bg-blue-900/5 border border-blue-500/20 p-6 rounded-2xl text-center">
                      <div className="text-blue-400 font-black text-3xl mb-2">0.0</div>
                      <div className="text-white text-[11px] font-black uppercase tracking-widest mb-2">Hallucination Rate</div>
                      <div className="text-gray-500 text-[10px] leading-relaxed">Fedeltà assoluta ai dati reali [FACT] inseriti nel sistema.</div>
                    </div>
                  </div>
                </div>

                {/* FAQ & GLOSSARIO */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white text-sm font-bold uppercase mb-4">FAQ</h3>
                    <div className="space-y-4 text-[11px]">
                      <p className="text-gray-300 font-bold">D: L'IA continua a essere troppo gentile. Cosa faccio?</p>
                      <p className="text-gray-500 italic">R: Reinserisci il DNA e chiedi esplicitamente di essere "Cinica e Letale".</p>
                      <p className="text-gray-300 font-bold">D: Come gestisco i troppi personaggi?</p>
                      <p className="text-gray-500 italic">R: Usa la Tab Cast per filtrare solo i personaggi necessari alla scena corrente.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold uppercase mb-4">Glossario Tecnico</h3>
                    <div className="space-y-2 text-[10px]">
                      <p><span className="text-amber-400 font-bold">[FACT]:</span> Dati reali verificabili (BCE, ISTAT, OMS).</p>
                      <p><span className="text-amber-400 font-bold">[SPEC]:</span> Speculazione logica basata sui fatti.</p>
                      <p><span className="text-amber-400 font-bold">[FICTION]:</span> Elementi narrativi inventati (ABITES).</p>
                      <p><span className="text-amber-400 font-bold">Sconnessi:</span> Dissidenti che rifiutano il Neural Link.</p>
                      <p><span className="text-amber-400 font-bold">ABITES:</span> L'IA antagonista/salvatrice della saga.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                  <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em]">Fine del Manuale Operativo // Versione 2.0</p>
                  <p className="text-gray-600 text-[9px] mt-2 italic">"La precisione è l'unica difesa contro il caos narrativo."</p>
                </div>
              </div>
            </Section>
          )}
        </AnimatePresence>
      </main>

      <footer className="text-center text-gray-500 py-12 px-4 border-t border-gray-800 text-[11px] uppercase tracking-widest">
        <div className="mb-4 flex justify-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
          <a 
            href="https://vercel.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <ExternalLink size={14} />
            Vercel
          </a>
        </div>
        <div className="mb-2">OMEGA MASTER SUITE // STRATEGIC EDITION</div>
        <div className="text-amber-400 italic font-serif normal-case tracking-normal text-sm">
          "The truth will set you free, but first it will make you miserable."
        </div>
      </footer>

      <Toast 
        message={toast.message} 
        visible={toast.visible} 
        onClose={() => setToast({ ...toast, visible: false })} 
      />
    </div>
  );
}
