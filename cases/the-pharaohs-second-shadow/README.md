# Cluortal No. 13 · The Pharaoh's Second Shadow

**c. 1323 BCE · Men-nefer (Memphis), Egypt · Royal intrigue · Medium · 30–45 minutes**

**Signature mechanic:** the Sealing Table. The game teaches you a working sign list and four rules for reading names. You then read three royal names in cartouches and match four clay sealings to the seals that made them.

**Also uses:**
- a clickable palace plan
- night duty rosters, which you compare with a sealed order to find who really kept the gate
- a water clock running toward dawn

**Header:** a papyrus band between painted friezes. On it, the dead king's cartouche casts a second, offset shadow, which grows as sealings are matched. A water clock drains hour by hour. Below the band are four sealing slots, which fill in with their owners' names, and a dawn countdown.

> **Fictional pharaoh:** King **Ankhmaatre Amenkhau** (throne name and birth name) is invented. No dynasty is named, so the story stays clear of Tutankhamun, Ay and Horemheb, who belong to the real 1323 BCE. All the people are fictional.

## Premise

The king died at the 5th hour of night. You are a scribe of the House of Life, writing up his last day, and two records contradict each other:

- The **audience-hall day-book** says Penre, Overseer of the Treasury, brought wine to the king at the 3rd hour, and the king drank.
- The **Treasury day-book** says Penre was locked in the strongroom from the 2nd hour to the 5th.

At dawn, Prince Kenamun drinks his first cup as king at the Window of Appearances.

## The locked truth

- **Who:** Imeny, a scribe of the temple of Ptah, came into the palace as Penre. He used a ring copied from one of Penre's letters to the temples. Because he copied a clay impression sign for sign, the ring's own impressions come out **reversed**.
- **Who sent him:** Seneb, the vizier.
  - Seneb's sealed order took the guard Kha off the Great Gate from the 2nd to the 4th hour and put his own man, Ruru, there instead.
  - Seneb paid Imeny with a deben of gold in a pouch closed with the vizier's seal.
  - After the king died, he asked the queen to name him regent "should anything befall the boy."
- **How the king died:** henbane in the first of two gift jars.
- **What comes next:** the second jar is waiting in the cellar. Its label calls **Kenamun** king inside a cartouche, and it is dated day 14, before the old king died. It is set aside for the prince's dawn cup.
- **The writer's slip:** the label on the king's jar puts the "Son of Ra" title in front of the **throne name**, which takes "King of Upper and Lower Egypt." Imeny's practice sherds repeat the same mistake.

## The Sealing Table

**Sign list.** Twenty signs:
- sounds: sun (Ra), ankh, feather (maat), reed leaf *i*, gaming board *mn*, water *n*, rising sun *khaꜥ*, quail *w*, basket *k*, stool *p*, mouth *r*, folded cloth *s*, foot *b*, courtyard *h*
- words: *nefer*, *hotep*
- the seated-man determinative
- the sedge, bee and duck used in the royal titles

**Rules taught:**
1. A cartouche holds only a royal name.
2. The sedge and bee ("King of Upper and Lower Egypt") introduce the throne name. The duck and sun ("Son of Ra") introduce the birth name.
3. A god's name is written first out of respect (honorific transposition) but read in its proper place.
4. Signs with faces face the start of the line. A copied ring that wasn't reversed gives impressions that face the wrong way.

| Reading | Source | Answer |
|---|---|---|
| C1 | audience day-book | Ankh-maat-Ra → **Ankhmaatre** |
| C2 | king's jar label | wrong title: "Son of Ra" in front of the throne name |
| C3 | second jar label | **Kenamun** (Amun written first) |

| Sealing | Matches | What gives it away |
|---|---|---|
| S1 the king's jar stopper | the copied ring | "Penre," reversed, no chip |
| S2 the gate tally | the copied ring | as S1 |
| S3 the gate-watch order | Seneb | rectangular plaque, s-n-b |
| S4 the strongroom door | Penre's real ring | chip in the rope border |

A wrong comparison tells you exactly what differs: shape, border, name, which way the signs face, or the chip.

## Connections (10)

| ID | What it shows |
|---|---|
| A1 | Two Penres at the 3rd hour |
| A2 | The real Penre never left the strongroom |
| I1 | The false Penre came in wearing the copied ring |
| I2 | Imeny wrote the jar label (look closer at his sherds first) |
| P1 | The king was poisoned by the gift wine (look closer at the dregs first) |
| P2 | The poisoned jar was the false Penre's gift |
| V1 | Seneb put his own man on the gate |
| V2 | Seneb paid Imeny (look closer at the pouch first) |
| N1 | The second jar is meant for the prince's dawn cup |
| Q1 | Seneb wants the regency *(optional)* |

