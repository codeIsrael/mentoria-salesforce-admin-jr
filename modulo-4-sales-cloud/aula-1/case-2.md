# Aula 1 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Leads (reforço — mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)

## Contexto

A Auto Peças Rota Norte recebe pedidos de orçamento de oficinas mecânicas interessadas em comprar peças no atacado. Assim como a Nordic Móveis, isso hoje não é registrado em lugar nenhum de forma centralizada.

## 1. Configurar o processo de Lead

- Revisar/confirmar o picklist Lead Status: `Novo` → `Contatado` → `Qualificado` / `Desqualificado` (mesma estrutura do Case 1 — é o mesmo objeto padrão `Lead`, compartilhado pela org toda).

## 2. Capturar e qualificar um Lead

- Criar um Lead: Company = "Oficina Mecânica Boa Viagem", Nome do contato, E-mail, Telefone, Lead Source = "Site".
- Avançar o Status: Novo → Contatado → Qualificado.

## 3. Converter o Lead

- Converter o Lead, criando Account ("Oficina Mecânica Boa Viagem"), Contact, e Opportunity ("Boa Viagem - Pedido Atacado").

**Reforçar:** mesmo processo do Case 1 — o objeto `Lead` é padrão e único na org (diferente de `Moveis_Personalizados__c`/`Peca_Automotiva__c`, que eram objetos separados por empresa nos módulos anteriores). Aqui, na prática, os Leads de "empresas" diferentes da nossa mentoria convivem no mesmo objeto Lead da org — o que é intencional para simular como múltiplas frentes de vendas compartilham a mesma estrutura no Salesforce real.

## Resultado esperado

Lead criado, qualificado e convertido, gerando Account, Contact e Opportunity vinculados.
