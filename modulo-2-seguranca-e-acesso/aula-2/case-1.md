# Aula 2 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** OWD (Organization-Wide Defaults) + Sharing Rules
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Case 1 da Aula 1 (perfil e papéis já criados)

## Contexto

Hoje, mesmo com o perfil "Analista de Catálogo - Nordic" configurado, qualquer usuário com esse perfil enxerga **todos** os registros de `Moveis_Personalizados__c`, de qualquer dono. O gestor quer que cada analista veja só os produtos que ele mesmo cadastrou — exceto o time comercial, que precisa ver o catálogo inteiro para conseguir vender.

## 1. OWD (Organization-Wide Default)

- Mudar o OWD de `Moveis_Personalizados__c` para **Private**.

**Destacar:** a partir de agora, por padrão, só o dono do registro (e quem está acima dele na Hierarquia de Papéis) enxerga o registro. É aqui que o papel criado na Aula 1 passa a ter efeito prático de verdade: o "Gerente de Operações" automaticamente enxerga tudo que o "Analista de Catálogo" (papel abaixo dele) possui, mesmo sem nenhuma regra de compartilhamento.

## 2. Sharing Rule

O time comercial não está na mesma hierarquia dos analistas de catálogo — então, sem uma regra de compartilhamento, eles ficariam sem ver nada.

- Criar um **Public Group** chamado "Equipe Comercial".
- Criar uma **Sharing Rule** em `Moveis_Personalizados__c`: registros de propriedade do papel "Analista de Catálogo" (e subordinados) são compartilhados com o grupo "Equipe Comercial", com acesso **Read Only**.

**Destacar:** Sharing Rule é sempre uma **exceção que abre acesso** — nunca fecha. Ela só faz sentido depois que o OWD já fechou o padrão.

## Resultado esperado

OWD de `Moveis_Personalizados__c` = Private; grupo "Equipe Comercial" criado; Sharing Rule concedendo Read Only aos membros desse grupo sobre os registros dos analistas de catálogo.
