
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(600,height,1200,20)
	paper1= new paper(100,400,40);
	log1 = new Line(810,500,20,200);
	log2 = new Lin(753,430,150,20);
	log3 = new Lin(860,430,150,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  drawSprites();

 
 log2.display();
 log3.display();
 ground1.display();
 log1.display();
 
 paper1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:230,y:-250})
}
	
}