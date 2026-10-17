# Three Hundred Bottles

**The Axiom Continuum · Daily Door #23**  
**Genre:** Romance / epistolary interactive fiction  
**Setting:** Inishcorran, Ireland ↔ Cape Sable, Nova Scotia · 1962–2016  
**Reading time:** Approximately 10–15 minutes per run (source design estimate)  
**Document status:** COMPLETE — APPROVED (documentation; Founder playable-story review separate)  
**Date:** 2026-10-15

> A correspondence begins through messages in bottles and stretches across decades.

## Premise

In 1962, **Nell**, sixteen, lives on **Inishcorran**, an island off western Ireland with a lighthouse, her father, and forty sheep. One day a green bottle washes onto the shingle. Inside is a message from **Teodor “Teo” Lund**, seventeen, living at **Cape Sable, Nova Scotia**. He wants to see the world, but his father's fishing wharf is as far as he can throw. He asks anyone who finds his letter to write back, however impossible it seems.

Nell does. Their letters cross the North Atlantic in drifting glass, often arriving years after they were written. Across **seven chapters and fifty-four years**, the correspondence becomes a test of love, honesty, responsibility, loss, and the courage to finally travel.

The story's distinction is not between a “correct” and an “incorrect” romance. Several endings are tender, fulfilling, or tragic in different ways. The truest ending honors a long practice of truth and makes the three hundredth message a **delivery by hand**.

## Characters

- **Nell / Nell Rooney:** Island girl, later Inishcorran's lighthouse keeper; the playable letter writer.
- **Teodor “Teo” Lund:** Nova Scotia net-mender's son, later a fisherman and boat owner, who sends brown-glass letters.
- **Fergal Rooney:** Nell's kind, steady husband and the mail-boat operator, who may help send her bottles.
- **Annie Lund:** Teo's wife.
- **June Lund:** Teo and Annie's daughter, ten in 1988 and forty in 2016; her childhood curiosity and later intervention help sustain the connection.
- **Nell's father:** The original lighthouse keeper, whose declining health makes Nell's 1969 decision difficult.

## How to play

Most choices are **words Nell can write**: the sentence appears in her handwriting and is added to an on-page letter draft. Each new line animates onto ruled paper. Completed letters are marked **“corked & thrown.”** Years may pass before another bottle arrives.

Choose by clicking or pressing **1**, **2**, or **3**. **Retrace your last step** reverses a choice; **Start over** returns to the first discovery. Six endings can be found and are recorded in browser-local storage.

## Signature visual and narrative mechanics

### The letter in progress

Incoming letters appear on lined stationery using Teo's distinctive handwritten style, marked with the place and year of release. Nell's evolving replies build below in a separate script; choices influence later correspondence and the extent to which she speaks plainly.

### Atlantic drift chart and year bar

A responsive SVG charts bottle journeys across the **North Atlantic**, connecting **Cape Sable** and **Inishcorran**. Each chapter adds drifting tracks, while the interface displays the current year and both correspondents' ages.

### The Shelf — 300 places

Three hundred individual bottle slots fill across the decades: **green glass** for Nell and **brown glass** for Teo. The newest bottle is highlighted. Some choices end the correspondence early; the full shelf is associated with the longest arc.

### The Tin and What You've Told Him

The **Tin** records physical keepsakes sent across the water, including pressed **sea pinks**, photographs, the **Empress of Canada** ticket, and gifts for June. **What You've Told Him** shows recent important personal disclosures. These are narrative memory and presentation systems, not an inventory of all prose ever written.

The original design uses sea-glass green, amber, rose, lined stationery, and **Cormorant Garamond**, **EB Garamond**, **Patrick Hand** and **Dancing Script**. It includes responsive layouts and light/dark palettes.

## Seven chapters

| Chapter | Year | Nell / Teo | Turning point |
|---|---:|---|---|
| **The First Bottle** | 1962 | 16 / 17 | Choose an honest, playful, or guarded introduction; add a keepsake or send only words. |
| **Three Years Later** | 1965 | 19 / 20 | Answer Teo's question about what Nell wants and decide whether to promise bottles every midsummer and midwinter. |
| **The Ticket** | 1969 | 23 / 24 | Teo sends a ticket aboard the *Empress of Canada*. Nell can travel now or remain with her ailing father and the light. |
| **Fergal Rooney** | 1974 | 28 / 29 | Nell agrees to marry Fergal. Decide what to tell Teo, and whether to tell Fergal about the correspondence. |
| **The Long Middle** | 1988 | 42 / 43 | Teo has married Annie; June asks about the mermaid. A concealed marriage can instead lead to confrontation and apology. |
| **The Hard Year** | 2003 | 57 / 58 | Both correspondents have lost their spouses. Nell can write with extraordinary honesty, write about the weather, or fall silent. |
| **The Two Hundred and Ninety-Ninth** | 2016 | 70 / 71 | June's message asks that the three hundredth bottle not travel by sea. Nell chooses whether to go herself. |

