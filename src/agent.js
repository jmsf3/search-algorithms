class Agent 
{
  constructor(x, y, size) 
  {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  
  show() 
  {
    fill('green');
    noStroke();
    
    let X = this.x * this.size;
    let Y = this.y * this.size;
    
    square(X, Y, this.size);
  }
}
