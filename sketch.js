const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var iron1, iron2;
var rubber1, rubber2, rubber3;
var stone1, stone2, stone3, stone4, stone4, stone5, stone6, stone7;


function setup() {
  var canvas = createCanvas(600, 600);
  engine = Engine.create();
  world = engine.world;

  plane = new Plane(0, 590, windowWidth, 20);
  hammer = new Hammer(10, 100, 10);

  iron1 = new Iron(510, 300);
  iron2 = new Iron(500, 300);

  rubber1 = new Rubber(300, 100, 20);
  rubber2 = new Rubber(290, 100, 20);
  rubber3 = new Rubber(280, 100, 20);

  stone1 = new Stone(140, 100, 20, 20);
  stone2 = new Stone(135, 100, 18, 20);
  stone3 = new Stone(130, 100, 16, 20);
  stone4 = new Stone(125, 100, 18, 20);
  stone5 = new Stone(120, 100, 22, 20);
  stone6 = new Stone(115, 100, 14, 20);
  stone7 = new Stone(110, 100, 16, 20);
}

function draw() {
  background("lightBlue");
  Engine.update(engine);

  plane.display();
  hammer.display();

  iron1.display();
  iron2.display();

  rubber1.display();
  rubber2.display();
  rubber3.display();

  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
}
