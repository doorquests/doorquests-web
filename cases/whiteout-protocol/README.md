# Cluortal No. 25 · Whiteout Protocol

**1997 · Halvard Ice Shelf, Antarctica · Isolation thriller · Hard · 40–60 minutes**

**Signature mechanic: the Radio Room and the storm clock.**

**The storm clock** charts wind speed from 15:00 to 06:00:
- 12 knots in the afternoon, 60–70 knots from 20:00;
- darkness from sunset at 21:45 to sunrise at 03:20;
- a forecast **lull of 30 knots from 02:30 to 03:40**, then 80 knots;
- a "now" marker for the current time.

**An S-meter card** gives the signal strength a channel 9 handheld produces at each distance:

| Signal | Distance |
|---|---|
| S9+20 | within 100 m (the station or the shed) |
| S8 | about 300 m (the AWS mast) |
| S5 | about 2 km (the Tower Hut) |
| S1–S3 | behind the pressure ridge on flag line B |

**Three calls on channel 9.** You place where each radio was, then work out which call is false, what it was copied from, and where Ines really went.

| Call | Signal | Background | Where |
|---|---|---|---|
| 15:10 | S5 | light wind | the Tower Hut (a real field visit) |
| 22:10 | S1 | a roar of wind; "unreadable" in the log | flag line B. The full words come only from Looking closer at the logger cassette: "…lost flag line A… I'm on B… going for the Apple… card's safe…" |
| 23:40 | S9+20 | **no wind at all**, a click first | within 100 m: a **playback** of the 15:10 call, "the sun's on the ridge" two hours after sunset |

**Excursions cost warmth and time.** Warmth starts at 100 and recovers half a point a minute indoors. Each trip costs the wind speed × a distance factor:

| Destination | Factor | At 70 kt | In the lull |
|---|---|---|---|
| Generator shed | 0.25 | 18 | 8 |
| AWS mast | 0.7 | 49 | 21 |
| Apple refuge | 1.4 | 98 | 42 |
| Tower Hut | 3 | 210 | 90 |

The Apple expedition takes **60 minutes** in the published implementation, and only becomes an option once you've worked out she's there. The 02:30–03:40 lull is the safest rescue window: at 30 knots it costs 42 warmth, versus 98 at 70 knots (the game permits the latter if you still have enough warmth and time). The Tower Hut remains a dangerous diversion. A trip your warmth cannot afford appears as "Go anyway", which ends in the Whiteout ending; an expedition that would finish at or after the 05:00 HF deadline is not offered as a successful search. Coming in below 15 warmth means frostnip, which costs score.

**Also uses: falsified climate data.**
- Ines's notebook: every daily mean at AWS-C from March to September 1996 equals Station B's plus exactly 1.30. The logger's battery died on 4 March.
- The file history on the station Mac: the "final" file was created on 12 October by mreid, after he opened Station B's record.
- Malcolm's paper rests on that "continuous record", and the station's funding decision rests on the paper.

**The solution:** Ines discovered the fabrication and went out alone to recover the raw logger card from the AWS mast. She switched the door alarm to maintenance with key 2. Coming back she lost flag line A in the whiteout, followed B by feel, and reached the Apple refuge. At 23:40 the station leader, Malcolm Reid, played her 15:10 call back over channel 9 from the generator shed. He used a cassette player taped to handheld #1, issued to him. Everyone would then believe she was safe at the Tower and nobody would go out and find her with the card.

**Her fate depends on what the player actually does.** The best ending E1 requires finding Ines alive, and E5 is the fully proved case without her rescue. Other endings can acknowledge an earlier successful rescue even when the final accusation is wrong or Malcolm's report stands. Where she has not been rescued, her fate remains unknown; the narrative does not confirm her death.

**The header:** a whiteout panel streaked with blowing snow, with a field map showing the station, the shed, flag line A (AWS, Tower Hut), flag line B (the Apple) and the pressure ridge. The 23:40 radio wave first comes from the Tower ("23:40?") and moves to the shed once you prove it false. An orange "?" appears at the Apple when you find where she is, and a marker when she's rescued. The status bar shows the wind and your warmth.

## The people

- **Dr. Ines Albarrán**, Chilean glaciologist. Missing.
- **Dr. Malcolm Reid**, 55: station leader, thirty seasons on the ice. Corbel is his life's work.
- **Kirsten Halvorsen**, 40: Norwegian comms officer. She logged "Thank God".
- **Tomasz Kowalski**, 45: mechanic from Gdańsk. He was in the shed until 23:34, the red herring.
- **Dr. Priya Raman**, 29: atmospheric chemist and Ines's friend. Ines showed her the numbers.
- **Dougie Fraser**, 33: field assistant from Twizel. He knows the flag lines.
- **You:** the station doctor, the only person who can overrule Condition One on medical grounds.

## Connections (9)

