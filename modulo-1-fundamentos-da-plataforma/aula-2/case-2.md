# Aula 2 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Relacionamentos (Master-Detail) + Regras de validação cross-object (reforço — mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Objeto `Peca_Automotiva__c` da Aula 1

## Contexto

Toda peça da Auto Peças Rota Norte **precisa** ter um fabricante identificado — não existe peça "órfã" no catálogo por exigência de rastreabilidade (recall de produto). O time também quer, futuramente, contar quantas peças cada fabricante tem cadastradas (Roll-Up Summary).

## 1. Novo objeto e Relacionamento

- Criar o objeto **Fabricante** (`Fabricante__c`), com `Name` = nome do fabricante, e os campos: `País de Origem` (Text), `Selo de Qualidade` (Checkbox).
- Criar um campo de relacionamento **Master-Detail** em `Peca_Automotiva__c` apontando para `Fabricante__c` (`Fabricante__c`).

**Destacar por que Master-Detail e não Lookup, em contraste com o Case 1:** aqui a regra de negócio exige que toda peça tenha fabricante (campo se torna obrigatório automaticamente); se um fabricante for removido do sistema, as peças associadas não fazem sentido isoladas (cascata é aceitável); Master-Detail também habilita campos de **Roll-Up Summary** no Fabricante (ex: "Quantidade de Peças Cadastradas") — mencionar que isso é impossível com Lookup.

## 2. Layout

- Adicionar o novo campo `Fabricante__c` numa nova seção "Fabricação" no Page Layout de `Peca_Automotiva__c`.

## 3. Regra de validação cross-object (nova)

**RN4 — Observacao_Obrigatoria_Sem_Selo**
Se o fabricante vinculado **não** possui Selo de Qualidade, a peça deve obrigatoriamente ter Observações Técnicas preenchidas (independente da categoria — reforça e generaliza a RN3 da Aula 1, que só cobria a categoria "Elétrica").

**Destacar:** essa regra mostra a mesma notação de relacionamento (`Fabricante__r.Selo_de_Qualidade__c`) usada no Case 1, e como duas regras (RN3 da Aula 1 e RN4 daqui) podem coexistir cobrindo motivos diferentes para a mesma exigência de campo.

## Resultado esperado

Objeto `Fabricante__c` criado; `Peca_Automotiva__c` relacionado a ele via Master-Detail (campo obrigatório automaticamente); layout atualizado; RN4 funcionando.
