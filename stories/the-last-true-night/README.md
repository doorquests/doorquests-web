# The Last True Night

**The Axiom Continuum · Daily Door #27**  
**Genre:** Contemplative science fiction / participatory planetary drama  
**Setting:** Meridian, planet Hesper · An evening from 18:00 to 21:00, sixty-one years after settlement  
**Reading time:** Approximately 10–15 minutes per run (source estimate)  
**Documentation status:** Complete; Founder play review pending  
**Date:** 2026-10-15

> After decades of artificial daylight, an entire planet prepares to experience natural darkness again.

## Premise

For **sixty-one years**, nobody on **Hesper** has seen night. After landing on a planet with a twenty-hour night and a frighteningly black sky, the settlers constructed **the Lantern**: twelve orbital mirrors that redirect sunlight around the planet to bathe cities on the night side in an uninterrupted golden afternoon.

The mirrors are failing. The planetary Council has narrowly decided not to fund repairs. At nine tonight, the Lantern is scheduled to go dark, leaving **two million people**, many of whom have never seen a star, to experience a true night.

The player is the **last operator of the Lantern**, stationed in Lantern Control in **Meridian**. Over the course of the shutdown, they must do more than dim mirrors. They must persuade people to turn off artificial lighting, help frightened citizens become curious, and choose whether the final darkness should be experienced alone or together.

## How to play

The player makes one of three narrative choices at a time using mouse, touch or keyboard **1**, **2**, or **3**. After the opening preparation decisions, scenes advance through the staged shutdown. **Retrace your last step** reverses a decision; **Start over** returns to the Lantern at full brightness.

The experience records discovered endings in browser-local storage. The reviewed standalone HTML also restores an unfinished run and its undo history. A dynamically rendered sky and color-changing page accompany the story as night approaches.

## The Dimming: seven displayed time points

| Time | Displayed stage | Lantern brightness |
|---|---|---:|
| **18:00** | The Lantern, full | **100%** |
| **18:30** | Stage one | **80%** |
| **19:00** | Stage two | **60%** |
| **19:30** | Stage three | **40%** |
| **20:00** | Stage four | **20%** |
| **20:30** | Stage five | **5%** |
| **21:00** | The last switch | **0%** if fully shut down |

At the final decision, alternate outcomes can hold the Lantern at **5%** or relight it after an initial shutdown. The story distinguishes five intermediate dimming stages from the final switch and shows seven scheduled brightness checkpoints.

## Signature interactive systems

### The sky canvas and the changing page

An HTML canvas across the masthead displays a sky that shifts gradually from artificial gold to dusk and darkness. Approximately **520 reproducibly seeded stars**, a pale Milky Way-like band, the **twelve orbital mirrors**, and Meridian's illuminated skyline respond to state changes. Stars twinkle when animation is permitted; the interface respects reduced-motion preferences.

The entire page changes palette with the Lantern's brightness: **day**, **dusk**, **night**, and **true night**. The final visual state is affected not only by the mirrors but also by the city lights below.

### Meridian: the Darkness Map

The map tracks five districts and whether they have reduced their lighting:

- **The Harbour** — fishing families accustomed to Lantern-light work.
- **Old Landing** — the founders' quarter.
- **The Spires** — whose glare interferes with the observatory's search for Sol.
- **The Orchards** — home to Nana Femi's care facility.
- **St. Ines Hospital** — capable of switching to **red lamps** for patients and sky viewing.

The engine counts the hospital's red-light transition as a participating district. The truest ending requires **four or more of five districts** participating in darkness.

### Looking Up

The sidebar tracks the percentage of Meridian's population prepared to be **outside at 21:00**, represented by one hundred dots. It begins at **20%** and changes according to the player's response to Pell, district outreach, a possible public vote, the Council's Ember request, observatory help, and care for Nana Femi.

Different narrative consequences emerge depending on public preparedness. A very low turnout invites fear and emergency relighting; the truest ending requires **at least 50%** looking up.

### The Sky Book

The player can help name or rediscover stars and constellations:

