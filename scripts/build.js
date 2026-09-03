#!/usr/bin/env node
/**
 * Phorma Scientific — Static Site Build
 * --------------------------------------
 * Renders markdown content (content/{services,trainees,...}/{en,es}) into
 * the HTML pages at build time. The generated pages contain fully static, semantic, accessible HTML
 * plus JSON-LD structured data — no runtime JS content loading.
 *
 * Generated markup is injected between these markers in each page:
 *
 *   <!-- build:start --> ... <!-- build:end -->          (page content)
 *   <!-- build:jsonld:start --> ... <!-- build:jsonld:end -->  (structured data)
 *
 * Usage: node scripts/build.js
 *
 * Zero dependencies. Node >= 14.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'content');
const BASE_URL = 'https://phorma.sh';

const CONTENT_START = '<!-- build:start -->';
const CONTENT_END = '<!-- build:end -->';
const JSONLD_START = '<!-- build:jsonld:start -->';
const JSONLD_END = '<!-- build:jsonld:end -->';

/**
 * Page registry: output file -> content source + rendering options.
 * New markdown files are discovered automatically from content/{type}/{lang}/
 * and sorted by their frontmatter `order` field.
 */
const PAGES = [
  { file: 'index.html',       type: 'home',     lang: 'en' },
  { file: 'mission.html',     type: 'mission',  lang: 'en' },
  { file: 'services.html',    type: 'services', lang: 'en', group: true, jsonld: 'services' },
  { file: 'trainees.html',    type: 'trainees', lang: 'en', group: true, jsonld: 'courses' },
  { file: 'about.html',       type: 'team',     lang: 'en', jsonld: 'team' },
  { file: 'es/index.html',    type: 'home',     lang: 'es' },
  { file: 'es/mission.html',  type: 'mission',  lang: 'es' },
  { file: 'es/services.html', type: 'services', lang: 'es', group: true, jsonld: 'services' },
  { file: 'es/trainees.html', type: 'trainees', lang: 'es', group: true, jsonld: 'courses' },
  { file: 'es/about.html',    type: 'team',     lang: 'es', jsonld: 'team' },
];

// ---------------------------------------------------------------------------
// Parsing
// ---------------------------------------------------------------------------

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Escape text, then re-allow a small set of presentation tags used
 * intentionally in content frontmatter (e.g. mission hero subtitle).
 * Everything else stays escaped.
 */
function rich(str) {
  return escapeHtml(str).replace(/&lt;(\/?(br|strong|em|code))&gt;/g, '<$1>');
}

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content: text };

  const frontmatter = {};
  match[1].split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) return;
    const key = line.substring(0, colonIndex).trim();
    let value = line.substring(colonIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    frontmatter[key] = value;
  });

  return { frontmatter, content: match[2] };
}

/**
 * Split a markdown body on standalone '---' horizontal-rule lines.
 * Used by services/team content to separate body from footer sections.
 */
function splitOnRule(content) {
  return content.split(/^\s*---\s*$/m).map((p) => p.trim()).filter((p) => p);
}

// ---------------------------------------------------------------------------
// Markdown -> HTML (semantic + escaped output)
// ---------------------------------------------------------------------------

function inlineMarkdown(line) {
  let html = line;
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  return html;
}

/**
 * Convert the site's simple markdown subset to HTML.
 * Text is HTML-escaped before inline transforms, so output is safe and
 * entities like & render correctly.
 */
function markdownToHtml(markdown) {
  const lines = escapeHtml(markdown).split('\n');
  let html = '';
  let inList = false;

  const closeList = () => {
    if (inList) {
      html += '</ul>\n';
      inList = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      closeList();
      continue;
    }
    if (line === '---') {
      closeList();
      html += '<hr>\n';
      continue;
    }
    if (line.startsWith('<')) {
      // Raw HTML line (e.g. injected markup) — pass through untouched.
      closeList();
      html += line + '\n';
      continue;
    }
    if (/^- (.+)$/.test(line)) {
      if (!inList) {
        html += '<ul class="styled-list">\n';
        inList = true;
      }
      html += `<li>${inlineMarkdown(line.replace(/^- (.+)$/, '$1'))}</li>\n`;
      continue;
    }
    closeList();
    html += `<p>${inlineMarkdown(line)}</p>\n`;
  }
  closeList();

  return html;
}

/**
 * Plain-text summary of a markdown body (for JSON-LD descriptions).
 */
