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
