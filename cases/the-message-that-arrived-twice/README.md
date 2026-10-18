# Cluortal No. 18 · The Message That Arrived Twice

**1943 · Wartime Britain · Espionage · Hard · 35–50 minutes**

**Signature mechanic: the Cipher Pad.** LAPWING's messages are in a **poem code**, a columnar transposition. To decode one:
1. Choose a poem: the current one, or the training poem retired in September.
2. Read the indicator group DFLS: each letter names a word of the poem by position (A = 1st, D = 4th…).
3. Pick those four words in order to build the key.
4. Write out the grid (15 minutes). The pad really performs the transposition. The 15-minute decoding action must **finish strictly before 0100**; the decision deadline takes precedence.
   - A wrong key produces genuine gibberish.
   - A key of the wrong length won't fill the grid.
5. Once a message is decoded, use LAPWING's security-check card to say which checks it carries.

**Also uses: Fists & Rota.**
- A comparison table of LAPWING's training "fist" (Morse rhythm) against each operator's notes. You decide which one is him.
- The night rota, which shows a pencilled swap of the signals master.
- B's altered log sheet compared with Briggs's own carbon.
- The coding room's receipt book, which shows B was held for 36 minutes.

**Header:**
- A paper Morse tape across the top.
- Two buff message forms (A at 2104, B at 2122) with the same call sign, serial and indicator. Each shows its five-letter groups, and gets stamped "?", "SUSPECT", "GENUINE" or "FORGED".
- Status tiles and the countdown to Baker Street's 0100 deadline.

## Premise

Station 57 is a fictional FANY wireless receiving station in Buckinghamshire. On 21 October 1943:
- At 2104, agent LAPWING (Lt. Henri Duclos) came up on his main crystal.
- At 2122 "LAPWING" came up again, on his reserve crystal from a different transmitter, with the same serial and the same indicator.
- Both ask for an arms drop, but to different grounds: A says POPLAR on the 24th/25th; B says WILLOW on the 26th/27th.

Major Corrie must tell Baker Street by 0100 which message to believe.

## The locked truth

**Message B is LAPWING.**
- It decodes with the **current poem**, issued on 29 September.
- It carries **both checks**:
  - the **true check**: the 18th letter shifted, so "DROP" becomes "DSOP"
  - the **bluff check**: the message ends "STOPP"
- It pads with **Z**, his lifelong habit.
- Its fist matches his on all five points: 22 wpm, long dashes, a stretched V, a hesitation before Q, and "GN" followed by a pause.
- It came on his chirpy reserve crystal.

**Message A is a German forgery.**
- It decodes only with the **training poem**, retired on 28 September after his courier was arrested.
- It carries the **bluff check without the true check**, exactly what a captor would send.
- It pads with X.
- Its fist is too clean: 18 wpm and textbook-even.

**The leak is Arthur Penrose, the civilian signals master.**
- On 6 September he signed out LAPWING's registry file, which then held the training poem and the bluff check. The true check was never filed; it lived only on Captain Halloran's card.
- He put himself on tonight's watch by crossing out Sergeant Dobbs, initialled but not countersigned.
- He rubbed out Briggs's note "Fist = LAPWING, sure" on B's top sheet and wrote "UNFAMILIAR — SUSPECT" in another pencil.
- He held B back for 36 minutes, hoping the first message would be believed.

## Ciphertexts (both verified by decryption)

| | Key | Plaintext (padding included) |
|---|---|---|
| A | ACROSSFENPLOUGHNEST (old poem, words 4, 6, 12, 19) | MERCERINTACTSTOPDROPARMS…POPLAR…TWENTYFOURTWENTYFIVE…STOPP + XXXXXXXXXXX (114 letters) |
| B | WAPPINGTHESOUNDTHE (current poem, words 4, 6, 12, 19) | MERCERINTACTSTOPDSOPARMS…WILLOW…TWENTYSIXTWENTYSEVEN…STOPP + ZZZZZ (108 letters) |

## Connections (8)

| ID | Link |
|---|---|
| K1 | A decoded + training file → A was keyed from the retired poem |
| K2 | A's checks + security card → bluff check without the true check |
| F1 | Fist match + B's checks → B is LAPWING |
| Z1 | B decoded + training file → Z padding *(optional)* |
| M1 | Altered sheet + 36-minute delay → the signals master tampered with B |
| M2 | Sign-out book + A decoded → the forger had LAPWING's file, and Penrose had the file |
| M3 | Rota + Dobbs's word → Penrose put himself on tonight's watch |
| M4 | Penrose's story + the delay → his excuse is a lie *(optional)* |

