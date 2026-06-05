import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
export const languages = ['en', 'es'];

const requiredFields = ['title', 'description', 'section', 'order', 'status', 'owner', 'sources'];

export function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function parseScalar(value) {
  const trimmed = value.trim();
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function parseFrontmatter(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`${filePath} is missing frontmatter`);
  }

  const data = {};
  let currentArrayKey = null;
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const arrayItem = line.match(/^\s*-\s+(.+)$/);
    if (arrayItem && currentArrayKey) {
      data[currentArrayKey].push(parseScalar(arrayItem[1]));
      continue;
    }

    currentArrayKey = null;
    const field = line.match(/^([A-Za-z0-9_-]+):(?:\s*(.*))?$/);
    if (!field) {
      throw new Error(`${filePath} has unsupported frontmatter line: ${line}`);
    }

    const [, key, value = ''] = field;
    if (value.trim() === '') {
      data[key] = [];
      currentArrayKey = key;
    } else {
      data[key] = parseScalar(value);
    }
  }

  for (const field of requiredFields) {
    if (!(field in data)) {
      throw new Error(`${filePath} is missing frontmatter field "${field}"`);
    }
  }

  return { data, body: match[2].trim() };
}

export function slugifyHeading(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'section';
}

export function extractHeadings(markdown) {
  const seen = new Map();
  return markdown
    .split('\n')
    .map((line) => line.trim().match(/^(#{2,4})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => {
      const title = match[2].trim();
      const baseId = slugifyHeading(title);
      const count = seen.get(baseId) ?? 0;
      seen.set(baseId, count + 1);
      return {
        level: match[1].length,
        title,
        id: count === 0 ? baseId : `${baseId}-${count + 1}`,
      };
    });
}

export function stripRedundantOpeningHeading(markdown, title) {
  const lines = markdown.split('\n');
  const firstContentIndex = lines.findIndex((line) => line.trim().length > 0);
  if (firstContentIndex === -1) return markdown;

  const firstHeading = lines[firstContentIndex].trim().match(/^(#{2,4})\s+(.+)$/);
  if (!firstHeading) return markdown;

  if (slugifyHeading(firstHeading[2].trim()) !== slugifyHeading(title)) {
    return markdown;
  }

  const nextLines = lines.slice(firstContentIndex + 1);
  while (nextLines[0]?.trim() === '') {
    nextLines.shift();
  }

  return nextLines.join('\n').trim();
}

export function markdownToHtml(markdown) {
  const lines = markdown.split('\n');
  const html = [];
  let paragraph = [];
  let list = [];
  const headingIds = extractHeadings(markdown);
  let headingIndex = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join('')}</ul>`);
    list = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const heading = trimmed.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const id = headingIds[headingIndex]?.id ?? slugifyHeading(heading[2]);
      headingIndex += 1;
      html.push(`<h${level} id="${id}">${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    const bullet = trimmed.match(/^-\s+(.+)$/);
    if (bullet) {
      flushParagraph();
      list.push(bullet[1]);
      continue;
    }

    flushList();
    paragraph.push(trimmed);
  }

  flushParagraph();
  flushList();
  return html.join('\n');
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

export function readDocs() {
  return Object.fromEntries(languages.map((lang) => {
    const base = join(repoRoot, 'content', lang);
    const docs = readdirSync(base)
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = join(base, file);
        const slug = file.replace(/\.md$/, '');
        const parsed = parseFrontmatter(filePath);
        const body = stripRedundantOpeningHeading(parsed.body, parsed.data.title);
        return {
          slug,
          lang,
          path: relative(repoRoot, filePath),
          ...parsed.data,
          headings: extractHeadings(body),
          body,
          html: markdownToHtml(body),
        };
      })
      .sort((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
    return [lang, docs];
  }));
}

export function writeTextFile(filePath, value) {
  writeFileSync(filePath, value.endsWith('\n') ? value : `${value}\n`, 'utf8');
}
