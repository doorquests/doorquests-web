# The Weather Committee

**The Axiom Continuum · Daily Door #25**  
**Genre:** Comedy / whimsical fantasy / interactive resource-management adventure  
**Setting:** The Kingdom of Little Mizzle, population 412 · Midsummer wedding week, Monday–Saturday  
**Reading time:** Approximately 10–15 minutes per run (source estimate)  
**Documentation status:** COMPLETE — APPROVED (companion-document production)  
**Founder play review:** PENDING  
**Date:** 2026-10-15

> A tiny kingdom votes on tomorrow's weather, leaving you to settle the arguments.

## Premise

The Kingdom of **Little Mizzle** has 412 people, a castle the size of a large barn, a harbour, turnip fields, and a tradition as sacred as it is inconvenient: **the Weather Committee votes on tomorrow's weather**.

**Granny Nimbus**, who lives at the Weatherhouse on Mizzle Hill, reads the minutes each evening and manufactures the approved weather with buckets, bellows, an icehouse, a mangle, and her cloud barrel. The previous Speaker retired on Sunday, citing "nerves"; **you are the new Speaker**.

Five quarrelsome delegates have competing interests. The week's ultimate challenge is **Princess Posy's Saturday wedding**, outdoors on the Green, to a nervous young man from the Duchy of Gloam. The best outcome must satisfy different people, keep the physical supplies of weather intact, and arrange sunshine, rain, fog, breeze, rainbow, and snow **at different times and locations**.

## How to play

At each session, choose one of **three rulings** by clicking or pressing **1**, **2**, or **3**. Each choice displays its anticipated effects: changes to a delegate's happiness, cloud supplies, ice, and the Speaker's gravitas. The following session begins with **Yesterday's Weather**, describing what Granny actually produced and how the people reacted. The **Minutes** preserve the formal resolution and the committee vote.

**Retrace your last step** reverses a choice; **Start over** convenes a new week. The interface remembers discovered endings between runs and also restores the current session from browser-local storage.

## The five delegates

| Delegate | Constituency | Chief demand |
|---|---|---|
| **Mrs. Agatha Pumble** | Turnip Growers' Guild | Rain for the turnips |
| **Mr. Horace Wringle** | Laundry Collective | A proper drying breeze |
| **Tilly Ott, aged nine** | Children's Delegate | SNOW, even in June |
| **Old Barnaby Scrimm** | Fishermen of the Harbour | Thick fog for shy herring; calm seas |
| **Lady Fennick** | Mother of the Bride | Sun at Saturday's wedding |

Each delegate has an animated expression and **five-heart mood meter**. All start at **3 of 5**. To reach the strongest ending, all five must still have **at least 3 hearts** when the Saturday grand ruling is chosen.

Other characters include **Granny Nimbus**; **Princess Posy** and her fiancé; **the Duchess of Gloam**, who lends clouds and issues invoices; and **the Royal Coin**, permitted by Article 12 as a last resort.

## The Sky: resource rules

| Resource | Initial value | Behavior |
|---|---:|---|
| **Cloud Barrel** | **4 / 10** | Rain and certain compromises consume clouds; days of rest or sun can replenish it. Going below zero ends in **The Barrel Runs Dry**. |
| **Icehouse** | **2 blocks** | Snow uses ice; at least one block must remain before Saturday's grand ruling. |
| **Speaker's Gravitas** | **3 / 5** | Effective compromises raise it, while some procedural shortcuts or delays reduce it. Reaching zero triggers **Impeached**. |
| **Delegate moods** | **3 / 5 each** | Policy affects individual moods. Two delegates at zero cause impeachment. |

The implementation applies the **effects attached to each ruling**, not a generic weather-cost formula. The Sky sidebar provides a practical guide (for example, rain costs three clouds), while individual choices show their specific net effect.

### Two essential discoveries

**Article 9 — weather by location:** The **Grand Almanac of Little Mizzle (1704)** permits weather to be apportioned by *Street, Parish, Field or Playground*. Reading it reveals geographically targeted rulings.

**The hours — weather by time:** **Granny Nimbus** explains that weather can change by the hour, rather than lasting all day. Speaking with her unlocks time-specific compromises.

The strongest Saturday motion requires **both discoveries**, **three or more clouds**, and **one or more ice blocks**. Without these discoveries, some otherwise clever third-choice rulings are replaced by **Article 12's Royal Coin**.

## The six-day week

| Day | Session | Central conflict and meaningful alternatives |
|---|---|---|
| **Before Monday** | Preparation | Read the Almanac for Article 9; climb to the Weatherhouse for the hourly technique (being late costs gravitas). |
| **Monday** | **Washday** | Rain for Pumble versus sunshine for Wringle; hourly rain followed by sun and breeze can satisfy both. |
| **Tuesday** | **The Snow Question** | Snow for Tilly versus fog for Barnaby; Article 9 permits snow on the playground and fog at the harbour. |
| **Wednesday** | **A Note from the Hill** | Restore cloud supplies through a day of Nothing At All, a borrowed cloud, or hot sun. |
| **Thursday** | **The Wind Debate** | Drying breeze for laundry versus flat calm for fishing; hourly scheduling can offer both. |
| **Friday** | **The Marquee** | Rain for the turnips versus a dry wedding marquee; Article 9 permits rain on the fields but not the Green. |
| **Saturday** | **The Wedding** | Sunshine, snow, resignation, or—if qualified—the elaborate grand compromise. |

