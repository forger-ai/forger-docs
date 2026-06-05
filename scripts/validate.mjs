import { readDocs, languages } from './docs-lib.mjs';

const docsByLang = readDocs();
const errors = [];

for (const lang of languages) {
  const seenSlugs = new Set();
  const seenOrders = new Set();
  for (const doc of docsByLang[lang]) {
    if (seenSlugs.has(doc.slug)) errors.push(`${lang}/${doc.slug} is duplicated`);
    seenSlugs.add(doc.slug);
    if (seenOrders.has(doc.order)) errors.push(`${lang}/${doc.slug} repeats order ${doc.order}`);
    seenOrders.add(doc.order);
    if (!Array.isArray(doc.sources) || doc.sources.length === 0) {
      errors.push(`${doc.path} must list at least one source`);
    }
    if (!['available', 'beta', 'partial', 'planned'].includes(doc.status)) {
      errors.push(`${doc.path} has invalid status "${doc.status}"`);
    }
    for (const link of doc.body.matchAll(/\]\(([^)]+)\)/g)) {
      const target = link[1];
      if (target.startsWith('http') || target.startsWith('#')) continue;
      const slug = target.replace(/^\.\//, '').replace(/\.md$/, '');
      if (!docsByLang[lang].some((candidate) => candidate.slug === slug)) {
        errors.push(`${doc.path} links to missing doc "${target}"`);
      }
    }
  }
}

const enSlugs = new Set(docsByLang.en.map((doc) => doc.slug));
const esSlugs = new Set(docsByLang.es.map((doc) => doc.slug));
for (const slug of enSlugs) {
  if (!esSlugs.has(slug)) errors.push(`Missing Spanish translation for ${slug}`);
}
for (const slug of esSlugs) {
  if (!enSlugs.has(slug)) errors.push(`Missing English translation for ${slug}`);
}

for (const slug of enSlugs) {
  const enDoc = docsByLang.en.find((doc) => doc.slug === slug);
  const esDoc = docsByLang.es.find((doc) => doc.slug === slug);
  if (!enDoc || !esDoc) continue;
  const enLevels = enDoc.headings.map((heading) => heading.level).join(',');
  const esLevels = esDoc.headings.map((heading) => heading.level).join(',');
  if (enLevels !== esLevels) {
    errors.push(`${slug} has mismatched English/Spanish heading structure`);
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Validated ${docsByLang.en.length + docsByLang.es.length} docs.`);
