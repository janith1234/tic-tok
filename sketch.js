function preload(){}



function setup() {
  angleMode(DEGREES);
  createCanvas(800, 400);
  // createSprite(400, 200, 50, 50);
}

function draw() {
  
  //Translation and rotation 
  translate(200,200)
  rotate(-90)
  hrcolour=getRandomRgb();
  mncolour=getRandomRgb();
  sccolour=getRandomRgb();
  hr = hour();
  mn = minute();
  sc = second();
  background(255, 255, 255);
  scAngle = map(sc, 0, 60, 0, 360);
  if(hr>15){
    background("black")
      }
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);
  //drawing seconds hand
  push();
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(sccolour);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop()

  //drawing mins hand
  push();
  rotate(mnAngle);
  stroke(mncolour);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop()

  //drawing hr hand
  push();
  rotate(hrAngle);
  stroke(hrcolour);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();
  stroke(255, 0, 255);
  point(0, 0)

  //drawing the arcs
  strokeWeight(10);
  noFill();
  //Seconds
  stroke(sccolour);
  arc(0, 0, 300, 300, 0, scAngle);
  //Minutes
  stroke(mncolour);
  arc(0, 0, 260, 260, 0, mnAngle);
  //Hour
  stroke(hrcolour);
  arc(0, 0, 220, 220, 0, hrAngle);
  drawSprites();
}
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}