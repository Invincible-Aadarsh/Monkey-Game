
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,300,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  //ground.addImage()
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
 //monkey.setCollider("circle",0,0,40);
 //monkey.debug = true
  
  
  score = 0;
  
}


function draw() {
background("white");
  if(keyDown("space")){
    monkey.velocityY=-13;
  
  }
  monkey.velocityY = monkey.velocityY + 0.8; 
  
  
monkey.collide(ground);

  if(bananaGroup.isTouching(monkey)){
 bananaGroup.destroyEach();
  score = score + 1;
     
     }
  
  if(monkey.isTouching(obstacleGroup)){
  obstacleGroup.setVelocityXEach(0);
  }
  
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  spawnobstacle();
  
  
  spawnbanana();
  
  /*if(obstacleGroup.isTouching(monkey)){
 }*/
  drawSprites();
  
  text("Survival Time: " + score, 200, 50);
}

function spawnobstacle(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(400,340,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);      
    obstacle.lifetime = 300;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
  
}

  function  spawnbanana(){
    if (frameCount % 120 === 0) {
     banana = createSprite(600,100,40,10);
  banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
   banana.scale = 0.1;
       banana.velocityX = -3;
      
      banana.lifetime = 180;
       bananaGroup.add(banana);
    }
  
  }




