/** 
 * far too long list of variables imported from other documents / classes
 */
import {
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
} from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import Warning from "./warning.js";
import End from "./end.js";
import Handler from "./handler.js";
import Doorbell from "./doorbell.js";
import { fontA, fontG } from "./p5setup.js";

// visual construction of different variables (which basically make the screens) etc
let start = new Start(410, 520, 180, 90);
let end = new End(410, 520, 180, 90);
let doorbell = new Doorbell();
let handler = new Handler(doorbell);
let trigger = new Warning(400, 450, 200, 65);
let decision1 = new Button(160, 550, 340, 130);
let decision2 = new Button(520, 550, 340, 130);
let control = new Button(175, 588, 495, 25);
let lie = new Button(255, 613, 460, 25);
let arm = new Button(340, 375, 30, 30);
let victim = new Button(350, 588, 298, 25);
let noise = new Button(20, 20, 200, 300);
let phone = new Button(580, 450, 60, 50);

let redFlags = 0;
let confidence = 0;

let soundT = 0;
// so music can properly end, same story in sfx
let musicA = 0;
let musicB = 0;

//Start Button Animation
start.animation();

/**
 * defines when which button is active
 */
function mouseClicked() {
  if (start.start === false) {
    start.mouseClicked();
  } else {
    handler.mouseClicked();
  }
  if (handler.active === handler.warning && trigger.warning === false) {
    trigger.mouseClicked();
  }
  if (
    handler.active === handler.nameplate &&
    doorbell.ok === false &&
    doorbell.name.length >= 1
  ) {
    doorbell.mouseClicked();
  }
  if (
    handler.active === handler.decisionC1 ||
    handler.active === handler.decisionH3 ||
    handler.active === handler.decisionF1 ||
    handler.active === handler.decisionF3
  ) {
    decision1.mouseClicked();
    decision2.mouseClicked();
  }
  // red flags buttons
  if (handler.active === handler.annegretC1) {
    control.mouseClicked();
  }
  if (handler.active === handler.frankE6) {
    lie.mouseClicked();
  }
  if (handler.active === handler.monologueE3) {
    arm.mouseClicked();
  }
  if (handler.active === handler.annegretF8) {
    victim.mouseClicked();
  }
  if (handler.active === handler.monologueG2) {
    noise.mouseClicked();
  }
  if (handler.active === handler.monologueH8) {
    phone.mouseClicked();
  }

  if (handler.active === handler.end) {
    end.mouseClicked();
  }
}
window.mouseClicked = mouseClicked;

// so user can acutally type the name
function keyPressed() {
  if (handler.active === handler.nameplate) {
    doorbell.keyPressed();
  }
}
window.keyPressed = keyPressed;

function sound() {
  //music
  if (handler.active === handler.monologueA1) {
    musicA++;
    if (musicA === 1) {
      indie.play();
      indie.setVolume(0.2);
      indie.loop();
    }
  }
  if (handler.active === handler.monologueB1) {
    indie.stop();
    musicA = 0;
    musicB++;
    if (musicB === 1) {
      nostalgia.play();
      nostalgia.setVolume(0.2);
      nostalgia.loop();
    }
  }
  if (handler.active === handler.frankC1) {
    nostalgia.stop();
    musicB = 0;
    musicA++;
    if (musicA === 1) {
      indie.play();
      indie.setVolume(0.2);
      indie.loop();
    }
  }
  if (handler.active === handler.playerE1) {
    indie.stop();
    musicA = 0;
    musicB++;
    if (soundT === 1) {
      groceryStore.play();
      groceryStore.setVolume(0.3);
      groceryStore.loop();
    }
  }
  if (handler.active === handler.monologueF1) {
    indie.stop();
    musicA = 0;
    musicB++;
    if (musicB === 1) {
    oblivion.play();
    oblivion.setVolume(0.3);
    oblivion.loop();
  }
  }
  if (handler.active === handler.monologueJ1) {
    musicB++;
    if (musicB === 1) {
      skyward.play();
      skyward.setVolume(0.3);
      skyward.loop();
    }
    if (handler.active === handler.monologueL5) {
      musicA++;
      if (musicB === 1) {
        skyward.stop();
        oblivion.play();
        oblivion.setVolume(0.3);
        oblivion.loop();
      }
    }
    if (handler.active === handler.start) {
      oblivion.stop();
      musicA = 0;
      musicB = 0;
    }
  }
/**
 * can only use one version of soundT because sfx dont appear back to back / number needs to be 1 so it triggers
 */
  //SFX
  if (handler.active === handler.frankD1) {
    soundT++;
    if (soundT === 1) {
      notification.setVolume(0.5);
      notification.play();
    }
    if (handler.active === handler.playerD2) {
      soundT = 0;
    }
  }

  if (handler.active === handler.monologueF1) {
    soundT++;
    notification.stop();
    soundT = 0;
  }
  if (soundT === 1) {
    doorbellS.play();
  }
  if (handler.active === handler.monologueG2) {
    soundT++;
    if (soundT === 1) {
      crash.play();
      crash.setVolume(0.5);
    }
  }
  if (handler.active === handler.monologueG4) {
    soundT = 0;
  }
  if (handler.active === handler.monologueI19) {
    soundT++;
    if (soundT === 1) {
      ringOne.play();
      ringOne.setVolume(0.5);
      ringOne.loop();
    }
  }
  if (handler.active === handler.frankI1) {
    ringOne.stop();
    soundT = 0;
  }
  if (handler.active === handler.monologueL4) {
    soundT++;
    if (soundT === 1) {
      skyward.stop();
      police.play();
      police.setVolume(0.1);
      police.loop();
    }
  }
  if (handler.active === handler.monologueL5) {
    police.stop();
    soundT = 0;
  }
}