The **Forecast Board** is a six-column chalkboard with day-specific pictograms. Choices can create sunshine, rain, rain-then-sun, fog, snow, snow-and-fog by area, breezes, calm, sleet, gales, borrowed clouds, and the Saturday rainbow.

## Six canonical endings

| ID | Ending | Outcome / condition |
|---|---|---|
| **E1** | **A Rainbow for Everyone** · *truest* | Learn Article 9 and hourly weather, preserve at least three clouds and one ice block, keep **all five moods ≥ 3**, and approve the Saturday grand compromise. |
| **E2** | **Sunshine, Officially** | Give the wedding sunshine, or attempt the grand compromise when at least one delegate remains unhappy. |
| **E3** | **The Barrel Runs Dry** | Deplete the cloud barrel below zero; sustainable weather production fails. |
| **E4** | **Snow on the Wedding** | Rule for snow on Saturday; the royal wedding becomes an extravagant snowball fight. |
| **E5** | **Impeached** | Lose all gravitas, drive two delegates to zero hearts, or deliberately rain on the wedding. The Royal Coin replaces the Speaker. |
| **E6** | **Whatever Happens** | Resign and let Granny Nimbus stop following committee instructions; the sky mostly drizzles. |

The exact HTML conditions for **E1** are `hours && streets && clouds >= 3 && ice >= 1` to offer the grand motion, followed by `every(delegateMood >= 3)` to earn the best ending. Otherwise, that grand motion resolves to **E2**.

## Walkthrough to the truest ending — spoilers

This route follows the uploaded source's walkthrough and matches the published resource effects.

1. **Preparation:** Read the **Grand Almanac** to learn Article 9. Visit the **Weatherhouse** to learn hourly weather; optionally ask Granny Nimbus about the wedding.
2. **Monday:** Rule **rain until nine, then sunshine and a breeze**. Cloud barrel **4 → 2**.
3. **Tuesday:** Rule **snow at the school playground, fog at the harbour**. Clouds **2 → 1**; ice **2 → 1**.
4. **Wednesday:** Declare **Nothing At All** to replenish supplies. Clouds **1 → 5**. (Borrowing a cloud is another available route; the simple hot-sun recovery does not supply as much.)
5. **Thursday:** Rule **breeze until noon, calm afterward**.
6. **Friday:** Rule **rain only on the fields, with the Green kept dry**. Clouds **5 → 3**.
7. **Saturday:** Choose the grand motion: **dawn shower for the fields, mist over the harbour until eight, breeze for washing at ten, sun for the wedding at noon, rainbow at four, and one addressed snowflake for every child at dusk**.

The committee remains at or above three hearts across all five delegates. You arrive on Saturday with **exactly three clouds and one ice block**, sufficient for the grand weather plan. The motion passes **five votes to nil**, producing **A Rainbow for Everyone**.

## Visual and interaction design

The story's recognizable design is a **municipal-whimsical** mixture of brightly drawn weather, chamber procedure, cheerful disagreement, and limited supplies:

- **Forecast board:** Six-day green chalkboard with a wooden frame and weather SVG pictograms.
- **Committee:** Illustrated delegates in distinctive hats, each with a changing expression and five-heart scale.
- **The Sky:** Cloud barrel, icehouse, gravitas indicators, and learned-rule reminders.
- **Minutes:** Typewriter-styled formal rulings and daily vote results.
- **Choices:** Icon-bearing chalkboard tiles, plus effects displayed before commitment.
- **Typography:** **Bagel Fat One** (display), **Nunito** (body), **Special Elite** (typewritten resolutions).
- **Themes and accessibility:** Light/dark modes, responsive single-column layout below 900px, compressed forecast graphics on narrow screens, collapsible sidebar panels, keyboard controls and reduced-motion support.

The published HTML also includes the official **The Axiom Continuum** publisher identity and SVG favicon.

## Expansion possibilities

The original design records these **exploratory** opportunities, not approved commitments:

- A second weather week with new delegates such as the Society of People Who Like Indoors or a Royal Astronomer seeking clear nights.
- The Duchess of Gloam's unpaid cloud invoice and a potential weather dispute.
- Granny Nimbus retiring and the search for a Weatherhouse apprentice.
- **Article 4**, which prohibits weather on the King's birthday.

## Source reconciliation and QA

The uploaded `weather-committee.md` is a substantive companion guide, including its premise, character list, mechanics, day-by-day program, six endings, detailed truest-ending walkthrough, visual design and expansion ideas. These have been preserved and reconciled against the **already-committed playable HTML**, which governs the actual choice logic.

The Markdown's earlier testing note reports **4,540 states**. The final reviewed HTML phase reported a **branching audit of 4,549 reachable states and 4,599 transitions**, with all six endings reachable and no invalid destinations, plus passed JavaScript syntax validation. Those final review figures replace the earlier export's count. Automated graph testing is distinct from live-browser rendering and Founder play review.

## Repository and publication

- **Canonical playable HTML:** [index.html](./index.html)
- **Playable URL:** https://theaxiomcontinuum.com/stories/the-weather-committee/
- **Repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended GitHub destination:** `stories/the-weather-committee/README.md`
- **Discovered endings storage:** `weather-endings`
- **In-progress game storage:** `tac-weather-committee-daily-door-v1`
- **Indexing during review:** `noindex,nofollow`
- **Homepage:** Not modified during this story's two-stage workflow.

**Documentation complete; Founder play review pending.** HTML and companion README are published through separate commits, each limited to one repository file.
