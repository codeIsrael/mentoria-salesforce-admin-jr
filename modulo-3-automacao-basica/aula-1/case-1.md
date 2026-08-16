# Aula 1 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Screen Flow
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** `Moveis_Personalizados__c` (Módulo 1)

## Contexto

O time de operações da Nordic Móveis reclama que cadastrar um móvel novo pelo formulário padrão é lento: várias seções, campos fora de ordem, sem nenhuma orientação de preenchimento. Eles querem uma tela simples, com só os campos essenciais, guiando o cadastro passo a passo.

## Construir o Flow

- Criar um **Screen Flow** chamado "Cadastro Rápido de Móvel".
- Uma única tela (Screen element) com os campos: Nome, Categoria, Preço Base, Sob Encomenda, Fornecedor (campo de busca/lookup).
- Elemento **Create Records** ao final, criando um registro de `Moveis_Personalizados__c` com os valores preenchidos na tela.
- Tela de confirmação simples ("Móvel cadastrado com sucesso!") depois da criação.

**Destacar:** diferença entre Screen Flow (interface, interação com o usuário) e os outros tipos de Flow (que rodam sem tela, em segundo plano) — isso é gancho para a Aula 2.

## Disponibilizar o Flow

- Adicionar o Flow como uma **Quick Action** na Lightning Record Page do objeto, ou como item de um App customizado — a critério da demonstração.

## Resultado esperado

Screen Flow funcional, acessível pelo usuário, criando registros de `Moveis_Personalizados__c` corretamente a partir dos dados preenchidos na tela.
