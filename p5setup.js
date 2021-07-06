let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//start
let hands;

//backgrounds
let Livingroom;

//Frank
let happyFrank;
let hurtFrank;
let confusedFrank;
let pissedFrank;
let flusteredFrank;


let happyAnnegret;
let smileAnnegret;
let angryAnnegret;
let superangryAnnegret;
let pissedAnnegret;
let cryingAnnegret;


function preload() {
  Livingroom = loadImage("backgrounds/Untitled_Artwork.png");
  happyFrank = loadImage("characters/Happy-Frank.png");
  hurtFrank = loadImage("characters/Blauer-Fleck-Kratzer.png");
  confusedFrank = loadImage("characters/Frank-confused.png");
  pissedFrank = loadImage("characters/Frank-genervt.png");
  flusteredFrank = loadImage("characters/Frank-verlegen.png");
  happyAnnegret = loadImage("characters/Annegret-smiling.png");
  smileAnnegret = loadImage("characters/Annegret-bright-smile.png");
  angryAnnegret = loadImage("characters/Annegret-angry-red-Face.png");
  superangryAnnegret = loadImage("characters/Annegret-red_face.png");
  pissedAnnegret = loadImage("characters/Annegret-pissed-taller.png");
  cryingAnnegret = loadImage("characters/Annegret-crying.png");
  hands = loadImage("backgrounds/Holding-hands-light-transparent-min.png");
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
    hurtFrank,
    confusedFrank,
    pissedFrank,
    flusteredFrank,
    happyAnnegret,
    smileAnnegret,
    superangryAnnegret,
    pissedAnnegret,
    cryingAnnegret,
    hands
  };