**Strict proofs:**
- **Who:** I1 + I2 + A2
- **Sender:** V1 + V2
- **How:** P1 + P2
- **Next:** N1

**Giving the finding:** in the prince's apartments, once you have been down to the cellar, or at the forced dawn scene. The button stays disabled until then, and `resolve()` checks the same condition.

## Time

| Clock | Hour of night | What happens |
|---|---|---|
| t=0 (start) | 7th | The investigation begins |
| t=120 | 9th | The gate register is scraped. Its 5-minute copying action must **finish before** this cutoff; otherwise the scraped-register observation is obtained instead. Kha's tally sherd remains available as supporting testimony. (Chapter II) |
| t=240 | 11th | Imeny slips away to the river with the copied ring and the gold unless detained beforehand. The 10-minute cell search must **finish before** this cutoff to recover both items; a 3-minute detention must also finish before this cutoff. Practice sherds remain in the cell after he escapes. (Chapter III) |
| t=360 | Dawn | Forced scene |

Walking takes 5 minutes inside the palace, 8 to the barracks, and 25 to the temple.

## Endings (7)

1. **The Shadow Named:** the best ending.
2. **Half a Shadow:** right or partly right, but not proved.
3. **The Wrong Name:** you accuse Penre, Hapu or Meri.
4. **The Cup at Dawn:** you say nothing. If you had the second jar locked away, the prince is safe but Seneb rules beside him. If not, the prince falls very ill but survives.
5. **Silenced:** you accuse the vizier alone in his office.
6. **The Vizier's Favor:** you take his offer.
7. **Records Lost:** you hand both records to the vizier.

**Ranks:** Chief of the House of Life / Scribe of the King's Records / Palace scribe / Apprentice scribe / Schoolboy with a palette.

**Source-author testing report:** the supplied case document reports scripted playthroughs reaching all seven endings, including a best-ending run in the 11th hour scoring 100. It also reports layout checks at 1100px (light and dark) and 390px phone width without overflow or errors. These tests were **not independently repeated** during this documentation review.

## Historical notes

**Real practices used:**
- Mud and clay sealings on jar stoppers, doors (over a cord) and papyrus, pressed with scarab and plaque seals and kept as administrative tallies.
- Copying seals: a ring cut from an impression comes out reversed.
- Cartouches.
- The fivefold royal titulary, with the throne name after *nswt-bity* (sedge and bee) and the birth name after *sa-Ra* (duck and sun).
- Honorific transposition of gods' names.
- Hieroglyphs facing the start of the line.
- Hieratic wine-jar labels naming the estate and the year.
- The House of Life as the place where scribes and records were kept.
- Viziers, the Overseer of the Treasury, royal butlers, and the king's Window of Appearances.
- Men-nefer (Memphis) and its temple of Ptah.
- Night hours counted from twelve; outflow water clocks, which are known from this period.
- Henbane (*Hyoscyamus*), which grows in Egypt.

**Simplified:**
- Glyphs are written left to right, with simplified shapes.
- The sign list gives one sound per sign.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-pharaohs-second-shadow/
- **HTML source:** `cases/the-pharaohs-second-shadow/index.html` in `doorquests/doorquests-web` (`main`).
- **Time model:** investigation starts in the 7th hour of night (game offset 0), register scraping at offset 120, Imeny's departure at offset 240 unless held, and the forced dawn scene at offset 360. The hour labels are the game's simplified night-hour clock.
- **Best-ending proof gates:** identity I1 + I2 + A2; sponsor V1 + V2; poison P1 + P2; planned second poisoning N1. All four final answers must also identify Imeny, Seneb, henbane in the gift wine, and the second jar for the prince.
- **Existing HTML deadline fixes:** a five-minute register copy must finish strictly before offset 120; a ten-minute cell search must finish strictly before offset 240 to recover Imeny's copied ring and gold; detaining him requires a three-minute action completed strictly before offset 240. This README update does not modify the game HTML.
- **Browser persistence keys:** `dq-cluortal-13-shadow-v1`, `dq-cluortal-13-endings`, `dq-cluortal-13-chapters`.
- **Review scope:** the supplied Markdown was reconciled with the published game's puzzle answers, evidence links, proof predicates, endings, and deadline guards. Historical notes are retained as source-author claims and have not been independently researched here.
- **Documentation status:** COMPLETE — APPROVED.
