class Agent 
{
  constructor(x, y, size) 
  {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update(x, y)
  {
    this.x = x
    this.y = y
  }

  show() 
  {
    fill(0, 255, 0);
    noStroke();
    
    let X = this.x * this.size;
    let Y = this.y * this.size;
    
    square(X, Y, this.size);
  }
}
