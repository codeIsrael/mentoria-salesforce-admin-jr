# Aula 2 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Record-Triggered Flow (before-save)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** `Moveis_Personalizados__c` (Módulo 1)

## Contexto

Quando um móvel é marcado como "Sob Encomenda", o time de operações esquece com frequência de preencher a Data de Lançamento — o campo fica em branco, e o time comercial não sabe o que prometer ao cliente. O time pediu que o sistema sugira automaticamente uma data (90 dias a partir de hoje) sempre que isso acontecer, sem precisar de tela nem intervenção manual.

## Construir o Flow

- Criar um **Record-Triggered Flow** em `Moveis_Personalizados__c`:
  - Trigger: **before the record is saved** (before-save), em Create ou Update.
  - Condição de entrada: `Sob_Encomenda__c` = true **E** `Data_de_Lancamento__c` está em branco.
  - Ação: usar um elemento **Assignment** para definir `Data_de_Lancamento__c` = TODAY() + 90 (usar a função de data disponível no Flow).

**Destacar:** Flow before-save **não precisa** de elemento "Update Records" — como ele roda antes do save, basta atribuir o valor à própria variável `$Record` e o Salesforce salva o valor automaticamente junto com o resto do registro. Isso é mais performático do que um Flow after-save que precisaria fazer um segundo DML.

## Testar

- Criar um móvel novo com Sob Encomenda marcado e Data de Lançamento vazia → o campo deve vir preenchido automaticamente após salvar.
- Criar um móvel com Sob Encomenda marcado e Data de Lançamento **já preenchida** manualmente → o Flow não deve sobrescrever o valor informado pelo usuário.

## Resultado esperado

Record-Triggered Flow before-save funcionando, preenchendo automaticamente a Data de Lançamento apenas quando necessário.
