var starImg,bgImg;
var star, starBody;
var musica
var fada, fadota
var fundo
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadota = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
}

function setup() {
    createCanvas(800, 750);
    var options = {
        'restitution':0.5,
       isStatic: true  
     }
    fundo = createSprite(200,200,800,750)
    fundo.addImage(bgImg)
    fada = createSprite(200,500);
    fada.addAnimation("fresco", fadota);
    fada.scale = 0.3
    star = createSprite(550,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , options);
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background("white")
    star.x = starBody.position.x
    star.y = starBody.position.y
    if(keyDown(DOWN_ARROW) ){
        Matter.Body.setStatic(starBody,false)
    }
    fada.velocityX = 0
    if(keyDown(LEFT_ARROW)){
        fada.velocityX = -4
    }
    if(keyDown(RIGHT_ARROW)){
        fada.velocityX = 4
    }
  
    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true)
    }
    drawSprites()
}
