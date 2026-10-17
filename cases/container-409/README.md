# Cluortal No. 16 · Container 409

**2024 · Port of Rotterdam · Maritime crime · Easy · 20–35 minutes**

**Signature mechanic: the Weight Board.** You do the weight sums for every port of call:
- For each crane load-cell reading or weighbridge ticket, you type in the **cargo weight**: the gross weight minus the container's **3,850 kg tare**, read from its CSC plate.
- At Rotterdam there's one extra subtraction, the terminal chassis.
- Wrong answers explain where you went wrong and cost 2 minutes.
- Once every row is filled in, you say **where** the weight changed and **how much** undeclared cargo arrived.

**Also uses: gate and access logs.**
- The terminal's gate transactions reveal the pickup truck's *dry run* through the gate on Saturday night.
- The IT release-code audit shows who looked up 409's release code at 03:12 on a night they weren't working.

**Header:** a 40-foot container (DQXU 718409 9, with a correct ISO 6346 check digit) sits on a weighbridge. The header compares **gross container weights** (MANIFEST 13,700 kg / MEASURED 24,740 kg / Δ ?), and the Δ fills in after the cargo discrepancy is calculated. The Weight Board separately subtracts tare and, at Rotterdam, the chassis weight to derive **cargo weights**. Above, the voyage route (Nhava Sheva → Jebel Ali → via the Cape → Tanger Med → Rotterdam) lights up leg by leg, and the Tanger Med leg turns red once you find the jump. Below the header are status tiles for Where / How / What / Who and the 15:30 pickup countdown.

## Premise

It's Tuesday 12 March 2024 at Maasvlakte. A routine Douane scan flags container 409:
- Its bill of lading says **9,850 kg of bed linen** from Mumbai.
- It weighs **about eleven tonnes more** than that.
- Its electronic seal (ISO 18185), applied in India five weeks earlier, shows **no open or tamper events**.

A truck is pre-notified to collect it at **15:30**.

## The weights

