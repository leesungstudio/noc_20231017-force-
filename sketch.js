let ball;
let windD
function setup() {
  createCanvas(400, 400);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 1);
  ball.addForce(gravity);
  
  if(mouseX > width/2){
     windD = 1;
  }
  if(mouseX < width/2){
     windD = -1;
  }
  let wind = createVector(windD, 0);
  if(mouseIsPressed){
    ball.addForce(wind);
  }

  ball.update();
  ball.show();
}
