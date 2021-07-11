import Text from "./text.js";
import Monologue from "./monologue.js";
import Decision from "./decision.js";

export default class Handler {
  constructor(name) {
    this.name = name;
    this.start = new Text();
    this.end = new Text();
    this.warning = new Text();

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
      "Annehmen." , "Ablehnen."
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
        "H-hallo, mein Name ist " + this.name.name.join("") +
        ". Ich bin gerade in das Haus gegenüber von euch eingezogen, wie man vielleicht sieht."
      );
      this.monologueB12 = new Monologue(
        160, 550, 705, 130,
        "Nervös kratzte ich mich am Kopf."
      );
      this.monologueB13 = new Monologue(
        160, 550, 705, 130,
        "Freundlich lächelte mich die Frau strahlend an."
      );
      this.annegretB1 = new Text(
        160, 550 ,705, 130,
        "Annegret",
        "Hallo! Mein Name ist Annegret, schön dich kennenzulernen."
      );
      this.monologueB14 = new Monologue(
        160, 550, 705, 130,
        "Puh, sie schien doch ganz nett zu sein. Vielleicht war meine Sorge vollkommen unberechtigt gewesen."
      );
      this.annegretB2 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Du scheinst noch einen langen Tag vor dir zu haben, mit all den Kisten, die du auspacken musst."
      );
      this.frankB1 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Schatz! Hast du die Einkaufstüte gesehen? Ich kann sie nicht finden."
      );
      this.monologueB15 = new Monologue(
        160, 550, 705, 130,
        "Aus der Haustür erschien ein großer, sportlich gebauter Mann mit einem unbeholfenen Blick."
      );
      this.monologueB16 = new Monologue(
        160, 550, 705, 130, 
        "Annegret verdreht schmunzelnd die Augen."
      );
      this.annegretB3 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Ich habe sie in die Küche gestellt, du bist doch mit mir zusammen reingegangen."
      );
      this.monologueB17 = new Monologue(
        160, 550, 705, 130,
        "Die Augen des Mannes strahlten auf, als hätte er sich gerade noch daran erinnert."
      );
      this.monologueB18 = new Monologue(
        160, 550, 705, 130,
        "Sein Blick schweift von seiner Frau, wie ich vermutete, zu mir. Lächelnd kam er mir entgegen."
      );
      this.frankB2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Hallo, nett dich kennenzulernen, mein Name ist Frank. Du bist doch der Neueinzug im Haus gegenüber?"
      );
      this.frankB3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ein Glück hast du so viele helfende Hände beim Umzug, das macht die Sache ein bisschen einfacher."
      );
      this.monologueB19 = new Monologue(
        160, 550, 705, 130,
        "Annegret klatschte auf einmal mit Begeisterung in die Hände."
      );
      this.monologueB20 = new Monologue(
        160, 550, 705, 130,
        "Bis ich überhaupt registrieren konnte, was los war, schaute sie mich erwartungsvoll an."
      );
      this.annegretB4 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Wie wäre es, wenn wir eine kleine Einweihungsfeier halten?"
      );
      this.annegretB5 = new Text(
        160, 550, 705, 130,
        "Muss überhaupt nichts Großes sein, sondern nur wir drei. Es gibt Essen und ich backe eine Willkommenstorte."
      );
      this.monologueB21 = new Monologue(
        160, 550, 705, 130,
        "Ich war etwas überrumpelt von Annegrets zuvorkommenden Art."
      );
      this.playerB5 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Das klingt großartig, ich könnte für Torte sterben!"
      );
      this.monologueB22 = new Monologue(
        160, 550, 705, 130,
        "Das Paar lächelte mich freudig an und wir begannen sofort die Planung meiner kleinen Einweihungsfeier."
      );

      //Szene 1.2
      this.frankC1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "... und das hast du uns deutlich besiegt beim Torteessen. Ich frage mich immer noch, wie das alles in dich reingepasst hat."
      );
      this.playerC1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ein Zauberer verrät nie seine Tricks."
      );
      this.playerC2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Du hast ja noch gar nichts von der Torte gegessen. Hier, ich geb dir ein Stück auf."
      );
      this.monologueC1 = new Monologue(
        160, 550, 705, 130,
        "Ich möchte gerade das Messer in die Hand nehmen, also plötzlich Annegret hinter mir steht und es mir flink vor der Nase wegschnappt."
      );
      this.annegretC1 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Frank hat schon sehr viel gegessen, ich denke es reicht für heute. Schließlich muss er auf seine Linie achten."
      );
      this.decisionC1 = new Decision(
        160, 550, 340, 130,
        "Frank fragen.", "Annegrets Entscheidung akzeptieren."
      );
      this.playerC3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Frank, was sagst du dazu?"
      );
      this.frankC2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Oh, ich? Äh, ich schätze Annegret hat recht, das war genug für heute."
      );
      this.monologueC2 = new Monologue(
        160, 550, 705, 130,
        "Schmunzelnd sehe ich Frank an, der nur mit einem leichten Lächeln die Schultern zuckt und sich eine Traube in den Mund wirft."
      );

      //Szene 2.1
      this.monologueD1 = new Monologue(
        160, 550, 705, 130,
        "Es war wirklich schön, mal wieder Zeit mit den beiden verbracht zu haben."
      );
      this.monologueD2 = new Monologue(
        160, 550, 705, 130,
        "Frank und Annegret scheinen immer viel um die Ihren zu haben, deshalb ist es schwer geworden, Zeit für ein Treffen zu finden."
      );
      this.monologueD3 = new Monologue(
        160, 550, 705, 130,
        "Vielleicht kann ich Frank ja mal fragen, ob er Lust hat, sich am Wochenende gemeinsam das Fußballspiel anzusehen. Am besten schreibe ich ihm jetzt direkt mal."
      );
      this.monologueD4 = new Monologue(
        160, 550, 705, 130,
        "..."
      );
      this.playerD1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Oh! Er antwortet schon."
      );
      this.frankD1 = new Text(
        160, 550, 705, 130,
        "Franks Nachricht",
        "Tut mir Leid. Wir sind dieses Wochenende schon verplant."
      );
      this.playerD2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Hm, das ist schade. Na ja, einen Versuch war es wert"
      );
      this.monologueD5 = new Monologue(
        160, 550, 705, 130,
        "Ich denke noch eine Weile nach, bis ich mich schließlich in meinen Träumen verliere."
      );

      //Szene 2.2
      this.playerE1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Gut, was brauche ich denn nochmal? Tomaten, Milch, Br-"
      );
      this.monologueE1 = new Monologue(
        160, 550, 705, 130,
        "Erschroken schaue ich von meinem Einkaufszettel auf, als ich versehentlich einen anderen Einkaufswagen ramme."
      );
      this.frankE1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Was zum-! Oh, hallo! Tut mir Leid, ich war völlig in Gedanken verloren."
      );
      this.playerE2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Kein Problem, ich habe ja auch nicht aufgepasst."
      );
      this.playerE3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Und, konntet ihr nach gestern noch ausschlafen?"
      );
      this.frankE2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Oh ja, nachdem du weg warst, bin ich direkt ins Bett gefallen."
      );
      this.playerE4 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ich habe mich auch direkt hingelegt, aber ich war noch eine Weile wach."
      );
      this.playerE5 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Du ja auch, du hast mir schließlich noch auf meine Nachricht geantwortet."
      );
      this.frankE3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Deine Nachricht…?"
      );
      this.playerE6 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ja, wegen dem Fußballspiel am Samstag. Schade, dass du nicht kannst, hoffentlich können wir es dafür bald nachholen."
      );
      this.frankE4 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Achso, ja, natürlich! Die Nachricht."
      );
      this.frankE5 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ja ich war doch noch eine Weile wach, weil wir noch aufgeräumt haben, und dann wollte Annegret etwas vorbereiten für heute, für so ein Treffen, zu dem sie geht, und da hat sie meine Hilfe gebraucht, und dann war es so spät, dass ich wohl bei der Müdigkeit die Nachricht vergessen habe, aber jetzt weiß ich es wieder!"
      );
      this.monologueE2 = new Monologue(
        160, 550, 705, 130,
        "Frank lacht verlegen und kratzt sich am Hinterkopf."
      );

    this.active = this.start;

    //Szene 1
    this.warning.changeNext(this.monologueA1, this);
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
    this.monologueB12.changeNext(this.monologueB13, this);
    this.monologueB13.changeNext(this.annegretB1, this);
    this.annegretB1.changeNext(this.monologueB14, this);
    this.monologueB14.changeNext(this.annegretB2, this);
    this.annegretB2.changeNext(this.frankB1, this);
    this.frankB1.changeNext(this.monologueB15, this);
    this.monologueB15.changeNext(this.monologueB16, this);
    this.monologueB16.changeNext(this.annegretB3, this);
    this.annegretB3.changeNext(this.monologueB17, this);
    this.monologueB17.changeNext(this.monologueB18, this);
    this.monologueB18.changeNext(this.frankB2, this);
    this.frankB2.changeNext(this.frankB3, this);
    this.frankB3.changeNext(this.monologueB19, this);
    this.monologueB19.changeNext(this.monologueB20, this);
    this.monologueB20.changeNext(this.annegretB4, this);
    this.annegretB4.changeNext(this.annegretB5, this);
    this.annegretB5.changeNext(this.monologueB21, this);
    this.monologueB21.changeNext(this.playerB5, this);
    this.playerB5.changeNext(this.monologueB22, this);

    //Szene 1.2
    this.monologueB22.changeNext(this.frankC1, this);
    this.frankC1.changeNext(this.playerC1, this);
    this.playerC1.changeNext(this.playerC2, this);
    this.playerC2.changeNext(this.monologueC1, this);
    this.monologueC1.changeNext(this.annegretC1, this);
    this.annegretC1.changeNext(this.decisionC1, this);
    this.decisionC1.changeNext1(this.playerC3, this);
    this.decisionC1.changeNext2(this.monologueC2, this);
    this.playerC3.changeNext(this.frankC2, this);
    this.frankC2.changeNext(this.monologueC2, this);

    //Szene 2.1
    this.monologueC2.changeNext(this.monologueD1, this);
    this.monologueD1.changeNext(this.monologueD3, this);
    this.monologueD3.changeNext(this.monologueD4, this);
    this.monologueD4.changeNext(this.playerD1, this);
    this.playerD1.changeNext(this.frankD1, this);
    this.frankD1.changeNext(this.playerD2, this);
    this.playerD2.changeNext(this.monologueD5, this);

    //Szene 2.2
    this.monologueD5.changeNext(this.playerE1, this);
    this.playerE1.changeNext(this.monologueE1, this);
    this.monologueE1.changeNext(this.frankE1, this);
    this.frankE1.changeNext(this.playerE2, this);
    this.playerE2.changeNext(this.playerE3, this);
    this.playerE3.changeNext(this.frankE2, this);
    this.frankE2.changeNext(this.playerE4, this);
    this.playerE4.changeNext(this.playerE5, this);
    this.playerE5.changeNext(this.frankE3, this);
    this.frankE3.changeNext(this.playerE6, this);
    this.playerE6.changeNext(this.frankE4, this);
    this.frankE4.changeNext(this.frankE5, this);
    this.frankE5.changeNext(this.monologueE2, this);
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