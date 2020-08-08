var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 300, 50, 50);
  movingRect = createSprite(0,300,30,30);
  movingRect.debug = true;
  fixedRect.debug = true;

  movingRect.velocityX=4;
  fixedRect.velocityX=-4;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;*/
  
  console.log("Distance when touches "+ (fixedRect.width/2 + movingRect.width/2));
  console.log("Distance between the rectangles "+ (movingRect.x - fixedRect.x));

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 
    && movingRect.y-fixedRect.y <=fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y <=fixedRect.height/2+movingRect.height/2){
    //fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  }
  if( movingRect.y-fixedRect.y <=fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y <=fixedRect.height/2+movingRect.height/2){
    //fixedRect.shapeColor = "red";
     movingRect.shapeColor = "red";
     movingRect.velocityY=-1*(movingRect.velocityY);
     fixedRect.velocityY=-1*(fixedRect.velocityY);
  }
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){
    movingRect.velocityX=-1*(movingRect.velocityX);
  fixedRect.velocityX=-1*(fixedRect.velocityX);
  }
  drawSprites();
}