# DoorQuests — Case No. 01

## The Nightingale Sleeper

**Date:** 2026-10-17  
**Project day:** DoorQuests Day #002  
**Status:** RECONCILED — SOURCE-TESTED — READY FOR FOUNDER STAGING REVIEW  
**Format:** Standalone, browser-native interactive investigative Case  
**Creator credit:** Created by The Axiom Continuum  
**Proposed public URL:** `https://doorquests.com/cases/the-nightingale-sleeper/`  
**Proposed repository paths:** `cases/the-nightingale-sleeper/index.html` and `cases/the-nightingale-sleeper/README.md`

---

## 1. Narrative premise

In 1936, Detective Sergeant Nell Ashby is traveling on the Nightingale sleeper train when financier Silas Marrow is found dead behind the corridor bolt of Compartment No. 7. At 12:04 AM, Ashby has until Aldermouth at 6:00 AM to gather evidence, test alibis and make a defensible accusation. The train stops at Crale Junction at 3:00 AM, presenting a pivotal opportunity to telephone Kingsport police—or to deal with a suspect attempting to flee.

The mystery is **fixed-truth**. The culprit, method, route and motive do not change based on player choices. What changes is the player's access to the proof, the time remaining, and the consequence of the final judgment.

**Spoiler — canonical solution:** Dr. Ambrose Pell, motivated by the death of his brother Thomas following the Marrow Bank collapse, administered poison disguised as a remedy. He used the connecting door to the adjoining Compartment No. 8 to escape the apparently locked room.

## 2. Investigation architecture

| System | Implementation |
|---|---|
| Main suspect set | Clara Marrow; Julian Rook; Dr. Ambrose Pell; Mrs. Ottoline Grey |
| Evidence definitions | 21 |
| Authored evidence connections | 13, including exculpatory and misleading-motive deductions |
| Locations | Seven train-area destinations plus compartments and Crale / arrival scenes |
| Interrogations | Coax / Ask / Press, suspect-specific preferences, suspicion and silence |
| Consumables | Three fingerprint-powder uses, two intuition uses |
| Persistent records | Current run, discovered endings, chapter checkpoints in browser localStorage |
| Undo | Up to 80 serialized state snapshots |
| Verdict | Four required answers: who, how, route, why |
| Endings | Seven |
| Core platform | Static HTML, CSS and plain JavaScript; no server runtime, login, paid API or external app |

## 3. Endings

| Code | Title | Trigger summary |
|---|---|---|
| E1 | The Whole Truth | Correct four-part hypothesis and corroborated core evidence from the crime scene, alibis, poison, connecting room, and motive |
| E2 | The Doctor's Word | Correct culprit, but inadequate proof or incomplete explanation |
| E3 | The Wrong Compartment | Accuse an innocent suspect |
| E4 | Cold Arrival | Let the deadline pass, decline to accuse, or lose the fleeing killer |
| E5 | Caught on the Platform | Capture fleeing Pell after securing threshold evidence |
| E6 | Off the Rails | Risky pursuit of Pell without sufficient evidence |
| E7 | Death by Misadventure | Accept the doctor's proposed non-murder explanation |

The E1 threshold now requires the relevant detective work rather than awarding the complete case for a small set of disconnected clues. The narrative description of optional fingerprint evidence is conditional on whether that evidence was actually obtained.

## 4. Reconciliation performed on October 17

