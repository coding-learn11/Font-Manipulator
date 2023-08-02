function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(110, 60)

    canvas = createCanvas(500, 390);
    canvas.position(785, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#cbd5f0');
}

function modelLoaded() {
    console.log('PoseNet Intialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}
