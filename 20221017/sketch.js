function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)
  background(0);
  noFill()
  stroke(255)
var w=mouseX/10
  for(var j=0;j<height/50;j++){
   for (var i=0;p<width/50;i++){
    stroke(255,255,0)
      ellipse(i*50+25,j*50+25,mouseX/10)
      stroke(255)
      rect(i*50+25,j*50+25,mouseY/4)
      ellipse(i*50+50,J*50+50,25)
    }
 
  }
}