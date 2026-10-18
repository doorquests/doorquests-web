# Cluortal No. 20 · The Senator's Last Banquet

**AD 64 · Rome (the Esquiline) · Poisoning · Medium · 30–45 minutes**

**Signature mechanic: the Triclinium.** A top-down plan shows three couches in a U around the table, nine places, and the sideboard at the foot of the low couch. You work through it in three steps:

1. **Who really lay where.** The steward's seating tablet gives the planned places. Four of them are disputed, and you fill those in from the guests' accounts. "Check the places" tells you how many of the four are right.
2. **The order of the evening.** Six events start in the wrong order. You put them back in sequence with up and down buttons; the cook, the taster, Glycon and the physician each fix part of it.
3. **The one route.** Once the places and the order are both right, you answer one question: while the slaves were out with the offering, who could reach the flask?

| Place | Planned (steward's tablet) | Actual | Source |
|---|---|---|---|
| 1 High couch, top | Asclepiades | Asclepiades | — |
| 2 High couch, middle | Gellius | Gellius | — |
| 3 High couch, lowest | Philo | **Sulpicia** | Fulvia ("beside me, at the foot of the high couch") |
| 4 Middle couch, top | Fulvia | Fulvia | — |
| 5 Middle couch, middle | Cluvius | Cluvius | Cluvius |
| 6 Middle couch, lowest (*locus consularis*) | Annius | Annius | — |
| 7 Low couch, top (host's place) | Crispus | Crispus | — |
| 8 Low couch, middle | Lucius | Lucius | Annius |
| 9 Low couch, lowest, by the sideboard | Sulpicia | **Philo** | Sulpicia's account of the swap / elimination |

**The order of the evening:** gustatio → taster tastes the wine → decocta flask set on the sideboard with the boar → slaves go out with the offering to the Lares → the senator calls for his decocta and Glycon pours → he drinks and falls ill.

**The solution:** the taster only tasted the wine. The senator's *decocta* (boiled water cooled in snow) was added to his cup alone, afterwards. During the offering the flask stood unattended by place 9, and Philo had asked Sulpicia to swap places with him. Philo had been skimming the fire-relief fund (50,000 phantom bricks), and the senator had begun a letter to the praetor about it.

**The header** shows the triclinium under a band of smoke-orange sky. Names fill the places as you rebuild the seating. When the route is proved, place 9 is ringed and a gold line runs from the sideboard to the host. Four status tiles track the places, the courses, the route and the hand, and a countdown runs to dawn.

## The people

- **Gnaeus Lollius Crispus**, the senator, 61. He is the victim, and he was rebuilding homes for clients burned out in the fire.
- **Philo**, his freedman secretary, freed ten years ago. Courteous and indispensable. He is the poisoner.
- **Sulpicia**, the senator's second wife, 30. Clever and dry-eyed, and accused by her stepson.
- **Lucius**, the son, 26. His property burned and he owes 200,000. He is a red herring.
- **Titus Annius Gallus**, the consular and guest of honour, and his wife **Fulvia Pia**.
- **Marcus Cluvius**, a young tribune and Lucius's friend.
- **Asclepiades**, a Greek physician and guest. He goes home at 02:30.
- **Gellius Sabinus**, a poet, who is a guest only.
- **Slaves:** **Glycon** (16, served the low couch), **Eutychus** (the taster), **Dromo** (the cook).
- **You:** the family's advocate and a friend of the house.

## Connections (7)

| ID | Link |
|---|---|
| S1 | Where they really lay + steward's tablet → Philo swapped himself to the sideboard place |
| S2 | Philo alone with the flask + Sulpicia's account → he arranged it |
| P1 | Decocta flask *(look closer)* + physician → aconite in the decocta |
| P2 | Taster's account + order of the evening → the taster tasted before the poison arrived |
| R1 | Packet in Philo's stylus case + flask → the same poison |
| M1 | Wax-tablet letter + fire-relief accounts → the senator was about to denounce him |
| X1 | Lucius's debts + steward's tablet → motive, but the wrong place *(optional)* |

**Strict proofs:**
- **Route:** P1 + P2.
- **Who:** S1 + S2 + R1.
- **Why:** M1.

**When you can give the finding:** in the atrium, before the Lares, once the places and the order are both rebuilt, or at dawn when the prefect's men arrive. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| 21:30 | Start (second watch) |
| 24:00 | Chapter II. If you've put Philo on his guard (Severe questions, or showing him the accounts), he burns the aconite packet in his brazier, and R1 is lost. A ten-minute search that would cross midnight cannot recover the packet before he burns it. |
| 02:30 | The physician goes home. An eight-minute question or four-minute evidence presentation must finish before his departure; an ongoing interview closes when the departure is triggered. |
| 03:30 | Chapter III, the fourth watch |
| 05:30 | Dawn: the urban prefect's soldiers come for the slaves (forced scene) |

**Travel:** 3 minutes between rooms. **Questions:** 8 minutes. **Triclinium checks:** 3–5 minutes.

## Endings (7)

1. **Before the Lares**: the best ending.
2. **A Name Without Proof**: Philo is named, but the slaves are taken for questioning anyway.
3. **The Wrong Couch**: you blame Lucius or Sulpicia.
4. **The Quaestio**: you stand aside at dawn.
5. **Blame the Slaves**: you name Glycon.
6. **A Seizure, They Said**: you accept Lucius's plea to hush it up.
7. **Philo's Purse**: you take the bribe.

**Ranks:** Advocate of the first rank / Trusted friend of the house / Junior advocate / Client at the door / Uninvited shadow.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at approximately midnight with one wrong seating check and one wrong route answer, scoring 88.
- It reports checking the finding guard, burned packet, forced dawn scene, chapter loading and `validState`.
- It also reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** JavaScript syntax validation passed. The published game's seating assignments, six-event sequence, seven deduction recipes, ending predicates and the two corrected deadline conditions were checked against this README. **Independent full browser playthrough and responsive visual testing have not been completed.**

## Notes on history

**Real elements:**
- **The Great Fire of Rome** began on 19 July AD 64 and burned for six days (Tacitus, *Annals* 15.38–41). The Aventine, the Caelian and the Palatine all suffered.
- **The consuls of 64** were C. Laecanius Bassus and M. Licinius Crassus Frugi.
- **The decocta**: water boiled and then cooled in snow in a glass vessel. Pliny calls it Nero's invention (*Natural History* 31.40), and Suetonius and Juvenal mention it too.
- **The mechanism is borrowed from the death of Britannicus in AD 55** (Tacitus, *Annals* 13.16). A drink was passed by the taster, found too hot, and the poison went in with the cold water added afterwards.
- **The seating plan:** the triclinium's nine places, the host at *summus in imo* (the top of the low couch) and the guest of honour at the *locus consularis* (the lowest place of the middle couch).
- **The meal:** the *gustatio* and *mulsum* (honeyed wine), mixing wine in a crater, and the offering to the Lares between courses.
- **Aconite** as the classic Roman poison ("the stepmother's poison", after Ovid's *novercae aconita*).
- **The law:** the *Senatus consultum Silanianum* (AD 10), under which the slaves of a murdered master were questioned and could be executed. The case of **Pedanius Secundus** (AD 61) saw some four hundred slaves put to death (Tacitus, *Annals* 14.42–45).

**Simplifications:**
- Hours are shown as modern clock times alongside the watches. Romans counted the hours of the night from sunset.
- The urban prefect isn't named.

**Fictional:** Lollius Crispus, his household and his guests.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-senators-last-banquet/
- **HTML source:** `cases/the-senators-last-banquet/index.html` in `doorquests/doorquests-web` (`main`).
- **Time model:** play begins at 21:30; Chapter II triggers at midnight, the physician departs at 02:30, Chapter III begins at 03:30 and the forced dawn scene is at 05:30. Moving between rooms costs three minutes.
- **Published midnight safeguard:** when Philo has been sufficiently alarmed (unease at least 2) and his aconite packet has not already been found, it burns at midnight. A ten-minute writing-table search starting too late to finish before midnight no longer recovers a packet that would burn during the search. The alternative burned-packet scene remains available.
- **Published physician safeguard:** Asclepiades leaves at 02:30. His eight-minute questioning and four-minute evidence presentation may not continue past that cutoff; the ongoing interview is dismissed when his departure occurs. These safeguards already exist in the published HTML; this README commit does not modify gameplay.
- **Triclinium solution:** the actual disputed seating is place 3 Sulpicia, place 5 Cluvius, place 8 Lucius and place 9 Philo. The six correct event steps are gustatio → tasting → flask on sideboard → slaves' libation → decocta poured → collapse. The finding of Philo's opportunity follows from both puzzles and selecting him for the sideboard window.
- **Best-ending proof predicates:** route P1 + P2; perpetrator S1 + S2 + R1; motive M1. The final answers must identify Philo, decocta, the libation interval and the fire-relief fund. X1 corroborates Lucius's red-herring motive but is optional.
- **Browser persistence keys:** `dq-cluortal-20-banquet-v1`, `dq-cluortal-20-endings`, `dq-cluortal-20-chapters`.
- **Review scope:** reconciled the author's Markdown to the published triclinium seats, six events, evidence connections, proof gates, midnight/physician cutoffs and seven endings. The historical notes are retained as source-author context and were not independently researched in this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
