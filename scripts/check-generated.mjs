import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { repoRoot } from './docs-lib.mjs';

const generatedPath = join(repoRoot, 'dist', 'forger-docs.generated.ts');
const generated = readFileSync(generatedPath, 'utf8');
if (!generated.includes('export const forgerDocsBundle')) {
  console.error('Generated docs snapshot is missing forgerDocsBundle.');
  process.exit(1);
}

console.log('Generated docs snapshot is valid.');
