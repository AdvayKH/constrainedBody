class Chainclass{
  constructor(body1,body2){
      var options = {
          bodyA : body1,
          bodyB : body2,
          length : 100,
          stiffness : 0.04
      }
      this.body = Constraint.create(options);
      World.add(world,this.body);
  } 
    display(){
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position;

        stroke("black");
        strokeWeight(5);
        line(posA.x,posA.y,posB.x,posB.y);
        
    }

}