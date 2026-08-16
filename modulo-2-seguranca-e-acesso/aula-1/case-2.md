# Aula 1 · Case 2 (demonstração) — Auto Peças Rota Norte

**Tópicos:** Perfis e Papéis (reforço — mesmos tópicos do Case 1, empresa diferente)
**Formato:** Demonstrado pelo mentor (ler e mostrar o que fazer)
**Pré-requisito:** Módulo 1 completo (`Peca_Automotiva__c` e `Fabricante__c`)

## Contexto

A Auto Peças Rota Norte contratou um time de vendas próprio, separado do time que cadastra peças no catálogo. O time de vendas precisa **ver** o catálogo, mas não deveria conseguir editar preço de custo nem excluir peças — isso é responsabilidade do time de compras.

## 1. Perfil customizado

- Clonar o perfil **Standard User**, criando o perfil **"Vendedor de Peças - Rota Norte"**.
- Configurar permissões de objeto para `Peca_Automotiva__c`: apenas **Read** (o time de vendas consulta, não edita nem cria).
- Configurar `Fabricante__c`: apenas **Read**.

**Reforçar:** mesma lógica do Case 1 — Perfil é a base do que o usuário pode fazer. Aqui o perfil é ainda mais restritivo (só leitura), porque o papel desse time na empresa é diferente do time de operações da Nordic Móveis.

## 2. Hierarquia de Papéis

Criar a hierarquia:

```
Diretoria
  └─ Gerente Comercial
       └─ Vendedor de Peças
```

## 3. Criar usuário de teste

Criar um usuário de teste com o perfil "Vendedor de Peças - Rota Norte" e o papel "Vendedor de Peças".

## Resultado esperado

Perfil customizado somente-leitura em `Peca_Automotiva__c` e `Fabricante__c`; hierarquia de papéis criada; um usuário de teste configurado com ambos. Bom contraste com o Case 1: perfis diferentes para necessidades de negócio diferentes, mesma estrutura de raciocínio.
