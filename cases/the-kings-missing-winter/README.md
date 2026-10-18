# Cluortal No. 26 · The King's Missing Winter

**1315 (looking back to 1311–12) · Oslo, Norway · Royal records · Medium · 30–45 minutes**

**Signature mechanic: the Calendar.** A short lesson teaches how medieval documents give dates:
- fixed feasts;
- "the Sunday *after* St Lucy" (the first Sunday after the feast) and "the Saturday *before* St Thomas" (the last Saturday before it);
- moon phases;
- why a steward's day-by-day register is hard to falsify.

Below it is a **Julian calendar for November 1311 to February 1312**, with weekdays computed (Sundays in red), the feasts marked, and new (●) and full (○) moons. The moons were computed astronomically, accurate to about a day. You then turn five documents' dates into calendar dates:

| # | Source | Text | Date |
|---|---|---|---|
| D1 | First Bergen grant | Sunday after St Lucy (Mon 13 Dec) | **Sun 19 Dec 1311** |
| D2 | Akershus tax register | Saturday before St Thomas (Tue 21 Dec), the king "lying sick" | **Sat 18 Dec 1311** |
| D3 | Second Bergen grant | Candlemas | **Wed 2 Feb 1312** |
| D4 | Akershus tax register | Friday after Candlemas, "in the king's presence" | **Fri 4 Feb 1312** |
| D5 | Hamar draft leaf | First full moon after All Saints, the king carried sick to Akershus | **26 Nov 1311** |

Then the question: what do the grants' dates prove? They were sealed at Bergen *without the king*, who lay sick at Akershus. Bergen is weeks away in winter. The dated days are highlighted on the calendar.

**Also uses: seals and witness lists.**
- **The grants** carry the **great seal**. The seal roll says it stayed all winter at Bergen with Master Ivar, while the king at Akershus had only his **secret seal** (the lion on every genuine remission).
- **Brother Arnfinn**, the king's confessor, "witnessed" the 19 December grant. The St Mary's necrology records his death at Michaelmas, 29 September 1311.
- **Sir Kolbein**, also named as witness, spent the whole winter at the king's bedside at Akershus.

**The cover-up:** while the king lay ill, Master Ivar Pálsson, provost of the Apostles' Church in Bergen and keeper of the great seal, sealed grants of crown land. Haslum went to Herr Sigurd Gautsson and Høvik to Ivar's own nephew. In Lent he wrote to the canons to "set nothing in your books of this winter". The three chronicles share the same silence, and the Bergen annal has a leaf cut out. In 1315 Sigurd's son asks the council to confirm the grant, and Ragna, whose family was put out of Haslum, petitions against it.

**The header:** a vellum chronicle page with a red dashed gap between "Anno MCCCXI" and "Anno MCCCXII". Date ticks appear in the gap as you fix the dates, and "rex aeger · Akershus" ("the king sick at Akershus") is written in once you prove the contradiction. A wax great seal shows "?" until it reads IVAR.

## The people

- **Provost Bård**: chancellor, provost of St Mary's, your master.
- **Ragna Håvardsdatter**: widow and petitioner from Haslum in Bærum.
- **Sir Kolbein Toresson**, 70: the king's old knight at Akershus. His name was forged onto the grants.
- **Master Ivar Pálsson**, 72: former keeper of the great seal, in Oslo for the council.
- **Canon Eystein of Hamar**: the annalist with a bad conscience. He kept the draft leaf and Ivar's letter.
- **Herr Gaut Sigurdsson**, 30: Sigurd's son, a boy in Bergen that winter. The red herring.
- **You:** the youngest clerk of the new chancery.

## Connections (9)

| ID | Link |
|---|---|
| K1 | Contradiction + tax register → the king was at Akershus on both grant days |
| K2 | Hamar leaf + dates → carried there sick on 26 November |
| G1 | First grant + necrology → witnessed by a dead man |
| G2 | Second grant + Kolbein → a witness who wasn't there |
| S1 | First grant *(look closer: great seal)* + seal roll → only Ivar could seal at Bergen |
| S2 | Ivar's letter + chronicles *(look closer: cut leaf)* → he ordered the silence |
| M1 | Rent book + second grant → the land went to Sigurd and Ivar's nephew |
| X1, X2 | Ragna and the land; the king's secret seal at Akershus *(optional)* |

**Strict proofs:**
- **Where:** K1 + K2.
- **The grants:** G1 + G2.
- **Who:** S1 + S2.
- **Why:** M1.

**When you can give the finding:** in the chancery once the contradiction is proved, or at the council at vespers. Until then the button is disabled, and `resolve()` refuses as well.

## Time

St Lucy's Day 1315, from Terce (10:00) to Vespers (16:00), shown with the canonical hours.

| When | What happens |
|---|---|
| Noon | If you've rattled Master Ivar (unease at least 2), his servant cuts the Michaelmas leaf from the necrology if you have not already secured it. Reading the necrology takes six minutes and must **finish strictly before noon** in that situation; a search that crosses noon cannot recover the removed leaf. |
| 14:00 | Chapter III |
| 16:00 | The council (forced scene) |

