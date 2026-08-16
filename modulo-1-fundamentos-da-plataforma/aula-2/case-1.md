# Aula 2 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Relacionamentos (Lookup) + Regras de validação cross-object (reforço/expansão)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Objeto `Moveis_Personalizados__c` da Aula 1

## Contexto

A Nordic Móveis quer parar de digitar o nome do fornecedor como texto solto dentro da Descrição Técnica. Cada móvel tem um fornecedor responsável pela matéria-prima, e o time quer consultar rapidamente dados do fornecedor (prazo de entrega, se é preferencial) direto do registro do móvel.

## 1. Novo objeto e Relacionamento

- Criar o objeto **Fornecedor** (`Fornecedor__c`), com `Name` = nome do fornecedor, e os campos: `CNPJ` (Text), `Prazo de Entrega em Dias` (Number), `Fornecedor Preferencial` (Checkbox).
- Criar um campo de relacionamento **Lookup** em `Moveis_Personalizados__c` apontando para `Fornecedor__c` (`Fornecedor__c`).

**Destacar por que Lookup e não Master-Detail:** um móvel pode existir mesmo sem fornecedor definido ainda (ex: produto em fase de design interno), e trocar de fornecedor não deve ter nenhum impacto de segurança/cascata no registro do móvel. Master-Detail forçaria o campo como obrigatório e apagaria o móvel em cascata se o fornecedor fosse excluído — não é o que queremos aqui.

## 2. Layout

- Adicionar o novo campo `Fornecedor__c` numa nova seção "Fornecimento" no Page Layout de `Moveis_Personalizados__c`.

## 3. Regra de validação cross-object (nova)

**RN4 — Sob_Encomenda_Fornecedor_Nao_Preferencial**
Se o fornecedor vinculado **não** é preferencial, o móvel deve obrigatoriamente estar marcado como "Sob Encomenda" (dá margem de negociação de prazo com fornecedores não estratégicos).

**Destacar:** como acessar um campo do objeto pai a partir de uma regra no objeto filho usando a notação de relacionamento (`Fornecedor__r.Fornecedor_Preferencial__c`) — é a primeira vez que a turma vê o sufixo `__r`.

## Resultado esperado

Objeto `Fornecedor__c` criado; `Moveis_Personalizados__c` relacionado a ele via Lookup; layout atualizado; RN4 funcionando e demonstrando acesso a campo do objeto relacionado.
