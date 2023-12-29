import p5 from 'p5';
import Cell from './Cell';

const sketch = (p) => {
  let cells = [];

  
  p.setup = () => {
    p.createCanvas(500, 500);
    cells.push(new Cell(p));
  };

  p.draw = () => {
    p.background(220);
    cells.forEach(cell => {
      cell.move();
      cell.show();
    });
  };

  p.mousePressed = (e) => {
    for(let i =0; i < cells.length; i++) {
      if (cells[i].clicked(p.mouseX, p.mouseY)) {
        let newCells = cells[i].mitosis();
        cells = cells.concat(newCells);
        cells.splice(i, 1);
        console.log(cells)
        break;
      }
    }
  }
}

new p5(sketch, "sk-mitosis-cells");
