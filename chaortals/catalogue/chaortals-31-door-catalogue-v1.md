# DoorQuests — Chaortals 31-Door Catalogue

**Version:** 1.0
**Date:** October 17, 2026
**Status:** COMPLETE — APPROVED (design baseline)
**Repository path:** `chaortals/catalogue/chaortals-31-door-catalogue-v1.md`
**Companion:** `chaortals/architecture/chaortals-foundation-v1.md` (approved foundation, preserved unchanged)

> **Approval convention:** COMPLETE — APPROVED applies to this catalogue as a design baseline. It does **not** mean any individual puzzle has been implemented, solver-validated or playtested. Each door passes the foundation's QA gates (§8) separately before publication.

**Chaortals — Unlock the Impossible.** Thirty-one directly interactive puzzle doors. In each one the player manipulates a mechanism, learns its rules, overcomes its constraints and opens something that first seemed impossible.

## 1. Decisions recorded with this catalogue

These decisions were approved on October 17, 2026. They extend the foundation document.

1. **Three independently playable tiers per door.**
   - Bronze: understand the principle.
   - Silver: apply and combine it.
   - Gold: demonstrate mastery.

   Gold demands more sophisticated reasoning, never artificial time pressure or tedious repetition. Any tier may be attempted, and Bronze is recommended first.

2. **Common scoring standard.**
   - A solve starts at 100.
   - Three optional progressive hints cost 12 each.
   - Incorrect-attempt penalties are puzzle-specific, capped at 12 in total.
   - Scores are clamped between 0 and 100.
   - Retries are unlimited.
   - A personal best is kept per tier.
   - A key is earned by solving, not by scoring.
   - Hint-free solves are marked distinctly in the Keyring.
   - The worst ordinary outcome, 52 (three hints plus maximum penalties), is accepted.
   - **Exception:** Gold of *The Room That Changed* lets the player review the original scene for **8 points per review**, outside the 12-point cap.

3. **Hints teach rather than solve.** They follow the foundation's sequence: Observe, then Understand, then Begin.

4. **DoorQuests Keyring.** This is one shared, reusable achievement system for all 31 doors.
   - Each door awards one key whose appearance upgrades Bronze → Silver → Gold.
   - Tracked per tier: completion, personal best, hints used, hint-free status and attempts.
   - Progress is stored locally in the browser, with JSON export and import. There are no mandatory accounts.

5. **Reasoning, not guessing.** Wherever a door has a "which one?" answer, the player must also commit to *why*. *The Door of Three Keys* requires both the true inscription and the key or keys. Feedback after a wrong attempt addresses only the combined answer. It never says which part was right.

6. **Door 31** is independently accessible and solvable. Keys from doors 1–30 may give clues, shortcuts or extra discoveries, never required access.

7. **Verified solutions.** Every mechanically or mathematically generated puzzle has a verified solution. Where uniqueness is required, it's confirmed programmatically, and the verification scripts live in `chaortals/tools/`.

## 2. How to read an entry

Each door lists:
- its number, title and **verb** (the action word on the door);
- its **setting** (the environment and story wrapper);
- its **discipline** (the kind of thinking it tests);
- its Bronze / Silver / Gold objectives;
- its **validation**: what must be proven before the door is called playable.

Real places, objects and practices are used as settings. Every person, event and puzzle scenario is fictional unless noted. Each door's companion notes will flag what's real and what's invented, as the Cluortals do.

## 3. The 31 doors

### Pilot doors (built first, per the foundation)

| # | Title | Verb | Setting | Discipline |
|---|---|---|---|---|
| 01 | The Door of Three Keys | DEDUCE | The candlelit library of a forgotten locksmith | Truth-and-lie logic |
| 02 | The Clockwork Latch | ENGAGE | An abandoned alpine clock tower | Mechanical reasoning, constraint planning |
| 03 | The Room That Changed | NOTICE | A rain-soaked 1920s hotel suite | Observation, memory, comparison |

**01 · The Door of Three Keys · DEDUCE**
- **Bronze:** Three keys and three inscriptions. "Exactly one inscription speaks truth." Name the true inscription *and* the key. Solution: inscription C, the obsidian key, as approved in the foundation.
- **Silver:** Four keys and four inscriptions using *if/then*, negation, *neither/nor* and *exactly one of*. Same two-part answer.
- **Gold:** Two locks and five keys. Each lock takes a different key, and five inscriptions refer to both locks. Name the true inscription, the upper key and the lower key.
- **Validation:** Done for Prototype A (`tools/verify-three-keys.js`). Each tier has exactly one consistent world. The checker accepts exactly 1 of 9 / 16 / 125 possible answers. Every inscription is necessary.

