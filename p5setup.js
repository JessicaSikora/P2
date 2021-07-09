let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//start
let hands;

//logo
let logo;

//textbox
let textBoxBlue;
let textBoxBabyblue;
let textBoxLightpink;
let textBoxPink;
let textBoxPeach;

//backgrounds
let livingroom;
let house;
let houseDay;
let houseNight;

//Frank
let happyFrank;
let hurtFrank;
let confusedFrank;
let pissedFrank;
let flusteredFrank;
let tiredFrank;

//Annegret
let happyAnnegret;
let smileAnnegret;
let angryAnnegret;
let superangryAnnegret;
let pissedAnnegret;
let cryingAnnegret;
let sternAnnegret;

let Michael;
let doorBell;

function preload() {
  textBoxBlue = loadImage("backgrounds/textbox-blue.png");
  textBoxBabyblue = loadImage("backgrounds/textbox-babyblue.png");
  textBoxLightpink = loadImage("backgrounds/textbox-lightpink.png");
  textBoxPink = loadImage("backgrounds/textbox-pink.png");
  textBoxPeach = loadImage("backgrounds/textbox-peach.png");

  livingroom = loadImage("backgrounds/livingroom.png");
  house = loadImage("backgrounds/house.png");
  houseDay = loadImage("backgrounds/houseDay.png");
  houseNight = loadImage("backgrounds/houseNight.png");

  happyFrank = loadImage("characters/Happy-Frank.png");
  hurtFrank = loadImage("characters/Blauer-Fleck-Kratzer.png");
  confusedFrank = loadImage("characters/Frank-confused.png");
  pissedFrank = loadImage("characters/Frank-genervt.png");
  flusteredFrank = loadImage("characters/Frank-verlegen.png");
  tiredFrank = loadImage("characters/Frank-Eye-bags-min.png");

  happyAnnegret = loadImage("characters/Annegret-smiling.png");
  smileAnnegret = loadImage("characters/Annegret-bright-smile.png");
  angryAnnegret = loadImage("characters/Annegret-angry-red-Face.png");
  superangryAnnegret = loadImage("characters/Annegret-red_face.png");
  pissedAnnegret = loadImage("characters/Annegret-pissed-taller.png");
  cryingAnnegret = loadImage("characters/Annegret-crying.png");
  sternAnnegret = loadImage("characters/Annegret-verhärtet.png");

  Michael = loadImage("characters/Michael.png");
  hands = loadImage("backgrounds/Holding-hands.png");
  logo = loadImage("backgrounds/Logo-transparent.png");
  doorBell = loadImage("backgrounds/doorbell.png");
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
  textBoxBlue,
  textBoxBabyblue,
  textBoxLightpink,
  textBoxPink,
  textBoxPeach,
  livingroom,
  house,
  houseDay,
  houseNight,
  happyFrank,
  hurtFrank,
  confusedFrank,
  pissedFrank,
  flusteredFrank,
  tiredFrank,
  happyAnnegret,
  smileAnnegret,
  superangryAnnegret,
  pissedAnnegret,
  cryingAnnegret,
  sternAnnegret,
  Michael,
  hands,
  logo,
  doorBell,
};
