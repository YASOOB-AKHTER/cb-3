var box1,box2,box3,box4;
var ball,chain;
var ground;
var chain;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
	box1 = new bin(950,490,30,150);
	box2 = new bin(750,490,30,150);
  box3= new bin(850,560,180,30);
  
    ground= new Ground(500,575,995,30);
	ball= new BALLS(200,500,10);
  
  chain = new Chain(ball.body,{x:150,y:150});
  
}


function draw() {
	Engine.update(engine);
  
  background("white");
  ground.display();
  
  box1.display(); 
  box2.display(); 
  box3.display(); 
  ball.display();
  chain.display(); 

 
  
 
}
//function keyPressed(){
    
//  if (keyCode === UP_ARROW){
// Matter.Body.applyForce(ball.body,ball.body.position,{x:17,y:-17});




  //}
//}
function  mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
  function  mouseReleased(){
  chain.fly();
  
  }
