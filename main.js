song="";
LeftWristX= 0;
LeftWristY= 0;
RightWristX= 0;
RightWristY= 0;

function preload(){
song = loadSound("music.mp3")
}

function setup(){
    my_canvas = createCanvas(600, 500);
   my_canvas.center();

   video = createCapture(VIDEO);
   video.hide()

   poseNet = ml5.poseNet(video,modeloaded);
   poseNet.on('pose', gotposes)


}

function gotposes(results){
    if(results.length>0){
        console.log(results);
LeftWristX= results[0].pose.leftWrist.x;
LeftWristY= results[0].pose.leftWrist.y;
RightWristX= results[0].pose.rightWrist.x;
RightWristY= results[0].pose.rightWrist.y;

    }


}


function draw(){
image(video, 0, 0, 600, 500)
}

function play1(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}