- **Sol, our sun**, found through Dr. Nnaji's telescope if the relevant observation is successful.
- **The Orchard Ladder**, a new constellation named with Dr. Nnaji.
- **Pell's Brother, and others**, stars named by Pell on the truest night.
- **The River**, a shared name for the brilliant band across the night sky.

These entries vary according to the narrative choices and ending; not every run fills the same book.

## Characters

- **The Lantern operator:** The playable protagonist, responsible for carrying out the shutdown and determining how the public experiences it.
- **Nana Femi:** The operator's grandmother, **ninety-two**, the last person alive on Hesper who remembers a real night. She saw one as a child on a beach in Lagos before leaving Earth.
- **Pell:** A seven-year-old girl watching from Lantern Control's public gallery; frightened but curious about darkness.
- **Councillor Halvard:** A careful, frightened Council representative who advocates preserving the **Ember**, a permanent five-percent glow.
- **Dr. Amara Nnaji:** An astronomer who spent thirty years waiting to aim her telescope at a star; hopes to identify **Sol**.
- **Captain Adaeze Okonjo:** A founder whose sixty-one-year-old journal admits that the Lantern was constructed from fear and asks a future generation to turn it off.

## The evening's decisions

| Time | Scene | Decision |
|---|---|---|
| **18:00** | **Sixty-One Years of Noon** | Read the founding log, contact Nana Femi, or begin the shutdown. |
| **18:30** | **The Child at the Window** | Reassure Pell about darkness, lend her a red engineer's torch, or promise that stars await. |
| **19:00** | **The Darkness Map** | Persuade the Harbour or Old Landing to dim, or invite St. Ines Hospital to use red lamps. |
| **19:30** | **The Ember** | Accept the Council's five-percent glow, use the founding log to persuade Halvard, or put the matter to a public vote. |
| **20:00** | **Dr. Nnaji's Telescope** | Search for Sol if the Spires are dark, seek their cooperation, or name a constellation. |
| **20:30** | **The Orchards** | Bring Nana Femi to the Control roof, arrange a screen link, or leave her at the care home. |
| **21:00** | **The Last Switch** | Complete the shutdown, invite Pell or Halvard to pull the lever where offered, defy an Ember order, or remain at the console. |

### The Founding Log

The journal entry by **Captain Adaeze Okonjo**, written forty-one days after landing, explains that the Lantern soothed frightened children but obscured their new world's sky. Its central charge is to **turn the mirrors off when future generations are no longer afraid, and let them look up**.

Reading it before the Council's intervention opens a powerful option: quoting the founder to Halvard. This persuades the Council to abandon the Ember and marks **the Spires and Old Landing** as dark, a major contribution toward collective readiness.

## The six canonical endings

| ID | Ending | Result |
|---|---|---|
| **E1** | **The First Night** · *truest* | Fully extinguish the Lantern, have **at least four districts dark**, **at least half of Meridian looking up**, and **Nana Femi on the Control roof**. The city experiences true night together. |
| **E2** | **The Ember** | Hold the last mirror at five percent and retain a permanent dusk, with only a small fraction of the true sky visible. |
| **E3** | **Lights in the Windows** | Extinguish the orbital Lantern but leave too many city lights on, hiding most of the stars. |
| **E4** | **The Lantern Relit** | The city is insufficiently prepared; fear and emergency procedures bring the artificial afternoon back. |
| **E5** | **A Private Sky** | Complete the shutdown, but without the full set of civic and family conditions; the operator's experience remains primarily personal. |
| **E6** | **The Console** | Remain inside monitoring telemetry while the night passes unseen. |

### Precise ending logic

For the normal final-switch route, the published HTML checks the following, in order:

1. If the **Ember** is retained, the result is **E2**.
2. If fewer than **three districts** have dimmed, the result is **E3**.
3. If fewer than **35%** of residents are looking up, the result is **E4**.
4. If Nana Femi is present, at least **four districts** are dimmed, and at least **50%** are looking up, the result is **E1**.
5. Otherwise the result is **E5**.

