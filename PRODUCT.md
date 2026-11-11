# Product

## Register

product

## Users

Fashion-industry professionals operating in a high-stakes creative business. All user types are primary; the interface must serve multiple mindsets at once:

- **Producers**: stressed, juggling casting, logistics, and timelines. Need clarity and speed. Often working day-of-show under pressure.
- **Agency bookers / coordinators**: planning weeks ahead, deliberate, need overview and control across multiple shows and a roster.
- **Models / talent**: checking schedules, profiles, and bookings. Need fast self-service.
- **Crew / media**: checking assignments and confirming participation.

The common thread: professionals who need information fast, presented with authority. The context ranges from calm advance planning (agency desk) to chaotic backstage execution (producer, door staff on a phone at check-in).

## Product Purpose

Fashionistapp (brand: **Atelier Actara**) is a fashion-show management platform. It runs the full lifecycle of a show: casting, lineup and walk order, looks, venues and floor plans, guest lists with RSVP and check-in, open calls and inquiries, messaging, and multi-organization collaboration.

It exists to be the operational backbone a show runs through. The marketing tagline is "Every show has a secret." and, like every tagline, it never appears in the product UI (see No decorative text). Success is a producer feeling in control on the most chaotic day of their work, an agency seeing its whole roster and shows at a glance, and talent self-serving their schedule without a phone call. The tool makes its users feel like they have it together.

### Public pages: the fashion IMDb

Show pages, talent profiles, and producer-confirmed credits form the industry's canonical record of who worked which show. The record is free forever and never decays behind a paywall. Monetization sells tooling and prominence around the record: producers pay to run shows, and credited professionals may later pay for visibility, the IMDbPro pattern. The record itself is never for sale. When designing any public surface, bias toward canonical-record qualities: verified, permanent, citable, linkable.

## Brand Personality

**Atelier Actara, in three words: Authoritative. Editorial. Refined.**

The brand positions itself alongside fashion houses (YSL, Gucci), but for software. Atelier Actara is a fashion tech company that thinks like a fashion house. In marketing and anything said about the product, the check-in feature is "guest check-in", never "the door". Emotional goal: confident authority, like reading Vogue's masthead. Polished, in control, professional.

Voice is fashion-native: industry terminology throughout (casting, lineup, call sheet, looks), never generic SaaS phrasing. Confidence comes from what is withheld: one clear action per context, and no line on screen that is there for decoration. The rules for every word a person reads are in Voice and copy below.

## Anti-references

- **Generic SaaS dashboards**: no Notion / Linear / Monday energy. No metric-card walls, kanban boards, or startup-tech feel.
- **Social media platforms**: not Instagram / TikTok. No feeds, likes, or engagement metrics.
- **Cheap event planners**: not Eventbrite / Splash. No ticket-centric UI or generic event templates.
- **Magnetiq**: the primary competitor. Atelier Actara should feel like a different class entirely.

## Design Principles

1. **Editorial over enterprise.** Every screen should read like a well-designed magazine spread, not a software dashboard.
2. **Authority through restraint.** Confidence comes from what you do not show. One clear action per context.
3. **Warmth without softness.** Newsprint gray and serifs create warmth; sharp edges (zero border-radius) and uppercase IBM Plex Sans labels hold authority.
4. **Fashion-native language.** Use the industry's words: casting, lineup, call sheet, looks. Software jargon stays out.
5. **Information as hierarchy.** Like a newspaper front page: the most important thing is unmissable, supporting detail is discoverable.

## Voice and copy

This section governs every word on screen. It is the home for the product-copy rules; the
writing rules for everything else live in `CLAUDE.md` under "Writing rules".

### Where every copy safeguard lives

| Safeguard | File | What it holds |
| --- | --- | --- |
| Product copy rules | this section | The bans below, for every label, heading, button, empty state and message in the app |
| Writing rules | `CLAUDE.md`, "Writing rules" and "UX preferences" | "Report, do not perform", the antithesis ban, stubs, fragments, the read-aloud test, the sweep rule |
| Tell list | `.agents/skills/seo-audit/references/ai-writing-detection.md` | Overused verbs and adjectives, transitions, filler, academic tells, em dashes |
| Checker | `node tools/copy-check/check.mjs <file>` | Fails on the word and phrase tells; prints structural notes for review |
| UX copy mechanics | impeccable `clarify` (`reference/clarify.md`) | Error messages, labels and instructions; this section wins where they differ |

Run the checker on any copy before calling it done. Eyeballing has missed every one of these
tells at least once.

### Bans in product copy

