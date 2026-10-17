# The Courier of Impossible Packages

**The Axiom Continuum · Daily Door #21**  
**Genre:** Magical realism / interactive delivery mystery / civic fantasy  
**Setting:** Varrow-on-Lune, beginning at the Impossible Post on Fennick Lane  
**Document type:** Canonical HTML companion and repository reference  
**Documentation status:** COMPLETE — APPROVED  
**Date:** 2026-10-15

## Premise

On a courier's second day at **the Impossible Post**, postmistress **Mrs. Oduya** hands over four extraordinary parcels. Every delivery changes the city of **Varrow-on-Lune**. A jar of missing rain might revive a dry street; a lost song could restore a musician's voice; a freestanding door could carry a tram to the sea; and the shadow of an old market might help its traders recover a public place.

But two parcels have been relabeled to benefit **Councillor Hugo Grail**, whose tower rises over the Hill as poorer districts lose their treasured things. The courier must decide whether to obey the written addresses or investigate where the parcels were truly meant to go.

## The four packages

| Item | Package | Printed recipient | True recipient and consequence |
|---|---|---|---|
| **A** | **A Jar of Last Tuesday's Rain** | Mrs. Dorothea Pell, 9 Kestrel Row | The address is genuine; delivering it restores rain and flowers to the drought-stricken street. |
| **B** | **The Song Nobody Recorded** | Councillor Hugo Grail, Grail Tower | **Bastien Moreau**, The Blue Lantern, Dock Street. Correct delivery revives his long-lost song; the false address transforms it into Grail's campaign hit. |
| **C** | **A Door Without a Wall** | Mrs. Lourdes Ferreira, No. 9 Tram Depot | The address is genuine; delivery opens a new tram route to the sea. The courier can also step through personally. |
| **D** | **The Shadow of the Old Market** | Councillor Hugo Grail, Grail Tower | **The Traders**, Old Market Square. Correct delivery restores a gathering place in shadow; the false address erases its memory and benefits a proposed second tower. |

The story distinguishes *a true recipient* from *the name appearing on a tampered label*. Packages B and D carry concealed original addresses.

## People and places

**Mrs. Oduya** has supervised the Impossible Post for thirty-one years and understands the dangers of opening parcels. **Pim**, a young sorting clerk, has glue on his fingers and expensive new shoes; his uncle **Hollis Pimm**, Grail's secretary, supplies replacement labels. **Hugo Grail** profits from redirected deliveries. Other residents include **Mrs. Pell**, **Bastien Moreau**, **Mrs. Ferreira**, and **the Old Market traders**.

The interactive map covers **Fennick Lane, Kestrel Row, Old Market Square, Dock Street, the Tram Depot, and Grail Tower**, with changes to the skyline and neighborhoods as deliveries occur.

## Rules and core mechanics

The Impossible Post gives its couriers four rules:

1. Deliver to the name on the label.
2. Never open a parcel.
3. Every delivery must be signed for.
4. Be back before the lamps are lit.

Each scene offers **three numbered choices**, plus back and restart navigation. The delivery docket records parcel addresses, discovered underlying labels, receipt signatures, opened parcels and delivery status. The **Postmarks** panel records clues gathered along the route.

Players may **hold a label to the light** to reveal a pasted-over address without opening its package. Opening a parcel can change the courier or city personally; opening a **second** package triggers the more extreme consequences of **Contents May Shift**. Visiting the tram-stop bench and reading the *Varrow Evening Lune* reveal the evolving city.

At lamp-lighting the courier can return with undelivered parcels, submit a completed docket, disclose evidence of tampering, or—if the investigation is completed—accept a fifth delivery. Previously discovered endings persist across runs, and the game also saves browser-local progress.

## The newspaper and living city

The top of the page displays the **Varrow Evening Lune**, an illustrated front page whose headlines update as deliveries reshape Varrow. An inline SVG street map shows location markers and consequences: rainfall at Kestrel Row, music by the docks or the Hill, the tram's new route, changing market shadows, and Grail Tower's height.

