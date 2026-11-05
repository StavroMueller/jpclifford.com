# Sources

Read 2026-11-05. Most are career-industry blogs with a product to sell; the eye-tracking study is the
one piece of primary research and its method has been questioned. Use the direction, not the numbers.

## How recruiters react to generated résumés

- Rezi, "How to Tell if a Resume Is AI-Generated": https://www.rezi.ai/posts/how-to-tell-if-a-resume-is-ai-generated
- Michael Page, "How to identify resumes created by AI or ChatGPT": https://www.michaelpage.com.au/recruitment-expertise/employer-insights/how-identify-resumes-created-ai-or-chatgpt
- Enhancv, "Signs of an AI-generated resume": https://enhancv.com/blog/signs-of-ai-generated-resume/
- HRLens, "Can recruiters detect ChatGPT-written resumes": https://www.hrlens.io/articles/can-recruiters-detect-chatgpt-written-resumes
- Forbes Coaches Council, "How recruiters can tell you used AI on your resume": https://www.forbes.com/councils/forbescoachescouncil/2025/08/07/how-recruiters-can-tell-you-used-ai-on-your-resume-and-why-it-matters/
- Augsburg University careers, "Can recruiters tell if you've used AI": https://careers.augsburg.edu/resources/can-recruiters-tell-if-youve-used-ai-to-write-your-resume/

Consensus: recruiters cannot prove authorship and mostly do not care about it. They react to stock
phrasing, claims without outcomes, identical rhythm line to line, leftover template text, and claims
the candidate cannot back up in interview. Detector tools are unreliable both ways.

## The first scan

- Ladders eye-tracking study, 2018 (PDF): https://csuglobal.edu/sites/default/files/blog-files/theladders-eyetracking-studyc2.pdf
- HR Dive summary: https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/
- Hiration, cross-study review of scan times: https://www.hiration.com/blog/how-long-recruiters-spend-on-resume/

Findings: about 7.4 seconds on the first keep-or-toss pass, gaze on job titles, dates and headers,
moving down the left edge in an E or F pattern. Cluttered layouts, long sentences, multiple columns and
little white space scored worst. Caveats: the method is thinly described, self-reported times range
from 8 seconds to 15 minutes, and the heat maps circulating online are often mouse tracking.

## Machine extraction

- SimeonOnSecurity, "Layout rules that survive ATS parsing": https://simeononsecurity.com/resume-optimization-course/resume-formatting/
- RecruitBPM, "Resume columns and ATS compatibility": https://recruitbpm.com/?p=20244
- ATS Verification, "10 most common ATS parsing failures": https://atsverification.com/blog/10-most-common-ats-parsing-failures/
- JobShinobi, "PDF parsing problems": https://jobshinobi.com/blog/resume-scanner-for-pdf-parsing-problems

Findings: tables, text boxes and multi-column flow scramble extraction order; image-only PDFs extract
nothing; custom bullets, arrows and ligatures get stripped. None of these sources covers tracking;
the letter-spacing fault in this repository was observed directly with `pdftotext` (0.14em tracking
extracted `E D U C AT I O N`; 0.06em extracted whole words).

## Red flags beyond the writing

- Robert Half, "Resume red flags to watch for": https://www.roberthalf.com/blog/evaluating-job-candidates/resume-red-flags-to-watch-for
- Jobera, "Red flags in a resume": https://jobera.com/red-flags-in-resume/
- The Interview Guys, "12 innocent mistakes": https://blog.theinterviewguys.com/?p=1852

Findings: unexplained gaps, hopping without progression, "responsible for" bullets with no outcome,
typos. Recruiters weigh patterns more than single flags.
