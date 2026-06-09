# Luiz Fernando — Design System

A **dark-premium** design system extracted from Luiz Fernando's personal developer portfolio. The aesthetic is minimal, near-black, with restrained violet→pink accents and subtle radial glows — no heavy shadows, no decoration for its own sake. It reads like a focused, modern developer/IA builder's site.

## Source

Built by reading the production source of:

- **`LGugui/portfolio-profissional`** — https://github.com/LGugui/portfolio-profissional
  Next.js 15 (App Router) + Tailwind v4 + Framer Motion, deployed on Vercel. The entire visual language here is lifted from `app/globals.css` and `app/components/*`.

Related repositories by the same author (context for tone & subject matter — projects featured on the site):
- https://github.com/LGugui/big-bang — AR hand/face tracking (Three.js + MediaPipe)
- https://github.com/LGugui/sensor-de-gestos — gesture mouse control (Python + MediaPipe)
- https://github.com/LGugui/cerebro-template — "second brain" AI-agent template

> Explore these repos to design with higher fidelity. Nothing here assumes you have access — values are copied in — but the originals are the ground truth.

---

## CONTENT FUNDAMENTALS

**Language.** Primary copy is **Brazilian Portuguese (pt-BR)**. Technical nouns stay in English (TypeScript, WebGL, Three.js, OSINT). Keep this bilingual texture — translate UI chrome, never the tech.

**Voice.** First-person, confident but unpretentious. The author describes himself plainly: *"Estudante de Direito e desenvolvedor autodidata."* and self-deprecates lightly: *"programo nas horas livres — e às vezes nas horas não tão livres."* Write like a builder talking to a peer, not a brand talking to a market.

**Tone.** Concrete and outcome-oriented. Copy emphasizes *building real things people use*: *"construir produtos que outros vão usar de verdade."* Project descriptions lead with what the thing does, in one tight sentence, then the stack.

**Casing.** Sentence case for body and headings. **Section labels are UPPERCASE**, widely tracked, prefixed with a mono number (`01. SOBRE`). Status words are lowercase (`ativo`, `concluído`, `pausado`). The name in the hero is the only "display" moment.

**Person.** "Eu" (implicit) — the site speaks as Luiz. When addressing the visitor it's warm and direct: *"Aberto a projetos freelance, colaborações e oportunidades. Resposta em ~24h."*

**Numbers & meta.** Stats are terse: a number + a one-word label (`6 projetos`, `2+ anos construindo`). The `+` and `~` are used deliberately for approximation. Counts appear as quiet meta (`6 projetos` top-right of the projects section).

**Emoji.** Used **as project icons only** — one expressive emoji per project (⚡ ✋ 🌍 📊 🧠 🗂️). Never in prose, never in buttons or labels. This is the single sanctioned emoji use; don't sprinkle them elsewhere.

**Vibe.** Minimal, technical, a little nocturnal. Self-taught hacker energy — AI, automation, 3D, cybersecurity — presented cleanly and without hype.

---

## VISUAL FOUNDATIONS

**Palette.** A strict **4-token** system. Everything sits on near-black **`--bg #0A0A12`**; cards are **`--surface #13131E`**; the single chroma is **`--accent #E040FB`** (magenta — highlights & CTAs); text is **`--text #F0F0F5`**. Every other value (hover `--raised`, `--border`, muted `--text-2`/`--text-3`, accent tints) is *derived* from these four via `color-mix`/opacity — **no new hues**. The old lime/amber/red semantics and the secondary violet/pink were removed entirely.

**Type.** Display & headings use **Construo** (`--font-display`) set tight; **Geist Sans** for UI/body; **Geist Mono** for section numbers and code. The scale: **Display 96px Bold tracking -2px** · **H1 56px Bold -1px** · **H2 36px SemiBold** · **Body 17px Regular line-height 1.6** · **Caption 13px Medium uppercase +0.08em**. The hero name is the Display moment (clamped 56→96px). Section labels are caption-size, uppercase, accent-magenta. ⚠ *Construo is not web-available — the display family currently falls back to Space Grotesk; supply the real Construo `.woff2` to switch (see Caveats).*

**Backgrounds.** Flat near-black — **no images, no full-bleed photography, no repeating patterns**. Depth comes from fixed **radial-gradient glows** in the accent (12% top-right, 8% bottom-left) plus a focal **hero glow** (accent 8%) behind the display name. Cards carry a small interior accent glow. Glows are always *subtle*.

**Animation.** Two motions only. (1) **Scroll entrance** — `y: 24 → 0`, `opacity: 0 → 1`, **500ms** on `cubic-bezier(0.22, 1, 0.36, 1)`, with a **70ms stagger** between cards. (2) **Hover lift** — cards rise `-3px` (featured: `-2px`) over **180ms ease-out** while the border turns accent. No bounces, no infinite loops, no parallax.

