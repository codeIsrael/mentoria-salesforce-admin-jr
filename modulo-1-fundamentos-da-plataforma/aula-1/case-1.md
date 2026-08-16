# Aula 1 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Objetos, Tipos de campo, Layout/Record Page, Regras de validação
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)

## Contexto

A **Nordic Móveis**, fabricante e varejista de móveis, controla seu catálogo de produtos numa planilha Excel. O time de operações pediu um espaço no Salesforce só para catalogar internamente os móveis fabricados — sem vínculo com vendas ainda (isso vem no módulo Sales Cloud).

## 1. Objeto e Tipos de Campo

Criar o objeto customizado **Móvel Personalizado** (`Moveis_Personalizados__c`), com `Name` em formato Texto (cada móvel tem nome próprio dado pelo fabricante), e os campos:

| Campo | Tipo |
|---|---|
| Categoria | Picklist (Sala, Quarto, Cozinha, Escritório, Área Externa) |
| Preço Base | Currency |
| Data de Lançamento | Date |
| Sob Encomenda | Checkbox |
| Descrição Técnica | Long Text Area |
| Código Interno | Text (10) |

**Destacar:** por que Picklist em vez de Text para "Categoria" (governança e relatórios confiáveis); diferença entre Date e Date/Time; diferença entre obrigatório na definição do campo vs. obrigatório só no layout.

## 2. Layout e Record Page

- Organizar o Page Layout em 2 seções: **Identificação** (Nome, Código Interno, Categoria) e **Comercial e Técnico** (Preço Base, Data de Lançamento, Sob Encomenda, Descrição Técnica).
- Marcar `Preço Base` e `Categoria` como obrigatórios **no layout**.
- Criar/ativar uma Lightning Record Page com **Highlights Panel** (Nome, Categoria, Preço Base) e abas de Details/Related.

**Destacar:** Page Layout controla campos/seções/botões; Lightning Record Page controla a composição visual da tela. São camadas diferentes.

## 3. Regras de Validação

Criar 3 regras para evitar problemas reais já reportados pelo time de operações:

- **RN1:** `Preço Base` não pode ser zero ou vazio (bloqueou um relatório de precificação).
- **RN2:** se o produto **não** está "Sob Encomenda", `Data de Lançamento` não pode ser futura (evita vender algo que ainda não existe).
- **RN3:** se `Categoria` = "Escritório", `Descrição Técnica` é obrigatória (equipe de montagem precisa da especificação).

Cada regra deve ter mensagem de erro em linguagem de negócio, exibida no campo correspondente.

## Resultado esperado

Objeto `Moveis_Personalizados__c` completo: campos criados, layout organizado, Record Page ativa, e 3 regras de validação funcionando.
