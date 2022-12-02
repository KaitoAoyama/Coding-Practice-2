// variables
let r ;
let g ;
let b ;

function setup() {
//creating canvas
  createCanvas(500,600);

//setting the rgb variable to random numbers
  r = random(256);
  g = random(256);
  b = random(256);
  
//setting the babkground
  background('lightblue');
}


//draw circle and text and fills the color
function draw() {
  fill(r,g,b);
  circle(250, 300, 250);
  textSize(48)
  textStyle(BOLD)
  text('Click to change color',5,100);
}

//mouse click changes the rgb of the fill
function mouseClicked() {
  r = random(256);
  g = random(256);
  b = random(256);
}