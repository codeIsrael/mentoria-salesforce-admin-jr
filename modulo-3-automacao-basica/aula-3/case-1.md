# Aula 3 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Visibilidade condicional em Screen Flow + reforço geral do módulo
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Tudo o que foi construído nas Aulas 1 e 2

## Contexto

No Screen Flow "Cadastro Rápido de Móvel" (Aula 1), o campo "Data de Lançamento" aparece sempre na tela — mas ele só faz sentido quando o móvel **não** é Sob Encomenda (lembra da RN2 do Módulo 1? Sob Encomenda com data no futuro é normal; sem Sob Encomenda, não). O time de operações se confunde com esse campo aparecendo à toa.

## 1. Visibilidade condicional

- Editar o Screen Flow "Cadastro Rápido de Móvel".
- No campo "Data de Lançamento" da tela, configurar a propriedade **Visibility** (Component Visibility) com a condição: exibir esse campo apenas quando `Sob_Encomenda__c` (variável da tela) = **false**.

**Destacar:** essa é a mesma ideia lógica da regra de validação RN2 do Módulo 1 (`AND`/`NOT` sobre Sob Encomenda), só que aplicada na **interface**, antes mesmo do usuário tentar salvar — mostrando duas camadas diferentes de tratar a mesma regra de negócio: UX (Flow) e integridade de dados (Validation Rule).

## 2. Reforço geral do módulo (revisão rápida, sem criar nada novo)

Rodar o Screen Flow ao vivo mostrando o campo aparecendo/sumindo conforme o checkbox Sob Encomenda muda de estado, e depois criar um registro com Sob Encomenda marcado sem preencher Data de Lançamento — mostrando o Record-Triggered Flow da Aula 2 preenchendo automaticamente com TODAY()+90 no salvamento feito pelo próprio Screen Flow.

## Resultado esperado

Campo condicional funcionando no Screen Flow; demonstração de que Screen Flow (Aula 1) e Record-Triggered Flow (Aula 2) convivem e se complementam no mesmo objeto.