- **No em dashes and no double hyphens.** Restructure with a comma, a colon or a period.
- **Never "apply" or "application".** Say what the person does: "Send", "Ask to join", "Request".
- **No technical notation.** No routes, paths, field names, ids or code names on screen. Say what
  a person sees: "the Credits tab on the show page".
- **No borrowed verbs.** "sets off", "triggers", "surfaces", "drives", "unlocks", "empowers".
- **No internal jargon.** A term the Glossary defines for us ("producing lens") is not a term the
  reader uses ("the label or brand you produce under").
- **Second person.** "When you pay", never a neutral passive.
- **Every line passes the read-aloud test.** If a person would not say it that way, rewrite it.

### An empty state that waits on a switch names the switch

A Directory tab's empty state says "turn on Discoverable in their settings". Discoverable is
the word the person sees on the setting, so naming it is the clearest instruction. Do not
paraphrase it into "list themselves in the directory" or any other description of the outcome.
Founder ruling of 2026-10-27.

### No decorative text

Every line on screen must tell the user something they need or ask them to do something. Julien
reads decoration as an AI smell. Do not add any of these, and remove them when you find them:

- **Taglines under the wordmark or logo.** The brand name stands alone. Rejected: "Show
  management" under "Atelier Actara" on the login page, in the sidebar and in the browser tab title.
- **Audience lists.** Rejected: "Media · Models · Producers · Crew" under the login form.
- **Slogans as headings.** Rejected: "The show runs through here." as the onboarding heading (now
  "How do you work in fashion?").
- **Brand-voice role names.** Show the role. Rejected: "On the Runway", "Behind the Lens", "The
  Connector" on profiles (now "Model", "Media", "Stylist").
- **Themed loading quips.** Rejected: "Steaming the looks...", "Places, everyone..." under the
  spinner. A spinner shows text only when the text is real ("Taking you to sign up.").
- **Newspaper or magazine costume as names.** "The X" section labels that name a concept and leave
  out what the box holds. Rejected: "The Daily Edition", "The index", "The roster", "The record", "The
  lead" (now "Today", "Your shows", "Your talent", "Your work", "Up next"). Name the contents in the
  words the user would say. Real industry terms such as "Call sheet" and "Lineup" are fine.
- **Pitch lines in empty states.** Say what is missing and what to do. Rejected: "Your profile is
  your calling card." / "Producers cast from what they can see.", "Your show starts here." /
  "...and the edition fills itself in.", "The castings are open."
- **Lines that repeat the heading, label or button next to them.** Rejected: "Add the first person
  you represent." under "Add your first person"; an overline repeating the name printed above it.

When one instance is flagged, find the class of fault and sweep the whole surface for it.

## Accessibility & Inclusion

Target **WCAG 2.2 AA**. Body text holds >=4.5:1 against its background; large text >=3:1. The newsprint/ink editorial palette must not drift into low-contrast light-gray-on-tinted-white; bump body color toward ink when contrast is close. Full keyboard navigation and visible focus states. Every animation needs a `prefers-reduced-motion` alternative (crossfade or instant). Account for the day-of-show context: surfaces like check-in run on phones in poor lighting, so contrast and tap-target size carry real operational weight on top of the compliance floor.

## Rulings

Decisions that the code obeys but cannot state. Each was recorded in a source
comment until the 2026-09-18 comment audit moved it here. Reversing one is a
product decision, not a cleanup.

### A cancelled show renders no open calls

A show marked cancelled suppresses its open calls, even when its date is still ahead. The
invitation to credit your work follows the record like everything else, and an earlier version of
this ruling that also suppressed the invitation was superseded on 2026-10-27, and re-adding the
invitation's suppression needs a new ruling.

### A member is never auto-switched into an organization they did not pick

Single-organization auto-select fires on first initialization only. When a later
re-initialization finds one organization left, because another disappeared, the
member stays where they were. The invariant is scoped to the session on purpose:
making it survive a reload would need server-persisted heal state, which was
declined.

Source: `frontend/app/organizations/LensContext.tsx`.

### A public organization page answers every failure identically

Missing, hidden, deleted, below-floor and failed-query all return the same
surface. Two distinguishable outcomes would let a visitor probe the endpoint for
which houses exist. Any change that makes one failure look different from
another reopens that.

Source: `frontend/app/organizations/PublicOrganization.tsx`.

### Styling creates an industry person with no industry type

The account step's mutation takes no industry-types argument, so a person who
arrives through Styling lands with an empty list and the credit step appends the
craft. The asymmetry against the other crafts is deliberate.

