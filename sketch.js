let ball;
let windD
function setup() {
  createCanvas(800, 800);

  ball = new Particle();
}


function draw() {
  background(220);
  ball.update();
  ball.show();
}

function mouseClicked() {   
  
  ball.clike(mouseX,mouseY);
  
}