**Strict proofs:**
- **Genuine:** K1 + K2 + F1
- **Giveaway:** K1 + K2
- **Leak:** M1 + M2
- **Method:** M2 + M3

**Giving the finding:** in the Commandant's office once both messages are decoded, or at 0100 when Baker Street rings. The button is disabled until then, and `resolve()` also refuses.

## Time

| Time | Event |
|---|---|
| 2140 | Start |
| 2300 | Duplicate books go into the London bag. Briggs's carbon can only be read if its three-minute action **finishes strictly before 2300**; her spoken testimony remains available as an alternative (**Chapter II**). |
| 2330 | If you rattled Penrose, he leaves "unwell". An ongoing interview with him is closed when his departure is triggered. |
| 0000 | **Chapter III** |
| 0100 | Decision |

Walking inside the station takes 3 minutes.

## Endings (7)

1. **The Lapwing Calls:** the best ending
2. **A Leak Unplugged:** the right message, but the leak isn't proved
3. **Into the Trap:** you believe A
4. **Silence on the Sked:** you can't decide
5. **The Wrong Name:** you blame Halloran, Avery or Briggs
6. **First Come, First Believed:** you take Penrose's advice
7. **The Signals Master Walks:** you confront him alone

**Ranks:** Most Secret / Security officer / Signals officer / Cadet / Ear to the wrong set.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at 2353 with one deliberate wrong-key attempt, one incorrect security-check answer and a score of 91.
- It also reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** both ciphertexts were independently checked against their intended four-word transposition keys and 18th-letter security checks, and JavaScript syntax validation passed. Local browser access was blocked by administrator policy. **Interactive seven-ending and responsive visual testing were not independently completed.**

## Historical notes

**Real details used:**
- SOE poem codes (double transposition in reality; simplified here to a single columnar transposition) and indicator groups.
- Bluff and true security checks.
- The danger of German *Funkspiel* (playing back captured agents' sets), as in the *Englandspiel*.
- Replacing compromised poems; Leo Marks's push in 1943 toward worked-out keys and one-time pads.
- FANY wireless operators at SOE receiving stations in Buckinghamshire, who recognised agents by their "fist".
- Training at Thame Park.
- Crystal-controlled frequencies and suitcase sets such as the Type 3 Mk II ("B2").
- Signal tone reports (T9, T7).
- Lysander deliveries, Halifax supply drops, and reception committees with lights.
- Baker Street (SOE headquarters), and MI5 handling the mole.

**Fictional:** Station 57, LAPWING, the MERCER network, the poems (written for this Cluortal), and every person.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-message-that-arrived-twice/
- **HTML source:** `cases/the-message-that-arrived-twice/index.html` in `doorquests/doorquests-web` (`main`).
- **Clock model:** investigation begins at 2140, duplicate books depart at 2300, an unsettled Penrose can leave at 2330 when sufficiently rattled, Chapter III begins at midnight, and the forced Baker Street decision occurs at 0100. Station movements cost three minutes.
- **Published deadline safeguards:** the three-minute carbon-book examination must finish **strictly before 2300**; fifteen-minute cipher-grid writing must finish **strictly before 0100**; and Penrose cannot be interviewed after his departure, including when the departure event interrupts an active interview. These safeguards are already in HTML; the README commit does not alter gameplay.
- **Cipher implementation:** the story simplifies wartime poem codes to single columnar transposition. For indicator DFLS, the selected words occupy positions 4, 6, 12 and 19. Message A uses `ACROSSFENPLOUGHNEST` from the retired poem; B uses `WAPPINGTHESOUNDTHE` from the current poem. A lacks the true check while B carries it. The verified cipher arithmetic is game-specific, not a claim of historical cipher fidelity.
- **Best-ending proof gates:** authentic signal K1 + K2 + F1; forgery giveaway K1 + K2; station leak M1 + M2; leak mechanism M2 + M3. The final answers must select B, retired poem/bluff-only, Penrose, and the file/rota/log-sheet method. Z1 and M4 offer optional additional deductions.
- **Browser persistence keys:** `dq-cluortal-18-twice-v1`, `dq-cluortal-18-endings`, `dq-cluortal-18-chapters`.
- **Review scope:** reconciled the author Markdown with the published game's ciphertexts, decoding steps, security checks, operator comparisons, connections, proof predicates, deadlines and endings. Historical notes are retained as source-author context, not independently fact-checked in this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