The original visual identity is built around vintage airmail stripes, old newspaper typography, brown-paper parcels, postal stamps and handwritten signatures. Font families include **Fraunces**, **Newsreader**, **Courier Prime**, **Caveat**, and **UnifrakturMaguntia**. The palette combines cream paper and kraft brown with postbox red, postal blue and muted green; the interface supports smaller screens and reduced-motion preferences.

## The six endings

| ID | Canonical ending | Narrative outcome |
|---|---|---|
| **E1** | **Signed For** | The truest ending: proper deliveries and a confession lead to a fifth, personally signed parcel for Grail. |
| **E2** | **Delivered as Addressed** | The hijacked labels benefit Grail despite completed deliveries and collected signatures. |
| **E3** | **Contents May Shift** | Opening a second impossible parcel causes the city's geography to rearrange around the courier. |
| **E4** | **Through the Door** | The courier steps through the tram door instead of simply delivering it. |
| **E5** | **Back Before the Lamps** | The courier hands in the satchel while packages remain undelivered. |
| **E6** | **Rerouted** | Packages may be corrected, but the underlying relabeling scheme remains unresolved, or the fifth parcel lacks the necessary signature. |

The exact ending titles and branching behavior are taken from the committed HTML, not reconstructed from the nine-line Markdown export.

## Route to the truest ending — spoilers

1. Collect and deliver **A** to Mrs. Pell.
2. Examine **B**'s label under the light to reveal **Bastien Moreau**; deliver the song to him at Dock Street.
3. Deliver **C** to Mrs. Ferreira at the Tram Depot.
4. Examine **D**'s label under the light to identify **the Old Market traders**, then deliver their shadow to the square.
5. After revealing a concealed label, return to the Impossible Post and confront **Pim**. His confession identifies the replacement-label scheme and Hollis Pimm's connection to Grail.
6. Return at lamp-lighting with all four deliveries completed, **tell Mrs. Oduya about the labels**, and receive the fifth parcel: **One (1) Consequence**.
7. Deliver that parcel to **Councillor Hugo Grail in person** and obtain his signature. Leaving it unsigned does not complete the truest ending.

The game permits varied ordering of its deliveries; the important conditions are that both redirected parcels reach their true recipients, Pim's confession is obtained, and the fifth parcel is signed for.

## Uploaded Markdown reconciliation

The uploaded **The Courier of Impossible Packages.md** contains only these initial display elements: **THE IMPOSSIBLE POST · FENNICK LANE · DAILY DOOR No. 21**, the story title, **Delivery Docket**, **Postmarks**, and the note **Things you've noticed on the route**. No narrative, choices, parcel definitions, technical specifications, or ending descriptions are present in that export.

The previously committed **`index.html` is therefore the canonical playable story** and the source used to complete this README.

## Validation and status

Production review reported successful **JavaScript syntax validation** and **targeted playthroughs reaching all six endings**, including the full fifth-parcel sequence. A broad branching search was capped because the story supports many repeat visits: **exhaustive graph coverage has not been claimed**. Full manual live-browser testing and Founder story approval remain separate checks.

The published HTML includes TAC publisher branding, the official SVG emblem and favicon, browser-local save/restore, discovered-ending persistence, and responsive collapsible delivery reference panels. Robots instructions are **`noindex,nofollow`** during review.

## Repository

- **Canonical playable HTML:** [index.html](./index.html)
- **Story URL:** https://theaxiomcontinuum.com/stories/the-courier-of-impossible-packages/
- **Repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended GitHub destination:** `stories/the-courier-of-impossible-packages/README.md`
- **Publishing method:** Separate, single-file HTML and README commits; the homepage remains unchanged.

**Documentation: COMPLETE — APPROVED.** This approval is limited to the companion document; it does not constitute Founder approval of the playable story.
