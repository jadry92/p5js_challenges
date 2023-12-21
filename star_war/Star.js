/**
  * @param {p5} ctx
  */


class Star {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.random(-this.ctx.width/2, this.ctx.width/2);
    this.y = this.ctx.random(-this.ctx.height/2, this.ctx.height/2);
    this.z = this.ctx.random(this.ctx.width);
    this.pz = this.z;
  }

  show() {
    this.ctx.fill(255);
    const sx = this.ctx.map(this.x / this.z, 0, 1, 0, this.ctx.width);
    const sy = this.ctx.map(this.y / this.z, 0, 1, 0, this.ctx.height);
    const px = this.ctx.map(this.x / this.pz, 0, 1, 0, this.ctx.width);
    const py = this.ctx.map(this.y / this.pz, 0, 1, 0, this.ctx.height);
    this.ctx.stroke(255);

    this.ctx.line(px, py, sx, sy);
  }

  update(speed) {
    this.pz = this.z;
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = this.ctx.width;
      this.x = this.ctx.random(-this.ctx.width/2, this.ctx.width/2);
      this.y = this.ctx.random(-this.ctx.height/2, this.ctx.height/2);
      this.pz = this.z;
    }
  }
}

export default Star;
