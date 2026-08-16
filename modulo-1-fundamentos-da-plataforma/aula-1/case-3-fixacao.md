# Aula 1 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Objetos, Tipos de campo, Layout/Record Page, Regras de validação
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)

---

## Contexto

A **Livraria Página Viva** é um sebo/livraria que quer sair do controle em planilha e catalogar seu acervo no Salesforce. Você foi chamado(a) como Analista Salesforce Júnior para construir essa base do zero: o objeto, os campos, a tela de cadastro e as regras que garantem qualidade dos dados.

## Requisitos

### 1. Objeto e Tipos de Campo

Criar um objeto customizado para representar um **Livro** do acervo (nome e API Name a seu critério), com o campo padrão `Name` em formato de texto, e os seguintes campos adicionais:

| Campo (nome a seu critério) | O que representa | Tipo esperado |
|---|---|---|
| Gênero | Categoria do livro: Ficção, Não-ficção, Infantil, Acadêmico, Quadrinhos | Picklist |
| Preço de Venda | Valor de venda do exemplar | Currency |
| Data de Publicação | Data em que o livro foi publicado | Date |
| Edição Esgotada | Indica se a edição não é mais impressa | Checkbox |
| Sinopse | Resumo do conteúdo do livro | Long Text Area |
| Código ISBN | Identificador único do livro | Text |

### 2. Layout e Record Page

- A tela de cadastro deve estar organizada em **pelo menos 2 seções lógicas** (não pode ser uma lista única de campos soltos).
- `Preço de Venda` e `Gênero` devem ser **obrigatórios no layout**.
- Deve existir uma Lightning Record Page **ativa** para o objeto, com um Highlights Panel mostrando ao menos Nome, Gênero e Preço de Venda.

### 3. Regras de Validação

Implementar **3 regras de validação**:

- **RN1:** o registro não pode ser salvo com `Preço de Venda` igual a zero ou em branco.
- **RN2:** se o livro **não** está marcado como "Edição Esgotada", `Data de Publicação` não pode ser uma data futura.
- **RN3:** se `Gênero` for "Acadêmico", o campo `Sinopse` se torna obrigatório.

Cada regra precisa de uma mensagem de erro em linguagem de negócio, exibida no campo correspondente.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir o Object Manager | Objeto customizado de Livro existe, com os 6 campos da tabela acima, com os tipos corretos |
| 2 | Abrir a tela de cadastro (Page Layout) | Campos organizados em pelo menos 2 seções, não numa lista única |
| 3 | Tentar salvar um livro sem preencher `Preço de Venda` ou `Gênero` | Bloqueado pelo próprio layout (campo obrigatório), antes mesmo de qualquer regra de validação |
| 4 | Abrir um registro existente | A Record Page ativa exibe um Highlights Panel com Nome, Gênero e Preço de Venda visíveis no topo |
| 5 | Tentar salvar um livro com Preço de Venda = R$ 0,00 | Bloqueado, com mensagem de erro clara no campo |
| 6 | Tentar salvar um livro com Preço de Venda em branco | Bloqueado, com mensagem de erro clara |
| 7 | Salvar um livro com Preço de Venda = R$ 45,00 | Salvo normalmente |
| 8 | Salvar um livro **sem** "Edição Esgotada" marcada e Data de Publicação no passado | Salvo normalmente |
| 9 | Tentar salvar um livro **sem** "Edição Esgotada" marcada e Data de Publicação no futuro | Bloqueado, com mensagem de erro clara |
| 10 | Salvar um livro **com** "Edição Esgotada" marcada e Data de Publicação no futuro | Salvo normalmente (RN2 não se aplica) |
| 11 | Tentar salvar um livro de Gênero "Acadêmico" com Sinopse em branco | Bloqueado, com mensagem de erro clara |
| 12 | Salvar um livro de Gênero "Acadêmico" com Sinopse preenchida | Salvo normalmente |
| 13 | Salvar um livro de qualquer outro Gênero (ex: "Ficção") com Sinopse em branco | Salvo normalmente (RN3 não se aplica fora de "Acadêmico") |

## O que entregar

- Print do Object Manager mostrando o objeto e os campos criados.
- Print da tela de cadastro (layout) organizada em seções.
- Print da Record Page com o Highlights Panel.
- Print de pelo menos **2 tentativas de salvamento bloqueadas** por regras de validação diferentes, mostrando a mensagem de erro.

> Não existe um "jeito certo" único de nomear campos ou escrever as fórmulas — o que importa é que os 13 critérios de aceite se comportem exatamente como descrito. Teste cada cenário da tabela antes de considerar a atividade concluída.