Source: `frontend/app/routes/creditWork.tsx`.

### Uploaded photos are capped at 10MB on both sides

`MAX_FILE_SIZE` in `frontend/app/components/photoUpload/validate.ts` and
`@max_confirmed_image_bytes` in `backend/apps/database/lib/backend/uploads.ex`
must stay equal. The backend check runs after the magic-byte check and reads the
object's own stored size, never a size the client reported, so a client that
skips the frontend check is still refused.

### Show events commit on their own, not inside the show's batch save

The show's timeline keeps its own dialog and its own immediate create, update
and delete calls; it does not join the show's draft. The reason is mechanical:
the call-times panel assigns people to events by the event's id, and an event
that has been created but not yet saved has no id yet, so a provisional event
would give an assignment nothing to point at. A dialog with its own Save button
is not autosave, so this does not breach the rule that edits commit in one
explicit batch.

Source: `frontend/app/shows/ShowTimeline.tsx`.

### Taking someone off a show commits on Save, with every other pending edit

Pressing Remove on a cast row marks the person as leaving and writes nothing to the server. The
row keeps its place, the name struck through, with one sentence saying what goes with the person,
and an Undo control that brings the row back exactly as it was, unsaved edits included. The
removal commits when the producer presses Save, in the same transaction as every other pending
edit. A save that carries a removal opens one dialog first, naming each person leaving, because
the email they receive and the withdrawal of their public credit cannot be recalled. A person who
already checked in can be removed like anyone else, and the removal is never refused. Their
arrival stays in check_in_events, which is not tied to the participant row.

This reverses the Phase 218 ruling, by founder rulings of 2026-09-29 (Phase 222, D-01 and D-02). A
removal firing on its own left the draft holding edits for a person the server had already
deleted, so the next save failed every time. Removal should not move back out of the draft.

Source: `frontend/app/shows/useShowDraft.ts` and `backend/apps/shows/lib/backend/cast_writes.ex`.

### The show page states one open condition, never a ranked list

The masthead's attention line carries only the single highest-ranked open condition, with its one
action that clears it. A producer who holds three open conditions sees one of them here; the other
two stay visible on the tab that owns them, which is where their action lives anyway. A ranked list
under the masthead was declined on a phone-width measurement: at 390px the page already runs
roughly 894px from the top of the content area to the first tab body, past one full screen, and a
list under the masthead makes that worse. Founder ruling.

Source: `backend/apps/home/lib/backend/home/queries/get_show_attention_line.ex`.

### The old show edit address and the dashboard address are deleted, with no redirect

Both are gone outright, route files and all. A bookmark or a link to either now reaches the
not-found page. Founder ruling, reversing the permanent redirect Phase 219 shipped for the old edit
address (SURF-07). Julien's words, verbatim: "I don't care about preserving old bookmarks at all.
Delete all of the old code and endpoints." Restoring either address needs a new founder ruling, not
a reflex re-add.

Source: `frontend/app/routes.ts`.

### The show's save bar is pinned to the bottom of the viewport at every width

Reversing the top-sticky bar Phases 217 and 219 shipped. The bar renders after every tab body, so a
top-sticky Save sits above whatever the active tab holds and disappears behind it on a long cast or
a long lineup, well below where a producer is scrolled to. Bottom-pinning keeps Save and Discard on
screen regardless of tab length or scroll position. Founder ruling.

Source: `frontend/app/shows/showEdit.styles.ts`.

### A cast row keeps its type-tinted fill and loses only its coloured left edge

Taken against the recommendation to drop both the fill and the 3px `typeColors[*].border` stripe
each cast row carried. The fill costs nothing on contrast (names measure 14.42 to 15.01, roles 5.80
to 6.04 against their own fills) and it is the one thing on a long cast list that lets a producer
scan by participant type without reading every row's label. The stripe is a pure decoration with no
reading beyond what the fill and the section head already carry, so it goes; the fill, which does
carry a reading, stays.

Source: `frontend/app/shows/participants/ModelParticipantRow.tsx`,
`DesignerParticipantRow.tsx`, `ProductionParticipantRow.tsx`, `MediaParticipantRow.tsx`.

### A declined participant keeps their confirmation on record

Declining a confirmed participant keeps their `confirmed_at` and appends a
retraction to the public record. The original fact stays in the ledger, so the
record shows that the credit existed and that it was withdrawn. The declining
participant and the operator who acted are not notified of the decline.

Source: `backend/apps/participants/lib/backend/participants/commands/update_participant_status.ex`.

