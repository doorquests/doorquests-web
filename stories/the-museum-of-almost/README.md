# The Museum of Almost

**The Axiom Continuum · Daily Door #6**  
**Genre:** Reflective speculative fiction / emotional mystery  
**Setting:** The Museum of Almost on Fennick Street  
**Document type:** Story reference / repository companion  
**Document status:** COMPLETE — APPROVED  
**Date:** 2026-10-15

## Premise

On a familiar street, the visitor finds a museum devoted to lives that almost happened. The curator, Miss Varnum, permits one object to be borrowed in exchange for the visitor's everyday house key. Borrowed objects temporarily reveal the lives they represent. Failure to return one by six o'clock exchanges the visitor's actual life for the alternative. The story explores regret, unrealized possibilities, reciprocity, and the value of an ordinary life.

## Creative identity

A quiet gallery aesthetic with Bodoni Moda, Newsreader, and Instrument Sans typography; muted green, brass, and museum-wall neutrals; illustrated exhibit vitrines; printed wall labels; and a floor plan. The story retains its own visual identity rather than adopting a standardized TAC page layout.

## Interactive mechanics

- Twenty-seven authored scenes, including six endings.
- Three numbered options per non-ending scene, with conditional branching.
- Four borrowable objects: a cello, an unsent letter, a rail ticket, and a paintbrush. The museum permits only one borrowed object.
- Simulated in-story time, beginning at 4:00 p.m. and concluding at the six o'clock closing bell.
- A floor plan, lending slip, and seven discoverable facts.
- Browser-local progress restoration, previous-step navigation, restarting, and persistent ending discoveries.
- A collapsible details panel for smaller screens.

## Endings

1. **Returned by Closing**
2. **Exchanged**
3. **Just Looking**
4. **The New Curator**
5. **On Reciprocal Loan**
6. **Please Take Only One**

## Publication and source of truth

- **Playable source:** [`index.html`](./index.html)
- **Direct-access URL:** https://theaxiomcontinuum.com/stories/the-museum-of-almost/
- **Repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended location of this document:** `stories/the-museum-of-almost/README.md`
- **Homepage:** Not linked while Founder play review is underway.
- **Search robots:** `noindex,nofollow` in the HTML during review.
- **Identity:** official TAC SVG emblem, “The Axiom Continuum,” and “Daily Door #6,” without visible development-status terminology.

## Markdown export reconciliation

Claude's companion Markdown export records only the opening title, location, time, and sidebar headings. It is **not** a complete narrative manuscript or playable source. This README documents the actual current HTML implementation; for the full story, branching logic, artwork, and behavior, consult `index.html`.

## Validation and workflow

The revised JavaScript passed a syntax check. An automated state-graph traversal reached all six endings, checked 14,039 reachable story states and 29,769 conditional transitions, and found no missing destinations. Full browser playtesting could not be completed because the environment restricted opening local pages. Founder play review remains the next gate.

The reference document is **COMPLETE — APPROVED** by the standing documentation convention; this does not imply every browser/device or narrative path has been manually tested. When modifying related files, publish through **one coordinated GitHub commit**.