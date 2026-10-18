# Cluortal No. 29 · The Memory Broker

**2074 · Neo-Tokyo · Cybercrime · Hard · 30–45 minutes**

**Signature mechanic: Memory Forensics.** Hana Okamura's stored memory M-0314-2241 has eight segments. Each segment carries five sensory channels (vision, hearing, smell, heart rate and the frame clock) plus header metadata: an implant frame number and, if anything was written in later, a write stamp. The in-game legend explains all of this.

| Seg | Frame no. | Smell | Heart | Write stamp |
|---|---|---|---|---|
| 1 | 4411 | wet asphalt, pork broth | 82 | — |
| 2 | 4412 | ozone, cigarette (the grey-coat man) | 84 | — |
| 3 | 4413 | rain (Ren passes) | 85 | — |
| **4** | **4419** | **no signal** | **72** | **KX-1191 · 15-03 01:12** |
| **5** | **4420** | **no signal** | **72** | **KX-1191 · 15-03 01:12** |
| **6** | **4421** | **no signal** | **72** | **KX-1191 · 15-03 01:12** |
| 7 | 4417 | rain, pork broth | 88 | — |
| 8 | 4418 | rain, frying oil | 83 | — |

**Step 1:** you tick the edited segments, then the true tells. Three are true: no smell channel, a heart rate flat through a stabbing, and the frame-number jump. Two are distractors: rain in the audio and oversaturated colours. Getting this right gives the finding *Three edited segments*.

**Step 2, the broker transaction:** the stamp names Mirai Recall's token, but the vault access log shows the WRITE came from terminal **LT-07 at the Lotus Memory Lounge**. Getting this right gives the finding *Where the edit was written*.

**Also uses: a client ledger.** The Lotus ledger lists Hana's ¥8,000 replay at 00:55, then a ¥2,400,000 "maintenance" job in booth 3 on LT-07 at 01:10, paid by Kanade Consulting K.K. The corporate registry shows Kanade's sole director is Kuroda Shun, head of labour relations at Ishida Robotics.

**The solution:** Kuroda wanted Ren Takeda, the union organizer, jailed before the recognition ballot on 20 March. He hired the unlicensed broker Kai Mori and gave him a cloned copy of Sato Emi's broker token, a stock stunt clip (V-88) and Ren's face from a rally video. Kai wrote the three frames into Hana's memory while she was replaying memories of her late husband. The city's hash-chained camera lattice shows Ren simply passing her in the alley.

## The people

- **Hana Okamura**, 71: noodle-shop owner and widow. The witness, and a victim too.
- **Ren Takeda**, 29: union organizer, the accused.
- **Kai Mori**, 34: unlicensed broker at the Lotus. Did the work. If his suspicion reaches **2 or higher** and the ledger is still unrecovered, he wipes it at **00:30**. Demanding the ledger itself increases his suspicion by 1; if the six-minute search would finish at or after 00:30 with that resulting suspicion level, the ledger is not recovered.
- **Kuroda Shun**, 48: Ishida's head of labour relations. The culprit.
- **Sato Emi**, 38: licensed broker whose token was cloned. The red herring; she was in Osaka.
- **Aoki Rin**, 26: the vault's night sysadmin. She explains compaction.
- **You:** a Legal Aid mnemonic auditor working for the defence.

## Connections (9)

| ID | Link |
|---|---|
| F1 | Edited segments + camera lattice → the stabbing never happened |
| F2 | Stock clip *(look closer)* + edited segments → stunt clip with Ren's face |
| B1 | Write finding + vault log → written at the Lotus during the replay |
| B2 | Token record *(look closer)* + Sato's word → the token was cloned |
| L1 | Ledger + Kanade registry → Kanade is Kuroda |
| L2 | Kai's word + ledger → Kai did the work for Kanade |
| M1 | Union notice + Kanade registry → motive |
| X1, X2 | Hana as victim; Ren's account matches the cameras *(optional)* |

**Strict proofs:**
- **Edit:** F1 + F2.
- **Where:** B1 + B2.
- **Who:** L1 + L2.
- **Why:** M1.

**When you can give the finding:** in your lab once the write terminal is found, or at the forced 03:00 compaction scene. Until then the button is disabled, and `resolve()` refuses as well.

## Time

| When | What happens |
|---|---|
| 23:00 Sat | Start |
| 00:00 | Chapter II |
| 00:30 | If Kai's suspicion reaches 2 or higher and the ledger has not been recovered, he wipes it. The six-minute ledger search must finish **strictly before 00:30** when the wipe is triggered, including when the search itself raises his suspicion to 2. |
| 02:00 | Chapter III |
| 03:00 Sun | Vault compaction (forced scene with the duty judge) |

## Endings (7)

1. **Clean Recall**: the best ending.
2. **A Name Without Proof**
3. **The Hands, Not the Head**: you name Kai, Sato or Hana.
4. **Compaction**: you let it run.
5. **Mercy Deletion**: you help Hana erase the memory.
6. **A Consulting Contract**: you take Kuroda's offer.
7. **Deep Dive**: you let Kai jack you into his rig.

