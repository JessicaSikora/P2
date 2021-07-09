import Text from "./text.js";
import Monologue from "./monologue.js";
import Decision from "./decision.js";

export default class Handler {
  constructor(name) {
    this.name = name;
    this.start = new Text();
    this.end = new Text();

    //Szene 1
    this.monologueA1 = new Monologue(
      160, 550, 705, 130,
      "Es ist ein angenehmer Abend, welcher weder zu kalt noch zu warm ist."
    );
    this.monologueA2 = new Monologue(
      160, 550, 705, 130,
      "Vor mir sitzen meine langjährigen Freunde Frank und Annegret, ein verheiratetes, liebevolles Paar, die genau gegenüber vor mir leben."
    );
    this.monologueA3 = new Monologue(
      160, 550, 705, 130,
      "Netterweise haben die zwei mich auf einen gemütlichen Abend daheim eingeladen, wobei ich mich dabei doch ziemlich alt fühle."
    );
    this.monologueA4 = new Monologue(
      160, 550, 705, 130,
      "Früher hat man sich zum Feiern getroffen und auf eine gute Zeit, jetzt hat man diese immer noch, nur redet man über die stressige Zeit und alles um einen herum."
    );
    this.monologueA5 = new Monologue(
      160, 550, 705, 130,
      "Was früher eine halbe Flasche Vodka war, ist jetzt ein Glas - oder eine Flasche - Wein, je nachdem, wie der Abend läuft."
    );
    this.annegretA1 = new Text(
      160, 550, 705, 130,
      "Annegret",
      "Magst du noch ein Stück Sahnetorte haben?"
    );
    this.monologueA6 = new Monologue(
      160, 550, 705, 130,
      "Ich hebe meinen Kopf und schaue einer erwartungsvoll blickenden Annegret ins Gesicht.."
    );
    this.decisionA1 = new Decision(
      160, 550, 340, 130,
      "Ja, gerne!" , "Nein, danke."
    );
    this.playerA1 = new Text(
      160, 550, 705, 130,
      "Ich",
      "Ja, gerne! Du weißt, ich könnte für Torte sterben."
    );
    this.monologueA7 = new Monologue(
      160, 550, 705, 130,
      "Annegret grinst und nickt mir zu, hinter ihr lacht Frank leise auf."
    );
    this.annegretA2 = new Text(
      160, 550, 705, 130,
      "Annegret",
      "Erinnerst du dich noch, als wir uns zum ersten Mal kennengelernt haben? Da hast du so ziemlich dasselbe gesagt."
    );
    this.playerA2 = new Text(
      160, 550, 705, 130,
      "Ich",
      "Stimmt, ich war schon damals absolut verliebt in deine Backkünste."
    );
    this.annegretA3 = new Text(
      160, 550, 705, 130,
      "Annegret",
      "Pass auf, sonst platzt du noch."
    );
    this.playerA3 = new Text(
      160, 550, 705, 130,
      "Ich",
      "So weh es mir tut es abzulehnen, ich glaub ich bekomme nichts mehr in mich rein."
    );
      this.annegretA4 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Geht mir ähnlich. Ich erinnere mich dennoch daran, wie du fast eine halbe Torte verdrückt hast, als du hergezogen bist."
      );
      this.monologueA8 = new Monologue(
        160, 550, 705, 130,
        "Ich verziehe bei dem Gedanken das Gesicht."
      );
      this.playerA4 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Du stellst mich aber auch gerne als einen Vielfraß dar!"
      );
      this.frankA1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Da hat sie aber nicht ganz unrecht."
      );
      this.monologueA9 = new Monologue(
        160, 550, 705, 130,
        "Empört schmeiße ich ihm ein Kissen entgegen."
      );
      this.monologueA10 = new Monologue(
        160, 550, 705, 130,
        "Kichernd läuft Annegret in die Küche. Frank schmunzelt und lehnt sich zurück."
      );
      this.monologueA11 = new Monologue(
        160, 550, 705, 130,
        "Er setzt einen verträumten Blick auf. Ich bin darauf gefasst, dass jetzt etwas Tiefgründiges kommt."
      );
      this.frankA2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ach ja, der Tag, an dem wir uns kennengelernt haben, der war super. Es war nur so schrecklich warm..."
      );
      this.playerA5 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Oh ja, es war unerträglich!"
      );
      this.playerA6 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Besonders bei so einem Wetter die ganzen Boxen zu transportieren und alles auszupacken."
      );
      this.playerA7 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Das nächste Mal werde ich ganz sicher nicht vergessen, mir vorher den Wetterbericht anzusehen."
      );
      this.playerA8 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Zwei Jahre ist das jetzt her, oder?"
      );
      this.frankA3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "So um den Dreh, ja."
      );
      this.monologueA12 = new Monologue(
        160, 550, 705, 130,
        "Er verschränkt seine Arme vor der Brust und grinst weiterhin in sich hinein, während er verloren ins Nichts starrt."
      );

      //Rückblick
      this.monologueB1 = new Monologue(
        160, 550, 705, 130,
        "Die Sonne stach mir in die Augen als ich aus meiner mobilen Sauna namens Auto ausstieg."
      );
      this.monologueB2 = new Monologue(
        160, 550, 705, 130,
        "Der Umzugswagen war schon einige Zeit vor mir angekommen und als ich in das Auto schaute, war schon um die Hälfte der Ladung in meinem Haus."
      );
      this.playerB1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Hi, Martin! Danke nochmal für deine Hilfe. Ohne dich hätte ich das niemals geschafft."
      );
      this.martinB1 = new Text(
        160, 550, 705, 130,
        "Martin",
        "Guten Morgen! Kein Problem, bei sowas helfe ich immer gerne."
      );
      this.martinB2 = new Text(
        160, 550, 705, 130,
        "Martin",
        "Wir halten uns an deine Liste. Du kannst ja mal nachschauen, ob alles im richtigen Raum steht."
      );
      this.monologueB3 = new Monologue(
        160, 550, 705, 130,
        "Nickend verschwand ich in meinem neuen Heim und blieb genau wie am Tag der ersten Besichtigung staunend im Flur stehen."
      );
      this.monologueB4 = new Monologue(
        160, 550, 705, 130,
        "In meinem Unglauben, dass dies nun tatsächlich mein war, vergaß ich fast, was ich zuallererst tun wollte."
      );
      this.monologueB5 = new Monologue(
        160, 550, 705, 130,
        "Ich grub in meiner Tasche und hielt triumphierend den Fund vor meine Nase, also ich das Namensschildchen ertastet hatte."
      );
      this.monologueB6 = new Monologue(
        160, 550, 705, 130,
        "Mit eifrigen Schritten quetschte ich mich an den Umzugshelfern vorbei zur Eingangstür."
      );
      this.playerB2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Na endlich, darauf habe ich so lange gewartet!"
      );
      this.nameplate = new Text();
      this.martinB3 = new Text(
        160, 550, 705, 130,
        "Martin",
        "Wir brauchen hier noch so ca. eine Stunde. Wenn du magst, kannst du dich ja mal in der Nachbarschaft umschauen und dich eventuell schon vorstellen?"
      );
      this.martinB4 = new Text(
        160, 550, 705, 130,
        "Martin",
        "Ich weiß nicht, wie es in diesen gehobenen Vierteln so abläuft."
      );
      this.monologueB7 = new Monologue(
        160, 550, 705, 130,
        "Ich verdrehte die Augen. Das war ein durchgehender Scherz seit Martin gehört hatte, wo ich hinziehe."
      );
      this.monologueB8 = new Monologue(
        160, 550, 705, 130,
        "Er hatte allerdings recht, die Siedlung sah aus, wie aus einem Familienkatalog. Selbst die Straßen und Mülleimer waren sauber."
      );
      this.playerB3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Dann mache ich mich mal auf den Weg. Vielen Dank nochmal für die Hilfe."
      );
      this.monologueB9 = new Monologue(
        160, 550, 705, 130,
        "Etwas unentschlossen lief ich auf die Straße und sah mich nach einer Richtung um, in die ich gehen wollte."
      );
      this.monologueB10 = new Monologue(
        160, 550, 705, 130,
        "Mein Blick fiel auf eine Frau im Haus gegenüber von meinem, die in ihrem Vorgarten Blumen goß."
      );
      this.monologueB11 = new Monologue(
        160, 550, 705, 130,
        "Langsam nährte ich mich der Frau und begann leicht zu winken.\nVorstellungen waren noch nie meine Stärke."
      );
      this.playerB4 = new Text(
        160, 550, 705, 130,
        "Ich",
        "H-hallo, mein Name ist" + this.name.name.join("") +
        ". Ich bin gerade in das Haus gegenüber von euch eingezogen, wie man vielleicht sieht."
      );
      this.monologueB12 = new Monologue(
        160, 550, 705, 130,
        "Nervös kratzte ich mich am Kopf."
      );

    this.active = this.start;

    //Szene 1
    this.monologueA1.changeNext(this.monologueA2, this);
    this.monologueA2.changeNext(this.monologueA3, this);
    this.monologueA3.changeNext(this.monologueA4, this);
    this.monologueA4.changeNext(this.monologueA5, this);
    this.monologueA5.changeNext(this.annegretA1, this);
    this.annegretA1.changeNext(this.monologueA6, this);
    this.monologueA6.changeNext(this.decisionA1, this);
    this.decisionA1.changeNext1(this.playerA1, this);
    this.playerA1.changeNext(this.monologueA7, this);
    this.monologueA7.changeNext(this.annegretA2, this);
    this.annegretA2.changeNext(this.playerA2, this);
    this.playerA2.changeNext(this.annegretA3, this);
    this.decisionA1.changeNext2(this.playerA3, this);
    this.playerA3.changeNext(this.annegretA4, this);
    this.annegretA4.changeNext(this.monologueA8, this);
    this.monologueA8.changeNext(this.playerA4, this);
    this.playerA4.changeNext(this.frankA1, this);
    this.frankA1.changeNext(this.monologueA9, this);
    this.annegretA3.changeNext(this.monologueA10, this);
    this.monologueA9.changeNext(this.monologueA10, this);
    this.monologueA10.changeNext(this.monologueA11, this);
    this.monologueA11.changeNext(this.frankA2, this);
    this.frankA2.changeNext(this.playerA5, this);
    this.playerA5.changeNext(this.playerA6, this);
    this.playerA6.changeNext(this.playerA7, this);
    this.playerA7.changeNext(this.playerA8, this);
    this.playerA8.changeNext(this.frankA3, this);
    this.frankA3.changeNext(this.monologueA12, this);

    //Rückblick
    this.monologueA12.changeNext(this.monologueB1, this);
    this.monologueB1.changeNext(this.monologueB2, this);
    this.monologueB2.changeNext(this.playerB1, this);
    this.playerB1.changeNext(this.martinB1, this);
    this.martinB1.changeNext(this.martinB2, this);
    this.martinB2.changeNext(this.monologueB3, this);
    this.monologueB3.changeNext(this.monologueB4, this);
    this.monologueB4.changeNext(this.monologueB5, this);
    this.monologueB5.changeNext(this.monologueB6, this);
    this.monologueB6.changeNext(this.playerB2, this);
    this.playerB2.changeNext(this.nameplate, this);
    this.nameplate.changeNext(this.martinB3, this);
    this.martinB3.changeNext(this.martinB4, this);
    this.martinB4.changeNext(this.monologueB7, this);
    this.monologueB7.changeNext(this.monologueB8, this);
    this.monologueB8.changeNext(this.playerB3, this);
    this.playerB3.changeNext(this.monologueB9, this);
    this.monologueB9.changeNext(this.monologueB10, this);
    this.monologueB10.changeNext(this.monologueB11, this);
    this.monologueB11.changeNext(this.playerB4, this);
    this.playerB4.changeNext(this.monologueB12, this);
  }

  get playerB4name() {
    this.playerB4.text = "H-hallo, mein Name ist " + this.name.name.join("") +
    ". Ich bin gerade in das Haus gegenüber von euch eingezogen, wie man vielleicht sieht.";
    return this.playerB4;
  }

  display() {
    this.active.display();
  }
  mouseClicked() {
    this.active.mouseClicked();
  }

  getName() {
    this.name = this.name.name.join("");
    return this.name;
  }
}