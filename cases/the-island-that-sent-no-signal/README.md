# Cluortal No. 31 · The Island That Sent No Signal

**2038 · North Atlantic · Scientific disappearance · Hard · Finale · 35–50 minutes**

**Signature mechanic: Sensor Streams.** The station's six-hourly telemetry runs from Wed 13 Oct 18:00 to Sat 16 Oct 12:00. Its own streams are mast pressure, generator load, door events, bunkhouse CO2 and the transmitter. Beside them sit two **independent streams ★**: weather buoy 64-117 (from the Coast Guard) and the decommissioned north light's battery meter (from the lights authority). The in-game legend teaches three rules:
- The station controls its own streams.
- When the station and an independent stream disagree, believe the one the station doesn't own.
- A recording gives itself away by repeating.

| Row | Mast | Buoy ★ | Load | Doors | CO2 | Transmitter | North light ★ |
|---|---|---|---|---|---|---|---|
| 13 Oct 18:00 – 14 Oct 18:00 | 1011…1003 | matches | 21/17/23/22/20 | normal | 540–700 | all-clear | 0.0 |
| **15 Oct 00:00** (last honest) | 1001 | 1000 | **43 kW** | **02:14 all 4 exterior doors OPEN, no close** | **1,900 → 46,000** | **keyed 02:31, 40 s, nothing logged** | 0.9 |
| **15 Oct 06:00 onward** | 1011, 1009, 1006, 1004… (repeats) | **991, 979, 984** (a storm) | repeats | repeats | repeats | all-clear | night draws 1.6, 1.4 |

**Step 1:** pick the first dishonest row, **15 Oct 06:00**. This needs the station archive and the buoy data, and gives the finding *The station is a recording*.

**Step 2:** tick what the last honest row shows.
- True: CO2 past 4%, the doors opened together, and a deleted transmission.
- Distractors: a fire, storm damage, a power failure.

Getting this right gives the finding *What happened at two in the morning*.

**Also uses: a concealed experiment's notes.** Tomas Okafor's notebook, from Halcyon's locked container "Annex B", records "Basalt Sink":
- An unpermitted injection of liquefied CO2 into borehole BH-2, in the Bowl, at 140 bar.
- 23:50 on 14 Oct: "Hissing at the BH-2 wellhead… If it gets worse we go uphill, to the north light."

**The solution:**
- The wellhead split. CO2, heavier than air, filled the volcanic Bowl.
- The five researchers fled uphill at 02:14 and have lived at the old north light ever since. Ines Duarte has a broken ankle, and they couldn't pass the Bowl to reach the boat. They burned the lamp every night.
- At 05:52 Dominik Varga, Halcyon's operations lead, read the door log from Aberdeen and saw they'd got out. At 05:58 he switched the station to loop mode, and at 06:10 he deleted the 02:31 mayday.
- Halcyon then chartered a ship to recover the rig, with "crew transfer: none required".
- Maren Lindqvist noticed the all-clears were identical: nine days of "Happy birthday Tomas".

## The people

- **Dominik Varga**: Halcyon's ops lead. The culprit; he came with you "to help". If he is on guard (suspicion ≥ 2) and the uplink log has not been secured, he reboots the server at **11:30** and wipes it. **The eight-minute log search must finish strictly before 11:30 when he is alerted**; starting earlier is not sufficient. He also offers a paid head-of-safety position (sus ≥ 2) and a misleading draft report.
- **Sigrún Hall**: the pilot. She saw a light on the north hill and knows the boat never left.
- **Prof. Helga Brandt**: the consortium director, by satellite phone. She never authorised Basalt Sink, and forwards Halcyon's ship charter.
- **Maren Lindqvist**: the station chief's sister. She noticed the repeated messages.
- **Lt. Ari Jónsson**: Coast Guard. Provides the buoy data and the north light's battery meter.
- **Dr. Rúna Lindqvist**: the station chief. Found alive at the north light, with Tomas Okafor, Ines Duarte, Kalle Mäkinen and Priya Raman. The red herring, since her initials sign the fake all-clears.
- **You:** the consortium's safety investigator.

## Connections (11)

| ID | Link |
|---|---|
| R1 | Replay finding + buoy → the station is replaying a past day |
| R2 | Maren's copies + replay finding → the all-clears are recordings |
| C1 | Leak finding + notebook → a CO2 leak from the injection test |
| C2 | Notebook *(look closer)* + wellhead → BH-2 is still leaking |
| W1 | Uplink log + Varga's word → he switched to loop by hand |
| W2 | Uplink log *(look closer: he read the door log)* + charter → he knew they were alive |
| F1 | North light meter + leak finding → someone is burning the light |
| F2 | Survivors + notebook → they went uphill as planned |
| M1 | Brandt's word + notebook → Basalt Sink was never permitted |
| X1, X2 | The boat never left; Hall saw the light *(optional)* |

**Strict proofs:**
- **Replay:** R1 + R2.
- **Cause:** C1 + C2.
- **Who:** W1 + W2.
- **Fate:** F1 + F2. F2 needs the 40-minute climb to the light.
- **Why:** M1.

**When you can give the finding:** in the ops room once the leak is found, or on the helipad at 14:00 (the forced scene). Until then the button is disabled, and `resolve()` refuses as well.

## Time (Sunday 24 October 2038)

| When | What happens |
|---|---|
| 09:00 | Landfall |
| 11:00 | Chapter II |
| 11:30 | If Varga is on guard (suspicion ≥ 2), he wipes the unrecovered uplink log. The eight-minute retrieval must finish **strictly before 11:30**; searches crossing the cutoff find a wiped log. |
| 12:30 | Chapter III |
| 14:00 | The weather window closes (forced scene) |

