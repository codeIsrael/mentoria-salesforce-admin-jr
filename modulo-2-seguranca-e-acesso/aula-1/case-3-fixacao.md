# Aula 1 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Perfis e Papéis
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Módulo 1 completo (objeto de Livro e objeto de Editora)

---

## Contexto

A Livraria Página Viva contratou seu primeiro atendente de loja. Ele vai usar o Salesforce só para consultar e atualizar informações do acervo no balcão — ele não deveria conseguir excluir livros do sistema (isso é decisão do dono da livraria) nem editar dados de editoras (isso é feito só pelo time de compras).

## Requisitos

### 1. Perfil customizado

Criar um perfil customizado (clonado de Standard User), nome a seu critério (sugestão: "Atendente de Loja"), com as seguintes permissões de objeto:

- No objeto de **Livro**: leitura, criação e edição habilitadas; **exclusão desabilitada**.
- No objeto de **Editora**: **somente leitura**.

### 2. Hierarquia de Papéis

Criar uma hierarquia de papéis com 3 níveis:

```
Diretoria
  └─ Gerente de Loja
       └─ Atendente de Loja
```

### 3. Usuário de teste

Criar um usuário de teste associado ao perfil e ao papel "Atendente de Loja" criados acima.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir o perfil customizado no Setup | Nome não é "System Administrator" nem nenhum perfil padrão — é um perfil próprio, clonado de Standard User |
| 2 | Verificar permissões de objeto do perfil para Livro | Read, Create, Edit marcados; Delete **desmarcado** |
| 3 | Verificar permissões de objeto do perfil para Editora | Apenas Read marcado; Create, Edit e Delete desmarcados |
| 4 | Abrir Setup > Roles | Existem 3 papéis na hierarquia: Diretoria (raiz), Gerente de Loja (abaixo de Diretoria), Atendente de Loja (abaixo de Gerente de Loja) |
| 5 | Abrir o usuário de teste criado | Perfil = o perfil customizado criado; Papel = "Atendente de Loja" |
| 6 | Logar como o usuário de teste (ou usar "Login As") e tentar excluir um registro de Livro | Bloqueado — a opção de excluir não deve nem aparecer disponível |
| 7 | Logar como o usuário de teste e tentar editar um registro de Editora | Bloqueado — o registro deve aparecer como somente leitura para esse usuário |

## O que entregar

- Print das permissões de objeto do perfil customizado (Livro e Editora).
- Print da hierarquia de papéis com os 3 níveis.
- Print (ou vídeo curto) mostrando o usuário de teste tentando excluir um Livro e sendo bloqueado.

> Dica: use "Login As" (disponível para usuários do tipo System Administrator) para testar como o usuário de teste enxerga o sistema, sem precisar de uma segunda licença/e-mail.
