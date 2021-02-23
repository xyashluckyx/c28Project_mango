
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1110,160,25);
	mango3=new mango(1000,60,32);
	mango4=new mango(900,180,30);
	mango5=new mango(930,250,25);
	mango6=new mango(980,200,31);
	mango7=new mango(1050,230,23);
	mango8=new mango(1160,220,28);
	mango9=new mango(1165,110,29);
	mango10=new mango(1195,160,25);
	mango11=new mango(1240,240,26);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(100,200,30);
	launcherObject=new Slingshot(stoneObj.body,{x:235,y:410});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  textSize(30);
  text("Press Space to get a second Chance to Play",100,50);

  image(boy,200,340,200,300);
  
  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);
  detectcollision(stoneObj,mango8);
  detectcollision(stoneObj,mango9);
  detectcollision(stoneObj,mango10);
  detectcollision(stoneObj,mango11);


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  stoneObj.display();
  launcherObject.display();
  groundObject.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcherObject.fly();

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		launcherObject.attach(stoneObj.body);

	}
}

function detectcollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=Lmango.r+Lstone.radius){                 
		Matter.Body.setStatic(Lmango.body,false)

	}

}