| ID | Link |
|---|---|
| F1 | False call + storm clock → it couldn't have come from outside |
| F2 | False call + logger cassette *(look closer)* → a tape played into a radio |
| W1 | Sign-out board + false call → Malcolm was in the shed at 23:40 |
| W2 | The rig *(look closer: handheld #1)* + Kirsten → it's Malcolm's radio |
| D1 | Ines's notebook + file history → seven dead months filled with Station B + 1.30 |
| D2 | Paper and letter + notebook → the paper and the station's future rest on it |
| P1 | Where Ines is + Dougie → the Apple, on flag line B |
| X1, X2 | Tomasz back in before the call; Ines switched off the alarm herself *(optional)* |

**Strict proofs:**
- **The call:** F1 + F2.
- **Who:** W1 + W2.
- **Fraud:** D1 + D2.
- **Where:** P1.
- **Plus:** Ines rescued, for E1.

**When you can give the finding:** on the HF from the comms room once the false call is proved, or at the 05:00 sched. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| 00:10 | Start |
| 01:30 | If you've rattled Malcolm (unease at least 2), he swaps the logger cassette and removes the rig from the shed. Collecting the cassette takes 2 minutes and must finish **strictly before 01:30**; the generator-shed trip must also finish before removal to recover the playback rig. |
| 02:30–03:40 | The forecast 30-knot lull (Chapter II). The Apple expedition now takes **60 minutes**, allowing a correctly timed trip to fit within the lull. |
| 04:00 | Chapter III |
| 05:00 | HF sched with Main Base (forced scene). Outdoor trips that would finish at or after this deadline cannot recover evidence or rescue Ines. |

## Endings (7)

1. **Out of the Whiteout**: the best ending.
2. **A Name Without Proof**
3. **The Wrong Voice**: you blame Tomasz, Kirsten or Dougie.
4. **Condition One**: you let Malcolm's report stand.
5. **The Truth on the Radio**: everything proved, but no rescue; her fate is open.
6. **Malcolm's Bargain**: co-authorship for silence.
7. **Whiteout**: you go out in winds your warmth can't take.

**Ranks:** Winter-over doctor / Field medic / Station hand / Summer visitor / Lost on the flag line.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at about 04:00, with one wrong call placement and one wrong source selection, scoring 88; the corresponding unrescued route reportedly reaches E5.
- It reports testing the finding guard, 01:30 tampering, warmth costs, forced schedule, chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** JavaScript syntax validation passed, and the published HTML was checked for the corrected 01:30 cassette/rig recovery safeguards, the 60-minute Apple expedition and outdoor-trip deadline handling. **Full seven-ending browser playthroughs and responsive visual tests were not independently completed.**

## Notes on period and setting

**Real elements:**
- **Station life:** storm conditions with "Condition One" (the system US Antarctic stations use: no one outside), sign-out boards and headcounts, flag lines between buildings, and fibreglass "Apple" field refuges.
- **The weather:** automatic weather stations (AWS) logging to memory cards and failing when their batteries die, and katabatic storms with sudden lulls.
- **Radio:** VHF handhelds and S-meter readings, HF schedules with a main base, and voice-activated radio loggers on cassette in 1997.

**On the fraud:** this is one person faking a gap in one record to protect his station. The story's point is that science catches it, through the raw data, a colleague checking the numbers, and a retraction. In the best ending Ines asks for the real record to be published with its gap. Nothing here suggests climate science as a whole is faked.

**Fictional:** Corbel Station, the Halvard Ice Shelf, the Polar Climate Consortium, Station B, Main Base and everyone in the story.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/whiteout-protocol/
- **HTML source:** `cases/whiteout-protocol/index.html` in `doorquests/doorquests-web` (`main`).
- **Radio Room solution:** 15:10 is the genuine Tower Hut call (S5); 22:10 is the genuine weak call from flag line B near the Apple (S1); 23:40 is a recorded replay of the 15:10 call sent from within 100 metres of the station (S9+20). The correct false call is **23:40**, copied from **15:10**; Ines's actual refuge is **the Apple on flag line B**.
- **Storm and warmth model:** warmth begins at 100, recovers by 0.5 points per minute of indoor action (rounded by the game), and is spent at rounded wind speed multiplied by the excursion's distance factor. Outdoor action durations are generator shed **12 min**, AWS mast **30 min**, Apple refuge **60 min** (reviewed correction) and Tower Hut **120 min**. The forecast low-wind lull is approximately **02:30–03:40**; travel is evaluated against conditions at departure, so it is not automatically restricted to the lull.
- **Published 01:30 safeguards:** if Malcolm has reached unease 2 or higher, the logger cassette and unfound shed rig are removed at **01:30**. The two-minute logger collection cannot succeed if it would finish at or beyond the cutoff. Likewise, arriving at the generator shed at or after the removal time cannot recover the recorder from an alerted Malcolm. Previously secured evidence remains available.
- **Published 05:00 safeguard:** the HF report forces the deadline at **05:00**. The game no longer offers successful field trips whose stated durations would end at or beyond the deadline; a warmth-deficient "Go anyway" option retains its own Whiteout ending.
- **Best-ending proof gates:** false radio call **F1 + F2**; culprit **W1 + W2**; climate-data fraud **D1 + D2**; Ines's whereabouts **P1**. The four correct findings are **the 23:40 cassette recording**, **Malcolm Reid**, **concealing the falsified AWS-C record**, and **the Apple refuge**. **E1 additionally requires that Ines has actually been rescued**. Fully correct proof without rescue leads to E5. X1 and X2 are optional.
- **Closer-examination requirements:** F2 requires inspecting the logger cassette; W2 requires inspecting the recovered radio/cassette rig. Other deductions link the respective evidence items as specified above.
- **Browser persistence keys:** `dq-cluortal-25-whiteout-v1`, `dq-cluortal-25-endings`, `dq-cluortal-25-chapters`.
- **Review scope:** reconciled source-author Markdown against the published radio-call locations, evidence pairing, seven endings, time triggers, warmth formula and recently corrected rescue and evidence-tampering rules. Period-setting and scientific-context notes remain source-author material and were not independently researched in this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
