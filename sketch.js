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
import End from "./end.js";
import Handler from "./handler.js";
import Doorbell from "./doorbell.js";

let start = new Start(400, 550, 200, 65);
let end = new End(400, 450, 200, 65);
let doorbell = new Doorbell();
let handler = new Handler(doorbell);

function reload() {
    window.location.reload();
  }

function mouseClicked() {
    if (start.start === false) {
      start.mouseClicked();
    } else {
      handler.mouseClicked();
    }
    if (handler.active === handler.nameplate && doorbell.ok === false &&
      doorbell.name.length >= 1) {
      doorbell.mouseClicked();
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
      image(logo, 370, 100, 340, 400);
      } else {
      handler.display();
      }
}
window.draw = draw;