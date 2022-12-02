// You can create custom variables here
let r ;
let g ;
let b ;

function setup() {
  createCanvas(500,600);
  //below is anther example that creates a canvas the heigth and width of the browser window
  //createCanvas(windowWidth, windowHeight);
  r = random(256);
  g = random(256);
  b = random(256);
  //setting the ba
  background('lightblue');
}


function draw() {
  fill(r,g,b);
  // fill(10);
  circle(250, 300, 250); 
}

function mouseClicked() {
  r = random(256);
  g = random(256);
  b = random(256);
}