### Only a confirmed participant reaches the public record

A participant added as confirmed goes on the record in the same transaction,
credited to the show's producing organization and never to the participant's
agency. Every other status, invited included, stays off the record until the
participant is confirmed.

Source: `backend/apps/participants/lib/backend/participants/commands/add_participant_to_show.ex`.

### A door person is a full member of the show

Someone given door access holds a place on the show's cast side like any other participant. They
count as taking part in the show, cast members can open their profile and message them, and they
read the cast side of the show page, with no lighter tier for door staff.
Founder ruling of 2026-10-28.

Source: `backend/apps/permissions/lib/backend/permissions/authorization.ex`.

### The door grant says who is door staff

A person is door staff on a show when they hold the door-only grant there, which is the check-in
permission and the guest list permission and nothing more. The label Door staff on their crew row is
display text. A crew row typed with that label by hand for a person with no door grant is an ordinary
crew credit: it counts, it reaches the public record once confirmed, and removing anyone's door access
leaves it alone. Door access never changes a credit. When a person who already holds a crew credit on
a show is given door access there, that credit stays exactly as it was: it keeps its status, it stays
on the public record, and removing their door access leaves it in place. The same holds for their
model, designer, media or producer credit.
Founder ruling of 2026-10-28, amended on 2026-10-29: the earlier version turned an existing crew credit
into the door row and took it off the public record.

Source: `backend/apps/database/lib/backend/database/door_staff.ex`.

### A show's dates read in the show's own time zone

Every date the product prints about a show reads in the time zone saved on that show, whatever zone
the reader's browser is in. The public series page is the one exception: its summary line and every
show row below it read in the series' zone, so the page agrees with itself.
As of 2026-10-28 the public venue, organization and series pages follow this rule; the other screens that print a show date still read the reader's zone and are listed in the todo `2026-10-28-print-every-show-date-in-the-show-zone.md`.
Founder ruling of 2026-10-28, which replaced the earlier rule that a series row fell back to the
series zone only when the show had none.

Source: `frontend/app/shows/publicSeries.tsx`, `frontend/app/venues/PublicVenue.tsx` and `frontend/app/organizations/PublicOrganization.tsx`.

### The call sheet on the home page ignores the show pass

The home page's call sheet stays visible when a show has no pass. The pass
gate walls the show itself, and the call sheet only shows the caller their own work on
it. Participant details inside the call sheet still require permission to view the
show's participants.

Source: `backend/apps/home/lib/backend/home/queries/get_home.ex`.

### A new up-next source must check its own precondition first

Every candidate source for the home page's up-next item runs for every caller,
so the list of sources is the only limit on how many queries the section makes. A new
source starts with a cheap check that skips the query for callers it cannot apply
to.

Source: `backend/apps/home/lib/backend/home/queries/get_home_up_next.ex`.

### A producer's grouping of shows is a series, and every public record page lives under /public/

A producer's grouping of shows is called a series in copy, in code and in the address, and its
members are called "shows". The table is `series`, the column is `shows.series_id`, the schema
module is `Backend.Database.Schema.Series` and the GraphQL object is `:series`. The word is the
same in the singular and the plural, so a field, association or variable holding several is
`series_list` and never a bare `series`. The public page is `/public/series/:slug`, and the public
pages for shows, talent, venues and organizations live at `/public/shows/:id`,
`/public/talent/:slug`, `/public/venues/:slug` and `/public/organizations/:slug`. The older
addresses for those four pages are deleted with no redirect. The token routes for RSVPs, claims,
invites, inquiries and flyers keep their addresses, because those links are already in sent email
and on printed flyers. Every public pattern starts with `public`, so none can shadow a page inside
the signed-in app. Founder ruling of 2026-10-13.

Source: `.planning/research/v48-NAMING.md`.

### The show toolbar leads with one action chosen for the viewer

The show toolbar holds one filled button, picked from the viewer's role on the show, the show's
status, and whether the show is before, on or after its day in its own time zone. Up to three
outlined actions sit beside it and More holds the rest, so nobody loses an action they had. Editors
lead with Edit, or with Check-in on the show day when they can check people in, and door staff lead
with Check-in. A participant leads with the call sheet, and after the show with their credit: Download
tearsheet whenever the viewer has one, even when the credit behind it was removed, Share when a
published credit has no tearsheet on a show a stranger can open, See your credit otherwise, and
Credit your work for crew and media who hold none yet and for anyone who held a credit on the show
that was removed. A viewer with a tearsheet and no credit still finds Credit your work on the
Credits tab. Models and designers are not offered Credit your work, because none of the five crafts
a contributor can submit fits them. Founder rulings of 2026-10-21 (Phase 232, D-01 to D-10),
amended by founder rulings of 2026-10-27 and 2026-10-28.

