/**
Instillation
Damian Larice
*/

"use strict";

//VARIABLES
let uu = []
let shirts = []
let back;
let beam = []
let loading;
let user;

function preload() {

//IMAGES
uu[0] = loadImage('assets/images/left eye.png');
uu[1] = loadImage('assets/images/right eye.png');
uu[2] = loadImage('assets/images/mouth.png');

shirts[0] = loadImage('assets/images/shirt1253.png');
shirts[1] = loadImage('assets/images/shirt2253.png');
shirts[2] = loadImage('assets/images/shirt3253.png');

beam[0] = loadImage('assets/images/beam.png');

back = createVideo(['assets/images/back.mp4','assets/images/back1.webm']);
back.hide();

loading = loadImage('assets/images/loading.png');
user = loadImage('assets/images/user.png');

frameRate(10);
}



let y

function setup() {

createCanvas(1080, 1920);
background(200,200,200);

imageMode(CENTER);
angleMode(DEGREES);



y = 0

}


function mousePressed(){
  clickCounter++;
  print(clickCounter);
  print(mouseX,mouseY);
}

let count = 0;

function draw() {
 print(frameCount);
 //LOADING FACE ANIMATION BEFORE

  push()
  translate(width / 5, height / 3);
  var eyeLeft = [1,19,37,55];
  var eyeRight = [7,25,43,61];
  var mouth = [13,31,49,67];
  var reset = [6,12,18,24,30,36,42,48,54,60,66,72];

  if(eyeLeft.includes(frameCount)){
      uu[1].resize(339 * 0.5,409 * 0.5)
      image(uu[1],521,227);

    }
    if(eyeRight.includes(frameCount)){
      uu[0].resize(339 * 0.5,409 * 0.5)
      image(uu[0],96,337);

    }
    if(mouth.includes(frameCount)){
      uu[2].resize(669 * 0.5,299 * 0.5)
      image(uu[2],288,557);

    }
    if(reset.includes(frameCount)) {
      background(200,200,200);
    }
  pop()
//LOUIS HELPED ME WITH TOP PART "INCLUDES"
image(loading,540,400);
//LOADING FACE ANIMATION AFTER
 
  if(frameCount >= 80){

    image(back, 540, 960);
    image(user,540,440);
    back.volume(0);
    back.loop();
    back.hide();
//LOOP STARTS FOR ALTERNATION SHIRTS
    image(shirts[2],540,1300);
  }

  if (count % 3 == 1){
    image(shirts[1],540,1300);
  } else if(count % 3 == 2){
    image(shirts[0], 540, 1300);
  }
//LOOP ENDS FOR ALTERNATION SHIRTS

//SCAN LINE
  if(frameCount >= 100){
    image(beam[0],540,y+1626);
    y = y - 2

  }
  if (y < -710){
    y = + 0
    count++;
    print(count);

  }
  print(y);
}
