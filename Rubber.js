class Rubber{
	constructor(x,y,r)
	{
		var options = {
			'density':4,
			'friction': 1.0,
			'restitution':0.5
		  };
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;
		pos.x = 0;
		pos.y = 0;
		var angle = this.body.angle;
	
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		strokeWeight(3);
		stroke('white')
		fill('orange')
		rectMode(CENTER)
		rect(0, 0, this.width, this.height);
		pop();
	}

}