

var chao,menino, barreiraEsquerda,barreiraDireita;
var imgChao,imgMenino;

function preload(){
  imgChao = loadImage("path.png");
  imgMenino = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
chao=createSprite(200,200);
chao.addImage(imgChao);
chao.velocityY = 4;
chao.scale=1.2;

menino = createSprite(180,340,30,30);
menino.scale=0.08;
menino.addAnimation("JakeRunning",imgMenino);

barreiraEsquerda=createSprite(0,0,100,800);
barreiraEsquerda.visible = false;

barreiraDireita=createSprite(410,0,100,800);
barreiraDireita.visible = false;
}

function draw() {
  background(0);
  chao.velocityY = 4;
  
  menino.x = World.mouseX;
  
  edges= createEdgeSprites();
  menino.collide(edges[3]);
  menino.collide(barreiraEsquerda);
  menino.collide(barreiraDireita);
  
  if(chao.y > 400 ){
    chao.y = height/2;
  }
  
  drawSprites();
}


