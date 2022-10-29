/**
Instillation
Damian Larice
*/

"use strict";

let face = []

let myVar = 0;
let clickCounter = 0;
let ale = [];
let dle = 4;
var gif;


function preload() {


face[0] = loadImage('assets/images/left eye1.png');
face[1] = loadImage('assets/images/right eye1.png');
face[2] = loadImage('assets/images/mouth1.png');

gif = createImg('assets/images/background.gif');

frameRate(10);

}


//let sqSize = [100, 39, 18, 17]

function setup() {

createCanvas(1080, 1920);
background(200,200,200);





}

function mousePressed(){
  clickCounter++;
  print(clickCounter);
  print(mouseX,mouseY);



}


/*function draw(){

  for( let i = 0; i < sqSize.length; i++){
    fill(100,50);
    drawSquare(sqSize[i],100);
  }
}
function drawSquare(size, fColor){
  rectMode(CENTER);
  rect(mouseX+random(-10,10), mouseY + random(-10,10), size, size);
}

//  gif.position(1380, 32);
  //gif.size(1080, 1920);
//}

function check(){
  if(mouseX < width/2 && mouseY < height/2){
      return true;
  } else {
    return false;
  }
}


function keyPressed(){
  sqSize.pop();
}
*/
function draw() {
  print(frameCount);

  var eyeLeft = [1,19,37];
  var eyeRight = [7,25,43];
  var mouth = [13,31,49];
  var reset = [6,12,18,24,30,36,42,48,54];

  if(eyeLeft.includes(frameCount)){
      face[1].resize(339 * 0.5,409 * 0.5)
      image(face[1],521,227);

    }
    if(eyeRight.includes(frameCount)){
      face[0].resize(339 * 0.5,409 * 0.5)
      image(face[0],96,337);

    }
    if(mouth.includes(frameCount)){
      face[2].resize(669 * 0.5,299 * 0.5)
      image(face[2],288,557);

    }
    if(reset.includes(frameCount)) {
      background(200,200,200);
    }


}


//  for(let i = 0; i < face.length; i++){
  //  image(face[i], i*200, 227, 339/2, 409/2); // (variable for the image, x, y, w, h)
    //}

//bullion use flag in set up, modulo function

  /* THIS IS WHEN IT IS DONE LOADING

    if(frameCount >= 500) {
    fill(200,0,0);
    triangle(150, 250, 250, 250, 200, 150);
    textSize(50);
    fill(0);
    text('Done Loading', 15, 300);
  }
  */
