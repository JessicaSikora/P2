export default class Decision {
    constructor(x, y, width, height, text1, text2) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.text1 = text1;
      this.text2 = text2;
      this.next = this;
      this.handler = null;
    }
  
    display() {
      textAlign(LEFT);
      fill(210, 235, 244);
      noStroke();
      textSize(19);
      text(
        this.text1,
        this.x + 20,
        this.y + 30,
        this.width - 40,
        this.height - 40
      );
      text(
        this.text2,
        this.x + 380,
        this.y + 30,
        this.width - 40,
        this.height - 40
      );
      textSize(14);
      textAlign(RIGHT);
      text("weiter", this.x, this.y + 110, this.width - 5, this.height + 15);
      text("weiter", this.x + 360, this.y + 110, this.width - 5, this.height + 15);
    }
    hitTest1(x, y) {
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
    hitTest2(x, y) {
      if (
        x > this.x + 360 &&
        x < this.x + 360 + this.width &&
        y > this.y &&
        y < this.y + this.height
      ) {
        return true;
      } else {
        return false;
      }
    }

    mouseClicked() {
      if (this.hitTest1(mouseX, mouseY)) {
        if (this.handler1 != null) {
          this.handler1.active = this.next1;
        }
      }
      if (this.hitTest2(mouseX, mouseY)) {
        if (this.handler2 != null) {
          this.handler2.active = this.next2;
        }
      }
    }
    changeNext1(next1, handler1) {
      this.next1 = next1;
      this.handler1 = handler1;
    }
    changeNext2(next2, handler2) {
      this.next2 = next2;
      this.handler2 = handler2;
    }
  }
  