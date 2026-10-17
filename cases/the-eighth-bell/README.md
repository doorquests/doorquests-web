# Cluortal No. 08 · The Eighth Bell

**1889 · Victorian riverside London · Impossible crime · Medium · 30–45 minutes**

**Signature mechanic:** the Ringing Board. You replay the clock's round of bells as each witness heard it, by ear or by eye, and find the stranger in it.

**Also uses:** a street map showing where every listener stood at eleven.

**Sound:** the bell voice is the `toll()` synth adapted from *The Bell-Ringer of Hollow Vane* (synthesized sine partials, struck and decaying). Here it is extended with a pitch argument for a ring of eight in D major, a thin, short "handbell" partial set, and a detuned "cracked" set. Sound is off by default. The header toggle turns it on, and so does pressing any ▶ Play button.

## Premise

It is Friday, 22 November 1889, a foggy night on the river. St. Aldric's has a ring of eight bells, and every hour its clock plays them once in rounds (treble down to tenor) before striking. The sixth bell cracked at Michaelmas. Its clock hammer was hooked back, so the parish knows the sound of "a round with a hole in it."

At eleven, seven people heard eight notes. At 11:06 the curate found Amos Wren, the caretaker, dead at the foot of the tower stair.

You are Detective Sergeant Daniel Ashby of the Thames Division. Inspector Crane arrives at 2:30 am, intending to call it an accident.

## The locked truth

- **Who and why.** Silas Garrow, Captain of the Tower and treasurer of the £64 bell-recasting fund, had never sent the money to the Whitechapel foundry. Amos found out this week.
- **The killing.** At about 10:40 Garrow met Amos in the tower and struck him with handbell No. 6 from the ringers' practice set.
- **The eighth bell.** Garrow lashed that same handbell to the chiming barrel's sixth lever in the clock room, using a length of green worsted cut from his own muffler. At eleven the clock played a full round. In the Ship & Lantern, Garrow said, "That's old Amos at it, striking the cracked sixth by hand," and the whole bench agreed.
- **How it gives itself away:**
  - A handbell is thin, slightly sharp and dies quickly.
  - The clock-room window faces east, so the river side heard the note loudly and the pub side barely at all.
  - The cracked sixth's dusty hammer never moved.

## The Ringing Board

- **Reference rounds:** "the round as cast" (all eight bells), "the round since the crack" (seven, with a silence in the sixth place), and a cracked-bell sample.
- **Eight witness accounts,** each playable and drawn as a trace. Disc size shows loudness, the tail shows how long the note rang, and a dashed staircase shows true pitch, so a sharp note sits above the line.

| Witness | Where at 11:00 | Stranger's loudness | Says |
|---|---|---|---|
| PC Dobbs | Wharf Lane (east) | very loud | eight |
| Mrs. Flynn | Aldric Stairs (east) | loud | eight |
| Joe Cutts | lighter on the river | loud | eight, no ship's bell |
| Miss Lacey (perfect pitch) | Church Row (north) | moderate | eight, but the sixth was "sharp and thin" |
| Rev. Vane | vestry (south) | faint | eight, "round a corner" |
| Ned Wren | Church Row west | faint | seven… eight |
| Garrow | Ship & Lantern (west) | barely | "eight, clear as day" |
| Tom Pell | Ship & Lantern | barely | (privately) **seven** |

**Questions on the board:**
1. Which place in the round belonged to the stranger? (needs 2 accounts)
2. What voice did it have? (needs 3 accounts)

**Question on the street map:**
3. Where did it ring from? (needs 5 accounts)

The candidate sources are the belfry louvres, the **clock-room window**, the vestry, a ship's bell, and an echo from St. Mary's. Each wrong pick explains why it doesn't fit.

## Pressure