**Ranks:** Master auditor / Senior auditor / Mnemonic auditor / Trainee / Overwritten.

**Source-author testing report (not independently repeated):**
- The supplied case document reports scripted playthroughs reaching all seven endings.
- It reports an E1 run at 02:39 (21 minutes before compaction), with one incorrect forensics check and one incorrect terminal selection, scoring 88.
- It reports testing the finding guard, ledger wipe, forced 03:00 scene (including disabled closer examination), filing at compaction, chapter loading and `validState`.
- It reports no errors or horizontal scrolling at 1100px (light and dark) and 390px.

**Publication QA:** The eight-segment solution, three diagnostic clues, write-terminal answer, evidence pairings and ending proof conditions were reconciled against the published HTML. JavaScript syntax validation passed during the HTML publication review, and the corrected six-minute ledger-retrieval safeguard was verified in the committed source. **Independent full seven-ending browser playthroughs and responsive visual validation were not completed.**

## Notes on setting

This is speculative fiction. Everything is invented, including:
- memory implants, vaults, brokers, compaction, write stamps and the "Mnemonic Integrity Act";
- Mirai Recall, the Lotus, Mnemosyne Vault, Ishida Robotics, Kanade Consulting;
- every person.

**Real places:** Shinjuku, Kabukichō, Shibuya, Shimokitazawa, Odaiba (on reclaimed land) and Shinagawa. Japan's "K.K." (kabushiki kaisha) company form is real.

**The forensic logic rests on real-world ideas:**
- Hash-chained logs whose integrity can be verified.
- Sequence-number gaps as signs of splicing.
- Credential cloning.
- Physiological channels that don't react to an inserted stimulus.
- Shell companies traced through corporate registries.

**Calendar:** the dates follow the real 2074 calendar. The alley is on Wednesday 14 March, the investigation on Saturday 17 March, and the ballot on Tuesday 20 March.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-memory-broker/
- **HTML source:** `cases/the-memory-broker/index.html`, repository `doorquests/doorquests-web`, branch `main`.
- **Memory Forensics solution:** mark **segments 4, 5 and 6 only** as edited. Their frame numbers are **4419, 4420, 4421**, inserted between **4413** and **4417**, while all three have **no smell data**, an unchanged **72 bpm** heart rate and a **KX-1191 write stamp at 01:12 on 15 March**. Select the **missing smell**, **flat heart rate** and **out-of-order sequence** clues; do not select rain in the audio or oversaturated colours. Correct analysis yields `tamperFound`.
- **Write-terminal solution:** the Mirai token on the stamp is an identity credential, **not proof that the Mirai terminal performed the write**. The vault log identifies **Lotus Memory Lounge, terminal LT-07**, during Hana's replay. This yields `writeFound`.
- **Clock model:** begins **Saturday 17 March 2074 at 23:00**, with Chapter II at **Sunday 18 March, 00:00**; optional Lotus ledger erasure **00:30**; Chapter III **02:00**; mandatory report/compaction scene **03:00**. Interviews cost seven minutes, presenting evidence four, closer examination four, and inter-district travel ranges from six to eighteen minutes depending on destination.
- **Published 00:30 ledger safeguard:** Kai's alertness of **2 or more** causes the Lotus ledger to be wiped if not previously recovered. The six-minute demand/search **increases his suspicion by one before determining whether the retrieval can finish in time**. When the resulting suspicion is at least 2 and the six-minute action would finish **at or after 00:30**, the ledger is lost rather than awarded. An already recovered ledger is retained. This correction is present in the HTML; the README publication changes no gameplay code.
- **Nine deductions:** **F1 + F2** prove insertion of a fabricated stabbing; **B1 + B2** establish the Lotus write and cloned Mirai credential; **L1 + L2** connect the paid work to Kanade/Kuroda and Kai; **M1** establishes the union-ballot motive. **X1 and X2** are optional exculpatory context for Hana and Ren. **F2** requires closer examination of the stunt clip, and **B2** closer examination of the token record.
- **E1 proof gates:** all four groups above, plus final answers **edited stunt clip**, **LT-07 at Lotus using a cloned token**, **Kuroda Shun through Kanade Consulting**, and **suppression of the union organizer before the recognition ballot**. A correct culprit without complete proof resolves to E2; naming Kai, Sato or Hana resolves to E3.
- **Report availability:** after finding the write terminal, the player can give the finding from **the Legal Aid lab**; alternatively the duty judge accepts a finding in the **forced 03:00 compaction scene**. The code's `resolve()` guard also enforces these locations. E4–E7 arise from separate explicit choices.
- **Browser persistence keys:** `dq-cluortal-29-memorybroker-v1`, `dq-cluortal-29-endings`, `dq-cluortal-29-chapters`.
- **Review scope:** documentation reconciled with the deployed forensics data, nine deductions, seven endings, clock and corrected ledger-erasure rules. The setting and mnemonic technology remain source-author speculative fiction, not established real technology.
- **Documentation status:** COMPLETE — APPROVED.
