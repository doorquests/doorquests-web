# Cluortal No. 05 · The Masquerade of Four Faces

**1594 · Venice, Carnival · Identity deception and abduction · Medium · 30–40 minutes**  
**Signature mechanic:** a logic grid (guests × numerals × exits)

## Premise

It's 1:30 am at Ca' Zorzan. Lorenzo Tron, the Republic's envoy, has just returned from Constantinople with the Sultan's sealed reply, and he has vanished from a masked ball. For a jest, the host had four identical Sun costumes made for four guests. The steward's book shows four Suns came in, but only three went out by the gates. The player is Marco Valier, one of the Signori di Notte (the city's night magistrates). At first light every ship in the lagoon is free to sail.

## The locked truth

| Sun | Wearer | Exit |
| --- | --- | --- |
| I | Ottavio Sforzini, a Milanese banker who works for Spain (red herring) | Land gate, 11:40 |
| II | **Lorenzo Tron, the envoy** | Never left by a gate; his costume is stuffed in the music-room chest |
| III | **Piero Dandolo**, a young nobleman deep in debt to the Spanish bank Banco Salazar | Water gate, 12:30, in the Dandolo family gondola |
| IV | Isabella Venier, the envoy's former lover (red herring) | Water gate, 1:15, in the hired gondola La Rondine |

**What happened:**
1. At 11:50 Piero drugged the envoy's Malvasia with poppy syrup in the library.
2. At 12:10 two fake "musicians", sent as Piero's "gift", carried the sleeping envoy down the servants' stair and out of the canal door. Piero lit the way.
3. At 12:20 a covered boat took the envoy to the Spanish galley Santa Clara, which lies off the Giudecca and sails at first light.
4. At 12:30 Piero left openly by the water gate.

## The grid

The grid has three parts: guest × numeral, guest × exit, and exit × numeral. Tap a square once for ✗, twice for ✓, a third time to clear. An optional setting crosses out the rest of the row and column whenever you tick ✓. A completed grid check costs 5 minutes. The game refuses to rule on the grid until the clues that prove every square have been found, so a guessed grid can't succeed.

**Clues that fill the grid:**
- **Gate book:** links each numeral to its exit.
- **Isabella:** La Rondine's gondolier, or her own account, puts her in the 1:15 boat, so she is Sun IV.
- **Ottavio:** the night watch saw him in Campo San Polo at 11:45, or he admits he walked home, so he is Sun I. Alternatively, the porter (a man left by the land gate) plus the gondola slate (the Dandolo boat at 12:30) settles it.
- **The envoy:** the blue glass eye charm from Constantinople sewn into the Sun II lining makes Tron Sun II, which leaves Piero as Sun III.

## Pressure

- Marin, La Rondine's gondolier, leaves at 3:30.
- Toni of the night watch goes off duty at 4:00.
- Pressing Piero to unease 3 makes him flee to warn the Spaniards. The galley then sails an hour early.
- The finding sends the boats, and the crossing takes 30 minutes. The best ending needs the finding given by 5:30 (4:30 if Piero fled).
- Rowing to the Giudecca alone leads to the "Into the Canal" ending.

## Connections (10)

C1 grid + abandoned costume · C2 cups + Beppo's account · C3 Nina's sighting + canal door · C4 Nina + grid · C5 music master + Nina · C6 night-watch boat + galley · C7 Piero's debts + galley · C8 canal door + night-watch boat · R1 card table + Nina · R2 night watch on Ottavio + Nina

## Endings (7)

1. **Unmasked:** the envoy and the Sultan's letter rescued from the galley's hold.
2. **The Galley Sails:** right but too late, or unproved.
3. **The Wrong Sun:** Ottavio, Isabella or the host accused.
4. **Diplomatic Silence:** you accept the host's request to hush it up.
5. **Dawn on the Lagoon:** time runs out.
6. **Into the Canal:** you go to the Giudecca alone.
7. **The Wrong Water:** the right man, but the wrong place.

## Published implementation notes

- **Canonical page:** https://doorquests.com/cases/the-masquerade-of-four-faces/
- **HTML:** `cases/the-masquerade-of-four-faces/index.html`
- **Grid implementation:** requires exactly four positive matches in each of the three grid sections and the prescribed supporting clues before awarding the solved-grid evidence. Incomplete grids are declined without time cost; a completed grid check spends five minutes.
- **Time implementation:** starts at 1:30 am; ordinary dawn threshold is 6:00 am, accelerated to 5:00 am when Piero flees. The rescue check allows 30 minutes for the crossing, giving the 5:30/4:30 finding deadlines above.
- **Save-state key:** `dq-case-05-masquerade-v2`; separate keys `dq-case-05-endings` and `dq-case-05-chapters` track ending discoveries and chapter checkpoints.
- **Testing provenance:** the supplied case document reports scripted playthroughs of all seven endings and a best-ending run around 4:20 am. Those playthroughs were *reported by the source author*, not independently repeated during this README reconciliation. The published HTML's grid, timing constants, case resolution, and ending identifiers were inspected.
- **Documentation status:** COMPLETE — APPROVED.