## Endings (7)

1. **The Light on the North Hill**: the best ending. Everyone comes home.
2. **A Name Without Proof**
3. **The Wrong Signature**: you name Rúna or Brandt, or call it an automatic failover.
4. **The Window Closes**: you leave without a finding.
5. **Failover**: you sign Varga's report.
6. **Head of Safety**: you take Varga's offer.
7. **The Bowl**: you take off the breathing set.

**Ranks:** Chief investigator / Senior investigator / Safety investigator / Data clerk / Looped.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at **13:00**, with one incorrect stream row and one incorrect warning-sign judgment, scoring **88**.
- It reports checking the finding guard, the wiped uplink log, the forced 14:00 report scene with inputs locked, chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** The Sensor Streams answer key, independent buoy comparison, eleven deductions and final proof predicates were reconciled with the published HTML. The committed implementation was checked for its eight-minute uplink-log deadline guard and its corrected header marker for the first replayed row. JavaScript syntax validation passed during HTML publication. **Independent full seven-ending browser playthroughs and responsive visual testing were not completed.**

## Notes on setting

This is near-future fiction.

**Fictional:** Kaldsker and its observatory, the North Atlantic Observatory Consortium, Halcyon Climate Systems, "Basalt Sink", buoy 64-117, and every person.

**Real-world grounding:**
- Carbon storage by injecting CO2 into basalt is real (Iceland's CarbFix has done it since 2012). Real projects are permitted and monitored.
- CO2 is denser than air and pools in hollows. Lake Nyos in 1986 is the grim natural example. Concentrations of a few per cent cause unconsciousness and death.
- Remote telemetry, failover loops and independent cross-checks (moored weather buoys, separately monitored navigation lights) are standard practice.
- 24 October 2038 is a Sunday, and 15 October 2038 a Friday.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-island-that-sent-no-signal/
- **HTML source:** `cases/the-island-that-sent-no-signal/index.html`, repository `doorquests/doorquests-web`, branch `main`.
- **Sensor Streams first-lie answer:** **Friday 15 October 2038, 06:00**, the **seventh displayed row** (zero-based `FIRST_LIE=6`). It repeats the station readings from **Wednesday 13 October, 18:00**, while independent buoy 64-117 shows different atmospheric pressure. The preceding **15 October 00:00** report is the last authentic record. The header illustration was separately corrected so its hollow telemetry dots begin at the matching first-loop position, rather than one pip early.
- **Sensor Streams second answer:** select **carbon dioxide**, **four exterior doors opening together** and **a 40-second unlogged transmitter keying**. Do **not** select generator fire, storm damage or power failure. The 00:00 row records bunkhouse CO₂ increasing from **1,900 to 46,000 ppm** (4.6%), doors opened at **02:14**, transmitter keyed at **02:31**, and generator load **43 kW**.
- **Published 11:30 safeguard:** Varga reaching suspicion **2 or more** causes erasure of the **unrecovered** uplink maintenance log at **11:30**. The eight-minute log read now fails when `clock + 8 >= WIPE_T` under those conditions. A search that starts before 11:30 but ends at or after it cannot award the log. Any log already collected is retained. This safeguard was committed in the HTML review, **not in this README commit**.
- **Clock model:** play starts on **Sunday 24 October 2038 at 09:00**; Chapter II begins at **11:00**; conditional log wipe at **11:30**; Chapter III at **12:30**; helicopter must depart at **14:00**, which forces the final reporting scene. Interviews cost seven minutes; showing evidence and looking closer cost four minutes; the maintenance-log retrieval costs eight minutes; the climb to the north light takes forty minutes.
- **Best-ending proof gates:** repeated signals **R1+R2**, CO₂-leak cause **C1+C2**, Varga's knowing manual intervention **W1+W2**, five surviving researchers at the north light **F1+F2**, and unpermitted experiment motive **M1**. X1 and X2 provide optional evidence that the boat remained and Hall saw the light. **C2** requires closer examination of Okafor's notebook; **W2** requires closer examination of the uplink log.
- **E1 final answers:** crew **alive at the north light**; cause **CO₂ leak from an unpermitted BH-2 injection**; culprit **Dominik Varga, manually switching to loop from Aberdeen**; motive **concealment of Basalt Sink until Halcyon could recover its rig**. Naming Varga but missing complete proof yields E2; wrongly blaming Rúna or Brandt, or calling it automatic failover, yields E3. E4–E7 follow explicit alternative choices.
- **Finding availability:** the player can give a finding from **the ops room** once the leak is identified, or from **the forced 14:00 helipad scene**. The underlying `resolve()` location guard matches these conditions.
- **Seven endings:** E1 *The Light on the North Hill*; E2 *A Name Without Proof*; E3 *The Wrong Signature*; E4 *The Window Closes*; E5 *Failover*; E6 *Head of Safety*; E7 *The Bowl*.
- **Browser persistence keys:** `dq-cluortal-31-nosignal-v1`, `dq-cluortal-31-endings`, `dq-cluortal-31-chapters`.
- **Review scope:** reconciled the supplied author Markdown to the published Sensor Streams logic, timing, eleven evidence connections, seven ending gates and two HTML publication corrections. Environmental and scientific notes remain author-supplied background, not independently researched as part of this publication pass.
- **Documentation status:** COMPLETE — APPROVED.
