# Cluortal No. 19 · The Ghost of Chandra Niwas

**1893 · Rajputana (Bikaner State), India · Haunting explained · Medium · 30–45 minutes**

**Signature mechanic: Floor-plan experiments.** A clickable plan of the haveli shows the baithak, the munim's daftar, the lamp gallery, the roof terrace, the zenana court with its jaali gallery, the shrine, the well court, the east wing and the nohra. Each manifestation card lists its steps. When the experiments are done, you answer "What causes it?" and the card is marked **Explained**.

| Manifestation | Experiment | Cause |
|---|---|---|
| Footsteps on the roof | Measure the east wing: 52 ft outside, but rooms of 14 + 16 + 10 ft plus 7 ft of walls → **5 ft unaccounted for**. Then find where the gap opens in the nohra. | A forgotten servants' stair inside the east wall, opening behind a re-mortared arch in the nohra |
| The voice behind the jaali | **Sound test**: Lakshmi speaks from different rooms while you listen at the zenana jaali. Only the munim's daftar works. | Someone speaking into the iron grating of an air duct in the munim's office; the duct carries the voice up to the jaali |
| Lamps that light themselves | Examine the lamps (incense ash beside camphor-sticky wicks), then **time a test**: a lit incense stick leaned against a primed wick lights it 55 minutes later | Incense-stick fuses set at 8 pm by the munim, who has "checked the lamps" himself since Holi |
| Anklet bells at the well | Examine the pulley (a fine black thread), then follow it | A thread pulled from a peg behind the camel shed in the nohra |

The plan updates as you work: the 5-ft void is shaded, the duct and the thread are drawn in.

**Also uses: the buyer's correspondence.** The Letters tab collects:
- Seth Bihani's offer of 18,000 rupees.
- Mohanlal's letter in the munim's desk: "the sooner the family takes fright, the sooner your two thousand rupees".
- Your own railway survey sheet: the branch line's station yard and goods shed are aligned on the Didwania nohra.

**Three nights.** Each night you can keep watch in **one** place (the roof, the zenana jaali, the lamp gallery, the well, or the daftar) until morning. You witness its manifestation **only if you begin the watch no later than its scheduled occurrence**; arriving after the event gives no retrospective evidence.
- Watching the daftar shows the munim kneeling at the grating.
- If you dusted flour on the hidden stair by day, watching the roof gives you a young man's bare footprints leading to the nohra.
- Rattle the munim and the house goes quiet: "someone is being careful."

**Header:** the painted haveli facade at night, with the moon waning across three nights. Four glowing signs (footprints on the roof chhatri, sound at the jaali, a lamp in the gallery, bells at the well) each turn into a green tick when explained. Below it are four status tiles (Reported / Witnessed / Explained) and the countdown to the deed.

## The people

- **Gangabai Didwania**, 64, widow and head of the house. She has kept its accounts in her head for forty years. She isn't easily frightened, but she is frightened for her grandchildren.
- **Shyamsundar**, 38, a jute broker in Calcutta. He owes forty thousand rupees, which makes him a tempting suspect. He's innocent.
- **Kamla**, his wife. She reads the newspaper aloud to her mother-in-law and noticed that the "ghost" uses the old Seth's turn of phrase.
- **Lakshmi**, 12. She is curious rather than afraid, and becomes your experiment partner.
- **Bansidhar**, the family's munim (accountant) for thirty years. He is the voice.
- **Girdhari**, his nephew, who keeps the nohra key. He walks the roof and pulls the bells.
- **Phooli**, the maid. She was sent away from the lamps every evening.
- **Pandit Jagdish**, the household priest. He believes in spirits and in fees, but is not guilty.
- **Mohanlal**, Seth Bihani's agent at the sarai.
- **You**: an Indian assistant surveyor on the railway branch-line survey camped outside the walls, asked for as "a man who measures things".

## Connections (7)

| ID | Link |
|---|---|
| C1 | Mohanlal's letter + the voice explained, or the munim seen at the duct → the munim is the voice, and the buyer pays him |
| C2 | Hidden stair + who keeps the nohra key → Girdhari walks the roof |
| C3 | Thread's path + nohra key → Girdhari rings the bells *(optional)* |
| R1 | Survey sheet + Bihani's offer → the buyer knows the station will stand on the nohra |
| L1 | Lamp ash + Phooli's word → the munim primes the lamps *(optional)* |
| K1 | Kamla's word + the voice → it knows the old Seth's words because the munim does *(optional)* |
| S1 | Shyamsundar's debts + the offer → he was being squeezed, not plotting *(optional)* |

**Strict proofs:**
- All four manifestations explained.
- **Who:** C1 + C2.
- **Why:** R1.

