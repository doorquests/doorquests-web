# Forty Days at Ironwood

**The Axiom Continuum · Daily Door #22**  
**Genre:** Medieval siege drama / resource-management adventure / moral strategy  
**Setting:** Ironwood Castle above the River Ess, besieged by the Duke of Corvane  
**Document type:** Canonical HTML companion and repository reference  
**Documentation status:** COMPLETE — APPROVED  
**Date:** 2026-10-15

## Premise

Lord Edmund has departed for the King's court, leaving his **steward** in charge of Ironwood Castle. The Duke of Corvane approaches with two thousand men and six vassals' banners. The steward commands **120 soldiers and 80 servants**, holds **150 sacks of grain**, and must decide whether to shelter **300 villagers** fleeing the army.

The siege is a contest of arithmetic, duty and political truth. The Duke's vassals are obligated to serve only **forty days**; holding out until the forty-first morning could force his army to disperse. But the steward can also discover why the Duke came: Lord Edmund dammed the **River Ess**, ruining mills and harvests downstream. The strongest outcome requires more than surviving—it calls for a just peace and protection of those entrusted to the castle.

## Setting and principal characters

- **The steward:** Playable protagonist, responsible for rations, defenses, people and negotiations.
- **Lord Edmund:** Absent lord of Ironwood whose dam caused the dispute; his private letter can prove it.
- **Duke of Corvane:** Besieging noble seeking redress for the river's obstruction.
- **Captain Orrin:** Commander of Ironwood's soldiers, offering military and sometimes ruthless counsel.
- **Father Ambrose:** Chaplain who knows that the Duke's six vassals owe forty days of military service.
- **Sir Ivo:** The Duke's herald, who presents surrender terms and reveals the grievance if questioned.
- **Old Hesk:** Village miller whose expertise can reduce the granary's losses if villagers were admitted.
- **Sergeant Brask:** Garrison sergeant implicated in signaling the besiegers and planning to open the postern.

## The forty-day structure

The story progresses through **eight five-day watches**. Choices at each watch alter supplies and the castle's stability; at the end of a watch the selected ration is consumed and morale changes.

| Watch | Days | Main dilemma |
|---|---|---|
| **1** | 1–5 | Admit all villagers, admit only able-bodied workers, or close the gates |
| **2** | 6–10 | Respond to Sir Ivo's surrender terms and investigate the Duke's grievance |
| **3** | 11–15 | Handle spoiled grain; deal openly, conceal it in bread, or seek the miller's help |
| **4** | 16–20 | Counter the sappers or reinforce the vulnerable east tower |
| **5** | 21–25 | Confront rumors, demonstrate solidarity, or expose Sergeant Brask |
| **6** | 26–30 | Handle Lord Edmund's news that royal relief is still at least fifty days away |
| **7** | 31–35 | Decide whether to expel mouths, reduce rations further, or raid supply wagons |
| **8** | 36–40 | Face the assault, negotiate using the incriminating letter, or accept surrender |

The route may end before Day 40 through famine, loss of morale, betrayal, breach, or a negotiated surrender.

## The Steward's Table — mechanical reference

The player can adjust the ration lever among **Full** (*bread and ale*), **Half** (*bread*), and **Short** (*thin pottage*). Their consumption multipliers are **1.0**, **0.6**, and **0.35**, respectively. Per-watch morale adjustments are **+1**, **0**, and **−1**.

The underlying supply system calculates **sacks consumed per day = mouths ÷ 100 × ration multiplier**. Five days of consumption are deducted at the watch transition. The interface forecasts the day grain is expected to run out; special choices may add or remove sacks and alter the number of mouths.

The Steward's Table also tracks:

- **Granary:** Starts at **150 sacks**, visualized with grain-sack icons and a depletion forecast.
- **Mouths:** Starts at **200**, before the village-gate decision.
- **Morale:** Starts at **6/10**; loss of hope can expose the postern.
- **Walls:** Start at **8/10**; siege events and the final assault cause damage.
- **Rumour:** Starts at **2/10**; secrecy and poor morale can amplify discontent.

Grain shortages result in **The Hungry Gate**. **Rumour reaching 10 or morale reaching 0** produces **The Postern**. **Walls reaching 0** produces **The Breach**. The engine checks these failures at watch transitions and certain scene-entry penalties. Choices that save resources can also carry moral or long-term strategic costs.

