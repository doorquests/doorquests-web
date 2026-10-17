# Case No. 03 · The Oxygen Ledger

**2142 · Juniper Habitat, Hellas Basin, Mars · Sci-fi sabotage · Medium (provisional) · 30–45 minutes (target, not measured)**
**Signature mechanic:** the Data Wall (reading telemetry graphs and flagging where they disagree)

**Status:** Case concept and locked truth **COMPLETE — APPROVED**. Corrected playable HTML committed; targeted logic and browser checks completed. Founder live-play review and comprehensive accessibility / state-space QA remain open.

**Playable source:** [`index.html`](./index.html) · **Public path:** https://doorquests.com/cases/the-oxygen-ledger/ · **HTML source commit:** [`4c27fb8`](https://github.com/doorquests/doorquests-web/commit/4c27fb84e21872066c38a2adcccaf22435fad765).

## Premise

Inspector Ana Ferreira of the Mars Authority's Life-Support Safety Board is at Juniper Habitat for its charter review. At 05:00 on Sol 1,412, the colony's oxygen ledger comes up twelve minutes short. The generator made up the loss, half the crew woke with headaches, and the system logged no fault. Seven people hold life-support clearance. The transport lifts at 18:00 with her finding.

## The locked truth

| Question | Answer |
| --- | --- |
| What drained the oxygen? | Habitat air was cross-flowed into greenhouse G2 through valve X-2, from 02:14 to 02:26. |
| Who opened the crossflow, and why? | Tomás Velde, to save Sasha Brandt. She had collapsed from carbon dioxide narcosis in the greenhouse, and its door won't open above 2% CO₂. |
| Why no fault? | Tomás put sensor LS-1 into calibration hold (maintenance mode) from 02:13 to 02:41, so the automatic report wouldn't reach the Authority during review week. |
| Who sabotaged V-7? | Jonah Pike, a Valles Ore contract geologist. At 01:47 he used Ilya Marchetti's badge, taken from a broken locker, at rover-bay terminal RB-2 to put the bulk CO₂ injector V-7 on remote hold. It opened at 01:58. Clause 14 of Valles Ore's lease gives the company Juniper if the charter lapses. |

**Secrets:**
- Sasha was secretly doubling the greenhouse CO₂ at night (to 2,400 ppm) to save a failing wheat crop, and editing the logs.
- Mei recorded Sasha's narcosis as a migraine.
- Commander Abara saw the rescue at 02:19 and chose not to report it.

## The Data Wall

Every panel shares one timeline, 01:30 to 02:45. You set a time window by tapping a chart twice or using the From and To menus, then flag one line. A sound flag becomes evidence. A false flag costs 5 minutes and goes on the record. Some sound flags turn out to be innocent and are explained instead. Flags cost five in-game minutes; a correct flag normally adds evidence, while a discovered or explanatory flag does not add a duplicate. Investigators can also inspect physical and documentary evidence outside the wall.

| Panel | Source | Anomaly to find |
| --- | --- | --- |
| Habitat O₂ | LS-1 (core) and clinic monitor (med) | LS-1 frozen at exactly 21.03 kPa from 02:13 to 02:41 (visible only at high resolution); the clinic monitor dips to 17.4 kPa |
| Valves | Core | X-2 open 02:14–02:26; V-7 open 01:58–02:31 |
| Greenhouse CO₂ | Greenhouse controller | 2,400 rising to 42,000 ppm between 01:58 and 02:12 |
| Heart rates | Med bay (needs authorization) | Sasha collapses at 02:10; Tomás runs at 02:12; Ilya asleep at 01:47; Jonah's band off-wrist 01:40–01:55; Abara wakes at 02:18 |
| Badges | Security | Jonah in the rover bay 01:44–01:52; Ilya's credential at RB-2 at 01:47; Tomás's route LS-1 → greenhouse → med bay |
| Generator | Power plant | Full output 02:26–02:41 |

## Evidence inventory

The published implementation defines **27 evidence entries** (including the oxygen ledger supplied at the start) and **18 evidence connections**. Data Wall flags produce several entries; locations, interviews, logs and the Earth uplink yield others. The source code’s incorrect hard-coded count of 30 was corrected to derive the total from the actual inventory.

## Pressure

- **08:00:** the high-resolution buffers roll over. If the core logs are pulled after that, the frozen line can't be told apart from a steady one.
- **Medical data:** needs authorization from Abara or Mei.
- **Pressing Jonah:** at suspicion 2, he wipes the RB-2 face-camera snapshot at 11:00. At suspicion 3, he wipes it at once, puts V-7 back on hold, and the greenhouse status light turns amber. Entering the greenhouse then ends the case (E7) unless Tomás has locked V-7 out first.
- **16:00:** the Earth uplink closes, and the Valles Ore lease record can no longer be requested.
- **18:00:** the transport reaches departure and the formal four-part finding can be submitted. Before departure the player may prepare answers but cannot file the finding early. *No Fault Found* and *Charter Lapsed* are handled at departure.

## Connections (18)

