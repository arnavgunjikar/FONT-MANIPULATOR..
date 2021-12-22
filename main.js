leftWristX = 0;
rightWristX = 0;

difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log(' PoseNet Is Initialized! ');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    document.getElementById("sizeOfText").innerHTML = "Font Size Of The Text Will Be = " + difference + "px";
    background('#969A97')
    textSize (difference);
    fill('#FFE787');
    text('Peter',50,400);
}