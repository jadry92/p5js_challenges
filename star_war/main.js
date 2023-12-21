import p5 from 'p5';
import Star from './Star';


const speed = 5;
const numStars = 800;
let star = new Array(numStars);

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(300, 300);
    for (let i = 0; i < numStars; i++) {
      star[i] = new Star(p);
    }
  };

  p.draw = () => {
    p.background(0);
    p.translate(p.width/2, p.height/2);
    for (let i = 0; i < numStars; i++) {
      star[i].show();
      star[i].update(speed);
    }
  };
}

new p5(sketch, 'sk-star-war-animation');

