import p5 from 'p5';
import Box from './Box';

const sketch = (p) => {
  let sponge = [];
  let angle = 0;
  
  let count = 0;
  const maxCount = 150;
 
  let count_iter = 0;
  const max_iter = 2;

  p.setup = () => {
    p.createCanvas(500,500, p.WEBGL);
    const box = new Box(0, 0, 0, 200, p);
    sponge.push(box);
    p.translate(p.width/2, p.height/2);
  };

  p.draw = () => {
    p.background(51);
    p.stroke(255);
    p.noFill();
    p.lights();
    p.rotateX(angle);
    p.rotateY(angle * 0.3);
    p.rotateZ(angle * 0.5);
    for (let b of sponge) {
      b.show();
    }
    angle += 0.01;
    count++;
    if (count > maxCount) {
      generate();
      count = 0;
      count_iter++;
    }

    if (count_iter > max_iter) {
      sponge = [];
      const box = new Box(0, 0, 0, 200, p);
      sponge.push(box);
      count_iter = 0;
    }
  };

  const generate = () => {
    const next = [];
    for (let b of sponge) {
      const newBoxes = b.generate();
      next.push(...newBoxes);
    }
    sponge = next;
  }
}

new p5(sketch, "sk-merge-sponge-fractal");
