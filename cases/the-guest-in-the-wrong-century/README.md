# Cluortal No. 30 · The Guest in the Wrong Century

**1900 · Vienna · Inheritance fraud · Medium · 25–40 minutes**

**Signature mechanic: the Papers from 1930.** Dr. Lenz's two "future" documents (a *Neue Freie Presse* clipping dated 14 March 1930 and a letter from Marie's "great-niece Anna") are shown as specimens. You sort 12 details into three piles. A legend teaches the piles in-game:

- **Proves it was made now (1900):** anything a Viennese court could check today with a calendar, a magnifying glass or a stamp album.
- **Wrong for 1930, but only with hindsight:** the player knows what's coming; nobody in 1900 does, so a court can't use it.
- **Nothing unusual.**

| Detail | Pile | Why |
|---|---|---|
| Dateline "Mittwoch, 14. März 1930" | Proves 1900 | 14 March 1930 was a Friday (perpetual calendar) |
| Blank reverse | Proves 1900 | A real newspaper is printed on both sides |
| Every lowercase g has the same nick | Proves 1900 | Set from one small jobbing case, not a daily's stock |
| Postmark ring doesn't meet across stamp and envelope | Proves 1900 | Stamp cut from another letter (look closer: "…X.00") |
| "Codizill" misspelt identically in both documents | Proves 1900 | One writer |
| Price "12 Heller" | Hindsight | Schilling and Groschen from 1925 |
| "k.k. Landesgericht" | Hindsight | No monarchy after 1918 |
| Franz Joseph stamp, 10 Heller | Hindsight | He dies in 1916; Republic stamps in Groschen |
| "Theil", "Thür" | Hindsight | Spelling reform of 1901–02 |
| Fraktur type | Nothing unusual | Still widely used in 1930 |
| Kurrent script | Nothing unusual | Still taught in 1930 |
| Fresh white paper | Nothing unusual | A 1930 letter would be new in 1930 |

Getting all 12 right gives the finding *The papers were made in 1900*.

**Step 2, the leak:** which detail could only have come from inside the sealed codicil? The answer is its exact words, "to my nephew Felix, who knows how to run it". Lenz showed them to Marie on 30 October; the seal wasn't broken until 3 November. This step needs Marie's testimony and the notary's file, and gives the finding *The leak*.

**Also uses:**
- **The hotel register:** Room 14 is billed in advance to "F. Reisinger, Wollzeile 9". Looking closer shows the porter's visitor slip: clerk Pacher spent 1 November evening with Lenz.
- **The notary's file:** the codicil of 2 October was "delivered in person by the testator" and received by clerk Pacher alone. Looking closer shows Dr. Hollerer was at Bad Ischl until 5 October.

**The solution:**
- Anton Reisinger had a stroke on 24 September and could neither stand nor write.
- Clerk Emil Pacher forged a codicil leaving the Hohenau refinery to Felix Reisinger. Felix owes 40,000 Kronen, due 15 November.
- A forgery couldn't survive a lawsuit, so they needed Marie to settle. Felix hired the actor Karl Wondrak, who played *The Man from the Year 2000* at the Fürst-Theater until 20 October, to pose as Dr. Lenz.
- The jobbing printer Josef Fiala printed the clipping as a "theatre prop". He set it from copy in Pacher's hand, written on Hollerer's own receipt forms.

## The people

- **Marie Reisinger**, 34: the heiress and your client.
- **Felix Reisinger**, 31: the nephew and the culprit. He offers a bribe at the Café Central (sus ≥ 2).
- **"Dr. Albrecht Lenz" / Karl Wondrak**: the actor.
- **Emil Pacher**, 28: the notary's clerk and forger. If his suspicion reaches **2 or higher**, the unrecovered setting copy disappears from Fiala's printing works at **14:00** (the story implies destruction). The published safeguard additionally requires the eight-minute retrieval to **finish strictly before 14:00**; starting a search before the cutoff does not secure it.
- **Dr. Ludwig Hollerer**, 60: the notary. The red herring.
- **Josef Fiala**: the jobbing printer, Leopoldstadt.
- **Wenzel Hruby**: head porter at the Habsburgerhof.
- **You:** a private enquiry agent on the Graben.