## Decision and recordkeeping interface

The top of the page preserves an original responsive SVG of the besieged keep, enemy tents, walls and banner, together with a **40-notch tally stick** marking elapsed days. Choices disclose expected increases, decreases, or the end of a five-day watch. The **Day-Book** records past watch decisions, ration settings and sacks spent.

Each scene presents three numbered choices; players can click or press **1**, **2**, or **3**, retrace a step, or restart. The game remembers discovered endings and stores current state and history in the browser.

The original visual design uses **Pirata One**, **Alegreya**, and **Alegreya SC**, with stone, blood-red, green and gold medieval colors, light/dark themes, and reduced-motion support. The reviewed HTML adds TAC publisher branding, official SVG emblem/favicon, responsive collapsible Steward's Table and Day-Book panels, and local save/restore.

## The six endings

| ID | Canonical ending | Trigger or consequence |
|---|---|---|
| **E1** | **The Fortieth Morning** · *truest* | Safeguard the villagers, uncover Lord Edmund's incriminating letter, keep the castle viable, and negotiate a peace that reopens the River Ess |
| **E2** | **The Banner Holds** | Survive the final assault until the Duke's vassals leave, but leave the deeper injustice unresolved |
| **E3** | **The Hungry Gate** | Exhaust the granary before the necessary duration |
| **E4** | **The Postern** | Let morale collapse or rumours reach their critical limit, allowing a night infiltration |
| **E5** | **The Breach** | Allow wall integrity to fall to zero |
| **E6** | **Terms Accepted** | Accept the Duke's surrender terms and give up the castle, while sparing its occupants |

**The Fortieth Morning** requires the Lord's letter (`letters` flag) and must not have marked the villagers as shut out, selectively admitted (`split`), or expelled. It is still necessary to manage grain, morale, rumor and walls well enough to reach the final diplomatic decision. Knowing the forty-day vassal rule provides useful context, but the published ending selection is based on the evidence and humanitarian record.

## Strategy notes — spoilers

A viable diplomatic approach is to **admit all 300 villagers**, ask Sir Ivo about the river, and **search Lord Edmund's papers** to uncover the letter. Keep rations and the granary under control throughout the siege, avoid surrender, and maintain sufficient morale, low rumours and defensible walls.

When rot is discovered, Hesk can reduce losses because villagers were admitted. At the final watch, ride under a white flag **with Edmund's letter**. Because the villagers were neither excluded nor expelled, the Duke will consider the peace instead of rejecting the steward's conduct.

Other routes can win the siege militarily while preserving the dam and the conditions that started the war; the game intentionally distinguishes tactical survival from reconciliation.

## Uploaded Markdown reconciliation

The uploaded `Forty Days at Ironwood.md` contains only **The Siege of Ironwood · Daily Door No. 22**, the title, **The Steward's Table**, **Set the ration for the coming watch**, **The Day-Book**, and **What you ordered, watch by watch**. It does **not** include the full scenes, resource formulas, decisions, ending logic, or testing details.

All such material in this document is reconciled from the previously committed, playable `index.html`, which is the **canonical source**.

## Validation and publishing

The HTML production review reported a passed JavaScript syntax check and **22,000 simulated playthroughs covering 168,222 choice transitions**. All six endings were reached, with no invalid scene destinations observed. These are **broad randomized tests**, not an exhaustive state-space proof or full live-browser playtest. The reviewed story also corrected village-admission prose to distinguish admitting all 300 villagers from admitting only 120.

- **Playable HTML:** [index.html](./index.html)
- **Story URL:** https://theaxiomcontinuum.com/stories/forty-days-at-ironwood/
- **Repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended GitHub destination:** `stories/forty-days-at-ironwood/README.md`
- **Publisher:** The Axiom Continuum · Daily Door #22, official SVG emblem and favicon
- **Search indexing:** `noindex,nofollow` pending Founder play review
- **Homepage:** Unchanged as part of this workflow

**Documentation status: COMPLETE — APPROVED.** Founder approval of the playable story remains separate. The HTML and companion README are committed independently, with one changed file per GitHub commit.