Source: `frontend/app/shows/resolveShowActions.ts`.

### A Hair, Makeup or Styling link stays off the Coverage band

A contributor crediting Hair, Makeup or Styling may add one optional link to a page that credits
them. The link is stored on the credit and shows on the show's Credits tab and in the show PDF. It
never joins the coverage path: there is no link reminder, no edition prompt, and no row in the
public Coverage band, which lists Photography and Videography only. The server decides which
crafts are coverage, so no page keeps its own list. Default adopted 2026-10-21 from D-13 and the
G-1 ruling (Phase 232), open to Julien's veto.

Source: `backend/apps/database/lib/backend/schema/show_credit.ex` and `frontend/app/shows/CoverageBand.tsx`.

### A deleted producing organization drops off the tearsheet

The tearsheet names the organization that produced the show. When that organization has been
deleted, the plate leaves the organization line out, prints no deleted marker, and closes the gap so
no blank line is left. This is the one exception to the v47.0 rule that a deleted organization reads
"[deleted]": the plate is the person's own post, a picture they share, and is no record surface. The
public profile the plate's code opens already lists that credit with no organization name, because
the record's credit history returns none for a deleted organization. Deleting an organization
overwrites its stored name with "[deleted]", which is what the app shows inside it, as the
organization's edit page tells its owner. Founder ruling of 2026-10-22 (Phase 233, D-07).

Source: `backend/apps/home/lib/backend/home/queries/get_viewer_tearsheets.ex`, `backend/apps/record/lib/backend/record/queries/get_credit_history.ex` and `frontend/app/exports/tearsheet/tearsheetExportSource.ts`.

### A signed-out visitor may download a talent's story image and PDF

The public talent page shows its story image and PDF downloads to every reader, signed in or not. The record is free, the image points back to the public page, and nothing on it is withheld from a signed-out reader. Both buttons render for every reader with no sign-in check. Founder ruling of 2026-10-26 (Phase 235, D-08).

Source: `frontend/app/people/PublicProfilePage.tsx` and `frontend/app/exports/ExportButtons.tsx`.

### A show's status never outranks the record

A live credit on the record counts wherever the record is read, whether its show is cancelled, upcoming or past. Julien's veto of 234 D-24 on 2026-10-26 made a cancelled show count toward "first show" again (TEAR-06). Reopening a status-based exclusion on the record needs his ruling first. From 2026-10-27, the tearsheet and the invitation to credit your work are offered on a cancelled show that has taken place. Founder ruling of 2026-10-26 (Phase 235, D-03).

Source: `backend/apps/record/lib/backend/record/current_facts.ex`, `backend/apps/home/lib/backend/home/queries/get_viewer_tearsheets.ex` and `frontend/app/shows/resolveShowActions.ts`.

### Anyone who can view a show's cast may read every credit on it

The show's credits read returns every credit on the show, confirmed or not, to anyone who can view
its cast. The Credits tab shows other people's unconfirmed credits only to the show's editors, and it
hides them in the page after the server has sent them, so a cast member who reads the network
response can see who holds an unconfirmed credit. Founder ruling of 2026-10-27.

Source: `backend/apps/graphql/lib/backend/schema/show.ex` and `frontend/app/shows/tabs/CreditsTab.tsx`. This ruling closes security note O2 of Phase 234 as accepted.

### Two credits on one show share one button name

The Download tearsheet button on the home Credits list and on the profile credit table is named
"Download tearsheet for" and the show name, so two credits on one show give two buttons the same
name. The row around each button carries the role, and the tearsheet dialog names each of its buttons
for the role and the show. Founder ruling of 2026-10-27.

Source: `frontend/app/home/YourWorkSection.tsx` and `frontend/app/record/CreditTable.tsx`.

### The show page lead changes once, and Share stays reachable

On a first visit the lead button changes once, when the read that finds the viewer's tearsheet
answers. A cached visit shows the answered lead at once, the page holds no space open for the lead,
and nothing delays it. When the lead opens the tearsheet, the public Share stays among the viewer's
other actions, beside the lead or in More, and the toolbar gains it once that read answers. Every
action a viewer could reach on the show page stays reachable. Founder rulings of 2026-10-27.

Source: `frontend/app/shows/ShowToolbar.tsx` and `frontend/app/shows/resolveShowActions.ts`.
