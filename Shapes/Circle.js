function SymmetricalCircle(radius, frequency){
    var wave = fft.waveform(); //Grabs the waveform of the song
    for(var t = -1;t<=1;t+=2){ //make the other side of the circle symmetrical
      beginShape()
      for(var i = 0; i<=180; i+=frequency){
        var index = floor(map(i,0,180,0,wave.length-1));
        
        var r = radius*map(wave[index],-1,1,150,350) //radius of the circle
        var x = r*sin(i) *t
        var y = r*cos(i)
        vertex(x,y)
      }
      endShape();
    }
}
function Circle(radius, frequency){
    var t =1
    var wave = fft.waveform(); //Grabs the waveform of the song
      beginShape()
      for(var i = 0; i<=360; i+=frequency){
        var index = floor(map(i,0,360,0,wave.length-1));
        
        var r = radius*map(wave[index],-1,1,150,350) //radius of the circle

        console.log(t);
        var x = r*sin(i)*t
        var y = r*cos(i)
        vertex(x,y)
      }
      endShape();
    }
