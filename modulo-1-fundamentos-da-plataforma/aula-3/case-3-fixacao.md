# Aula 3 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Campos Fórmula + reforço geral do módulo
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Tudo o que você construiu nas Aulas 1 e 2 para o objeto de Livro e o objeto Editora

---

## Contexto

Esta é a última atividade do Módulo 1. A Livraria Página Viva pediu três informações calculadas para aparecerem direto na tela do livro, sem precisar abrir outros registros ou fazer conta manual:

1. Um preço promocional para clientes do plano educacional.
2. Quantos anos se passaram desde a publicação do livro (para identificar clássicos e lançamentos).
3. Uma informação combinada de editora e país, útil para a equipe de compras — mas que precisa continuar funcionando normalmente mesmo para os livros que ainda não têm editora identificada (lembra da regra da Aula 2?).

## Requisitos

Criar **3 campos fórmula** no objeto de Livro:

**RF1 — Preço com Desconto Educacional**
Calcula 90% do `Preço de Venda` (ou seja, 10% de desconto). Tipo de campo: Currency.

**RF2 — Anos Desde a Publicação**
Calcula quantos anos se passaram entre a `Data de Publicação` e hoje. Tipo de campo: Number.

**RF3 — Editora e País**
Exibe um texto no formato `Nome da Editora - País` (ex: "Companhia das Letras - Brasil"). Para livros que **não têm** Editora associada (lembre-se: isso é permitido, conforme a Aula 2), o campo deve exibir o texto "Editora não identificada" em vez de dar erro ou aparecer em branco. Tipo de campo: Text.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir um livro com Preço de Venda = R$ 50,00 | Campo RF1 mostra R$ 45,00 |
| 2 | Abrir um livro publicado há exatamente 5 anos (data de hoje menos 5 anos) | Campo RF2 mostra 5 |
| 3 | Abrir um livro publicado neste ano | Campo RF2 mostra 0 |
| 4 | Abrir um livro **com** Editora associada (ex: Editora "Rocco", País "Brasil") | Campo RF3 mostra "Rocco - Brasil" |
| 5 | Abrir um livro **sem** Editora associada | Campo RF3 mostra exatamente "Editora não identificada" — sem erro, sem célula em branco |
| 6 | Os 3 campos fórmula aparecem organizados numa seção do layout (nova ou existente) | Confirmado visualmente na tela do registro |
| 7 | Tentar editar diretamente o valor de um dos 3 campos fórmula | Não é possível — campos fórmula não são editáveis manualmente |

## Reforço geral do módulo (checklist de autoavaliação, sem entrega)

Antes de considerar o módulo concluído, confira no seu objeto de Livro:

- O objeto tem os 6 campos da Aula 1, com os tipos corretos.
- O layout está organizado em seções (não é uma lista solta de campos).
- Existe uma Record Page ativa com Highlights Panel.
- As 4 regras de validação (RN1 a RN4, das Aulas 1 e 2) ainda bloqueiam os cenários certos.
- O relacionamento com Editora é Lookup e permite livro sem editora.

## O que entregar

- Print da tela de um livro **com** editora, mostrando os 3 campos fórmula preenchidos corretamente.
- Print da tela de um livro **sem** editora, mostrando que o campo RF3 exibe "Editora não identificada" em vez de erro ou branco.

> Cenário 5 é o mais importante desta atividade: uma fórmula de texto que tenta concatenar um campo de relacionamento vazio sem tratamento costuma gerar um resultado em branco ou incorreto, em vez da mensagem esperada. Teste esse cenário com atenção.
