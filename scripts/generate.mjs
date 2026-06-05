import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { readDocs, repoRoot, writeTextFile } from './docs-lib.mjs';

const docsByLang = readDocs();
const contentHash = createHash('sha256').update(JSON.stringify(docsByLang)).digest('hex').slice(0, 16);
const output = {
  generatedAt: `content-${contentHash}`,
  title: {
    en: 'Forger Documentation',
    es: 'Documentación de Forger',
  },
  subtitle: {
    en: 'How Forger creates, installs, runs, adapts, and shares local intelligent apps.',
    es: 'Cómo Forger crea, instala, ejecuta, adapta y comparte apps inteligentes locales.',
  },
  docs: docsByLang,
};

const generatedSource = `/* Generated from forger-docs. Do not edit manually. */
export type ForgerDocsLanguage = 'en' | 'es';

export interface ForgerDocEntry {
  slug: string;
  lang: ForgerDocsLanguage;
  path: string;
  title: string;
  description: string;
  section: string;
  order: number;
  status: 'available' | 'beta' | 'partial' | 'planned';
  owner: string;
  sources: string[];
  headings: { level: number; title: string; id: string }[];
  body: string;
  html: string;
}

export interface ForgerDocsBundle {
  generatedAt: string;
  title: Record<ForgerDocsLanguage, string>;
  subtitle: Record<ForgerDocsLanguage, string>;
  docs: Record<ForgerDocsLanguage, ForgerDocEntry[]>;
}

export const forgerDocsBundle = ${JSON.stringify(output, null, 2)} as const satisfies ForgerDocsBundle;
`;

mkdirSync(join(repoRoot, 'dist'), { recursive: true });
writeTextFile(join(repoRoot, 'dist', 'forger-docs.generated.ts'), generatedSource);
console.log('Generated dist/forger-docs.generated.ts');
