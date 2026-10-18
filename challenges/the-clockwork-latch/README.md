# Chaortal No. 02 · The Clockwork Latch

**Verb:** ENGAGE · **Discipline:** mechanical reasoning and constraint planning · **Setting:** the machinery chamber of an abandoned alpine clock tower
**Status:** PROTOTYPE, Day #003 (October 18, 2026), for review.
- Not published, and not pushed to GitHub.
- The page carries `robots: noindex,nofollow` and a "Prototype · not published" badge until approved.

> Players should learn how mechanisms work by making them work.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Built, standalone, playable page: one file, no dependencies except Google Fonts |
| `src/index.src.html` | Page source with `/*{{KEYRING}}*/`, `/*{{TOOLKIT}}*/` and `/*{{PUZZLE}}*/` markers |
| `src/mechanics.js` | **The mechanical model:** exact rationals, the physics rules, placement rules, solver, exhaustive census, tier layouts, traps, hints and the mastery rule. One source of truth for the game, the animation and the verifier |
| `../../shared/keyring.js` | Shared Keyring v1.1, unchanged today |
| `../../shared/toolkit.js` | Shared Reasoning Toolkit, now **v1.1**: adds the Log tool; the Notebook is unchanged |
| `../../tools/build.py` | `python3 tools/build.py the-clockwork-latch`. Now accepts `src/mechanics.js` as well as `src/puzzle.js` |
| `../../tools/verify-clockwork.js` | Mechanical verifier: `node tools/verify-clockwork.js` |
| `../../tools/e2e-clockwork.py` | Browser tests: `python3 tools/e2e-clockwork.py [screenshot-dir]` |

## How it plays

The tray holds gears with visible tooth counts, and the wall has axles. Mount gears by picking a tray gear and then an axle, or an axle and then a gear. You can also use the **Axles** list, a set of dropdowns that works fully by keyboard. Press a mounted gear to take it off. **Undo** and **Clear my gears** rearrange freely without restarting the challenge.

- **Turn the crank: free and unlimited.** The solver computes the machine and the gears turn exactly as it says. A readings table gives every axle's exact speed and direction (fractions such as 15/2 rpm), or explains a jam. Every run is written to the Workbench run log.
- **Engage the latch: scored.** If the latch spindle turns at exactly the required speed and direction, the bolt draws back and the door opens. Otherwise the feedback says what the spindle did, and it counts as a failed engagement (−4, capped at −12). Re-engaging an identical failed arrangement is free.

### The three mechanisms (solutions are spoilers)

| Tier | Brief | Positions × tray | Arrangements checked | Buildable | Jams | Working | Minimal design |
|---|---|---|---|---|---|---|---|
| **Bronze · The First Movement** | 20T drive ↻ 12 rpm → fixed 20T latch must turn **↺ 12 rpm** | 3 × [20,20,20,12,16,30] | 86 | 48 | 0 | 4 | A 20 · C 20 (four equal gears in a row) |
| **Silver · The Transmission** | 12T drive ↻ 60 rpm → latch must turn **↻ 30 rpm**; player picks the latch gear | 4 × [12,16,18,24,28,36] | 1,045 | 233 | 0 | 3 | S 36 · latch 24 (the one idler that fits) |
| **Gold · The Clockwork Latch** | 12T drive ↻ 60 rpm → latch must turn **↺ 5 rpm**; compound axle C | 5 × [12,18,24,30,36,42,48] | 9,276 | 1,872 | 3 | 3 | C 48 front / 12 back · I 24 · latch 36 |

**What each tier teaches:**
- **Bronze:** meshing needs an exact fit, and each mesh flips the direction.
  - *The trap:* a single 30-tooth idler on axle B reaches the latch with fewer gears, but turns it clockwise.
  - A neat parity property: with equal gears on these whole-number distances, a two-idler route and a three-idler route can never end at the same latch. So the trap uses a bigger gear.
