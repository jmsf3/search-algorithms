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

    this.show();
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
    this.agent.show();
    this.target.show();
  }
}
