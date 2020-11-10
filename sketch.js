const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  
  ball=Bodies.circle(200,100,20,{isStatic:false,restitution:1})
  World.add(world,ball)
 
  var options={
  isStatic:true
  }

  ground=Bodies.rectangle(200,350,400,50,options)
  World.add(world,ground)
  
  console.log(ground)
 console.log(ground.position.x)
 console.log(ground.position.y)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,50);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20)

}