import Button from "./button.js";
import Start from "./start.js";
import End from "./end.js";
import Handler from "./handler.js";

let start = new Start(562.5, 450, 185, 65);
let end = new End(562.5, 637.5, 185, 65);
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
    if (handler.active === handler.end) {
      end.mouseClicked();
    }

}
window.mouseClicked = mouseClicked;

function draw() {
    clear();
    sound();


    /*case talkingHandler.end:
        textSize(100);
        textAlign(CENTER);
        fill(220, 220, 220);
        text("ENDE", 650, 300);
        if (end.end === true) {
            reload();
          }
          // reload();
          fill(30, 30, 30);
          rect(10, 615, 1310, 130);
          fill(60, 60, 60);
          rect(10, 745, 1310, 1000);
          rect(10, 0, 1310, 10);
          end.display();
    
          break;*/
}
window.draw = draw;

if (start.start === false) {
    start.display()
} else {
    handler.display();
  }