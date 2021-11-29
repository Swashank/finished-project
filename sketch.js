var bg,playerImage,traps, player;

function preload()
{
  bg=loadImage("backgroundtemple.jpeg")
  playerImage=loadAnimation("player-1.png","player-2.png","player-3.png","player-4.png","player-5.png","player-6.png","player-7.png","player-8.png")

  trap1=loadImage("shuriken1.png")
  trap2=loadImage("boulder.png")
  trap3=loadImage("spike.png")
  trap4=loadImage("cactus.png")
}

function setup()
{

  createCanvas(600,400);

  bg1 = createSprite(300,200,600,400);
  bg1.addImage(bg);
  bg1.velocityX = -3;
  bg1.scale = 1.7;
  
  player = createSprite(200,300,30,30);
  player.addAnimation("player",playerImage);
  player.scale=0.4;
ground=createSprite(300,320,600,10);
ground.visible=false
}

function draw()
{
  background(0);

  if(bg1.x < 80 )
  {
    bg1.x = bg1.width/2;
  }
  if(keyDown("space") && player.y >= 250) {
    player.velocityY = -12;
  }
  player.velocityY = player.velocityY + 0.8
 player.collide(ground)
spawnObstacles()
  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle=createSprite(600,300,50,50)
    obstacle.velocityX=-5;
obstacle.scale=0.4
    var r =Math.round(random(1,4))
    switch(r){
      case 1:obstacle.addImage(trap1)
      obstacle.scale=0.2
      break;
      case 2:obstacle.addImage(trap2)
      break;
      case 3:obstacle.addImage(trap3)
      break;
      case 4:obstacle.addImage(trap4)
      break;
      default:break
    }
    
  }
}

