function SingleWave(){
    stroke(255);
    noFill();
    
    var wave = fft.waveform();
    
    beginShape()
    for(var i = 0; i<width; i++){
      var index = floor(map(i,0,width,0,wave.length));
      var x = i;
      var y = wave[index] * 300 + height/2;
      vertex(x,y); //filled line
      //point(x,y) //dotted line
    }
    endShape();
}
function SingleWaveDotted(){
    background(0);
    stroke(255);
    
    var wave = fft.waveform();

    for(var i = 0; i<width; i++){
      var index = floor(map(i,0,width,0,wave.length));
      var x = i;
      var y = wave[index] * 300 + height/2;
      point(x,y) //dotted line
    }

}