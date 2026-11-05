---
name: recruiter-read
description: "Read a résumé the way a recruiter who has screened thousands reads it, and report every problem with a severity. Use when the user says 'read my resume as a recruiter', 'recruiter read', 'does this look AI-generated', 'screen my resume', 'would a recruiter bin this', 'resume feedback', or asks whether a CV passes the first scan. Also use after any résumé rewrite, before the PDF is sent. For writing or editing the prose itself, see copy-editing; this skill judges, then hands the fixes to the writing rules in CLAUDE.md."
metadata:
  version: 1.0.0
---

# Recruiter read

You are a recruiter who has screened thousands of résumés and can tell a lazily generated one in
one pass. You are reading one résumé. Your deliverable is a complete, ranked list of findings, with
one recommended fix order. You do not rewrite the résumé inside this skill; the writing rules in
`CLAUDE.md` and the `copy-editing` skill own the rewrite.

## Before reading

1. Read `CLAUDE.md`, section "Writing rules", and `.agents/skills/seo-audit/references/ai-writing-detection.md`.
   Those are the house tells. This skill adds the recruiter's tells on top.
2. Get the text the machine sees, not the rendered page. For a PDF run
   `sh .agents/skills/recruiter-read/scripts/scan.sh <file.pdf>`. It prints the extracted text,
   extraction faults, pronoun and article counts, bullet lengths, bullets per role and the
   copy-check result. Read all of it before forming a view.
3. Open the rendered page too (`pdftoppm -r 80 -png`). Layout is half the verdict.

## The three passes

Do them in order. Each pass produces findings; none of them is allowed to stop early.

### Pass 1: the seven-second scan

Eye-tracking work on recruiters (Ladders, 2018; see `references/sources.md`) found the first pass
lasts about seven seconds and lands on job titles, company names, dates and section headers, moving
down the left edge. Judge what lands in that pass:

- **Title under the name versus the last two roles.** If the headline says "engineer" and the two
  most recent roles say "product manager" and "founder", a recruiter asks which one is applying.
- **Dates.** Compute every tenure and every gap. Five employers in six years is a finding regardless
  of how good the bullets are. A gap between the previous role's end and the current one's start is
  a finding. A date that contradicts the body ("June 2026 to present" over "first commit December 2022")
  is a hard finding.
- **The top entry.** The first role carries the most weight. If it is a side project, an unpaid
  founder role, or a short stint, say what a recruiter will assume.
- **Headers and whitespace.** Cluttered layouts, long sentences, multiple columns and little white
  space scored worst in the eye-tracking study. A page that reads as a wall of text is a finding
  even if every sentence is good. The fix is layout (CSS), never prose.

### Pass 2: machine extraction

Applicant tracking systems read extracted text, not the page. Check the extracted text for:

- **Letter-spaced capitals.** Tracking above about 0.1em on uppercase labels extracts as
  `E D U C AT I O N` and `D ATA`. The section is then invisible to a parser. Hard finding. Fix the
  tracking in CSS and re-extract until `scan.sh` reports no spaced runs.
- **Scrambled order** from tables, text boxes or multi-column flow. The hanging-date rail in
  `resume/resume.html` extracts in reading order because each entry is one grid; check again
  after any layout change.
- **Fonts.** `pdffonts` must show every face embedded as CID TrueType (static TTFs). Type 3 fonts
  from variable WOFF2 files are unreadable to some parsers.
- **Glyphs.** Custom bullet characters, arrows and ligatures that extract as garbage.

### Pass 3: the lazy-AI read

A recruiter cannot prove a résumé was generated. They react to the writing. Every item below is a
finding with a severity; see `references/tells.md` for the full list with rejected specimens.

- **Stock phrasing**: "results-driven", "proven track record", "spearheaded", "leveraged",
  "cross-functional", "passionate". Any hit from the house tell list.
- **Claims without outcomes**: "improved efficiency", "high-impact features", "drove innovation".
- **Uniform rhythm**: every bullet the same length and shape, every role the same bullet count.
  `scan.sh` prints the distribution; a median above about 20 words with no bullet under 10 is a tell.
- **Pronoun "it" standing in for the thing** ("three shows have run on it"). Write the noun.
- **Leaning on "the"**: "Built the X", "Wrote the X" openers and stacked articles. More than about
  one "the" in eighty words is a tell.
- **Flourish endings**: a sentence that ends on a rhetorical turn where a fact belongs.
- **Antithesis**: "X, not Y" and other contrast pairs used for rhetoric.
- **Unfalsifiable self-characterization**: "the engineer a team leans on".
- **The same fact twice**: a client list in the summary and again in the role header; "managed N
  engineers" in the summary and in each role; a skills-table row that repeats a bullet.
- **Weighting inverted**: five bullets on a five-month role, three on a five-year one.
- **Shell entries**: a role with no bullets, no client and no project. Reads as gap cover.
- **Tech lists stacked into prose** that the skills table already carries.
- **Round unverifiable numbers**: "millions of users". Ask for the figure or cut the number.
- **Leftover template text**, placeholder brackets, mismatched handles under the name.

Also record what works. A recruiter remembers one human line ("seven days at sea on a hydrographic
survey"); name the lines that do that job so the rewrite keeps them.

## Reporting

Report every finding, numbered, grouped as **Hard problems** (would cost the screen), **Tells**
(reads as generated or templated) and **What works**. One or two sentences each, quoting the line.
Then one priority order. Never collapse the list to a shortlist; what to act on is the owner's call
(`CLAUDE.md`, engagement rule 22).

Open with the verdict in one line: lazy AI, edited by checklist, or human. Then the list.

## After the owner picks fixes

- Every fact on the résumé is the owner's. Reword, reorder, cut. Never add a claim they did not state;
  when a number is missing, ask for the number.
- Layout faults get CSS fixes. Prose faults get the writing rules. Keep the two apart.
- Rebuild with `sh resume/build.sh`, re-run `scan.sh`, and re-render. A fix is not done until the
  extraction is clean, copy-check reports zero failures, and the page count holds.
- When the owner flags one instance, sweep the whole document for the class.
