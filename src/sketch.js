let world;

function setup()
{
  width = height = 600;
  createCanvas(width, height);

  let chunkSize = 8;
  let rows = ceil(height / chunkSize);
  let cols = ceil(width / chunkSize);

  world = new World(rows, cols, chunkSize);
}

function draw()
{
  world.run();
}

function keyPressed()
{
  const searchKeys = ['b', 'd', 'u', 'g', 'a'];
  
  if (searchKeys.includes(key))
  {
    world.setSearch(key);
  }
  
  if (key == 'r')
  {
    world.reset();
    world.searchType = null;
  }
}
