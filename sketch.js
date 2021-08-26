  var seaImage;
  var sea;
  var ship,ship_running,ship_collide;
  var invisibleSea;




function preload(){

  seaImage = loadImage("sea.png");
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 // ship_collided = loadImage("ship_collided.png");
}






function setup(){

  createCanvas(400,400);

ship = createSprite(10,250,20,50);
ship.addAnimation("running",ship_running);
edges = createEdgeSprites();

ship.scale = 0.08;
ship.x = 50;

invisibleSea = createSprite(200,260,400,4);
invisibleSea.visible = false;

sea = createSprite(200,200);
sea.addImage("sea",seaImage);
sea.scale = 0.2;
//sea.x = sea.width/2;



}








function draw(){

  background("white");






sea.velocityX = -4;
if(sea.x < 0) {
  sea.x = sea.width /2;

  sea.depth = ship.depth;
  ship.depth = ship.depth+1;
  
}

ship.collide(invisibleSea);


 drawSprites();
}















