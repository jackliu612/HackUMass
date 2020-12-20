// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Snowfall
// Edited Video: https://youtu.be/cl-mHFCGzYk

class Snowflake {
  constructor(sx, sy, img, p) {
    this.p = p;
    let x = sx || this.p.random(width);
    let y = sy || this.p.random(-100, -10);
    this.img = img;
    this.pos = this.p.createVector(x, y);
    this.vel = this.p.createVector(0, 0);
    this.acc = this.p.createVector();
    this.angle = this.p.random(this.p.TWO_PI);
    this.dir = this.p.random(1) > 0.5 ? 1 : -1;
    this.xOff = 0;
    this.r = this.getRandomSize();
  }

  applyForce(force) {
    // Parallax Effect hack
    let f = force.copy();
    f.mult(this.r);

    this.acc.add(f);
  }

  randomize() {
    let x = this.p.random(this.p.width);
    let y = this.p.random(-100, -10);
    this.pos = this.p.createVector(x, y);
    this.vel = this.p.createVector(0, 0);
    this.acc = this.p.createVector();
    this.r = this.getRandomSize();
  }

  update() {
    this.xOff = this.p.sin(this.angle * 2) * 2 * this.r;

    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y > this.p.height + this.r) {
      this.randomize();
    }

    // Wrapping Left and Right
    if (this.pos.x < -this.r) {
      this.pos.x = this.p.width + this.r;
    }
    if (this.pos.x > this.p.width + this.r) {
      this.pos.x = -this.r;
    }

    this.angle += (this.dir * this.vel.mag()) / 200;
  }

  render() {
    this.p.push();
    this.p.translate(this.pos.x + this.xOff, this.pos.y);
    this.p.rotate(this.angle);
    this.p.imageMode(this.p.CENTER);
    this.p.image(this.img, 0, 0, this.r, this.r);
    this.p.pop();
  }

  getRandomSize() {
    let r = this.p.pow(this.p.random(0, 1), 3);
    return this.p.constrain(r * 32, 2, 32);
  }
}
