import Button from "./button.js";

export default class Monologue extends Button {
  constructor(x, y, width, height, text) {
    super(x, y, width, height);
    this.text = text;
    this.next = this;
    this.handler = null;
  }

  display() {
    textSize(16);
    textAlign(LEFT);
    fill(210, 235, 244);
    noStroke();
    textSize(18);
    text(
      this.text,
      this.x + 15,
      this.y + 30,
      this.width - 18,
      this.height - 15
    );
    textSize(14);
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 95, this.width - 5, this.height + 15);
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
