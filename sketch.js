var iball,padg;
var ball,paddle;
var img,pimg;


function preload() {
  /* preload your images here of the ball and the paddle */
  iball = loadImage("ball.png");
  padg = loadImage("paddle.png");
}
function setup() 
{
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200,200,10,10);
  paddle = createSprite(100,100,30,70);
  /* assign the images to the sprites */
  ball.addImage("img", iball);
  paddle.addImage("pimg", padg);
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() 
{
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[1]);
 ball.bounceOff(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
 paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=-9;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY=9;
  }
  drawSprites();
  explosion();
}
function explosion()
{
 ball.bounceOff(paddle);
}


