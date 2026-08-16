# Aula 2 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** OWD + Sharing Rules (reforço — mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Case 2 da Aula 1 (perfil e papéis já criados)

## Contexto

A Auto Peças Rota Norte agora tem um time de garantia, separado do time de compras que cadastra as peças. O time de garantia precisa **editar** o campo de peças (para registrar avaliações de reconstrução), mas não deveria ver peças de outros fabricantes que ainda estão em processo de homologação interna — daí a necessidade de fechar o OWD.

## 1. OWD

- Mudar o OWD de `Peca_Automotiva__c` para **Private**.

**Reforçar:** mesma lógica do Case 1 — a partir de agora só dono + hierarquia acima enxergam por padrão.

## 2. Sharing Rule

- Criar um **Public Group** chamado "Equipe de Garantia".
- Criar uma **Sharing Rule** em `Peca_Automotiva__c`: registros de propriedade do papel "Vendedor de Peças" (e subordinados) são compartilhados com o grupo "Equipe de Garantia", com acesso **Read/Write**.

**Destacar o contraste com o Case 1:** lá a Sharing Rule dava Read Only (time comercial só precisa ver); aqui dá Read/Write (time de garantia precisa editar). O nível de acesso da regra depende sempre da necessidade real do negócio.

## Resultado esperado

OWD de `Peca_Automotiva__c` = Private; grupo "Equipe de Garantia" criado; Sharing Rule concedendo Read/Write aos membros desse grupo sobre os registros dos vendedores.
