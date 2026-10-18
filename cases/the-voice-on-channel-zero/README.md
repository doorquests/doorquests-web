# Cluortal No. 27 · The Voice on Channel Zero

**1954 · Chicago · Broadcast blackmail · Medium · 30–45 minutes**

**Signature mechanic: the Splicing Block.** A short lesson explains **room tone**: every studio has its own background sound under every word recorded there, so where the room changes mid-sentence, the tape has been cut.

**The confession reel** is laid out as six pieces of tape, each with its words, its room tone and its length. You mark which of the five joins are splices and give each piece its source broadcast (from the studio schedule):

| Piece | Room tone | Source |
|---|---|---|
| "Yes," + "I took" | radiators tick; 60-cycle hum | **Oct 7, Studio A** ("Yes, I took the oath…") |
| ✂ "the money" + "from the Harbor Board," | wind, traffic, gulls | **Oct 21, Navy Pier remote** |
| ✂ "and I'd do it" + "again." | dead quiet; air-conditioning hiss | **Nov 4, Studio C** |

**Two versions of one broadcast.** The Nov 4 "Late Edition" **air-check runs 14:32** and the **library master 14:29**. At 9:40 the master lacks "and I'd do it again" (3.0 s): those words were cut out and spliced shut to end the confession. You pick the missing words from four phrases with their durations.

On phones the tape strip turns vertical.

**Also uses: studio schedules.** The schedule book lists Duggan's three appearances (with studio and location) and tonight's bookings:
- Lou Ferraro in Edit 2 until 23:30;
- Harold in the tape library;
- Victor Crane on mic in Studio C from 23:00 to 23:45, which is his alibi.

The master control log has Channel Zero opened from the library at 23:20. The watchman's book has Lou on the back stairs at 23:31.

**The solution:**
- **The forgery:** Lou Ferraro, the station's tape editor, made a fake confession for a ward boss ("S.", $500 down) to blackmail Alderman Duggan into dropping the harbor bill. He used his own brass splicing block, which cuts at 60° where every other block in the station cuts at 45°, and marked his splices with red china-marker ticks.
- **The discovery:** the producer Harold Kessel found the 3-second gap in the library master and the forged reel. He played it to you on the Channel Zero talkback: "It's cut. Don't you put Duggan on the air tonight."
- **The murder:** Lou struck him with a 10½-inch EDIT 2 reel, which left a saucer-sized curved dent. He then left him at the foot of the back stairs and put the doctored master on the bulk-erase rack.

**The header:** a walnut console with a reel-to-reel deck, a VU meter and an ON AIR lamp. The tape strip below reads "DUGGAN — ?" until you find the splices, when two red cuts appear with the three sources. The VU needle swings when the master's gap is found, and the lamp goes OFF AIR when the case ends.

## The people

- **You:** WLKE's late-night announcer, off the mic tonight (a transcription is playing).
- **Eddie Ruiz**, 30: night engineer from Humboldt Park, the best ears in the building. He runs the bulk eraser at 3.
- **Lou Ferraro**, 44: tape editor, brilliant and underpaid. The culprit.
- **Mae Dunleavy**, 26: Harold's production assistant. She has his notebook ("Only one man cuts at 60").
- **Victor Crane**, 40: the host, vain and ambitious. He wanted Harold's job; the red herring with an alibi.
- **Alderman Frank Duggan**: an honest reformer being blackmailed.
- **Lieutenant Stan Kowalczyk**: tired and fair. He signs it off as a fall at 3 unless shown otherwise.

## Connections (9)

| ID | Link |
|---|---|
| T1 | Confession taken apart + schedule → built from three broadcasts |
| T2 | Missing 3 seconds + air-check → cut from the Nov 4 master |
| W1 | Confession reel *(look closer: 60° splices)* + Lou's block *(look closer)* → his block |
| W2 | Watchman's book + control log → Lou on the stairs 11 minutes after Harold's call |
| K1 | Bent reel *(look closer)* + lieutenant → struck, not a fall |
| K2 | Mae and Harold's notebook + what you heard → Harold was about to expose him |
| M1 | Envelope + Duggan → paid to make the blackmail reel |
| X1, X2 | Crane's alibi; Lou tried to erase the master *(optional)* |

**Strict proofs:**
- **Tape:** T1 + T2.
- **Who:** W1 + W2.
- **Murder:** K1 + K2.
- **Why:** M1.

**When you can give the finding:** from the tape library once both cuts are found, or at 3 a.m. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| Midnight | Start |
| 1:00 | Chapter II |
| 1:30 a.m. | If Lou has been sufficiently alerted (unease at least 2), the November 4 library master is bulk-erased if it has not already been recovered. The six-minute master search must **finish strictly before 1:30 a.m.**; starting before the cutoff is not enough. |
| 2:00 | Chapter III |
| 3:00 | The bulk eraser and the sign-off (forced scene) |

