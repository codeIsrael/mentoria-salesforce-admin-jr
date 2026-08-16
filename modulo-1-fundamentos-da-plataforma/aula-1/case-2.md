# Aula 1 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Objetos, Tipos de campo, Layout/Record Page, Regras de validação (reforço — mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)

## Contexto

A **Auto Peças Rota Norte** é uma distribuidora de peças automotivas que também quer sair da planilha e organizar seu catálogo interno de peças no Salesforce, antes de conectar isso a vendas e estoque.

## 1. Objeto e Tipos de Campo

Criar o objeto customizado **Peça Automotiva** (`Peca_Automotiva__c`), com `Name` em formato Texto, e os campos:

| Campo | Tipo |
|---|---|
| Categoria | Picklist (Motor, Suspensão, Elétrica, Carroceria, Freios) |
| Preço de Custo | Currency |
| Validade da Garantia | Date |
| Item Recondicionado | Checkbox |
| Observações Técnicas | Long Text Area |
| Código de Referência | Text (15) |

**Reforçar:** mesma lógica do Case 1 — por que Picklist para "Categoria", diferença entre obrigatório no campo vs. no layout. Aproveitar para comparar rapidamente com as escolhas feitas na Nordic Móveis.

## 2. Layout e Record Page

- Organizar o Page Layout em 2 seções: **Identificação** (Nome, Código de Referência, Categoria) e **Compra e Garantia** (Preço de Custo, Validade da Garantia, Item Recondicionado, Observações Técnicas).
- Marcar `Preço de Custo` e `Categoria` como obrigatórios **no layout**.
- Criar/ativar uma Lightning Record Page com **Highlights Panel** (Nome, Categoria, Preço de Custo).

## 3. Regras de Validação

- **RN1:** `Preço de Custo` não pode ser zero ou vazio.
- **RN2:** se a peça **não** está marcada como "Item Recondicionado", `Validade da Garantia` não pode estar no passado (peça nova não pode "nascer" com garantia já vencida).
- **RN3:** se `Categoria` = "Elétrica", `Observações Técnicas` é obrigatória (peças elétricas têm risco de instalação incorreta — a equipe técnica precisa da especificação).

## Resultado esperado

Objeto `Peca_Automotiva__c` completo: campos criados, layout organizado, Record Page ativa, e 3 regras de validação funcionando — mesma estrutura de raciocínio do Case 1, aplicada a um negócio diferente.
