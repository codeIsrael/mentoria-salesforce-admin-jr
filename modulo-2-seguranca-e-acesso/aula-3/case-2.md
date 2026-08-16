# Aula 3 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Permission Sets + reforço geral do módulo (mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Tudo o que foi construído nas Aulas 1 e 2

## Contexto

"Vinícius Vendedor" (usuário de teste do time comercial, perfil só-leitura) virou o ponto focal temporário para cadastrar novos fabricantes enquanto o time de compras está sem um analista disponível — ele precisa, só por esse período, conseguir **criar e editar** registros de `Fabricante__c`.

## 1. Permission Set

Criar um Permission Set: **"Gestão de Fabricantes"**, concedendo:
- `Fabricante__c`: **Create** e **Edit** habilitados (além do Read que o perfil já dá).

Atribuir apenas ao usuário "Vinícius Vendedor".

**Reforçar:** mesma lógica do Case 1 — Permission Set soma, nunca substitui o perfil. Se amanhã o Vinícius não precisar mais dessa permissão, basta remover a atribuição do Permission Set, sem tocar no perfil dele.

## 2. Reforço geral do módulo (revisão rápida, sem criar nada novo)

Percorrer com a turma, usando "Login As" no "Vinícius Vendedor": perfil (só leitura por padrão), papel, OWD Private, Sharing Rule (Read/Write que o time de garantia ganhou), e agora o Permission Set dando a ele, especificamente, permissão de criar/editar fabricantes.

## Resultado esperado

Permission Set criado e atribuído; revisão geral do módulo de segurança completa.