**When you can give the finding:** at the household's gathering in the baithak from 18:00 on Day 3, or on the fourth morning when the buyer's lawyer arrives with the deed (10:00). Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| Day 1, 18:00 | Arrival |
| Nights 20:00–02:00 | One watch per night (or sleep), until 06:00 |
| 13:00–16:00 daily (from Day 2 in game logic) | The munim is at the bazaar. The 15-minute desk search yields his letter only if completed **strictly before 16:00**; otherwise he returns before the search is finished. |
| Day 3, 18:00 | The household gathers |
| Day 4, 10:00 | The deed |

**Travel:** about 3 minutes between rooms; 15 to the town sarai; 30 to the survey camp.

**Chapters:** night 1, night 2 (from 20:00 on Day 2), and the gathering (from 18:00 on Day 3).

## Endings (7)

1. **The House Stays**: the best ending.
2. **Explained, Not Proved**: the sale is stopped for now, but the munim stays.
3. **A Wrong Accusation**: you blame the Pandit or Shyamsundar, or call it a spirit.
4. **Sold by Fear**: you say nothing on the fourth morning.
5. **A Costly Havan**: you advise the priest's 2,000-rupee rite.
6. **Beyond Your Science**: you take Mohanlal's purse.
7. **The Munim's Books**: you confront him alone at night, and he vanishes with the family's ledgers.

**Ranks:** Surveyor of ghosts / Deputy superintendent / Assistant surveyor / Chainman / Lost in the lanes.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at the Day 3 gathering with two deliberate experiment mistakes, scoring 85; a cleaner run reportedly scores higher.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** JavaScript syntax validation passed, and the Floor Plan calculation and the two corrected time conditions were independently reviewed. A complete browser playthrough, all-ending verification, and the source author's responsive visual tests were **not independently repeated**.

## Notes on setting and approach

**Real elements:**
- Marwari merchant families of Rajputana whose trading houses had moved to Calcutta and Bombay while the painted havelis remained at home.
- Haveli architecture: baithak, zenana court and stone jaalis, jharokhas, chhatris, a household shrine and a well court.
- The munim (accountant) keeping the family's bahi-khata ledgers.
- The nohra (camel yard).
- Bikaner State's railway age: the Jodhpur–Bikaner Railway reached Bikaner in 1891, and branch-line surveys followed.
- The Indian staff of survey parties.
- Incense, camphor and oil lamps in daily household use.

**Approach:** the family and household are written as ordinary people with their own reasons, competence and fears. The "ghost" is treated the way the family itself treats it: as a serious, frightening problem, explained by careful work. Belief and ritual aren't mocked, and the priest isn't the culprit.

**Fictional:** Kesargarh, Chandra Niwas, the Didwania family, Seth Bihani and every person.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-ghost-of-chandra-niwas/
- **HTML source:** `cases/the-ghost-of-chandra-niwas/index.html` in `doorquests/doorquests-web` (`main`).
- **Time model:** start Day 1 at 18:00; each of three night-watch windows runs from 20:00 to 02:00, with a watch/sleep advance to 06:00. The family gathering begins Day 3 at 18:00; the fourth-morning deed deadline is 10:00. House movements cost three minutes, town fifteen, and camp thirty.
- **Night-watch safeguard already in published HTML:** the watch must start no later than the phenomenon's scheduled time for that night: lamps 21:00; the munim at the duct 21:55; jaali voice 22:00; roof footsteps 23:30; well bells 01:00. A late watch still spends the night but yields no observation of an event that already passed; rattling Bansidhar can suppress all events.
- **Munim desk safeguard already in published HTML:** Bansidhar leaves for the bazaar from 13:00 to 16:00 on applicable days. The fifteen-minute search only retrieves Mohanlal's letter when it **finishes strictly before 16:00**. Otherwise the scene reports his return and the letter remains undiscovered. This README commit does not modify the HTML.
- **Floor Plan arithmetic:** 14 + 16 + 10 = 40 feet of rooms; two 2-foot outer walls and two 1½-foot partitions contribute 7 feet; 52 − 47 = **5 feet** of concealed space.
- **Best-ending proof gates:** explain all four manifestations (footsteps, voice, lamps, bells); demonstrate the perpetrators through C1 + C2; establish the land-sale motive through R1; and select the four correct final answers (Bansidhar/Girdhari, railway nohra, duct, incense). C3, L1, K1 and S1 provide optional corroboration.
- **Browser persistence keys:** `dq-cluortal-19-chandra-niwas-v1`, `dq-cluortal-19-endings`, `dq-cluortal-19-chapters`.
- **Review scope:** author Markdown reconciled against the published Floor Plan calculations, four manifestations, seven connections, proof predicates, watch timing, desk search, and seven endings. Historical notes remain the source author's context and were not independently researched during this documentation review.
- **Documentation status:** COMPLETE — APPROVED.
