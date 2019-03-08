function ball (loc, vel, radius,acc){
  this.loc = loc;
  this.vel = vel;
  this.rad = radius;
  this.acc = acc;

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }


  this.update = function(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    // if(this !== b1){
    //   var d = this.loc.dist(b1.loc)
    //   if(d<3000){
    //     var steeringForce = p5.Vector.sub(b1.loc, this.loc);
    //     steeringForce.normalize();
    //     steeringForce.mult(.2);
    //     this.vel.add(steeringForce);
    //   }
    //   if(d < 100){
    //     var steeringForce = p5.Vector.sub( this.loc, b1.loc);
    //     steeringForce.normalize();
    //     steeringForce.mult(0.2);
    //     this.vel.add(steeringForce);
    //   }
    // }
  }


  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }


  this.render = function(){
    // fill(this.col);
    // ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
    if(toggle === true){
      //stroke(this.col);
      if(this.loc.x > 530){
        //console.log("greater than 400");
          fill(0,255,0);
        }
      if(this.loc.x < 266){
        //console.log("less than 400");
        //_color = color(0,0,255);
        fill(0,0,255);
      }
      if
      ellipse(this.loc.x, this.loc.y, 15, 15)
      // for(var i = 1; i < balls.length; i++){
      //   ellipse(this.loc.x, this.loc.y, 25, 25)
      //   if(balls[i].loc.x > 400){
      //       fill(255)
      //     }
      //   else{
      //     fill(0,0,255)
      //   }
      //   }
      }
    }
  }
