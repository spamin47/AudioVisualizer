
var fireworks = [];
var particles = [];
let turn = 1;
// var mic;
function preload(){

}

function setup() {
//   mic = new p5.AudioIn();
//   mic.start();
imageMode(CENTER)//center the image
  angleMode(DEGREES)
  rectMode(CENTER)
  createCanvas(windowWidth, windowHeight);
}

function draw() {
//   var vol = mic.getLevel();
//   console.log(vol)
  
  background(255);
  //text
  stroke(0)
  fill(0)
  textSize(50)
  text("X:" + floor(mouseX-width/2) + " Y:" + floor(mouseY-height/2),20,100);  
  text(floor(millis()/1000),20,150);  
  
  translate(width/2,height/2); //centered

  // //characteristics of shape
  // stroke(0);
  // strokeWeight(4) //weight of the brush
  // fill(0);

  // let head  = ellipse(0,0 , 50, 50);
  // let body = line(18, 17, 25, 100);
  // let leftArm = line(19, 23, -19, 79);
  // let rightArm = line(19, 23, 25, -75);

  // //laser
  // line()


  // //table
  // beginShape()
  // fill(50)
  // stroke(255,0,0)
  // vertex(-150,98)
  // vertex(150,98)
  // vertex(170,200)
  // vertex(-170,200)
  // vertex(-150,98)
  // endShape()

    

  if(fireworks.length == 0){
    // var fw = new Firework(500,0);
    // fireworks.push(fw);
    var fw2 = new Firework(0,0);
    fireworks.push(fw2);
  }
  for(var i = fireworks.length-1;i>=0;i--){
    fireworks[i].show();
    fireworks[i].update();

  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  console.log(windowHeight)
}
//create firework at mouse position
function mouseClicked(){
  fireworks.push(new Firework(mouseX-width/2,mouseY-height))
}

function keyPressed(){
  if(keyCode == 32){
    noLoop()
  }
  if(keyCode == 66){
    loop()
  }
}