
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	ball_options={
		isStatic:false,
		restitution:0.3,
        friction:0,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball=Bodies.circle(200,100,10)
World.add(world,ball)

groundObj= new Ground(600,350,1200,20)
leftSide= new Ground(900,300,20,120)
rightSide= new Ground(1100,300,20,120)

	Engine.run(engine);
  
}


function draw() {
	background(200);
  rectMode(CENTER);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10)
 

 groundObj.display()
 leftSide.display()
 rightSide.display()



  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-95})
	}
}


