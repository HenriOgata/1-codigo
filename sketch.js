var fixo, movendo;



function setup() {
  createCanvas(1200,800);
  fixo = createSprite(600, 400, 50, 80);
  fixo.shapeColor = "blue";
  fixo.debug = true;
  movendo = createSprite(400, 200, 80, 30);
  movendo.shapeColor = "blue";
  movendo.debug = true;
  
}

function draw() {
  background(0,0,0); 
  
  movendo.x = mouseX;
  movendo.y = mouseY;

  if(movendo.x - fixo.x == fixo.width/2 + movendo.width/2){
    fixo.shapeColor = "red";
    movendo.shapeColor = "red";
  }else{
    fixo.shapeColor = "blue";
    movendo.shapeColor = "blue";
  }

  drawSprites();

}