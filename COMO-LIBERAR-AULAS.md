# Como liberar uma aula no site

O site (`releases.json` na raiz do repositório) controla quais aulas aparecem para os alunos.

## Passo a passo

1. Abra `releases.json`.
2. Mude a aula que você quer liberar de `false` para `true`.
3. Rode:
   ```
   git add releases.json
   git commit -m "Libera Módulo 1 / Aula 2"
   git push
   ```
4. Em ~1 minuto o GitHub Pages atualiza sozinho e a aula aparece na sidebar do site para todo mundo.

## Como funciona

- Uma aula que **não está listada** no `releases.json` é considerada liberada por padrão (evita esquecimento ao criar módulos novos — libere lá na frente ou marque explicitamente como `false` se quiser controlar).
- Uma aula marcada como `false`:
  - some da sidebar de navegação;
  - se alguém tiver o link direto salvo, vê uma mensagem de "conteúdo ainda não liberado" em vez do case.
- A "Visão geral" do módulo (o `README.md` de cada `modulo-N-.../`) fica sempre visível — só as pastas `aula-N/` são controladas.

## Limitação importante

O repositório é **público**. Esse mecanismo controla o que aparece *navegando pelo site* — não é uma trava de segurança. Alguém que souber o link direto do arquivo `.md` no GitHub (fora do site) ainda consegue abrir o conteúdo bruto. Isso não é um problema para os enunciados dos cases (eventualmente todos vão ser liberados mesmo), mas por isso os `_gabaritos/` **nunca** vão para este repositório — eles ficam só localmente com você (veja `.gitignore`).

## Adicionando um módulo novo

Ao publicar um módulo novo, adicione as aulas dele no `releases.json` já como `false`, e vá liberando conforme o cronograma:

```json
{
  "modulo-1-fundamentos-da-plataforma/aula-1": true,
  "modulo-1-fundamentos-da-plataforma/aula-2": false,
  "modulo-1-fundamentos-da-plataforma/aula-3": false,
  "modulo-2-seguranca-e-acesso/aula-1": false
}
```