- **Silver:** in a simple chain, only the first and last gears set the speed (60 × 12 ÷ 24 = 30); the idlers set the direction and must fit their mounts. This matches the catalogue: one idler fits, and the output turns clockwise at 30 rpm.
  - *The trap:* the route over the top (P 12, Q 28) gives the right speed in the wrong direction.
- **Gold:** two-stage reduction, (12/48) × (12/36) = 1/12. The center distances force the gear sizes, and the direction needs one back-layer idler. This matches the catalogue: a compound train, a target direction and speed, limited shaft space.
  - *The near-miss decoy:* the upper route through N (C back 18, N 30, latch 42) turns the right way at 45/7 ≈ 6.43 rpm, not 5.
  - *A real jam:* 36 teeth on N meshes both C's back gear and I, so the triangle disagrees (+5 against −5) and the train locks.

**Alternative valid solutions (documented, not hidden).** Each tier has exactly one minimal design. The other working builds are that design plus harmless extras:
- Bronze: 12, 16 or 20 on B, sitting idle.
- Silver: 12 on Q (idle), or 12 on P. The 12 on P meshes with the drive and spins at −60 rpm, a dead end that never reaches the latch.
- Gold: 18 or 30 on N, sitting idle.

All of these open the door. None earns Clockwork Mastery, which requires the fewest gears.

**Difference from the catalogue (Bronze).** The catalogue says "a fixed train of four equal gears; predict the last gear's direction and set the latch". Today's brief asks Bronze to be built and explored, so the player builds the four-equal-gear train themselves, and the required direction is the "prediction" they have to satisfy. Silver and Gold match the catalogue entries.

## Simplified physical model (also shown in the page's "How the machinery works")

1. All gears share one tooth size, so pitch radius = teeth ÷ 2 units.
2. Two gears mesh only if they're on the same layer and their axles are exactly (T₁ + T₂) ÷ 2 apart. The comparison uses squared integers (4d² against (T₁ + T₂)²), with no square roots or rounding.
3. A gear may not be placed where it would overlap a same-layer gear. Gears on different layers pass freely.
4. Each mesh reverses direction: rpm_driven = − rpm_driver × T_driver ÷ T_driven, in exact fractions.
5. Gears on one axle turn together.
6. A loop that disagrees jams the whole train. A gear connected to nothing stays still.
7. There's no friction, slip, backlash, inertia or tooth-profile geometry. Positive rpm means clockwise as seen from the front.

**Animation follows the solver.** Each gear's angle is phase + rpm × k × t, using the solver's rpm, with k at half real speed. Phases come from the solver's mesh tree so that teeth interlock. For gear B driven by gear A at contact angle θ:

aB = θ + π + (θ − aA) · T_A ÷ T_B − π ÷ T_B

That stays consistent over time because the rates keep the exact ratio. No gameplay value is ever read from the animation.

## Clockwork Mastery ⚙ (per tier, optional, separate from keys)

**Awarded when the latch engages with no hints, no failed engagements, and no more gears than the fewest that can do the job** (Bronze 2, Silver 2, Gold 4, each proven by the census).
- **Test runs are free and never counted**, so exploration is never penalised.
- Mastery rewards an efficient design and engaging only once you're sure.
- It's judged once, at the moment of a successful engagement, and stored in the Keyring under `achievements: { "clockwork-mastery": { at } }`. That's the same structure as Deduction Mastery, with no schema change.

## The Mechanic's Workbench (optional, free)

- **Fit sheet:** a grid of open positions × tray sizes, each cell Uncertain / Possible ✓ / Impossible ✗, with the U / P / X keys and arrow keys. It's the shared Notebook tool.
- **Notes:** calculations and conclusions.
- **Run log:** every crank turn and engagement is recorded as a plain reading, newest first. Each entry can take its own note or be deleted. This is the shared Toolkit's new **Log** tool.
- There's a separate sheet and log per tier, saved across reloads.
- The Toolkit receives only labels and reading text, never rules or answers. A static check in the verifier enforces this.
- Playing a mechanism again keeps its sheet and log; "Reset progress" erases them.

## Scoring (common standard, unchanged)

