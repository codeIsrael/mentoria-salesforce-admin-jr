# Aula 3 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Visibilidade condicional em Screen Flow + reforço geral do módulo (mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Tudo o que foi construído nas Aulas 1 e 2

## Contexto

No Screen Flow "Cadastro Rápido de Peça" (Aula 1), o time de compras pediu um aviso na própria tela: quando a peça é marcada como "Item Recondicionado", eles querem ver um texto de alerta lembrando de anexar o laudo de recondicionamento (processo manual, fora do Salesforce por enquanto).

## 1. Visibilidade condicional

- Editar o Screen Flow "Cadastro Rápido de Peça".
- Adicionar um componente de texto informativo (Display Text) na tela, com a mensagem: "⚠️ Lembre-se de anexar o laudo de recondicionamento no processo interno."
- Configurar a **Component Visibility** desse texto para aparecer apenas quando `Item_Recondicionado__c` (variável da tela) = **true**.

**Reforçar:** mesma técnica do Case 1 (Component Visibility condicionada a uma variável da tela), aplicada dessa vez para mostrar um aviso em vez de esconder um campo — mesma ferramenta, usos diferentes.

## 2. Reforço geral do módulo (revisão rápida, sem criar nada novo)

Rodar o Screen Flow ao vivo marcando/desmarcando Item Recondicionado e mostrando o aviso aparecendo/sumindo, e depois criar uma peça recondicionada pelo Screen Flow, mostrando o Record-Triggered Flow da Aula 2 ajustando o Nome automaticamente no mesmo salvamento.

## Resultado esperado

Aviso condicional funcionando no Screen Flow; demonstração das duas automações do módulo convivendo no mesmo fluxo de cadastro.