**Travel:** 2 minutes around the 22nd floor; 6 minutes down to the lobby.

## Endings (7)

1. **A Clean Splice**: the best ending.
2. **A Name Without Proof**
3. **The Wrong Reel**: you blame Crane, Duggan or Eddie.
4. **An Accidental Fall**: you let it be signed off.
5. **Put It on the Air**: you broadcast the forged confession.
6. **Sully's Money**: you take Lou's bribe.
7. **Dead Air**: you confront Lou alone, and he escapes with the reel.

**Ranks:** Voice of the station / Chief engineer's ears / Night announcer / Studio page / Dead air.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at about 2:00 a.m., with one wrong source and one wrong missing phrase, scoring 88.
- It reports checks of the finding guard, erased master, forced 3:00 a.m. scene, chapter loading, and `validState`.
- It reports no errors or horizontal scroll at 1100px (light and dark) and 390px.

**Publication QA:** The published Splicing Block source mapping was independently reconciled with the six tape pieces and two joins; the nine evidence recipes and final proof predicates were reviewed. JavaScript syntax validation passed during HTML publication, and the corrected 1:30 a.m. erasure guard was verified in the committed HTML. **Complete seven-ending browser playthroughs and responsive visual testing were not independently completed.**

## Notes on period and setting

**Real elements:**
- Quarter-inch magnetic tape in American radio by the early 1950s.
- Editing by razor blade on a splicing block (45° diagonal splices were standard), with grease pencil (china-marker) marks on the backing.
- Air-checks recorded off the line.
- Bulk erasers used to recycle tape.
- Off-air talkback and cue circuits between booths.
- Transcriptions filling overnight hours.
- Chicago's ward politics and its harbor and Navy Pier.

**Fictional:** WLKE, the Lakeshore Building, "Late Edition", Alderman Duggan, the harbor bill, and everyone at the station. "Channel Zero" is the station's own name for its talkback line.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-voice-on-channel-zero/
- **HTML source:** `cases/the-voice-on-channel-zero/index.html` in `doorquests/doorquests-web` (`main`).
- **Splicing Block solution:** six tape fragments form three adjacent source pairs. Pieces **1–2** ("Yes," / "I took") belong to **October 7, Studio A**; pieces **3–4** ("the money" / "from the Harbor Board,") to **October 21, Navy Pier**; and pieces **5–6** ("and I'd do it" / "again.") to **November 4, Studio C**. Mark the cuts **between pieces 2–3 and 4–5 only**, not within each pair. The November 4 air-check is **14:32** and the edited library master **14:29**; the omitted **three-second** phrase is **"and I'd do it again."**
- **Clock model:** investigation begins at **midnight, November 19, 1954**. Chapter II begins at **1:00 a.m.**, optional early destruction of the master occurs at **1:30 a.m.**, Chapter III begins at **2:00 a.m.**, and the police decision plus ordinary bulk-erasure schedule forces the final scene at **3:00 a.m.** Normal within-floor movement takes two minutes; lobby travel takes six. Interview questions take five minutes.
- **Published 1:30 a.m. safeguard:** Lou reaching unease **2 or higher** triggers destruction of the **unrecovered** November 4 library master at 1:30 a.m. Retrieving it takes six minutes and must **finish strictly before the cutoff**. A search overlapping the erasure does not yield intact evidence. A master already collected remains available. This correction is in the published HTML and is **not a change made by this README commit**.
- **Proof gates for E1:** forged tape **T1 + T2**; Lou's responsibility **W1 + W2**; murder **K1 + K2**; blackmail motive **M1**. Correct final answers identify the **three-broadcast splice**, **Lou Ferraro**, **a blow with the metal reel**, and **blackmail of Alderman Duggan after Harold discovered the fabrication**. The optional X1 and X2 connections clear Crane's alibi and reveal Lou's erasure attempt.
- **Closer-examination requirements:** W1 requires examining **both** the confession reel and Lou's custom splicing block; K1 requires examining the bent reel. The optional connections require no further closer-examination gates.
- **Finding availability:** once the missing words have been identified (`versionsFound`), the player may give a finding **from the tape library**; otherwise, the report can be given during the forced **3:00 a.m.** scene. E2 is a correct-culprit report without full proof, while E3 covers a wrong culprit.
- **Browser persistence keys:** `dq-cluortal-27-channelzero-v1`, `dq-cluortal-27-endings`, `dq-cluortal-27-chapters`.
- **Review scope:** reconciled source-author Markdown against the published six-piece tape, missing three seconds, nine deduction links, all seven endings and the corrected master-erasure deadline. Period-setting notes remain author-supplied and were not independently researched as part of this publication pass.
- **Documentation status:** COMPLETE — APPROVED.
