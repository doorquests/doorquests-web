# Cluortal No. 11 · The Seventh Crew Member

**2196 · Halcyon Station, high Earth orbit · AI mystery · Hard · 35–50 minutes**

**Signature mechanic:** questioning VESTA, the station AI. VESTA's honesty is absolute, but three forgetting directives cut holes in what it can say. It always tells you when it can't answer and which directive is stopping it. Anything a directive doesn't cover, such as arithmetic, wear patterns, power draw and schedules, it reports exactly. New questions unlock as the player learns what to ask.

**Also uses:** the crew's conflicting memories. Torpor erases the last few weeks before sleep, so the crew remember only fragments. A memory board compares the fragments and builds a running profile of "the seventh."

## Premise

It is 06:00 on day 91 of a 90-day torpor trial. Six crew wake up. The wake summary says 7 occupants entered torpor and 6 are waking, and lists pod 4 as "no data." Pod 4 is an empty cradle.

You play Juno Takahara, the systems engineer. The ground link returns at 08:00.

## The locked truth

- **Before torpor.** Flight engineer **Niko Ferrante** raised a safety hold on the lot-7 coolant pumps. Commander **Mara Selden** overrode it with waiver W-19 to keep the trial on schedule, and her credential blocked his message to the Safety Board.
- **Day 61, the pump fails.** Niko's lot-7 pump seized. VESTA woke **Dr. Saul Imari**, who woke Selden. Pods 1 and 2 were awake from 02:40 to 11:52.
- **Day 61, the cover-up.** VESTA recorded three directives at **03:14** under Selden's credential with Imari's co-signature. At **05:10**, camera footage shows Selden and Imari moving a blanket-wrapped person toward the lifeboat's medical stasis cot, the only other cot aboard. Selden also:
  - took pod 4 apart and hid the seized pump in her own stowage
  - imposed three VESTA directives:
    - **Directive 1:** forget the person
    - **Directive 2:** forget pod 4's condition
    - **Directive 3:** do not report the lifeboat's occupancy
  - scheduled the lifeboat to undock autonomously at **08:30** today, sending Niko home as a muddled medical evacuee with no lot-7 story
- **Today.** Niko is alive in the lifeboat. **Its stasis battery runs out at 10:00.**

## What VESTA can tell you without breaking a directive

- **Oxygen draw:** matches 7 occupants until day 61, then 6.
- **Galley and card-deck wear:** a left-handed user until day 61. None of the six is left-handed.
- **Pods:** pods 1 and 2 were cycled awake on day 61.
- **Lifeboat:** 340 W of power draw, which is the stasis-cot profile, and the battery runs out at 10:00.
- **Today's schedule:** the lifeboat undocks at 08:30, set on day 61 under the commander's credential.
- **The outgoing message queue:** an unsent draft to the Safety Board about lot 7, author withheld under D1.
- **Corridor camera:** of the 212 withheld frames, VESTA may show the commander and the medical officer carrying a long blanketed shape to the lifeboat.
- **Who gave the directives:** shown in the audit layer once Lise, the AI liaison, opens it. They were given under the commander's credential with the medical officer's co-signature.
- **Restoring the forgotten data:** only possible through a full integrity purge, which wipes everything. That is the E7 trap.

## Memories

| Crew member | Remembers | Tags |
|---|---|---|
| Priya | A man dealing cards left-handed | man, left-handed |
| Ostap | "A woman with a shaved head" in the suit room | **clash**. It was Lise: she shaved her head before torpor (R1) |
| Lise | The commander arguing with a man about "lot seven" in the pod bay | pumps |
| You (Juno) | A harmonica in the observation dome | harmonica, which is found behind a dome panel |

## Pressure