**E6** is the explicit decision to remain at the console. A separate option for **defying an existing Ember order** checks the strongest-ending thresholds directly and otherwise produces **E4**. These alternate routes are meaningful distinctions in the underlying implementation.

## Walkthrough to the truest ending — spoilers

The source Markdown supplies a coherent route, which matches the published game's flags and participation effects:

1. **18:00:** Read **Captain Okonjo's founding log**; contact **Nana Femi** and promise to bring her to see the night.
2. **18:30:** Give **Pell the red engineer's torch**. This adds ten percentage points of public readiness.
3. **19:00:** Call **the Harbour** and secure its dimming; public readiness increases again.
4. **19:30:** **Read Halvard the founding log**. He abandons the Ember; the **Spires** and **Old Landing** also go dark.
5. **20:00:** With the Spires already dark, **help Dr. Nnaji find Sol**.
6. **20:30:** **Fetch Nana Femi** and bring her to the Control roof. **The Orchards** dim for her.
7. **21:00:** Let **Pell pull the last switch**, while you hold her red torch, to reveal the unlit sky.

On this path, the city has **four participating districts** (Harbour, Old Landing, Spires and Orchards), **no Ember**, **Nana Femi on the roof**, and **60% of Meridian looking up**—comfortably exceeding the required 50%.

The scene's emotional payoff is the contrast between frightened anticipation and the shared surprise of seeing stars for the first time. Nana Femi discovers that the sky is different from Earth's, but the experience of **night** is familiar.

## Art direction, interaction, and accessibility

The visual palette transitions from **Lantern gold** to **deep starlight blue** and near-black. The design uses **Instrument Serif** for display, **Inter** for narrative prose, and **JetBrains Mono** for instruments and status panels.

The sky is drawn with **Canvas 2D**, rather than a pre-rendered movie: its intensity, star visibility, orbital mirror lights, city windows, and gradual animation respond to the game state. The page supports responsive single-column layout below 900px, mobile safe-area spacing, keyboard navigation, reduced-motion handling, light/dark themes, and four collapsible reference sections in the reviewed HTML.

The ending tracker remembers previously discovered outcomes. Browser-local progress restoration uses a separate key; no cloud account is needed to preserve a run on the same browser.

## Grand Saga possibilities

The uploaded concept includes these **exploratory future threads**, rather than established sequels:

- **The first sunrise** on Hesper after sixty-one years of perpetual artificial afternoon.
- **Other cities** choosing their own level of readiness and urban darkness.
- **Pell's sky**, and the constellations named by the first generation raised with stars.
- **The Lantern's orbital mirrors**, left in orbit and potentially sought by people who want the artificial light restored.

## Source reconciliation and validation

The uploaded `last-true-night.md` contains a comprehensive companion guide. Its world premise, stage schedule, sky-and-district systems, character descriptions, evening sequence, six ending names, strongest-ending walkthrough, design notes and future story threads are preserved here.

The **committed playable `index.html` remains canonical for exact game logic**. The source Markdown reports **6,131** audited states. The final reviewed HTML phase reported a complete reachable-state audit of **8,175 states and 8,757 choice transitions**, with all six endings reached and no invalid scene destinations; JavaScript syntax checks also passed. These are automated review results, not a claim of manual testing on every browser and device.

The HTML review retained the original animated sky and city map while incorporating TAC branding, the official SVG favicon, browser-local state saving, mobile reference-panel improvements and review-stage indexing restrictions.

## Repository and publishing

- **Playable HTML:** [index.html](./index.html)
- **Story URL:** https://theaxiomcontinuum.com/stories/the-last-true-night/
- **Repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended GitHub destination:** `stories/the-last-true-night/README.md`
- **Discovered endings localStorage:** `night-endings`
- **Saved progress localStorage:** `tac-last-true-night-daily-door-v1`
- **Search indexing:** `noindex,nofollow` pending Founder play review
- **Homepage:** Unchanged during this story's HTML-and-README workflow

**Documentation complete; Founder play review pending.** The playable HTML and companion README are each committed independently, with only the corresponding file changed in each commit.
