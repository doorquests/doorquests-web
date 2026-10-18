# DoorQuests — Chaortals Foundation and Prototype Design

**Version:** 1.0  
**Date:** October 17, 2026  
**Status:** COMPLETE — APPROVED (design baseline; prototypes not yet implemented)  
**Repository:** `doorquests/doorquests-web`  
**Recommended future document path:** `chaortals/architecture/chaortals-foundation-v1.md`  
**Proposed prototype paths:** `challenges/the-door-of-three-keys/index.html`, `challenges/the-clockwork-latch/index.html`, `challenges/the-room-that-changed/index.html`  
**Publication note:** This document is a design artifact; no website or repository changes are made by this document.

## 1. Mission and relationship to DoorQuests

**Chaortals — Unlock the Impossible.** These are directly interactive puzzle-door experiences. Unlike Doortals (branching stories) or Cluortals (evidence-based mysteries), a Chaortal centers on understanding, manipulating and ultimately opening a unique lock or obstacle. The environment, mechanism and solution all support that goal. 31 Chaortals are intended, one for each numbered door, with the 31st serving as a cross-collection finale.

The initial design catalogue derives from the supplied Claude discussion *Chortals.docx* (including its proposed names **The Door of Three Keys**, **The Clockwork Latch**, and **The Room That Changed**). This document develops the mechanics, production standards, achievements, and prototype specifications beyond that discussion.

### Approved design choices

1. **Three tiers per door:** Bronze / Silver / Gold, progressively harder but all accessible directly.
2. **Distinct environments:** Different visual setting and story wrapper for every Chaortal, with consistent interaction conventions.
3. **Keyring, scores and optional hints:** Track personal bests and tier completions in the browser, with graduated hints and nonpunitive replay.

### Design principles

- The puzzle is the activity, not merely a multiple-choice question about a puzzle.
- Show the goal, controls, rules and current state before requiring a move.
- Each tier introduces a meaningful new reasoning demand; Gold is not just an unfair timer.
- Every puzzle must be demonstrably solvable from the information visible to the player.
- Never change the rules silently. No hidden random outcomes, ambiguous solution criteria or compulsory guesswork.
- Undo, reset tier, keyboard/touch support, reduced motion and accessible non-audio alternatives are standard.
- Hints are educational; hints reduce scores but never block unlocking a key.
- The finale is accessible without having completed the first 30 doors; previous keys give clues or elegant shortcuts, not mandatory access permission.
- Original execution matters: familiar puzzle categories are inspiration, not an excuse to copy standard puzzles without new interactive design.

## 2. Standard Chaortal experience

**Door selection → environment/briefing → tier selection → playable puzzle → validation/unlock → result/keyring → retry or upgrade.**

A visitor opens a numbered Chaortal from the landing page or Daily Chaortal feature. A brief story wrapper establishes what the lock controls and what opens when solved. Bronze, Silver and Gold present meaningful distinct configurations, with direct tier selection permitted. Persistent state records attempts and personal-best solutions without requiring accounts.

### Tier standards

| Tier | Player objective | Complexity guideline | Expected feeling |
|---|---|---|---|
| Bronze | Discover and apply a single rule | Guided introduction, few moving parts | “I understand it.” |
| Silver | Combine rules or reason several moves ahead | More components, less guidance | “I can work it out.” |
| Gold | Demonstrate mastery using constraints, efficiency or multiple interacting systems | Hard but deterministic and verified | “I earned that.” |

Difficulty estimates will be validated by real player testing rather than solely by item count or developer judgment. No mandatory countdown clock in the initial prototypes. Optional timed challenges may follow after baseline usability testing.

## 3. Keyring and completion model

Each of the 31 doors awards one collectible key at its highest completed tier; previous tier achievements remain independently recorded. A Gold key denotes completion of Gold, not perfect points. A player can collect keys in any order and redo completed challenges without losing progress. Every key should have a recognizable door-specific emblem as well as a text label and distinguishable shape, so achievement tiers are never color-only.

### Suggested browser storage

- Keyring envelope: `dq-chaortals-keyring-v1`.
- Per-door puzzle state: `dq-chaortal-01-v1`, `dq-chaortal-02-v1`, etc.
- Saved fields: schema version; door id; per-tier completed status; attempts; high score; least moves; hints revealed; last-played time; saved puzzle configuration; and an optional finale clue token.
- Browser storage is best-effort and local to a browser profile. No claim that keys are transferable across devices until actual account sync exists.
- Provide user-controlled **Export Keyring** and **Import Keyring** actions (JSON file), schema validation, and an explicit Reset Progress confirmation. Imported progress should merge without downgrading higher earned keys, and untrusted input must be validated.
- Do not depend on Keyring state to ensure the validity of a solution; puzzle engines independently validate success.

### Scoring (proposed baseline)

- On successful solve, base score = **100**.
- First, second and third hints each reduce score by **12**; multiple open hints produce cumulative deductions.
- Wrong submissions or invalid moves may carry an **explicit, small** penalty where appropriate, capped at 12 total. For puzzles solved through exploration, do not punish reversible experimentation arbitrarily.
- Score is clamped between 0 and 100. A solution always earns its tier key even with hints and a low score.
- Preserve the best score earned *for that tier*, as well as lowest legal move count when the puzzle meaningfully has moves.
- The score system is a first-playtest baseline, not a published competitive ranking or leaderboard.

