# Changelog · Chaortal No. 02 · The Clockwork Latch

## Prototype 1 · October 18, 2026 (DoorQuests Day #003)

### Added
- **The mechanical model first** (`src/mechanics.js`): exact rational solver, placement rules, exhaustive census of every arrangement, and three tiers designed and proven against it before any graphics.
  - **Bronze · The First Movement:** four equal gears, plus a wrong-direction shortcut.
  - **Silver · The Transmission:** the one idler that fits, the latch gear chosen by speed, plus a wrong-direction route.
  - **Gold · The Clockwork Latch:** a two-stage compound reduction to 1/12 with an idler, plus a near-miss decoy (45/7 rpm) and a real jam.
- **Playable machinery:**
  - Gears drawn with their exact tooth counts on front (brass) and back (copper) layers.
  - Click/tap and keyboard mounting, plus an accessible Axles list.
  - Undo and clear.
  - Free test runs with exact readings; scored engagement.
  - An activation sequence: the train turns, the bolt draws back, the door opens.
- **Clockwork Mastery ⚙:** no hints, no failed engagements, fewest gears. Test runs are never counted.
- **The Mechanic's Workbench:** a fit sheet (Notebook), notes, and an automatic run log with per-entry notes.
- **Optional sound** (off by default) and full reduced-motion support.
- **Tests:** `tools/verify-clockwork.js` (43 checks) and `tools/e2e-clockwork.py` (45 checks).

### Shared changes
- **Reasoning Toolkit v1.1** (`shared/toolkit.js`): adds the **Log** tool. The Notebook and all existing behaviour are unchanged.
  - Door 01's published build still embeds v1.0 and was not rebuilt. It would work unchanged with v1.1 if rebuilt.
- **`tools/build.py`** accepts a door's `src/mechanics.js` as well as `src/puzzle.js`.
- **Keyring:** no changes. Door 02 uses the existing optional `achievements` field.

### Found and fixed during verification
- The first draft layouts had no solution (Silver, Gold) or a decoy axle that could never mesh (Bronze). All three were redesigned through a systematic search.
- One Bronze hint gave the route away and was reworded.
- The Gold "needs 5 rpm" marker overlapped the latch gear and was moved above the bolt.
