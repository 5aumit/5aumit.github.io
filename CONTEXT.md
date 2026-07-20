# Personal Website

Saumit's personal site: a hire-me surface for visitors evaluating him as an Applied ML engineer.

## Language

**Live Site**:
The published site visitors use (currently Academic Pages / Jekyll).
_Avoid_: production, real site, main site

**Prototype**:
A throwaway HTML exploration of layout and look, not served to visitors. Lives under `.scratch/` until a direction is chosen and ported to the Live Site.
_Avoid_: mock, mockup, draft layout, template experiment

**Revamp**:
A Hybrid path: design via Prototypes first, then port the chosen direction onto the Live Site. Not a pure reskin of Academic Pages chrome, and not an immediate clean-slate replacement of Jekyll.
_Avoid_: reskin, redesign (unqualified), rebuild

**Hiring Visitor**:
The primary audience: someone deciding whether to hire, interview, or collaborate with Saumit as an Applied ML engineer.
_Avoid_: user, reader, guest, academic visitor (as primary)

**Homepage**:
The `/` entry surface. Its job is to answer "who is this and why hire them?" in one screen, then route deeper.
_Avoid_: about page, landing (unqualified), index

**Surface**:
A top-level destination in the site nav. The Lean set is: Homepage, Work, Writing, CV.
_Avoid_: page (when meaning a nav destination), section, route

**Work**:
The Surface that lists professional Experience (full role history) and selected Projects with Media. Not projects-only.
_Avoid_: Portfolio, Projects (as Surface name), projects-only Work page

**Landing Media**:
Compact strip with the About Blurb on first paint. Form: an auto-rotating carousel of technical skill icon SVGs (Quiet Technical), paused on hover/focus; static under prefers-reduced-motion. Not a medical-workflow diagram, not a photo collage, not a product banner.
_Avoid_: decoration-only gradient, text-only first screen, full-site media band, FDA campaign hero, photo collage, CXR pipeline SVG

**Writing**:
Deprecated Surface name. The Lean nav label is now **Publications** (same list of papers / written work). Prefer **Publications** in UI copy.
_Avoid_: Blog, Posts (as Surface name)

**Publications**:
The Surface that lists publications and other written work (formerly labeled Writing in nav). On Homepage, both current publications appear in the Publications teaser (year, title, venue, link). Writing Media is mandatory for each listed item.
_Avoid_: Blog, Posts (as Surface name), text-only publication list

**Writing Media**:
Required image per publication entry, hosted under site assets (not hotlinked). ECR 2024: save the EPOS poster thumb (and/or a poster figure). JRM 2025: extract the embedded figure from **PDF page 3** (verified: one ~1929×926 figure on that page; Genki/architecture context) and host it as the thumb.
_Avoid_: venue logo as the only thumb, empty placeholder squares, hotlinking publisher CDNs

**CV**:
A downloadable résumé (PDF today). A Surface in nav, not a long HTML résumé page.
_Avoid_: Resume page, CV-JSON, academic CV layout

**Chrome**:
Persistent site shell around Surface content: masthead nav, theme toggle, and Author Profile.
_Avoid_: layout, frame, chrome UI (unqualified)

**Author Profile**:
The full persistent identity rail (avatar, name, bio, location, employer, social/academic links). Kept and restyled, not removed or slimmed.
_Avoid_: sidebar (as the concept name), author card, about widget

**Homepage Body**:
The content column beside Author Profile on the Homepage. Brittany-shaped scroll: About (+ Landing Media strip) → Experience → Selected Projects → Writing teaser → slim Education + Skills footers, with exits to Work / Writing / CV Surfaces. Portfolio Voice throughout. Not a product/FDA campaign page.
_Avoid_: about section, main column, landing content, Compact Résumé (superseded), product pitch, FDA campaign page, thesis/calibration hero

**About Blurb**:
Homepage opening in Portfolio Voice, resume-summary shape: two short paragraphs. Para 1: who you are, 3+ yrs shipping medical CV, DeepTek/MS EE framing. Para 2: forward-looking (autonomous LLM workflows, production observability). Greeting heading stays. No metrics in About. No intern parade. No hobby beat required.
_Avoid_: thesis headline, calibration bar, specialty laundry list, intern parade, metrics in About, hobby-led About

