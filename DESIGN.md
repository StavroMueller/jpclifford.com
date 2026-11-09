---
name: Atelier Actara
description: Editorial broadsheet design system for the fashion-show management platform.
colors:
  ink: "#000000"
  charcoal: "#3A3631"
  stone: "#57524A"
  silver: "#625C53"
  newsprint: "#ECEBE7"
  parchment: "#D9D7D2"
  white: "#FAFAF7"
  rule: "#BFBDB8"
  faint-rule: "#D5D3CE"
  rule-strong: "#7A7368"
  accent: "#846420"
  error: "#9E3B2C"
  success: "#46552B"
typography:
  display:
    fontFamily: '"Newsreader", "Source Serif 4", Georgia, serif'
    fontSize: "3.5rem"
    fontWeight: 500
    lineHeight: 1.05
  headline:
    fontFamily: '"Newsreader", "Source Serif 4", Georgia, serif'
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1.15
  title:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "1.2rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "0.14em"
  control:
    fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif'
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  none: "0"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "22px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
    padding: "9px 22px"
    typography: "{typography.control}"
  button-primary-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.newsprint}"
  button-outlined:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderColor: "{colors.rule}"
    rounded: "{rounded.none}"
    padding: "9px 22px"
    typography: "{typography.control}"
  button-outlined-hover:
    borderColor: "{colors.ink}"
    textColor: "{colors.ink}"
  tag:
    rounded: "{rounded.none}"
    typography: "{typography.control}"
  card:
    backgroundColor: "{colors.white}"
    borderColor: "{colors.faint-rule}"
    rounded: "{rounded.none}"
    padding: "16px, 20px from the sm breakpoint"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    borderColor: "{colors.rule-strong}"
    rounded: "{rounded.none}"
    padding: "16px 14px"
---

# Design System: Atelier Actara

## 1. Overview

**Creative North Star: "The Broadsheet Masthead"**

Atelier Actara is built like the front page of a fashion broadsheet, with black ink on newsprint gray. Newsreader sets the masthead lines, Source Serif 4 carries every heading below them and all of the reading copy, and IBM Plex Sans does the operational work of labels, controls and navigation chrome. Dividers are hairline rules, and every corner on every surface is square.

