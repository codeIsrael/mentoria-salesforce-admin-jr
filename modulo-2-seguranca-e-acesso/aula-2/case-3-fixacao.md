# Aula 2 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** OWD + Sharing Rules
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Case 3 da Aula 1 (perfil e papéis já criados)

---

## Contexto

A Livraria Página Viva agora tem um time de compras que negocia condições com editoras — separado dos atendentes de loja. O dono da livraria quer que cada atendente veja só os livros que ele mesmo cadastrou (para responsabilizar cada um pelos dados que insere), mas o time de compras precisa enxergar o acervo inteiro, mesmo não estando na mesma hierarquia dos atendentes.

## Requisitos

### 1. OWD

Alterar o OWD (Organization-Wide Default) do objeto de Livro para **Private**.

### 2. Sharing Rule

- Criar um **Public Group** (nome a seu critério, sugestão: "Equipe de Compras").
- Criar uma **Sharing Rule** no objeto de Livro: registros de propriedade do papel "Atendente de Loja" (e subordinados) são compartilhados com esse grupo, com acesso **Read Only**.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Verificar o OWD do objeto de Livro em Setup > Sharing Settings | Está configurado como **Private** |
| 2 | Criar dois usuários de teste com o perfil e papel "Atendente de Loja" (de nomes diferentes) | Cada um só enxerga, por padrão, os livros que ele mesmo criou — não os do colega |
| 3 | Logar como o papel "Gerente de Loja" (acima na hierarquia) | Enxerga os livros de **ambos** os atendentes, automaticamente, sem precisar de Sharing Rule |
| 4 | Adicionar um terceiro usuário de teste ao grupo "Equipe de Compras", sem papel na hierarquia dos atendentes | Antes da Sharing Rule, esse usuário não via nenhum livro dos atendentes |
| 5 | Logar como esse terceiro usuário depois de criada a Sharing Rule | Agora enxerga os livros dos atendentes, mas em modo **somente leitura** (não consegue editar) |

## O que entregar

- Print da configuração de OWD do objeto de Livro mostrando "Private".
- Print da Sharing Rule criada (critérios e nível de acesso).
- Print (ou vídeo curto) comparando o que o terceiro usuário via **antes** e **depois** da Sharing Rule.

> Cenário 3 é o mais fácil de esquecer de testar: a visibilidade por hierarquia é automática, você não precisa (e não deve) criar uma Sharing Rule para o Gerente de Loja ver os registros dos seus subordinados.
