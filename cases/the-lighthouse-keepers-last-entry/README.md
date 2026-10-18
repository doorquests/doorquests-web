# Cluortal No. 28 · The Lighthouse Keeper's Last Entry

**1897 · Firth of Lorn, Argyll (west coast of Scotland) · Maritime murder · Easy · 20–35 minutes**

**Signature mechanic: the Tide Table.** Skerrach Rock has two ways on and off, and both depend on the tide:

| Route | When it can be used |
|---|---|
| **The causeway** | dry from **2 hours before low water to 2 hours after** |
| **The landing stage** | water for a boat from **3 hours before high water to 3 hours after** |

The tab shows the week's tide table (each day about 50 minutes later). It also shows a tide curve for Thursday into Friday, with the causeway and boat windows shaded, the claimed 5.30 p.m. departure, and the moment the light stopped. You judge each visitor's claimed visit possible or impossible:

| Visitor | Day | Claim | Verdict |
|---|---|---|---|
| Rev. Lamont | Mon | causeway 4.00–6.30 a.m. | LW 5.10, open 3.10–7.10 ✓ |
| Miss Blair | Tue | boat 10.00 a.m.–2.30 p.m. | HW 12.10, landing 9.10–3.10 ✓ |
| Duncan Bell | Wed | causeway 6.00–8.45 p.m. | LW 7.15, open 5.15–9.15 ✓ |
| Angus MacRae | Thu | boat in 12.30, **out 5.30 p.m.** | HW 1.50, landing only until **4.50**; causeway not until 6.05 ✗ |

Follow-up: his skiff was back in harbour on Friday, so he sailed it off. The earliest it could float was **11.15 p.m.** That is after the light's machine stopped at 10.40, which means Hector was dead.

**The tides also govern you.** On Friday the causeway is open from 6.30 to 10.30 a.m. From 10.30 to 11.40 nothing crosses (wading in anyway is a bad ending). After that, the assistant keeper rows you across, provided a crossing can finish within the access window and before the 5 p.m. deadline. A causeway walk takes **20 minutes** and a boat crossing **30 minutes**. If a route cannot safely finish before the current window closes, the player can **wait safely until the 11.40 a.m. boat window** when that future departure is still available. The header's sea level changes with the game clock using a simplified tide curve derived from the fictional tide schedule.

**Also uses: a supply manifest.** It lists 6 cases of paraffin. Hector's pencil note reads "4 cases only rec'd. 3rd time this quarter", and the store holds exactly four new cases. Hector meant to report MacRae to the Northern Lighthouse Board.

**The solution:** Angus MacRae, the stores contractor, had been stealing the Board's oil. He was stuck on the rock until the night flood. He struck Hector, tore out Thursday's log page (which named him), and floated off after 11.15. The page is crumpled under the bottom boards of his skiff, the 'Morag'. Miss Blair's sketch, dated 5.45 p.m., shows the 'Morag' lying high and dry by the landing.

## The people

- **Hector Ross**, 58: principal keeper for eleven years, "careful, stubborn, honest". The victim.
- **Angus MacRae**, 50: the Board's stores contractor. The culprit. He plans to sail for Ireland on the evening ebb.
- **Iain Gillies**, 30: assistant keeper, ashore on leave. He knows the rock's rules and that the machine needs winding every two hours.
- **Miss Euphemia Blair**: an Edinburgh painter who drew the rock every day.
- **Duncan Bell**: Hector's nephew, in debt, quarrelled with him on Wednesday. The red herring; he has an alibi.
- **Rev. Duncan Lamont**: the minister, Hector's oldest friend.
- **You:** the procurator fiscal's depute from Oban.

## Connections (7)

| ID | Link |
|---|---|
| T1 | The impossible departure + tide table → he couldn't have left at 5.30 |
| T2 | Miss Blair's sketch *(look closer: the 'Morag' aground)* + MacRae's account |
| W1 | Torn page + log *(look closer: the stub in the binding)* → the missing page was in his boat |
| W2 | His real departure + coastguard log → he was on the rock when the light stopped |
| M1 | Manifest + oil store → the stolen oil |
| X1, X2 | Bell's departure fits the tide; nobody wound the machine after 8.30 *(optional)* |

**Strict proofs:**
- **When:** T1 + T2.
- **Who:** W1 + W2.
- **Why:** M1.

**When you can give the finding:** at the harbour once the impossible departure is found, or on the quay when the fiscal's steamer arrives at 5 p.m. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| 8.00 a.m. | Start, on the rock |
| 10.30 | The causeway floods |
| 11.40 | A boat can cross (Chapter II) |
| 2.00 p.m. | If you've rattled MacRae (unease at least 2), he burns the page in his boat's stove unless already recovered. The six-minute search of the skiff must **finish strictly before 2.00 p.m.** in this case; a search overlapping the burning cannot recover it. |
| 3.00 | Chapter III |
| 5.00 | The steamer and the ebb (forced scene) |

## Endings (7)

