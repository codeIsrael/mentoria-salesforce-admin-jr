# Aula 1 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Screen Flow (reforço — mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** `Peca_Automotiva__c` (Módulo 1)

## Contexto

O time de compras da Auto Peças Rota Norte cadastra dezenas de peças por semana. Eles pediram uma tela de cadastro rápido, igual à ideia da Nordic Móveis, mas para o catálogo de peças.

## Construir o Flow

- Criar um **Screen Flow** chamado "Cadastro Rápido de Peça".
- Uma única tela com os campos: Nome, Categoria, Preço de Custo, Item Recondicionado, Fabricante (campo de busca/lookup).
- Elemento **Create Records** ao final, criando um registro de `Peca_Automotiva__c`.
- Tela de confirmação ("Peça cadastrada com sucesso!").

**Reforçar:** mesma estrutura do Case 1 (Screen → Create Records → confirmação), aplicada a um objeto diferente — deixar claro que o "molde" do Screen Flow se repete, só os campos e o objeto mudam.

## Disponibilizar o Flow

Adicionar como Quick Action na Lightning Record Page de `Peca_Automotiva__c`.

## Resultado esperado

Screen Flow funcional criando registros de `Peca_Automotiva__c` a partir da tela de cadastro rápido.