**Portfolio Voice**:
Homepage (and related) copy that introduces Saumit as a person and engineer: role, trajectory, what he builds — with proof woven into Experience/Work, not a single FDA/product thesis dominating the first screen.
_Avoid_: campaign headline, product pitch, calibration metrics bar (as hero)

**Education Footer / Skills Footer**:
Short blocks at the bottom of Homepage Body (after Writing): Education as a tight degree list; Skills as a compact line or grouped labels — not the Live Site's long dumps.
_Avoid_: full skills matrix, education essay

**Brittany Chrome Touches**:
Small UI borrows from Brittany Chiang, on top of existing masthead + Author Profile: (1) in-page section jumps for About / Experience / Projects / Writing with a subtle active state while scrolling (utility Motion only); (2) each Experience Block is a linked row (company URL or CV) with quiet hover hairline/accent.
_Avoid_: full Brittany single-column rebuild, scroll-spy spectacle, pill nav

**Theme**:
Light or dark appearance of the site. Default follows the visitor's system preference (`prefers-color-scheme`); an explicit toggle overrides and persists.
_Avoid_: mode, color scheme (as the product term), site_theme (Academic Pages palette packs)

**Quiet Technical**:
The visual direction: neutral gray surfaces, one muted accent, sharp type hierarchy, hairline dividers, almost no decoration. Not editorial/magazine, not stark poster-contrast.
_Avoid_: modern (unqualified), minimal (unqualified), clean, flat

**Motion**:
Utility only: no scroll reveals or entrance animations. Theme toggle and link hover may use ≤150ms color/opacity. Demo GIFs inside Work content are media, not UI Motion.
_Avoid_: animation, transitions (unqualified), micro-interactions

**Media**:
Images or demo GIFs attached to Work (banners, teasers, demos) and **Writing Media** on publication rows. When Media exists it is shown in lists and detail views, not hidden behind text-only indexes. Writing is never text-only while items lack Writing Media.
_Avoid_: assets, visuals (unqualified), decoration

**Work List**:
Thumbnail rows: title, excerpt, meta, plus teaser Media when present. Hairline structure, not a card grid.
_Avoid_: portfolio grid, project cards

**Prototype Set**:
The Core Four HTML surfaces in each variation: home, work list, work detail, writing. Shared Quiet Technical CSS and Theme script per variation folder.
_Avoid_: full site mirror, every Academic Pages archive

**Variation**:
One complete take on the Prototype Set, stored in its own folder under `.scratch/`. Active direction for this pass: a new folder (e.g. `.scratch/04-portfolio/`) merging **colors from `01-cool-profile`** and **fonts from `02-warm-content`**, with Portfolio Voice Homepage Body and Brittany Chrome Touches. Folders `01`–`03` stay for comparison until deleted.
_Avoid_: tabs, theme pack, alternate skin (unqualified)

**Selected Projects**:
The Homepage Projects section: two items — **Floki** and **SetScout**. Each shows title, short blurb, link into Work, and teaser Media sized slightly larger than Brittany Chiang's project thumbs (more visual weight, still not a full-bleed band).
_Avoid_: project archive dump, card grid of many items, full-site media banner

**Company Mark**:
Logo icon on each Experience Block (DeepTek, AB InBev, etc.), subordinate to title + company name. For Prototypes: fetch simple official marks from company sites / press kits into assets; replace with owner-supplied files before or at Live Site port if needed.
_Avoid_: logo as the only identity signal, oversized brand lockups, hotlinked logos in production without local copies

**Experience Block**:
A Homepage Experience entry in Brittany depth: title, company, dates, short blurb, tech tags — no long bullet lists. Full detail lives in the CV. Company name and job title must read as the primary scan targets; each entry includes the company's logo icon.
_Avoid_: résumé dump, bullet wall, logo-as-decoration without clear title/company hierarchy
