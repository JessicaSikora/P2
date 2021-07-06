let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//backgrounds
let Livingroom;
let happyFrank;
let happyAnnegret;

function preload() {
  Livingroom = loadImage("backgrounds/Untitled_Artwork.png");
  happyFrank = loadImage("characters/Happy-Frank.png");
  happyAnnegret = loadImage("characters/Annegret-smiling.png");
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
    Livingroom,
    happyFrank,
    happyAnnegret
  };