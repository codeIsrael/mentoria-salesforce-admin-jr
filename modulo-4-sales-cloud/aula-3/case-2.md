# Aula 3 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Price Book + reforço geral do módulo (mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Opportunity "Boa Viagem - Pedido Atacado" (Aula 2, fechada como perdida — usar uma segunda Opportunity nova para este case, já que a anterior está fechada)

## Contexto

A Auto Peças Rota Norte quer o mesmo controle: preços reais de catálogo compondo o valor da negociação, em vez de estimativa manual. Diferente da Nordic Móveis (que tinha só uma tabela de revenda), a Auto Peças precisa de **duas** tabelas de preço: uma para venda no varejo, outra para venda no atacado.

## 1. Criar Produtos e Price Books

- Criar 2 registros de **Product2**: "Alternador 12V" e "Amortecedor Dianteiro" — ativos.
- No **Standard Price Book**: Alternador 12V = R$ 320,00, Amortecedor Dianteiro = R$ 480,00.
- Criar **2 Price Books customizados**: "Auto Peças - Varejo" (preço cheio) e "Auto Peças - Atacado" (desconto de 20%).

**Reforçar:** um mesmo produto pode ter **preços diferentes em Price Books diferentes** — é assim que o Salesforce modela "tabelas de preço" distintas para canais de venda diferentes, sem duplicar o cadastro do produto.

## 2. Adicionar produtos a uma nova Opportunity

- Criar uma nova Opportunity para uma nova oficina cliente (ex: "Oficina Torque Certo"), no Stage "Proposta".
- Selecionar o Price Book "Auto Peças - Atacado".
- Adicionar Opportunity Products: 10 unidades de Alternador 12V + 5 unidades de Amortecedor Dianteiro.
- Observar o Amount recalculando com os preços de atacado.

## 3. Reforço geral do módulo (revisão rápida, sem criar nada novo)

Mesmo roteiro do Case 1, revisando o ciclo Lead → Account/Contact → Opportunity → Price Book, mas dessa vez destacando como a **escolha do Price Book** muda o valor final da mesma quantidade de produtos.

## Resultado esperado

2 Price Books com preços diferentes para o mesmo produto; nova Opportunity com Amount composto pelos produtos do Price Book de atacado.
