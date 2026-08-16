# Aula 2 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Record-Triggered Flow (before-save)
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Objeto de Livro (Módulo 1)

---

## Contexto

Quando um livro é marcado como "Edição Esgotada", a equipe de vendas quer que isso fique visível já no nome do título — igual já acontece em outra empresa parceira que automatizou o mesmo tipo de sinalização para os produtos dela. A ideia é reduzir o risco de vender ou prometer um livro que não tem mais edição disponível.

## Requisitos

Criar um **Record-Triggered Flow** (before-save) no objeto de Livro que:

- Dispara quando o registro é criado ou atualizado.
- Só age quando o campo "Edição Esgotada" estiver marcado como verdadeiro **e** o Nome do livro ainda não contiver o texto `[Esgotado]`.
- Quando as condições acima forem verdadeiras, atualiza o Nome do livro, adicionando o texto ` [Esgotado]` ao final do valor atual.
- Não deve duplicar o texto se o registro for salvo mais de uma vez já estando marcado como esgotado.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Criar um livro com Nome = "Grande Sertão: Veredas" e Edição Esgotada marcada | Após salvar, o Nome vira "Grande Sertão: Veredas [Esgotado]" |
| 2 | Criar um livro com Nome = "Dom Casmurro" e Edição Esgotada **desmarcada** | Após salvar, o Nome permanece "Dom Casmurro", sem alteração |
| 3 | Editar o livro do cenário 1 (já com "[Esgotado]" no nome) e salvar de novo, sem alterar nada | O Nome continua "Grande Sertão: Veredas [Esgotado]" — não duplica o texto |
| 4 | Editar um livro que **não** estava esgotado e marcar Edição Esgotada agora | O Nome é atualizado com "[Esgotado]" no momento desse salvamento |
| 5 | Verificar que o Flow não usa um elemento de tela (Screen) | O Flow roda automaticamente ao salvar, sem nenhuma interação do usuário |

## O que entregar

- Print do Flow em modo Builder, mostrando o elemento de condição de entrada e o elemento de atualização do Nome.
- Print de um livro antes e depois de ser marcado como esgotado, mostrando o Nome atualizado automaticamente.

> O cenário 3 é o mais fácil de esquecer: sem a checagem de "o nome ainda não contém [Esgotado]", cada vez que o registro for salvo de novo o texto se repete no nome. Teste salvando o mesmo registro esgotado duas vezes seguidas.
