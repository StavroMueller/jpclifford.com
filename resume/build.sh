#!/bin/sh
# Renders resume/resume.html to docs/Julien-Clifford-Resume.pdf with the installed Chrome. No dependencies.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT="../docs/Julien-Clifford-Resume.pdf"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="$OUT" "file://$PWD/resume.html" 2>/dev/null
pdftotext "$OUT" - | node ../tools/copy-check/check.mjs
pdfinfo "$OUT" | grep Pages
