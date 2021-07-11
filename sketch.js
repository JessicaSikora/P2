import {
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
  Michael
} from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import Warning from "./warning.js";
import End from "./end.js";
import Handler from "./handler.js";
import Doorbell from "./doorbell.js";
//import gsap from "./gsap.min.js";

let start = new Start(400, 550, 200, 65);
let end = new End(400, 450, 200, 65);
let doorbell = new Doorbell();
let handler = new Handler(doorbell);
let trigger = new Warning(400, 450, 200, 65);
let decision1 = new Button(160, 550, 340, 130);
let decision2 = new Button(520, 550, 340, 130);

let redFlags = 0; 

function reload() {
    window.location.reload();
  }

//Start Button Animation
start.animation();

function mouseClicked() {
    if (start.start === false) {
      start.mouseClicked();
    } else {
      handler.mouseClicked();
    }
    if (handler.active === handler.warning && trigger.warning === false) {
      trigger.mouseClicked();
    }
    if (handler.active === handler.nameplate && doorbell.ok === false &&
      doorbell.name.length >= 1) {
      doorbell.mouseClicked();
    }

    if (handler.active === handler.decisionA1 || handler.active === handler.decisionC1) {
      decision1.mouseClicked();
      decision2.mouseClicked();
    }
    /*if (handler.active === handler.end) {
      end.mouseClicked();
    }*/

}
window.mouseClicked = mouseClicked;

function keyPressed() {
  if (handler.active === handler.nameplate) {
    doorbell.keyPressed();
  }
}
window.keyPressed = keyPressed;

function draw() {
    clear();
    //sound();

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
          break

        //Szene 1
        case handler.monologueA1:
          image(livingroom, 15, 15, 1000, 700);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.monologueA2:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.monologueA3:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.monologueA4:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.monologueA5:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.annegretA1:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPeach, 90, 380, 800, 400);
          break;
          case handler.monologueA6:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.decisionA1:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 120, 380, 390, 400);
          image(textBoxPink, 480, 380, 390, 400);
          break;
          case handler.playerA1:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break;  
          case handler.monologueA7:
          image(livingroom, 15, 15, 1000, 700);
          image(smileAnnegret, 210, 240, 270, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.annegretA2:
          image(livingroom, 15, 15, 1000, 700);
          image(smileAnnegret, 210, 240, 270, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPeach, 90, 380, 800, 400);
          break;
          case handler.playerA2:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break; 
          case handler.annegretA3:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPeach, 90, 380, 800, 400);
          break;
          case handler.playerA3:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break;  
          case handler.annegretA4:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPeach, 90, 380, 800, 400);
          break;  
          case handler.monologueA8:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;  
          case handler.playerA4:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break;  
          case handler.frankA1:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxBlue, 90, 380, 800, 400);
          break;  
          case handler.monologueA9:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;  
          case handler.monologueA10:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break; 
          case handler.monologueA11:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break; 
          case handler.frankA2:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxBlue, 90, 380, 800, 400);
          break; 
          case handler.playerA5:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break; 
          case handler.playerA6:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break; 
          case handler.playerA7:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break; 
          case handler.playerA8:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break;
          case handler.frankA3:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxBlue, 90, 380, 800, 400);
          break;  
          case handler.monologueA12:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break; 

          //Rückblick
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
          case handler.martinB1:
          image(house, 15, 15, 1000, 700);
          image(Michael, 350, 170, 300, 600);
          image(textBoxBabyblue, 90, 380, 800, 400);
          break;
          case handler.martinB2:
          image(house, 15, 15, 1000, 700);
          image(Michael, 350, 170, 300, 600);
          image(textBoxBabyblue, 90, 380, 800, 400);
          break;
          case handler.monologueB3:
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.monologueB4:
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.monologueB5:
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.monologueB6:
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.playerB2:
          image(textBoxLightpink, 90, 380, 800, 400);
          break;

          case handler.nameplate:
          image(doorBell, 15, 15, 1000, 700);
          if (doorbell.ok === false) {
            doorbell.display();
          } else {
            handler.active = handler.martinB3;
          }
          break;

          case handler.martinB3:
          image(house, 15, 15, 1000, 700);
          image(Michael, 350, 170, 300, 600);
          image(textBoxBabyblue, 90, 380, 800, 400);
          break;
          case handler.martinB4:
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
          case handler.playerB4:
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
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxBlue, 90, 380, 800, 400);
          break;
          case handler.playerC1:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break;
          case handler.playerC2:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break;
          case handler.monologueC1:
          image(livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;
          case handler.annegretC1:
          image(livingroom, 15, 15, 1000, 700);
          image(smileAnnegret, 210, 240, 270, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPeach, 90, 380, 800, 400);
          break;
          case handler.decisionC1:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 120, 380, 390, 400);
          image(textBoxPink, 480, 380, 390, 400);
          if (decision1.triggered === true) {
            redFlags += 1;
            decision1.triggered = false;
          }
          break;
          case handler.playerC3:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxLightpink, 90, 380, 800, 400);
          break;
          case handler.frankC2:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxBlue, 90, 380, 800, 400);
          break;
          case handler.monologueC2:
          image(livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          image(textBoxPink, 90, 380, 800, 400);
          break;

    }
    /*case handler.end:
        textSize(100);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("ENDE", 650, 300);
        if (end.end === true) {
            reload();
          }
          fill(30, 30, 30);
          rect(10, 615, 1310, 130);
          fill(60, 60, 60);
          rect(10, 745, 1310, 1000);
          rect(10, 0, 1310, 10);
          end.display();
    
          break;*/

          
    if (start.start === false) {
      start.display();
      image(logo, 370, 50, 340, 400);
      } else {
      handler.display();
      }
}
window.draw = draw;