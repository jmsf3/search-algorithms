# Como Executar
Podemos facilmente executar um servidor local para rodar o projeto utilizando a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) para o VS Code.

1. Abra o gerenciador de extensões do VS Code (`Ctrl + Shift + X`);
2. Pesquise e instale a extensão Live Server;
3. Abra o arquivo `index.html` e inicie o Live Server usando o botão “Go Live” na barra de status, ou usando o atalho `Alt + L + O`;
4. O projeto agora deve abrir em seu navegador padrão no local: `127.0.0.1:5500`.

# Guidelines de Contribuição

## Mensagens de Commit

Utilizamos uma convenção que fornece um conjunto de regras para formular uma estrutura de mensagem de commit consistente da seguinte forma:

```
<type>[optional scope]: <description>

[optional body]
```

O tipo do commit pode ser:

- `feat` – uma nova funcionalidade é introduzida com as mudanças.
- `fix` – ocorreu uma correção de bug.
- `refactor` – código refatorado que não corrige um bug nem adiciona uma funcionalidade.
- `docs` – atualizações na documentação, como o README ou outros arquivos markdown.
- `style` – mudanças que não afetam o significado do código, provavelmente relacionadas à formatação do código, como espaços em branco, ponto e vírgula ausentes, e assim por diante.

A linha de assunto do tipo de commit deve ser toda em letras minúsculas com um limite de 75 caracteres. Além disso, corpo opcional do commit deve ser usado para fornecer mais detalhes que não cabem nas limitações de caracteres da descrição da linha de assunto.

## Criação de Branches

Uma branch do git deve começar com uma categoria. Escolha uma destas: `feature`, `bugfix`, ou `test`.

- `feature` é para adicionar, refatorar ou remover uma funcionalidade.
- `bugfix` é para corrigir um bug.
- `test` é para experimentação.

Após a categoria, deve haver um "/" seguido por uma descrição que resume o propósito desta branch específica. Esta descrição deve ser curta e em `kebab-case`. Para resumir, siga este padrão ao criar branches:

```
git branch <category/description-in-kebab-case>
```

Exemplos:

- Você precisa adicionar, refatorar ou remover uma funcionalidade: `git branch feature/create-new-button-component`
- Você precisa corrigir um bug: `git branch bugfix/button-overlap-form-on-mobile`
- Você precisa experimentar algo: `git branch test/refactor-components-with-atomic-design`
