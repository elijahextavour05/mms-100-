//The setup function only happens once
var brooklyn= 0


function setup() {
	createCanvas(500,500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseY,225,255); //an RGB color for the canvas' background
  //circle
  stroke(0,62,255); // an RGB color for the circle's border
  strokeWeight (5);
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(100,100,brooklyn,brooklyn); // center of canvas,

  rect (mouseX-25,mouseY-25,50,50);
  line (brooklyn,200,400,brooklyn);
  triangle (300,110,230,50,175,mouseX,mouseY);
  textSize (100);
  textFont("Helvetica");
  text('Shapes',25,300);

}

function mousePressed () {
  if (brooklyn >= 250)
    {brooklyn=0;}
  else {
    brooklyn=brooklyn+10;
  }
}