**Travel:** 2 minutes chancery to library; 6 into town; 12 across the bay to Akershus.

## Endings (7)

1. **The Winter Restored**: the best ending. The grants are voided, Haslum is rented to Ragna, and the winter is written back into the Oslo annal.
2. **A Name Without Proof**
3. **The Wrong Hand**: you blame Gaut, Kolbein or Eystein.
4. **Silence Kept**: you say the records are in order.
5. **For the King's Honour**: the grants are voided quietly and the truth left out.
6. **A Farm of Your Own**: you take Gaut's bribe.
7. **The Register Recopied**: you hand Ivar the evidence.

**Ranks:** Keeper of the record / Chancery notary / Clerk of the rolls / Copyist / Novice with a blot.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at around 13:00, with one wrong date and one wrong reading, scoring 88.
- It reports checks of the finding guard, removed necrology leaf, forced council, chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** The five stated dates and Julian weekdays were independently checked against the calendar calculation used in the published HTML. JavaScript syntax validation passed. The noon necrology deadline safeguard was independently verified in the committed file. Local Chromium could not complete the smoke test, so **a full seven-ending browser playthrough and responsive visual validation remain unverified**.

## Notes on history

**Real elements:**
- King Haakon V Magnusson (reigned 1299–1319) and his castle of Akershus.
- His 1314 decree making the provost of St Mary's Church in Oslo chancellor and keeper of the great seal. This is the case's starting point.
- The Apostles' Church in Bergen.
- Royal secret (privy) seals as distinct from the great seal.
- Annals kept by cathedral canons.
- Necrologies read on anniversaries, dated by Roman reckoning ("III Kalends of October").
- Dating documents by feast days.
- The Julian calendar (the weekdays and moons shown are computed for 1311–12).
- Land-rent (landskyld) owed by tenants of crown farms.

**Invented:** the king's illness in the winter of 1311–12, the Bergen grants, the cover-up, Master Ivar, Herr Sigurd and Gaut, Ragna, Sir Kolbein, Canon Eystein, Provost Bård and the chronicles' wording. Nothing here describes a real event in Haakon V's reign. The monastery of Utstein is real; Ivar's exile there is fiction.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-kings-missing-winter/
- **HTML source:** `cases/the-kings-missing-winter/index.html` in `doorquests/doorquests-web` (`main`).
- **Calendar answers:** D1 — **19 December 1311** (Sunday after St Lucy); D2 — **18 December 1311** (Saturday before St Thomas); D3 — **2 February 1312** (Candlemas); D4 — **4 February 1312** (Friday after Candlemas); D5 — **26 November 1311** (first full moon after All Saints as represented in the game's calendar). The game uses a **Julian calendar**, including a 29-day February in 1312, not modern Gregorian dates. The astronomical accuracy of the displayed moon phases is a source-author report, not independently established during this publication pass.
- **Calendar reveal:** collecting the first and second Bergen grants, Akershus register and Hamar draft leaf unlocks the five-date check. Correctly entering all five dates yields `datesFixed`; concluding that the Bergen grants were sealed **without the king**, while he lay sick at Akershus, yields `contradiction`. That finding unlocks an early report in the chancery.
- **Published noon safeguard:** at **12:00**, if Master Ivar's unease is at least **2** and the necrology has not already been secured, his servant removes the relevant leaf. The six-minute necrology-reading action must finish **strictly before noon** to recover the evidence in this situation. The correction exists in the published HTML already; this README commit does not change gameplay.
- **Clock model:** investigation begins at **10:00** on St Lucy's Day, **13 December 1315**; Chapter II begins at noon, Chapter III at **14:00**, and the council scene is forced at **16:00 (vespers)**. Chancery-to-library movement costs two minutes; travel into town typically six, and travel to Akershus twelve. Interview questions cost eight minutes.
- **Best-ending proof gates:** location of the king **K1 + K2**, false witness lists **G1 + G2**, responsibility for sealing and chronicle silence **S1 + S2**, motive **M1**. The four correct final answers are **Akershus throughout the winter illness**, **Bergen grants sealed without the king with false witnesses**, **Master Ivar Pálsson**, and **allocation of Crown land to Sigurd and Ivar's nephew while concealing royal incapacity**. X1 and X2 are optional corroborations.
- **Closer-examination requirements:** S1 requires looking closer at the first Bergen grant to confirm its great seal; S2 requires looking closer at the three chronicles to identify the cut leaf. Optional X2 requires examining the tax register's secret-seal detail.
- **Seven endings:** E1 The Winter Restored; E2 A Name Without Proof; E3 The Wrong Hand; E4 Silence Kept; E5 For the King's Honour; E6 A Farm of Your Own; E7 The Register Recopied.
- **Browser persistence keys:** `dq-cluortal-26-winter-v1`, `dq-cluortal-26-endings`, `dq-cluortal-26-chapters`.
- **Review scope:** reconciled the source-author Markdown to the published five-date calendar puzzle, seal and witness evidence, nine deduction pairs, final proof predicates, seven endings and the corrected noon evidence-loss rule. Historical background remains source-author material rather than independently researched in this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
