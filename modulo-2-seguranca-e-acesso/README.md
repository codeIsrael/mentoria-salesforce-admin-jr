# Módulo 2 — Segurança e Acesso

## Temas do módulo

Perfis, Papéis, OWD (Organization-Wide Defaults), Permission Sets, Sharing Rules.

## Continuando a história

As mesmas 3 empresas do Módulo 1 continuam crescendo: **Nordic Móveis**, **Auto Peças Rota Norte** e **Livraria Página Viva**. Agora que os catálogos (`Moveis_Personalizados__c`, `Peca_Automotiva__c`, objeto de Livro) já existem, cada empresa contratou mais gente — e "todo mundo com acesso de Administrador" parou de ser uma opção seria. Você vai construir o modelo de segurança em cima dos objetos que já existem.

## Aulas

| Aula | Foco | Status |
|------|------|--------|
| [Aula 1](aula-1/) | Perfis e Papéis | ✅ Pronta |
| [Aula 2](aula-2/) | OWD + Sharing Rules | ✅ Pronta |
| [Aula 3](aula-3/) | Permission Sets + reforço geral do módulo | ✅ Pronta |

## Lógica dos cases dentro de cada aula

Mesmo padrão dos módulos anteriores: os 3 cases de cada aula cobrem os mesmos tópicos, cada um na empresa correspondente — **Case 1 = Nordic Móveis** (demonstração), **Case 2 = Auto Peças Rota Norte** (demonstração), **Case 3 = Livraria Página Viva** (fixação).

- **Aula 1:** cada empresa ganha um Perfil customizado (permissões de objeto) e uma Hierarquia de Papéis.
- **Aula 2:** OWD dos objetos principais vira Private, e uma Sharing Rule reabre acesso de forma controlada para um grupo específico.
- **Aula 3:** um Permission Set concede uma permissão extra pontual, sem alterar o Perfil — e fecha com reforço geral do módulo.
