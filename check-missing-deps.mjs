import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

function walk(dir) {
  let files = [];
  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath));
    } else if (file.endsWith('.mjs')) {
      files.push(fullPath);
    }
  }
  return files;
}

const distFiles = walk('dist/server');
const importRegex = /from ['"]([^.'"/][^'"]*)['"]/g;

const allModules = new Set();

for (const file of distFiles) {
  const content = readFileSync(file, 'utf-8');
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    allModules.add(match[1]);
  }
}

console.log('📦 Modules utilisés dans dist/server :\n');
console.log([...allModules].join('\n'));

// Vérifie s'ils sont installés
console.log('\n🔍 Vérification dans node_modules:\n');

for (const mod of allModules) {
  try {
    execSync(`pnpm ls ${mod}`, { stdio: 'ignore' });
    console.log(`✅ ${mod}`);
  } catch {
    console.log(`❌ ${mod} manquant (ajouter avec: pnpm add ${mod})`);
  }
}