1. **The Last Entry**: the best ending.
2. **A Name Without Proof**
3. **The Wrong Visitor**
4. **A Fall on the Stair**: you agree it was a fall.
5. **The Evening Tide**: you confront MacRae alone, and he sails.
6. **Two Cases of Oil**: you take the bribe.
7. **Caught by the Flood**: you wade the flooded causeway.

**Ranks:** Procurator fiscal / Fiscal's depute / Sheriff's clerk / Coastguard's boy / Caught by the tide.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run around 10.00 a.m., with one wrong visitor judgment and one wrong departure answer, scoring 88.
- It reports checking closed crossing windows, later boat crossing, page burning, forced 5 p.m. decision, chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** The tide-table answers, seven evidence connections and best-ending proof conditions were reviewed against the published HTML. JavaScript syntax validation passed during HTML review. The committed source was checked for completion-aware crossings, safe waiting and the six-minute skiff-search deadline guard. **An independent seven-ending browser playthrough and responsive visual validation were not completed** because local Chromium navigation was blocked.

## Notes on period and setting

**Real elements:**
- The Northern Lighthouse Board, its keepers' station journals (logged lighting-up times, weather, stores, visitors) and its contracted stores deliveries.
- Paraffin lamps with clockwork rotating machines wound by weight, every couple of hours.
- Tidal causeways and landings that work only at certain states of the tide.
- Semi-diurnal tides about 50 minutes later each day.
- Coastguard watch-houses.
- The procurator fiscal's role in investigating sudden deaths in Scotland.
- 17 September 1897 really was a Friday.

**Fictional:** Skerrach Rock and its light, Kilbride, the tide times (realistic but invented), and every person.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-lighthouse-keepers-last-entry/
- **HTML source:** `cases/the-lighthouse-keepers-last-entry/index.html` in `doorquests/doorquests-web` (`main`).
- **Tide Table solution:** the four visitor claims are **possible (Lamont), possible (Blair), possible (Bell), impossible (MacRae)**. For Thursday 16 September the listed high water is **1.50 p.m.**, so the landing has water from **10.50 a.m. until 4.50 p.m.** MacRae's claimed **5.30 p.m.** departure by skiff is impossible. The causeway does not open until **6.05 p.m.**; because the *Morag* returned to harbour, the earliest feasible boat departure was **11.15 p.m.**, after the lighthouse ceased revolving at **10.40 p.m.**
- **Live Friday crossing mechanics:** causeway availability is **6.30–10.30 a.m.** and **6.55–10.55 p.m.**; boat availability is **11.40 a.m.–5.40 p.m.** and later at night. The playable investigation ends at **5.00 p.m.**, so the later Friday windows are not practical. A causeway crossing costs **20 minutes**, a boat crossing **30 minutes**; both departure and arrival must be within the relevant window, with the trip completed strictly before 5 p.m. Crossing windows use the game's fictional tide table; the animated water level is illustrative.
- **Safe waiting correction:** when no crossing can safely finish in the current window, the published HTML offers a **wait until 11.40 a.m.** action if that boat opening is still in the future. Waiting does not cause the dangerous E7 ending. Choosing to wade a flooded causeway explicitly can cause E7. This prevents the player from being forced to take an unsafe route during the 10.30–11.40 gap.
- **Published 2.00 p.m. safeguard:** MacRae's unease reaching **2** or higher triggers burning of the unrecovered log page at **2.00 p.m.** Searching his skiff takes **six minutes** and must finish **strictly before that deadline** to recover the page when the destruction is pending. A page already found stays collected. This gameplay safeguard was included in the separately committed HTML; this README does not change game code.
- **Clock model:** play begins at **8.00 a.m., Friday 17 September 1897**; causeway closes **10.30 a.m.**; boat access begins **11.40 a.m.** (Chapter II); possible destruction **2.00 p.m.**; Chapter III begins **3.00 p.m.**; the procurator fiscal arrives and forces the final scene at **5.00 p.m.** Interviews take six minutes; on-rock travel typically three and within-shore travel six minutes.
- **Best-ending proof gates:** impossible departure **T1 + T2**, presence at the killing and removed page **W1 + W2**, and oil-theft motive **M1**. Correct findings identify **Angus MacRae**, **after 11.15 p.m.**, **struck in the tower and the log page removed**, and **Hector's intended report of stolen paraffin**. X1 and X2 are optional corroborations; there are **seven connections total**.
- **Closer-examination requirements:** T2 requires examining **Blair's sketch** to identify the stranded *Morag*; W1 requires examining the **lighthouse log** to match the torn-page stub.
- **Browser persistence keys:** `dq-cluortal-28-lighthouse-v1`, `dq-cluortal-28-endings`, `dq-cluortal-28-chapters`.
- **Review scope:** reconciled the source-author Markdown against the published tidal windows, claim solutions, seven deductions, proof predicates, seven endings and post-review crossing and deadline safeguards. The historical context is retained as supplied by the case author; the tide times and setting are fictional.
- **Documentation status:** COMPLETE — APPROVED.
