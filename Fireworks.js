

function manageFirework(){

}

class Firework{
    #particles = []
    #streaks = []
    constructor(positionX,positionY){
        this.exploded = false;
        this.pos = createVector(50,400);
        //this.pos = p5.Vector.random2D().mult(250) //position of the particle
       this.vel = createVector(0,-12) //starting velocity is 0
       this.acc = createVector(0,0.09) //randomize particle acceleration
       this.originX = positionX
       this.originY = positionY
    //    this.particles = []
    //    this.streaks = []
       //this.w = random(3,5)
  
    //   this.color = [random(0,255),random(0,255),random(0,255)] //randomize
    
}
update(){
    //If upward velocity is 0 then explode the firework
    if(this.vel.y>0 && !this.exploded){
        this.explode()
        this.exploded = true;
    }
    //Cap downward acceleration to make falling more realistic
    if(!(this.vel.y >12)){
        this.vel.add(this.acc)
    }
    

    this.pos.add(this.vel)
}
show(){
    noStroke()
    fill(100)
    push()
    translate(this.originX,this.originY)
    //show streak particles
    if(!this.exploded){
        ellipse(this.pos.x,this.pos.y,10)
        var sp = new Firework2ndPhase([220,43,43],1,2,0.1,this.pos,20,50)
        this.#streaks.push(sp)
        
    }
    for(var i = this.#streaks.length-1;i>=0;i--){
        if(!this.#streaks[i].destroy()){
            this.#streaks[i].show();
            this.#streaks[i].update();
        }else{
            this.#streaks.splice(i,1);
        }
    }
    for(var i = this.#particles.length-1;i>=0;i--){
        if(!this.#particles[i].destroy()){
            this.#particles[i].show();
            this.#particles[i].update();
        }else{
            this.#particles.splice(i,1);
        }
    }
    pop()
}
explode(){
    for(var i = 0; i<100;i++){
        var p = new Firework2ndPhase([220,43,43],10,15,0.01,this.pos,50,100);
        this.#particles.push(p);  
    }
        
}  
exploded(){
    return this.exploded
}  
}

class Firework2ndPhase{
    constructor(color,radius1,radius2,downwardAccel,position,deleteCondRange1,deleteCondRange2){
        this.pos = p5.Vector.random2D().mult(random(radius1,radius2)) //position of the particle
        //Declare and initialize the spawn origin of particle
        this.originX = position.x
        this.originY = position.y
        this.vel = this.pos.copy().mult(0.1) //starting velocity is 0
        this.acc = createVector(0,downwardAccel) //randomize particle acceleration //randomize particle acceleration
        this.color = color
        this.deleteTimer = 0;
        this.deleteCond = random(deleteCondRange1,deleteCondRange2)

      }
      update(cond){ //update the particle's movement
        
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        if(cond){ //if condition is met for certain amp then accelerate the particles
          this.vel.add(this.acc)
          this.pos.add(this.vel)
          this.pos.add(this.vel)
        }
      }
      show(){//show particle
        push()
        translate(this.originX,this.originY)
        //characteristics of particle
        noStroke()
        fill(this.color)
        ellipse(this.pos.x, this.pos.y,4)
        pop()
      }
      destroy(){
        if(this.deleteTimer > this.deleteCond){
            return true
        }else{
            this.deleteTimer++
            return false
        }
      }
}