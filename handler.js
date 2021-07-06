import Text from "./text.js";
import Monologue from "./monologue.js";
import Decision from "./decision.js";

export default class Handler {
  constructor() {
    this.start = new Text();
    this.end = new Text();

    this.monologue1 = new Monologue(
      160, 580, 700, 100,
      "Es ist ein angenehmer Abend, welcher weder zu kalt noch zu warm ist."
    );
    this.monologue2 = new Monologue(
      160, 580, 700, 100,
      "Vor mir sitzen meine langjährigen Freunde Frank und Annegret, ein verheiratetes, liebevolles Paar, die genau gegenüber vor mir leben."
    );
    this.monologue3 = new Monologue(
      160, 580, 700, 100,
      "Netterweise haben die zwei mich auf einen Weinabend mit Häppchen eingeladen, wobei ich mich dabei doch ziemlich alt fühle."
    );
    this.monologue4 = new Monologue(
      160, 580, 700, 100,
      "Früher hat man sich zum Feiern getroffen und auf eine gute Zeit, jetzt hat man diese immer noch, nur redet man über die stressige Zeit und alles um einen herum."
    );
    this.monologue5 = new Monologue(
      160, 580, 700, 100,
      "Was früher eine halbe Flasche Vodka war, ist jetzt ein Glas - oder eine Flasche - Wein, je nachdem, wie der Abend läuft."
    );
    this.annegret1 = new Text(
      160, 580, 700, 100,
      "Annegret",
      "Magst du noch etwas Wein haben?"
    );
    this.monologue6 = new Monologue(
      160, 580, 700, 100,
      "Ich hebe meinen Kopf und schaue einer erwartungsvoll blickenden Annegret ins Gesicht.."
    );
    this.decision1 = new Decision(
      160, 580, 340, 100,
      "Ja, gerne!" , "Nein, danke."
    );
    this.player1 = new Text(
      160, 580, 700, 100,
      "Ich",
      "Ja, gerne! Nach so einem langen Tag kann ich das gut gebrauchen."
    );
    this.monologue7 = new Monologue(
      160, 580, 700, 100,
      "Annegret grinst und nickt mir zu, hinter ihr lacht Frank leise auf."
    );
    this.annegret2 = new Text(
      160, 580, 700, 100,
      "Annegret",
      "Erinnerst du dich noch, als wir uns zum ersten Mal kennengelernt haben? Da hast du so ziemlich dasselbe gesagt."
    );
    

    this.active = this.start;
    this.monologue1.changeNext(this.monologue2, this);
    this.monologue2.changeNext(this.monologue3, this);
    this.monologue3.changeNext(this.monologue4, this);
    this.monologue4.changeNext(this.monologue5, this);
    this.monologue5.changeNext(this.annegret1, this);
    this.annegret1.changeNext(this.monologue6, this);
    this.monologue6.changeNext(this.decision1, this);
    this.decision1.changeNext1(this.player1, this);
    this.player1.changeNext(this.monologue7, this);
    this.monologue7.changeNext(this.annegret2, this);
  }

  display() {
    this.active.display();
  }
  mouseClicked() {
    this.active.mouseClicked();
  }
}