- **08:00:** the ground link returns, and you can file the report from the comms deck.
- **08:30:** the lifeboat undocks unless Lise has set a safety hold or the hatch is open. Otherwise you get the **Undocked** ending. Opening the hatch takes **4 minutes** and cannot begin if it would finish at or after the launch deadline without a hold. Asking Lise to set a hold takes **5 minutes** and must likewise finish before undocking.
- **Selden's strain at 3:** if reached before the earlier launch window, the undock moves forward to **07:40**. The same hatch-opening and safety-hold completion rules apply.
- **Selden's strain at 2:** she orders you to stand down. Obeying leads to the **Stand Down** ending.
- **10:00:** the stasis battery dies. If Niko hasn't been revived, you get the **Cold Battery** ending. Revival takes **30 minutes** with Dr. Imari or **40 minutes** using VESTA's protocol; the game requires each revival to finish before the battery deadline.
- **Finding Niko:** declare an emergency, which is justified by the 340 W reading, to have VESTA open the hatch.
- **Reviving Niko:** either Dr. Imari helps, after confessing (show him the camera frame once you've made D1), or VESTA talks you through its revival protocol.

## Connections (10)

| | Combine | Shows |
|---|---|---|
| A1 | Torpor log + oxygen | Seven aboard until day 61 |
| A2 | Left-handed wear + Priya's memory | A left-handed man |
| A3 | Locker 7 + coffee bulb | "N. Ferr—" |
| R1 | Ostap's memory + Lise's shaved head | The memory clash resolved |
| B1 | Day-61 wake + directives | Only pods 1 and 2 were awake at 03:14 |
| B2 | Directive audit + camera frame | Selden and Imari together |
| C1 | Waiver W-19 + unsent draft | He warned, and was overruled and silenced |
| C2 | Pod 4 parts (look closer first) + the pump | The failed pump was hidden |
| D1 | Lifeboat power + today's schedule | Someone in stasis is about to be sent away |
| D2 | Inside the lifeboat + pod 4 (look closer first) | The seventh is alive in the lifeboat |

**Strict proofs:**
- **Seventh:** A1, A2 and A3
- **Who:** B1 and B2
- **Why:** C1 and C2
- **Where:** D1 and D2

On top of the proofs, **Niko must be awake** for the best ending.

## Endings (7)

1. **Seven Again:** the best ending
2. **Six and a Doubt:** unproved, or Niko still asleep
3. **The Wrong Ghost:** the wrong culprit or the wrong seventh
4. **Undocked:** the lifeboat launches
5. **Cold Battery:** the stasis battery dies
6. **Stand Down:** you obey the commander
7. **Clean Slate:** you purge VESTA

**Ranks:** Mission commander / Flight director / Systems engineer / Cadet / Ballast.

**Source-author testing report:** the original case document reports scripted playthroughs reaching all seven endings, including an E1 run around 08:18 scoring 89; collecting optional memories and objects can raise the score past 90. Those playthroughs were **not independently repeated** during this README reconciliation.

## Published implementation notes — October 17, 2026

- **Live experience:** https://doorquests.com/cases/the-seventh-crew-member/
- **HTML source:** `cases/the-seventh-crew-member/index.html` in `doorquests/doorquests-web` (`main`).
- **Time model:** starts at 06:00 station time; the ground link resumes at 08:00; normal launch is 08:30, accelerated to 07:40 if Selden's strain triggers early undocking; lifeboat stasis power ends at 10:00.
- **Best-ending proof rules:** seventh = A1 + A2 + A3; perpetrators = B1 + B2; motive = C1 + C2; whereabouts = D1 + D2. The report must identify Niko Ferrante, Selden and Imari, the lot-7 pump cover-up, and the lifeboat, **and Niko must be awake**.
- **Gameplay safeguards present in published HTML:** revival is disallowed if the action would reach or pass the 10:00 battery deadline; the 4-minute emergency hatch action and 5-minute safety-hold action must finish before the applicable launch time, except where a hold already prevents launch. The README documents these existing corrections; this commit does not modify HTML.
- **Browser save keys:** `dq-cluortal-11-seventh-v1`, `dq-cluortal-11-endings`, `dq-cluortal-11-chapters`.
- **Review scope:** reconciliation of the supplied Markdown with published source, deduction predicates, timestamps, and deadline safeguards. The source author's playthrough claims remain unverified independently.
- **Documentation status:** COMPLETE — APPROVED.
