import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { repoRoot } from './docs-lib.mjs';

const outIndex = process.argv.indexOf('--out');
const outValue = outIndex === -1 ? null : process.argv[outIndex + 1];

if (!outValue) {
  console.error('Usage: npm run export -- --out <path>');
  process.exit(1);
}

const generatedPath = resolve(repoRoot, 'dist', 'forger-docs.generated.ts');
if (!existsSync(generatedPath)) {
  console.error('Missing dist/forger-docs.generated.ts. Run npm run generate before export.');
  process.exit(1);
}

const outputPath = resolve(outValue);
mkdirSync(dirname(outputPath), { recursive: true });
copyFileSync(generatedPath, outputPath);
console.log(`Exported Forger docs bundle to ${outputPath}`);
