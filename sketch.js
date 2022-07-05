

var song
var fft
var particles = []
var fireworks = []

function preload(){
  song = loadSound('Sounds/Clockwork.mp3')
  img = loadImage('Images/OPM_God.jpg')
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.3)
  imageMode(CENTER)//center the image
  angleMode(DEGREES)
  rectMode(CENTER)
  img.filter(BLUR,5)//blur the image
}

function draw() {
  
  background(0);
  
  translate(width/2,height/2) //centered

  fft.analyze()
  amp = fft.getEnergy(20,200) //watch for certain amp frequency of the sound


  push()//push and pop so the rotation only affects the image
  if(amp>230){
    rotate(random(-1,1))
  }

  image(img,0,0,width +100,height +100) //added to width and height of image to make it larger
  pop()

  //change transparency of rectangle according to amp level
  var alpha = map(amp,0,255,180,150)
  fill(0,alpha)
  noStroke()
  rect(0,0,width,height)

  //characteristics of shape
  stroke(255);
  strokeWeight(3) //weight of the brush
  noFill();
  //shapes
  //SymmetricalCircle(2,2);
  Circle(1,2,amp>200);
  //SingleWave();
  

  //particles
  var p = new Particle()
  particles.push(p)
  for(var i = particles.length-1;i>=0;i--){ //update every particle on screen
    if(!particles[i].edges()){
      particles[i].show()
      particles[i].update(amp > 200)
    }else{ //delete particle if it's out of range
      particles.splice(i,1)
    }
    
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
  if(song.isPlaying()){
    song.pause()
    noLoop()
  }else{
    song.play()
    loop()
  }
}
