let colors = [
  "#73401C",
  "#4D2B12",
  "#653818",
  "#835C3B",
  "#6D4D30",
  "Black",
  "#49823B",
  "#61823B",
  "#3B825C",
  "#EBC7B2",
];
let bearColors = ["#73401C", "#4D2B12", "#653818", "#835C3B", "#6D4D30"];
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("myContainer")
}

function draw() {
  background(random(colors));

  drawCreature(0, 0);
  noLoop();
}

function drawCreature(x, y) {
  drawBody(width / 2, height / 2 + 180);
  drawHead(width / 2, height / 2 - 40);
  drawFeature(width / 2, height - 40);
}

function drawHead(x, y) {
  rectMode(CENTER);
  fill(colors[4]);
  let earSize = random(50, 100)
  let earSize2 = random(30, 50)
  push();
  strokeWeight(5);
  translate(x, y);
  //ears
  ellipse(80, -110, earSize, 95);
  ellipse(-80, -110, earSize, 95);
  fill(colors[1]);
  noStroke();
  ellipse(80, -110, earSize2, 50);
  ellipse(-80, -110, earSize2, 50);
  fill(colors[4]);
}

function drawFeature(x, y) {
  //head
  strokeWeight(5);
  stroke(0);
  ellipse(0, 8, 335, 280);
  //eyes
  fill(colors[5]);
  ellipse(25, -40, 20, 22);
  ellipse(-25, -40, 20, 22);
  //mouth
  noStroke();
  fill(colors[9]);
  ellipse(0, 25, 90, 100);
  fill(colors[5]);
  ellipse(0, -5, 34, 25);
  triangle(-15, -10, 0, 30, 15, -10);
  stroke(0);
  strokeWeight(10);
  line(0, 10, 0, 25);
  line(1, 25, 15, 38);
  line(1, 25, -15, 45);
  pop();
}

function drawBody(x, y) {
  fill(colors[4]);
  push();
  strokeWeight(5);
  translate(x, y);
  arc(0, 50, 290, 370, 21, QUARTER_PI, CHORD);
  stroke(0);
  strokeWeight(6);
  line(70, 100, 70, 5);
  line(-70, 200, -70, 0);
  pop();
}
