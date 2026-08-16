# Aula 2 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Contas/Contatos + Oportunidades/Pipeline
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Lead convertido na Aula 1 (Account do Colégio)

---

## Contexto

A negociação com o colégio da Aula 1 está avançando. O dono da livraria pediu que os dados fiquem completos e organizados, e que a negociação avance por um pipeline de estágios claro — sem pular etapa, para não perder o controle de quantos negócios estão em cada fase.

## Requisitos

### 1. Completar Account e Contact

- Na Account gerada na conversão: preencher os campos Indústria (Industry) e Telefone.
- No Contact gerado: preencher o campo Cargo (Title).

### 2. Avançar a Opportunity pelo pipeline

Usando os mesmos estágios já configurados na org (`Qualificação` → `Proposta` → `Negociação` → `Fechado Ganho` / `Fechado Perdido`):

- Preencher na Opportunity: Amount (valor estimado do contrato) e Close Date (data prevista de fechamento).
- Avançar o Stage da Opportunity passando por **cada** estágio em ordem — sem pular direto de "Qualificação" para "Fechado Ganho" — até fechar como **Fechado Ganho**.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir a Account | Campos Indústria e Telefone preenchidos |
| 2 | Abrir o Contact | Campo Cargo preenchido |
| 3 | Abrir a Opportunity | Amount e Close Date preenchidos |
| 4 | Verificar o histórico de mudança de Stage da Opportunity (Field History, se habilitado, ou memória do que foi feito) | A Opportunity passou por Qualificação, Proposta e Negociação antes de chegar em Fechado Ganho — nenhuma etapa foi pulada |
| 5 | Verificar o Stage final | "Fechado Ganho" |
| 6 | Verificar se a Opportunity está vinculada à Account e ao Contact corretos | Sim, mantendo o relacionamento criado na conversão do Lead (Aula 1) |

## O que entregar

- Print da Account e do Contact com os campos preenchidos.
- Print da Opportunity no Stage final "Fechado Ganho", com Amount e Close Date visíveis.
- Uma frase curta descrevendo por qual sequência de Stages a Opportunity passou até fechar.

> Um erro comum é editar o Stage direto para "Fechado Ganho" sem passar pelos estágios intermediários — isso quebra a confiabilidade do pipeline como ferramenta de acompanhamento. Documente (ou tire prints em cada etapa) a progressão real.
