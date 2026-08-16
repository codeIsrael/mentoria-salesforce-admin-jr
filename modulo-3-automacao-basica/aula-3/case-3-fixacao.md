# Aula 3 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Visibilidade condicional em Screen Flow + reforço geral do módulo
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)
**Pré-requisito:** Tudo o que você construiu nas Aulas 1 e 2

---

## Contexto

Esta é a última atividade do Módulo 3. Lembre-se da RN3 do Módulo 1: livros de Gênero "Acadêmico" exigem Sinopse preenchida. No Screen Flow "Cadastro Rápido de Livro" (Aula 1), o campo Sinopse aparece sempre, mesmo para gêneros onde ele é totalmente opcional — o que confunde quem está cadastrando.

## Requisitos

Editar o Screen Flow "Cadastro Rápido de Livro" para que:

- O campo **Sinopse** só apareça na tela quando o **Gênero** selecionado for "Acadêmico".
- Para qualquer outro Gênero, o campo Sinopse fica **oculto** na tela (o usuário nem vê a opção de preenchê-lo).
- O restante do comportamento do Flow (criação do registro, tela de confirmação) continua funcionando normalmente, independente do Gênero escolhido.

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir o Flow em modo de execução e escolher Gênero = "Ficção" | O campo Sinopse **não aparece** na tela |
| 2 | Trocar o Gênero para "Acadêmico" (sem sair da tela, se o Flow permitir reavaliação dinâmica) ou reiniciar o Flow escolhendo "Acadêmico" | O campo Sinopse **aparece** na tela |
| 3 | Completar o cadastro de um livro Acadêmico preenchendo a Sinopse | O registro é criado normalmente com a Sinopse preenchida |
| 4 | Completar o cadastro de um livro de Gênero "Infantil" (sem ver o campo Sinopse) | O registro é criado normalmente, com Sinopse em branco |
| 5 | Verificar se a regra de validação RN3 (Módulo 1) ainda impede salvar um livro Acadêmico **sem** Sinopse, caso alguém tente criar um pelo formulário padrão (não pelo Flow) | RN3 continua bloqueando normalmente — o Flow só melhora a experiência, não substitui a regra de validação |

## Reforço geral do módulo (checklist de autoavaliação, sem entrega)

Antes de considerar o módulo concluído, confira:

- O Screen Flow da Aula 1 continua criando registros corretamente.
- O Record-Triggered Flow da Aula 2 continua atualizando o Nome ao marcar Edição Esgotada, mesmo quando o registro é criado pelo Screen Flow.
- A regra de validação RN3 do Módulo 1 continua ativa e funcionando, independente do Flow.

## O que entregar

- Print do Screen Flow em modo Builder, mostrando a configuração de Component Visibility do campo Sinopse.
- Print (ou vídeo curto) rodando o Flow duas vezes: uma escolhendo um Gênero comum (sem ver Sinopse) e outra escolhendo "Acadêmico" (vendo o campo aparecer).

> Cenário 5 é o mais importante para entender a diferença entre as duas camadas: a visibilidade condicional no Flow é só uma conveniência de interface — quem garante que o dado nunca fica inconsistente, em qualquer caminho de entrada (Flow, formulário padrão, API), é a regra de validação.
