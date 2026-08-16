# Aula 1 · Case 3 (fixação) — Livraria Página Viva

**Tópicos:** Leads (captura, qualificação e conversão)
**Formato:** Atividade individual — para ser feita na sua org (Developer Edition)

---

## Contexto

A Livraria Página Viva foi procurada por uma escola interessada em fechar um contrato de fornecimento de livros didáticos para o ano letivo. Esse é um tipo de negócio diferente da venda avulsa de balcão — maior volume, negociação mais longa — e o dono da livraria quer registrar isso corretamente desde o primeiro contato.

## Requisitos

### 1. Capturar o Lead

Criar um Lead com, no mínimo:
- Company: "Colégio Vitória Régia" (ou nome similar de sua escolha)
- Nome do contato, E-mail, Telefone
- Lead Source: "Indicação" (ou outro valor padrão disponível)

### 2. Qualificar o Lead

Avançar o Status do Lead através do processo: `Novo` → `Contatado` → `Qualificado`. Registre, de alguma forma (nota, atividade ou campo de descrição), o motivo de cada mudança de status — por exemplo, o que foi conversado no contato inicial.

### 3. Converter o Lead

Converter o Lead qualificado, gerando:
- Uma nova Account (a escola).
- Um novo Contact (a pessoa de contato na escola).
- Uma nova Opportunity associada, representando essa negociação (nome sugerido: "Colégio Vitória Régia - Material Didático").

## Critérios de aceite

| # | Cenário | Resultado esperado |
|---|---|---|
| 1 | Abrir o Lead criado | Company, Nome do contato, E-mail e Telefone estão preenchidos |
| 2 | Verificar o histórico/status do Lead antes da conversão | Passou pelos estágios Novo → Contatado → Qualificado, nessa ordem |
| 3 | Converter o Lead | A conversão é bem-sucedida, sem erros |
| 4 | Abrir a Account gerada pela conversão | Nome da Account corresponde ao Company informado no Lead |
| 5 | Abrir o Contact gerado pela conversão | Está vinculado (relacionado) à Account criada |
| 6 | Abrir a Opportunity gerada pela conversão | Está vinculada à Account e ao Contact corretos |
| 7 | Voltar ao Lead original (se ainda acessível) | Está marcado como convertido, não aparece mais na lista de Leads em aberto |

## O que entregar

- Print do Lead antes da conversão, mostrando o Status "Qualificado".
- Print da tela de conversão mostrando as opções escolhidas (criar nova Account, novo Contact, nova Opportunity).
- Print da Account, Contact e Opportunity gerados, mostrando que estão devidamente relacionados entre si.

> Preste atenção ao nome da Opportunity gerada na conversão — por padrão, o Salesforce sugere um nome genérico baseado no nome da Account; ajuste para um nome que realmente identifique essa negociação específica.
