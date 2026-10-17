# Tidewalkers

**The Axiom Continuum · Daily Door #28**  
**Genre:** Hopeful post-apocalyptic adventure · tidal-crossing survival and community-building  
**Setting:** The Drowned Coast · Forty years after the Rising  
**Estimated play time:** 10–15 minutes per run (original design estimate)  
**Documentation status:** COMPLETE — APPROVED  
**Founder playable-story review:** PENDING  
**Date:** 2026-10-15

> You guide a coastal community between islands accessible only when the sea withdraws.

## Premise

Forty years after **the Rising**, the coast is broken into scattered islands. **Holm**, a small ridge of turf and old stone, supports forty people; every winter the water takes a little more. The last storm destroyed the well.

Across the tidal flats lies **Greenhallow**, a high island once home to a research station with an orchard, freshwater spring and seed store. Nobody has walked there for twenty years. Reaching it means crossing **three causeways**, each exposed only at sufficiently low tide. The longest, **the Long Strand**, is accessible for only a short interval near spring tides.

You are Holm's **tidewalker**, responsible for reading the sea as your grandfather did. Everyone has voted to leave. Their lives depend on when you travel, what you carry and whom you choose to bring along.

The strongest ending is more than a successful crossing: it turns the journey into a shared future for the people of Holm and Saltmarsh.

## How to play

Choose one of three options at each scene using a click, tap or **1**, **2**, **3**. **Retrace your last step** undoes a choice; **Start over** returns to the cairn on Holm. Your previously discovered endings are remembered by the browser. The reviewed standalone HTML also saves the current adventure and undo history.

Crossing decisions display the **current safe exposure window** and **estimated crossing duration** before you act. If crossing takes longer than the window, the group is caught by the incoming tide; dropping equipment or retreating may then become necessary.

Waiting for another low tide can make a crossing safer as spring tides approach, but every tide spent waiting consumes provisions.

## Tide model and chart

The header contains a live, browser-drawn tide chart displaying the next three lows. Its features include:

- **Blue curve:** The modeled water level on a **12.4-hour** tidal cycle.
- **Dashed sand-colored line:** The elevation of the next causeway. A route is exposed when the water falls below that level.
- **Green vertical bands:** The time windows when the causeway is exposed.
- **Crossing-duration bar:** Green when the calculated walk fits the window, coral when it does not.
- **Status readout:** Current modeled low-water time and level, tidal range, next causeway distance, walking pace and crossing verdict.

The model uses a **2.5 m mean sea level**. Its tide amplitude increases from **1.3 m** at neaps to **2.5 m** around the sixth indexed low, then declines toward neaps. The curve is a **game simulation** informed by tidal principles, not a source of real-world tide predictions or safe coastal navigation.

The modeled window for a causeway with elevation `H` at low-tide index `i` is:

```text
amplitude(i) = 1.3 + 1.2 × sin(π × min(i, 12) / 12)
c = (H − 2.5) / amplitude(i)
window(i) = 0                  when c ≤ −1
          = 12.4 hours         when c ≥ 1
          = 12.4 × (1 − acos(c) / π) hours otherwise
```

### Three causeways

| Causeway | Uncovers when water is below | Distance | Route |
|---|---:|---:|---|
| **Skerry Bar** | **2.0 m** | **3 km** | Holm → Gull Rock |
| **The Long Strand** | **0.9 m** | **9 km** | Gull Rock → Saltmarsh |
| **The Marsh Steps** | **1.6 m** | **5 km** | Saltmarsh → Greenhallow |

The Strand is the decisive timing puzzle: it requires an appropriate spring tide **and** a sufficiently light or assisted group.

## Walkers, carts, and provisions

### Walking pace

The calculation starts at **3.2 km/h** and applies penalties:

- **−0.4 km/h** for each cart being hauled on sand.
- **−0.2 km/h** if **Old Ama** travels in a litter.
- **−0.3 km/h** if Ama walks using a stick.
- **Skiff exception:** After repairing the wrecked skiff at Gull Rock, carts float during the Long Strand crossing, so their usual speed penalties do not apply for that part of the journey.

Walking pace is never allowed below **1.0 km/h**. Crossing time equals the causeway distance divided by modeled walking pace.

