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
      "Netterweise haben die zwei mich auf einen gemütlichen Abend daheim eingeladen, wobei ich mich dabei doch ziemlich alt fühle."
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
      "Magst du noch ein Stück Sahnetorte haben?"
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
      "Ja, gerne! Du weißt, ich könnte für Torte sterben."
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
    this.player2 = new Text(
      160, 580, 700, 100,
      "Ich",
      "Stimmt, ich war schon damals absolut verliebt in deine Backkünste."
    );
    this.annegret3 = new Text(
      160, 580, 700, 100,
      "Annegret",
      "Pass auf, sonst platzt du noch."
    );
    this.player3 = new Text(
      160, 580, 700, 100,
      "Ich",
      "So weh es mir tut es abzulehnen, ich glaub ich bekomme nichts mehr in mich rein."
    );
      this.annegret4 = new Text(
        160, 580, 700, 100,
        "Annegret",
        "Geht mir ähnlich. Ich erinnere mich dennoch daran, wie du fast eine halbe Torte verdrückt hast, als du hergezogen bist."
      );
      this.monologue8 = new Monologue(
        160, 580, 700, 100,
        "Ich verziehe bei dem Gedanken das Gesicht."
      );
      this.player4 = new Text(
        160, 580, 700, 100,
        "Ich",
        "Du stellst mich aber auch gerne als einen Vielfraß dar!"
      );
      this.frank1 = new Text(
        160, 580, 700, 100,
        "Frank",
        "Da hat sie aber nicht ganz unrecht."
      );
      this.monologue9 = new Monologue(
        160, 580, 700, 100,
        "Empört schmeiße ich ihm ein Kissen entgegen."
      );
      this.monologue10 = new Monologue(
        160, 580, 700, 100,
        "Kichernd läuft Annegret in die Küche. Frank schmunzelt und lehnt sich zurück."
      );
      this.monologue11 = new Monologue(
        160, 580, 700, 100,
        "Er setzt einen verträumten Blick auf. Ich bin darauf gefasst, dass jetzt etwas Tiefgründiges kommt."
      );
      this.frank2 = new Text(
        160, 580, 700, 100,
        "Frank",
        "Ach ja, der Tag, an dem wir uns kennengelernt haben, der war super. Es war nur so schrecklich warm..."
      );
      this.player5 = new Text(
        160, 580, 700, 100,
        "Ich",
        "Oh ja, es war unerträglich!"
      );
      this.player6 = new Text(
        160, 580, 700, 100,
        "Ich",
        "Besonders bei so einem Wetter die ganzen Boxen zu transportieren und alles auszupacken."
      );
      this.player7 = new Text(
        160, 580, 700, 100,
        "Ich",
        "Das nächste Mal werde ich ganz sicher nicht vergessen, mir vorher den Wetterbericht anzusehen."
      );
      this.player8 = new Text(
        160, 580, 700, 100,
        "Ich",
        "Zwei Jahre ist das jetzt her, oder?"
      );
      this.frank4 = new Text(
        160, 580, 700, 100,
        "Frank",
        "So um den Dreh, ja."
      );
      this.monologue12 = new Monologue(
        160, 580, 700, 100,
        "Er verschränkt seine Arme vor der Brust und grinst weiterhin in sich hinein, während er verloren ins Nichts starrt."
      );
    

    this.active = this.start;

    //Szene 1
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
    this.annegret2.changeNext(this.player2, this);
    this.player2.changeNext(this.annegret3, this);
    this.decision1.changeNext2(this.player3, this);
    this.player3.changeNext(this.annegret4, this);
    this.annegret4.changeNext(this.monologue8, this);
    this.monologue8.changeNext(this.player4, this);
    this.player4.changeNext(this.frank1, this);
    this.frank1.changeNext(this.monologue9, this);
    this.annegret3.changeNext(this.monologue10, this);
    this.monologue9.changeNext(this.monologue10, this);
    this.monologue10.changeNext(this.monologue11, this);
    this.monologue11.changeNext(this.frank2, this);
    this.frank2.changeNext(this.player5, this);
    this.player5.changeNext(this.player6, this);
    this.player6.changeNext(this.player7, this);
    this.player7.changeNext(this.player8, this);
    this.player8.changeNext(this.frank4, this);
    this.frank4.changeNext(this.monologue12, this);
  }

  display() {
    this.active.display();
  }
  mouseClicked() {
    this.active.mouseClicked();
  }
}