/* eslint-disable linebreak-style */
let s;
const scl = 20;

let food;

let direction = 'right';

function setup() {
  createCanvas(600, 600);
  s = new snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  const cols = floor(width / scl);
  const rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (direction === 'right' && (keyCode === LEFT_ARROW)) {
    s.dir(1, 0);
    return;
  } if (direction === 'left' && (keyCode === RIGHT_ARROW)) {
    s.dir(-1, 0);
    return;
  } if (direction === 'up' && (keyCode === DOWN_ARROW)) {
    s.dir(0, 1);
    return;
  } if (direction === 'down' && (keyCode === UP_ARROW)) {
    s.dir(0, -1);
    return;
  }

  if (keyCode === UP_ARROW) {
    direction = 'up';
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    direction = 'down';
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    direction = 'right';
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    direction = 'left';
    s.dir(-1, 0);
  }
}
