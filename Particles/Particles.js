
function ManageParticles(amp, particles){
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

class Particle{
    constructor(){
      this.pos = p5.Vector.random2D().mult(250) //position of the particle
      this.vel = createVector(0,0) //starting velocity is 0
      this.acc = this.pos.copy().mult(random(0.0001, 0.00001)) //randomize particle acceleration
      this.w = random(3,5)
  
      this.color = [random(0,255),random(0,255),random(0,255)] //randomize particle color
    }
    update(cond){ //update the particle's movement
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      if(cond){ //if condition is met for certain amp then accelerate the particles
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.pos.add(this.vel)
      }
    }
    show(){//show particle
      //characteristics of particle
      noStroke()
      fill(this.color)
      ellipse(this.pos.x, this.pos.y,4)
    }
    edges(){ //if particle is outside of the window's edge, return true
      if(this.pos.x<-width/2 || this.pos.x>width/2||this.pos.y<-height/2||this.pos.y>height/2){
        return true
      }else{
        return false
      }
    }
  }