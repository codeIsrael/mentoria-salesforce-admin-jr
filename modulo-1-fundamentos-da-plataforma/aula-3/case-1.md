# Aula 3 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Campos Fórmula + reforço geral do módulo (objetos, tipos de campo, layout, regras de validação, relacionamentos)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Tudo o que foi construído nas Aulas 1 e 2 para `Moveis_Personalizados__c` e `Fornecedor__c`

## Contexto

O time comercial da Nordic Móveis quer ver, direto na tela do móvel, o preço final com imposto e se o fornecedor daquele móvel é confiável — sem precisar abrir o registro do fornecedor ou fazer conta de cabeça.

## Campos Fórmula a criar

1. **Preço com Imposto** (`Preco_com_Imposto__c`) — Currency, fórmula:
   `Preco_Base__c * 1.17`
   Destacar: fórmula simples sobre campo do próprio objeto.

2. **Dias até o Lançamento** (`Dias_ate_Lancamento__c`) — Number, fórmula:
   `Data_de_Lancamento__c - TODAY()`
   Destacar: subtração de datas retorna número de dias; resultado negativo é possível (lançamento já passou) — não é erro, é informação válida.

3. **Fornecedor Confiável** (`Fornecedor_Confiavel__c`) — Text (fórmula), cruzando o relacionamento criado na Aula 2:
   `IF(ISBLANK(Fornecedor__c), "Sem fornecedor definido", IF(Fornecedor__r.Fornecedor_Preferencial__c, "Sim", "Não"))`
   Destacar: campo fórmula também acessa campos do objeto relacionado via `__r`, igual regra de validação; diferença entre **regra de validação** (bloqueia o salvamento) e **campo fórmula** (só exibe/calcula, nunca bloqueia).

## Reforço geral (revisão rápida, sem criar nada novo)

Percorrer com a turma, no registro "Mesa Escandinava": objeto, tipos de campo, seções do layout, Highlights Panel da Record Page, as 4 regras de validação (RN1–RN4) e o relacionamento com Fornecedor — mostrando como tudo isso convive na mesma tela.

## Resultado esperado

3 campos fórmula funcionando no objeto `Moveis_Personalizados__c`, adicionados ao layout (nova seção "Indicadores"), e revisão geral do módulo completa.
