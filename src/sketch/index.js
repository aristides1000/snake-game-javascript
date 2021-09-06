/* export default function sketch(s) {
  let x, y, backgroundColor;

  const width = 500;
  const height = 500;

  s.setup = () => {
    s.createCanvas(width, height);
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

    x = s.random(width);
    y = height / 2;
  };

  s.draw = () => {
    s.background(backgroundColor);
    s.fill(s.color(255, 0, 0));
    s.ellipse(x, y, 100, 100);

    x = (x + 1) % width;
  };

  s.mousePressed = () => {
    backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
  };
}
 */

export default function snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.score = 0;
  this.highScore = 0;
  this.total = 0;
  this.tail = [];

  this.onload = () => {
    document.getElementById('openingHighScore').textContent = this.highScore;
  };

  this.eat = (pos) => {
    const d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total += 1;
      this.addScore();
      return true;
    }
    return false;
  };

  this.addScore = () => {
    this.score += 1 * 100;
    document.getElementById('mainScoreGame').textContent = this.score;
    this.updateHighScore();
    document.getElementById('mainHighScoreGame').textContent = this.highScore;
  };

  this.dir = (x, y) => {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.death = () => {
    for (let i = 0; i < this.tail.length; i += 1) {
      const pos = this.tail[i];
      const d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.gameOver();
        this.restart();
      }
    }
  };

  this.gameOver = () => {
    this.updateHighScore();
    document.getElementById('gameOverScore').textContent = this.score;
    document.getElementById('gameOverHighScore').textContent = this.highScore;
    document.getElementById('canvasDisplay').classList.add('d-none');
    document.getElementById('gameOver').classList.remove('d-none');
  };

  this.updateHighScore = () => {
    this.highScore = this.score > this.highScore ? this.score : this.highScore;
  };

  this.restart = () => {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.score = 0;
    this.tail = [];
  };

  this.update = () => {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i += 1) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.show = () => {
    fill(200);
    for (let i = 0; i < this.tail.length; i += 1) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };
}