C1 flatline + Noor on calibration hold · C2 flatline + clinic dip · C3 dip + generator catch-up · L1 ledger + catch-up · C4 crossflow + dip · C5 CO₂ spike + Sasha's collapse · C6 Tomás's run + collapse · C7 V-7 open + CO₂ spike · C8 Sasha's crop + spike · C9 RB-2 credential + Ilya asleep · C10 Jonah in the rover bay + RB-2 credential · C11 band gap + rover bay · C12 lease + V-7 controller · C13 override log + Tomás's run · C14 RB-2 snapshot + Jonah's jacket · R1 patch log + flatline · R2 Ilya's locker + RB-2 credential · R3 Abara wakes + crossflow

## Endings (7)

1. **Clean Air** (truest ending): all four answers right, each backed by connected evidence, including proof of the borrowed credential and corporate motive.
2. **Half a Breath:** a formal finding that does not meet the full-answer and proof standard, unless another wrong-accusation branch takes precedence.
3. **The Hero in the Dock:** the rescue is called sabotage, or Abara is blamed.
4. **Borrowed Badge:** the wrong person is named for the V-7 hold.
5. **Charter Lapsed:** no finding by 18:00.
6. **No Fault Found:** you sign off on the system's "no fault" report.
7. **Thin Air:** you enter the greenhouse after alarming Jonah without first arranging to lock out V-7.

No one dies in the authored outcomes; *Thin Air* involves a serious but survived exposure. Claude’s original document reports scripted playthroughs reaching every ending, plus the 08:00 rollover, snapshot wipe, medical-data gate and V-7 lockout. Our Case #03 reconciliation separately passed **targeted verdict-branch and clock/rollover tests**, plus limited browser rendering and mobile-layout checks. These are not claims of exhaustive player-route testing.

## Full-proof verdict gate in the published HTML

The correct selections are **crossflow** (cause), **Tomás rescues Sasha** (opener and purpose), **LS-1 calibration hold** (mask) and **Jonah Pike** (V-7 saboteur). Selecting those four answers alone does **not** award *Clean Air*.

| Proof area | Published evidence gate |
| --- | --- |
| Oxygen cause | **C4** (crossflow + clinic oxygen dip) and at least one of **C2**, **C3**, or **L1** |
| Rescue | **C5** (CO₂ spike + Sasha’s collapse) and at least one of **C6**, **C13**, or Tomás’s confession |
| Sensor concealment | **C1** (frozen LS-1 + Noor’s explanation), or the frozen trace together with Tomás’s confession, or **C13** plus the frozen trace |
| Saboteur and motive | **C9** (Ilya’s credential used while he slept) **and C10** (Jonah present at RB-2) **and C12** (Valles Ore lease + V-7 remote hold), plus either **C14** (camera image + distinctive jacket) **or both C11 and R2** (Jonah’s biomonitor gap and access to Ilya’s unlocked badge) |

These gates preserve an alternative route if the RB-2 face-camera snapshot is lost. **C12 is mandatory**: guessing Jonah’s name or observing badge movements alone is insufficient.

## Operational and interface notes

- **Clock:** the investigation opens at **05:30, Sol 1,412**. The Data Wall covers **01:30–02:45** of the preceding overnight incident. The 08:00 rollover affects the life-support and greenhouse high-resolution buffers; the Earth uplink closes at 16:00 and the transport departs at 18:00.
- **Data Wall:** pull system logs; select a From/To window with the menus or two chart taps; choose the appropriate line and flag. Anomalies are deterministically authored, not newly simulated on each playthrough. Charts can be scrolled horizontally on narrow screens.
- **Failure pressure:** Jonah’s suspicion can lead to loss of the RB-2 camera snapshot and a renewed greenhouse hazard. Locking out V-7 with Tomás prevents the hazard outcome when the warning is active.
- **Progress:** browser-local saves, limited undo snapshots, chapter checkpoints and discovered endings. Clearing browser storage may erase progress. Save and checkpoint validation were strengthened during reconciliation.
- **Implementation:** standalone Case HTML with Mars habitat illustration and SVG telemetry. No online account, live backend or cloud synchronization is asserted.

## Publication and QA record

| Artifact or check | Status |
| --- | --- |
| `cases/the-oxygen-ledger/index.html` | Corrected and committed as `4c27fb84e21872066c38a2adcccaf22435fad765` |
| JavaScript syntax and targeted evidence / verdict tests | Passed during source reconciliation |
| All seven ending conditions | Targeted branches passed; exhaustive gameplay routes not certified |
| 08:00 rollover and 18:00 filing gate | Targeted timing tests passed |
| Desktop/mobile rendering | Limited browser checks reported; full accessibility audit outstanding |
| Founder live-play assessment | Open |
| Homepage Case #03 link | Separate website-integration step, not part of this README commit |

**Repository:** `doorquests/doorquests-web`  
**Documentation destination:** `cases/the-oxygen-ledger/README.md`  
**Documentation status:** **COMPLETE — APPROVED**, subject to future gameplay or research reconciliation.