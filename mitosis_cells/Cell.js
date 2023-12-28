
class Cell {
  constructor(ctx, Vpos, r, color, Vvel) {
    this.ctx = ctx; 

    this.color = color ? color : this.ctx.color(this.ctx.random(255), this.ctx.random(255), this.ctx.random(255));
    this.r = r ? r : 80;
    if (Vpos) {
      this.Vpos = Vpos;
    } else {
      const x = this.ctx.random(this.r, this.ctx.width - this.r);
      const y = this.ctx.random(this.r, this.ctx.height - this.r);
      this.Vpos = this.ctx.createVector(x, y);
    }
    if (Vvel) {
      this.Vvel = Vvel;
    } else {
      this.Vvel = this.ctx.createVector(0, 0);
    }
  }

  show() {
    this.ctx.noStroke();
    this.ctx.fill(this.color);
    this.ctx.ellipse(this.Vpos.x, this.Vpos.y, this.r*2, this.r*2);
  }

  move() {
    if(this.Vvel.mag() > 0.01) {
      this.Vpos.add(this.Vvel);
      this.Vvel.mult(0.9);
    } else {
      let v = this.ctx.createVector(this.ctx.random(-1, 1), this.ctx.random(-1, 1));
      this.Vpos.add(v);
    }
  }

  mitosis() {
    const mag = 10;
    const angle_1 = this.ctx.random(0, this.ctx.PI);
    const angle_2 = angle_1 + this.ctx.PI;
    const v1 = this.ctx.createVector(mag * this.ctx.cos(angle_1), mag * this.ctx.sin(angle_1));
    const v2 = this.ctx.createVector(mag * this.ctx.cos(angle_2), mag * this.ctx.sin(angle_2));
    console.log(angle_1, angle_2);
    return [
      new Cell(this.ctx, this.Vpos.copy(), this.r*0.8, this.color, v1),
      new Cell(this.ctx, this.Vpos.copy(), this.r*0.8, this.color, v2),
    ];
    
  }

  clicked(x, y) {
    const d = this.ctx.dist(this.Vpos.x, this.Vpos.y, x, y);
    return d <= this.r;
  }

}

export default Cell;