function markdownToText(markdown) {
  return markdown
    .split('\n')
    .map((l) => l.trim().replace(/^- /, '').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/`/g, ''))
    .filter(Boolean)
    .join(' ');
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ---------------------------------------------------------------------------
// Content discovery
// ---------------------------------------------------------------------------

function loadContent(type, lang) {
  const dir = path.join(CONTENT_DIR, type, lang);
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing content directory: content/${type}/${lang}`);
  }

  const items = fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const parsed = parseFrontmatter(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { file: f, ...parsed };
    })
    .sort((a, b) =>
      (parseInt(a.frontmatter.order, 10) || 999) - (parseInt(b.frontmatter.order, 10) || 999));

  if (items.length === 0) {
    throw new Error(`No markdown files found in content/${type}/${lang}`);
  }
  return items;
}

function groupByCategory(items) {
  const grouped = [];
  const index = new Map();
  for (const item of items) {
    const category = item.frontmatter.category || 'Other';
    if (!index.has(category)) {
      index.set(category, []);
      grouped.push([category, index.get(category)]);
    }
    index.get(category).push(item);
  }
  return grouped;
}

// ---------------------------------------------------------------------------
// Renderers
// ---------------------------------------------------------------------------

function renderCategoryHeader(category) {
  return `      <div style="grid-column: 1 / -1; margin-top: 2rem; margin-bottom: 1rem;">
        <h2 class="text-mono" style="font-size: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">${escapeHtml(category)}</h2>
      </div>`;
}

function renderServiceCard(data) {
  const { frontmatter, content } = data;
  const parts = splitOnRule(content);
  const body = parts[0] || '';
  const footer = parts[1] || '';

  return `      <article class="card" id="${slugify(frontmatter.title)}">
        <div class="card-header">
          <p class="card-meta">${escapeHtml(frontmatter.meta || '')}</p>
          <h3 class="card-title">${escapeHtml(frontmatter.title || '')}</h3>
        </div>
        <div class="card-body">
          ${markdownToHtml(body)}
        </div>
        <div class="card-footer">
          ${markdownToHtml(footer)}
        </div>
      </article>`;
}

function renderTraineeCard(data, lang) {
  const { frontmatter, content } = data;
  const t = frontmatter;

  return `      <article class="card" id="${slugify(t.title)}">
        <div class="card-header">
          <h3 class="card-title">${escapeHtml(t.title || '')}</h3>
          <p class="card-meta">${escapeHtml(t.meta || '')}</p>
        </div>
        <div class="card-body">
          ${markdownToHtml(content)}
          <p><strong>${lang === 'es' ? 'Duración:' : 'Duration:'}</strong> ${escapeHtml(t.duration || '')}</p>
          <p><strong>${lang === 'es' ? 'Formato:' : 'Format:'}</strong> ${escapeHtml(t.format || '')}</p>
          <p><strong>${lang === 'es' ? 'Requisitos:' : 'Prerequisites:'}</strong> ${escapeHtml(t.prerequisites || '')}</p>
        </div>
        <div class="card-footer">
          <p class="text-muted text-upper" style="font-size: 0.75rem;"><strong>${lang === 'es' ? 'Resultado:' : 'Outcome:'}</strong> ${escapeHtml(t.outcome || '')}</p>
        </div>
      </article>`;
}

function renderTeamMemberCard(data) {
  const { frontmatter, content } = data;
  const sections = splitOnRule(content);

  const sectionsHtml = sections.map((section) => {
    const headingMatch = section.match(/^\*\*([^*]+)\*\*/);
    if (headingMatch) {
      const heading = headingMatch[1];
      const rest = section.substring(headingMatch[0].length).trim();
      return `          <div class="team-member-section">
            <h3 class="team-member-subtitle text-mono">${escapeHtml(heading)}</h3>
            ${markdownToHtml(rest)}
          </div>`;
    }
    return `          <p class="team-member-bio">${markdownToHtml(section)}</p>`;
  }).join('\n');

  const cvLink = frontmatter.cv_link
    ? `        <div class="team-member-footer">
          <a href="${escapeHtml(frontmatter.cv_link)}" class="team-member-link" target="_blank" rel="noopener noreferrer">${escapeHtml(frontmatter.cv_text || 'View More →')}</a>
        </div>\n`
    : '';

  return `      <article class="team-member" id="${slugify(frontmatter.name)}">
        <div class="team-member-header">
          <h2 class="team-member-name">${escapeHtml(frontmatter.name || '')}</h2>
          <p class="team-member-title text-mono">${escapeHtml(frontmatter.title || '')}</p>
        </div>
        <div class="team-member-content">
${sectionsHtml}
        </div>
${cvLink}      </article>`;
}

