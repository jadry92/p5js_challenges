import p5 from 'p5';
import Drop from './Drop';

const sketch = (p) => {

  const rainCount = 500;
  let rain = new Array(rainCount);

  p.setup = () => {
    p.createCanvas(400, 400);
    for (let i = 0; i < rainCount; i++) {
      rain[i] = new Drop(p);
    }
  }

  p.draw = () => {
    p.background(230, 230, 250);
    for (let i = 0; i < rainCount; i++) {
      rain[i].show();
      rain[i].fall();
    }
  }

}

new p5(sketch, 'sk-purple-rain');
