# Aula 1 · Case 1 (demonstração) — Nordic Móveis

**Tópicos:** Perfis e Papéis
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Módulo 1 completo (`Moveis_Personalizados__c` e `Fornecedor__c`)

## Contexto

A Nordic Móveis contratou 4 pessoas para o time de operações. Hoje todo mundo usa o perfil System Administrator "porque é mais fácil" — o que significa que qualquer estagiário consegue apagar qualquer registro, mudar configurações da org, ou ver dados de folha de pagamento se algum dia isso for parar no Salesforce. Isso precisa parar antes de crescer mais.

## 1. Perfil customizado

- Clonar o perfil **Standard User**, criando o perfil **"Analista de Catálogo - Nordic"**.
- Configurar permissões de objeto para `Moveis_Personalizados__c`: Read, Create, Edit habilitados; **Delete desabilitado** (ninguém de operações deveria apagar um produto do catálogo — isso é decisão de gestão).
- Configurar `Fornecedor__c`: apenas **Read** (o time de operações consulta fornecedores, mas quem cadastra é o time de compras).

**Destacar:** Perfil controla **o que o usuário pode fazer** (CRUD por objeto, acesso a apps, permissões de sistema) — é a base de tudo, todo usuário tem exatamente um perfil.

## 2. Hierarquia de Papéis

Criar a hierarquia:

```
Diretoria
  └─ Gerente de Operações
       └─ Analista de Catálogo
```

**Destacar:** Papel (Role) é sobre **estrutura organizacional**, usado para **visibilidade de registros** — mas isso só faz efeito visível quando o OWD (Organization-Wide Default) do objeto for restritivo. Hoje o OWD ainda está aberto (padrão), então criar o papel agora é preparar o terreno; o efeito prático vem na Aula 2.

## 3. Criar usuário de teste

Criar um usuário de teste com o perfil "Analista de Catálogo - Nordic" e o papel "Analista de Catálogo".

## Resultado esperado

Perfil customizado com permissões corretas em `Moveis_Personalizados__c` e `Fornecedor__c`; hierarquia de papéis criada; um usuário de teste configurado com ambos.