| Port | Reading | − tare | Cargo |
|---|---|---|---|
| Manifest | — | — | 9,850 |
| Nhava Sheva (shipper's VGM) | 13,700 | 3,850 | 9,850 |
| Jebel Ali (crane, load) | 13,710 | 3,850 | 9,860 |
| Tanger Med (crane, discharge to block C7) | 13,705 | 3,850 | 9,855 |
| **Tanger Med (crane, load four days later)** | **24,745** | 3,850 | **20,895** |
| Rotterdam (weighbridge 41,190 − chassis 16,450) | 24,740 | 3,850 | 20,890 |

The weight jumped in the Tanger Med yard: about **11,040 kg undeclared**.

## The locked truth

- **Where and how:** in Tanger Med yard block C7, a crew on a stolen "Atlas Port Services" badge spent 96 minutes at the container on 24 February. They **drilled out the right-hand door's hinge rivets**, swung the door open on its hinge side, loaded the cargo and bolted the door back on. The seal on the locking bars was never touched.
  - The giveaway: bolt heads painted black, with the paint still tacky, where factory rivets should be.
- **What:** 918 master cases of counterfeit "Royal Crest" cigarettes, packed behind a 3-metre wall of linen. Roughly €3 million in duty would have been evaded.
- **The Rotterdam end:**
  - **Ruud Kools**, a terminal planner, viewed and copied 409's release code at 03:12 on Saturday. He wasn't rostered that night, and he claims he was home all weekend.
  - **Frank Verhoeven**, a customs broker, filed a T1 transit declaration to a bonded warehouse in Antwerp in the consignee's name. He did it on a forged "instruction" email from a look-alike domain (`lowlands-hometextiles.com` instead of `lowlandshometextiles.nl`), sent from his own mail server.
  - Verhoeven's booking sent truck BX-472-K on a dry run through the gate on Saturday at 22:10. It came in empty and left empty 9 minutes later.
- **Innocent people:** the consignee, Esther de Wit, the driver and the scanner operator are all innocent.

## Connections (7)

| ID | Link |
|---|---|
| W1 | Weight jump + Tanger Med reply → loaded in yard block C7 |
| H1 | Hinges (look closer first) + e-seal log → in through the hinges |
| C1 | Opened container + X-ray scan → counterfeit cigarettes |
| R1 | Release-code finding + Ruud's story or the shift roster → Ruud lied |
| R2 | Transit declaration + Esther's word → a transit nobody ordered |
| R3 | Instruction email (look closer) + bill of lading → forged instructions *(optional)* |
| G1 | Dry run + transit declaration or Verhoeven's story → his truck scouted the gate *(optional)* |

**Strict proofs:**
- **Where:** W1
- **How:** H1
- **What:** C1
- **Who:** R1 and R2

**Filing the finding:** you can file from your desk at Douane once the container has been opened, or at lane 4 when the truck arrives at 15:30. Until then the button stays disabled, and `resolve()` refuses to run. **Opening and devanning takes 45 minutes and must finish strictly before 15:30**; if insufficient time remains, the option is replaced with an explanatory message.

## Timeline of the day

| Time | Event |
|---|---|
| 09:00 | Start |
| 11:00 | Tanger Med's reply arrives, if you emailed them (**Chapter II**) |
| 12:00 | Esther de Wit arrives from Tilburg |
| 13:00 | If you rattled Ruud, he goes home "sick" |
| 14:30 | **Chapter III** |
| 15:30 | BX-472-K at lane 4 |

**Moving around:** 10 minutes across the port, 20 minutes to Pernis.

## Endings (7)

1. **Full Manifest** (best)
2. **Seized, Not Solved:** the cargo is caught, the people aren't
3. **Wrong Consignee:** you accuse Esther, the driver or Inge
4. **Out the Gate:** you let the release go through
5. **Tipped Off:** you tell Verhoeven everything
6. **Consultancy Fees:** you take the envelope
7. **Cleared Unopened:** you hand 409 back without opening it

**Ranks:** Hit-and-run hero / Senior investigator / Customs officer / Trainee / Lost in the stack.

**Source-author testing report (not independently re-run):**
- The supplied case documentation reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at 13:14, including two deliberate arithmetic/answer mistakes, scoring 94; it states a clean run scores higher.
- It also reports checks at 1100px in light and dark mode and at 390px without errors or horizontal scrolling.
- During publication, JavaScript syntax validation passed, but a local browser smoke test timed out loading external resources. **Full browser/visual and seven-ending playthrough verification remains incomplete.**

## Real-world notes

**Real details used:**
- SOLAS verified gross mass (VGM), in force since 2016
- Quay-crane load cells and weighbridges
- CSC safety-approval plates showing tare and maximum gross
- ISO 6346 container numbering and check digits
- ISO 18185 electronic seals
- Hinge-side door removal ("hinge job") to get past intact seals
- Customs X-ray scanning
- T1 transit fraud
- Release-code theft at container terminals (Rotterdam has been replacing PIN-style codes with certified pick-up)
- Cigarette smuggling
- 2024 Red Sea diversions sending Asia–Europe services around the Cape, with transshipment at Tanger Med

**Fictional:** every company, person, container and booking.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/container-409/
- **HTML source:** `cases/container-409/index.html` in `doorquests/doorquests-web` (`main`).
- **Weight arithmetic:** 41,190 − 16,450 − 3,850 = **20,890 kg** in cargo at Rotterdam; 20,890 − 9,850 = **11,040 kg** undeclared. The Tanger Med discharge/loading cargo readings are 9,855 kg and 20,895 kg respectively. The board accepts a ±10 kg tolerance for individual cargo rows and 11,000–11,060 kg for the final undeclared-cargo answer.
- **Best-ending proof predicates:** location W1; hinge entry H1; counterfeit goods C1; Rotterdam insiders R1 + R2, plus correct choices for all four final findings. R3 and G1 enrich the case but are not required for E1.
- **Pickup safeguard already in HTML:** the 45-minute seal-breaking and devanning action is only available when it can finish **strictly before** 15:30; otherwise the scene states that there is no longer enough time. This README publication does **not** modify the HTML.
- **Browser persistence keys:** `dq-cluortal-16-container-409-v1`, `dq-cluortal-16-endings`, `dq-cluortal-16-chapters`.
- **Review scope:** source-to-documentation reconciliation of the Weight Board, terminal gate/IT logs, seven connections, proof gates, pickup deadline and endings. Real-world notes and source-author tests have not been independently verified here.
- **Documentation status:** COMPLETE — APPROVED.