### Three carts

| Cart | Cargo | Narrative purpose |
|---|---|---|
| **Seed cart** | Holm's last good harvest and packets preserved at the research station | Required for the strongest ending; its contents can be shared with the Marsh folk |
| **Tool cart** | Spades, saws and a forge anvil | Useful cargo; may be traded for passage |
| **Water cart** | Six barrels from rain cisterns | Important supplies but adds drag on sand |

On a dangerous crossing, the player may **cut a cart loose** to escape the advancing water. Cargo can also be deliberately left at Holm or traded during negotiations.

### The Walkers

Holm begins with **forty villagers**. **Old Ama**, eighty-four, may be carried, walk more slowly with a stick, or remain on Holm with the best water. If the seed-sharing choice persuades **Corra**, **twenty-two Saltmarsh residents** join the journey, bringing the eventual group to **sixty-two** when Ama also accompanies them.

### Provisions

The party begins with food sufficient for **ten tide intervals**. Waiting consumes one food unit per tide, and completing a crossing also consumes one. Sharing seeds and a meal with Saltmarsh carries an additional food cost; offering food alone costs more. If provisions reach zero before the group reaches Greenhallow, the journey ends in **Turned Back**.

## Journey and scenes

| Place | Scene / challenge | Key decision |
|---|---|---|
| **Holm** | **Grandfather's Almanac** | Learn causeway heights, the spring-tide pattern, and the wrecked skiff's location. |
| **Holm** | **Old Ama** | Carry her, let her walk and sing, or leave her behind. |
| **Holm** | **What to Carry** | Choose all three carts, seeds plus water, or seeds alone. |
| **Holm** | **The First Low** | Cross Skerry Bar, wait, visit Ama if missed, or call off the migration. |
| **Gull Rock** | **Waiting for Springs** | Monitor the Strand window, repair the skiff, send a mirror signal, or wait for safer water levels. |
| **Saltmarsh** | **Corra and the Marsh folk** | Share the seed cart, trade tools, provide food, request passage, or try to sneak through. |
| **Greenhallow** | **The Orchard** | Discover the spring, wild orchard and sealed seed store; begin the new community's life. |

### Principal characters

- **The tidewalker:** The playable leader of Holm's migration, inheritor of Grandfather's knowledge.
- **Old Ama:** Born before the Rising, when Holm was a hill on the mainland; she remembers the coast as it once was. Bringing her supports intergenerational continuity.
- **Corra:** A Saltmarsh leader speaking for **twenty-two** residents whose seed crop has failed. Her people's future intersects with Holm's.
- **Grandfather:** Never encountered directly; his weathered almanac explains tide heights, spring windows, and the necessity of traveling light.

## Six canonical endings

| ID | Ending | Outcome |
|---|---|---|
| **E1** | **Greenhallow** · *truest* | Reach the island **with the seed cart**, with **Ama not left behind**, and with **the Marsh folk joining** after sharing seeds. The communities plant together. |
| **E2** | **The Orchard** | Reach Greenhallow but without some essential part of the shared future: Ama, the seeds or the Saltmarsh community. |
| **E3** | **Turned Back** | Exhaust provisions before arriving, forcing a difficult return to Holm. |
| **E4** | **Caught by the Strand** | Become trapped by the rising tide and require rescue; the Marsh folk bring boats, but the settlement goal is not reached. |
| **E5** | **The Marsh Gate** | Try to slip past Saltmarsh without negotiating; the Marsh folk bar the route. |
| **E6** | **One More Winter** | Abandon the journey and stay on Holm, postponing the possibility of a safer home. |

### Exact strongest-ending condition

The canonical HTML resolves the Greenhallow ending using:

```js
if (state.carts.includes("seeds") &&
    state.f.joined &&
    !state.f.amaStays) {
  return "E1";
}
return "E2";
```

Here, `joined` is set when the player shares the seed cart with the Marsh folk and crosses the Steps together. **Ama need not travel by litter specifically**: either bringing her by litter or allowing her to walk can satisfy the ending, provided she is not left behind. The final arrival scene offers three different narrative actions, all resolved by this same ending check.

## Walkthrough to the truest ending — spoilers

The uploaded companion guide provides this practical route, reconciled with the HTML's tide and speed rules:

