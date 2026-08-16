# Aula 2 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Record-Triggered Flow (before-save) (reforço — mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** `Peca_Automotiva__c` (Módulo 1)

## Contexto

Quando uma peça é marcada como "Item Recondicionado", o time de vendas quer que isso fique óbvio já no nome do produto (para não vender uma peça recondicionada como se fosse nova por engano) — sem depender de ninguém lembrar de editar o nome manualmente.

## Construir o Flow

- Criar um **Record-Triggered Flow** em `Peca_Automotiva__c`:
  - Trigger: **before the record is saved**, em Create ou Update.
  - Condição de entrada: `Item_Recondicionado__c` = true **E** o campo Nome ainda **não contém** o texto "(Recondicionado)".
  - Ação: usar um elemento **Assignment** para atualizar o Nome, concatenando o valor atual com " (Recondicionado)".

**Reforçar:** mesma lógica do Case 1 (before-save, Assignment direto em `$Record`, sem precisar de Update Records) — aqui a automação mexe num campo de texto em vez de data, mostrando que o mesmo padrão de Flow serve para tipos de dado diferentes.

## Testar

- Criar uma peça nova marcada como Item Recondicionado, Nome = "Alternador 12V" → deve virar "Alternador 12V (Recondicionado)" automaticamente.
- Editar essa mesma peça de novo (sem mudar nada) → o Flow não deve duplicar o texto (não pode virar "Alternador 12V (Recondicionado) (Recondicionado)").

## Resultado esperado

Record-Triggered Flow before-save funcionando, ajustando o Nome automaticamente e sem duplicar o texto em edições repetidas.
