# Aula 2 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Relacionamentos + Regras de validação cross-object
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Objeto de Livro da Aula 1 (Case 3)

---

## Contexto

A Livraria Página Viva quer registrar a **editora** de cada livro do acervo, para futuramente negociar condições comerciais por editora. Hoje esse dado não existe em lugar nenhum — fica só na cabeça de quem faz a triagem dos livros.

Uma regra importante do processo de triagem: **um livro pode entrar no sistema sem editora identificada** (isso acontece com frequência em doações e sebos, onde a folha de rosto está rasgada ou ilegível) — a editora é associada depois, quando alguém identifica a informação.

Além disso, o time de importação pediu um controle: livros de editoras estrangeiras precisam ter o Código ISBN preenchido obrigatoriamente, por exigência de controle aduaneiro. Livros sem editora definida ainda, ou de editora brasileira, não têm essa exigência.

## Requisitos

### 1. Novo objeto e Relacionamento

Criar um objeto customizado **Editora** (nome e API Name a seu critério), com os campos:

| Campo | Tipo |
|---|---|
| País | Text |
| Ano de Fundação | Number |

Criar um relacionamento entre o objeto de Livro (da Aula 1) e o objeto Editora.

**Decisão que você precisa tomar e justificar por escrito (num comentário no início do campo de relacionamento, ou num arquivo à parte):** esse relacionamento deve ser **Lookup** ou **Master-Detail**? Baseie sua resposta no requisito descrito no contexto acima (um livro pode existir temporariamente sem editora identificada).

### 2. Layout

Adicionar o novo campo de relacionamento ao layout do objeto de Livro, em uma seção lógica (nova ou existente).

### 3. Regra de validação cross-object

Implementar uma regra de validação:

**RN4:** se o livro tem uma Editora associada, **e** o País dessa Editora é diferente de "Brasil", então o campo `Código ISBN` se torna obrigatório. Livros sem Editora associada, ou com Editora do Brasil, não têm essa exigência.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir o Object Manager | Objeto Editora existe, com campos País e Ano de Fundação |
| 2 | Verificar o tipo do relacionamento criado | É do tipo **Lookup** (não Master-Detail) — justificativa: um livro precisa poder existir sem editora associada, o que Master-Detail não permite |
| 3 | Salvar um livro **sem** Editora associada | Salvo normalmente, mesmo com Código ISBN em branco |
| 4 | Salvar um livro com Editora de País = "Brasil" e Código ISBN em branco | Salvo normalmente |
| 5 | Tentar salvar um livro com Editora de País diferente de "Brasil" (ex: "Portugal") e Código ISBN em branco | Bloqueado, com mensagem de erro clara |
| 6 | Salvar um livro com Editora de País diferente de "Brasil" e Código ISBN preenchido | Salvo normalmente |
| 7 | O campo de relacionamento com Editora aparece organizado numa seção do layout, não solto fora de seção | Confirmado visualmente na tela do registro |

## O que entregar

- Print do Object Manager mostrando o objeto Editora e seus campos.
- Uma frase escrita por você justificando a escolha entre Lookup e Master-Detail.
- Print de uma tentativa de salvamento bloqueada pela RN4, mostrando a mensagem de erro.

> Preste atenção especial ao cenário 3: uma regra mal escrita (sem checar se a Editora está preenchida antes de checar o País) pode acabar bloqueando livros que nem têm editora associada. Teste esse cenário com cuidado.
