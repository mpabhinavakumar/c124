function setup() {

    video = createCapture(VIDEO);
    video.size(550,500);
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,150);

    canvas = createCanvas(550,550);
    canvas.position(560,150);
}

function draw() {
    background('#969A97');

}

function modelLoaded() {

    console.log('poseNet Is Initialized!');
}

function gotPoses(results)
{

    if(results.length > 0)
    {

        console.log(results);
    }
}