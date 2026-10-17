# Cluortal No. 12 · The Tracks at Coyote Wells

**1881 · Nevada · Western · Easy · 25–40 minutes**

**Signature mechanic:** the Track Sheet. You sketch four prints at Dry Wash (two hoofprint patterns, two footwear impressions), gather the relevant animal and footwear impressions in town, and match each print to its source. Other candidate impressions and decoys can also be gathered.

**Also uses:** a sundown deadline and an afternoon wind that erases wash prints not fully sketched by three o'clock. A ten-minute sketch must be able to finish at or before 3:00 p.m. to be available.

**Header:** a desert sky in which the sun drops along its arc toward the mesa and the sky reddens toward sundown. Under the title plank sit four print slots, which fill with a name as each print is matched, and a sundown countdown with a crowd-temper meter.

> **Setting note:** Nevada became a state in 1864, so the page says "Nevada, 1881," not "Nevada Territory."

## Premise

It is noon on a September day in 1881. The Sierra Overland stage was robbed at Dry Wash, seven miles out, at about ten in the morning, and the Silver Queen mine's $3,200 payroll in gold coin was taken. Hap Lowry, the driver, swears it was the Callahan brothers: one robber wore Seamus's red bandana and the other "sat a grey." A posse has already locked Seamus and Dell in the jail. The marshal is in Carson City, and the town wants a hanging by sundown. You are the deputy.

## The locked truth

- **Who:** Jed Sloane, the livery hostler, and Leland Pike, the assay clerk. Pike saw the payroll notice that comes through his office.
- **The mounts:**
  - Jed rode **Caesar**, the livery's big bay. Caesar wore Kessler's **bar shoe, stamped K**, on his cracked near fore and threw it in the wash.
  - Pike hired **Jenny**, the freight mule, at 7am "to look at a prospect" and brought her back lathered at 12:30.
  - Hap took the dun mule for a grey.
- **The frame:** Jed stole Seamus's bandana off Ma Delaney's wash line the night before.
- **The cover-up:** Jed had Caesar reshod at 1pm, saying "threw it in the corral." Pike packed the coin into ore-sample crates for the next day's stage.
- **The Callahans' alibi:**
  - Hollis's ledger has them buying powder at 9:45.
  - Ander Etxeberria, a Basque sheepherder, saw them at their claim at 10:30, eight miles the other way. He is at the store from 2pm.

## The Track Sheet

| Wash print | What it shows | Made by |
|---|---|---|
| Horse one | big stride, three plain shoes, near fore bare | Caesar |
| Horse two | narrow mule shoes, short step | Jenny |
| Footprint one | low town shoe, hobnails in a cross | Pike |
| Footprint two | riding boot, right heel run over outside, spur drag | Jed |

**Decoys:**
- Red: four plain shoes.
- Smoke: unshod.
- The stage team: draft shoes.
- Seamus's boots: square heels.
- Dell's moccasins.
- Hap's boots: big flat heels.

**Rules:**
- Each comparison takes 4 in-game minutes, and wrong ones are allowed. Sketching a wash print takes 10 minutes and must finish no later than 3:00 p.m.; sketching cannot be started if insufficient time remains.
- With all four prints plus the Callahans' four impressions, you can test "Do any prints fit the Callahans?" A "no" gives the evidence *No print fits a Callahan*.
- If you take Caesar's impression before 1pm, you also get *Caesar, unshod*.

## Connections (8)

| ID | Connection |
|---|---|
| M1 | Caesar match + Kessler's book or Caesar unshod |
| M2 | Jenny match + freight hire book |
| X1 | Thrown shoe + Kessler's book (look closer at the shoe first) · optional |
| B1 | Jed's boot match + Jed's story |
| B2 | Pike's shoe match + Pike's story |
| F1 | Bandana + Ma Delaney's line (look closer at the bandana first) |
| R1 | Store ledger + Ander |
| G1 | Gold in the crates + who knew the payroll day |

