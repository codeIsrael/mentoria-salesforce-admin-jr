# Mentoria Salesforce — Trilha Analista Júnior

Mentoria prática, baseada em cases, para levar a turma ao nível de **Analista Salesforce Júnior**, com foco em **Sales Cloud + Service Cloud** (dominando a base dessas duas nuvens, o restante do ecossistema fica mais fácil de aprender depois).

## Formato

- **3 aulas por semana.**
- Cada aula tem **3 cases**:
  - **Case 1 e 2** — demonstrados pelo mentor (podem ser mais sucintos).
  - **Case 3** — atividade de fixação. É explícito no **o quê fazer** (contexto + requisitos + critérios de aceite), **nunca no como fazer**.
- **Lógica espiral:** Aula 1 introduz tema novo → Aula 2 reforça + expande → Aula 3 reforça tudo OU avança para tema novo, dependendo da aderência da turma.
- Cada case de fixação tem um **gabarito interno** (pasta `_gabaritos/`, não entregue ao aluno) com a solução esperada.

## Índice dos módulos

| # | Módulo | Aulas |
|---|--------|-------|
| 0 | Criar o Ambiente (setup) | — |
| 1 | Fundamentos da Plataforma | Objetos, Tipos de campo, Layout/Record Page, Regras de validação, Relacionamentos, Campos Fórmula |
| 2 | Segurança e Acesso | Perfis, Papéis, OWD, Permission Sets, Sharing Rules |
| 3 | Automação Básica | Flow (Screen Flow, Record-Triggered básico) |
| 4 | Sales Cloud | Leads, Oportunidades/Pipeline, Contas/Contatos, Price Book |
| 5 | Service Cloud | Cases, Filas, Assignment Rules, Omni-Channel, Macros, Knowledge, SLA |
| 6 | Relatórios e Dados | Relatórios, Dashboards, Joined Reports, Data Loader/Import Wizard |
| 7 | Rotina do Analista e Gestão de Mudança | Sandbox real, Change Sets, Approval Process, case integrador final |

Total: **7 módulos, 21 aulas, 63 cases**. A Aula 3 de cada módulo é flexível (reforço extra ou tema bônus), conforme a aderência da turma.

## Estrutura de pastas

```
modulo-N-nome-do-modulo/
  README.md              # cenário de negócio do módulo + índice de aulas
  aula-1/
    case-1.md
    case-2.md
    case-3-fixacao.md
  aula-2/
    ...
  aula-3/
    ...
  _gabaritos/             # NÃO entregar ao aluno
    aula-1-case-3.md
    aula-2-case-3.md
    aula-3-case-3.md
```

Cada módulo pode ter um cenário de negócio próprio (empresa fictícia), escolhido para caber melhor no tema do módulo.

## Status

- [x] Tópico 0 — Criar o Ambiente (Developer Edition vs. Sandbox real)
- [x] Módulo 1 / Aula 1 — Objetos, Tipos de campo, Layout/Record Page, Regras de validação
- [x] Módulo 1 / Aula 2 — Relacionamentos (Lookup/Master-Detail) + Regras de validação cross-object
- [x] Módulo 1 / Aula 3 — Campos Fórmula + reforço geral do módulo
- [ ] Módulos 2–7
