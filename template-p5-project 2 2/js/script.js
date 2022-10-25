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



function setup() {

createCanvas(1080, 1920);
background(200,200,200);


}

function mousePressed(){
  clickCounter++;
  print(clickCounter);
  print(mouseX,mouseY);

  ale[0] = frameCount(1);
  ale[1] = frameCount(28);

}


function draw(){

  gif.position(1380, 32);
  gif.size(1080, 1920);
}

/*function draw() {
  print(frameCount);


  if(frameCount = ale){
      face[1].resize(339 * 0.5,409 * 0.5)
      image(face[1],521,227);

    }
    else if(frameCount == 6 || 28) {
      background('pink')
    }

    if(frameCount == 7 || 29){
      face[0].resize(339 * 0.5,409 * 0.5)
      image(face[0],96,337);

    }
    else if(frameCount == 12 || 24) {
      background('pink')
    }
    if(frameCount == 13 || 25){
      face[2].resize(669 * 0.5,299 * 0.5)
      image(face[2],288,557);

    }
    else if(frameCount == 18 || 30) {
      background('pink')
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
