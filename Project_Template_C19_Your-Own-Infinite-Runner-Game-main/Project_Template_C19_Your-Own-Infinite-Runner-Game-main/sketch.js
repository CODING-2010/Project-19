var astronautImage, astronaut;
var backgroundImage, bg;
var blackHoleImage, blackHoleGroup, blackHole;
var meteorImage, meteorGroup, meteor;
var starImage, starGroup, star;
var GameOver, GameOverImage;
var score = 0;
var health = 100;
var gameState = "play";

function preload(){
astronautImage = loadImage("./pictures/astronaut.png");
backgroundImage = loadImage("./pictures/space_Background.png");
blackHoleImage = loadImage("./pictures/black_Hole.png");
meteorImage = loadImage("./pictures/meteor.png");
starImage = loadImage("./pictures/star.png");
GameOverImage = loadImage("./pictures/GameOver.png");
}

function setup() {
 createCanvas(700,600);

 //bg = createSprite(350,300,700,600);
 //bg.addImage("background", backgroundImage);
 //bg.velocityX = 3;

 astronaut = createSprite(50,300,15,25);
 astronaut.addImage("astronaut", astronautImage);
 astronaut.scale = 0.5;

 starGroup = new Group();
 blackHoleGroup = new Group();
 meteorGroup = new Group();
}

function draw() {
background(0);
 if (gameState == "play")
     {   

        console.log(score);
         textSize(20);
         text("Score: "+score, 600,100);

        textSize(20);
        text("Health: "+health, 70,100);

        astronaut.debug = true;
        astronaut.setCollider("rectangle",0,0,110,190);
        
       // if(bg.x > 400){
            //bg.x = 300
          //}
         createStar();
         createBlackHole();
         createMeteor();

         if (keyDown("Up"))
         {
            astronaut.y -= 2;
         }

         if (keyDown("Down"))
         {
            astronaut.y += 2;
         }

         if (astronaut.isTouching(starGroup))
         {
             score = score + 5;
             star.remove();
         }

         if (astronaut.isTouching(meteorGroup))
         {
           health = health - 50;
           meteor.remove();
           if(health == 0)
           {
              gameState = "end";
           }
         }

         if (astronaut.isTouching(blackHoleGroup))
         {
           health = health - 100;
           gameState = "end";
         }




    }

    drawSprites();

    if (gameState == "end")
    {
        GameOver = createSprite(350,300,700,600);
        GameOver.addImage("GameOver", GameOverImage);
        astronaut.destroy();
    
    }
}

function createStar()
{
    if(frameCount % 200 === 0)
    {
        star = createSprite(720, Math.round(random(20,580)));
        star.addImage("star",starImage);
        star.velocityX = -3;
        star.scale = 0.1;
        starGroup.add(star);
        star.lifetime = 245;

    }
}

function createBlackHole()
{
    if(frameCount % 350 === 0)
    {
        blackHole = createSprite(720, Math.round(random(20,580)));
        blackHole.addImage("blackHole",blackHoleImage);
        blackHole.velocityX = -4;
        blackHole.scale = 0.1;
        blackHoleGroup.add(blackHole);
        blackHole.lifetime = 185;

    }
}

function createMeteor()
{
    if(frameCount % 250 === 0)
    {
        meteor = createSprite(720, Math.round(random(20,580)));
        meteor.addImage("meteor", meteorImage);
        meteor.velocityX = -5;
        meteorGroup.add(meteor);
        meteor.scale = 0.1;
        meteor.lifetime = 150;

    }
}