**Strict proofs:**
- **Mounts:** M1 and M2
- **Men:** B1 and B2
- **Frame:** F1 and R1, plus the Callahans cleared on the Track Sheet
- **Gold:** G1

You can give the finding by ringing the jail porch's fire bell, but only after you've visited Dry Wash. Otherwise you give it at the forced sundown scene. The button is disabled until then, and `resolve()` checks this too.

## Time

| Time | t | What happens |
|---|---|---|
| Noon | 0 | Start |
| 1pm | 60 | Caesar is reshod |
| 2pm | 120 | Ander reaches the store |
| 3pm | 180 | The wind erases any unsketched prints (Chapter II) |
| 5pm | 300 | Chapter III |
| 7pm | 420 | Sundown |

The ride to the wash takes 60 minutes each way. Town walks take 5.

## Endings (7)

1. **Clean Tracks:** the best ending.
2. **Muddied Ground:** you name the right men but your proof is incomplete or wrong.
3. **The Wrong Trail:** you blame Hap or drifters.
4. **A Near Thing:** you stay silent at sundown, and the marshal arrives in time. No lethal outcome is shown.
5. **Bushwhacked:** you follow a rattled Jed up the hayloft ladder alone.
6. **Rope Justice:** you name the Callahans. The marshal stops the worst of it.
7. **Pike's Reward:** you take Pike's bribe.

**Ranks:** Marshal material / Sharp-eyed deputy / Deputy / Greenhorn / Tenderfoot.

**Source-author testing report:** the supplied case document states that scripted playthroughs reached all seven endings, with a best-ending run around 6:12 p.m. scoring 100. It also reports layout checks at 1100px (light and dark) and 390px phone width without horizontal overflow or errors. Those tests have **not been independently repeated** during this README reconciliation.

## Period notes

- **Real details used:**
  - Bar shoes, closed across the heels, fitted to support cracked hooves; smiths stamping their mark on shoes.
  - Livery stables and freight yards hiring out animals; mine payrolls shipped as coin by stage.
  - Assay offices; the Carson City Mint (operating 1870–1893).
  - Basque sheepherders in Nevada: their arrival grew through the 1870s–80s, and Ander is an early example.
  - Hobnailed town shoes, riding boots with Mexican spurs, and reading tracks by stride and wear.
- **Fictional:** Coyote Wells, the Silver Queen mine, the Sierra Overland stage line, and all the people.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-tracks-at-coyote-wells/
- **HTML source:** `cases/the-tracks-at-coyote-wells/index.html` in `doorquests/doorquests-web` on `main`.
- **Clock model:** investigation begins at noon; Caesar is reshod at 1:00 p.m.; Ander is available at 2:00 p.m.; wind destroys unrecorded wash prints at 3:00 p.m.; Chapter III starts around 5:00 p.m.; the forced final scene begins at 7:00 p.m. Riding to or from Dry Wash costs one hour, and travel between town locations costs five minutes.
- **Best-ending proof rules:** mounts M1 + M2; robbers B1 + B2; false accusation F1 + R1 + the `callahanClear` Track Sheet evidence; and recovered gold G1. The final finding must correctly name Jed and Pike, Caesar and Jenny, the stolen bandana, and Pike's ore crates.
- **QA corrections already published in HTML:** ten-minute wash sketches can only be started when they can finish by the 3:00 p.m. wind deadline; lead guidance honors the same cutoff; the best-ending narrative now refers to evidence actually established rather than assuming all optional candidate impressions were collected. This README commit does not change gameplay HTML.
- **Browser save keys:** `dq-cluortal-12-coyote-v1`, `dq-cluortal-12-endings`, `dq-cluortal-12-chapters`.
- **Reconciliation scope:** comparison of the companion document with the published game's time rules, track matching, deduction gates and seven endings. Period-background claims remain from the source document and have not been independently researched during this reconciliation.
- **Documentation status:** COMPLETE — APPROVED.
