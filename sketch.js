// creating the required constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0;


function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	// mking the main character which need to be launched
	hexagon = new Hexagon(width/2 - 250, height/2);

	// making the point with which the hexagon will be attached
	Point = new point(width/2 - 250, height/2);

	// making the constraint between the hexagon and Point
	slingshot = new Slingshot(hexagon.body, Point.body);

	// making the ground
	Ground = new ground(width/2, 470, width, 30);

	// making two platforms
	plfrm1 = new ground(width/2 + 100, 150, 200, 10);
	plfrm2 = new ground(width/2 + 300, 350, 200, 10);

	// making two obs
	obs1 = new obs(width/2 + 100, 100, 50, 70);
	obs2 = new obs(width/2 + 300, 300, 50, 70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('#310b0b');

  textSize(25);
  fill('yellow')
  text('Drag the circle to hit the targets.', width/2 - 430, 50);
  text(' Press space to spawn the circle.', width/2 - 430, 100)

//   textSize(25);
//   fill('yellow')
//   text('Score = ' + score, width/2 + 230, 50)

  hexagon.display();
  Point.display();
  slingshot.display();
  Ground.display();
  obs1.display();
  obs2.display();
  plfrm1.display();
  plfrm2.display();
  drawSprites();
}

function mouseDragged(){
	Body.setPosition(hexagon.body, {x : mouseX, y : mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
	if(keyCode == 32){
		slingshot.attach(hexagon.body);
	}
}



