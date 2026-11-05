# Recruiter tells, with the specimens that earned them

Every entry below was flagged on a real résumé in this repository, on 2026-11-05, by the owner or by
a recruiter read. Severity: **hard** costs the screen; **tell** reads as generated or templated;
**note** is worth fixing when touched.

## Scan-pass findings (seven seconds)

| Severity | Tell | Specimen | Fix |
|---|---|---|---|
| hard | Date contradicts body | "June 2026 to present" over "First commit December 2022" | Date from the first commit |
| hard | Top entry carries no outcome | Five bullets on what was built, nothing on who uses it | "A platform that has run three fashion shows" |
| hard | Shell entry | "Applied Generics / Founder", one line, no client, no project | Delete, or name a client |
| hard | Headline versus recent roles | "Principal Software Engineer" over a TPM year and a founder role | Owner's call; recruiter will ask |
| tell | Tenure pattern | Five employers 2020 to 2026, one of them three months | Owner's call; some are deliberate |
| tell | Weighting inverted | Five-year role with three bullets, five-month role with five | Rebalance |
| note | Handle does not match the name | `github.com/StavroMueller` under "Julien Clifford" | Owner's call |

## Extraction findings

| Severity | Tell | Specimen | Fix |
|---|---|---|---|
| hard | Letter-spaced capitals | `E D U C AT I O N`, `D ATA`, `P L AT F O R M` from 0.14em tracking | Tracking 0.06em; re-extract |
| hard | Type 3 fonts | Variable WOFF2 embedded by Chrome | Static TTFs, CID TrueType |

## Writing findings

| Severity | Tell | Specimen | Fix |
|---|---|---|---|
| tell | Pronoun "it" for the thing | "Three shows have run on it." | "A platform that has run three fashion shows" |
| tell | Leaning on "the" | "Set the pricing, wrote the financial plan, and designed the brand and the design system the product ships with." (five) | "Set pricing, wrote a financial plan, and designed the brand and design system." |
| tell | "Built the X" opener | "Built the multi-tenant permission model that..." | "Built a multi-tenant permission model that..." |
| tell | Same fact twice | Client list in the summary and in the role header; "managed N engineers" in summary and every role; skills row repeating a bullet | Say it once |
| tell | Uniform rhythm | Every bullet 20 to 40 words, four per role | Vary; merge; cut |
| tell | Tech list stacked into prose | A 40-word bullet naming seven technologies also in the skills table | Keep the decision, move the nouns |
| tell | Jargon padding | "Made AI-assisted development the documented standard: ... agent skill definitions, and verification gates" | "Wrote engineering conventions and skill files that AI coding agents work from, plus checks that run before a change ships" |
| tell | Flourish | "Built the QA function from nothing" | "Set up QA:" |
| tell | Round unverifiable number | "millions of players" | Ask for the figure; keep only if the owner states it |
| tell | Stub sentence for punch | "Coverage went from zero to 85 percent." as its own sentence | Fold into the sentence before |
| tell | Antithesis | "Ran the business, not only the code" | "Set the pricing and wrote the financial plan" |
| tell | Unfalsifiable self-characterization | "the engineer a small team leans on for the hard calls" | A checkable fact |
| tell | Vague grandiosity | "high-impact features", "business-critical code" | Name the thing or cut |

## Stock phrases recruiters name first

results-driven, proven track record, spearheaded, leveraged, drove innovation, cross-functional
alignment, passionate, dynamic, synergy, responsible for, improved operational efficiency,
"[Insert accomplishment here]". The full house list is in
`.agents/skills/seo-audit/references/ai-writing-detection.md`.

## What a recruiter remembers

One human line per page. Specimen that worked: "plus seven days at sea on a hydrographic survey."
Name these in the report so a rewrite keeps them.
