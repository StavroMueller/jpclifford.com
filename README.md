# jpclifford.com

Portfolio site for Julien Clifford. Software, fashion photography, and tall ships.

Plain HTML, CSS, and a little JavaScript. No build step. Hosted on GitHub Pages from the `main` branch root, with `CNAME` pointing the custom domain at it.

## Editing

- `index.html` holds all the copy. Sections are marked with banner comments.
- `style.css` is the design system: ink, newsprint, one gold rule, no rounded corners. Dark mode follows the system preference.
- `main.js` handles the mobile nav, pulls public repos live from the GitHub API, and builds the vCard.

Push to `main` and Pages redeploys in about a minute.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.
