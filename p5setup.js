let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//backgrounds
let Livingroom;

function preload() {
  Livingroom = loadImage("backgrounds/Untitled_Artwork.png");
}
window.preload = preload;

function setup() {
    sketch.createCanvas(1000, 700);
    sketch.frameRate(30);
  }
  window.setup = setup;

  function windowResized() {
    sketch.resizeCanvas(1000, 700);
  }
  window.addEventListener("resize", windowResized);

  export {
    Livingroom
  };