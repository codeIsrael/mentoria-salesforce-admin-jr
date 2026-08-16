# Aula 1 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Screen Flow
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Objeto de Livro (Módulo 1)

---

## Contexto

A Livraria Página Viva recebe doações e compras de acervo em lote — às vezes dezenas de livros no mesmo dia. Cadastrar cada um pelo formulário padrão é lento. O dono da livraria pediu uma tela de cadastro rápido, no mesmo espírito do que já existe para outras empresas parceiras que usam Salesforce.

## Requisitos

Criar um **Screen Flow** chamado "Cadastro Rápido de Livro", com:

- Uma tela contendo os campos: Nome, Gênero, Preço de Venda, Edição Esgotada, Editora (campo de busca/lookup).
- Um elemento que cria um registro do objeto de Livro com os valores preenchidos na tela.
- Uma tela final de confirmação, informando que o livro foi cadastrado com sucesso.
- O Flow deve estar disponível para ser executado a partir da Lightning Record Page do objeto de Livro (como Quick Action ou componente equivalente).

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir o Flow em modo de execução (Run) | A primeira tela pede Nome, Gênero, Preço de Venda, Edição Esgotada e Editora |
| 2 | Preencher todos os campos e avançar | Um novo registro de Livro é criado com exatamente os valores informados |
| 3 | Verificar o registro criado no Object Manager / lista de registros | Os dados batem com o que foi digitado na tela do Flow |
| 4 | Completar o Flow até o fim | Aparece uma tela de confirmação de sucesso, não uma tela em branco ou erro |
| 5 | Acessar o Flow a partir da Lightning Record Page do objeto de Livro | O Flow está disponível para ser iniciado sem precisar ir ao Setup |

## O que entregar

- Print do Flow em modo Builder mostrando a tela e o elemento de criação de registro.
- Print de um registro criado através do Flow (rodando o Flow do início ao fim).

> Preste atenção ao tipo de cada campo na tela do Flow — o campo Editora deve ser um componente de busca (lookup), não um campo de texto livre, senão você não consegue de fato associar o relacionamento corretamente.
