
//Paddle Game
//Otoniel Carreon
//10/4/18
var nextround = 4;
var number = 1;
var balls = [];
var paddle;
var stage = 1;
var score = 0;
var endgame = false;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 150,10);
  loadballs(number);
  paddle = new Paddle(createVector(5,10), 33, color(255,255,255));
  paddle2 = new Paddle2(createVector(5,10), 33, color(255,255,255));
}

//  The draw function is called @ 30 fps
//Here im going to call the paddle
function draw() {
  background(20, 20, 20);
  paddle.run();
  paddle2.run();
  numberofballs = 'there are ' + balls.length + ' balls'
  for(var i = 0 ; i < balls.length; i++){
    balls[i].run();
  }
  for(var i = balls.length - 1; i >= 0; i--){
    if(balls[i].iscoliding === true){
      //this code checks if the velocity of the balls is negative(going up) or positive(going down).
      if(balls[i].vel.y < 0){
        //the next round has to begin and the code has to add balls.
        //I have to chaqnge the score so that it equals the next amount of balls
        if(nextround > 0){
          number = number + 5;
          stage = stage + 1
          nextround = nextround - 1
          balls = []
          loadballs(number)
        }
      }
      balls.splice(i,1);
      score = score + 1
    }
  }
  fill(255);
  text('Your Score is ' + score,10,90)
  fill(255);
  text(numberofballs, 10, 30);
  fill(255)
  text('its round ' + stage + '.', 10, 60);
  if(endgame === true){
    fill(255,0,0);
    text('GAME OVER! Your score was ' + score, 350, 400);
  }
  if(nextround == 5 && balls.length > 0){
    fill(255,0,0);
    text('GAME OVER! Your score was ' + score, 350, 400);
  }
  function endScreen(){
    if(endgame === true){
      for(var i = 0; i < balls.length; i++){
        ball.loc = 2893465,2389456
        paddle.loc = 3845,23562
        paddle2.loc = 1245235,23542354
      }
    }
  }
}
//this function will load the amount of balls into the array balls[]
//then it will set the variables inside of the balls so each will have
//location, velocity, color, radius, and acceleration
function loadballs(number){
  for(var i = 0; i < number; i++){
    var loc = createVector(200,200);
    var vel = createVector(6,6);
    var col = color(random(255), random(255), random(255));
    var rad = (20);
    var b = new ball(loc, vel, col, rad);
    balls.push(b)
  }
}
