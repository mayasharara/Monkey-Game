var ground;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  ground= createSprite(300,360,600,6);
//  ground.velocityX=-4;
//ground.x = ground.width/2;
 // console.log(ground.x);
  monkey= createSprite(100,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.19;


  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
}


function draw() {
createCanvas(600,400);
  background(220);
  


  
  if (monkey.collide(ground)){
   if(keyDown("space")) {
        monkey.velocityY = -15;
  }
  }
   monkey.velocityY = monkey.velocityY + 0.8
  textSize(20);
  fill("black");
  text("survivalTime: "+ survivalTime, 250,50);
survivalTime = survivalTime + Math.round(getFrameRate()/60);

   if (monkey.isTouching(foodGroup)){
  foodGroup.destroyEach();
  }
  
    if (monkey.isTouching(obstacleGroup)){
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityEach(0,0);
  }
  
  food();
  Obstacles();
  drawSprites();
  
}



function food(){

 if (frameCount % 80 === 0){
banana=createSprite(600,600,10,10);
  banana.addAnimation("food",bananaImage);
  banana.scale=0.1;
 banana.y = Math.round(random(120,200));
  banana.velocityX = -3;
    banana .lifetime = 200;
   foodGroup.add(banana);
 } 
  

}


function Obstacles(){
 if (frameCount % 300 === 0){
    obstacle=createSprite(600,320,10,10);
  obstacle.addAnimation("ob",obstaceImage);
  obstacle.scale=0.2;
   obstacle.velocityX = -6;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
 }
}



