#!/usr/bin/env node
// Scans prose for the tells recorded in CLAUDE.md "Writing rules" and
// .agents/skills/seo-audit/references/ai-writing-detection.md
// Usage: node tools/copy-check/check.mjs <file...>   |   cat x.md | node tools/copy-check/check.mjs
import fs from 'fs';

const WORDS = {
  'overused verb': 'delve leverage utilise utilize facilitate foster bolster underscore unveil streamline endeavour ascertain elucidate'.split(' '),
  'overused adjective': 'robust comprehensive pivotal crucial vital transformative cutting-edge groundbreaking innovative seamless intricate nuanced multifaceted holistic'.split(' '),
  'filler': 'absolutely actually basically certainly clearly definitely essentially extremely fundamentally incredibly interestingly naturally obviously quite really significantly surely truly ultimately undoubtedly very'.split(' '),
  'empowerment verb': 'empowering unlocking enabling transforming elevating revolutionizing supercharge'.split(' '),
};
const PHRASES = {
  'antithesis': ['not just', 'not only', 'instead of', 'rather than'],
  'academic tell': ['shed light on', 'pave the way', 'a myriad of', 'a plethora of', 'pertaining to', 'prior to', 'in light of', 'with respect to', 'in terms of', 'the fact that'],
  'scene-setting opener': ["in today's", 'in an era of', 'in the realm of', 'in the landscape of', 'in the ever-evolving'],
  'pose': ['in the room', 'end to end', 'high-impact', 'best-in-class', 'world-class', 'so you can focus on what matters'],
  'transition': ['furthermore', 'moreover', 'that being said', 'at its core', 'to put it simply', 'it is worth noting'],
};

// Quoted spans are treated as specimens, not prose: a document that documents
// banned phrasing must be able to name it. Same for code spans and URLs.
const strip = (t) => t
  .replace(/<(style|script)[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/`[^`]*`/g, ' ')
  .replace(/"[^"]{0,300}"/g, ' ')
  .replace(/https?:\/\/\S+/g, ' ');

function check(name, raw) {
  const text = strip(raw);
  const low = text.toLowerCase();
  const findings = [];
  const review = [];

  for (const [kind, list] of Object.entries(WORDS))
    for (const w of list)
      if (new RegExp(`\\b${w}\\b`, 'i').test(low)) findings.push([kind, w]);
  for (const [kind, list] of Object.entries(PHRASES))
    for (const p of list)
      if (low.includes(p)) findings.push([kind, p]);

  if (/—/.test(text)) findings.push(['em dash', '—']);
  if (/\s--\s/.test(text)) findings.push(['double hyphen', '--']);

  // structural checks
  const sentences = text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
  const lens = sentences.map(s => s.split(/\s+/).length).sort((a, b) => a - b);

  // a short sentence that follows a long one, inside the same block, is the stub-for-punch habit
  for (let i = 1; i < sentences.length; i++) {
    const prev = sentences[i - 1].split(/\s+/).length;
    const cur = sentences[i].split(/\s+/).length;
    if (cur <= 8 && prev >= 14) review.push(['possible stub, advancing or decorating?', sentences[i]]);
  }

  console.log(`\n${name}`);
  if (!findings.length && !review.length) console.log('  clean');
  for (const [kind, hit] of findings) console.log(`  FAIL   [${kind}] ${hit}`);
  for (const [kind, hit] of review) console.log(`  review [${kind}] ${hit}`);
  if (lens.length > 2) {
    const median = lens[Math.floor(lens.length / 2)];
    const flat = lens.length > 5 && lens[lens.length - 1] - lens[0] < 8;
    console.log(`  sentence lengths: min ${lens[0]}, median ${median}, max ${lens[lens.length - 1]}${flat ? '  <-- too uniform, vary them' : ''}`);
  }
  return findings.length;
}

const files = process.argv.slice(2);
let total = 0;
if (files.length) for (const f of files) total += check(f, fs.readFileSync(f, 'utf8'));
else total += check('(stdin)', fs.readFileSync(0, 'utf8'));
console.log(`\n${total} failure(s). Review lines are judgment calls, not errors.`);
process.exit(total ? 1 : 0);
