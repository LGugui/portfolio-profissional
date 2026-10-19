# SPEC - Organização visual do portfolio

## Objetivo
Reorganizar o portfolio em ordem hierárquica de site, separando código executado, conteúdo editável, visual, materiais, links, tipografia, cores, animações e elementos não-componentes.

## Estrutura alvo
- `app/site/`: arquivos que o `index.html` carrega para renderizar o site.
- `app/editar/`: mapa humano para editar conteúdo, visual, materiais e componentes por seção.
- `app/site/99-assets/`: imagens e materiais visuais usados pelo site.
- `archive/` e `design/`: preservados como referência histórica/design.

## Ordem do site
1. Header/Nav
2. Hero/Banner
3. Cases/Projetos
4. Entregas/Serviços
5. Skills/Conhecimento
6. Processo
7. Sobre
8. Contato
9. Footer/Rodapé
10. Interações/Animações

## Critérios de pronto
- `index.html` aponta para os novos caminhos.
- CSS global fica em `app/site/00-design/`.
- Cada seção tem pasta em `app/editar/` com conteúdo, design, componentes, materiais e não-componentes quando aplicável.
- Guias indicam caminhos diretos para editar textos, links, cores, tipografia, imagens, animações e posição dos elementos.
