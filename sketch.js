const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var gameState=0
var playerCount=0
var form
var game
var spiderImg, spidersalto;
var spider;
var bg1, bg2, bg3;
var columna, columnaImg, colum;
var piso1;
var piso, piso2, piso3, piso4, piso5;

var invisibleground;
var blockImg

var blockGroup;
var pisoGroup;
var laserGroup;


var laserImg;

function preload() {
laserImg=loadImage("fotos/laser.png")
bg1=loadImage("fotos/banner.png")
bg2=loadImage("fotos/back.png")
bg3=loadImage("fotos/back2.png")
spiderImg=loadAnimation("fotos/sp1.png", "fotos/sp2.png", "fotos/sp4.png", "fotos/sp5.png" )
spidersalto=loadAnimation("fotos/sp3.png")
piso1=loadImage("fotos/piso.png")
blockImg=loadImage("fotos/cubo.png")
columnaImg=loadImage("fotos/columna.png")



}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create();
  world = engine.world;

game=new Game
game.start();

blockGroup=createGroup();
pisoGroup=createGroup();
laserGroup=createGroup();

spider=createSprite(200, 400)
spider.addAnimation("correr", spiderImg);
spider.addAnimation("saltar", spidersalto)
spider.scale=0.1
spider.visible=false


spider.debug=true
spider.setCollider("rectangle", 0, 0, 500, 900)

invisibleground=createSprite(3400, 590, 7000, 50)
invisibleground.visible=false; 


piso=createSprite(600, 590);
piso.addImage(piso1);
piso.scale=0.5
pisoGroup.add(piso)

piso2=createSprite(1800, 590)
piso2.addImage(piso1)
piso2.scale=0.5
pisoGroup.add(piso2)

piso3=createSprite(3000, 590)
piso3.addImage(piso1)
piso3.scale=0.5
pisoGroup.add(piso3)

piso4=createSprite(4200, 590)
piso4.addImage(piso1)
piso4.scale=0.5
pisoGroup.add(piso4)

piso5=createSprite(5400, 590)
piso5.addImage(piso1)
piso5.scale=0.5
pisoGroup.add(piso5)

pisoGroup.setVisibleEach(false)

colum=createSprite(1800, 350, 1200, 10)

var  bl1=createSprite(600, 540, 10, 10)
bl1.addImage(blockImg)
bl1.scale=0.2
blockGroup.add(bl1)


for(var m=390; m<=540; m=m+50){
var blg=createSprite(700, m , 10, 10)
blg.addImage(blockImg)
blg.scale=0.2
blockGroup.add(blg)

}

for(var m=490; m<=540; m=m+50){
var blg2=createSprite(650, m , 10, 10)
blg2.addImage(blockImg)
blg2.scale=0.2
blockGroup.add(blg2)

}


for(var m=390; m<=540; m=m+50){
var blg3=createSprite(850, m , 10, 10)
blg3.addImage(blockImg)
blg3.scale=0.2
blockGroup.add(blg3)
}

for(var m=440; m<=540; m=m+50){
var blg4=createSprite(1080, m , 10, 10)
blg4.addImage(blockImg)
blg4.scale=0.2
blockGroup.add(blg4)
}

for(var m=490; m<=540; m=m+50){
var blg5=createSprite(1180, m , 10, 10)
blg5.addImage(blockImg)
blg5.scale=0.2
blockGroup.add(blg5)
}


blockGroup.setVisibleEach(false)


//laseres
for(var m=1400; m<=2400; m=m+150){
  var laser=createSprite(m, 340, 20, 20)
  laser.addImage(laserImg)
  laser.scale=0.2
  laser.velocityY=-2
  laserGroup.add(laser)
}

}

function draw() {
  Engine.update(engine);



  if(playerCount===1){
    gameState=1
  }
  
  if(gameState===1){
   clear();
    game.play();
  background(0, 120, 120)

   
  invisibleground.visible=false
  spider.visible=true
  blockGroup.setVisibleEach(true)
  pisoGroup.setVisibleEach(true)

   spider.collide(invisibleground)
  spider.collide(blockGroup)


  camera.position.x=spider.x+400
  

  //moviminetos
  if(keyDown("right_arrow")){
    spider.x=spider.x+8
    
     }
  
    if(spider.x>190){
    if(keyDown("left_arrow")){
    spider.x=spider.x-8
  
    }
    }
  
  if(spider.y>300){
  if(keyDown("up_arrow")){
    spider.velocityY=spider.velocityY-3

  }

  
  }

  //gravedad
  spider.velocityY = spider.velocityY + 0.91
  
  
        
   
    for(var k=0; k<=5000; k=k+2380) {
  image(bg2, k, -25, 1200, 620)
    }
  
     for(var k=1190; k<=6000; k=k+2380){
  image(bg3, k, -25, 1200, 620)
     }
    
  image(columnaImg, 1200, 150, 1200, 290)
  
  
     
   
         spider.depth=piso.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso2.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso3.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso4.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso5.depth;
         spider.depth=spider.depth+1;
     

      
  }

  console.log(gameState);
  drawSprites()
}



 
 