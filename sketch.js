const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ground, ball;

function setup() {
  createCanvas(500,500);
  myEngine=Engine.create();//myEngine.world
  myWorld=myEngine.world

var ground_options ={
  isStatic:true
}


ground=Bodies.rectangle(250,470,500,10,ground_options)
World.add(myWorld,ground);

var ball_options ={
 
restitution:1
}
ball = Bodies.circle(250, 250, 50, ball_options)
World.add(myWorld,ball);
//console.log(ground.position)
}

function draw() {
  background("cyan");  
Engine.update(myEngine);

fill("brown");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,500,50)
fill("pink"); 
circle(ball.position.x, ball.position.y, 50)
}