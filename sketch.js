//Veronica Lorenzini
let a = 0; //increment value

function setup() {
  let canvas = createCanvas(width*2.5, height*2.5);
  canvas.parent('p5Animation');
}

function draw() {
  noFill();
  strokeWeight(0.5);
  //translate to center of canvas
  translate(width/2, height/2);
  //waves
  wave(a, 200, 82, 60, 84, 200, 6);
  wave(a/1.5, 120, 102, 80, 104, 200, 9);
  //dots
  dots(250, 2);
  //increment
  a += 0.1;
  //background with transparency
  background(255, 255, 232, 40);
}

//make wave
function wave(a, points, r, g, b, alpha, rad) {
  //rotate
  rotate(a/10);
  stroke(r, g, b, alpha);
  beginShape();
  //polar coordinates
  for (let i = 0; i <= points; i++) {
    let angle = i * TWO_PI/points;
    let x = cos(angle * sin(a/20)) * height/rad + cos(angle * sin(a/8)) * height/rad;
    let y = sin(angle * sin(a/20)) * height/rad;
    let x2 = cos(angle * sin(a/20)) * height/(rad-1) + cos(angle * sin(a/10)) * height/rad;
    let y2 = sin(angle) * height/3;
    //shapes
    vertex(x2, y2);
    line(x, y, x2, y2);
    line(x, y, 0, 0);
  }
  endShape(); 
}

//make dots
function dots(points, w) {
  stroke(67, 50, 62, 100);
  fill(67, 50, 62, 100); 
  //polar coordinates
  for (let i = 0; i <= points; i++) {
    let angle = i * TWO_PI / points * map(sin(a/10), -1, 1, 0, 3.5);
    let x = cos(angle*0.9) * width/5;
    let y = sin(angle*0.6) * height/5 + sin(angle*0.6) * height/5;
    //shapes
    ellipse(x, y, w);  
  }
}