# Changelog · Chaortal No. 01 · The Door of Three Keys

## Refinement 1 · October 17, 2026 (after the first human playtest)

**Why:** the playtester solved Gold in 16 attempts largely by trial and error. New principle: *Chaortals reward persistence, but teach reasoning.*

### Added
- **The Investigator's Ledger:** an optional, free parchment notebook with a separate page per tier.
  - Bronze and Silver pages: Inscriptions and Keys lists, plus a *Cases* grid (one row per "if this inscription is true").
  - Gold page: Inscriptions list and a key × lock grid (Upper / Lower / Neither).
  - Every page: free notes.
  - Marks are Uncertain, Possible ✓ or Impossible ✗, set by mouse, touch or keyboard (U / P / X and the arrow keys).
  - It never validates, hints or reveals; its code receives only labels.
  - Pages persist across reloads. "Play this lock again" keeps the page, "Clear this page" clears one tier, and "Reset progress" clears all.
- **Deduction Mastery ◆:** an optional honour per tier for solving with 0 hints and at most 1 wrong attempt in that run.
  - It appears on the completion screen, the tier buttons, the Keyring stats table and the Keyring slot.
  - It's separate from the keys and never awarded retroactively.
- **Shared Reasoning Toolkit v1** (`shared/toolkit.js`): the reusable Notebook framework, plus an achievement standard (`DQToolkit.judge`) that lets each door define mastery in its own terms.
- **Keyring v1.1** (`shared/keyring.js`): an optional per-tier `achievements` field. The storage schema stays 1. v1.0 records load unchanged, and v1.0 builds ignore the new field. Import merges achievements and never removes them.
- **Tests:** checkable hint claims in `puzzle.js`, plus the `test-keyring-compat.js`, `e2e-three-keys.py` and `fixtures/` files.

### Changed
- **Hints**, for all three tiers. They keep the same structure and cost but now teach case-by-case elimination: assume one inscription is the true one, turn the false ones into facts, and test for contradiction. Hint 3 demonstrates one verified elimination (Bronze: copper; Silver: C; Gold: D) and leaves the rest to the player.
- **Keyring display:** a Deduction Mastery column on the stats table, which scrolls within its own box on narrow screens, and a mastery count on the slot.
- **Badge:** "Prototype · not published" is now "Prototype · playtest build".

### Unchanged
- The library scene.
- All three puzzles and their solutions (verified).
- The two-part answer rule and combined feedback.
- Scoring, penalties and the 12-point cap.
- Unlimited retries.
- Key upgrades.
- Export and import.
- Keyboard support, responsive layout and reduced motion.
- The standalone single-file build.
- Existing storage keys: earned keys, bests and hint-free marks survive.