**02 · The Clockwork Latch · ENGAGE**
- **Bronze:** A fixed train of four equal gears. Predict the last gear's direction and set the latch.
- **Silver:** A 12-tooth driver at 60 RPM, a replaceable idler and a 24-tooth output. Choose the one idler that fits the mounts; the output turns clockwise at 30 RPM.
- **Gold:** A compound train with a shared axle. Build to a target direction and RPM within limited shaft space.
- **Validation:** A signed-rational gear solver. Enumerate every selectable configuration. Reject floating gears and contradictory cycles. Animation must be driven by solver output.

**03 · The Room That Changed · NOTICE**
- **Bronze:** Eight labelled objects, one moved.
- **Silver:** Twelve objects; one replaced and one re-oriented, each to be classified.
- **Gold:** Sixteen objects across two rooms; one moved, one replaced, one removed, plus one prominent unchanged distraction. Reviewing the original costs 8 points per review.
- **Validation:** Before and after states held as structured data. An authoring check confirms exactly 1 / 2 / 3 intended changes and no incidental differences. A written inventory and comparison mode are required.

### Doors 04–30

| # | Title | Verb | Setting | Discipline |
|---|---|---|---|---|
| 04 | The Mirror Gate | REFLECT | A Venetian glassworks, 1600s | Spatial reflection |
| 05 | The Cistern Valve | MEASURE | The Basilica Cistern, Constantinople | Arithmetic, state planning |
| 06 | The Ferryman's Lock | PLAN | A fog-bound Dutch canal, 1650 | Constraint planning |
| 07 | The Lantern Bridge | ESCORT | An Andean rope bridge | Optimization |
| 08 | The Tumbler Lock | PROBE | A Chicago safe-maker's shop, 1890s | Deduction from feedback |
| 09 | The Switchboard Door | TOGGLE | A telephone exchange, 1940s | Toggle logic, linear systems |
| 10 | The Cipher Disk | DECODE | Renaissance Florence | Cryptography |
| 11 | The Shatranj Gallery | TRAVERSE | A Persian palace hall | Spatial pathfinding |
| 12 | The Lens Cradles | TRANSFER | A lighthouse lens workshop | Recursion |
| 13 | The Ringing Chamber | CHIME | An English bell tower | Permutations |
| 14 | The Jacquard Card | REVEAL | A silk mill in Lyon, 1804 | Picture logic |
| 15 | The Alhambra Arch | FIT | Nasrid Granada, 1300s | Tiling, spatial packing |
| 16 | The Observatory Stair | CONTINUE | El Caracol, Chichén Itzá | Sequences, number systems |
| 17 | The Fortune Booth | CHOOSE | A 1920s carnival | Probability |
| 18 | The Telegraph Tower | ENCODE | A semaphore telegraph tower, 1830s | Binary, error correction |
| 19 | The Star Compass | ORIENT | A Polynesian voyaging canoe | Navigation, geometry |
| 20 | The Mint Warden's Scale | WEIGH | The Royal Mint, London, 1696 | Deduction under limits |
| 21 | The Two Wardens | ASK | An Edo-era checkpoint | One-question logic |
| 22 | The Calendar Door | RECKON | A medieval monastery calculating Easter dates | Logic over time, calendars |
| 23 | The Rule Keeper | INFER | A Pythagorean school | Inductive rule discovery |
| 24 | The Hundred Shutters | PASS | Amsterdam canal houses | Number theory |
| 25 | The Self-Counting Ledger | BALANCE | Pacioli's Venice, 1494 | Self-reference |
| 26 | The Masked Line | STRATEGIZE | A Venetian carnival | Team strategy, modular arithmetic |
| 27 | The Seven Seals | ARRANGE | A Byzantine scriptorium | Grid deduction |
| 28 | The Scroll Cases | SLIDE | The Library of Alexandria | Sliding-block planning |
| 29 | The Turning Labyrinth | ROTATE | Knossos | Dynamic maze planning |
| 30 | The Shadow Stage | CAST | A Javanese wayang shadow theatre | Projection, 3D reasoning |

