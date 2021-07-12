import Button from "./button.js";
import {fontA, fontG} from "./p5setup.js";

export default class Warning extends Button {
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.warning = false;
    }


    display() {
        stroke(0, 88, 106);
        textSize(40);
        textAlign(CENTER);
        textFont(fontA);
        text("Trigger Warnung!", 500, 100);
        textSize(24);
        textFont(fontG);
        text("[Insert Trigger Warning]", 500, 200);

        fill(10, 50, 70, 180);
        stroke(242, 145, 121);
        strokeWeight(3);
        rect(this.x, this.y, this.width, this.height, 15);

        noStroke();
        fill(210, 235, 244);
        textSize(24);
        text(
         "Fortfahren",
         this.x + 35,
         this.y + 20,
         this.width - 50,
         this.height - 20
        );
    } 

    mouseClicked() {
        if (this.hitTest(mouseX, mouseY)) {
          this.warning = true;
        }
      }
}