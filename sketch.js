const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var pig1;
var log1;

function preload(){
 backgroundImage = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,width*2,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(1000,320,70,70);
    pig1 = new Pig(850,320,70,70);
    log1 = new Log(850,290,380,20,PI);

    box3 = new Box(700,270,70,70);
    box4 = new Box(1000,270,70,70);
    pig2 = new Pig(850,270,70,70);
    log2 = new Log(850,250,380,20,PI);

    box5 = new Box(850,210,70,70);
    log3 = new Log(840,220,150,20,-PI/3);
    log4 = new Log(870,220,150,20,PI/3);

    bird1 = new Bird(300,100);
    platform = new Ground(150,350,350,200);
  
}


function draw(){
    background(backgroundImage);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    //console.log(pig1);
    ground.display();
    box1.display();
    box2.display();
    log1.display();
    pig1.display();
    
    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();
    platform.display();
}