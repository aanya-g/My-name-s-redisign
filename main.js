leftWristX=0;
rightWristX=0;
difference=0;
nosex=0;
nosey=0;

function draw(){
    
    fill("blue");
    background("aquamarine");
    stroke("purple");
    textSize(difference);
    text("Aanya", nosex, nosey);
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(690, 210);

    video = createCapture(VIDEO);
    video.size(600,450);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("MODEL LOADED PROPERLY")
}

function gotPoses(result){
    
        if(result.length>0){
           console.log(result);
           leftWristX = result[0].pose.leftWrist.x;
           rightWristX = result[0].pose.rightWrist.x;
           nosex = result[0].pose.nose.x;
           nosey = result[0].pose.nose.y;
           difference = floor(leftWristX-rightWristX);
           document.getElementById("length").innerHTML = difference + "px";

        }
}