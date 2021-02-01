const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var ground;

var particles = [];
var plinkos   = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);
  engine   = Engine.create();
  world    = engine.world;

  ground   = new Ground(240, 785, 460, 15);

  border_1 = new Border(240, 5,   480, 10);  
  border_2 = new Border(475, 400, 10,  800);
  border_3 = new Border(240, 795, 480, 10);
  border_4 = new Border(5,   395, 10,  800);  

   for (var k = 0; k <= 480; k = k + 80) {
     divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 40; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 75));
    }

    for (var j = 50; j <= 480 - 10; j = j + 50) {
      plinkos.push(new Plinko(j, 175));
    }

     for (var j = 75; j <= 480; j = j + 50) {
      plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <= 480 - 10; j=j+50) {
      plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   ground.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

   border_1.display();
   border_2.display();
   border_3.display();
   border_4.display();

   if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
  }

}