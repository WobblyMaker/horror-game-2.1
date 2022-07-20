var player,frontWalkingAnim,leftWalkingAnim,rightWalkingAnim;
var leverTile_1,leverTile_Group;
var escapeTile,escapePossible=false;
var bg,bgImg,bgImg2;


function preload(){
  bgImg=loadImage("assets/level1,1.png");
  bgImg2=loadImage("assets/level1,2.png");
  
  frontWalkingAnim=loadAnimation("assets/walking1.png","assets/walking2.png","assets/walking3.png");
  frontWalkingAnim.playing=true;
  
  leftWalkingAnim=loadAnimation("assets/leftwalk1.png","assets/leftwalk2.png","assets/leftwalk3.png");
  leftWalkingAnim.playing=true;

  rightWalkingAnim=loadAnimation("assets/rightwalk1.png","assets/rightwalk2.png","assets/rightwalk3.png");
  rightWalkingAnim.playing=true;

  frontWalkingAnim.looping=true;
  leftWalkingAnim.looping=true;
  rightWalkingAnim.looping=true;

}

function setup(){
  createCanvas(1000,500);
  rectMode(CENTER);
  
  player=createSprite(200,200,50,50);
  player.scale=0.6;
  
  bg=createSprite(200,200,30,30);
  bg.addImage(bgImg);

  leverTile_1=createSprite(110,-300,100,100);
  leverTile_1.scale=1
  leverTile_1.visible = false;

  escapeTile=createSprite(645,293,100,100);
  escapeTile.scale=1.5
  escapeTile.visible = false;

  player.addAnimation('frontWalking',frontWalkingAnim);
  player.addAnimation('leftWalking',leftWalkingAnim);
  player.addAnimation('rightWalking',rightWalkingAnim);
}

function draw() 
{
background(225);

camera.x=player.x;
camera.y=player.y;

player.depth=bg.depth+1;

if(keyDown("RIGHT")){
  player.x+=5;
  player.changeAnimation('rightWalking');
} 

if(keyDown("LEFT")){
  player.x-=5;
  player.changeAnimation('leftWalking');
}

if(keyDown("UP")){
  player.y-=5;
  player.changeAnimation('')
}

if(keyDown("DOWN")){
  player.y+=5;
  player.changeAnimation('frontWalking')
}

if(player.isTouching(leverTile_1) && keyDown("SPACE")){
  bg.addImage(bgImg2);
  escapePossible=true;
}

if(player.isTouching(escapeTile) && escapePossible==true){
  bg.visible=false;
  player.visible=false;
}
drawSprites();  
}
