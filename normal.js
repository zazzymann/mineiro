class Normal {
    constructor(x,y,width,height) {
      var options = {
         'density':4,
         'friction': 1.0,
         'restitution':0.5, 
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };