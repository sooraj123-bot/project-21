var car,bullet,speed,weight,def,thickness
function setup() {
  createCanvas(800,400);
  bullet=createSprite(50,200,50,5);
  wall=createSprite(700,200,60,250);
  weight=random(400,1500)
  speed=random(55,90)
  thickness=random(22,83)
  wall.width=thickness
  bullet.velocityX=speed
  wall.shapeColor=color(230,230,230)
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){

    bullet.velocityX=0
    def=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if (def<10){
      wall.shapeColor='green'
    }
    
    if (def>10){
      wall.shapeColor='red'
    }
  }
  
  drawSprites();
}
function  hasCollided(bullet,wall){
  bulletrightedge=bullet.x+bullet.width
  wallleftedge=wall.x
  if(bulletrightedge>wallleftedge){
    return true
  }
  return false
}