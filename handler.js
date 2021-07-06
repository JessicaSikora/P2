import Text from "./text.js";
import Decision from "./decision.js";

export default class Handler {
  constructor() {
    this.start = new Text();
    this.end = new Text();

    this.monologue1 = new Text(
      160, 580, 700, 100,
      " ",
      "Es ist ein angenehmer Abend, welcher weder zu kalt noch zu warm ist."
    );
    this.monologue2 = new Text(
      160, 580, 700, 100,
      " ",
      "Vor mir sitzen meine langjährigen Freunde Frank und Annegret, ein verheiratetes, liebevolles Paar, die genau gegenüber vor mir leben."
    );
    this.monologue3 = new Text(
      160, 580, 700, 100,
      " ",
      "Netterweise haben die zwei mich auf einen Weinabend mit Häppchen eingeladen, wobei ich mich dabei doch ziemlich alt fühle."
    );
    this.monologue4 = new Text(
      160, 580, 700, 100,
      " ",
      "Früher hat man sich zum Feiern getroffen und auf eine gute Zeit, jetzt hat man diese immer noch, nur redet man über die stressige Zeit und alles um einen herum."
    );
    this.monologue5 = new Text(
      160, 580, 700, 100,
      " ",
      "Was früher eine halbe Flasche Vodka war, ist jetzt ein Glas - oder eine Flasche - Wein, je nachdem, wie der Abend läuft."
    );
    this.annegret1 = new Text(
      160, 580, 700, 100,
      "Annegret",
      "Magst du noch etwas Wein haben?"
    );
    

    this.active = this.start;
    this.monologue1.changeNext(this.monologue2, this);
    this.monologue2.changeNext(this.monologue3, this);
    this.monologue3.changeNext(this.monologue4, this);
    this.monologue4.changeNext(this.monologue5, this);
    this.monologue5.changeNext(this.annegret1, this);
  }

  display() {
    this.active.display();
  }
  mouseClicked() {
    this.active.mouseClicked();
  }
}