The people using it are producers working the day of a show, agency bookers planning weeks ahead, and talent checking a schedule between jobs, often all on the same afternoon. Restraint is the governing instinct for that reason: one clear action per context, density only where the work needs it (lineups, guest lists, tables), and warmth that comes from the paper, the serif and the photography. Gold (#846420) is the one accent, and it is rationed to three jobs.

The system rejects the generic SaaS dashboard (metric-card walls, kanban boards, startup gloss), the social feed (likes, engagement counters) and the event-ticketing template. It should read as a different class of object from Magnetiq, the main competitor.

**Key characteristics:**

- Black ink on newsprint gray, with every other gray pulled toward the same warm hue.
- Three faces with fixed jobs: Newsreader for h1 and h2, Source Serif 4 for everything else a person reads, IBM Plex Sans for labels and controls.
- Flat resting surfaces: depth comes from hairline rules and one step of tonal lift.
- Gold only as a focus ring, a live indicator or the page's one primary marker.
- Editorial motion: short eased reveals, staggered list fades, clip-path wipes.

## 2. Colors

A paper-and-ink palette: a warm bright ground, true black for text and primary action, a warm gray ramp for secondary text and structure, and one muted gold. Every value lives in `frontend/app/palette.ts`, and the contrast figures below are WCAG 2.2 ratios computed with the formula `palette.contrast.test.ts` uses.

### Ink and paper

- **Ink** (#000000): headlines, body text, primary buttons and the sidebar ground, at 17.60:1 on newsprint.
- **Newsprint** (#ECEBE7): the page background every screen is printed on, a warm newsprint gray.
- **White** (#FAFAF7): card and panel surfaces, one step brighter than newsprint, so a container lifts off the page without a shadow.
- **Parchment** (#D9D7D2): hover and selected fills on rows, list items and menu items, and the sidebar's resting text on ink (14.60:1).

### Warm grays

- **Charcoal** (#3A3631): the hover fill of a contained button and long-form secondary copy, at 10.05:1 on newsprint.
- **Stone** (#57524A): secondary text and every uppercase label. 6.49:1 on newsprint, 5.39:1 on parchment, 7.41:1 on white.
- **Silver** (#625C53): captions and the quietest real text. 5.54:1 on newsprint and 4.60:1 on parchment. Nothing lighter than silver may carry text.

### Rules

- **Rule** (#BFBDB8): structural dividers and outlined-button borders.
- **Faint Rule** (#D5D3CE): card borders and table cell separators.
- **Rule Strong** (#7A7368): the only rule that clears 3:1 against the page (3.93:1 on newsprint, 4.48:1 on white), so it is the one used for interactive boundaries such as resting input outlines.

### Accent

- **Gold** (#846420): 4.60:1 on newsprint, so it can carry small text on paper. That margin over the 4.5:1 floor is the hard limit on the page colour: a ground darker than #EAE9E5 fails every gold label, so a darker page needs a darker gold first. On ink it measures 3.82:1, which clears the 3:1 floor for non-text elements. The notification badge on the sidebar stays gold on that basis.

### Semantic

- **Error** (#9E3B2C) is the runway ramp's brick and marks failures and validation copy at 5.65:1 on newsprint; destructive buttons take the ramp's oxblood (#7A1E24). **Success** (#46552B) is the ramp's moss and carries confirmed states at 6.78:1 on newsprint. Pending states take burnt orange (#C0661C) and open states take plum (#6A2C4F), so every semantic colour is a hue the runway ramp already owns.

### Data encodings

- **`statusColors`** and **`typeColors`** are categorical encodings of an entity's status and a participant's type. They are separate from the accent and reach the screen through `StatusTag`, `TypeTag` and the calendar and schedule series. Each entry pairs a quiet fill, a saturated border and a dark text color. The `typeColors` border values fail 4.5:1 as a text color on newsprint, so a border is the only place they appear.
- **`runwayRamp`** is the data-visualisation ramp for walk paths and seating zones: oxblood, brick, terracotta, burnt orange, umber, olive, moss and plum. Every hue is warm and clears 3:1 on white and on newsprint.

### Named Rules

**The Rationed Gold Rule.** Gold appears in exactly three roles: the focus ring, a live indicator (unread and notification counts, unread dots, progress bars, the route progress bar, the active-status pulse square, today's call sheet) and the one primary `SectionLabel` per page. Gold never fills a surface, never tints a hover or a selection, and never sits behind text outside a count badge. A chip that needs attention uses ink text on parchment beside a 5px gold square.

**The Warm-Neutral Rule.** Every gray in the system leans toward the paper's hue. A cool or blue gray breaks the paper-and-ink illusion at once.

**The No-Cream Rule.** The page is newsprint gray, and no surface is ever cream, beige, sand, ivory or bone. Warmth comes from the serif, the photography and the one gold; a neutral leans toward the gold's hue only at the faint chroma newsprint carries. A token, a class or a variable is never named cream, sand, ivory or beige.

## 3. Typography

**Display face:** Newsreader, weights 400 and 500, roman and italic.
**Text face:** Source Serif 4, weights 400 to 600, roman and italic.
**Label face:** IBM Plex Sans, weights 400 to 600.

All three are self-hosted as woff2 files, latin and latin-ext subsets, under `frontend/public/fonts` for the app and `landing/fonts` for the landing site. The app declares them in `frontend/app/app.css`, and the constants `displayFont`, `bodyFont` and `labelFont` in `palette.ts` are the only way code names a face. `font-synthesis: none` is set on the page, so a weight outside the loaded range renders at the nearest loaded weight and the browser never fakes a bold or an oblique.

### Hierarchy

- **Display / h1** (Newsreader 500, 3.5rem, line height 1.05): show names and page titles.
- **Headline / h2** (Newsreader 500, 2.25rem, 1.15): the major divisions of a page.
- **h3 to h6** (Source Serif 4 600, from 1.5rem down to 0.95rem): sub-section heads, card titles and the heads of sub-blocks inside a department.
- **Standfirst / subtitle1** (Source Serif 4 italic, 1.1rem, 1.6, stone): the dateline or summary under a headline.
- **Body** (Source Serif 4 400, 1rem, 1.75): all reading copy, capped at 65 to 75 characters a line outside tables.
- **Label / overline** (IBM Plex Sans 500, 0.6875rem, uppercase, 0.14em, stone): department markers, table headers, field labels, metadata and count labels.
- **Control / button** (IBM Plex Sans 600, 0.75rem, uppercase, 0.06em): buttons, chips, tags and tabs.
- **Caption** (IBM Plex Sans 400, 0.75rem, silver): timestamps and fine print.

Newsreader appears at h1 and h2 and nowhere smaller. A style that asks for the display face below 1.9rem uses Source Serif 4 at 600 instead, with two named exceptions: the sidebar wordmark and the guest's name in the door toast, both set in Newsreader at 1.5rem because each is a single short line read from arm's length. Code takes a face from a theme variant or one of the three constants, never from a font-family string.

### The label rule

`SectionLabel` is the only uppercase department marker: 11px IBM Plex Sans at 500, 0.14em tracking, stone, over a 2px ink rule. A block gets a marker only when it is a department, a section a person scans the page for, such as Cast, Guests, Call sheet, Lineup, Looks or Credits. A sub-block inside a department gets an h4 or h5 head and space, with no marker above it. Each page has at most one `primary` marker, which turns the label and its rule gold; on the home page that marker is Call sheet.

Label copy is written in sentence case in source. The overline and button styles uppercase it on screen, so the DOM text reads as ordinary words to a screen reader and a text search.

The system uses two tracking values and no others: 0.14em for markers, overlines and table headers, and 0.06em for buttons, chips and tags. Both are defined once in `theme.ts` as `tracking.marker` and `tracking.control`, and every other variant sets letter spacing to 0.

## 4. Elevation

Resting surfaces are flat. Depth comes from hairline rules, from white cards on the newsprint page, and from the black sidebar against the paper. MUI elevation is disabled across the theme, and buttons set `disableElevation`.

Shadow marks an element that floats above the page, and only through the tokens in `palette.ts`:

- **`shadow.menu`** (`0 4px 20px rgba(0,0,0,0.08)`): menus and selects, paired with a 1px rule border.
- **`shadow.md`** (`0 2px 8px rgba(0,0,0,0.15)`): a control floating over the runway canvas, such as the mobile bottom-sheet trigger.
- **`shadow.xl`** (`0 8px 32px rgba(0,0,0,0.12)`): the notification panel that opens from the sidebar.

An inset shadow used as a row state bar, such as the conflict bar on an import row, is a rule drawn inside the row and counts as flat.

### Named Rules

**The Flat-Page Rule.** Cards, panels, tables and rows take a hairline border or a tonal fill and never a drop shadow, at rest or on hover.

**The Rule-Not-Box Rule.** Separate content with a single hairline rule. A bordered box nested inside a card drops its border, and a card never sits inside a card.

## 5. Components

### Buttons

- **Shape:** square, padding 9px 22px, the control style for the label. Touch targets grow to 44 by 44 on coarse pointers.
- **Contained:** ink fill and newsprint text. Hover moves the fill to charcoal, and a press nudges it down 1px. On an ink ground, such as a save bar or the check-in header, the contained button inverts to a newsprint fill with ink text and a parchment hover.
- **Outlined:** rule border, ink text, transparent fill. Hover darkens the border to ink.
- **Text:** ink text. Hover adds an ink underline.

### Chips and tags

- `StatusTag` renders every status and `TypeTag` renders every participant type. Both are square, use the control style at 0.625rem to 0.75rem, and take their colors from `statusColors` and `typeColors`. An active status (active, confirmed, accepted) adds a 5px pulse square in its border color.
- A filter chip is a plain MUI `Chip`, filled when active and outlined otherwise, with no color prop.
- A member role (owner, admin, member) is not a participant type and renders as caption text in stone.

### Cards

- A content container spreads `cardSx` from `theme.ts`: a 1px faint-rule border on a white fill, padding 16px, rising to 20px from the sm breakpoint. A card that is itself a link or a button spreads `linkedCardSx`, whose hover darkens the border to rule strong.
- After the spread, a card overrides layout only (padding, display, gap, width). Border, fill, radius and shadow come from the recipe.
- Controls keep their own borders and are not cards: inputs, toggles, filter chips, dropzones, calendar cells, table cells and icon buttons.

### Inputs

- Square, with a white fill, Source Serif 4 input text and a 1px rule-strong outline that darkens to stone on hover.
- The floating label is sentence-case IBM Plex Sans at 500, 0.875rem.
- Focus shows the global 2px gold outline at a 2px offset.
- Forms batch-save: edits collect locally and commit on one explicit Save button.

### Tables

Dense ruled rows in Source Serif 4. The header row uses the label style (IBM Plex Sans 500, 0.6875rem, uppercase, 0.14em, stone) over a 2px ink bottom border. Body cells are separated by faint rule, and rows hover to parchment. Lineups and guest lists are built on this table.

### Navigation

- The sidebar is black, the system's main contrast move against the newsprint content area, and its wordmark is Newsreader 500 in white.
- Nav items are numbered: each numeral is IBM Plex Sans with tabular figures, and each label is Source Serif 4, set at 600 in white when active and at 400 in parchment otherwise.
- A white bar slides to the active item.
- Chrome labels, such as the line under the wordmark and the Settings link, use the overline style in the sidebar's muted gray, #8A8478, which measures 5.65:1 on ink.
- The notification count badge is gold with white figures, one of the live indicators the gold ration allows.
- Light menus hover and select rows with a parchment fill. An organization switch animates the nav with a short `navShuffle` fade-up.

### Shape

Every element is square. The one exception is the legend dot in the runway and calendar views (the walk-path and seating-zone panels, the print legends, the roster calendar and the personal calendar), which stays circular because a circle reads as a legend key. Status dots, progress dots, avatars and every other small mark are square.

### Photography

Covers and headshots are structural parts of a page. The public show page opens on the full-bleed cover with no text laid over it. The public talent page opens on the headshot at full column width. An image slot with no image shows a rule and one line of text, and never a placeholder illustration. Avatar slots and Directory card portraits with no photo show the person's or organization's initials, because initials identify the entry and draw nothing.

### The dev login

The terminal-styled login, black with green monospace type, renders only under `import.meta.env.DEV`. It is a development tool and sits outside the system on purpose. The production login follows the system: the Newsreader wordmark, the italic standfirst and the contained Sign in button.

### Motion

State transitions run 150 to 250ms on eased curves, and reveals use `cubic-bezier(0.25, 1, 0.5, 1)`. The vocabulary is small: a staggered fade-up on list items, clip-path wipes on images, and the sidebar's sliding indicator, and every animation collapses to near-instant under `prefers-reduced-motion: reduce`.

## 6. Do's and Don'ts

### Do

- **Do** keep every corner square, legend dots in the runway and calendar views excepted.
- **Do** take every face from a theme variant or from `displayFont`, `bodyFont` and `labelFont`.
- **Do** keep Newsreader at h1 and h2, and set h3 to h6 in Source Serif 4 at 600.
- **Do** give a block a `SectionLabel` only when it is a department, and give a sub-block an h4 or h5 head.
- **Do** use one primary marker per page at most.
- **Do** spread `cardSx` or `linkedCardSx` for a content container and override only its layout.
- **Do** render statuses through `StatusTag` and participant types through `TypeTag`.
- **Do** keep every gray warm and use stone or silver as the lightest text color.
- **Do** mark an item that needs attention with ink text on parchment and a 5px gold square.
- **Do** batch-save forms with one explicit Save button.

### Don't

- **Don't** build a generic SaaS dashboard, a social feed or an event-ticketing template (see PRODUCT.md).
- **Don't** write a font-family string, a letter-spacing value or a hex color in a component.
- **Don't** put a marker above every block, or stack an eyebrow over a card title.
- **Don't** use gold as a fill, a hover color, a selection tint, a decorative rule or a link color.
- **Don't** add a drop shadow to a resting or hovered card, or nest a card inside a card.
- **Don't** round a corner or draw a status dot as a circle.
- **Don't** set body copy in IBM Plex Sans or a button label in a serif.
- **Don't** use a `typeColors` border as a text color.
- **Don't** put a cream, beige, sand or ivory ground anywhere, in the app, the landing page, an email, a deck or a print brief.
- **Don't** put text over a show cover, or fill an empty image slot with an illustration.

## 7. Recorded design decisions

### The résumé takes oxblood as its accent and no gold

`resume/resume.html` prints on white with ink rules, and its one accent is the
runway ramp's oxblood (#7A1E24) on the title, the rail dates, the section labels and the bullet
dashes. Gold is not used anywhere on the résumé: the owner sees gold accents on a great deal of
generated design and does not want the résumé read that way. The Rationed Gold rule stands for the
product; this is a document ruling (owner ruling, 2026-11-06). The page stays white: a tinted
ground on a résumé PDF reads as cream on screen, and the owner rejected it (owner ruling, 2026-11-09).

Decisions the styles obey but cannot state.

### The skip link and the back link are deliberately not arrow links

Both are quiet controls. Restyling either to match the arrow-link treatment elsewhere raises a control that is meant to sit back. This reads as an inconsistency to anyone tidying `editorialStyles.ts`, which is why it is written down.

### Portfolio visibility note: measured contrast

The note sits on ink. Its link renders in newsprint (17.60:1) and hovers to white (21:1). There is no sidebar gold, and gold on ink measures 3.82:1, under the 4.5:1 floor for text this size, so the link never takes the accent.

The sentence stays one text node, because the specs match it with an exact text query.

### Aspect presets are compositions

The presets in `components/photoUpload/aspectPresets.ts` are editorial compositions. A runtime override defeats them, so a new preset is a design change first.

### The standfirst and the h4 fill the show page's middle

The italic standfirst (subtitle1, 1.1rem) carries the show page's dateline and attention line. The Cast tab's four heads are h4 sub-blocks set in Source Serif 4 at 600, under the tab's department marker. `SectionLabel` has no subhead variant; a head between the title and the body is an h3, h4 or h5.
