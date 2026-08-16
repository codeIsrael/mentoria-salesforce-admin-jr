# Aula 3 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Permission Sets + reforço geral do módulo
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Tudo o que foi construído nas Aulas 1 e 2

## Contexto

"Ana Analista" (usuária de teste do time de operações) foi promovida temporariamente para cobrir um projeto especial de reorganização do catálogo de fornecedores — ela precisa, só durante esse projeto, conseguir **excluir** registros de `Fornecedor__c` (algo que o perfil dela normalmente não permite, e não deveria permitir para o resto do time).

## 1. Permission Set

Criar um Permission Set: **"Acesso Estendido a Fornecedores"**, concedendo:
- `Fornecedor__c`: **Delete** habilitado (além do Read que o perfil já dá).

Atribuir esse Permission Set apenas à usuária "Ana Analista".

**Destacar:** Permission Set **soma** permissões ao que o Perfil já dá — nunca remove. É a ferramenta certa para exceções pontuais e temporárias, sem precisar clonar um perfil novo só para uma pessoa (e sem afetar todo mundo que usa o mesmo perfil).

## 2. Reforço geral do módulo (revisão rápida, sem criar nada novo)

Percorrer com a turma, usando "Login As" na usuária "Ana Analista": perfil (o que ela pode fazer por padrão), papel (onde ela está na hierarquia), OWD Private (por que ela só vê o que é dela + o que a hierarquia dá), Sharing Rule (como o time comercial passou a ver os móveis dela), e agora o Permission Set (a exceção pontual que só ela tem).

## Resultado esperado

Permission Set criado e atribuído; revisão geral do módulo de segurança completa.