### Hints

1. **Observe:** identify a pattern or element worth inspecting.
2. **Understand:** explain a rule or relationship.
3. **Begin:** disclose a first productive deduction or move, but do not simply play the whole puzzle for the user.

Hints are available by an explicit action; do not automatically interrupt. Accessible text explanations are required even for highly visual mechanics.

## 4. Prototype 01 — The Door of Three Keys

**Core thinking:** truth-and-lie deduction.  
**Environment:** candlelit library of a forgotten locksmith, with three oversized keys in a velvet-lined cabinet and inscriptions above a carved oak door.  
**Distinctive verb on door:** **DEDUCE**.  
**Player action:** read inscriptions, select the candidate key, turn it, receive clear feedback and see the lock open. Keys are tangible objects, not just radio options. An accessible control list mirrors drag/click interaction.

### Bronze — One true inscription

Display **copper, silver and obsidian** keys. The lockplate says **“Exactly one inscription speaks truth.”** Inscriptions:

- A: “The copper key opens this door.”
- B: “Either copper or silver opens this door.”
- C: “Either silver or obsidian opens this door.”

Assuming exactly one key opens the door: copper produces two true statements (A and B), silver produces two (B and C), and obsidian produces only one (C). **Verified unique solution: obsidian.** Show this explanation after successful completion, never before.

### Silver — Conditional statements

Four keys; four clearly worded inscriptions using simple *if/then*, negation and *exactly one* constraints. Selecting each key highlights which assertions would be true **only after the player commits to a test**, helping them learn conditional reasoning. Author an explicit truth table and automatically verify there is exactly one valid key before a puzzle is shipped. No ambiguous everyday-language implications.

### Gold — Linked lock chambers

Two linked locks, five keys and a small set of inscriptions referring to both locks. Players choose a sequence of two different keys under a single consistent truth-count rule. The puzzle engine enumerates every legal ordered pair and proves a **unique solution** before release. Do not conflate deduction difficulty with an arbitrary attempt limit.

**Engine specification:** plain structured rule predicates evaluated against candidate assignments; validation enumerates the full finite state space. Hints draw on the same predicates as the solver, preventing contradicting explanations. Bronze is fixed; Silver and Gold may later support curated, solver-checked variations.

**Accessibility and feedback:** keys respond to click, keyboard selection or drag; descriptions of texture/symbols supplement colors; invalid submissions show which rule was contradicted only after a deliberate check action.

## 5. Prototype 02 — The Clockwork Latch

**Core thinking:** mechanical reasoning and constraint planning.  
**Environment:** abandoned alpine clock tower, brass gear train visible through a glass face, with a vault door behind the final spindle.  
**Distinctive verb:** **ENGAGE**.  
**Player action:** tap or drag gears into mounts, choose gear sizes, then run the mechanism. Animated gears are accompanied by a readable direction/speed diagram and an explicit motor-start control.

### Mechanical model (deterministic)

- For two external meshing gears A and B: **direction reverses**, and `rpm_B = -rpm_A × teeth_A / teeth_B` (signed RPM).
- Gears on the **same rigid axle** have identical signed RPM; distinguish this from gears merely touching each other.
- The engine uses a graph of shafts/meshes, verifies consistency and checks final spindle direction and speed against target criteria.
- Disallow physically incompatible configurations, unmounted floating gears and contradictory cycles before submission.

### Bronze — Direction only

A fixed chain of **four equal-tooth gears**, with the first driven clockwise. Each of the three external meshes reverses direction, so the last gear turns **counterclockwise**. Players activate the drive and position the final directional latch accordingly. Direction has text and arrows, not just animation.

### Silver — Ratios and replacement

A motor drives a 12-tooth gear clockwise at 60 RPM. A replaceable intermediate gear meshes with it and with a 24-tooth output gear. Two external meshes mean the output rotates **clockwise at 30 RPM** regardless of intermediate gear tooth count, provided the chosen gear physically fits both mounts. Include exactly one permitted wheel that fits the fixed mounting geometry, and make the geometry explicit. The player must recognize that intermediate tooth count cancels from the overall ideal ratio but installation constraints still matter. A solver validates allowable mount positions and teeth.

### Gold — Compound gear train

Two gears share an axle, followed by a second mesh to the output. Players must choose gear sizes and placements to reach a specified **direction and RPM target** under limited shaft space. A finite configuration solver should enumerate all valid builds and reject impossible configurations before they ship. The player can inspect the computed angular velocities after running a test, then refine the mechanism; target feedback should not reveal the full solution prematurely.

**Prototype validation:** test exact signed rational gear ratios, zero/missing meshes, two gears on one axle, invalid cycles and every selectable configuration. Confirm SVG/CSS animation reflects solver outputs rather than calculating gameplay from animation frames. Provide a reduce-motion/static mode.

## 6. Prototype 03 — The Room That Changed

