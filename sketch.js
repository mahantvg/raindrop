function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 10, 30);
  createSprite(200,100,10,20);
  createSprite(300,200,10,15);
  createSprite(200,300,10,30);
}

function draw() {
  background(0); 

  drawSprites();
}