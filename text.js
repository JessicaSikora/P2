import Button from "./button.js";
import {fontA, fontG} from "./p5setup.js";
/**
 * almost identical to monolog.js
 * only difference = name is in there
 */
export default class Text extends Button {
  constructor(x, y, width, height, person, text) {
    super(x, y, width, height);
    this.person = person;
    this.text = text;
    this.next = this;
    this.handler = null;
  }

  display() {
    stroke(239, 123, 156);
    strokeWeight(1);
    textSize(20);
    textAlign(LEFT);
    textFont(fontA);
    fill(210, 235, 244);
    text(this.person, this.x + 20, this.y + 30);
    noStroke();
    textSize(19);
    textFont(fontG);
    text(
      this.text,
      this.x + 20,
      this.y + 43,
      this.width - 40,
      this.height - 53
    );
    textSize(14);
    textAlign(RIGHT);
    text("weiter", this.x - 5, this.y + 110, this.width - 5, this.height + 5);
  }
  clicked() {
    if (this.handler != null) {
      this.handler.active = this.next;
    }
  }
  changeNext(next, handler) {
    this.next = next;
    this.handler = handler;
  }
}