**Core thinking:** visual observation, memory, and careful comparison.  
**Environment:** a rain-soaked 1920s hotel suite whose furnishings subtly change when an antique room bell rings.  
**Distinctive verb:** **NOTICE**.  
**Player action:** inspect the first room, ring the bell to show its altered state, and identify changes using clickable objects or a keyboard-accessible inventory. The game records **what** changed, not merely where the player clicked.

### Bronze — One change

A room with eight distinct labeled objects. After the bell, exactly **one object moves** between predetermined positions. Example: the brass desk lamp shifts from the left side to the right side of the writing desk; no other object changes. The correct answer is selecting the lamp and **Moved**. There is no speed requirement or punitive visual flashing.

### Silver — Multiple kinds of change

Twelve observable objects; **two changes**, one replacement and one orientation change. Example: a framed map is replaced by a sketch, and a chair turns toward the window. The player must classify each change accurately. Ensure décor, lighting transitions and resizing do not accidentally create unintended apparent changes.

### Gold — Cross-scene memory and exclusion

Sixteen clearly labeled objects across two connected rooms; **three meaningful changes** involving a moved item, a replacement and a removal. Include one deliberately prominent *unchanged* distraction. Players must identify the three items and change types, but are allowed to review the original at a cost to their score rather than facing a permanent lockout. No visual acuity test is allowed to masquerade as a reasoning challenge.

**Fairness requirements:** always offer a written object inventory and an accessible before/after comparison mode. No requirement to distinguish hues without labels. Avoid hiding tiny one-pixel changes or motion-only clues. Object state is explicit structured data; the renderer must not introduce random incidental differences. An authoring validation check compares the two states to ensure **exactly** 1/2/3 intended changes per tier.

## 7. Common technical architecture

The existing standalone HTML/JS/CSS model used by DoorQuests can serve the first three prototypes. No accounts, backend or infrastructure migration is required for MVP.

**Per-game parts:** story/environment theme; tier definitions; puzzle rules; player interaction model; solver/validator; hints; result/achievement view.  
**Shared contracts:** `getTier(id)`, `init(seed)`, `apply(action)`, `undo()`, `getHint(level)`, `validate(state)`, `getResult()`; normalized save state with schema version; a shared Keyring adapter; accessible controls. These are suggested interfaces, not code implemented today.

**Reproducibility:** all randomized variations use a stored seed. Static puzzles have fixed authored solutions. Deterministic engines allow repeatable bug reports and independent test runs.

**Security / integrity:** browser-only achievements are for personal enjoyment, not cryptographically verified credentials. Avoid advertising them as cheat-proof. Future server sync, accounts or competitive leaderboards require separate anti-tamper design and privacy review.

## 8. Quality-assurance gates

Before publishing any Chaortal:

1. **Content gate:** three original tiers, consistent instructions, coherent environment, no unsolvable or misleading clue.
2. **Solver gate:** programmatically enumerate small puzzles or solve constrained configurations; prove required existence and uniqueness or explicitly permit several valid solutions.
3. **State gate:** all legal interactions, undo, restart, resume, retries and tier switching preserve invariants.
4. **Hints gate:** each hint is true and progressive for the exact current puzzle variant; never reveal invalid or contradictory guidance.
5. **Accessibility gate:** keyboard and touch completion; visible focus; labels; reduced motion; audio alternatives; usable mobile layouts.
6. **Persistence gate:** complete keys and best scores survive reload; malformed save data is rejected safely; export/import validated.
7. **Integration gate:** verified live URL, DoorQuests favicon/navigation/footer; single-file GitHub commit; published README separately; verify Pages deployment.
8. **Human playtest gate:** confirm no unforeseen exploit or confusion. Do not claim all paths tested unless actually exercised.

## 9. Pilot and rollout

**Pilot A — Three Keys:** prove the deduction engine, explanation system and Bronze/Silver/Gold UI.  
**Pilot B — Clockwork:** prove direct manipulation, deterministic mechanical validation and reduced-motion support.  
**Pilot C — Changed Room:** prove observation-based UI, nonvisual alternatives and object-state verification.  

After these are working, reconcile the common design language and Keyring, then produce doors 4–30 in iterations. Only then finalize **Chaortal 31 — The Impossible Door**, where accumulated key symbols may make the finale easier but are never required to access it.

**Proposed initial challenge gallery:** /#challenges (existing landing-page section should remain **Coming soon** until the first playable prototype is ready). When published, list all available Chaortals with their unique verbs, door art and tier achievements.

## 10. Explicitly deferred decisions

- Exact illustration assets, animations and sound design.
- Whether optional timed challenge modes or shareable seeds are useful after testing.
- A final scoring rubric based on observed puzzle performance.
- Server accounts, cross-device sync, social comparisons and competitive leaderboards.
- The actual symbol system and final puzzle solution of Chaortal 31.
- Final tier details of Silver and Gold for the logic and mechanical prototypes **must be instantiated and solver-validated before calling these playable**.

**Approval convention:** COMPLETE — APPROVED applies to this design baseline, not to the implementation or testing of the proposed puzzle engines.
