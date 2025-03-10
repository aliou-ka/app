import fs from 'fs';
import path from 'path';

const CHUNKS_DIR = './dist/server/chunks';
const SEARCH_STRING = 'dist/client/';
const REPLACEMENT = 'client/';

const files = fs.readdirSync(CHUNKS_DIR);

for (const file of files) {
  const filePath = path.join(CHUNKS_DIR, file);
   // ✅ Ne traite que les fichiers, ignore les dossiers
   if (!fs.statSync(filePath).isFile()) continue;

  let content = fs.readFileSync(filePath, 'utf-8');

  if (content.includes(SEARCH_STRING)) {
    content = content.replaceAll(SEARCH_STRING, REPLACEMENT);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Patched: ${file}`);
  }
}