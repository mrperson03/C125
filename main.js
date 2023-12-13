noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;
leftwristY = 0;
rightwristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("posenet is initialized!");
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);


        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("leftwristx = "  + leftwristX + "leftwristy = " + leftwristY);
        console.log("rightwristx =" + rightwristX + "rightwristy =" + rightwristY);
        difference = floor(leftwristX - rightwristX);
        console.log(difference);
    }
}

function draw() {
    background("#969A97");
    

    document.getElementById("square_side").innerHTML = 
    "Width and height of a square will be = " + difference + "px";

    fill("red");
    stroke("black")
    square(noseX, noseY, difference);
}