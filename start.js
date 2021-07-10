import Button from "./button.js";
//import gsap from "./gsap.min.js";

export default class Start extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.start = false;

    this.buttonAnimated = {
      x: this.x + 100,
      y: this.y + 20,
      width: 180,
      height: 60,
      textFont: "American Typewriter Semibold",
      size: 25,
      color: color("#f9f7d0"), //yellow
      strokeColor: color("#0098c7"), //blue
      strokeWeight: 2.2,
      cornerRadius: 20,
      text: "Spiel starten",
    };
  }

  display() {
    push();
    //fill(0, 88, 106);
    fill("#0a3246");
    // rect(10, 10, 1000, 700);
    // fill(10, 50, 70, 180);
    // stroke(242, 145, 121);
    // strokeWeight(3);
    // rect(this.x, this.y, this.width, this.height, 15);

    // noStroke();
    // fill(210, 235, 244);
    // textSize(24);
    // text(
    //   "Spiel starten",
    //   this.x + 35,
    //   this.y + 20,
    //   this.width - 20,
    //   this.height - 20
    // );
    this.displayButtonAnimated();
    pop();
  }
  //display for animations
  displayButtonAnimated() {
    //Button
    rectMode(CENTER);
    textSize(this.buttonAnimated.size);
    textFont(this.buttonAnimated.textFont);

    //Fill(messageButton.color);
    stroke(this.buttonAnimated.strokeColor);
    strokeWeight(this.buttonAnimated.strokeWeight);
    noFill();
    rect(
      this.buttonAnimated.x,
      this.buttonAnimated.y,
      this.buttonAnimated.width,
      this.buttonAnimated.height,
      this.buttonAnimated.cornerRadius
    );

    fill(this.buttonAnimated.color);
    textAlign(CENTER, CENTER);
    text(
      this.buttonAnimated.text,
      this.buttonAnimated.x,
      this.buttonAnimated.y
    );
  }

  //Animations
  animation() {
    gsap.to(this.buttonAnimated, {
      duration: 3,
      delay: 0.5,
      ease: "easeIn",
      x: this.x + 100,
      y: this.y - 15,
      textFont: "American Typewriter Semibold",
      color: color("#0098c7"), //blue #0098c7
      strokeColor: color("#f9f7d0"), //yellow #f9f7d0
      strokeWeight: 2.5,
      repeat: -1,
      yoyo: true,
    });
  }

  clicked() {
    this.start = true;
  }
}
