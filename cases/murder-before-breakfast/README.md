# Cluortal No. 4 · Murder Before Breakfast

**1949 · Little Hollowby, an English village · Cozy · Easy · 15–25 minutes**
**Signature mechanic:** the Larder (ingredient deduction)
**Audience:** a gentle introductory mystery for new or younger players. The death happens off-page and is described softly. There are no gory details, and the poison is never named or explained.

## Premise

It's the morning of the village fête. Edwin Fairweather, the baker, is found at his kitchen table with a cold cup of tea and half a pink-iced bun. Every fête morning he bakes six breakfast baskets for the fête committee, and his delivery boy, Tommy, cycles them round before seven. You are Constable Daisy Penrose. Anyone who wants to leave the village will be on the three o'clock bus.

## Locked truth — internal spoiler / production reference

| Question | Answer |
| --- | --- |
| Whose basket? | Mrs. Pruitt's, the only nut-free bun, with an oat crumble topping. |
| Where did the pink icing come from? | Mr. Kettle's back room, from his black-market icing sugar and cochineal. |
| Who? | Horace Kettle, the grocer. |
| Why? | Edwin had begun a letter to the Ministry of Food reporting Kettle's black-market sugar. |

**How it happened:**
1. Tommy left Mrs. Pruitt's basket on her step at 6.20 while she was round the back feeding her hens.
2. At 6.25 Bert the milkman saw Kettle pick something up from her step.
3. Kettle iced the bun in his back room, tore off the name label and wrote a cheerful note in capitals. Its crooked R matches the price cards in his shop window.
4. At about 7.00 he left the basket on the bakery step, knowing Edwin never wasted a crumb.

## The Larder

1. **Test the bun.** Four 5-minute tests: topping, glaze (found under the icing), dough and spice.
2. **The six baskets.** From the order card. Each test crosses out the baskets that don't match. When exactly one is left, the player chooses it. Choosing a crossed-out basket counts as a wrong pick; choosing while more than one fits only gets a hint.

| Basket | Topping | Glaze | Dough | Spice |
| --- | --- | --- | --- | --- |
| Colonel Hargreaves | Walnuts | Sugar | Butter | Cinnamon |
| Mr. Kettle | Walnuts | Sugar | Butter | Cinnamon |
| **Mrs. Pruitt** | **Oats (no nuts)** | Sugar | Butter | Cinnamon |
| Reverend Mallory | Walnuts | Sugar | Butter | Extra cinnamon |
| Dr. Bramwell | Walnuts | Honey | Butter | Cinnamon |
| Miss Dove | Walnuts | Sugar | Margarine | Cinnamon |

3. **The pantry.** Last night's stock book, minus this morning's count, equals exactly what six buns needed. The larder holds no icing sugar and no cochineal, so the pink icing came from somewhere else.

## Pressure (gentle)

- Bert the milkman goes home at 10.00.
- At Kettle's nerves 2, his back-room stash has been cleared away. Miss Dove's testimony ("a little extra from under the counter") still proves where the icing came from.
- At Kettle's nerves 3, he offers you tea and a bun. Accepting leads to the "A Nice Cup of Tea" ending: you wake up safe in the doctor's parlour, and Kettle has gone.
- The three o'clock bus; the formal finding is delivered at the bus, not earlier.

## Connections (12)

- **C1** Pruitt's bun + her empty step
- **C2** Tommy's book + her empty step
- **C3** Bert's sighting + Tommy's book
- **C4** the note + the price cards
- **C5** icing from outside + Kettle's stash
- **C5b** icing from outside + "under the counter"
- **C6** Edwin's letter + the stash
- **C6b** Edwin's letter + the vicar's word
- **C7** the basket + the note
- **C8** the doctor's view + the plate
- **R1** the Colonel's alibi + Tommy's book
- **R2** Miss Dove's cake + icing from outside

## Endings (6)

1. **The Last Crumb** (best ending)
2. **Half-Baked:** the right person, but not proved.
3. **The Wrong Doorstep:** Pruitt, the Colonel or Dove accused.
4. **Natural Causes**
5. **The Three O'Clock Bus:** time runs out.
6. **A Nice Cup of Tea:** gentle danger; you recover.

The player's actions are labelled in kind words: "Gently", "Plainly" and "Firmly"; "Hunches"; "Put together". A "How this works" box opens the Larder tab. A notebook suggests next steps. During the HTML reconciliation, six ending branches received targeted scripted checks; this does not replace a complete founder playthrough.


## Published implementation and QA reconciliation

**Status:** COMPLETE — APPROVED (HTML publication; companion README production)

- **Playable URL:** https://doorquests.com/cases/murder-before-breakfast/
- **Canonical GitHub HTML:** `cases/murder-before-breakfast/index.html`
- **Companion README:** `cases/murder-before-breakfast/README.md`
- **Public collection name:** Cluortals. The `/cases/` repository directory and URL remain stable by design.
- **Story setting:** Little Hollowby, England, 1949. Player character: Constable Daisy Penrose.
- **Evidence inventory:** 19 evidence objects in the published `EV` registry (including two player-created deductions, `pruittBun` and `foreignIcing`).
- **Connection inventory:** 12 `DED` entries, including alternative connections `C5b` and `C6b`.
- **Endings:** Six (`E1`–`E6`), as listed above.
- **Persistence:** Browser-local progress, chapter checkpoints, and unlocked endings are stored under established `dq-case-04-...` keys; keep those keys stable to avoid interrupting returning players.
- **Mobile / desktop:** Focused browser smoke checks and targeted ending-branch checks were performed during HTML reconciliation. Full player-experience testing remains a separate founder review.

### Final finding and best-ending gates

Players may assemble their four-part finding during the investigation, but the **final accusation becomes available at the three o’clock bus**. The answer is not enough by itself: the best ending `E1` requires both correct choices and evidence connections.

| Required proof | Published implementation |
| --- | --- |
| Whose bun and cause of death | `pruittBun` evidence and `C8` (doctor's view + plate) |
| Origin of pink icing | `C5` (outside icing + hidden stash) **or** `C5b` (outside icing + under-counter testimony) |
| Culprit's chain of evidence | **All three** `C1` (Pruitt's bun + missing basket), `C3` (milkman's sighting + delivery book), and `C4` (note + price-card handwriting) |
| Motive | `C6` (unfinished letter + stash) **or** `C6b` (unfinished letter + vicar's testimony) |
| Correct hypothesis fields | `basket=pruitt`, `icing=kettle`, `who=kettle`, `why=market` |

**Ending routing:** `E1` requires the complete proofs above; naming Kettle without sufficient proof yields `E2` (*Half-Baked*). Accusing another named suspect yields `E3` (*The Wrong Doorstep*). The other three endings cover a natural-causes conclusion, letting the bus leave, and accepting the grocer's tea.

### Design / continuity safeguards

- Maintain the cozy, gentle narrative voice and non-graphic treatment.
- Do not identify or explain the poison beyond the narrative's intentional ambiguity.
- Preserve the **Larder** tests and ingredient attributes: they are the investigation's signature mechanic.
- Preserve alternative proof through Miss Dove if Kettle clears his stash.
- Avoid publishing the locked-truth solution in player-facing webpage metadata or marketing copy. This README is a spoiler-bearing production document.
- Today's Cluortal and Daily Cluortals homepage cards are maintained separately from this companion README.
