# IF684-SearchAlgorithms
Este projeto é uma demonstração prática das estratégias de busca que foram estudadas durante a disciplina de Sistemas Inteligentes do CIn-UFPE. As estratégias implementadas incluem Busca em Largura (BFS), Busca em Profundidade (DFS), Busca de Custo Uniforme (UCS), Busca Gulosa (Greedy) e Busca A* (A-Star). Sinta-se à vontade para explorar o código, fazer perguntas e contribuir com melhorias.

## Busca em Largura (Breadth-First Search)

A Busca em Largura é um algoritmo de busca que explora todos os vértices de um grafo em ordem de distância, começando pelo vértice inicial e expandindo os vértices vizinhos antes de passar para os vértices de próxima profundidade.

![](../res/gif/bfs.gif)

## Busca em Profundidade (Depth-First Search)

A Busca em Profundidade é um algoritmo de busca que explora o grafo indo o mais fundo possível ao longo de cada ramo antes de retroceder.

![](../res/gif/dfs.gif)

## Busca de Custo Uniforme (Uniform Cost Search)

A Busca de Custo Uniforme é um algoritmo de busca que leva em consideração o custo para chegar a um nó. Ele expande o nó de menor custo acumulado primeiro.

![](../res/gif/ucs.gif)

## Busca Gulosa (Greedy Search)

A Busca Gulosa é um algoritmo de busca que utiliza uma função heurística para priorizar a expansão dos nós mais promissores, ou seja, aqueles que parecem levar mais rapidamente ao objetivo.

![](../res/gif/greedy.gif)

## Busca A* (A* Search)

A Busca A* é um algoritmo de busca que combina os melhores aspectos da Busca de Custo Uniforme e da Busca Gulosa. Ele utiliza uma função heurística para estimar o custo até o objetivo e prioriza a expansão dos nós com o menor custo estimado total.

![](../res/gif/astar.gif)

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
- `style` – mudanças que não afetam o significado do código, provavelmente relacionadas à formatação do código, como espaços em branco, pontos e vírgulas ausentes, e assim por diante.

A linha de assunto do tipo de commit deve ser toda em letras minúsculas com um limite de 75 caracteres. Além disso, o corpo opcional do commit deve ser usado para fornecer mais detalhes que não cabem nas limitações de caracteres da descrição da linha de assunto.

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
