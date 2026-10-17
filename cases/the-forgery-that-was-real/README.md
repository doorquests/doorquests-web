# Cluortal No. 17 · The Forgery That Was Real

**1926 · Paris · Art crime · Medium · 30–45 minutes**

**Signature mechanic: the Lab Bench.**
- Two paintings stand side by side: **A**, the gallery's, and **B**, seized as "the forgery."
- Each has six tests: two pigment samples, canvas weave and stamp, X-ray, ultraviolet (Wood's lamp), and stretcher. Tests take 10–60 minutes.
- Tests reveal dating bounds, material composition, technique, and condition; **not every test produces a date bound**. The **dating chart** turns the dated findings into bars on an 1880–1926 axis, with Varenne's lifetime shaded.
- With enough results you answer two questions:
  - **Which painting is older?** (B)
  - **What is the earliest A could be?** (after about 1910: the latest of its lower bounds wins)
- Tests can only be run at the laboratory. **Painting A leaves at 13h00** under Mercadier's court order. Any test of A must **finish strictly before 13h00**; all laboratory tests must finish strictly before the **18h00** hearing.

**Also uses: gallery sale records.** The stock book traces no. 4471 from the widow in 1919, through a 1,500 F "restauration" by Vasseur, to the Baron in 1920 and to Mrs. Whitcombe in 1926. Other papers (receipt, contract, the daughter's account) sit alongside it.

**Header:** two gilt frames on a dark green gallery wall. Each frame switches to its X-ray once taken: A shows one clean layer; B shows a moved mast and an upside-down portrait underneath. Below each frame, a date band narrows as the bench fixes its bounds. Then come four status tiles and the 18h00 countdown.

## Premise

Paris, Tuesday 9 November 1926.
- **The failed sale:** the Galerie Mercadier sold Lucien Varenne's *Les Barques à Honfleur* to Mrs. Eleanor Whitcombe for 1,200,000 F, on condition that Dr. Aranda's laboratory certified it. The laboratory refused.
- **The "forgery":** an anonymous tip sent the police to Théo Vasseur, a young copyist, who had a second *Barques* under a sheet. That one looks *older*.
- **Your role:** you are Dr. Aranda's assistant. At 18h00 the juge d'instruction charges Vasseur.

## The locked truth

- **B is Varenne's original**, painted in August 1887:
  - The stretcher is inscribed "Honfleur, août 87 — L.V."
  - The canvas carries the colourman Bellard's stamp from his first shop at **7, rue Notre-Dame-de-Lorette**, where he traded until spring 1907.
  - Its pigments are period (vermilion, emerald green).
  - The X-ray shows a **pentimento** (a moved mast) and, beneath it, the upside-down portrait of Varenne's wife. His 1887 letter says he scraped it down because he couldn't afford new canvas.
  - The 1905 catalogue plate shows the old repaired tear that UV reveals on B.
- **A is Vasseur's 1919 copy:**
  - It contains **cadmium red**, which painters couldn't buy before about 1910. Varenne died in 1899.
  - Its factory-primed canvas is stamped **19, rue Bréda**, an address Bellard only moved to in 1907.
  - Its X-ray shows one clean layer.
- **The fraud:** Mercadier bought the original from Varenne's widow in March 1919.
  - In April he paid Vasseur 1,500 F for a "faithful copy, same size." He booked it as a *restauration* in his own hand, and paid 20 F a month for Vasseur to keep the original hidden.
  - He sold the copy to the Baron de Saulx in 1920 with the widow's receipt as provenance.
  - In 1926 he sold it again to Mrs. Whitcombe.
- **The tip:** when the laboratory refused the certificate, Mercadier typed the anonymous tip on the gallery's own typewriter (high "é", broken "M") to make Vasseur the forger.

## Connections (8)

| ID | Link |
|---|---|
| D1 | Cadmium red in A + Varenne's dates (1855–1899) → A isn't Varenne's |
| D2a / D2b | Canvas stamps + Bellard's move in 1907 → A's canvas after 1907; B's before |
| D3 | B's X-ray + Varenne's 1887 letter → the portrait of Marthe beneath |
| D4 | B's old repair (UV) + the 1905 plate (look closer) → B was photographed in 1905 *(optional)* |
| F1 | Vasseur's receipt + stock book (look closer) → the copy was paid for and booked as a restoration |
| F2 | Stock book + "B is older" → the copy was sold as the original, twice |
| T1 | Anonymous tip (look closer) + a gallery letter → Mercadier's typewriter |

**Strict proofs:**
- **Original:** D1 + D3 + (D2a or D2b)
- **Copy:** F1
- **Fraud:** F2
- **Tip:** T1

**Giving the finding:** at the quai des Orfèvres once the paintings are in order, or at the judge's 18h00 hearing. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| Time | Event |
|---|---|
| 08h00 | Start |
| 13h00 | Painting A leaves the lab (**Chapter II**) |
| 16h00 | Jeanne Varenne leaves for Honfleur; her six-minute interview questions must finish strictly before her departure |
| 17h00 | **Chapter III** |
| 18h00 | The judge sits |

Taxis across Paris take 20 minutes.

## Endings (7)

1. **The Real Thing:** the best ending
2. **Half Restored:** right, but unproved
3. **The Wrong Hand:** you blame Vasseur, Mrs. Whitcombe or the Baron's heirs
4. **Charged at Six:** "inconclusive"
5. **A Small Varenne Drawing:** you take the bribe (and the drawing is a fake)
6. **Sensation in the Petit Parisien:** "both fakes"
7. **Into the Dealer's Hands:** you let Mercadier keep B

**Ranks:** Connoisseur / Laboratory chief / Analyst / Apprentice / Dilettante.

**Source-author testing report (not independently re-run):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at 15h50 with one deliberate wrong answer and a score of 86; an error-free run reportedly scores higher.
- It reports no JavaScript errors or horizontal scrolling at 1100px (light and dark) or 390px.

**Publication QA:** JavaScript syntax validation passed. An independent Chromium smoke test loaded the page, displayed all seven navigation tabs, entered the laboratory and reported no JavaScript page errors. A full visual matrix and independent seven-ending playthrough were **not** completed.

## Period notes

**Real details used:**
- X-radiography and ultraviolet examination of paintings, pioneered in mid-1920s Paris (notably by the Argentine physicians Fernando Pérez and Carlos Mainini, whose work led to the Louvre's laboratory in 1931)
- Microchemical pigment tests
- Pigment dates:
  - cadmium red: commercial c. 1910
  - emerald green: 19th century, falling out of artists' use around 1900
  - zinc white in oil: from the 1840s
- Machine-woven, factory-primed canvas versus hand-primed canvas
- Colourmen's stamps with shop addresses as dating evidence
- Pentimenti as a sign of an original hand
- Artists reusing canvases
- The rue La Boétie dealers; the Doucet library; the Police judiciaire at 36, quai des Orfèvres; the juge d'instruction; the Petit Parisien
- Licensed copyists at the Louvre

**Fictional:** Varenne, the paintings, Bellard, the gallery, the laboratory and all the people.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-forgery-that-was-real/
- **HTML source:** `cases/the-forgery-that-was-real/index.html` in `doorquests/doorquests-web` (`main`).
- **Time model:** investigation begins at 08h00. Painting A is reclaimed at 13h00, Jeanne leaves for Honfleur at 16h00, Chapter III begins at 17h00, and the forced judicial hearing begins at 18h00. Travel between Paris locations costs 20 minutes.
- **Published deadline safeguards:** painting A's tests (10–60 minutes) must finish strictly before 13h00; all lab tests must finish strictly before 18h00; Jeanne's six-minute interview questions cannot run into or past her departure at 16h00. These corrections already exist in HTML; this README commit does not change gameplay.
- **Dating logic:** the oldest canvas/pigment evidence sets bounds, not necessarily an exact creation date. The Lab Bench ordering question requires A's cadmium red and canvas stamp and B's canvas stamp and X-ray. The independent "earliest A" question accepts after about 1910.
- **Best-ending proof gates:** original painting D1 + D3 + (D2a **or** D2b); commissioned copy F1; dealer fraud F2; forged tip T1. All four closing answers must also identify B as the original, Vasseur's 1919 commission, Mercadier's fraud and Mercadier's anonymous tip. D4 supplies extra confirmation but is not a required E1 proof.
- **Browser persistence keys:** `dq-cluortal-17-forgery-v1`, `dq-cluortal-17-endings`, `dq-cluortal-17-chapters`.
- **Review scope:** reconciliation of the supplied document against published Lab Bench tests, painting dates, sales evidence, deductions, proof predicates, deadlines and ending names. The period notes are retained as source-author context, not separately researched during this reconciliation.
- **Documentation status:** COMPLETE — APPROVED.