- A solve starts at 100.
- Hints cost 12 each, three at most, and follow Observe → Understand → Begin.
- Failed engagements cost 4 each, capped at 12.
- Scores are clamped between 0 and 100.
- Retries are unlimited.
- The best score is kept per tier.
- A key is awarded for any solve.
- Hint-free solves are marked ★; Clockwork Mastery is marked ⚙.

## Storage

| Key | Contents |
|---|---|
| `dq-chaortals-keyring-v1` | Shared Keyring (unchanged structure; Door 01 records preserved) |
| `dq-chaortal-02-v1` | This door's state: tier, motion and sound preferences, each tier's build, hints, failed engagements, solved status, score, mastery and run count |
| `dq-chaortal-02-notebook-v1` | Fit sheet and notes per tier |
| `dq-chaortal-02-log-v1` | Run log per tier (up to 60 entries) |

Everything is validated on load. A saved build is re-checked against the tray and the placement rules, and invalid data is replaced.

**Sound** is optional and off by default: soft ticks while the crank turns, and a chime when the latch engages. **Reduced motion:** gears don't spin and the door doesn't animate; readings and outcomes are unchanged.

## Testing

### Automated, executed October 18, 2026

**`verify-clockwork.js`: 43/43 pass.**
- Exact rational arithmetic, including 45/7.
- Each physical rule on a scratch layout: mesh ratio and direction, compound axles, overlap and gap detection, layer separation, a loop jam, a disconnected latch.
- **Every arrangement of every tier enumerated** (86, 1,045 and 9,276 builds), with exactly one minimal design per tier and stored "fewest gears" values matching the census.
- Every other working build is the minimal design plus harmless extras (listed above).
- The placement rule agrees with the solver on **every** arrangement, in two placement orders.
- Fixed gears can't be replaced.
- All three traps behave as documented.
- Each hint's arithmetic claims hold, and no hint names the full design.
- The mastery rule (five cases).
- `toolkit.js` has no access to any door's solver.

**`e2e-clockwork.py` (Playwright/Chromium): 45/45 pass.**
- Door 01 records survive Door 02 play.
- Overlapping placements are refused with a reason.
- The crank is free, and readings match the solver.
- Undo and clear work.
- The trap route's reading.
- Failed-engagement feedback and the −4 penalty; identical repeats are free.
- The cap: three failures reach −12. A collision-refused latch gear correctly never counts.
- Mastery withheld (one failure; an extra idle gear; a hint) and earned (a clean replay; a keyboard-only replay).
- The jam reading, and a jammed train that doesn't move.
- **Animation rates measured from the rendered gears match the solver's 60 : −15 : −15 : 7.5 : −5.**
- Exact fractions shown in readings.
- Hint cost.
- The Keyring slot, export and import of both doors' achievements, and a v1.0-format Keyring loading.
- Corrupt state replaced; reset erases keys, workbench and log.
- The workbench never touches game or Keyring state, is kept per tier, and persists across reloads; log notes persist.
- The return visit restores the tier and penalties.
- Focus moves to the award.
- Touch mounting on a phone.
- Reduced motion: no spinning, but readings still shown.
- No horizontal scroll and no errors at 390px (light) and 1100px (dark).

**Door 01 regression:** `verify-three-keys.js` still 46/46. Door 01's built `index.html` is byte-identical to the approved r1 build; it was not rebuilt.

### Manually verified by me (screenshots)

- All three mechanisms built and running.
- Zoomed contact between the 12- and 48-tooth gears, with teeth interlocking.
- The full page at 1100px, dark mode, and the phone layout.

### Not yet done

- Human playtesting of difficulty, especially whether Gold's reasoning feels fair rather than search-heavy.
- Screen readers (NVDA, JAWS, VoiceOver).
- Safari and Firefox.
- Real touch devices (emulated only).
- Sound, which was not audible in the test environment: it's code-reviewed only.

## Notes on setting

The tower, its clockmaker and the machine are fiction. Gear trains, idlers and compound reductions work as described, within the simplifications listed above.