- **Clock:** 11:15 pm start, with Crane at 2:30 am. You can send PC Dobbs to fetch Crane early: dispatch takes 2 minutes, followed by a 35-minute return interval (37 minutes total from selecting the action, capped by Crane's scheduled 2:30 am arrival). While Dobbs is away, he can't help you on the stair.
- **11:55:** Garrow slips out to cut the handbell down before the midnight round.
  - **If you are up in the tower:** he passes you in the dark. You can watch him, shout for Dobbs and catch him, or grab him yourself (the E5 ending).
  - **If you are interviewing him in the pub:** he can't leave, and the midnight round rings **eight** again with nobody in the tower.
  - **Otherwise:** he removes it. The clock room shows only marks and green threads, the midnight round is seven, and Tom says Garrow went out at five to twelve.
- **Garrow's unease at 3:** he moves early, and you can denounce him in the pub (the E6 ending).

## Connections (11)

| ID | Connection | What it shows |
|---|---|---|
| B1 | Stranger's place + cracked sixth (look closer at the dust first) | The eighth bell wasn't the cracked sixth |
| B2 | Stranger's voice + gap in the handbell box | It was handbell No. 6 |
| B3 | Where it rang + clock-room rig or lever marks | It rang from the clock room |
| B4 | Surgeon's time of death + Garrow's account or the curate on Amos's threat | The bell was staged to make Amos alive at eleven |
| B5 | Tom on Garrow + surgeon | Garrow was out of the pub when Amos died |
| B6 | Green worsted + Garrow's muffler | The lashing came from Garrow's muffler |
| B7 | Caught or watched + rig or marks | Garrow went back for the handbell |
| B8 | Foundry letter + fund book | The bell fund never reached the foundry |
| B9 | Midnight seven + Tom on five to twelve | Garrow silenced the eighth bell |
| B10 | Dented handbell + body (look closer at the wound first) | The handbell was the weapon |
| R1 | Ned's story + Miss Lacey on Ned | Ned is cleared |

**Strict proofs:**
- **The bell:** B1 and B2 and B3
- **The time:** B4, plus B10 or B5
- **Who:** B5, plus one of B6, B7 or B9
- **Why:** B8

You give the finding in the vestry once Crane has been fetched, or at 2:30.

## Endings (7)

1. **The True Round** (the best ending)
2. **Seven Bells and a Doubt:** right but unproved
3. **The Wrong Ringer:** you accuse Ned or the curate
4. **Accidental Death:** "Amos struck the bell," "nobody did it," or silence
5. **The Long Drop:** you tackle Garrow alone, or shout for Dobbs while he's away
6. **Gone on the Tide:** you denounce Garrow in the pub
7. **The Penny Dreadful:** you say no one can explain it

**Ranks:** Inspector material / Sharp-eared sergeant / Steady constable / Raw recruit / Tone-deaf.

**Source-author testing report:** the original companion notes state that all seven endings were reached in scripted playthroughs and that one complete best-ending run reached E1 around 2:20 am with a score of 99. These results have not been independently reproduced during this README reconciliation.

## Published implementation notes — October 17, 2026

- **Canonical playable page:** https://doorquests.com/cases/the-eighth-bell/
- **HTML repository path:** `cases/the-eighth-bell/index.html` on `doorquests/doorquests-web` (`main`). This README is the companion design and solution record, not the game executable.
- **Inspector timing:** the sent timestamp includes the two-minute dispatch cost; Crane's return follows 35 minutes later, no later than his standard 2:30 am arrival.
- **Successful ending narration:** when the player has physically taken handbell No. 6, it is placed on the vestry table. If the player's deductions prove the case without taking it, the verdict refers to presenting the evidence instead.
- **Handbell scorecard:** differentiates a recovered bell, a bell located in the clock room, a bell taken away by Garrow, and a bell not yet located.
- **Four proof chains:** B1+B2+B3; B4 plus B10 or B5; B5 plus B6/B7/B9; and B8. The correct final answers alone are not sufficient for the best ending.
- **Browser persistence:** investigation `dq-cluortal-08-eighth-bell-v1`, endings `dq-cluortal-08-endings`, and chapter checkpoints `dq-cluortal-08-chapters`.
- **Verification scope:** README reconciled with the actual GitHub HTML's game constants, timelines, evidence links, verdict functions, and the three published HTML corrections. Source-author claims of complete scripted testing are not treated as newly verified playthroughs.
- **Status:** COMPLETE — APPROVED.

## Period notes

- **Real details used:** rings of bells and change-ringing handbell sets; chiming barrels with pins lifting hammer levers; bells recast at the Whitechapel foundry; the Thames Division (river police at Wapping); the *Illustrated Police News*.
- **Fictional:** St. Aldric's, the people, the parish and the crime.
