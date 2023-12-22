class Drop {

  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.random(0, this.ctx.width);
    this.y = this.ctx.random(-100, -10);
    this.y_speed = this.ctx.random(4, 10);
    this.length = this.ctx.random(4,10);
  }


  show() {
    this.ctx.line(this.x, this.y, this.x, this.y + this.length);
    this.ctx.stroke(138, 43, 226);
  }

  fall() {
    this.y = this.y + this.y_speed;
    var grav = this.ctx.map(this.length, 4, 10, 0, 0.2);
    this.y_speed = this.y_speed + grav;

    if (this.y > this.ctx.height) {
      this.y = this.ctx.random(-200, -100);
      this.y_speed = this.ctx.random(4, 10);
    }
  }
}

export default Drop;
