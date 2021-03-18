var bg , bgImg;
var rocket , rocketImg;
var climber , climberImg;
var star , starImg;
var star_Group , climber_Group;
var magicSound ;
var ground;

function preload(){
bgImg = loadImage("images/planet.jpg");
rocketImg = loadImage("images/rocket.png");
climberImg = loadImage("images/climber.jpg");
starImg = loadImage("images/image.png");
magicSound = loadSound("starSound.mp3");
}

function setup() {
  createCanvas(1200,600);

  //console.log()
  bg = createSprite(600,300);
  bg.addImage(bgImg);
  bgImg.resize(windowWidth, windowHeight)
 bg.scale = 1.5
 bg.velocityX = -4


 
 rocket = createSprite(80,500);
 rocket.addImage(rocketImg);
 rocket.scale = 0.4;

 star_Group = createGroup();
 climber_Group = createGroup();
 }

function draw() {
  background(255,255,255);  

  if(bg.x < 400){
    bg.x = 600
  }

  if(keyDown("left_arrow")){
    rocket.x = rocket.x-5;
  }
  
  if(keyDown("right_arrow")){
    rocket.x = rocket.x + 5;
  }

  if(keyDown("up_arrow")){
    rocket.y = rocket.y -5;
  }

  if(keyDown("down_arrow")){
    rocket.y = rocket.y + 5;
  }

  if(frameCount % 150 === 0){
    climb();
    bubble_star();

   
  }
  if(star_Group.isTouching(rocket)){
  star.destroy();
  magicSound.play();
  }

  drawSprites();
}

function climb(){
  climber = createSprite(600,400,100,100);
  climber.addImage(climberImg);
  climber.y = Math.round(random(200,600));
  climber.scale = 0.5;
  climber.velocityX = -3;

  climber_Group.add(climber);
}

function bubble_star(){
  star = createSprite(600,150,100,100);
   star.addImage(starImg);
   star.y = climber.y-60 ;
   star.velocityX = -3;
   star.scale = 0.2

   star_Group.add(star);
}



