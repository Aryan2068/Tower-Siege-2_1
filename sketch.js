const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a, ground, platform_1, platform_2;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12;
var box13, box14, box15;
var box16;

var box_1, box_2, box_3, box_4, box_5;
var box_6, box_7, box_8;
var box_9;

var polygon, polygon_img;

var slingShot;
var engine, world;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;
  polygon_img = loadImage("polygon.png");
    ground = new Ground(600, 789, 1200, 20);
    
    platform_1 = new Ground(500, 650, 220, 15);
    platform_2 = new Ground(1000, 200, 150, 15);
    
    box1 = new Box(410, 620, 30, 40);
    box2 = new Box(440, 620, 30, 40);
    box3 = new Box(470, 620, 30, 40);
    box4 = new Box(500, 620, 30, 40);
    box5 = new Box(530, 620, 30, 40);
    box6 = new Box(560, 620, 30, 40);
    box7 = new Box(580, 620, 30, 40);
    
    box8 = new Box(440, 580, 30, 40);
    box9 = new Box(470, 580, 30, 40);
    box10 = new Box(500, 580, 30, 40);
    box11 = new Box(530, 580, 30, 40);
    box12 = new Box(560, 580, 30, 40);
    
    box13 = new Box(470, 540, 30, 40);
    box14 = new Box(500, 540, 30, 40)
    box15 = new Box(530, 540, 30, 40);

    box16 = new Box(500, 500, 30, 40);

    box_1 = new Box(940, 170, 30, 40);
    box_2 = new Box(970, 170, 30, 40);
    box_3 = new Box(1000, 170, 30, 40);
    box_4 = new Box(1030, 170, 30, 40);
    box_5 = new Box(1060, 170, 30, 40);

    box_6 = new Box(970, 130, 30, 40);
    box_7 = new Box(1000, 130, 30, 40);
    box_8 = new Box(1030, 130, 30, 40);

    box_9 = new Box(1000, 90, 30, 40);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingShot = new SlingShot(this.polygon, {x:130, y:500});
}

function draw() {
  background(color(99, 49, 147)); 
  Engine.update(engine);   

 
  ground.display();
  platform_1.display();
  platform_2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box_1.display();
  box_2.display();
  box_3.display();
  box_4.display();
  box_5.display();

  box_6.display();
  box_7.display();
  box_8.display();

  box_9.display();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
  slingShot.attach(this.polygon);
  }
}
