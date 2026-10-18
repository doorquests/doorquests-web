# Cluortal No. 21 · Room Twelve Was Never Rented

**1963 · Route 66, Arizona · Motel mystery · Easy · 20–35 minutes**

**Signature mechanic: the Front Desk.** Three records sit side by side in one table for all twelve rooms:
- the guest ledger,
- Rosa's housekeeping rounds (Saturday morning and Sunday morning),
- Hal's 6:00 a.m. check of the key board.

For an ordinary room the three agree: let, key out, slept in; or not let, key on its hook, untouched. You mark the rooms that don't add up, and the check tells you how many marks are right, how many are wrong and how many are missing. Then you choose an explanation for each odd room.

| Room | Ledger | Key, 6:00 | Rosa, Sunday | Explanation |
|---|---|---|---|---|
| 4 | Not let | On hook | Bedspread lain on, Kools in the ashtray | Someone with the passkey lay down there (Dale's nap) |
| 9 | Not let | Out (in drop box 6:30) | Slept in | Rented off the books; the guest left the key in the drop box |
| 12 | Not let | **On hook** | The dead man | Rented off the books with the **spare** key, so the board never changed |

On phones the table becomes one card per room.

**Also uses: the Rocket Diner's receipts.** The register-stamped checks on the spindle (#4411 9:12, #4418 10:20, #4423 10:51, #4426 11:34) and Bev the waitress's memory of who held each one.

**The solution:** None of the three records lied.
- Walter Kessling, a right-of-way agent for the Arizona Highway Department, had taken a $2,000 bribe from Lyle Gentry to reveal where the new interstate's interchange would go.
- Losing his nerve, he took an unregistered room ("I'm not here, son") so he could hand the money back to Gentry at 11 p.m., and he planned to confess to his chief on Monday.
- Gentry struck him with the room's pink glass ashtray. He then walked back across the highway, bought a coffee at 11:34, and washed the ashtray in the diner's men's room.

**The header:** the Desert Rose's neon sign and its row of twelve doors. Door 12 is pink, and each odd room gets a tick once it's explained. When the case ends, the sign reads NO VACANCY.

## The people

- **Hal Pruitt**, 58, the owner, an ex-Navy cook. Bitter about the coming bypass, which makes him a red herring.
- **June Pruitt**, his wife. She marks the spare keys with red nail polish.
- **Dale Pruitt**, 19, the night clerk. He has spent the summer renting rooms off the books. He's guilty of concealment, but not of murder.
- **Rosa Archuleta**, the housekeeper, eleven years at the motel. Her sheets are the most careful record in the place.
- **Miss Opal Fenner**, a retired schoolteacher in Room 11, who heard the quarrel through the wall.
- **Bev Tolliver**, the waitress at the Rocket Diner.
- **Lyle Gentry**, owner of the Mobil station and a town councilman. He is the killer.
- **You:** the town's deputy, the only Navajo County badge for thirty miles.

## Connections (8)

| ID | Link |
|---|---|
| K1 | Key in his pocket *(look closer: the red dot)* + key board → the spare let him in without moving the board |
| K2 | Dale's confession + rooms reconciled → Room 12 was rented off the books |
| G1 | Bev's customers + Gentry's alibi → Gentry lied about where he was |
| G2 | Pink ashtray *(look closer: blood, a crack)* + Rosa on Room 12 → the weapon |
| G3 | Pink ashtray + diner checks → left in the diner at 11:34 |
| M1 | Notebook + envelope of cash *(look closer: the bank band)* → the bribe he meant to return |
| O1 | Miss Fenner + notebook *(optional)* |
| X1 | Hal on the interstate + notebook *(optional)* |

**Strict proofs:**
- **Room:** K1 + K2.
- **Who:** G1 + G2 + G3.
- **Why:** M1.

**Dale's confession** comes when you show him the spare key or the reconciled rooms. Friendly questions alone only get a lie from him.

**When you can give the finding:** from the office phone once every room is accounted for, or when the sheriff arrives at noon. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| 7:30 a.m. | Start |
| 10:00 | The county trash truck empties the diner's cans. The three-minute ashtray retrieval must **finish strictly before 10:00 a.m.**; starting it too late cannot recover the weapon. Without the ashtray, proof G2/G3 is unavailable. Chapter II begins. |
| 11:00 | Chapter III |
| 12:00 | The sheriff arrives from Holbrook (forced scene) |

**Travel:** 2 minutes around the motel; 5 to the diner; 10 to Gentry's. **Questions:** 6 minutes.

## Endings (7)

1. **Room Twelve, Accounted For**: the best ending.
2. **A Name Without Proof**
3. **The Night Clerk**: you blame Dale.
4. **The Wrong Door**: you blame Hal or Rosa.
5. **A Fall in the Bathroom**: you let Hal write Kessling into the ledger (concealment).
6. **Gentry's Envelope**: you take the bribe.
7. **The Sheriff's Answer**: you say nothing at noon.

**Ranks:** The sheriff's best deputy / Good deputy / Night-shift deputy / Desk clerk / Just passing through.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports a best E1 run at approximately 9:40 a.m., with one wrong flag check and one wrong explanation, scoring 87.
- It reports testing the finding guard, 10:00 trash deadline, forced noon scene, chapter loading and `validState`.
- It also reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** JavaScript syntax validation passed. The independently reviewed HTML agrees on the three flagged rooms, eight evidence connections, best-ending predicates and seven endings. The ashtray deadline safeguard was checked in the committed HTML. A local Chromium smoke test timed out; **complete browser playthrough and responsive visual testing remain unverified**.

## Notes on period and setting

**Real elements:**
- Route 66 between Holbrook (the Navajo County seat) and Winslow.
- The building of Interstate 40 across northern Arizona in the 1960s. Towns along Route 66 feared being bypassed.
- Arizona Highway Department right-of-way agents buying land for the new highway.
- Speculation on land near future interchanges.
- Motor-court details: diamond-shaped plastic key fobs, key drop boxes, Gideon Bibles in the nightstand, swamp coolers.
- Roadside diners with register-stamped paper checks.
- Mobil's red Pegasus sign.
- Kools, Pontiacs, and a '57 Bel Air as a teenager's dream car in 1963.
- Sunday, July 14, 1963 was indeed a Sunday.

**Fictional:** Cholla Wells, the Desert Rose Motor Court, the Rocket Diner, the Painted Desert Bank, and everyone in the story. The sheriff isn't named.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/room-twelve-was-never-rented/
- **HTML source:** `cases/room-twelve-was-never-rented/index.html` in `doorquests/doorquests-web` (`main`).
- **Front Desk reconciliation:** the flagged rooms are **4, 9 and 12**. Correct explanations, respectively: Dale's passkey nap; an unregistered rental with key returned to the drop box; an unregistered rental using Room 12's spare key. Collect the ledger, housekeeping rounds and key-board record, then identify and explain all three anomalies.
- **Published 10:00 a.m. safeguard:** the Rocket Diner's ashtray search takes three minutes and can succeed only when it **finishes strictly before 10:00 a.m.**, the county trash collection. After the cutoff, or if a search would finish too late, the scene explains why the evidence is gone. This README commit does not alter the published HTML.
- **Clock model:** investigation begins Sunday at 7:30 a.m.; Chapter II starts at 10:00, Chapter III at 11:00 and the forced sheriff scene at noon. Movement around the motel is typically two minutes, to the diner five minutes and to Gentry's Mobil ten minutes. Interview questions cost six minutes.
- **Best-ending proof gates:** Room 12 K1 + K2; perpetrator G1 + G2 + G3; motive M1. Final selections must identify **Lyle Gentry**, the **off-book spare-key rental**, the **pink glass ashtray** and the **returned bribe**. O1 and X1 provide optional corroboration. K1, G2 and M1 require the respective closer examination of the spare key, ashtray and cash envelope.
- **Seven endings:** E1 Room Twelve, Accounted For; E2 A Name Without Proof; E3 The Night Clerk; E4 The Wrong Door; E5 A Fall in the Bathroom; E6 Gentry's Envelope; E7 The Sheriff's Answer.
- **Browser persistence keys:** `dq-cluortal-21-roomtwelve-v1`, `dq-cluortal-21-endings`, `dq-cluortal-21-chapters`.
- **Review scope:** reconciled the supplied author Markdown with published Front Desk records, room explanations, deduction recipes, final proof predicates, 10:00 a.m. trash deadline, noon cutoff and endings. Period-setting notes remain author-provided context and were not independently researched during this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
