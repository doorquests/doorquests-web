# DoorQuests — Shared Brand and Navigation Standard

**Date:** 2026-10-16  
**Status:** COMPLETE — APPROVED  
**Repository:** `doorquests/doorquests-web`  
**Scope:** DoorQuests presentation and navigation; no changes to story narratives or application behavior.

## 1. Canonical public identity

- **Platform:** DoorQuests
- **Domain:** `https://doorquests.com` (planned launch; not yet activated)
- **Tagline (exact wording):** Choose Your Path. Find the Truth. Unlock the Impossible.
- **Collections:** Stories · Cases · Challenges · Games
- **Creator attribution:** Created by The Axiom Continuum
- **Relationship:** DoorQuests is the interactive entertainment platform; The Axiom Continuum is its parent creative venture and the original creator of the migrated Daily Door experiences.
- Preserve the exact three-sentence tagline. Do not convert it to a four-sentence tagline merely because there are four collections.

## 2. Identity placement

| Surface | DoorQuests treatment | TAC treatment |
|---|---|---|
| Website header | Primary brand: DoorQuests | Optional secondary creator credit |
| Story browser title | `[Original Story Title] | DoorQuests` | Omit from title unless a historical/source-specific reason requires it |
| Story heading | Original story title, unchanged | Do not alter narrative wording |
| Story masthead | Link to DoorQuests home | Secondary text: `Created by The Axiom Continuum` |
| Story footer | Link to DoorQuests home, plus story/day attribution | Keep creator credit without mislabeling TAC as the DoorQuests destination |
| Search description / sharing | Describe the story and DoorQuests | Retain author/creator credit where relevant |
| README | Describe current DoorQuests publication/repository | Retain original TAC source, attribution and historical references |
| Production favicon | DoorQuests icon, once approved original asset is available in the repository | TAC emblem is not the DoorQuests favicon |

Recommended human-readable masthead: **DoorQuests · Daily Door #[n]**.  
Recommended footer: **DoorQuests · Daily Door #[n] · Created by The Axiom Continuum**.  
Do not add a new `Daily Door` number to the separate **The Three Doors** prototype.

## 3. Artwork and favicon governance

The founder-approved creative direction is a dramatic cosmic field of floating doors. **Use the actual approved asset**; do not invent, replace, regenerate, or assume a downloaded version exists.

The DoorQuests branded GitHub avatar is already approved as an account image, but its source and suitability as the website favicon are not established by this document.

**Production asset contract (reserved paths, not claims that files exist):**
- `assets/doorquests-icon.svg` — proposed local favicon, contingent on approval and actual file delivery.
- `assets/doorquests-hero.webp` (or a format chosen after inspecting the original approved artwork) — proposed main visual.
- A separate mobile portrait composition requires founder approval.

Until the actual icon exists and is checked, **do not replace story icon links with a nonexistent DoorQuests path**. Keep the legacy TAC favicon functional during the isolated-copy stage; do not ship it as the final DoorQuests production identity.

## 4. Navigation and links

- The DoorQuests homepage will live at `/` on the DoorQuests host.
- In story pages served from DoorQuests, existing root-relative `/` links already point to that host; update their *visible labels* and accessibility labels to DoorQuests.
- Absolute links to `https://theaxiomcontinuum.com/` must be classified before any replacement:
  - **Platform/home navigation:** change to DoorQuests root when the destination is live or reliably previewed.
  - **Creator attribution:** preserve as an explicit, clearly labeled TAC creator link.
  - **Historical/source citation:** preserve TAC source or archival reference.
  - **Asset dependency:** replace only after a local approved asset exists.
- Preserve all relative story links and all 31 registry destinations during the baseline branding pass.
- **Never redirect the entire TAC domain to DoorQuests.**
- Add any shared navigation only if it remains keyboard-accessible and mobile-safe and does not overlap individual story controls.

## 5. Metadata and indexing

- Proposed production canonical pattern: `https://doorquests.com/stories/[slug]/`.
- Do not activate production canonical URLs, Open Graph URLs, sitemap links, or indexing changes until the DoorQuests public site and route are tested.
- Audit story-specific `noindex,nofollow` settings individually. Branding does **not** automatically authorize indexing.
- Descriptions may say “on DoorQuests, created by The Axiom Continuum” without rewriting story plots.

## 6. Technical compatibility and preservation

- **Preserve localStorage keys**, even those beginning with `tac-`; renaming them can discard saved story progress within the same origin.
- Browser storage is origin-scoped; TAC saved progress will not automatically migrate to DoorQuests.
- Preserve `tac-brand`, `tac-publisher`, and other HTML/CSS/JS identifier names until explicitly tested; their names are not visible platform branding.
- Preserve story prose, branching logic, ending conditions, asset links, and save/state behavior.
- The special runtime-injected styling in Story #31, **Department of Unclaimed Echoes**, must remain intact.
- **The Three Doors** is a compiled prototype: update HTML metadata separately, and do not rewrite its bundled JavaScript/CSS merely to rename branding.
- Preserve original TAC source repository as read-only for this migration.

## 7. Change sequence and verification gates

1. Record this standard as a standalone one-file commit.
2. Obtain/verify exact approved DoorQuests artwork and favicon source; commit each asset separately when authorized and available.
3. Update individual story `index.html` files only after local branding and navigation destinations exist or can be tested; one changed file per commit.
4. Update individual story `README.md` files to distinguish current DoorQuests hosting from historical TAC authorship; one changed file per commit.
5. Verify each commit SHA and exactly one changed file. Check syntax, story mechanics, responsive rendering, accessibility and links prior to publishing.
6. Perform independent preview testing before altering DNS or activating `doorquests.com`.

**Approval boundary:** This document approves the brand/navigation standard, **not** publication, story gameplay validation, DNS updates, or unavailable artwork.
