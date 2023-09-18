function preload(){
    
}
function setup(){
    canvas=createCanvas(500,350)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,500,350)
}
function start(){
obde=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status finding the stuf"
}
status="";
 function modelLoaded(){
    console.log("this IS A GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    status=true
    video.loop();
    video.speed(1);
    video.volume(1);
 }
