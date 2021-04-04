/*class Plane {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      density: 50
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
  }
}

class Hammer {
  constructor(x, y) {
    var options = {
      density: 4,
      friction: 1.0,
      restitution: 0.5,
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white');
    fill('orange');
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}

class Stone {
  constructor(x, y, r) {
    var options = {
      restitution: 0.8,
    //  isStatic: false
      friction: 0.9,
      density: 12
    }
    this.x = x;
    this.y = y;
    this.r = r
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
  }
  display() {
    var rubberpos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(rubberpos.x, rubberpos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("gray");
    ellipse(this.x, this.y, this.r);
    pop();
  }
}

class Rubber {
  constructor(x, y, r) {
    var options = {
      restitution: 0.3,
      friction: 5,
  //    isStatic: false
      density: 1
    }
    this.x = x;
    this.y = y;
    this.r = r
    this.body = Bodies.circle(this.x, this.y, this.r, options)
    World.add(world, this.body);
  }
  display() {
    var rubberpos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(rubberpos.x, rubberpos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("black");
    ellipse(this.x, this.y, this.r);
    pop();
  }
}

class Iron {
  constructor(x, y, width, height) {
    var options = {
      restituion: 0.8,
      friction: 3,
      density: 30
		//	isStatic: false
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options)
    World.add(world, this.body);
  }
  display() {
    var rubberpos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(rubberpos.x, rubberpos.y);
    rotate(angle);
    rectMode(CENTER)
    strokeWeight(4);
    stroke("black");
    fill("darkblue");
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}*/

class Plane {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      density: 50
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    /*var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);*/
       var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
  }
}

class Hammer {
  constructor(x, y) {
    var options = {
      density: 4,
      friction: 1.0,
      restitution: 0.5,
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
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

class Stone {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("black");
    rect(0, 0, this.width, this.height);
    pop();
  }
}

class Rubber {
  constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1,
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0,this.r, this.r);
			pop()
	}
}

class Iron {
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 80;
      this.height = 50;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);

      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
}
