let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

function setup() {
    sketch.createCanvas(1330, 750);
    sketch.frameRate(30);
  }

  function windowResized() {
    sketch.resizeCanvas(1330, 750);
  }
  window.addEventListener("resize", windowResized);