## Six canonical endings

| ID | Ending | How it happens |
|---|---|---|
| **E1** | **The Three Hundredth Bottle** · *truest* | Nell keeps the midsummer/midwinter promise, is open with Fergal, writes the 2003 grief letter, makes at least six truthful disclosures, resolves any concealed-marriage deception through an apology, and carries the last bottle to Teo. |
| **E2** | **Cape Sable** | Accept the 1969 ticket and move across the ocean; a good life together begins sooner, and the bottle correspondence ends. |
| **E3** | **Message Unsent** | Stop writing, either at the 1974 decision or later after conflict. |
| **E4** | **Return to Sender** | Hide Nell's marriage, then dismiss its importance when Teo learns the truth. |
| **E5** | **Washed Up** | Fail to write in the pivotal grief year, 2003; the later exchange with June cannot restore the lost years. |
| **E6** | **Across the Water** | Maintain a loving connection but send the last bottle by sea or travel with something significant still left unsaid. |

The canonical HTML makes the E1 condition explicit: `c >= 6 && open && grief && promise && (!hidFergal || apologised)`, provided the 2016 “carry the bottle yourself” choice is selected and the narrative has not already terminated.

## Truest-ending walkthrough — spoilers

The following is a representative route, preserving the uploaded Markdown's guidance. Other choices can meet the same conditions.

1. **1962:** Begin honestly about speaking to the gannets and place a **sea pink** in the letter.
2. **1965:** Answer what Nell most wants, and **promise to write every midsummer and midwinter**.
3. **1969:** Stay on Inishcorran; **tell Teo the truth** about Nell's father and the lighthouse.
4. **1974:** **Tell Teo about Fergal in the first line**, then **tell Fergal everything** about the bottles.
5. **1988:** Express how Nell felt about Teo nearly drowning; **write June a letter of her own**.
6. **2003:** **Write the truest letter** about Fergal's death, Annie's death, and loving more than one person without regret.
7. **2016:** **Go personally**, carrying the three hundredth bottle to Cape Sable.

This route builds sufficient truth disclosures without concealing the marriage. If some choices were more guarded, taking the trip alone will lead to the alternative Halifax scene rather than E1.

## Grand Saga possibilities

The source concept identifies open possibilities, **not established future productions**: Teo's kitchen shelves of bottles and letters never displayed in this story; June growing up with an ocean-crossing correspondence; bottles lost at sea and found by strangers; and Inishcorran's lighthouse after its **1998 automation**, still climbed by Nell.

## Markdown/HTML reconciliation

The supplied `three-hundred-bottles.md` is a **substantial companion guide**, not merely a header export. Its premise, original chapter table, characters, interactive design, six ending names, representative walkthrough, and Grand Saga threads are preserved above.

The **committed playable HTML is authoritative where details differ**. The original Markdown reported **20,143 story states** tested; the final reviewed HTML phase reported an **exhaustive branching audit examining 15,274,191 choice transitions**, reaching all six endings with no invalid destinations, as well as passed JavaScript syntax validation. Those figures concern the final review, not the Markdown's earlier test claim. They do not establish that every browser/device rendering has been manually tested. The final HTML also corrected a line of correspondence that could otherwise imply a visit Nell had never made.

## Repository and publication

- **Playable HTML:** [index.html](./index.html)
- **Story URL:** https://theaxiomcontinuum.com/stories/three-hundred-bottles/
- **Repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended GitHub destination:** `stories/three-hundred-bottles/README.md`
- **Publisher:** The Axiom Continuum · Daily Door #23, with official SVG emblem and favicon.
- **Progress persistence:** Discovered endings saved under `bottles-endings`; current run and history under `tac-three-hundred-bottles-daily-door-v1`.
- **Search indexing:** `noindex,nofollow` during Founder play review.
- **Homepage:** Not changed in this story's two-stage publication workflow.

**Documentation: COMPLETE — APPROVED.** Founder approval of the playable story is a separate milestone. The HTML and companion README are each committed independently, one repository file per commit.
