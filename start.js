import Button from "./button.js";

export default class Start extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.start = false;
  }

  display() {
    fill(30, 30, 30, 180);
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);

    noStroke();
    fill(220, 220, 220);
    textSize(20);
    text(
      "Spiel starten",
      this.x + 50,
      this.y + 5,
      this.width - 20,
      this.height - 20
    );
  }
  clicked() {
    this.start = true;
  }
}