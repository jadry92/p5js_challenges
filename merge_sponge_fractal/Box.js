class Box {

  constructor(x, y, z, r, ctx) {
    this.ctx = ctx;
    this.pos = this.ctx.createVector(x, y,z);
    this.r = r;
  }

  generate() {
    let boxes = [];
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        for (let z = -1; z < 2; z++) {
          let sum = this.ctx.abs(x) + this.ctx.abs(y) + this.ctx.abs(z);
          let newR = this.r / 3;
          if (sum > 1) {
            let b = new Box(this.pos.x + x * newR, this.pos.y + y * newR, this.pos.z + z * newR, newR, this.ctx);
            boxes.push(b);
          }
        }
      }
    }
    return boxes;
  }

  show() {
    this.ctx.push();
    this.ctx.translate(this.pos.x, this.pos.y, this.pos.z);
    this.ctx.noStroke();
    this.ctx.fill(255);
    this.ctx.box(this.r);
    this.ctx.pop();
  }
}

export default Box;
