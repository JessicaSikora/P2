import {
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
} from "./p5setup.js";

import Button from "./button.js";
import Start from "./start.js";
import End from "./end.js";
import Handler from "./handler.js";

let start = new Start(400, 550, 200, 65);
let end = new End(400, 450, 200, 65);
let decision1 = new Button(305, 630, 340, 100);
let decision2 = new Button(665, 630, 340, 100);
let handler = new Handler();

function reload() {
    window.location.reload();
  }

function mouseClicked() {
    if (start.start === false) {
      start.mouseClicked();
    } else {
      handler.mouseClicked();
    }
    /*if (handler.active === handler.end) {
      end.mouseClicked();
    }*/

}
window.mouseClicked = mouseClicked;

function draw() {
    clear();
    //sound();


    switch (handler.active) {
      case handler.start:
        if (start.start === true) {
          handler.active = handler.monologue1;
        }
        break;

        case handler.monologue1:
          image(Livingroom, 15, 15, 1000, 700); 
          break;
          case handler.monologue2:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.monologue3:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.monologue4:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.monologue5:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.annegret1:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.monologue6:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.decision1:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.player1:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.monologue7:
          image(Livingroom, 15, 15, 1000, 700);
          image(smileAnnegret, 210, 240, 270, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.annegret2:
          image(Livingroom, 15, 15, 1000, 700);
          image(smileAnnegret, 210, 240, 270, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.player2:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break; 
          case handler.annegret3:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.decision1:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.player3:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.annegret4:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.monologue8:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.player4:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.frank1:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.monologue9:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyAnnegret, 200, 240, 300, 800);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.monologue10:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break; 
          case handler.monologue11:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break; 
          case handler.frank2:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break; 
          case handler.player5:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break; 
          case handler.player6:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break; 
          case handler.player7:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break; 
          case handler.player8:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break;
          case handler.frank4:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
          break;  
          case handler.monologue12:
          image(Livingroom, 15, 15, 1000, 700);
          image(happyFrank, 500, 170, 300, 800);
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
      image(hands, 270, 50, 500, 500);
      } else {
      handler.display();
      }
}
window.draw = draw;