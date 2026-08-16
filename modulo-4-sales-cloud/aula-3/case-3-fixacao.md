# Aula 3 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Price Book + reforço geral do módulo
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Opportunity do colégio, fechada como Ganha na Aula 2

---

## Contexto

Esta é a última atividade do Módulo 4 — e da trilha até aqui. O contrato com o colégio da Aula 2 já foi fechado (Ganho), mas agora surgiu uma **segunda** negociação, com outra escola, e o dono da livraria quer que essa nova proposta já nasça baseada em produtos e preços reais do catálogo, não em um valor estimado.

## Requisitos

### 1. Criar Produtos e Price Book

- Criar **2 registros de Product2** representando títulos do catálogo (nomes a seu critério, ex: dois livros didáticos).
- Adicionar os 2 produtos ao **Standard Price Book**, com preços de sua escolha.
- Criar um **Price Book customizado** (nome a seu critério, sugestão: "Livraria Página Viva - Vendas Institucionais"), com os mesmos 2 produtos em preços **com desconto** em relação ao Standard Price Book (percentual a seu critério, mas deve ser visivelmente menor).

### 2. Nova negociação

- Criar uma **nova Lead** para uma segunda escola (nome a seu critério), qualificar e converter (reaproveitando o processo da Aula 1) — ou, se preferir, criar a Opportunity diretamente vinculada a uma Account já existente, desde que fique claro que é uma negociação nova, separada da já fechada.
- Na nova Opportunity, selecionar o Price Book customizado criado acima.
- Adicionar os 2 produtos como Opportunity Products, com quantidades de sua escolha.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir os 2 produtos criados | Estão marcados como Ativos (Active = true) |
| 2 | Abrir o Standard Price Book | Contém os 2 produtos, cada um com um preço definido |
| 3 | Abrir o Price Book customizado | Contém os mesmos 2 produtos, com preços menores que no Standard Price Book |
| 4 | Abrir a nova Opportunity | Está usando o Price Book customizado (não o Standard) |
| 5 | Verificar os Opportunity Products da nova Opportunity | Os 2 produtos aparecem com as quantidades informadas, refletindo os preços do Price Book customizado |
| 6 | Verificar o Amount da Opportunity | Corresponde à soma dos produtos adicionados (quantidade × preço), não a um valor digitado manualmente |
| 7 | Abrir a Opportunity fechada na Aula 2 (do primeiro colégio) | Continua com Stage "Fechado Ganho", sem ter sido alterada por esta atividade |

## Reforço geral do módulo (checklist de autoavaliação, sem entrega)

Antes de considerar o módulo — e a trilha até aqui — concluída, confira:

- O Lead da Aula 1 foi convertido corretamente em Account/Contact/Opportunity.
- A Opportunity da Aula 2 percorreu o pipeline completo sem pular etapas.
- Os Price Books desta aula têm preços coerentes (customizado mais barato que o padrão).
- O Amount da nova Opportunity é resultado do cálculo automático dos produtos, não de digitação manual.

## O que entregar

- Print dos 2 produtos e dos 2 Price Books (Standard e customizado), mostrando os preços diferentes.
- Print da nova Opportunity com os Opportunity Products adicionados e o Amount calculado automaticamente.

> Cenário 6 é o mais importante: se você editar o Amount manualmente depois de adicionar os produtos, os valores ficam inconsistentes. Deixe o Salesforce calcular sozinho a partir dos Opportunity Products.
