# DoorQuests — Linked Door Opening Standard

**Established and approved:** November 21, 2026.

## Canonical rule

**If a Doortal/portal has a genuine destination link, it may swing open when hovered or keyboard-focused. If it has no destination link, it remains closed.**

An unlinked concept door may still have its static color or glow and a clear **In Development / Coming Soon** status. Hovering its parent card must not open the door. A sibling Explore button does **not** make the door itself a link. No placeholder or fabricated links.

Linked doors remain real accessible HTML anchors. Preserve their actual destinations, new-tab behavior and keyboard focus. Respect reduced-motion preferences.

## Implementation

The site-wide stylesheet `/assets/door-link-policy.css` is loaded after page CSS on the root site, enhanced landing page, and DoorQuests gateway/collection hubs. Its narrow selectors prevent unlinked doors' leaves from rotating, while linked doors retain the existing animations.

New door components should implement this rule natively rather than relying on overrides.

**Scope:** Navigation/gateway doors. Narrative gameplay doors that open by story choices or game mechanics are intentionally not changed.

## Deployment discipline

For coordinated multi-page updates, create a **single atomic Git commit**, confirm the commit and exact changed files, and verify default-branch content. GitHub code verification and live browser rendering are separate checks.
