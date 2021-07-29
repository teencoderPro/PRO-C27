const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer,plane;
var stone,rubber,sand1,sand2,sand3,sand4,sand5,sand6;
var iron

function preload(){}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	hammer=new Hammer(100,200);
	plane=new Plane(400,698,5,800);
	stone=new Stone(405,460,70,70);
	rubber=new Rubber(200,200,40);
	sand1=new Sand(102,102,5);
	sand2=new Sand(100,100,5);
	sand3=new Sand(102,102,5);
	sand4=new Sand(104,104,5);
	sand5=new Sand(106,106,5);
	sand6=new Sand(108,108,5);
	iron=new Iron(150,50,20,40);


	
}

function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
 iron.display();

  drawSprites();
 
}
