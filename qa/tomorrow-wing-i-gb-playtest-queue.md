# DoorQuests — GB Playtesting Queue: Tomorrow Wing I

**Queued:** 2026-11-09 (America/Los_Angeles)  
**Repository:** `doorquests/doorquests-web`  
**Parent directory:** `/tomortal/`  
**Queue state:** **PENDING GB PLAYTEST — NOT YET EXECUTED**  
**Founder review:** **PENDING** for all six.  
**Publication status:** The six audited #001 pages were authorized by the Founder to go live for playtesting. Publication does **not** represent completed GB or Founder playtesting.

## Six queued experiences

| ID | Collection | Flagship | Live site path | Source file | GB state | Founder state |
|---|---|---|---|---|---|---|
| TOM-W1-01 | Chronortals | Twelve Clocks Till Midnight | `/chronortals/twelve-clocks-till-midnight/` | `chronortals/twelve-clocks-till-midnight/index.html` | PENDING | PENDING |
| TOM-W1-02 | Paradoxortals | House Rules at the Lantern Inn | `/paradoxortals/house-rules-at-the-lantern-inn/` | `paradoxortals/house-rules-at-the-lantern-inn/index.html` | PENDING | PENDING |
| TOM-W1-03 | Multivortals | Twin Globes | `/multivortals/twin-globes/` | `multivortals/twin-globes/index.html` | PENDING | PENDING |
| TOM-W1-04 | Echortals | The Map They Followed | `/echortals/the-map-they-followed/` | `echortals/the-map-they-followed/index.html` | PENDING | PENDING |
| TOM-W1-05 | Dreamortals | Where the Shadows Hold | `/dreamortals/where-the-shadows-hold/` | `dreamortals/where-the-shadows-hold/index.html` | PENDING | PENDING |
| TOM-W1-06 | Randortals | The Last Harvest Bell | `/randortals/the-last-harvest-bell/` | `randortals/the-last-harvest-bell/index.html` | PENDING | PENDING |

**Naming:** The official spelling is **Echortals**, *not* Echoortals.

## GB review instructions

1. Treat this as an **addition to the existing QA campaign**, not a declaration that these six have been tested. Follow the campaign's existing source pin, budget limits, permissions, reporting format, and PASS / PASS W/ OBS / FAIL / NEEDS REVIEW classifications.
2. Capture the exact GitHub commit SHA and source-file SHA-256 for each test, plus browser/device, date, test scope, and evidence. Do not apply fixes or deploy changes without approval.
3. Check the corresponding `/tomortal/` card and destination URL, desktop/mobile layout, keyboard/touch equivalent interactions, reset/replay, completion gates, navigation/focus, and unexpected browser errors.
4. Verify experience-specific critical mechanics rather than just page loads:

   - **Chronortals:** 12 clocks, offset/rate corrections, multiple-time test, invalidate stale proof after changing settings.
   - **Paradoxortals:** impossible room allocation, minimal conflict, valid amendment, stale-success regression PXL-001.
   - **Multivortals:** deterministic six interventions/nine seasons, causal-trace temporal consistency (TG-001), challenge and convergence.
   - **Echortals:** 27 map combinations, 5/15/30-year layers, event attribution, stale future traces, second-edition comparison.
   - **Dreamortals:** five chambers, actual shadow-based collision and legal crossing, self-shadow finale, undo/reset.
   - **Randortals:** decision-independent seeded weather, harvest capacity and deadline, same-sky replay, 20 held-out policy comparisons, corrected no-hail explanation (HB-001).

5. Preserve the **independent audit** verdicts as historical evidence only; GB must produce its **own** results. Founder hands-on playtesting remains separate and pending.
6. If a test fails, create a reproduction with seed/configuration and expected versus observed behavior; do not silently reclassify or repair.

## Release and tracking rules

- Each #001 flagship is **publicly reachable subject to deployment propagation** and is queued for GB + Founder playtesting.
- Do not mark GB or Founder playtest COMPLETE without evidence from the respective process.
- The classic four free collections and existing Tomortal releases remain unchanged.
- This queue file is a human-readable GitHub handoff; it does not, by itself, schedule or trigger an autonomous GB run.

Created by The Axiom Continuum · DoorQuests — Choose Your Path. Find the Truth. Unlock the Impossible.
