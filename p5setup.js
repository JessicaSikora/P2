/**
 * basically everything combined in one document, so there is less confusion then there already is
 * also function preload, so everything loads beforehand and the simulation can just run, who would´ve guessed
 */
let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

//start
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
let housePopo;
let market;
let hallway;
let hallwayDoor;

//Frank
let happyFrank;
let happyFrank2;
let hurtFrank;
let confusedFrank;
let pissedFrank;
let tiredFrank;
let phoneFrank;

//Annegret
let happyAnnegret;
let smileAnnegret;
let cryingAnnegret;
let sternAnnegret;
let calmAnnegret;

let Michael;

//sounds
let crash;
let groceryStore;
let notification;
let police;
let ringOne;
let ringTwo;
let doorbellS;

//music
let oblivion;
let nostalgia;
let indie;
let skyward;

//fonts
let fontA;
let fontG;

function preload() {
  logo = loadImage("backgrounds/LogoTransparent.png");

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
  housePopo = loadImage("backgrounds/housePolice.png");
  market = loadImage("backgrounds/markt.png");
  hallway = loadImage("backgrounds/Hallway0814.png");
  hallwayDoor = loadImage("backgrounds/Hallway0811.png");

  //Frank
  happyFrank = loadImage("characters/Happy-Frank.png");
  happyFrank2 = loadImage("characters/Frank-happy-shorts.png");
  hurtFrank = loadImage("characters/Blauer-Fleck-Kratzer.png");
  confusedFrank = loadImage("characters/Frank-confused.png");
  pissedFrank = loadImage("characters/Frank-genervt.png");
  tiredFrank = loadImage("characters/Frank-Eye-bags-min.png");
  phoneFrank = loadImage("characters/Frank-Phone.png");

  //Annegret
  happyAnnegret = loadImage("characters/Annegret-smiling.png");
  smileAnnegret = loadImage("characters/Annegret-bright-smile.png");
  cryingAnnegret = loadImage("characters/Annegret-crying.png");
  sternAnnegret = loadImage("characters/Annegret-verhärtet.png");
  calmAnnegret = loadImage("characters/Annegret-calmed_-down.png");

  Michael = loadImage("characters/Michael.png");
  doorBell = loadImage("backgrounds/doorbell.png");

  //sounds
  crash = loadSound("sounds/crash.mp3");
  groceryStore = loadSound("sounds/grocery_store.mp3");
  notification = loadSound("sounds/notification.mp3");
  police = loadSound("sounds/police.mp3");
  ringOne = loadSound("sounds/ringing1.mp3");
  ringTwo = loadSound("sounds/ringing2.mp3");
  doorbellS = loadSound("sounds/doorbell.mp3");

  //music
  oblivion = loadSound("music/sb_beautifuloblivion.mp3");
  nostalgia = loadSound("music/Nostalgic Music.mp3");
  indie = loadSound("music/Fresh Air Master2.wav");
  skyward = loadSound("music/sb_skyward.mp3");

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
  crash,
  groceryStore,
  notification,
  police,
  ringOne,
  ringTwo,
  doorbellS,
  oblivion,
  nostalgia,
  indie,
  skyward,
  logo,
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
  housePopo,
  market,
  hallway,
  hallwayDoor,
  happyFrank,
  happyFrank2,
  hurtFrank,
  confusedFrank,
  pissedFrank,
  tiredFrank,
  phoneFrank,
  happyAnnegret,
  smileAnnegret,
  cryingAnnegret,
  sternAnnegret,
  calmAnnegret,
  Michael,
  fontA,
  fontG
};
