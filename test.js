// navigator.getUserMedia = navigator.getUserMedia ||navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    
// var aCtx;
// var analyser;
// var microphone;
// if (navigator.getUserMedia) {
//   navigator.getUserMedia(
//     {audio: true}, 
//     function(stream) {
//       aCtx = new AudioContext();
//       microphone = aCtx.createMediaStreamSource(stream);
//       var destination=aCtx.destination;
//       microphone.connect(destination);
//     },
//     function(){ console.log("Error 003.")}
//   );
// }