## Connections (10)

| ID | Link |
|---|---|
| A1 | Papers finding + the papers → made this autumn |
| A2 | Fiala's word + setting copy → he printed the clipping |
| H1 | Register + Felix's word → Felix pays Lenz's bill |
| H2 | Playbill *(look closer)* + Lenz's word → Lenz is Wondrak |
| N1 | Leak finding + notary's file → the sealed clause |
| N2 | Setting copy *(look closer)* + notary's file → Pacher wrote the text |
| C1 | Dr. Weiss's visiting book + notary's file *(look closer)* → the codicil is forged |
| M1 | Felix's markers + codicil → motive |
| X1, X2 | Hollerer away; Pacher visited Room 14 *(optional)* |

**Strict proofs:**
- **Papers:** A1 + A2.
- **Who:** H1 + H2.
- **Leak:** N1 + N2.
- **Why:** C1 + M1.

**When you can give the finding:** at Dr. Hollerer's chambers once the leak is found, or at the forced five o'clock signing. Until then the button is disabled, and `resolve()` refuses as well.

## Time (Thursday 8 November 1900)

| When | What happens |
|---|---|
| 11:00 | Start |
| 13:00 | Chapter II |
| 14:00 | If Pacher is sufficiently alerted (suspicion ≥ 2) and the setting copy has not been secured, he has it removed from Fiala's works. The eight-minute retrieval must **finish strictly before 14:00**, or the player finds the copy missing. |
| 15:30 | Chapter III |
| 17:00 | The signing (forced scene) |

## Endings (7)

1. **Printed Last Month**: the best ending.
2. **A Name Without Proof**
3. **The Wrong Hand**: you name Lenz, Pacher or Hollerer.
4. **The Settlement**: you let her sign.
5. **A Sensation**: you sell the story to the press.
6. **A Thousand Kronen**: you take Felix's bribe.
7. **The Night Train**: you denounce Lenz in the lobby.

**Ranks:** Hofrat of detection / Inspector / Private enquiry agent / Hotel detective / Believer in time machines.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at **15:02**, with one incorrect detail classification and one incorrect leak answer, scoring **88**.
- It reports checks of the finding guard at both reporting locations, removal/destruction of the setting copy, the forced 17:00 scene (with closer examination blocked), chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** The twelve document-classification answers, the exact codicil-clause leak, ten deduction recipes, proof predicates and seven ending gates were reconciled to the committed HTML. **8 November 1900 was a Thursday**, and **14 March 1930 was a Friday**; these weekday clues were independently checked during HTML publication. JavaScript syntax validation passed. The published eight-minute printer-search deadline safeguard was verified. **Full seven-ending browser playthroughs and responsive visual testing were not independently completed.**

## Notes on period and setting

**Real elements:**
- The Neue Freie Presse; the Café Central in the Herrengasse; the Fürst-Theater and the Riesenrad (1897) in the Prater.
- Döbling's villas; Bad Ischl as a spa.
- The Krone and Heller currency (from 1892, sole currency from 1900); the Schilling (1925).
- The 1899 Franz Joseph stamp issue in Heller.
- The "k.k." style of imperial institutions.
- The 1901–02 German spelling reform (Theil → Teil, Thür → Tür).
- Fraktur and Kurrent still in use in 1930; H. G. Wells's *The Time Machine* (1895).
- 14 March 1930 really was a Friday, and 8 November 1900 a Thursday.

**Fictional:**
- The Reisinger family and the Hohenau refinery as described.
- The Hotel Habsburgerhof.
- Dr. Hollerer's chambers, and its procedure for receiving a codicil (simplified).
- The farce *The Man from the Year 2000*.
- Fiala's works, and every person.

