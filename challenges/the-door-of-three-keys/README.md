# Chaortal No. 01 · The Door of Three Keys

**Verb:** DEDUCE · **Discipline:** truth-and-lie logic · **Setting:** a forgotten locksmith's candlelit library
**Status:** PROTOTYPE A, refinement 1 (October 17, 2026) — for review.
- The playtest testing URL is `https://doorquests.com/challenges/the-door-of-three-keys/`, unlinked from the homepage.
- The page keeps `robots: noindex,nofollow` and a "Prototype · playtest build" badge until public integration is approved.
- Published to GitHub as an **unlisted live-testing prototype**; the homepage remains unchanged.

See `CHANGELOG.md` for what changed since the first playtest.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Built, standalone page: one file, no dependencies except Google Fonts |
| `src/index.src.html` | Page source with `/*{{KEYRING}}*/`, `/*{{TOOLKIT}}*/` and `/*{{PUZZLE}}*/` markers |
| `src/puzzle.js` | Tiers, inscriptions as structured predicates, hints, checkable hint claims, mastery rule |
| `../../shared/keyring.js` | Shared DoorQuests Keyring v1.1 (inlined at build) |
| `../../shared/toolkit.js` | Shared Reasoning Toolkit v1 (inlined at build) |
| `../../tools/build.py` | `python3 tools/build.py the-door-of-three-keys` |
| `../../tools/verify-three-keys.js` | Logic verifier: `node tools/verify-three-keys.js` |
| `../../tools/test-keyring-compat.js` | Keyring v1.0 ↔ v1.1 compatibility: `node tools/test-keyring-compat.js` |
| `../../tools/e2e-three-keys.py` | Browser tests (Playwright/Chromium): `python3 tools/e2e-three-keys.py [screenshot-dir]` |
| `../../tools/fixtures/keyring-prototype-a-v1.0.js` | The Keyring as first deployed, kept for compatibility tests |

## How it plays

The player must give **both** answers: mark the one true inscription *and* place the key (Gold: one key in each of two locks), then turn.
- A wrong attempt says only that the combination is wrong, never which part.
- Repeating an identical wrong combination is free.

| Tier | Aim | Setup | Solution (spoiler) |
|---|---|---|---|
| Bronze | Understand | 3 keys, 3 inscriptions (as approved) | C · obsidian |
| Silver | Apply and combine | 4 keys; *if/then*, *not*, *neither/nor*, *exactly one of* | B · glass |
| Gold | Mastery | 2 locks, 5 keys | E · amber (upper), jade (lower) |

**The Investigator's Ledger (optional, free).** It's a parchment notebook under the puzzle, with a separate page for each tier. Marks cycle through Uncertain · Possible ✓ · Impossible ✗, using the mouse, a tap, or the keys U / P / X. The arrow keys move between cells.
- **Bronze and Silver:** an Inscriptions list, a Keys list, and a *Cases* grid with one row per "if this inscription is the true one".
- **Gold:** an Inscriptions list and a key × lock grid (Upper / Lower / Neither).
- **Every tier:** free notes, up to 2,000 characters.

Rules for the ledger:
- It never judges, validates or reveals anything; its code never receives the puzzle's rules or answers.
- Pages persist across reloads.
- **Effects:** "Play this lock again" keeps the page; "Clear this page" clears only that tier's page (after confirmation); "Reset progress" erases every page along with the keys.

**Hints** keep the same structure and cost (Observe, Understand, Begin; −12 each). They now teach case-by-case elimination. Hint 3 works through one wrong case to its contradiction (Bronze: copper; Silver: C; Gold: D) and leaves the remaining cases to the player. The verifier proves each demonstrated elimination is true and is not the answer.

**Deduction Mastery** is an optional honour per tier. It's awarded when a run opens the door with **no hints and at most one wrong attempt**. Identical repeats aren't counted, because they're refused before submission. It's separate from the Bronze, Silver and Gold keys, which can still be earned with unlimited attempts. It is judged only at the moment of a new solve, never from older records.

## Scoring (unchanged)

- A solve starts at 100.
- Each hint costs 12 (three at most).
- Each wrong attempt costs 4, capped at 12.
- Scores are clamped between 0 and 100.
- Retries are unlimited.
- The best score is kept per tier.
- A key is awarded for any solve.
- Hint-free solves are marked ★; Deduction Mastery is marked ◆.

## Tests actually performed (October 17, 2026)

| Suite | Result | Covers |
|---|---|---|
| `verify-three-keys.js` | **46/46 pass** | Unique solution per tier (out of 9, 16 and 125 possible answers); every inscription necessary; solutions unchanged (C · obsidian; B · glass; E · amber/jade); each hint-3 elimination proven true and not the answer; no hint states the full answer; hint order; the Deduction Mastery rule (awarded at 0 or 1 wrong attempts, withheld at 2 wrong, with a hint, or unsolved); `toolkit.js` contains no reference to the solver or checker |
| `test-keyring-compat.js` | **10/10 pass** | v1.0 records load in v1.1 with keys, bests and hint-free intact; no retroactive mastery; new solves earn it; a weaker later run never removes it; export/import keeps it; importing an older file never downgrades; the deployed v1.0 Keyring can import a v1.1 file without losing keys; malformed achievements rejected |
| `verify-mint-scale.js` | **6/6 pass** | Catalogue door 20 configurations (unchanged) |
| `e2e-three-keys.py` (Chromium) | **42/42 pass** | Ledger never touches the Keyring or puzzle state, score, feedback or lock; no judgement wording; pages separate per tier; persistence after reload; keyboard (U/P/X, arrows); clearing affects one tier only; combined wrong-answer feedback; free repeats; mastery earned (Bronze, 1 wrong) and withheld (Silver, 2 wrong; Gold, hints); replaying a solved tier earns mastery and a new best; ledger kept on solve and replay; Gold hint 3 and its cost; Keyring display (stats column, slot count); export/import keeps mastery; malformed import rejected; a v1.0 in-progress save and the playtest's v1.0 Keyring (three solved tiers) load without reset and without retroactive mastery; reset erases keys and ledger; reduced motion; ledger by touch on a phone; no page errors; no horizontal scroll at 1100px (light, dark) and 390px |
| Script syntax | **4/4** | All inline scripts in the built `index.html` parse |

Screenshots were checked at 1100px (light and dark) and 390px.

**Outstanding (not yet done):**
- Human playtesting of the ledger and the new hints.
- Screen readers (NVDA, JAWS, VoiceOver).
- Safari and Firefox.
- Drag-and-drop on real touch devices; tapping is tested in emulation only.
- Testing against the live playtest browser's actual stored data. The compatibility test uses a recreated v1.0 record shaped like that playtest.

## Storage

| Key | Contents |
|---|---|
| `dq-chaortals-keyring-v1` | Shared Keyring, schema 1. v1.1 adds an optional `achievements` object per tier; v1.0 ignores it |
| `dq-chaortal-01-v1` | In-progress state for this door. v1.1 adds `mastery`; v1.0 saves load and are upgraded in place |
| `dq-chaortal-01-notebook-v1` | Ledger pages per tier (only non-default marks, plus notes) |

Everything is validated on load. Invalid data is replaced, never trusted. Storage is browser-local and best-effort.

## Notes on setting

The locksmith, the library and the keys are fiction. The inscriptions are original.
