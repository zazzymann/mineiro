class Circulo {
    constructor(x,y,radiusX) {
      var options = {
         'density':4,
         'friction': 1.0,
         'restitution':0.5, 
          isStatic: false
      }
      this.body = Bodies.ellipse(x,y,radiusX);
      this.radiusX = radiusX
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.radiusX);
    }
  };