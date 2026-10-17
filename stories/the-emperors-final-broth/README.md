# The Emperor's Final Broth

**The Axiom Continuum · Daily Door #18**  
**Genre:** Imperial court mystery / interactive culinary investigation  
**Setting:** The Ivory Palace of Saranth  
**Document type:** Story reference and repository companion  
**Document status:** COMPLETE — APPROVED  
**Date:** 2026-10-15

## Premise

The Emperor Aurelian collapses after a banquet. Irene Mavros, Mistress of the Imperial Kitchens, is ordered to prepare a revealing broth before the sixth bell. The Emperor believes one of his three children poisoned him. Irene must investigate the poisoned cup, identify the substance, prepare a test that distinguishes the guilty heir, and protect the Emperor's remaining strength. Failure may make the cook the scapegoat.

## Characters and mystery

- **Irene Mavros:** The playable imperial cook and investigator.
- **Emperor Aurelian:** The poisoned ruler who commissions the final broth.
- **Princess Theodora:** The eldest child and heir apparent, whose cup the Emperor borrowed at the banquet.
- **Prince Leontius:** The military heir with an intact, sealed sample of eastern Sela resin.
- **Prince Basil:** The youngest heir, whose valet purchased Sela under an assumed description; Basil has substantial debts.
- **Mother Zoe:** Herbalist who identifies Sela and supplies the protective white mallow root.
- **Niko and Grand Chamberlain Kyros:** Palace figures who help uncover the cup's history and enforce court suspicion.

Sela resin suppresses the ability to taste bitterness in the person who grinds it. A deliberately bitter, otherwise plain broth can expose that symptom. The original target was the heir apparent rather than the Emperor.

## Visual and interactive identity

The interface preserves the original imperial mosaic band and kitchen workbench. An SVG bowl changes with selected ingredients; a six-axis flavour diagram tracks salt, sour, bitter, sweet, savour and aroma. A six-bell timeline, the Emperor's strength gauge, and suspicion indicator accompany the story. An evidence register and portraits of the three heirs update as discoveries accumulate.

Typography uses Forum, Gentium Book Plus, and Jost, with porphyry, gilded brass, and botanical tones. Responsive layouts and reduced-motion support are included.

## Gameplay

- Three numbered choices per decision, alongside back and restart.
- Investigation can reveal **six evidence entries**: the Heir's Cup, Sela's properties, white mallow's use, Leontius's sealed resin, Basil's valet's purchase, and Basil's gambling debts.
- Broth construction has three decisions: **stock** (capon, saffron or fish), **testing ingredient** (sea-fennel, sweet fennel or pepper), and **healing ingredient** (white mallow, honey, wine or no addition, where offered).
- Clear **capon stock** and bitter **sea-fennel** yield the reliable tasting test.
- The strongest ending additionally requires discovering Sela's effect and steeping **white mallow root** to support the Emperor.
- Other evidence combinations and accusations can produce less favourable outcomes.
- Progress and discovered endings persist in browser-local storage; the mobile evidence and heir panels are collapsible.

## Six endings

1. **The Final Broth** — the strongest resolution, with the revealing test, identification of Sela and healing root.
2. **Bitter Truth** — the correct accusation without the complete strongest resolution.
3. **The Soldier's Head** — Leontius is accused.
4. **The Cook Did It** — the accusation against Basil lacks sufficient proof.
5. **Out Through the Drains** — Irene flees.
6. **The Intended Victim** — Theodora is accused.

## Canonical source and publication

- **Playable HTML:** [index.html](./index.html)
- **Story URL:** https://theaxiomcontinuum.com/stories/the-emperors-final-broth/
- **Repository:** `theaxiomcontinuum/the-axiom-continuum-web`
- **Recommended GitHub destination:** `stories/the-emperors-final-broth/README.md`
- **Publisher identification:** The Axiom Continuum · Daily Door #18, official SVG emblem and favicon.
- **Search indexing:** `noindex,nofollow` during Founder review.
- **Homepage:** Not changed as part of this story's publication.

## Reconciliation of Claude Markdown export

The uploaded Markdown contains only the initial screen labels: **The Ivory Palace of Saranth**, Daily Door No. 18, **The pot**, **Flavour**, **First bell**, **The Emperor's strength**, **Suspicion on you**, **Evidence**, and **The three heirs**. It does not include the scene graph, manuscript, ingredient definitions or ending rules. These details are documented here from the committed playable HTML, which remains canonical.

## Review and testing

The HTML production review reported passing JavaScript syntax validation and a branching audit of **6,079 reachable states** and **6,258 transitions**, reaching all six endings without missing destinations. During review, the strongest ending was made dependent on the revealing broth, knowledge of the poison, and the healing ingredient. Automated checks do not replace manual live-browser playtesting.

**Documentation: COMPLETE — APPROVED.** Founder play review is a separate activity. HTML and README are committed independently, one changed repository file per commit.
