import Button from "./button.js";

export default class End extends Button {
  constructor(x, y, width, height) {
    /**
     * super used as extension for constructor out of button 
     */
    super(x, y, width, height);
    this.end = false;
  }
  display() {
    fill(0, 88, 106);
    rect(10, 10, 1000, 700);
    fill(10, 50, 70, 180);
    stroke(242, 145, 121);
    strokeWeight(3);
    rect(this.x, this.y, this.width, this.height, 15);

    noStroke();
    fill(210, 235, 244);
    textSize(20);
    text(
      "Spiel neu starten",
      this.x + 15,
      this.y + 20,
      this.width - 20,
      this.height - 20
    );
  }
  clicked() {
    this.end = true;
  }
}
