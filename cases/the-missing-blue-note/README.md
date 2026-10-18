# Cluortal No. 24 · The Missing Blue Note

**1928 · Harlem, New York · Musical theft · Medium · 30–45 minutes**

**Signature mechanic: the Listening Booth.** Dell's arrangement of "Lenox Avenue Blue" is 116 bars in 4/4. It is drawn as a coloured strip, and each player has a section to themselves:

| Section | Bars | Player |
|---|---|---|
| Piano intro | 4 | Dell |
| Ensemble chorus | 32 | everyone |
| Clarinet chorus | 16 | Deacon |
| Vocal chorus | 32 | Viola |
| Trumpet break | 16 | Roscoe |
| Out-chorus | 16 | everyone |

When a player was out of the room, Dell cut their section. For each of the four surviving takes you get:
- the length, from Bannister's take sheet;
- the beats counted in 12 seconds against the clock;
- a short listening note on the order of what you hear;
- a **Play a few bars** button (Web Audio: a bass and chord vamp at that take's real tempo, so the beat can be counted by ear).

You enter the tempo (beats in 12 s × 5) and choose which section is missing (bars played = seconds × bpm ÷ 60 ÷ 4).

| Take | Time | Length | Beats/12 s | Tempo | Bars | Missing |
|---|---|---|---|---|---|---|
| 1 | 9:40 | 2:24 | 28 | 140 | 84 | Vocal chorus (32): Viola not there yet |
| 2 | 10:05 | 3:12 | 29 | 145 | 116 | Nothing |
| 3 | 10:30 | 2:40 | 30 | 150 | 100 | Clarinet chorus (16): Deacon out |
| 4 | 11:05 | 3:12 | — | — | — | The master is missing |
| 5 | 11:40 | 2:40 | 30 | 150 | 100 | Trumpet break (16): Roscoe out |

Takes 3 and 5 are deliberately the same length. Only the listening notes on the order of the sections tell the clarinet from the trumpet. A placement grid then shows who played each take. Last question: the master was locked away at 11:30, so who was out of the room after that? **Roscoe.**

**Also uses: the studio access log.** The night man's book shows:
- Viola arriving at 10:00;
- Deacon out from 10:25 to 10:40 (a drink at the speakeasy downstairs);
- everyone signing out at 12:10;
- Benny returning at 12:30 for his drumsticks, the obvious red herring.

**The solution:** Roscoe Tate slipped out before take 5. He swapped the take 4 master for a blank (it still carries his thumbprint and valve oil) and carried it down the back stairs in a hatbox to Mabel's icebox ("a cake for my mother"). Then he came back, breathless, for the out-chorus. He has sold the song to a Tin Pan Alley publisher for $500, credited "words & music Tate–Glickman". It's a real betrayal with a real grievance underneath: he wrote the trumpet break and was paid twenty dollars for it.

**The header:** an Art Deco panel with sunburst rays and a 78 on a turntable. The label reads "TAKE 4 · ?" until you recover the master, when it becomes LENOX AVENUE BLUE · CORDELIA FREEMAN. A note on the small staff turns blue once you find who was out of the room.

## The people (the heart of the story)

- **Cordelia "Dell" Freeman**, 34: pianist and composer, conservatory-trained, paid for by ten years of rent parties. She is fighting to own her own copyright.
- **Cyril Bannister**, 50: from Barbados. He built the only Black-owned recording room on 135th Street.
- **Roscoe Tate**, 29: the hottest trumpet on Lenox Avenue. He feels robbed of his trumpet break and robs in turn.
- **Harold "Tubby" Grant**, 45: tuba, the band's steady heart, a church deacon on Sundays. He hates lies.
- **Leon "Deacon" Ames**, 60: clarinet, up from New Orleans in 1917. Proud, and embarrassed about the drink.
- **Benny Shaw**, 20: drums. Everyone suspects him.
- **Viola Price**, 26: singer. She hid an early set at another club from Dell.
- **Mabel Cotton**: runs the Blue Room speakeasy downstairs and keeps everyone's secrets.
- **You:** the band's copyist, who wrote out every part of Dell's arrangement.

The white characters stay at the edges: Mr. Whitcomb of Meridian Records and the publisher Glickman. In the best ending, Dell adds "trumpet break by R. Tate" to the label.

## Connections (9)

| ID | Link |
|---|---|
| L1 | Placements + take sheet → only one player was missing after 11:30 |
| L2 | Who was out + Tubby → Roscoe went out the back before take 5 |
| B1 | Blank *(look closer: thumbprint, valve oil)* + placements → a trumpet player's, since Tubby never left |
| B2 | Mabel + take sheet → the hatbox went into the icebox during take 5 |
| R1 | Roscoe + who was out → he lied about playing every note of take 5 |
| M1 | Glickman's card + Dell → the song sold under his own name |
| X1–X3 | Benny / Deacon / Viola + the access log *(optional)* → three innocent absences explained |

**Strict proofs:**
- **When:** L1 + L2.
- **How:** B1 + B2.
- **Who:** R1.
- **Why:** M1.

The best ending also needs the **master recovered** from Mabel's icebox before the pickup.

**When you can give the finding:** in the studio once you have found who was out of the room, or at noon when Mr. Whitcomb arrives. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| 7:30 a.m. | Start |
| 9:30 a.m. | Chapter II. If Roscoe has been sufficiently alerted (unease 2 or greater) and the master has not already been recovered, he phones Glickman and the Packard collects it early. The four-minute icebox retrieval must **finish strictly before 9:30 a.m.** in that situation. |
| 10:30 a.m. | Normal collection: a grey Packard takes the hatbox from the Blue Room unless it was already recovered. The four-minute icebox retrieval must **finish strictly before 10:30 a.m.**; starting the search before collection is not enough. |
| 11:00 | Chapter III |
| 12:00 | Mr. Whitcomb arrives (forced scene) |

**Travel:** 2 minutes within the building; 6 to the Bandbox Club or the beauty parlor; 8 to Roscoe's rooms.

## Endings (7)

1. **Lenox Avenue Blue**: the best ending.
2. **A Name Without Proof**
3. **The Wrong Player**: you blame Benny, Deacon or Bannister.
4. **Noon Without the Master**: you say nothing.
5. **The Song Goes Downtown**: every step proved, but the master was already collected.
6. **Glickman's Money**: you take Roscoe's hundred dollars.
7. **A New Take**: you tell Dell to give up and record again.

**Ranks:** First chair / Arranger / Copyist / Song plugger / Out in the street.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at approximately 9:40 a.m., with one incorrect missing-section verdict and one incorrect "who was out" answer, scoring 88.
- It reports testing the finding guard, early and ordinary master pickups, forced noon scene, chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** The surviving take arithmetic was independently checked against the published game: 140 BPM / 84 bars (take 1), 145 BPM / 116 bars (take 2), and 150 BPM / 100 bars (takes 3 and 5). JavaScript syntax validation passed. The published code was independently checked for the early and normal pickup deadlines. **A complete seven-ending browser playthrough and responsive visual testing were not independently completed.**

## Notes on period and setting

**Real elements:**
- Harlem in the late 1920s: rent parties, Prohibition speakeasies, musicians' clubs.
- Tin Pan Alley publishers who bought Black composers' songs cheaply and added their own names as co-writers, a well-documented injustice.
- Electrical recording (from 1925) cut onto wax masters that were sent away for plating. Blanks were shaved smooth and reused.
- 78 rpm records.
- Musicians' migration from New Orleans after 1917.
- Harlem's large Caribbean community.

**Fictional:** Cordelia Freeman, every musician, Bannister Sound, the Blue Room, the Bandbox Club, Meridian Records and M. Glickman Music Publishing.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-missing-blue-note/
- **HTML source:** `cases/the-missing-blue-note/index.html` in `doorquests/doorquests-web` (`main`).
- **Listening Booth formula:** BPM = beats counted over twelve seconds × 5; bars played = recording duration in seconds × BPM ÷ 240. The arrangement totals **116 bars**. Take 1 gives **140 BPM, 84 bars, missing Viola's 32-bar vocal chorus**; take 2 gives **145 BPM, 116 bars, nothing cut**; take 3 gives **150 BPM, 100 bars, missing Deacon's 16-bar clarinet chorus**; take 5 gives **150 BPM, 100 bars, missing Roscoe's 16-bar trumpet break**. Take 4 is the missing master. The follow-on finding is that **Roscoe** was absent after the master was secured at 11:30 p.m.
- **Clock model:** investigation begins at **7:30 a.m.** Chapter II begins at 9:30 a.m.; the normal hatbox collection occurs at 10:30 a.m.; Chapter III begins at 11:00 a.m.; the record-label meeting forces a final scene at noon. Within-building travel normally costs two minutes, Bandbox Club and beauty parlor six, and Roscoe's rooms eight. Interview questions cost seven minutes.
- **Published 9:30 a.m. safeguard:** if Roscoe reaches unease 2 or higher before the master is recovered, collection is accelerated. A four-minute icebox search **must finish strictly before 9:30 a.m.** if the early collection has been triggered; attempting the search too late cannot recover the master.
- **Published 10:30 a.m. safeguard:** otherwise, the normal collection deadline applies, and the four-minute icebox search **must finish strictly before 10:30 a.m.** The safeguards are already in the published HTML; this README commit makes no gameplay changes.
- **Best-ending proof gates:** time **L1 + L2**, swap and transport **B1 + B2**, culprit **R1**, financial motive **M1**. The final answers must identify **Roscoe Tate**, **during take 5 after the master was locked away**, **a blank swapped for the master and a hatbox taken to Mabel's icebox**, and **sale to Glickman under Roscoe's own name**. The master must actually have been recovered to achieve E1; otherwise a complete proof yields E5. X1, X2 and X3 explain innocent discrepancies and are optional.
- **Closer-examination requirement:** B1 requires looking closer at the blank wax to reveal the valve-oil smear and thumbprint.
- **Browser persistence keys:** `dq-cluortal-24-bluenote-v1`, `dq-cluortal-24-endings`, `dq-cluortal-24-chapters`.
- **Review scope:** reconciled the supplied Markdown with published arrangement bar counts, tempo and missing-section solutions, nine evidence links, accusation gates, deadline handling and all seven ending names. The period-setting notes are preserved as author-supplied context and were not independently researched in this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
