# jpclifford.com

Portfolio site for Julien Clifford, plus the résumé source and the writing and design rules both follow.

- `docs/` is the site. GitHub Pages serves it from `main`. Plain HTML, CSS, and a little JavaScript, no build step.
- `resume/` holds the résumé source. `sh resume/build.sh` renders `docs/Julien-Clifford-Resume.pdf` with the installed Chrome and runs the copy checker.
- `DESIGN.md` and `PRODUCT.md` are the design and copy authority. `CLAUDE.md` has the working rules.

## Local preview

```sh
cd docs && python3 -m http.server 8000
```

Then open http://localhost:8000. Push to `main` and Pages redeploys in about a minute.
