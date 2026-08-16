# Módulo 1 — Fundamentos da Plataforma

## Temas do módulo

Objetos, Tipos de campo, Layout/Record Page, Regras de validação, Relacionamentos, Campos Fórmula.

## Cenário de negócio: Nordic Móveis

A **Nordic Móveis** é uma fabricante e varejista de móveis de médio porte que está migrando o controle interno de produtos de planilhas Excel para o Salesforce. Você foi contratado(a) como Analista Salesforce Júnior e vai construir, junto com o time, a base da plataforma antes de ela virar uma ferramenta de vendas e atendimento (isso vem nos módulos 4 e 5).

Neste módulo o foco é **fundação técnica**: como modelar dados, configurar telas e garantir qualidade da informação — sem ainda envolver processos de venda ou atendimento ao cliente.

## Aulas

| Aula | Foco | Status |
|------|------|--------|
| [Aula 1](aula-1/) | Objetos, Tipos de campo, Layout/Record Page, Regras de validação | ✅ Pronta |
| [Aula 2](aula-2/) | Relacionamentos (Lookup/Master-Detail) + Regras de validação cross-object | ✅ Pronta |
| [Aula 3](aula-3/) | Campos Fórmula + reforço geral do módulo | ✅ Pronta |

## Lógica dos cases dentro de cada aula

Cada aula tem 3 cases que cobrem **os mesmos tópicos**, aplicados a **uma empresa fictícia diferente** em cada case — reforço por repetição com variação, não divisão de tópicos entre cases:

- **Case 1** (demonstração) — Nordic Móveis (fabricante/varejista de móveis).
- **Case 2** (demonstração) — Auto Peças Rota Norte (distribuidora de peças automotivas).
- **Case 3** (fixação, o aluno faz sozinho) — Livraria Página Viva (livraria/sebo).

As mesmas 3 empresas atravessam as 3 aulas do módulo, evoluindo os mesmos objetos a cada aula (lógica espiral):

- **Aula 1:** cada empresa ganha seu objeto customizado (campos, layout, record page, 3 regras de validação).
- **Aula 2:** cada empresa ganha um objeto relacionado (Fornecedor/Fabricante/Editora) via Lookup ou Master-Detail, e uma 4ª regra de validação cross-object.
- **Aula 3:** cada empresa ganha 3 campos fórmula sobre o objeto principal (incluindo fórmulas que atravessam o relacionamento da Aula 2), fechando com reforço geral do módulo.
