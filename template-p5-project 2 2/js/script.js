/**
Instillation
Damian Larice
*/

"use strict";

let face = []

let myVar = 0;
let clickCounter = 0;


function preload() {


face[0] = loadImage('assets/images/left eye.png');
face[1] = loadImage('assets/images/right eye.png');
face[2] = loadImage('assets/images/mouth.png');

let appear = 2;
let dissapear = 4;


}


function setup() {

createCanvas(1000, 1000);
background(240,240,240);


}

function mousePressed(){
  clickCounter++;
  print(clickCounter);
  print(mouseX,mouseY);



}

function draw() {
  print(frameCount);
//  for(let i = 0; i < face.length; i++){
  //  image(face[i], i*200, 227, 339/2, 409/2); // (variable for the image, x, y, w, h)
    //}

    if(frameCount % (appear * 20) == 0){
        face[1].resize(339 * 0.5,409 * 0.5)
        image(face[1],521,227);

      }
      else if(frameCount % (dissapear * 30) == 0) {
        background('pink')
      }

      if(frameCount == 7){
        face[0].resize(339 * 0.5,409 * 0.5)
        image(face[0],96,337);

      }
      else if(frameCount == 12) {
        background('pink')
      }
      if(frameCount == 13){
        face[2].resize(669 * 0.5,299 * 0.5)
        image(face[2],288,557);

      }
      else if(frameCount == 18) {
        background('pink')
      }
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
}










/* function mousePressed(){
  if(clickCounter < 50){
    fill(random(255));
    ellipse(mouseX, mouseY, 50, 50);
  }
  clickCounter++;
  print(clickCounter);
}

/*
let myVar = 0;
function draw(){
 if(mouseIsPressed ) {
 fill(0);
 rect(random(width), random(height), 100, 100);
 if(myVar < 20 ) {
 background(255);
 }
 }
}
function mouse
hiding background  */









/* //IN CLASS
if(mouseIsPressed || keyIsPressed && keyCode == 72){

    image(leye, random(0,1000), random(0,1000));
    //put in mouseX, mouseY for x and y to follow mouse
  }
  if(myVar < 100 ) {
    fill(random(255));
    ellipse(random(height), random(width), 100, 100);
    myVar++;
  } else {
    noStroke();
    fill(255,255,255);
    rect(random(width), random(height), 100, 100);
  }
  // put print statements in else and if to see what is happening

*/