1. **Read Grandfather's Almanac.** Note the Strand's limited spring-tide exposure and the abandoned skiff on Gull Rock.
2. **Visit Ama** and choose to **carry her in a litter**, slowing the party by 0.2 km/h.
3. **Take only the seed cart.** With one cart and Ama's litter, initial pace is **2.6 km/h**.
4. **Cross Skerry Bar** on the initial low tide, when the 3 km walk fits the exposure window.
5. On **Gull Rock**, **repair the skiff**, taking one tide of provisions. It lets the cart float rather than drag on the Strand. Send a **mirror signal** to Saltmarsh if desired; signaling costs no tide.
6. **Wait for the fifth low tide** (index **4**, approximately **Day 3, 07:48** in the game's clock). With the skiff and Ama's litter, Strand pace is **3.0 km/h**, so 9 km takes **3.0 hours**; the modeled safe window is approximately **3.23 hours**.
7. **Cross the Long Strand** within that window, taking care to preserve the seed cart.
8. At **Saltmarsh**, **share half the seed cart and a meal**. Corra and the **22 Marsh folk** agree to join the migration.
9. **Cross the Marsh Steps together**, then plant a first row of crops at Greenhallow. The shared community earns **E1 — Greenhallow**.

With three carts and Ama carried, the starting pace would be **1.8 km/h**. The nine-kilometre Strand crossing would require **5 hours**, more than its roughly **3.46-hour** maximum spring-tide window. The route is deliberately a balance between **timing, weight, supplies and inclusion**.

## Design notes and accessibility

The visual identity centers on **sea-glass teal**, **wet-sand gold**, **marsh green** and **coral** hazard indicators. Fonts are **Young Serif** (display), **Figtree** (body), and **DM Mono** (tide measurements, almanac entries and status lines).

The header's responsive SVG presents the tide profile and safe-crossing windows, while the sidebar includes **The Route**, **The Walkers**, **The Carts** and **Provisions**. The reviewed HTML preserves light/dark themes, a single-column layout below 900px, a narrower tide plot for mobile screens, keyboard choices, reduced-motion support, and four collapsible reference sections on mobile.

All current-run progress is kept locally in the user's browser. These mechanics are for an interactive fictional scenario and must not be treated as travel or tide-safety guidance.

## Expansion possibilities

The submitted concept identifies possible future directions rather than approved sequels:

- Other islands and communities along the drowned coast, with different tidal elevations and needs.
- The long-closed seed store's many forgotten crops.
- Ama's light on Holm and its significance to future travelers.
- Repainted causeway markers, allowing new groups to follow the safe route to Greenhallow.

## Source reconciliation and quality assurance

The uploaded `tidewalkers.md` is a full original companion guide, not a minimal export. Its premise, tide model, three causeways, walking mechanics, carts, characters, complete journey, six endings, truest-ending walkthrough, design notes and expansion concepts are preserved here. Where descriptions require precision, **the committed playable HTML remains authoritative**.

The source Markdown reports an earlier audit of **8,124 story states**. The final reviewed HTML phase reported a broader exhaustive reachable-state audit of **25,736 states** and **44,712 choice transitions**, reaching **all six endings**, with no invalid scene destinations and passed JavaScript syntax validation. These are the reported automated review results, not a claim of manual live-browser testing on every device.

The reviewed HTML also includes TAC publisher identification, the official SVG favicon, browser-local game restoration, mobile collapsible references and `noindex,nofollow` while Founder review remains open.

## Repository and publication

- **Canonical HTML:** [index.html](./index.html)
- **Story URL:** https://theaxiomcontinuum.com/stories/tidewalkers/
- **GitHub repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended GitHub destination:** `stories/tidewalkers/README.md`
- **Discovered ending storage:** `tide-endings`
- **In-progress run storage:** `tac-tidewalkers-daily-door-v1`
- **Search indexing:** `noindex,nofollow` pending Founder play review
- **Homepage:** Unchanged in this story's two-commit workflow

**Documentation: COMPLETE — APPROVED.** This applies to companion documentation production only; **Founder playable-story review remains pending**. The HTML and companion README are committed in separate GitHub commits, each changing exactly one file.
