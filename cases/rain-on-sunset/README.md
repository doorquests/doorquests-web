# Cluortal No. 06 · Rain on Sunset

**1947 · Los Angeles · Hard-boiled noir · Hard · 35–50 minutes**
**Signature mechanic:** a city map you drive. Every trip costs miles, minutes and gas, and you start with four gallons.

## Premise

It's Saturday, 9:00 pm, in November 1947, and Los Angeles is underwater. You are Frankie Doyle, a PI with an office above a pawnshop on Cahuenga. June Marsh, a waitress, gives you forty dollars and a photograph of her sister Dolly, a script girl at Paragon Pictures. At 11:40 last night Dolly phoned June from producer Harlan Voss's party in Laurel Canyon, whispering "something's happened to Vera", and then the line went dead. The storm has knocked out every gas station in Hollywood. You have one tank, and you have until dawn.

## The locked truth

- At about 11:35 pm Harlan Voss shoved actress **Vera Lane** over his gallery rail onto a stone floor. She had told him she was leaving him and taking "everything" to Lorna Fay's gossip column on Monday.
- **Dolly** saw it from the doorway and ran for the phone.
- Studio fixer **Eddie Sorrell**, formerly of LAPD Vice:
  - phoned the Sunnyvale Rest Home (GLadstone 4471) from the Blue Pagoda at 1:00
  - took Paragon's prop "insert ambulance" off the lot at 1:20
  - had Dolly, drugged, admitted to Sunnyvale as "Jane Doe"
  - drove Vera's body and her roadster to the Santa Monica pier
- **Sgt. Mike Brannigan**, Sorrell's old Vice partner, wrote it up as suicide on Voss's word alone.
- Dolly is due to be moved at **6:00 am** to the S.S. Coral Queen at San Pedro, bound for Ensenada.
- **Red herring:** Tony Russo, Dolly's ex, was drunk at the Pagoda's bar from ten till four.

## The map and the gas

- Nine places with approximate in-game map coordinates. Driving distance is the straight line × 1.25, at 15 mpg, taking 2.5 minutes per mile plus 3 to park. Four gallons is about 60 miles.
- The Pagoda unlocks with the matchbook (or Mulligan's tip). The pier unlocks with the 11 pm radio news or the police report. Sunnyvale unlocks with the reverse lookup or the tail.
- Running dry on the road gives **Out of Gas**. The best route uses about 53 miles. The pier is a tempting dead end that can't be fitted into the budget, which is the noir trap.
- Phoning Lou from the office does the Gladstone lookup without a drive, once you've rubbed a pencil over the phone pad.
- The dashboard header shows a fuel gauge, the dash clock, a countdown ("Dawn in", or "Transfer in" if Sorrell moves Dolly early) and your wallet.

## Pressure

- **11:00 pm:** the radio announces Vera's "suicide" and the pier opens up.
- **1:00 am:** Voss's valet cleans the house. The earring is lost and the broken rail becomes a newly varnished one.
- **1:30 am:** Sorrell leaves the Pagoda. You can tail him until 2:30.
- **Sorrell's temper at 3:** Dolly is moved at 4:00 am instead of 6:00.
- **Money:** $5 to Mulligan for the gate log and $1 to Sal for the phone call.

## The tail (three beats)

You can hang back, stay on his bumper or run the red light. Then you can overtake him, slow down, or kill your lights. Then you can park dark, or follow him up the drive.

If he spots you, you lose 40 minutes and half a gallon, and his temper goes up. Following him up the drive leads to **The Long Fall**.

## Connections (10)

| | Evidence | What it shows |
|---|---|---|
| C1 | June's story + rail | something happened to Vera at the party |
| C2 | Earring (look closer) + Voss's story | Vera never left at 11:15 |
| C3 | Voss's story + police report | the report rests on Voss's word |
| C4 | Sorrell file + report or Brannigan's word | Sorrell and Brannigan are old partners |
| C5 | Gate log + Gladstone lookup | the ambulance went to Sunnyvale |
| C6 | Sal's phone call + lookup | Sorrell booked the room |
| C7 | Script notes + Voss's story | motive |
| C8 | Roadster + Voss's story | someone else drove her car |
| C9 | Tail + gate log | Sorrell has a key to Sunnyvale |
| R1 | Tony's story + Sal | Tony is cleared |

## Strict proofs

- **Where:** (C5 or C9) and (C6 or the tail) and the window at Sunnyvale
- **Saw:** C1 and C2
- **Killer:** C2 and C7 and (C8 or C3)
- **Cover-up:** C3 and C4 and (C5 or C9)

The finding can only be given **at Sunnyvale once Lt. Ochoa and Lou are there** (30 minutes to call and wait), or at first light.

## Endings (7)

1. **The Rain Stops:** the best ending. Dolly is rescued and the whole story is proved.
2. **Half the Story:** right, but unproved, or given at dawn.
3. **The Wrong Guy:** Tony, Sorrell as the killer, or "accident".
4. **Ensenada:** dawn comes.
5. **Out of Gas**
6. **The Long Fall:** going in alone, following Sorrell to the back room, or driving up after him.
7. **Paid Off:** taking Sorrell's $500.

**Ranks:** Big-time shamus, Licensed op, Gumshoe, Process server, Rube.

**Supplied playtest report (Claude):** All seven endings were tested with scripted playthroughs; the reported best route reaches E1 at about 2:40 am with about half a gallon left and scores 90 (Big-time shamus). This report has not been independently reproduced during the README reconciliation.

## Published implementation notes

- **Canonical gameplay file:** `cases/rain-on-sunset/index.html`
- **Progress keys:** `dq-cluortal-06-sunset-v1`, `dq-cluortal-06-endings`, and `dq-cluortal-06-chapters`.
- **Scoring reconciliation:** The published HTML counts discovered evidence consistently by excluding the two clues given automatically during the introduction from the displayed evidence total and evidence-score contribution.
- **Document role:** Companion design and solution record. The published HTML is authoritative for live game behavior; this README intentionally contains the complete solution and ending spoilers.
