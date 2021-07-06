import Button from "./button.js";

export default class Monologue extends Button {
  constructor(x, y, width, height, person, text) {
    super(x, y, width, height);
    this.person = person;
    this.text = text;
    this.next = this;
    this.handler = null;
  }

  display() {
    fill(30, 30, 30, 180);
    stroke(130, 0, 140);
    strokeWeight(5);
    rect(this.x, this.y, this.width, this.height, 15);
    strokeWeight(1);
    textSize(16);
    textAlign(LEFT);
    fill(220, 220, 220);
    text(this.person, this.x + 15, this.y + 25);
    noStroke();
    textSize(16);
    text(
      this.text,
      this.x + 15,
      this.y + 35,
      this.width - 15,
      this.height - 15
    );
    textSize(14);
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 80, this.width - 5, this.height + 15);
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