**Hover states.** Cards: lift + accent border. Buttons/links: **opacity drop to ~0.82** (never a color change). Nav links: `--text-3` brightening to `--text-1`. The nav bar itself fades from transparent to `rgba(10,10,18,0.85)` + hairline border after 80px of scroll, with a 12px backdrop blur throughout.

**Press states.** None pronounced — this is a portfolio, interactions are link-like. Keep to the opacity dip.

**Borders & shadows.** **1px borders do the structural work**, never drop shadows. The *only* shadow in the system is the avatar's ring + bloom (accent at 25%). Don't introduce dark box-shadows — depth is borders + glows.

**Transparency & blur.** Blur appears once: the sticky nav's `backdrop-filter: blur(12px)`. Translucency is used for accent tints (8/12/25/40% for glows, badges, borders, rings).

**Corner radii.** `4px` tech tags · **`6px` badges** · `8px` buttons · **`16px` cards** · full pills/avatar.

**Cards.** Image-led: a 16:9 dark gradient placeholder on top, then `--surface` fill, 1px `--border`, **16px radius**, 24px content padding, **no shadow**. Anatomy = uppercase category caption → H2 title → bordered tech chips → "Ver projeto →" text link. On hover they lift and the border goes accent. The featured card is a two-column split (image + content) spanning the grid, with a corner glow + "destaque" badge.

> **Off-system variant — `ProjectCardPreview`.** A Linear/GitHub-style alternative with a 120px preview strip (screenshot or per-project-accent gradient, fading into the body), a solid-accent status badge, an 8px radius, a soft drop shadow and a 3px left accent border. It deliberately breaks four house rules (per-project color, shadows, 8px radius, left-border accent) — the per-project color is a **component prop (data), not a palette token**, so the 4-token system is intact. Reach for it only when you explicitly want color-coded, screenshot-led cards; default to `ProjectCard` everywhere else.

**Layout.** Single centered reading column, `max-width: 768px`, 24px gutters. Large 96px gaps between page sections; tight 12–24px rhythm inside cards. Sticky 56px nav. Projects in a 2-column grid (featured spans both). Thin 4px scrollbar with a `--border` thumb that turns accent on hover.

---

## ICONOGRAPHY

The portfolio is **deliberately icon-light**. There is **no icon font and no SVG icon set** in use.

- **Project icons are emoji** — one per project (⚡ ✋ 🌍 📊 🧠 🗂️), rendered at 24–30px. This is the primary "iconography."
- **Unicode glyphs** stand in for the few functional marks: `↗` (external link, on the featured card), `→` (forward / "ver todos"), `●` (status dot).
- **The only logo** is the **`LF` gradient monogram** (see `guidelines/brand-monogram.html`) — white on the violet→pink gradient with a ring + bloom. It serves as avatar, nav mark, and favicon concept.
- `assets/favicon.ico` is the imported site favicon (Next.js default placeholder — replace with a branded monogram favicon if producing for production).

**Guidance for new work:** keep using expressive emoji for project/feature icons. If a UI genuinely needs functional line icons (settings, close, chevrons), reach for **Lucide** (https://lucide.dev) — its 1.5px stroke, rounded-cap style sits comfortably in this minimal dark aesthetic — and **flag it as an addition**, since the source uses none.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s every token + font file.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills wrapper for using this system in Claude Code.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`components/`** — reusable React primitives (namespace `window.LuizFernandoDesignSystem_301a13`)
- `core/` — **Button**, **Badge**, **Tag**, **StatusPill**, **Avatar**
- `cards/` — **ProjectCard**, **FeaturedCard**, **ProjectCardPreview** (Linear/GitHub preview-strip variant — see note below)
- `layout/` — **Nav**, **SectionLabel**, **Stat**

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`ui_kits/portfolio/`** — full interactive recreation of the homepage (`index.html` + `Portfolio.jsx`).

**`assets/`** — `favicon.ico`.

## Using the components

In any card/kit HTML: link `styles.css`, load `_ds_bundle.js` (generated), then read components off the namespace:

```js
const { Button, ProjectCard, FeaturedCard } = window.LuizFernandoDesignSystem_301a13;
```

## Caveats

- **“Construo” is substituted.** The display family `--font-display` points at `'Construo'` first, but no such font is web-available (closest are the paid *Construct* / *TT Construct*). Until you upload the real Construo `.woff2`, headings render in the **Space Grotesk** fallback. To switch: drop the file in `assets/fonts/` and add an `@font-face` named `Construo` (the token already prefers it). The DS compiler also surfaces an upload banner for this.
- **Other fonts load from Google Fonts CDN** (Geist, Geist Mono, Space Grotesk), not self-hosted binaries — so the compiler reports 0 bundled fonts. Drop `.woff2` files into `assets/fonts/` and swap the `@import` for `@font-face` rules for an offline-complete bundle.
- `favicon.ico` is the framework default, not a branded mark.
