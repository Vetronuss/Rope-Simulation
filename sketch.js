var points = []

var pointAmount = 400;
var segmentLength = 1;
var gravity = 1;


function setup() {
  squareCanvas();
  points.push(new Point(null,true))
  for (var i = 1; i < pointAmount; i++)
  {
    points.push(new Point(points[i-1],false))
  }
       
    
  
}

function draw() {
  background(220);
  for (var i = 0; i < points.length; i++)
  {
    points[i].update();
    points[i].draw();
  }
}

class Point
{
  constructor(from,start)
  {
    this.x=random(0,width)
    this.y=random(0,height)
    this.from = from;
    this.dist = segmentLength;
    this.start = start;
    this.yVel = 0;
    this.terminalVel = 10;
    this.last = createVector(0,0);
  }
  
  
  update()
  {
    
    if (this.start){
      this.from = mousePos()
      
    }
    
    
    
    var cdist = vDist(this.from,this)-this.dist;
    var ang = vGetAngle(this,this.from);
    
    
    this.x+=cos(ang)*cdist;
    this.y+=sin(ang)*cdist;
    
    
    
    
    
    
    
  }
  
  draw()
  {
    push();
    stroke(0);
    fill(0);
    if (this.from != null)
    line(this.x,this.y,this.from.x,this.from.y)
    pop();
  }

  
}