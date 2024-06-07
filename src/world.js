class World
{
  constructor(rows, cols, chunkSize)
  {
    this.rows = rows;
    this.cols = cols;
    this.chunkSize = chunkSize;

    this.world = this.generateWorld();
    this.agent = this.generateAgent();
    this.target = this.generateTarget();

    this.searchType = 'astar';
    this.start = this.world[this.agent.y][this.agent.x];
    this.goal = this.world[this.target.y][this.target.x];

    this.frontier = [];
    this.frontier.push(this.start);
    
    this.reached = new Set();
    this.reached.add(this.start);

    this.cameFrom = new Map();
    this.cameFrom.set(this.start, null);

    this.costSoFar = new Map();
    this.costSoFar.set(this.start, 0);

    this.goalFound = false;
    this.path = [];
  }

  generateWorld()
  {
    let world = new Array(this.rows);

    for (let y = 0; y < this.rows; y++)
    {
      world[y] = new Array(this.cols);

      for (let x = 0; x < this.cols; x++)
      {
        let type = this.randomTerrain(x, y);
        world[y][x] = new Chunk(x, y, this.chunkSize, type);
      }
    }

    return world;
  }

  generateAgent()
  {
    let x = floor(random(0, this.cols));
    let y = floor(random(0, this.rows));

    while (this.world[y][x].type == 'mountain')
    {
      x = floor(random(0, this.cols));
      y = floor(random(0, this.rows));
    }

    return new Agent(x, y, this.chunkSize);
  }

  generateTarget()
  {
    let x = floor(random(0, this.cols));
    let y = floor(random(0, this.rows));

    while (this.world[y][x].type == 'mountain')
    {
      x = floor(random(0, this.cols));
      y = floor(random(0, this.rows));
    }

    return new Target(x, y, this.chunkSize);
  }

  randomTerrain(x, y)
  {
    let zoomX = map(this.cols, 1, width, 1, 200);
    let zoomY = map(this.rows, 1, height, 1, 200);

    let noiseX = x / zoomX;
    let noiseY = y / zoomY;
    let noiseVal = noise(noiseX, noiseY);

    if (noiseVal < 0.4)
      return 'water';
    else if (noiseVal < 0.5)
      return 'mud';
    else if (noiseVal < 0.6)
      return 'sand';
    else
      return 'mountain';
  }

  neighbors(chunk)
  {
    let neighbors = [];

    let x = chunk.x;
    let y = chunk.y;

    if (x < this.cols - 1 && this.world[y][x + 1].cost != Infinity)
      neighbors.push(this.world[y][x + 1]);
    if (y < this.rows - 1 && this.world[y + 1][x].cost != Infinity)
      neighbors.push(this.world[y + 1][x]);

    if (x > 0 && this.world[y][x - 1].cost != Infinity)
      neighbors.push(this.world[y][x - 1]);
    if (y > 0 && this.world[y - 1][x].cost != Infinity)
      neighbors.push(this.world[y - 1][x]);

    return neighbors
  }

  setPath()
  {
    this.path = [];
    let current = this.goal;

    while (current != this.start)
    {
      this.path.push(current);
      current = this.cameFrom.get(current);
    }

    this.path.push(this.start);
    this.path.reverse();
  }

  bfs()
  {
    let n = this.frontier.length;

    for (let i = 0; !this.goalFound && i < n; i++)
    {
      let current = this.frontier.shift();

      if (current == this.goal)
      {
        this.goalFound = true;
        this.setPath();
        break;
      }

      for (let next of this.neighbors(current))
      {
        if (!this.reached.has(next))
        {
          this.frontier.push(next);
          this.reached.add(next);
          this.cameFrom.set(next, current);
        }
      }
    }
  }

  dfs()
  {
    // TODO
  }

  ucs()
  {
    // TODO
  }

  greedy()
  {
    // TODO
  }

  heuristic(a, b)
  {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  }

  astar()
  {
    let n = this.frontier.length;

    for (let i = 0; !this.goalFound && i < n; i++)
    {
      let current = this.frontier.shift();

      if (current == this.goal)
      {
        this.goalFound = true;
        this.setPath();
        break;
      }

      for (let next of this.neighbors(current))
      {
        let nextCost = this.world[next.y][next.x].cost;
        let newCost = this.costSoFar.get(current) + nextCost;
        let priority = newCost + this.heuristic(next, this.goal); 

        if (!this.reached.has(next))
        {
          this.frontier.push(next);
          this.costSoFar.set(next, priority);
          this.frontier.sort((a, b) => this.costSoFar.get(a) - this.costSoFar.get(b));
          this.reached.add(next);
          this.cameFrom.set(next, current);
        }
      }
    }
  }

  search()
  {
    if (this.searchType == 'bfs')
      this.bfs();
    else if (this.searchType == 'dfs')
      this.dfs();
    else if (this.searchType == 'ucs')
      this.ucs();
    else if (this.searchType == 'greedy')
      this.greedy();
    else if (this.searchType == 'astar')
      this.astar();
  }

  setSearch(key)
  {
    if (key == 'b')
      this.searchType = 'bfs';
    else if (key == 'd')
      this.searchType = 'dfs';
    else if (key == 'u')
      this.searchType = 'ucs';
    else if (key == 'g')
      this.searchType = 'greedy';
    else if (key == 'a')
      this.searchType = 'astar';

    this.reset();
  }

  showFrontier()
  {
    for (let chunk of this.frontier)
    {
      fill(255, 100);
      noStroke();

      let X = chunk.x * this.chunkSize;
      let Y = chunk.y * this.chunkSize;

      square(X, Y, this.chunkSize);
    }
  }
  

  showReached()
  {
    for (let chunk of this.reached)
    {
      fill(0, 100);
      noStroke();

      let X = chunk.x * this.chunkSize;
      let Y = chunk.y * this.chunkSize;

      square(X, Y, this.chunkSize);
    }
  }

  showPath()
  {
    for (let chunk of this.path)
    {
      fill(0, 0, 255);
      noStroke();

      let X = chunk.x * this.chunkSize;
      let Y = chunk.y * this.chunkSize;

      square(X, Y, this.chunkSize);
    }
  }

  show()
  {
    for (let y = 0; y < this.rows; y++)
    {
      for (let x = 0; x < this.cols; x++)
      {
        this.world[y][x].show();
      }
    }
  }

  run()
  {
    this.search();
   
    this.show();
    this.agent.show();
    this.target.show();

    this.showFrontier();
    this.showReached();
    this.showPath();
  }

  reset()
  {
    this.frontier = [];
    this.frontier.push(this.start);

    this.reached = new Set();
    this.reached.add(this.start);

    this.cameFrom = new Map();
    this.cameFrom.set(this.start, null);

    this.goalFound = false;
    this.path = [];
  }
}
