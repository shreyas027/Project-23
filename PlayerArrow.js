class PlayerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("arrow.png");
    this.archerAngle = archerAngle;
    this.velocity = 0;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position 
        push()
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.r,this.r)
        pop() 
   
  }

  shoot(){
    // it stores cannon's angle into new angle
    var newAngle = playerArcher.angle - 28
    // p5.Vector.fromAngle() is used to align the cannon and cannonBall's angle
    // it accepts angle in radian. Since the angle is presently in degrees, we have to convert it into radian.
    newAngle = newAngle*(3.14/180) // convert degrees into radian.
    // store the cannon's angle into variable velocity
    var velocity = p5.Vector.fromAngle(newAngle)
    // since the initial value tht we get from the Vector is low, we multiply it by 0.5
    velocity.mult(0.5)
    Matter.Body.setStatic(this.body,false)
    Matter.Body.setVelocity(this.body,{
        x: velocity.x*(180/3.14),
        y: velocity.y*(180/3.14)})
    
  }
}
