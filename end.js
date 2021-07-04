import Button from "./button.js";

export default class End extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.end = false;
  }
  display() {
    fill(30, 30, 30);
    rect(10, 10, 1300, 600);
    fill(30, 30, 30, 180);
    stroke(180, 0, 125);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);

    noStroke();
    fill(220, 220, 220);
    textSize(20);
    text(
      "Spiel neu starten",
      this.x + 15,
      this.y + 5,
      this.width - 20,
      this.height - 20
    );
  }
  clicked() {
    this.end = true;
  }
}
