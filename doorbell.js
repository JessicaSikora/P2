export default class Doorbell {
  /**
   * this.ok -> set given name
   * this.line -> line when typing
   */
   constructor() {
        this.name = [];
        this.ok = false;
        this.t = 0;
        this.line = "|";
    }
// so you can type name (only letters)
    keyPressed() {
        if (keyCode === 8) {
          this.name.pop();
        }
        if (
          (keyCode >= 65 && keyCode <= 90) ||
          keyCode === 192 ||
          keyCode === 222 ||
          keyCode === 186 ||
          keyCode === 32
        ) {
          this.name.push(key);
        }
      }

      hitTest(x, y) {
        if (x > 795 && x < 835 && y > 410 && y < 435) {
          return true;
        } else {
          return false;
        }
      }

      mouseClicked() {
        if (this.hitTest(mouseX, mouseY)) {
          this.ok = true;
        }
      }
// drawLine = typing line
      drawLine() {
        this.t++;
        if (this.t >= 30) {
          this.t = 0;
        }
      }
      
    display() {
    noStroke();
    fill(0, 0, 0);
    textSize(30);
    textAlign(LEFT);
    this.drawLine();
    // basically so that line while typing appears and disappears 
    if (this.t <= 15) {
      text(this.name.join("") + this.line, 290, 360);
    } else {
      text(this.name.join(""), 290, 360);
    }
    textSize(20);
    text("OK", 800, 430);
  }
}
