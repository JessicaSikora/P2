import Button from "./button.js";

export default class Monologue extends Button {
  constructor(x, y, width, height, text) {
    super(x, y, width, height);
    this.text = text;
    this.next = this;
    this.handler = null;
  }

  display() {
    textAlign(LEFT);
    fill(210, 235, 244);
    noStroke();
    textSize(19);
    text(
      this.text,
      this.x + 20,
      this.y + 30,
      this.width - 40,
      this.height - 40
    );
    textSize(14);
    textAlign(RIGHT);
    text("weiter", this.x, this.y + 110, this.width - 5, this.height + 5);
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
