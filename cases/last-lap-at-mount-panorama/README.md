# Cluortal No. 22 · Last Lap at Mount Panorama

**1987 · Bathurst, New South Wales · Motorsport sabotage · Medium · 30–45 minutes**

**Signature mechanic: the Pit Wall.** The CAMS lap scorers' chart gives the typical lap, in-lap and out-lap around each of car 17's three stops, plus a measured pit-lane loss of 20.0 seconds. You work out each stop's stationary time:

> stationary = in-lap + out-lap − 2 × typical lap − 20.0 s

Then you compare each result with the team's own stopwatch sheet and say which stop disagrees, and by how much. The page explains how to read minutes:seconds, and a wrong answer gets a hint.

| Stop | Lap | Typical | In | Out | Worked out | Stopwatch |
|---|---|---|---|---|---|---|
| 1 | 27 | 2:22.0 | 2:38.0 | 3:02.0 | 36.0 | 36.2 (L.F.) |
| 2 | 54 | 2:23.0 | 2:40.0 | 3:18.0 | 52.0 | 51.8 (L.F.) |
| 3 | 70 | 2:23.0 | 2:39.0 | 3:13.0 | **46.0** | **38.0 (C.P.)** |

A bar chart of laps 73–80 (2:23.0 rising to 2:24.9) shows the brakes fading lap by lap.

**Also uses: radio transcripts.** Lorraine's cassette of the pit radio:
- "Col, you've got the watch this stop."
- "Fuel's slow, Bruce."
- "Stop was thirty-eight."
- "Pedal's going a bit long into the Chase."
- "No pedal."

**The solution:** At stop 3 the refueller, Col Price, lifted the bonnet after fuelling and squirted watered brake fluid into the reservoir. It took about 8 seconds, which the pit marshal logged. Col was holding the team stopwatch, so he left those seconds out. Over eleven laps of braking the water came closer to boiling, until on the last lap at The Chase the fluid turned to vapour and the pedal went to the floor. There are no skid marks before the sand trap. Col had $2,000 on car 8 at 5/1 with an illegal SP bookie in Sydney. Neil Harrow survives with a broken collarbone and concussion.

**The header:** a timing-screen panel with a chequered band and the Mount Panorama circuit with its corners named. A red cross marks The Chase until the brakes are explained, then it becomes a vapour-bubble icon. A "+8s" marker appears on the pit straight once you find the stop.

## The people

- **Neil Harrow**, 34, from Orange. The driver.
- **Tony Marchetti**, 31, the co-driver. Jealous of Neil, and honest about it.
- **Bruce Fennell**, the team owner. His sponsor, Harvest Bank, can walk away if the crash is mechanical, so he needs it to be driver error.
- **Lorraine Fennell**, the team's timekeeper for nine years. She was taken off the stopwatch for stop 3.
- **Gary Dowd**, the crew chief. He drains and flushes the brakes at 6:30, which would destroy the evidence.
- **Col Price**, the refueller. Gambling debts and a little girl.
- **Joan Tuckwell**, a volunteer lap scorer since 1966.
- **Doug Ah Kin**, the CAMS pit-lane marshal, Bathurst-born, from an old Chinese-Australian family of the goldfields.
- **You:** a CAMS technical scrutineer.

## Connections (9)

| ID | Link |
|---|---|
| F1 | Brake fluid *(look closer: it spits on a hot iron)* + run-off at The Chase → the fluid boiled; no locked wheels |
| F2 | Radio + lap chart → the pedal faded lap by lap; he wasn't overdriving |
| S1 | Stop 3 finding + stopwatch → the watch lost 8 seconds |
| S2 | Stop 3 finding + marshal's log → the bonnet was up during them |
| W1 | Radio + stopwatch → Col held the watch (initialled C.P.) |
| W2 | Col's squeeze bottle *(look closer)* + brake fluid → the same watered fluid |
| M1 | Col's betting note + lap chart → $2,000 on car 8 |
| X1 | Bruce + Neil *(optional)*: Bruce needs it to be driver error |
| X2 | Gary + brake fluid *(optional)*: the flush would have washed the proof away |

**Strict proofs:**
- **Brakes:** F1 + F2.
- **When:** S1 + S2.
- **Who:** W1 + W2.
- **Why:** M1.

**When you can give the finding:** from the control tower once stop 3 is found, or at the stewards' hearing at 8:00 p.m. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| 5:00 p.m. | Start, after the flag |
| 6:30 p.m. | Gary drains and flushes the brakes. The five-minute sample collection must **finish strictly before 6:30 p.m.**; without the original fluid sample, required connections **F1 and W2** become unavailable. F2 (radio + lap chart) is unaffected. Chapter II begins. |
| 7:00 p.m. | If you've rattled Col (composure/unease at least 2) and haven't already recovered his squeeze bottle, he throws it in the creek. A six-minute toolbox search crossing that disposal time cannot recover it. |
| 7:15 | Chapter III |
| 8:00 | The stewards' hearing (forced scene) |

