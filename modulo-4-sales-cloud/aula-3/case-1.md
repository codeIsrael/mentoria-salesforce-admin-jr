# Aula 3 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Price Book + reforço geral do módulo
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Opportunity "Decora Sul - Pedido Inicial" (Aula 2)

## Contexto

Até agora, o Amount da Opportunity foi preenchido "no olho" (um valor estimado digitado direto). O time financeiro pediu que as Oportunidades reflitam produtos e preços reais do catálogo, para dar consistência entre o que é vendido e o que é faturado.

## 1. Criar Produtos e Price Book

- Criar 2 registros de **Product2** (produto padrão do Salesforce): "Mesa Escandinava" e "Cadeira Nórdica" — ativos (Active = true).

**Destacar:** `Product2` é um objeto **padrão** e diferente do `Moveis_Personalizados__c` do Módulo 1 — aquele era o catálogo interno de operações (specs técnicas, fornecedor); este é o catálogo comercial (o que aparece numa proposta de venda). Em um cenário real mais maduro, os dois poderiam ser conectados; por ora ficam paralelos, e isso é intencional.

- No **Price Book Padrão (Standard Price Book)**, adicionar os 2 produtos com preços: Mesa Escandinava = R$ 2.400,00, Cadeira Nórdica = R$ 650,00.
- Criar um **Price Book customizado**: "Nordic Móveis - Tabela Revenda" com os mesmos produtos em preços com desconto de atacado (ex: 15% menor).

## 2. Adicionar produtos à Opportunity

- Na Opportunity "Decora Sul - Pedido Inicial", selecionar o Price Book "Nordic Móveis - Tabela Revenda".
- Adicionar Opportunity Products: 3 unidades de "Mesa Escandinava" + 6 unidades de "Cadeira Nórdica".
- Observar o **Amount** da Opportunity recalculando automaticamente com base nos produtos adicionados (em vez do valor digitado manualmente antes).

## 3. Reforço geral do módulo (revisão rápida, sem criar nada novo)

Percorrer com a turma o ciclo completo criado ao longo do módulo: Lead capturado e qualificado (Aula 1) → convertido em Account/Contact/Opportunity (Aula 1) → Account/Contact completos e Opportunity avançando por Stages (Aula 2) → Price Book e produtos reais compondo o Amount (Aula 3).

## Resultado esperado

2 Price Books configurados com produtos e preços; Opportunity com produtos reais compondo o valor automaticamente.
