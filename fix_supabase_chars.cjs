const fs = require('fs');

const path = './src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Extract the characters array from the current file
const charsRegex = /const \[characters, setCharacters\] = useState<any\[\]>\(\[([\s\S]*?)\]\);/;
const charsMatch = content.match(charsRegex);

if (!charsMatch) {
  console.error("Could not find characters array");
  process.exit(1);
}

const charsContent = charsMatch[1];

// 2. Create the defaultCharacters constant
const defaultCharsDeclaration = `const defaultCharacters = [\n${charsContent}\n];\n\nexport default function App() {`;

// Replace the export default function App() { with the new declaration
content = content.replace('export default function App() {', defaultCharsDeclaration);

// 3. Replace the useState initialization
content = content.replace(charsRegex, 'const [characters, setCharacters] = useState<any[]>(defaultCharacters);');

// 4. Update the Supabase fetch logic
const fetchLogicRegex = /if \(settings\.characters\) setCharacters\(settings\.characters\);/;
const newFetchLogic = `if (settings.characters) {
            if (settings.characters[0]?.name?.includes("Elias")) {
              setCharacters(defaultCharacters);
              supabase.from('omega_settings').upsert({
                id: 'current_session',
                characters: defaultCharacters,
                updated_at: new Date().toISOString()
              }).then(() => console.log('Auto-fixed old characters in Supabase'));
            } else {
              setCharacters(settings.characters);
            }
          }`;

content = content.replace(fetchLogicRegex, newFetchLogic);

fs.writeFileSync(path, content);
console.log('Successfully updated App.tsx to handle old characters from Supabase');
