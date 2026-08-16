# Aula 3 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Permission Sets + reforço geral do módulo
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Tudo o que você construiu nas Aulas 1 e 2

---

## Contexto

Esta é a última atividade do Módulo 2. Um dos atendentes de loja da Livraria Página Viva ("curador de acervo" informal) foi designado para revisar e limpar cadastros duplicados ou incorretos de livros e editoras — só ele deveria conseguir **excluir** livros e **editar** editoras, sem que isso valha para os outros atendentes.

## Requisitos

Criar um **Permission Set** (nome a seu critério, sugestão: "Curador de Acervo") concedendo:

- No objeto de **Livro**: permissão de **Delete** (além do que o perfil "Atendente de Loja" já dá).
- No objeto de **Editora**: permissão de **Edit** (além do Read que o perfil já dá).

Atribuir esse Permission Set a **apenas um** dos usuários de teste com perfil "Atendente de Loja" que você criou nas aulas anteriores.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir o Permission Set criado | Concede Delete em Livro e Edit em Editora |
| 2 | Verificar a quem o Permission Set está atribuído | Apenas 1 usuário — não todos os atendentes |
| 3 | Logar como o atendente **com** o Permission Set e tentar excluir um Livro | Permitido |
| 4 | Logar como o atendente **com** o Permission Set e tentar editar uma Editora | Permitido |
| 5 | Logar como um atendente **sem** o Permission Set e tentar excluir um Livro | Bloqueado (permanece igual ao perfil base) |
| 6 | Logar como um atendente **sem** o Permission Set e tentar editar uma Editora | Bloqueado (permanece igual ao perfil base) |
| 7 | Verificar o Perfil "Atendente de Loja" (o mesmo criado na Aula 1) | Continua **sem** Delete em Livro e **sem** Edit em Editora — o Permission Set não alterou o perfil base |

## Reforço geral do módulo (checklist de autoavaliação, sem entrega)

Antes de considerar o módulo concluído, confira:

- O perfil "Atendente de Loja" continua com as permissões corretas (Aula 1).
- A hierarquia de papéis com 3 níveis continua intacta (Aula 1).
- O OWD do objeto de Livro está Private, e a Sharing Rule para "Equipe de Compras" está funcionando (Aula 2).
- O Permission Set desta aula soma uma exceção pontual sem mudar o comportamento de ninguém mais.

## O que entregar

- Print do Permission Set criado, com as permissões e a lista de quem está atribuído.
- Print (ou vídeo curto) comparando o comportamento de um atendente **com** e **sem** o Permission Set, tentando a mesma ação (excluir um Livro).

> Cenário 7 é o mais importante: um erro comum é editar a permissão de Delete direto no Perfil em vez de usar um Permission Set — isso daria a permissão para **todos** os atendentes, não só para o curador. Confirme que o Perfil não mudou.
