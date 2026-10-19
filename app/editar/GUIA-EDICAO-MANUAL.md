# Guia de edição manual

## Editar textos, links e cards
Abra `app/site/00-sistema/data.js`. Ali ficam `brand`, `nav`, `hero`, `contact`, `featured`, `projects`, `delivery`, `skills`, `process` e `about`.

## Editar cores e tipografia
Abra `app/site/00-design/styles.css`. Os tokens principais ficam no `:root`: `--bg`, `--surface`, `--gold`, `--blue`, `--text-*`, raio, espaçamento e motion. Fontes ficam no `@import` do Google Fonts e nas classes `.font-display`, `.font-mono`, títulos e labels.

## Editar posição e layout
Abra `app/site/00-design/sections.css`. Cada bloco tem comentário de seção: HERO, CASES, DELIVERY, SKILLS, PROCESS, ABOUT, CONTACT, FOOTER e RESPONSIVE.

## Editar componentes
Abra a pasta correspondente em `app/site/`. Componentes por seção ficam perto da seção. Componentes compartilhados ficam em `app/site/99-shared/shared.jsx`.

## Editar animações
Abra `app/site/app.jsx` para loader, reveal e parallax. Abra `app/site/00-design/sections.css` para keyframes como `markIn`, `pfscan`, `glyphPulse`, `glyphSpin` e `pulse`.

## Trocar imagens
Substitua arquivos em `app/site/99-assets/` mantendo o mesmo nome, ou atualize os caminhos em `ProfilePanel.jsx` e `sections.css`.
