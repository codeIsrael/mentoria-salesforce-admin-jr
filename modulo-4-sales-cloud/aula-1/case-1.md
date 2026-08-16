# Aula 1 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Leads (captura, qualificação e conversão)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)

## Contexto

A Nordic Móveis começou a receber contatos de lojas de decoração querendo revender seus produtos. Hoje esses contatos chegam por WhatsApp e e-mail, sem nenhum registro central — o time comercial esquece de dar retorno e perde negócios.

## 1. Configurar o processo de Lead

- Revisar/ajustar o picklist **Lead Status** para refletir o processo comercial: `Novo` → `Contatado` → `Qualificado` / `Desqualificado`.
- (Objeto padrão `Lead` — não precisa criar campos novos para este case; usar os campos padrão: Company, Name, Email, Phone, Lead Source, Status.)

## 2. Capturar e qualificar um Lead

- Criar um Lead: Company = "Decora Sul Móveis e Design", Nome do contato, E-mail, Telefone, Lead Source = "Indicação".
- Avançar o Status: Novo → Contatado (registrar uma atividade/nota de que houve contato) → Qualificado.

## 3. Converter o Lead

- Usar a ação **Convert** do Salesforce no Lead qualificado.
- Na conversão: criar uma nova **Account** ("Decora Sul Móveis e Design"), um novo **Contact**, e marcar a opção de criar uma **Opportunity** associada (nome sugerido: "Decora Sul - Pedido Inicial").

**Destacar:** Lead é um registro "solto", sem relacionamento com Account/Contact — a conversão é o momento em que o Salesforce transforma esse suspect em uma estrutura de cliente de verdade (Account + Contact), preservando o histórico.

## Resultado esperado

Lead criado, qualificado e convertido, gerando Account, Contact e Opportunity vinculados.
