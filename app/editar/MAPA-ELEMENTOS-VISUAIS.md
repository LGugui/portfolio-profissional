# Mapa de elementos visuais

## Structure
Nav fixa -> Hero -> Cases -> Entregas -> Skills -> Processo -> Sobre -> Contato -> Footer. Interações globais entram por loader, reveal on scroll, parallax, hover, filtros e painel de ajustes.

## Detailed Visual
- Identidade: fundo navy escuro, superfície elevada, acento dourado principal e azul de suporte.
- Tipografia: `Space Grotesk` para títulos/marca e `Geist` para texto; `Geist Mono` para labels, metadados, tags e badges.
- Movimento: loader inicial, reveal vertical, parallax leve no hero, scanline na foto, glyphs animados nos cases, hover em cards e botões.
- Links: nav aponta para âncoras internas; CTAs externos usam `target="_blank"`; links de contato ficam em `P.contact.links`.
- Imagens de fundo/não-componentes: `app/site/99-assets/about-photo.jpg` entra via CSS no hero; `hero-photo.jpg` entra no `ProfilePanel` via `image-slot`.

## Location
| Elemento visível | Conteúdo | Visual/CSS | Componente |
|---|---|---|---|
| Marca LF e nav links | `app/site/00-sistema/data.js` -> `brand`, `nav` | `app/site/00-design/styles.css` -> NAV | `app/site/01-header-nav/Nav.jsx` |
| Hero nome, lead, chips, métricas | `data.js` -> `hero` | `sections.css` -> HERO | `app/site/02-main/01-hero-banner/Hero.jsx` |
| Foto do hero | `app/site/99-assets/hero-photo.jpg` | `sections.css` -> PROFILE PANEL | `app/site/02-main/01-hero-banner/components/ProfilePanel.jsx` |
| Fundo do hero | `app/site/99-assets/about-photo.jpg` | `sections.css` -> `.hero::before` | não-componente |
| Case destaque | `data.js` -> `featured` | `sections.css` -> FEATURED | `app/site/02-main/02-cases-projetos/Cases.jsx` |
| Cards de projetos | `data.js` -> `projects`, `filters` | `sections.css` -> PROJECT GRID | `Cases.jsx` + `components/ProjectGlyph.jsx` |
| Entregas | `data.js` -> `delivery` | `sections.css` -> DELIVERY | `app/site/02-main/03-entregas-servicos/Delivery.jsx` |
| Skills e competências | `data.js` -> `skills`, `competencias`, `complementares` | `sections.css` -> SKILLS | `app/site/02-main/04-skills-conhecimento/Skills.jsx` |
| Processo | `data.js` -> `process` | `sections.css` -> PROCESS | `app/site/02-main/05-processo/Process.jsx` |
| Sobre | `data.js` -> `about` | `sections.css` -> ABOUT | `app/site/02-main/06-sobre/About.jsx` |
| Contato e botões | `data.js` -> `contact` | `sections.css` -> CONTACT | `app/site/02-main/07-contato/Contact.jsx` |
| Rodapé | código direto no componente | `sections.css` -> FOOTER | `app/site/03-footer-rodape/Footer.jsx` |
| Loader/reveal/parallax/tweaks | `data.js` -> `loading`; `app.jsx` -> `TWEAK_DEFAULTS` | `styles.css` + `sections.css` | `app/site/app.jsx`, `app/site/04-interacoes-animacoes/TweaksPanel.jsx` |
