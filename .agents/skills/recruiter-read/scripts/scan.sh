#!/bin/sh
# Prints what a parser sees in a résumé PDF, plus the counts a recruiter read needs.
# Usage: sh scan.sh <file.pdf>   (needs pdftotext, pdffonts, node)
set -e
[ -f "$1" ] || { echo "usage: scan.sh <file.pdf>" >&2; exit 2; }
PDF="$1"
ROOT="$(cd "$(dirname "$0")/../../../.." && pwd)"
TXT="$(mktemp)"
pdftotext "$PDF" "$TXT"

echo "== extracted text =="
cat "$TXT"

echo; echo "== extraction faults =="
if grep -nE '\b[A-Za-z] [A-Za-z] [A-Za-z]\b' "$TXT"; then
  echo "FAIL: letter-spaced runs above; lower letter-spacing on uppercase labels"
else
  echo "no letter-spaced runs"
fi
echo "fonts:"; pdffonts "$PDF" | awk 'NR>2 {print "  "$1"  "$2" "$3"  emb="$5}'
if pdffonts "$PDF" | awk 'NR>2' | grep -q "Type 3"; then echo "FAIL: Type 3 font; use static TTFs"; fi

echo; echo "== counts =="
WORDS=$(wc -w < "$TXT" | tr -d ' ')
THE=$(grep -ow '[Tt]he' "$TXT" | wc -l | tr -d ' ')
IT=$(grep -owE '\b([Ii]t|[Ii]ts)\b' "$TXT" | wc -l | tr -d ' ')
echo "words: $WORDS"
echo "the: $THE (tell above about 1 in 80; that is $((WORDS/80)) here)"
echo "it/its: $IT"
[ "$IT" -gt 0 ] && grep -nwE 'it|its' "$TXT" | sed 's/^/  /'

echo; echo "== bullets =="
tr '\n' ' ' < "$TXT" | sed 's/– /\n– /g' | grep '^– ' | sed 's/\.  *[A-Z].*//' | awk '{print NF}' | sort -n | awk '
  {a[NR]=$1} END {
    if (NR==0) {print "no bullets found (expects an en dash bullet)"; exit}
    print "count: "NR", shortest: "a[1]", median: "a[int((NR+1)/2)]", longest: "a[NR]
    print "(a median above about 20 with nothing under 10 reads as uniform)"
  }'

echo; echo "== copy-check =="
node "$ROOT/tools/copy-check/check.mjs" < "$TXT" || true
rm -f "$TXT"