1. **Complete-proof gate strengthened.** E1 now requires a refuted physician alibi, death-time connection, stopper–vial match, demonstrated No. 8 route, corroboration that Julian's berth was empty and his whereabouts established, poison delivery connection, and the documented Pell-family revenge motive. A correct unsupported accusation yields E2.
2. **Evidence descriptions narrowed to what they prove.** D3, D5, D6 and D7 were revised so correlations are not overstated as independent forensic certainties. For the dosing-cup/vial conclusion, examine both objects closely.
3. **E1 narrative reconciled to discovered information.** The best ending no longer asserts an examined wiped handle if the player did not obtain that evidence. It explains the escape through No. 8 and refers to optional evidence conditionally.
4. **Early accusation chronology repaired.** Verdict narration now distinguishes current investigation time from later Aldermouth and courtroom events. Solving early is allowed and does not imply the train instantly arrived.
5. **Julian's alibi and movements reconciled.** His affair is said to run from 10:15 PM until midnight, after which he can appear in the dining car until returning to Compartment No. 8 at 1:30 AM. The suspect dossier and historical timeline agree with that schedule.
6. **Arrival threshold made reliable.** Reaching 6:00 AM transitions to Aldermouth even when the action originated during the Crale sequence.
7. **Save-state validation improved.** Current-run storage has a `-v2` version, while discovered endings and chapter-key families remain independently stored. Loaded state and chapter snapshots receive structure/clock checks.
8. **Accessibility improvements.** The tab controls now identify and label the panel. The evidence dialog restores focus on closure when its opener remains connected. Number shortcuts are not intercepted when a button or form field is focused.
9. **Brand attribution retained.** DoorQuests remains the visitor-facing brand; the footer identifies The Axiom Continuum as creative origin.
10. **Seven original ending concepts, case character identities, scene design and interface vocabulary were preserved.** No new dependencies were introduced.

## 5. Tests performed

**Automated source tests:** Inline JavaScript extracted and passed Node syntax checking.

**Headless Chromium rendering:** HTML loaded; no page JavaScript exception was reported. Desktop (1280px) and narrow mobile (390px) layouts rendered, without horizontal page overflow at the tested narrow width.

**Complete E1 path:** A deterministic action sequence used the actual scene-choice functions, evidence acquisition, closer examinations, interrogation, 3:00 AM telephone call, deduction connections and resolution function. Result: **E1 at 4:05 AM, 13 evidence items, 7 relevant connections**. This is a reachable legitimate path, not a hand-built fabricated end state.

**Negative E1 proof:** The correct four-part accusation with no evidence produces **E2 at 12:04 AM**, not E1.

**Other ending checks:** E3 wrong accusation; E4 deadline; E5 and E6 Crale chase variants; E7 false accident ruling. Each route's conditional resolution was exercised in the browser, in some cases with injected prerequisite state rather than full human playthrough.

**Additional browser checks:** Investigation starting view, dynamic evidence and ending definitions, open/close evidence modal. No JavaScript exceptions observed during these targeted checks.

### Validation boundary

This constitutes **targeted technical verification, not exhaustive state-space certification or comprehensive human playtesting**. Before final publication, verify the entire case manually on the intended host in normal desktop and mobile browsers, including the real external favicon/font requests, backtracking, dark mode, chapter restoration, all exits, keyboard/screen-reader traversal, and localStorage behavior. The document's `noindex,nofollow` metadata was deliberately preserved from the submitted review source; decide whether to remove it once public indexing is desired.

## 6. Publication guidance

Publish **the corrected HTML as `cases/the-nightingale-sleeper/index.html`**, not the raw author export, and **this companion Markdown as `cases/the-nightingale-sleeper/README.md`**. Follow the project's **one changed file per GitHub commit** rule. The current root DoorQuests homepage does not automatically link a newly added Case: integrating the Cases collection and case-specific homepage link is a **separate, deliberate follow-up** after the live case has been checked.

The favicon `/assets/doorquests-icon.svg` assumes deployment at the DoorQuests domain root; the local `about:blank` browser preview cannot resolve that site-root resource and may show a blank icon during review. This is not evidence that the deployed path is invalid.

Do not mark a full founder play review complete without the Founder's confirmation. No GitHub publication is represented as having occurred in this local correction handoff.

---

**CASE NO. 01 SOURCE RECONCILIATION — COMPLETE.**  
**FOUNDER STAGING / LIVE PLAY REVIEW — OPEN.**
