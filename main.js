nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
diferencia = 0;
function preload()
{

}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(776,100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("MODEL LOADEDDEDED");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("Sheesh");
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x);
        console.log(nose_y);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        diferencia = floor(left_wrist_x - right_wrist_x);
        console.log(diferencia);
    }
}
function draw()
{
    background("white");
    document.getElementById("square_side").innerHTML = diferencia;
    stroke("orange");
    fill("orange");
    // square(nose_x,nose_y,diferencia);
    textSize(diferencia);
    text("Me pase problematic!",nose_x,nose_y);
}