# Aula 3 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Campos Fórmula + reforço geral do módulo (mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Tudo o que foi construído nas Aulas 1 e 2 para `Peca_Automotiva__c` e `Fabricante__c`

## Contexto

O time de vendas da Auto Peças Rota Norte quer ver, na tela da peça, o preço de venda sugerido (com margem) e o país de origem do fabricante — sem abrir o registro do fabricante.

## Campos Fórmula a criar

1. **Preço de Venda Sugerido** (`Preco_de_Venda_Sugerido__c`) — Currency, fórmula:
   `Preco_de_Custo__c * 1.35`
   Destacar: mesma lógica do Case 1, margem de revenda diferente (35% em vez de 17% de imposto) — reforçar que a fórmula é só matemática sobre o campo existente.

2. **País de Origem da Peça** (`Pais_de_Origem_da_Peca__c`) — Text (fórmula), cruzando o relacionamento Master-Detail:
   `Fabricante__r.Pais_de_Origem__c`
   Destacar: como o relacionamento é Master-Detail (sempre preenchido), não é preciso tratar caso "sem fabricante" — contraste direto com o Case 1, que precisou do `IF(ISBLANK(...))` por ser Lookup.

3. **Necessita Atenção de Qualidade** (`Necessita_Atencao_Qualidade__c`) — Checkbox (fórmula):
   `NOT(Fabricante__r.Selo_de_Qualidade__c)`
   Destacar: campo fórmula do tipo Checkbox não precisa de `IF`, a própria expressão booleana já retorna verdadeiro/falso.

## Reforço geral (revisão rápida, sem criar nada novo)

Percorrer com a turma, no registro "Alternador 12V": objeto, tipos de campo, seções do layout, Highlights Panel, as 4 regras de validação (RN1–RN4) e o relacionamento Master-Detail com Fabricante.

## Resultado esperado

3 campos fórmula funcionando no objeto `Peca_Automotiva__c`, adicionados ao layout (nova seção "Indicadores"), e revisão geral do módulo completa.
