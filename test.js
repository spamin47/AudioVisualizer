function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    // background(220);
    // ellipse(50,50,80,80);
    if(mouseIsPressed){
        if(mouseButton === LEFT){
            fill(0);
            ellipse(mouseX, mouseY, 80,80);
        }
        if(mouseButton === RIGHT){
            fill(54,113,202);
            noStroke();
            rect(mouseX,mouseY,20,20);
        }
    }
    
    
    
  }