**04 · The Mirror Gate · REFLECT**
- **Bronze:** Rotate and flip glass tiles until they match the gate's reflection.
- **Silver:** Angle a set of mirrors to carry a beam of light to the lock.
- **Gold:** Two beams with labelled colour filters must reach two receivers without either beam touching a forbidden plate.
- **Validation:** Grid ray-tracing solver; prove at least one solution per tier. Colours always carry text labels.

**05 · The Cistern Valve · MEASURE**
- **Bronze:** Two vessels; measure an exact amount.
- **Silver:** Three vessels; reach the target in the fewest pours.
- **Gold:** Vessels joined by one-way valves; two vessels must reach their targets at the same time.
- **Validation:** Breadth-first search over fill states proves reachability and the minimum pour count for each tier. Use original capacities, not the classic 3/5/4.

**06 · The Ferryman's Lock · PLAN**
- **Bronze:** Ferry cargo with conflict rules (which items can't be left together).
- **Silver:** A two-seat ferry with a weight limit.
- **Gold:** Two ferries and a canal lock whose water level must be raised or lowered between crossings.
- **Validation:** State-space search proves solvability and the minimum number of crossings. The cast and rules are original, not wolf, goat and cabbage.

**07 · The Lantern Bridge · ESCORT**
- **Bronze:** Three travellers and one lantern.
- **Silver:** Four travellers within a time budget.
- **Gold:** Five travellers, a weight limit and a lantern oil budget; reach the proven minimum time.
- **Validation:** Exhaustive search gives the optimum for each tier. The time budget must equal the optimum exactly, so it's achievable but not loose.

**08 · The Tumbler Lock · PROBE**
- **Bronze:** Three pins with click feedback.
- **Silver:** Four pins, repeats allowed.
- **Gold:** Five pins with high/low feedback.
- **Scoring:** based on probes used; there's no hard attempt limit.
- **Validation:** Prove each tier's code can be identified with a stated worst-case number of probes, and that feedback is deterministic and unambiguous.

**09 · The Switchboard Door · TOGGLE**
- **Bronze:** A 3×3 grid of lamps; turn every lamp off.
- **Silver:** Irregular wiring: each switch's effect is shown, but it isn't the neighbour pattern.
- **Gold:** The player chooses where the patch cords go, then solves the board.
- **Validation:** Linear algebra over two values (on/off, GF(2)) proves each board is solvable and gives the minimum number of presses.

**10 · The Cipher Disk · DECODE**
- **Bronze:** Find a Caesar-style shift from a known word on the door.
- **Silver:** An Alberti-style disk whose index changes mid-message, with change markers visible.
- **Gold:** A polyalphabetic cipher whose key word is hidden in the room's objects.
- **Validation:** The ciphertext decrypts to exactly one meaningful plaintext. The key can be derived from visible clues. Typed answers are matched case- and space-insensitively.

**11 · The Shatranj Gallery · TRAVERSE**
- **Bronze:** A knight's-move tour of the lit tiles.
- **Silver:** Add the alfil, the historical "elephant" piece that jumps two squares diagonally.
- **Gold:** Two pieces moving in turn, with blocked tiles.
- **Validation:** Backtracking or search proves at least one tour per tier; the movement rules are shown on screen.

**12 · The Lens Cradles · TRANSFER**
- **Bronze:** Move lens rings between cradles in the minimum number of moves, with the size rule stated.
- **Silver:** Four cradles.
- **Gold:** Two-coloured rings that must end in alternating order.
- **Validation:** Compute the minimum move counts by search; the move counter compares the player's count with the optimum.

**13 · The Ringing Chamber · CHIME**
- **Bronze:** Continue a simple change-ringing pattern by one row.
- **Silver:** Follow the pattern through a called change.
- **Gold:** Complete a full sequence (an "extent") with no row repeated.
- **Accessibility:** Bells are numbered and shown as rows; sound is optional throughout.
- **Validation:** The change-ringing rules are enforced exactly (each bell moves at most one place per row); no-repeat checking is automatic. Real practice: English change ringing.

**14 · The Jacquard Card · REVEAL**
- **Bronze:** Punch the card from its row and column counts.
- **Silver:** Two colours.
- **Gold:** The card must also be symmetrical.
- **Validation:** A line-solver proves a unique picture for each tier without guessing. Colours carry labels or patterns.

**15 · The Alhambra Arch · FIT**
- **Bronze:** Five tiles.
- **Silver:** Eight tiles, with rotations.
- **Gold:** The tiling must also form a required colour pattern.
- **Validation:** An exact-cover solver proves at least one tiling. Tile shapes are original.

**16 · The Observatory Stair · CONTINUE**
- **Bronze:** Give the next term, written in Maya bar-and-dot numerals.
- **Silver:** Two sequences interleaved.
- **Gold:** Each term describes the one before.
- **Validation:** Every tier's rule produces exactly one defensible next term, which needs a human review panel as well as code. The Maya numerals are base-20 and must be accurate.

**17 · The Fortune Booth · CHOOSE**
- **Bronze:** Switch or stay? Run trials, then answer.
- **Silver:** Five curtains, two opened by the host.
- **Gold:** A host with a stated bias; give the exact probability as a fraction.
- **Validation:** Exact probabilities calculated symbolically. The host's rules are fully stated, with no hidden behaviour. Any trial simulator uses a stored seed (foundation §7).

**18 · The Telegraph Tower · ENCODE**
- **Bronze:** Read rows of lamps as bits and decode a word.
- **Silver:** Decode signal-arm positions using a codebook.
- **Gold:** Find and correct the one flipped bit using check bits.
- **Validation:** The code's distance guarantees exactly one correctable error in Gold. Real practice: optical telegraphs of the 1830s.

**19 · The Star Compass · ORIENT**
- **Bronze:** Find north from shadows.
- **Silver:** Use star rising bearings.
- **Gold:** Steer to the island allowing for current drift.
- **Validation:** Geometry checked numerically with a tolerance band stated in the rules. Real practice: Polynesian star-compass navigation, presented respectfully, with simplification acknowledged.

**20 · The Mint Warden's Scale · WEIGH** (configuration corrected)
- **Bronze:** **4 coins, the fake is known to be heavier, 2 weighings.**
- **Silver:** **9 coins, the fake is known to be heavier, 2 weighings.** This is the exact limit, and it teaches splitting into thirds.
- **Gold:** **12 coins, the fake is heavier *or* lighter, 3 weighings.** The player must name the coin and whether it's heavy or light.
- **The adversarial warden:** the warden decides which coin is fake as late as possible. Every scale result is chosen consistently from the rules stated on screen, so only a guaranteed strategy succeeds and nothing is random.
- **Correction:** the earlier draft's Silver (9 coins, heavier or lighter, 2 weighings) is **impossible**: there are 18 possibilities but only 9 outcomes from two weighings.
- **Validation:** Done for the configuration (`tools/verify-mint-scale.js`). The solver proves tiers 4H/2 ✓, 9H/2 ✓ and 12±/3 ✓. It confirms 9±/2 ✗, 10H/2 ✗ and 13±/3 ✗ (with direction required) are rejected. The interactive engine still needs its own tests.

**21 · The Two Wardens · ASK**
- **Bronze:** Build your one question for a liar and a truth-teller from offered parts.
- **Silver:** The wardens answer in two unknown words, one meaning yes and one meaning no.
- **Gold:** Three wardens, one of whom alternates between truth and lies on a stated pattern.
- **Validation:** Questions are built only from structured parts (no typing). Each tier's correct question is proven to work in every world by enumeration. There are no random answerers, per the foundation's no-hidden-randomness rule.

**22 · The Calendar Door · RECKON**
- **Bronze:** The door lies on set days of the week; work out today from what it says.
- **Silver:** Two doors with different lying days.
- **Gold:** Reconcile their claims with a monastery's date table for calculating Easter.
- **Validation:** Enumerating all days gives exactly one consistent day per tier. Real practice: medieval methods for calculating the date of Easter.

**23 · The Rule Keeper · INFER**
- **Bronze:** Lay pebble rows; the keeper says yes or no. Find the rule.
- **Silver:** A compound rule.
- **Gold:** A rule over shape and count; prove it by predicting 5 test rows correctly.
- **Validation:** The player names the rule from a solver-distinct menu, or by predicting tests. The tests must tell apart every menu rule that agrees with the examples given so far.

**24 · The Hundred Shutters · PASS**
- **Bronze:** Ten shutters; step through each pass.
- **Silver:** Predict the result for 100 shutters.
- **Gold:** A changed toggling rule; predict how many stay open and justify it with a pattern choice.
- **Validation:** Results computed directly; the justification menu is checked against the same computation.

**25 · The Self-Counting Ledger · BALANCE**
- **Bronze:** A 4-digit number that counts its own digits.
- **Silver:** A short sentence that counts its own letters, with blanks to fill.
- **Gold:** The 10-digit version.
- **Validation:** Exhaustive search confirms the full solution set for each tier (Bronze has two 4-digit solutions, 1210 and 2020, so accept both or constrain to one). Silver's sentence is checked by direct count.

**26 · The Masked Line · STRATEGIZE**
- **Bronze:** Write a policy for 3 masks.
- **Silver:** A line of 6 in which 5 are saved.
- **Gold:** Three colours, using arithmetic on remainders (modular arithmetic).
- **Validation:** The engine tests the player's policy against every arrangement and reports the worst case. Policies are built from offered parts.

**27 · The Seven Seals · ARRANGE**
- **Bronze:** A 3×3 grid.
- **Silver:** 5 items with 4 attributes.
- **Gold:** 7 seals and 15 clues.
- **Validation:** A constraint solver proves a unique solution and that every clue is needed.

**28 · The Scroll Cases · SLIDE**
- **Bronze:** Free a small case.
- **Silver:** Free the great case.
- **Gold:** Reach the proven minimum number of moves.
- **Validation:** Breadth-first search proves solvability and the optimum move count. Layouts are original.

**29 · The Turning Labyrinth · ROTATE**
- **Bronze:** One ring turns with each move, by a stated rule.
- **Silver:** Two rings turning in opposite directions.
- **Gold:** Also collect three tokens.
- **Validation:** Search over position and ring state proves solvability and the optimum. The rotation rule is always stated and never changes silently.

**30 · The Shadow Stage · CAST**
- **Bronze:** Pose a figure so its shadow matches one silhouette.
- **Silver:** Match the shadows from two lamps at once.
- **Gold:** Build a 3D shape from three shadows.
- **Validation:** A block-based (voxel) solver proves the target shadows can be made and checks whether the answer is unique. If several shapes work, accept all of them. Real practice: Javanese wayang kulit shadow puppetry, the setting only.

### Finale

**31 · The Impossible Door · UNLOCK**
- **Setting:** A threshold beyond every door.
- **Discipline:** A meta-puzzle that combines disciplines.
- **Bronze, Silver, Gold:** Each is solvable without any prior keys. Keys from doors 1–30 reveal clues, shortcuts or extra discoveries, never required access.
- **Validation:** Deferred to the end of the series (foundation §10). It must be proven solvable with an empty Keyring.

## 4. Open validation requirements

| Item | Status |
|---|---|
| 01 Three Keys: uniqueness, two-part checker, necessity of every inscription | **Verified** (`tools/verify-three-keys.js`) |
| 20 Mint Warden: tier configurations solvable, impossible draft rejected | **Verified for configuration** (`tools/verify-mint-scale.js`); engine still untested |
| 02 Clockwork: Silver and Gold configurations | Open: build solver, enumerate builds |
| 03 Room That Changed: exact change counts per tier | Open: authoring diff check |
| 04–19, 21–30: solvers listed per door | Open |
| 13, 16, 19, 30: real practices (change ringing, Maya numerals, star compass, wayang) | Open: accuracy and cultural review |
| 16, 23: "one defensible answer" | Open: human review panel as well as code |
| 25 Bronze has two solutions (1210, 2020) | Open: accept both or add a constraint |
| 31 The Impossible Door | Deferred: symbol system and final puzzle |
| All doors: tier difficulty estimates | Open: real playtests (foundation §2) |
| Keyring: export/import merge, malformed-data rejection | Implemented in Prototype A; needs review |

## 5. Shared architecture notes

- **Keyring.** The canonical module is `chaortals/shared/keyring.js`. It is inlined into each door's single `index.html` at build time, so every door stays a standalone file while sharing one implementation.
  - Storage envelope: `dq-chaortals-keyring-v1`. Per-door puzzle state: `dq-chaortal-NN-v1`.
- **Puzzle definitions.** Each door's tiers live in a data file (`src/puzzle.js`) shared by the page and its verifier, so the game, the hints and the proof can't drift apart.
- **Paths.** Each door is published at `challenges/<slug>/index.html`, with a companion README.