function renderHeroSection(data) {
  const { frontmatter } = data;
  return `    <section class="hero">
      <div class="container hero-content">
        <img src="${escapeHtml(frontmatter.logo || 'assets/logo.svg')}" alt="Phorma Scientific" class="hero-logo">
        <h1>${rich(frontmatter.heading || '')}</h1>
        <p class="hero-subheading">${rich(frontmatter.subheading || '')}</p>
        <a href="${escapeHtml(frontmatter.cta_link || '#')}" class="btn btn-primary">${rich(frontmatter.cta_text || '')}</a>
      </div>
    </section>`;
}

function renderTwoColumnSection(data) {
  const { frontmatter, content } = data;
  return `    <section class="section border-bottom">
      <div class="container">
        <div class="grid grid-2">
          <div>
            <h2 class="text-mono">${rich(frontmatter.title || '')}</h2>
            <p class="text-muted">${rich(frontmatter.subtitle || '')}</p>
          </div>
          <div>
            ${markdownToHtml(content)}
          </div>
        </div>
      </div>
    </section>`;
}

function renderFeaturedSection(data) {
  const { frontmatter, content } = data;
  return `    <section class="section" id="audit">
      <div class="container">
        <div class="highlight-box">
          <div class="grid grid-2">
            <div>
              <h3 class="text-mono mb-sm">${rich(frontmatter.title || '')}</h3>
              <p class="text-muted text-upper" style="font-size: 0.875rem; margin-bottom: 1rem;">${rich(frontmatter.meta || '')}</p>
            </div>
            <div>
              ${markdownToHtml(content)}
              <p style="margin-top: 1.5rem;">
                <a href="${escapeHtml(frontmatter.cta_link || 'contact.html')}" class="btn">${escapeHtml(frontmatter.cta_text || '')}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderHomeSection(data) {
  switch (data.frontmatter.type) {
    case 'hero': return renderHeroSection(data);
    case 'section': return renderTwoColumnSection(data);
    case 'featured': return renderFeaturedSection(data);
    default: return '';
  }
}

function renderMissionHero(data) {
  const { frontmatter } = data;
  return `    <section class="hero">
      <div class="container hero-content">
        <h1>${rich(frontmatter.title || '')}</h1>
        <p class="hero-subheading">${rich(frontmatter.subtitle || '')}</p>
      </div>
    </section>`;
}

function renderMissionIntro(data) {
  const { frontmatter } = data;
  return `    <section class="section border-bottom">
      <div class="container">
        <div class="text-center mb-lg">
          <h2 class="text-mono">${rich(frontmatter.title || '')}</h2>
          <p class="hero-subheading">${rich(frontmatter.subtitle || '')}</p>
        </div>
      </div>
    </section>`;
}

function renderMissionExample(data) {
  const { frontmatter, content } = data;
  return `      <div class="highlight-box mb-lg">
        <div class="grid grid-2">
          <div>
            <h3 class="text-mono mb-sm">${rich(frontmatter.title || '')}</h3>
            <p class="text-muted text-upper" style="font-size: 0.875rem;">${rich(frontmatter.subtitle || '')}</p>
          </div>
          <div>
            ${markdownToHtml(content)}
          </div>
        </div>
      </div>`;
}

function renderMissionCommitment(data) {
  const { frontmatter, content } = data;
  return `    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          <div>
            <h2 class="text-mono">${rich(frontmatter.title || '')}</h2>
            <p class="text-muted text-upper">${rich(frontmatter.subtitle || '')}</p>
          </div>
          <div>
            ${markdownToHtml(content)}
            <p class="mt-lg">
              <a href="${escapeHtml(frontmatter.cta_link || 'contact.html')}" class="btn btn-primary">${escapeHtml(frontmatter.cta_text || '')}</a>
            </p>
          </div>
        </div>
      </div>
    </section>`;
}

function renderMissionSection(data) {
  switch (data.frontmatter.type) {
    case 'hero': return renderMissionHero(data);
    case 'section': return renderTwoColumnSection(data);
    case 'intro': return renderMissionIntro(data);
    case 'example': return renderMissionExample(data);
    case 'commitment': return renderMissionCommitment(data);
    default: return '';
  }
}

// ---------------------------------------------------------------------------
// Page assembly
// ---------------------------------------------------------------------------

function renderPageContent(type, lang, group) {
  const items = loadContent(type, lang);

  if (type === 'home') {
    return items.map((d) => renderHomeSection(d)).filter(Boolean).join('\n');
  }

  if (type === 'mission') {
    // Wrap consecutive 'example' sections in their own section container.
    let html = '';
    let inExamples = false;
    for (const data of items) {
      const isExample = data.frontmatter.type === 'example';
      if (isExample && !inExamples) {
        html += '    <section class="section border-bottom">\n      <div class="container">\n';
        inExamples = true;
      } else if (!isExample && inExamples) {
        html += '      </div>\n    </section>\n\n';
        inExamples = false;
      }
      html += renderMissionSection(data) + '\n';
    }
    if (inExamples) html += '      </div>\n    </section>\n\n';
    return html;
  }

  if (type === 'team') {
    return items.map((d) => renderTeamMemberCard(d)).filter(Boolean).join('\n');
  }

  // services / trainees — optionally grouped by category
  if (group) {
    return groupByCategory(items).map(([category, groupItems]) => {
      const render = type === 'services'
        ? (d) => renderServiceCard(d)
        : (d) => renderTraineeCard(d, lang);
      return `${renderCategoryHeader(category)}\n${groupItems.map(render).filter(Boolean).join('\n')}`;
    }).join('\n');
  }

  const render = type === 'services'
    ? (d) => renderServiceCard(d)
    : (d) => renderTraineeCard(d, lang);
  return items.map(render).filter(Boolean).join('\n');
}

// ---------------------------------------------------------------------------
// JSON-LD structured data (for agents and crawlers)
// ---------------------------------------------------------------------------

const LABELS = {
  en: { services: 'Services', trainees: 'Traineeships', team: 'Team' },
  es: { services: 'Servicios', trainees: 'Programas de Formación', team: 'Equipo' },
};

function buildJsonLd(page) {
  const items = loadContent(page.type, page.lang);
  const pageName = LABELS[page.lang][page.type] || page.type;
  const pageUrl = `${BASE_URL}/${page.file.replace(/\.html$/, '')}`;

  const listItems = items.map((data, i) => {
    const fm = data.frontmatter;
    const body = data.content.split(/^\s*---\s*$/m)[0] || data.content;
    const description = markdownToText(body);
    const anchor = slugify(fm.title || fm.name || '');

    if (page.type === 'team') {
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Person',
          name: fm.name || '',
          jobTitle: fm.title || '',
          description,
          url: fm.cv_link || `${pageUrl}#${anchor}`,
        },
      };
    }

    if (page.type === 'trainees') {
      return {
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Course',
          name: fm.title || '',
          description,
          url: `${pageUrl}#${anchor}`,
          provider: {
            '@type': 'Organization',
            name: 'Phorma Scientific',
            url: BASE_URL,
          },
        },
      };
    }

    // services
    return {
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: fm.title || '',
        description,
        url: `${pageUrl}#${anchor}`,
        serviceType: fm.category || undefined,
        provider: {
          '@type': 'Organization',
          name: 'Phorma Scientific',
          url: BASE_URL,
        },
      },
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${pageName} — Phorma Scientific`,
    url: pageUrl,
    numberOfItems: listItems.length,
    itemListElement: listItems,
  };
}

// ---------------------------------------------------------------------------
// Injection
// ---------------------------------------------------------------------------

function injectIntoPage(page, contentHtml, jsonLdHtml) {
  const filePath = path.join(ROOT, page.file);
  let html = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const contentBlock = new RegExp(`${CONTENT_START}[\\s\\S]*?${CONTENT_END}`);
  if (contentBlock.test(html)) {
    html = html.replace(contentBlock, `${CONTENT_START}\n${contentHtml}\n      ${CONTENT_END}`);
    changed = true;
  } else {
    throw new Error(`${page.file}: missing ${CONTENT_START} / ${CONTENT_END} markers`);
  }

  if (jsonLdHtml) {
    const jsonLdBlock = new RegExp(`${JSONLD_START}[\\s\\S]*?${JSONLD_END}`);
    if (jsonLdBlock.test(html)) {
      html = html.replace(jsonLdBlock, `${JSONLD_START}\n${jsonLdHtml}\n  ${JSONLD_END}`);
      changed = true;
    } else {
      throw new Error(`${page.file}: missing ${JSONLD_START} / ${JSONLD_END} markers`);
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
  return changed;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('Building static content into pages...\n');

  for (const page of PAGES) {
    const contentHtml = renderPageContent(page.type, page.lang, page.group);
    const jsonLdHtml = page.jsonld
      ? '  <script type="application/ld+json">\n'
        // Escape '<' inside JSON to keep the inline <script> block intact
        + JSON.stringify(buildJsonLd(page), null, 2).replace(/</g, '\\u003c').replace(/^/gm, '  ')
        + '\n  </script>'
      : null;

    injectIntoPage(page, contentHtml, jsonLdHtml);

    const sections = contentHtml.match(/<(article|section)[\s>]/g);
    const count = sections ? sections.length : 0;
    const extras = page.jsonld ? ' + JSON-LD' : '';
    console.log(`  ✓ ${page.file.padEnd(20)} (${count} elements${extras})`);
  }

  console.log('\nDone. Content is now fully static — no runtime loading required.');
}

main();