function draw() {
  clear();
  sound();
/**
 * switch / case (is each voiceline) / break (end of case) = almost same thing as if, at least in here
 * with red flags: button over button
 */
  switch (handler.active) {
    case handler.start:
      if (start.start === true) {
        handler.active = handler.warning;
      }
      break;
    case handler.warning:
      if (trigger.warning === false) {
        trigger.display();
      } else {
        handler.active = handler.monologueA1;
      }
      break;
    //Szene 1
    case handler.monologueA1:
      image(livingroom, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueA2:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueA3:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueA4:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueA5:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretA1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueA6:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.decisionA1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      break;
    case handler.playerA1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueA7:
      image(livingroom, 15, 15, 1000, 700);
      image(smileAnnegret, 210, 240, 270, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretA2:
      image(livingroom, 15, 15, 1000, 700);
      image(smileAnnegret, 210, 240, 270, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerA2:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretA3:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerA3:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretA4:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueA8:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerA4:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankA1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueA9:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueA10:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueA11:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankA2:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerA5:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.playerA6:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.playerA7:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.playerA8:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankA3:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueA12:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    //R??ckblick
    case handler.monologueB1:
      image(house, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB2:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerB1:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.michaelB1:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxBabyblue, 90, 380, 800, 400);
      break;
    case handler.michaelB2:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxBabyblue, 90, 380, 800, 400);
      break;
    case handler.monologueB3:
      image(hallwayDoor, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB4:
      image(hallwayDoor, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB5:
      image(hallwayDoor, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB6:
      image(hallwayDoor, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerB2:
      image(hallwayDoor, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;

    case handler.nameplate:
      image(doorBell, 15, 15, 1000, 700);
      if (doorbell.ok === false) {
        doorbell.display();
      } else {
        handler.active = handler.michaelB3;
      }
      break;

    case handler.michaelB3name:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxBabyblue, 90, 380, 800, 400);
      break;
    case handler.michaelB4:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxBabyblue, 90, 380, 800, 400);
      break;
    case handler.monologueB7:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB8:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerB3:
      image(house, 15, 15, 1000, 700);
      image(Michael, 350, 170, 300, 600);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueB9:
      image(house, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB10:
      image(houseDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB11:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 380, 240, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerB4name:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 380, 240, 300, 800);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueB12:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 380, 240, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB13:
      image(houseDay, 15, 15, 1000, 700);
      image(smileAnnegret, 390, 240, 270, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretB1:
      image(houseDay, 15, 15, 1000, 700);
      image(smileAnnegret, 390, 240, 270, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueB14:
      image(houseDay, 15, 15, 1000, 700);
      image(smileAnnegret, 390, 240, 270, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretB2:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 380, 240, 300, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.frankB1:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 380, 240, 300, 800);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueB15:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB16:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretB3:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueB17:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB18:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankB2:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.frankB3:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueB19:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueB20:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretB4:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.annegretB5:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueB21:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerB5:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueB22:
      image(houseDay, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 300, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    //Szene 1.2
    case handler.frankC1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerC1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.playerC2:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueC1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretC1:
      image(livingroom, 15, 15, 1000, 700);
      image(smileAnnegret, 210, 240, 270, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPeach, 90, 380, 800, 400);
      if (control.triggered === false) {
        if (control.hitTest(mouseX, mouseY)) {
          stroke("#eb5873");
          strokeWeight(2);
          fill(0, 0, 0, 0);
          rect(175, 588, 495, 25);
          noStroke();
          fill("#eb5873");
          textSize(14);
          text("kontrollierendes Verhalten", 500, 580);
        }
      } else {
        redFlags += 1;
        handler.active = handler.monologueC2;
      }
      if (
        handler.annegretC1.triggered === true &&
        control.hitTest(mouseX, mouseY) === false
      ) {
        handler.active = handler.decisionC1;
      }
      break;
    case handler.monologueC2:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.decisionC1:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      if (decision1.triggered === true) {
        confidence += 1;
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        decision2.triggered = false;
      }
      break;
    case handler.playerC3:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankC2:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueC3:
      image(livingroom, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank, 500, 170, 320, 840);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    //Szene 2.1
    case handler.monologueD1:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueD2:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueD3:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueD4:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerD1:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankD1name:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerD2:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueD5:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    //Szene 2.2
    case handler.playerE1:
      image(market, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueE1:
      image(market, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankE1name:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerE2:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerE3:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.frankE2:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerE4:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerE5:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.frankE3:
      image(market, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerE6:
      image(market, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.frankE4:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.frankE5:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.frankE6:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      if (lie.triggered === false) {
        if (lie.hitTest(mouseX, mouseY)) {
          stroke("#eb5873");
          strokeWeight(2);
          fill(0, 0, 0, 0);
          rect(255, 613, 460, 25);
          noStroke();
          fill("#eb5873");
          textSize(14);
          text("L??ge", 500, 650);
        }
      } else {
        redFlags += 1;
        handler.active = handler.monologueE2;
      }
      if (
        handler.frankE6.triggered === true &&
        lie.hitTest(mouseX, mouseY) === false
      ) {
        handler.active = handler.monologueE3;
      }
      break;
    case handler.monologueE2:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueE3:
      image(market, 15, 15, 1000, 700);
      image(hurtFrank, 300, 170, 350, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      if (arm.triggered === false) {
        if (arm.hitTest(mouseX, mouseY)) {
          stroke("#f9f7d0");
          strokeWeight(2);
          fill(0, 0, 0, 0);
          rect(340, 375, 30, 30);
          noStroke();
          fill("#f9f7d0");
          textSize(14);
          textAlign(CENTER);
          text("Verletzung", 350, 420);
        }
      } else {
        redFlags += 1;
        handler.active = handler.playerE7;
      }
      break;
    case handler.playerE7:
      image(market, 15, 15, 1000, 700);
      image(hurtFrank, 300, 170, 350, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueE4:
      image(market, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueE5:
      image(market, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankE7:
      image(market, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerE8:
      image(market, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankE8:
      image(market, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueE6:
      image(market, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerE9:
      image(market, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueE7:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankE9:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.annegretE1:
      image(market, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueE8:
      image(market, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretE2:
      image(market, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank2, 500, 170, 320, 680);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueE9:
      image(market, 15, 15, 1000, 700);
      image(smileAnnegret, 210, 240, 270, 800);
      image(pissedFrank, 500, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretE3name:
      image(market, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(pissedFrank, 500, 170, 320, 680);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerE10:
      image(market, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank2, 500, 170, 320, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretE4:
      image(market, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank2, 500, 170, 320, 680);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.frankE10:
      image(market, 15, 15, 1000, 700);
      image(happyAnnegret, 200, 240, 300, 800);
      image(happyFrank2, 500, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueE10:
      image(market, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerE11:
      image(market, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;

    //Szene 3
    case handler.monologueF1:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueF2:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerF1:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF3:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretF1:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueF4:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretF2:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.annegretF3:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerF2:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretF4:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.annegretF5:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueF5:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueF6:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerF3:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF7:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretF6:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.annegretF7:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerF4:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretF8:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      if (victim.triggered === false) {
        if (victim.hitTest(mouseX, mouseY)) {
          stroke("#eb5873");
          strokeWeight(2);
          fill(0, 0, 0, 0);
          rect(350, 588, 298, 25);
          noStroke();
          fill("#eb5873");
          textSize(14);
          text("Invalidierung", 540, 580);
        }
      } else {
        redFlags += 1;
        handler.active = handler.monologueF;
      }
      if (
        handler.annegretF8.triggered === true &&
        // victim only textbox for red flag
        victim.hitTest(mouseX, mouseY) === false
      ) {
        handler.active = handler.annegretF9;
      }
      break;
    case handler.monologueF:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretF9:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.decisionF1:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      if (decision1.triggered === true) {
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        confidence += 1;
        decision2.triggered = false;
      }
      break;
    case handler.playerF5:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretF10:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.monologueF8:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerF6:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretF11name:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerF7:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretF12:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerF8:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF9:
      image(hallway, 15, 15, 1000, 700);
      image(calmAnnegret, 380, 240, 270, 800);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    case handler.playerF9:
      image(hallway, 15, 15, 1000, 700);
      image(cryingAnnegret, 380, 240, 250, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF10:
      image(hallway, 15, 15, 1000, 700);
      image(sternAnnegret, 380, 240, 300, 870);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.annegretF13:
      image(hallway, 15, 15, 1000, 700);
      image(sternAnnegret, 380, 240, 300, 870);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerF10:
      image(hallway, 15, 15, 1000, 700);
      image(sternAnnegret, 380, 240, 300, 870);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.annegretF14:
      image(hallway, 15, 15, 1000, 700);
      image(sternAnnegret, 380, 240, 300, 870);
      image(textBoxPeach, 90, 380, 800, 400);
      break;
    case handler.playerF11:
      image(hallway, 15, 15, 1000, 700);
      image(sternAnnegret, 380, 240, 300, 870);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF11:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueF12:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.decisionF2:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      break;
    case handler.monologueF21:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    case handler.playerF12:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF13:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankF1:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerF13:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankF2:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerF14:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankF3:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueF14:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerF15:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankF4:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.decisionF3:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      if (decision1.triggered === true) {
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        confidence += 1;
        decision2.triggered = false;
      }
      break;
    case handler.playerF16:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankF5:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerF17:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF15:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankF6name:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerF18:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF16:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerF19:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankF7:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueF17:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerF20:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF18:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankF8:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueF19:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankF9name:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerF21:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueF20:
      image(houseNight, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    //Szene 4.1
    case handler.playerG1:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueG1:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerG2:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueG2:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      // hitbox here visulized when hovering
      if (noise.triggered === false) {
        if (noise.hitTest(mouseX, mouseY)) {
          stroke("#f9f7d0");
          strokeWeight(5);
          fill(0, 0, 0, 0);
          rect(20, 20, 160, 350);
          noStroke();
          fill("#f9f7d0");
          textSize(14);
          text("lautes Krachen", 140, 400);
        }
// when red flag hitted
      } else {
        redFlags += 1;
        handler.active = handler.monologueG3;
      }
      break;
    case handler.monologueG3:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerG3:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueG4:
      image(bedNight, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    //Szene 4.2
    case handler.monologueH1:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerH1:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueH2:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankH1:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.decisionH1:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      break;
    case handler.playerH2:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueH3:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankH2:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueH4:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerH3:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankH3:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerH4:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.decisionH2:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      break;
    case handler.playerH5:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankH4:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.decisionH3:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
       /**
        * decision1 = nothing happens
        * decision2 = confindence boost
        * nothing more nothing less
        */
      if (decision1.triggered === true) {
        decision1.triggered = false;
      }
      if (decision2.triggered === true) {
        confidence += 1;
        decision2.triggered = false;
      }
      break;
    case handler.monologueH5:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerH6:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankH5:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueH6:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerH7:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueH7:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankH6:
      image(houseDay, 15, 15, 1000, 700);
      image(tiredFrank, 350, 170, 300, 620);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueH8:
      image(houseDay, 15, 15, 1000, 700);
      image(phoneFrank, 350, 170, 300, 770);
      image(textBoxPink, 90, 380, 800, 400);
      if (phone.triggered === false) {
        if (phone.hitTest(mouseX, mouseY)) {
          stroke("#eb5873");
          strokeWeight(2);
          fill(0, 0, 0, 0);
          rect(350, 588, 298, 25);
          noStroke();
          fill("#eb5873");
          textSize(14);
          textAlign(CENTER);
          text("Bildschirm", 580, 450, 60, 50);
        }
      } else {
        redFlags += 1;
        handler.active = handler.monologueH9;
      }
      break;
    case handler.monologueH9:
      image(houseDay, 15, 15, 1000, 700);
      image(phoneFrank, 350, 170, 300, 770);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankH7:
      image(houseDay, 15, 15, 1000, 700);
      image(phoneFrank, 350, 170, 300, 770);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerH8:
      image(houseDay, 15, 15, 1000, 700);
      image(phoneFrank, 350, 170, 300, 770);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankH8:
      image(houseDay, 15, 15, 1000, 700);
      image(phoneFrank, 350, 170, 300, 770);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueH10:
      image(houseDay, 15, 15, 1000, 700);
      image(phoneFrank, 350, 170, 300, 770);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankH9:
      image(houseDay, 15, 15, 1000, 700);
      image(phoneFrank, 350, 170, 300, 770);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueH11:
      image(houseDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      if (handler.monologueH11.triggered === true) {
        if (redFlags >= 1) {
          handler.active = handler.monologueI1;
        } else {
          handler.active = handler.monologueL4;
        }
      }
      break;

    //Szene 5.1
    case handler.monologueI1:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI2:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI3:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI4:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI5:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI6:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      if (handler.monologueI6.triggered === true) {
        if (control.triggered === true) {
          handler.active = handler.monologueI7;
        } else if (lie.triggered === true) {
          handler.active = handler.monologueI8;
        } else if (arm.triggered === true) {
          handler.active = handler.monologueI9;
        } else if (victim.triggered === true) {
          handler.active = handler.monologueI10;
        } else if (noise.triggered === true) {
          handler.active = handler.monologueI11;
        } else if (phone.triggered === true) {
          handler.active = handler.monologueI12;
        } else {
          handler.active = handler.monologueI14;
        }
      }
      break;
    case handler.monologueI7:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      if (handler.monologueI7.triggered === true) {
        if (lie.triggered === true) {
          handler.active = handler.monologueI8;
        } else if (arm.triggered === true) {
          handler.active = handler.monologueI9;
        } else if (victim.triggered === true) {
          handler.active = handler.monologueI10;
        } else if (noise.triggered === true) {
          handler.active = handler.monologueI11;
        } else if (phone.triggered === true) {
          handler.active = handler.monologueI12;
        } else {
          handler.active = handler.monologueI14;
        }
      }
      break;
    case handler.monologueI8:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      if (handler.monologueI8.triggered === true) {
        if (arm.triggered === true) {
          handler.active = handler.monologueI9;
        } else if (victim.triggered === true) {
          handler.active = handler.monologueI10;
        } else if (noise.triggered === true) {
          handler.active = handler.monologueI11;
        } else if (phone.triggered === true) {
          handler.active = handler.monologueI12;
        } else {
          handler.active = handler.monologueI14;
        }
      }
      break;
    case handler.monologueI9:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      if (handler.monologueI9.triggered === true) {
        if (victim.triggered === true) {
          handler.active = handler.monologueI10;
        } else if (noise.triggered === true) {
          handler.active = handler.monologueI11;
        } else if (phone.triggered === true) {
          handler.active = handler.monologueI12;
        } else {
          handler.active = handler.monologueI14;
        }
      }
      break;
    case handler.monologueI10:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      if (handler.monologueI10.triggered === true) {
        if (noise.triggered === true) {
          handler.active = handler.monologueI11;
        } else if (phone.triggered === true) {
          handler.active = handler.monologueI12;
        } else {
          handler.active = handler.monologueI14;
        }
      }
      break;
    case handler.monologueI11:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      if (handler.monologueI11.triggered === true) {
        if (phone.triggered === true) {
          handler.active = handler.monologueI12;
        } else {
          handler.active = handler.monologueI14;
        }
      }
      break;
    case handler.monologueI12:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI14:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI15:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI16:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.decisionI1:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 120, 380, 390, 400);
      image(textBoxPink, 480, 380, 390, 400);
      break;
    case handler.monologueI17:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI18:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueI19:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankI1:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerI1name:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankI2:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerI2:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankI3:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueI20:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    //Szene 5.2
    case handler.monologueJ1:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueJ2:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueJ3:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ1:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ1:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankJ2:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ2:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueJ4:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueJ5:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ3:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ3:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueJ6:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ4:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ4:
      image(hallway, 15, 15, 1000, 700);
      image(happyFrank2, 350, 170, 320, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankJ5:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ5:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      if (handler.playerJ5.triggered === true) {
        if (control.triggered === true) {
          handler.active = handler.playerJ6;
        } else if (lie.triggered === true) {
          handler.active = handler.playerJ7;
        } else if (arm.triggered === true) {
          handler.active = handler.playerJ8;
        } else if (noise.triggered === true) {
          handler.active = handler.playerJ9;
        } else if (phone.triggered === true) {
          handler.active = handler.playerJ10;
        } else {
          handler.active = handler.monologueJ7;
        }
      }
      break;
    case handler.playerJ6:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      if (handler.playerJ6.triggered === true) {
        if (lie.triggered === true) {
          handler.active = handler.playerJ7;
        } else if (arm.triggered === true) {
          handler.active = handler.playerJ8;
        } else if (noise.triggered === true) {
          handler.active = handler.playerJ9;
        } else if (phone.triggered === true) {
          handler.active = handler.playerJ10;
        } else {
          handler.active = handler.monologueJ7;
        }
      }
      break;
    case handler.playerJ7:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      if (handler.playerJ7.triggered === true) {
        if (arm.triggered === true) {
          handler.active = handler.playerJ8;
        } else if (noise.triggered === true) {
          handler.active = handler.playerJ9;
        } else if (phone.triggered === true) {
          handler.active = handler.playerJ10;
        } else {
          handler.active = handler.monologueJ7;
        }
      }
      break;
    case handler.playerJ8:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      if (handler.playerJ8.triggered === true) {
        if (noise.triggered === true) {
          handler.active = handler.playerJ9;
        } else if (phone.triggered === true) {
          handler.active = handler.playerJ10;
        } else {
          handler.active = handler.monologueJ7;
        }
      }
      break;
    case handler.playerJ9:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      if (handler.playerJ9.triggered === true) {
        if (phone.triggered === true) {
          handler.active = handler.playerJ10;
        } else {
          handler.active = handler.monologueJ7;
        }
      }
      break;
    case handler.playerJ10:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueJ7:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerJ11:
      image(hallway, 15, 15, 1000, 700);
      image(confusedFrank, 360, 170, 290, 650);
      image(textBoxLightpink, 90, 380, 800, 400);
      if (handler.playerJ11.triggered === true) {
        if (confidence >= 2 && redFlags >= 3) {
          handler.active = handler.monologueJ8;
        } else {
          handler.active = handler.frankJ11;
        }
      }
      break;
    case handler.monologueJ8:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ6:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ12:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankJ7:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ13:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueJ9:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ8:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueJ0:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerJ14:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.playerJ15:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueJ11:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ9:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerJ16:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankJ10name:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueJ12:
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueJ13:
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ11:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.frankJ12:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueJ14:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.frankJ13:
      image(hallway, 15, 15, 1000, 700);
      image(pissedFrank, 350, 170, 300, 680);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueJ15:
      image(hallway, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    case handler.monologueK1:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueK2:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueK3:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueK4:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerK1:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankK1:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerK2:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankK2:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerK3:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankK3:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.monologueK5:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerK4:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.frankK4:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxBlue, 90, 380, 800, 400);
      break;
    case handler.playerK5:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.monologueK6:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueK7:
      image(bedDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;

    case handler.monologueL1:
      image(houseDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueL2:
      image(houseDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueL3:
      image(houseDay, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueL4:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueL5:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.playerL1:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxLightpink, 90, 380, 800, 400);
      break;
    case handler.personL1:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxBabyblue, 90, 380, 800, 400);
      break;
    case handler.monologueL6:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.monologueL7:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.personL2:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxBabyblue, 90, 380, 800, 400);
      break;
    case handler.monologueL8:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.personL3:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxBabyblue, 90, 380, 800, 400);
      break;
    case handler.monologueL9:
      image(housePopo, 15, 15, 1000, 700);
      image(textBoxPink, 90, 380, 800, 400);
      break;
    case handler.end:
      textSize(100);
      textAlign(CENTER);
      fill(220, 220, 220);
      text("ENDE", 650, 300);
      if (end.end === true) {
        redFlags = 0;
        confidence = 0;
        control.triggered = false;
        lie.triggered = false;
        arm.triggered = false;
        noise.triggered = false;
        phone.triggered = false;
        victim.triggered = false;
        handler.active = handler.start;
      }
      end.display();
      textFont(fontA);
      textAlign(CENTER);
      textSize(30);
      text("Du hast von 6 Warnzeichen " + redFlags + " Warnzeichen erkannt", 500,200);
      text("Du hast von 4 mal " + confidence + " mal Franks Selbstvertrauen gesteigert", 500,300);
      break;
  }

  if (start.start === false) {
    start.display();
    image(logo, 370, 50, 340, 400);
  } else {
    handler.display();
  }
}
window.draw = draw;