**Anachronisms flagged:** the clipping's content is invented. The *Neue Freie Presse* appears only as the paper being forged.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-guest-in-the-wrong-century/
- **HTML source:** `cases/the-guest-in-the-wrong-century/index.html` in `doorquests/doorquests-web`, branch `main`.
- **Papers from 1930 answer key:** all **12** features must be sorted correctly. The **five contemporary forensic tells** (`p`) are the incorrect weekday on the future clipping, its blank back, identical damage to every lowercase *g*, the discontinuous postmark, and the shared spelling of *Codizill*. The **four hindsight clues** (`h`) are the Heller price, imperial-royal court title, Franz Joseph stamp, and pre-reform spellings *Theil* / *Thür*. The **three ordinary features** (`n`) are Fraktur, Kurrent and fresh white paper. The correct classifications unlock `anachronismFound`. These categories are the case's intended puzzle rules and should not be treated as independent forensic proof of a document's actual printing date.
- **Leak solution:** after reading Marie's account and the notary file, select the codicil's exact phrase **“to my nephew Felix, who knows how to run it”**, shown to Marie on **30 October** despite the codicil remaining sealed until **3 November**. This unlocks `leakFound`.
- **Published 14:00 safeguard:** if Emil Pacher's suspicion is at least **2**, an unrecovered setting copy is removed from Fiala's shop at **14:00**. The eight-minute search now fails whenever `clock + 8 >= BURN_T` with Pacher alerted, even if the action began earlier; a successfully recovered copy is retained. The printer's later scene implies that Pacher took the copy toward the stove. This was corrected in the published HTML; **the README commit makes no gameplay changes**.
- **Clock model:** starts **Thursday 8 November 1900, 11:00**, with Chapter II at **13:00**, potential setting-copy loss at **14:00**, Chapter III at **15:30**, and the compulsory settlement decision at **17:00**. Interviews cost seven minutes, evidence presentation and closer examination four minutes, and the printer's setting-copy search eight minutes. Fiaker travel varies by destination.
- **Ten evidence connections:** `A1+A2` establish the 1930 papers were produced in 1900; `H1+H2` identify the actor and Felix's payments; `N1+N2` trace the sealed text to clerk Pacher; `C1+M1` establish the codicil forgery and financial motive. `X1` and `X2` are optional corroboration. Required closer examinations: **playbill** for H2; **printing setting copy** for N2; **notary file** for C1; **hotel register** for optional X2.
- **Best ending E1:** all eight required deductions must be made, and the final choices must identify **Viennese forgeries made that autumn**, **Emil Pacher as source of the codicil leak**, **Felix Reisinger as organizer**, and **a forged codicil requiring a settlement**. Correctly naming Felix without complete proof leads to E2; naming Lenz/Wondrak, Pacher or Hollerer as the organizer leads to E3.
- **Finding availability:** the player may present the case at **Dr. Hollerer's chambers** after identifying the leak; otherwise the compulsory **17:00 signing scene** permits a finding. The underlying `resolve()` guard checks these locations. E4–E7 result from separate, explicit narrative decisions.
- **Seven endings:** E1 *Printed Last Month*; E2 *A Name Without Proof*; E3 *The Wrong Hand*; E4 *The Settlement*; E5 *A Sensation*; E6 *A Thousand Kronen*; E7 *The Night Train*.
- **Browser persistence keys:** `dq-cluortal-30-wrongcentury-v1`, `dq-cluortal-30-endings`, `dq-cluortal-30-chapters`.
- **Review scope:** source-author Markdown was reconciled with the published classifications, leak puzzle, proof gates and corrected 14:00 deadline. Historical setting notes retain the author's framing; full independent period research was not undertaken as part of this documentation pass.
- **Documentation status:** COMPLETE — APPROVED.
