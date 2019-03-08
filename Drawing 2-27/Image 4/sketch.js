// var b1;
var balls = []
var toggle = true
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBalls(100);
}

//  The draw function is called @ 30 fps
function draw() {
  if(toggle === true){
    background(20,20,20);
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
    }
  }
}
function loadBalls(numBalls){
  for(var i = 0; i < numBalls; i++){
    var loc = createVector(0,0);
    // var vel = createVector(5+5*i,5+5*i);
    var vel = createVector(random(-30.0, 30.0), random(-30.0, 30.0));
    var radius = (20);
    var acc = createVector(0,.01)
    balls.push(new ball(loc, vel, radius, acc));
  }
}
function mousePressed(){
  toggle = !toggle
}