**Travel:** 2–4 minutes around the pits and paddock; 8 minutes down Conrod Straight to The Chase.

## Endings (7)

1. **The Missing Eight Seconds**: the best ending.
2. **A Name Without Proof**
3. **The Wrong Man in the Pits**: you blame Gary, Tony or Bruce.
4. **Driver Error**: you let the team's report stand.
5. **Over the Mountain**: you confront Col alone, and he runs.
6. **A Seat on the Pit Wall**: you take Bruce's job offer.
7. **A Racing Incident**: you call it a mechanical failure, no one's fault.

**Ranks:** Chief scrutineer / Senior scrutineer / Scrutineer / Flag marshal / Spectator on the hill.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at approximately 7:00 p.m., with one incorrect sum and one incorrect gap answer, scoring 88.
- It reports checking the finding guard, the 6:30 flush, the 7:00 bottle disposal, the forced hearing, chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px, with a responsive per-stop table layout on phones.

**Publication QA:** The stationary-time arithmetic was independently checked: 36.0, 52.0 and 46.0 seconds, compared with 36.2, 51.8 and 38.0 seconds on the team stopwatch. JavaScript syntax validation passed, and a Chromium smoke test loaded the investigation and Pit Wall without page errors. **Full seven-ending playthrough and responsive visual checks were not independently completed.**

## Notes on period and setting

**Real elements:**
- **The circuit:** Mount Panorama, with its named corners (Hell Corner, The Cutting, Skyline, Forrest's Elbow, Conrod Straight, Murray's Corner).
- **The Chase:** the chicane added to Conrod Straight for 1987.
- **The cars and the sport:** Group A touring cars (Sierra RS500 and VL Commodore were both racing in 1987). CAMS (the Confederation of Australian Motor Sport) supplied the stewards, scrutineers and pit marshals. Volunteer lap scorers kept manual lap charts. Refuelling and driver changes were part of endurance stops.
- **The brakes:** glycol brake fluid absorbs water and its boiling point falls sharply; under heavy braking it turns to vapour and the pedal goes to the floor ("vapour lock").
- **Betting:** illegal SP (starting-price) bookmakers were common in NSW at the time.

**Fictional:** The Panorama 500 is an invented race, not the 1987 James Hardie 1000. Fennell Racing, Cormack Racing, Harvest Bank and every person are invented too, and no real team or driver is depicted.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/last-lap-at-mount-panorama/
- **HTML source:** `cases/last-lap-at-mount-panorama/index.html` in `doorquests/doorquests-web` (`main`).
- **Pit Wall calculation:** stationary seconds = in-lap + out-lap − two typical laps − 20.0 seconds pit-lane loss. The three correct results are **36.0**, **52.0**, and **46.0** seconds. Team stopwatch values are **36.2**, **51.8**, and **38.0**; the answer to the discrepancy question is **Stop 3, eight seconds**.
- **Clock model:** investigation begins at 5:00 p.m.; the scheduled brake flush is 6:30, potential bottle disposal 7:00, Chapter III begins 7:15, and the stewards' hearing forces a scene at 8:00. Travel takes two to eight minutes depending on destination; questions take six minutes.
- **Published brake-fluid safeguard:** drawing the five-minute sample from car 17 must finish **strictly before 6:30 p.m.** If Gary's flush occurs during the attempted sampling action, the original fluid cannot be recovered. The F1 and W2 deductions require this fluid; F2 instead requires the radio and lap chart.
- **Published bottle safeguard:** if Col has been sufficiently rattled and his bottle is still undiscovered, disposal occurs at **7:00 p.m.** A six-minute search that would finish at or beyond the disposal time does not recover it. Without the bottle, the required W2 link becomes unavailable. These corrections already exist in the published HTML; this README commit does not modify gameplay.
- **Best-ending proof gates:** brakes **F1 + F2**; sabotage moment **S1 + S2**; perpetrator **W1 + W2**; financial motive **M1**. Closing answers must identify **Col Price**, **water-induced vapour in the brake fluid**, **stop three's missing eight seconds** and **his bet on car 8**. X1 and X2 are optional supporting connections.
- **Evidence closer examinations:** F1 requires examining the brake-fluid sample; W2 requires examining Col's squeeze bottle. The sample and bottle must first be recovered before their respective time-sensitive losses.
- **Browser persistence keys:** `dq-cluortal-22-panorama-v1`, `dq-cluortal-22-endings`, `dq-cluortal-22-chapters`.
- **Review scope:** reconciled the source-author Markdown with the published Pit Wall arithmetic, radio and stopwatch records, nine deductions, seven endings, critical evidence windows and proof predicates. Period-setting notes were retained as source-author context, not independently researched during this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
