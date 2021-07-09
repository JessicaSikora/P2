export default class Button {
    constructor(x, y, width, height, name) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.name = name;
  
      this.triggered = false;
    }

    hitTest(x, y) {
      if (
        x > this.x &&
        x < this.x + this.width &&
        y > this.y &&
        y < this.y + this.height
      ) {
        return true;
      } else {
        return false;
      }
    }

    clicked() {
        console.log("idk");
    }
   
    mouseClicked() {
      if (this.hitTest(mouseX, mouseY)) {
        this.clicked();
        if (this.triggered === false) {
          this.triggered = true;
        } else {
          this.triggered = false;
        }
      }
    }
  }
  