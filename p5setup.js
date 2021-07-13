let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//start
let hands;
let logo;

//textbox
let textBoxBlue;
let textBoxBabyblue;
let textBoxLightpink;
let textBoxPink;
let textBoxPeach;

//backgrounds
let livingroom;
let doorBell;
let house;
let houseDay;
let houseNight;
let bedDay;
let bedNight;
let police;
let market;
let hallway;
let hallwayDoor;

//Frank
let happyFrank;
let happyFrank2;
let hurtFrank;
let confusedFrank;
let pissedFrank;
let flusteredFrank;
let tiredFrank;
let phoneFrank;

//Annegret
let happyAnnegret;
let smileAnnegret;
let angryAnnegret;
let superangryAnnegret;
let pissedAnnegret;
let cryingAnnegret;
let sternAnnegret;

let Michael;

//fonts
let fontA;
let fontG;

function preload() {
  logo = loadImage("backgrounds/LogoTransparent.png");
  hands = loadImage("backgrounds/Holding-hands.png");

  //textbox
  textBoxBlue = loadImage("textbox/boxBlu.png");
  textBoxBabyblue = loadImage("textbox/boxYell.png");
  textBoxLightpink = loadImage("textbox/boxMag.png");
  textBoxPink = loadImage("textbox/boxPi.png");
  textBoxPeach = loadImage("textbox/boxOr.png");

  //backgrounds
  livingroom = loadImage("backgrounds/livingroom.png");
  doorBell = loadImage("backgrounds/doorbell.png");
  house = loadImage("backgrounds/house.png");
  houseDay = loadImage("backgrounds/houseDay.png");
  houseNight = loadImage("backgrounds/houseNight.png");
  bedDay = loadImage("backgrounds/bedDay.png");
  bedNight = loadImage("backgrounds/bedDark.png");
  police = loadImage("backgrounds/housePolice.png");
  market = loadImage("backgrounds/markt.png");
  hallway = loadImage("backgrounds/Hallway0814.png");
  hallwayDoor = loadImage("backgrounds/Hallway0811.png");

  //Frank
  happyFrank = loadImage("characters/Happy-Frank.png");
  happyFrank2 = loadImage("characters/Frank-happy-shorts.png");
  hurtFrank = loadImage("characters/Blauer-Fleck-Kratzer.png");
  confusedFrank = loadImage("characters/Frank-confused.png");
  pissedFrank = loadImage("characters/Frank-genervt.png");
  flusteredFrank = loadImage("characters/Frank-verlegen.png");
  tiredFrank = loadImage("characters/Frank-Eye-bags-min.png");
  phoneFrank = loadImage("characters/Frank-Phone.png");

  //Annegret
  happyAnnegret = loadImage("characters/Annegret-smiling.png");
  smileAnnegret = loadImage("characters/Annegret-bright-smile.png");
  angryAnnegret = loadImage("characters/Annegret-angry-red-Face.png");
  superangryAnnegret = loadImage("characters/Annegret-red_face.png");
  pissedAnnegret = loadImage("characters/Annegret-pissed-taller.png");
  cryingAnnegret = loadImage("characters/Annegret-crying.png");
  sternAnnegret = loadImage("characters/Annegret-verhärtet.png");

  Michael = loadImage("characters/Michael.png");
  doorBell = loadImage("backgrounds/doorbell.png");

  //fonts
  fontA = loadFont("font/American Typewriter Regular.ttf");
  fontG = loadFont("font/Gill Sans.otf");
}
window.preload = preload;

function setup() {
  sketch.createCanvas(1000, 700);
  sketch.frameRate(30);
  textFont(fontG);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(1000, 700);
}
window.addEventListener("resize", windowResized);

export {
  logo,
  hands,
  textBoxBlue,
  textBoxBabyblue,
  textBoxLightpink,
  textBoxPink,
  textBoxPeach,
  livingroom,
  doorBell,
  house,
  houseDay,
  houseNight,
  bedDay,
  bedNight,
  police,
  market,
  hallway,
  hallwayDoor,
  happyFrank,
  happyFrank2,
  hurtFrank,
  confusedFrank,
  pissedFrank,
  flusteredFrank,
  tiredFrank,
  phoneFrank,
  happyAnnegret,
  smileAnnegret,
  superangryAnnegret,
  pissedAnnegret,
  cryingAnnegret,
  sternAnnegret,
  Michael,
  fontA,
  fontG
};
