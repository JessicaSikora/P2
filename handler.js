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
        "Hi, Michael! Danke nochmal für deine Hilfe. Ohne dich hätte ich das niemals geschafft."
      );
      this.michaelB1 = new Text(
        160, 550, 705, 130,
        "Michael",
        "Guten Morgen! Kein Problem, bei sowas helfe ich immer gerne."
      );
      this.michaelB2 = new Text(
        160, 550, 705, 130,
        "Michael",
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
        "Ich grub in meiner Tasche und hielt triumphierend den Fund vor meine Nase, als ich das Namensschildchen ertastet hatte."
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
      this.michaelB3 = new Text(
        160, 550, 705, 130,
        "Michael",
        this.name.name.join("") + ", wir brauchen hier noch so ca. eine Stunde. Wenn du magst, kannst du dich ja mal in der Nachbarschaft umschauen und dich eventuell schon vorstellen?"
      );
      this.michaelB4 = new Text(
        160, 550, 705, 130,
        "Michael",
        "Ich weiß nicht, wie es in diesen gehobenen Vierteln so abläuft."
      );
      this.monologueB7 = new Monologue(
        160, 550, 705, 130,
        "Ich verdrehte die Augen. Das war ein durchgehender Scherz seit Michael gehört hatte, wo ich hinziehe."
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
        "Langsam nährte ich mich der Frau und begann leicht zu winken.                              Vorstellungen waren noch nie meine Stärke."
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
        "Annegret verdrehte schmunzelnd die Augen."
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
        "Sein Blick schweifte von seiner Frau, wie ich vermutete, zu mir. Lächelnd kam er mir entgegen."
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
        "Annegret",
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
        "... und dann hast du uns deutlich besiegt beim Torteessen. Ich frage mich immer noch, wie das alles in dich reingepasst hat."
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
      this.monologueC2 = new Monologue(
        160, 550, 705, 130,
        "Ich verstehe nicht, wieso Annegret diese Entscheidung für Frank trifft. Und schon gar nicht, wieso sie seine Figur kommentiert. Das ist ganz schön unangenehm."
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
      this.monologueC3 = new Monologue(
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
        "Tut mir Leid, " + this.name.name.join("") + ". Wir sind dieses Wochenende schon verplant."
      );
      this.playerD2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Hm, das ist schade. Na ja, einen Versuch war es wert."
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
        "Was zum-! Oh, hallo " + this.name.name.join("") + "! Tut mir Leid, ich war völlig in Gedanken verloren."
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
        "Ja ich war doch noch eine Weile wach, weil wir noch aufgeräumt haben, und dann wollte Annegret etwas vorbereiten für heute, für so ein Treffen, zu dem sie geht,"
      );
      this.frankE6 = new Text(
        160, 550, 705, 130,
        "Frank",
        "und da hat sie meine Hilfe gebraucht, und dann war es so spät, dass ich wohl bei der Müdigkeit die Nachricht vergessen habe, aber jetzt weiß ich es wieder!"
      )
      this.monologueE2 = new Monologue(
        160, 550, 705, 130,
        "Lügt Frank mich etwa gerade an? Es scheint nicht so, als wüsste er, welche Nachricht ich meine. Aber wenn er nicht geantwortet hat, dann kann es ja nur Annegret gewesen sein..."
      );
      this.monologueE3 = new Monologue(
        160, 550, 705, 130,
        "Frank lacht verlegen und kratzt sich am Hinterkopf."
      );
      this.playerE7 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Oh, was ist denn da passiert?"
      );
      this.monologueE4 = new Monologue(
        160, 550, 705, 130,
        "Ich deute auf seinen Arm, an dem Kratzer hinter seinem hochgerutschten Ärmel erscheint sind."
      );
      this.monologueE5 = new Monologue(
        160, 550, 705, 130,
        "Ruckartig nimmt er seinen Arm runter."
      );
      this.frankE7 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Es ist nichts. Hab bei der Arbeit nicht aufgepasst."
      );
      this.playerE8 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Wow, wie hast du das denn angestellt?"
      );
      this.frankE8 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Es ist echt nichts Großes, ich bin nur blöd gestolpert."
      );
      this.monologueE6 = new Monologue(
        160, 550, 705, 130,
        "Ich muss lachen. Es ist typisch für ihn, durch Tollpatschigkeit in schwierige Situationen zu geraten."
      );
      this.playerE9 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Oh Mann, du musst echt aufpassen, das sieht nicht harmlos aus."
      );
      this.monologueE7 = new Monologue(
        160, 550, 705, 130,
        "Seine Mundwinkel ziehen sich leicht nach oben."
      );
      this.frankE9 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ja, natürlich. Ich tue, was ich kann."
      );
      this.annegretE1 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Frank?"
      );
      this.monologueE8 = new Monologue(
        160, 550, 705, 130,
        "Annegret erscheint hinter ihrem Mann. Ihr Blick ist gereizt, doch er sänftigt sich wieder, als sie mich erblickt."
      );
      this.annegretE2 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Ach, deswegen dauert es so lange. Ich dachte mir schon, dass selbst jemand wie Frank nicht so lange brauchen kann, um die Eier zu finden."
      );
      this.monologueE9 = new Monologue(
        160, 550, 705, 130,
        "Annegret lacht auf, Frank scheint allerdings nicht sonderlich von ihrem Witz amüsiert zu sein."
      );
      this.annegretE3 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Freut mich, dich zu sehen, " + this.name.name.join("") + ". Ich würde gerne noch etwas quatschen, aber wir haben leider heute einiges vor."
      );
      this.playerE10 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Kein Problem, ich möchte euch auch gar nicht weiter aufhalten. Habt noch einen schönen Tag!"
      );
      this.annegretE4 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Dankeschön, wünschen wir dir auch."
      );
      this.frankE10 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ja, wir sehen uns."
      );
      this.monologueE10 = new Monologue(
        160, 550, 705, 130,
        "Und damit trennen sich unsere Wege."
      );
      this.playerE11 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Was brauche ich jetzt nochmal? Tomaten, Milch, Brot…"
      );

      //Szene 3
      this.monologueF1 = new Monologue(
        160, 550, 705, 130,
        "Am nächsten Tag klingelt es an der Tür."
      );
      this.monologueF2 = new Monologue(
        160, 550, 705, 130,
        "Als ich die Tür öffne, stürmt Annegret aufgebracht an mir vorbei. Tränen und verschmierte Wimperntusche laufen ihre Wangen hinunter."
      );
      this.playerF1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Hallo Annegret, was ist denn pa-"
      );
      this.monologueF3 = new Monologue(
        160, 550, 705, 130,
        "Energisch dreht sie sich zu mir um. Ihr Blick ist streng, ihre Hände sind zu Fäusten geballt."
      );
      this.annegretF1 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Ich kann nicht mehr, ich kann einfach nicht mehr! Frank treibt mich in den Wahnsinn!"
      );
      this.monologueF4 = new Monologue(
        160, 550, 705, 130,
        "Sie seufzt tief aus, doch ihre Haltung ist weiterhin angespannt."
      );
      this.annegretF2 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Du weißt ja, ich liebe Frank, er ist mein Ein und Alles. Aber genau aus diesem Grund gebe ich ihm so viel, ich gebe immer so viel ich kann und ich glaube das ist mein Problem."
      );
      this.annegretF3 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Und Frank scheint überhaupt nicht zu verstehen, was ich alles für ihn tue."
      );
      this.playerF2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Wie meinst du das?"
      );
      this.annegretF4 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Ich arbeite jeden Tag, schmeiße den Haushalt quasi alleine, kümmere mich um all die Verpflichtungen von Frank und mir, und das alles mit meinem kaputten Knie."
      );
      this.annegretF5 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Ich bin normalerweise die letzte Person, die sich beschwert. Ich bin daran gewöhnt immer alles selbst zu erledigen, aber ich wünschte mir, er wäre nicht immer so… passiv."
      );
      this.monologueF5 = new Monologue(
        160, 550, 705, 130,
        "Ich weiß nicht so ganz, was ich darauf erwidern soll. Frank schien mir immer ein hilfsbereiter und aufmerksamer Mensch zu sein."
      );
      this.monologueF6 = new Monologue(
        160, 550, 705, 130,
        "Habe ich die Dynamik zwischen den beiden eventuell falsch eingeschätzt?"
      );
      this.playerF3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Möchtest du mir vielleicht erzählen, was eben vorgefallen ist?"
      );
      this.monologueF7 = new Monologue(
        160, 550, 705, 130,
        "Annegret schaut kurz zur Seite und scheint ihre Gedanken zu sammeln."
      );
      this.annegretF6 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Frank wollte sich verabreden, obwohl er genau weiß, dass ich ihn da brauche, also habe ich ihm davon abgeraten. Dann wurde er sauer auf mich, dabei weiß er schon seit Wochen, dass ich ihn da brauche."
      );
      this.annegretF7 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Ich schreibe ihm ja wirklich ungern etwas vor, aber manchmal denkt der Mann einfach nicht nach! Ist es nicht verständlich, dass ich da auf Dauer frustriert bin?"
      );
      this.playerF4 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ja, ich verstehe absolut, was du meinst… Aber wenn es schon angesprochen war, wieso ist Frank denn dann wütend geworden?"
      );
      this.annegretF8 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Es ist nun mal so, dass Frank sich gerne in die Opferrolle stellt und das nimmt er selbst gar nicht richtig wahr. Frank und ich sind jetzt schon seit über 15 Jahren zusammen, niemand kennt ihn besser als ich, und es ergibt Sinn, dass er so ist."
      );
      this.monologueF = new Monologue(
        160, 550, 705, 130,
        "Ich habe nie mitbekommen, dass Frank sich unberechtigterweise als das Opfer dargestellt hat. Wieso würde sie sowas über ihn sagen?"
      );
      this.annegretF9 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Er war ein Einzelkind und seine Eltern gaben ihm nicht viel Aufmerksamkeit. Er braucht es, dass andere ihn bemitleiden. Aber er muss es nun mal lernen zu verstehen, wenn er einen Fehler macht. Ich will ja nur das Beste für ihn…"
      );
      this.decisionF1 = new Decision(
        160, 550, 340, 130,
        "Mit Annegret sympathisieren.", "Mit Frank sympathisieren."
      );
      this.playerF5 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Das muss wirklich anstrengend für dich sein. Tut mir leid, dass es bei dir und Frank momentan nicht so gut läuft."
      );
      this.annegretF10 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Tja, es ist, wie es ist. Auch, wenn es nicht einfach für mich ist, ist unsere Ehe das Wichtigste für mich. Ich werde uns niemals aufgeben."
      );
      this.monologueF8 = new Monologue(
        160, 550, 705, 130,
        "Ich muss lächeln."
      );
      this.playerF6 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Das freut mich sehr zu hören. Ihr beide sind ein wirklich schönes Paar, es würde mir das Herz brechen, wenn das Verhältnis zwischen euch bricht."
      );
      this.annegretF11 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Dankeschön, " + this.name.name.join("") + ". Es tut gut, verstanden zu werden."
      );
      this.playerF7 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Vielleicht hat sich Frank ja auch etwas beruhigt und ihr könnt das klären."
      );
      this.annegretF12 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Nee. Tut mir leid, aber heute habe ich keinen Nerv mehr für ihn. Ich gehe vermutlich einfach direkt schlafen. Gute Nacht und danke für deine Zeit."
      );
      this.playerF8 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Keine Ursache. Gute Nacht!"
      );
      this.monologueF9 = new Monologue(
        160, 550, 705, 130,
        "Damit läuft sie an mir vorbei und verlässt das Haus."
      );

      this.playerF9 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ich kenne Franks Perspektive nicht, aber er wird sicherlich Gründe für seine Reaktion haben. Vielleicht könnt ihr einen Kompromiss für euer Problem finden."
      );
      this.monologueF10 = new Monologue(
        160, 550, 705, 130,
        "Annegrets Gesichtsauszüge verhärten sich als sie den Blick abwendet."
      );
      this.annegretF13 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Es tut mir leid, ich hätte gar nicht erst herkommen sollen."
      );
      this.playerF10 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Was? Nein, ich meinte nur, dass-"
      );
      this.annegretF14 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Schon gut. Es war klar, dass mich niemand verstehen würde. Ich weiß gar nicht, was ich mir erhofft habe."
      );
      this.playerF11 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Warte, Annegret, ich wollte doch nicht-"
      );
      this.monologueF11 = new Monologue(
        160, 550, 705, 130,
        "Bevor ich meinen Satz beenden konnte, hat Annegret das Haus bereits verlassen. Das war ein ziemliches Fettnäppchen."
      );
      this.monologueF12 = new Monologue(
        160, 550, 705, 130,
        "Grübelnd über das Gespräch laufe ich zurück ins Wohnzimmer, als ich Frank vom Fenster aus im Garten sitzen sehe."
      );
      this.decisionF2 = new Decision(
        160, 550, 340, 130,
        "Frank ansprechen.", "Annegret und Frank Freiraum geben."
      );
      this.playerF12 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Hallo, Frank."
      );
      this.monologueF13 = new Monologue(
        160, 550, 705, 130,
        "Erschrocken schießt Frank in die Höhe. Er hatte mich wohl nicht kommen gehört."
      );
      this.frankF1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Oh, du bist es. Hallo."
      );
      this.playerF13 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Wie geht es dir?"
      );
      this.frankF2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Hat Annegret mit dir gesprochen?"
      );
      this.playerF14 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ja, sie war eben kurz bei mir."
      );
      this.frankF3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ah, dann weißt du sicherlich schon über unsere Auseinandersetzung Bescheid."
      );
      this.monologueF14 = new Monologue(
        160, 550, 705, 130,
        "Ich nicke."
      );
      this.playerF15 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ist bei euch denn alles in Ordnung? Ich habe eure Ehe immer als sehr stabil angesehen."
      );
      this.frankF4 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Konflikte gehören zu jeder gesunden Beziehung dazu, das ist nichts Unübliches. Letztendlich weiß ich ja, dass Annegret recht hat. Ich habe überreagiert."
      );
      this.decisionF3 = new Decision(
        160, 550, 340, 130,
        "Optimistisch sein.", "Validierend sein."
      );
      this.playerF16 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ich bin sicher, ihr könnt das klären. Ihr seid schon so lange zusammen, das bekommt ihr hin."
      );
      this.frankF5 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Du hast recht, ich könnte sie auf keinen Fall einfach so verlassen. Nicht nach all der Zeit…"
      );
      this.playerF17 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Genau, du solltest nicht aufgeben."
      );
      this.monologueF15 = new Monologue(
        160, 550, 705, 130,
        "Frank atmet tief durch und lässt seine Schultern sacken."
      );
      this.frankF6 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Danke, " + this.name.name.join("") + ". Ich gehe mal versuchen, es wieder gut zu machen. Wir sehen uns."
      );
      this.playerF18 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Viel Erfolg!"
      );
      this.monologueF16 = new Monologue(
        160, 550, 705, 130,
        "Ich schlendere wieder zurück nach Hause. Hoffentlich versöhnen sich die beiden wieder."
      );

      this.playerF19 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ich denke nicht, dass du überreagiert hast. Viel eher denke ich, dass Annegret deine Sicht nicht so gut versteht. Vielleicht hilft es euch, an eurer Kommunikation zu arbeiten."
      );
      this.frankF7 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ich habe versucht, ihr meine Perspektive zu erklären. Sie war nur so aufgebracht und dann ist es etwas aus dem Ruder gelaufen."
      );
      this.monologueF17 = new Monologue(
        160, 550, 705, 130,
        "Ich bin etwas verstutzt. Annegret hat eher Frank als die emotionale Person in der Situation dargestellt."
      );
      this.playerF20 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Habt ihr denn öfter solche Auseinandersetzungen?"
      );
      this.monologueF18 = new Monologue(
        160, 550, 705, 130,
        "Frank starrt in die Ferne und überlegt kurz, bevor er mir eine Antwort gibt."
      );
      this.frankF8 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Naja, ab und zu halt. Wäre ja auch komisch, wenn nicht, oder?"
      );
      this.monologueF19 = new Monologue(
        160, 550, 705, 130,
        "Ist es das? Franks Aussage gibt nicht wirklich preis, wie häufig nun Streitigkeiten aufkommen."
      );
      this.frankF9 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Naja, ich sollte mal wieder reingehen und versuchen, das mit Annegret zu klären. Danke für deine Unterstützung, " + this.name.name.join("") + "."
      );
      this.playerF21 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Kein Problem. Melde dich ruhig, wenn was ist."
      )
      this.monologueF20 = new Monologue(
        160, 550, 705, 130,
        "Er lächelt kurz und begibt sich dann ins Haus. Ich seufze und laufe ebenfalls nach Hause."
      );

      this.monologueF21 = new Monologue(
        160, 550, 705, 130,
        "Ich sollte die beiden in Ruhe lassen, vielleicht können sie ihren Konflikt ja doch noch heute klären."
      );

      //Szene 4.1
      this.playerG1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Verdammt, ist es warm hier drin."
      );
      this.monologueG1 = new Monologue(
        160, 550, 705, 130,
        "Ich öffne das Fenster, werfe mich aufs Bett und seufze."
      );
      this.playerG2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Bin ich richtig mit der Situation umgegangen? Ich frage mich, ob bei Frank und Annegret alles in Ordnung ist."
      );
      this.monologueG2 = new Monologue(
        160, 550, 705, 130, 
        "Ich schrecke auf, als von der anderen Straßenseite ein lautes Krachen ertönt. Kam das aus Franks und Annegrets Haus?"
      );
      this.monologueG3 = new Monologue(
        160, 550, 705, 130,
        "Aus Neugier lunse ich aus dem Fenster, um die Quelle ausfindig zu machen. Im Haus gegenüber sind noch Lichter an, aber mehr als das sehe ich nicht und ich möchte meine Freunde ungern weiter beobachten."
      );
      this.playerG3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ob das tatsächlich von Frank und Annegret kam? Das klang nämlich gar nicht gut. Hoffentlich ist alles in Ordnung."
      );
      this.monologueG4 = new Monologue(
        160, 550, 705, 130,
        "Erschöpft werfe ich mich zurück aufs Bett und schlafe wenige Sekunden später ein."
      );

      //Szene 4.2
      this.monologueH1 = new Monologue(
        160, 550, 705, 130,
        "Als ich am darauffolgenden Tag das Haus verlasse, begegne ich Frank auf seinem Weg nach Hause."
      );
      this.playerH1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Hallo, Lieblingsnachbar! Wie geht es dir?"
      );
      this.monologueH2 = new Monologue(
        160, 550, 705, 130,
        "Als er sich zu mir umdreht, blickt er mir mit einem müden Ausdruck und dunklen Augenringen entgegen."
      );
      this.frankH1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ach, ganz gut. Nur ein bisschen müde."
      );
      this.decisionH1 = new Decision(
        160, 550, 340, 130,
        "Auf das Geräusch ansprechen.", "Nicht auf das Geräusch ansprechen."
      );
      this.playerH2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ihr beide wart ja scheinbar auch noch relativ lange wach. Was war das denn letzte Nacht für ein lautes Geräusch, ist bei euch etwas kaputt gegangen?"
      );
      this.monologueH3 = new Monologue(
        160, 550, 705, 130,
        "Frank runzelt die Stirn."
      );
      this.frankH2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Achso, ja. Bei uns ist nur eine Lampe zerbrochen. Die war ganz blöd an der Ecke vom Schreibtisch platziert und da bin ich dagegen gekommen."
      );
      this.monologueH4 = new Monologue(
        160, 550, 705, 130,
        "Ich stutze."
      );
      this.playerH3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ach echt? Das klang irgendwie viel lauter…"
      );
      this.frankH3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ergibt ja nur Sinn, um die Uhrzeit ist in der Gegend immer alles unheimlich still."
      );
      this.playerH4 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ja, du hast Recht."
      );
      this.decisionH2 = new Decision(
        160, 550, 340, 130,
        "Nach Annegret fragen.", "Nicht nach Annegret fragen."
      );
      this.playerH5 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Und wie steht es mit dir und Annegret? Habt ihr nochmal über euren Konflikt gesprochen?"
      );
      this.frankH4 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Bitte nimm das nicht persönlich, aber ich glaube dieser Konflikte ist eher Annegrets und meine Privatangelegenheit."
      );
      this.decisionH3 = new Decision(
        160, 550, 340, 130,
        "Privatsphäre respektieren.", "Besorgnis ausdrücken."
      );
      this.monologueH5 = new Monologue(
        160, 550, 705, 130,
        "Ich bin etwas überrascht über Franks kalten Ton. Aber er hat Recht, ich sollte mich nicht weiter in ihre Probleme einmischen."
      );
      this.playerH6 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Natürlich. Es tut mir leid. Ich wollte euch nicht zu nahe treten."
      );
      this.frankH5 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Alles gut, ich schätze es, dass du dich so um uns kümmerst. Aber Annegret und ich sind schon lange zusammen, sowas gehört einfach dazu."
      );

      this.monologueH6 = new Monologue(
        160, 550, 705, 130,
        "Ich bin etwas überrascht über Franks kalten Ton."
      );
      this.playerH7 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ich weiß, und es tut mir leid, dass ich so aufdringlich rüberkam. Ich möchte nur, dass ihr wisst, dass ich da bin, falls ihr meine Unterstützung braucht."
      );
      this.monologueH7 = new Monologue(
        160, 550, 705, 130,
        "Frank seufzt tief und denkt für einen kurzen Moment nach."
      );
      this.frankH6 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Tut mir Leid, das war ein bisschen grob von mir. Es ist gerade nur etwas… viel. Aber es ist okay, wir werden okay sein. Streiten gehört dazu."
      );

      this.monologueH8 = new Monologue(
        160, 550, 705, 130,
        "Als ob er sich plötzlich daran erinnert hätte, zieht Frank eilig sein Handy aus der Hosentasche."
      );
      this.monologueH9 = new Monologue(
        160, 550, 705, 130,
        "Franks Handy zeigt 13 verpasste Anrufe und 19 unbeantwortete Nachrichten von Annegret an. Was zur Hölle ist der Grund dafür, dass sie so oft anruft?"
      );
      this.frankH7 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Oh nein..."
      );
      this.playerH8 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Was ist los?"
      );
      this.frankH8 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Oh- Äh- Annegret! Sie hat mich angerufen..."
      );
      this.monologueH10 = new Monologue(
        160, 550, 705, 130,
        "Frank stammelt seine Antworten vor sich hin als er abwesend auf sein Handy schaut."
      );
      this.frankH9 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ich- Tut mir leid. Ich muss los. Wir sehen uns!"
      );
      this.monologueH11 = new Monologue(
        160, 550, 705, 130,
        "Bevor ich antworten kann, läuft er mit dem Handy am Ohr davon."
      );

      //Szene 5.1
      this.monologueI1 = new Monologue(
        160, 550, 705, 130,
        "Angestrengt öffne ich die Augen und schütze sie mit meiner Hand vor den Sonnenstrahlen, die sich durch meinen Rollladen quetschen."
      );
      this.monologueI2 = new Monologue(
        160, 550, 705, 130,
        "Ich habe ziemlich unruhig geschlafen und bin alles andere als ausgeruht, also bleibe ich noch eine Weile liegen."
      );
      this.monologueI3 = new Monologue(
        160, 550, 705, 130,
        "Mich lässt der Gedanke nicht los, dass ich etwas übersehen habe. In letzter Zeit sehe ich eine ganz neue Seite von Annegrets und Franks Ehe."
      );
      this.monologueI4 = new Monologue(
        160, 550, 705, 130,
        "Nachdem Annegret weinend zu mir kam, konnte ich nur Mitleid ihr gegenüber empfinden. Sie scheint sehr unter Druck zu stehen."
      );
      this.monologueI5 = new Monologue(
        160, 550, 705, 130,
        "Mir war schon vorher klar, dass Frank ganz schön verstreut sein kann, doch ich wusste nicht, dass es sich so negativ auf ihre Ehe auswirkt."
      );
      this.monologueI6 = new Monologue(
        160, 550, 705, 130,
        "In letzter Zeit scheint er auch etwas gereizt zu sein, was ist der Grund dafür?"
      );
      this.monologueI7 = new Monologue(
        160, 550, 705, 130,
        "Ich wollte Frank ein Stück Kuchen geben, doch dann hat Annegret es Frank verboten. Ich meine, ich verstehe ihre Fürsorge... Aber es war ziemlich unangenehm, vor allem, dass sie seinen Körper kommentiert hat."
      );
      this.monologueI8 = new Monologue(
        160, 550, 705, 130,
        "Oh Mann. Jetzt, wo ich so darüber nachdenke, haben Frank und ich uns seit Monaten nicht mehr zu zweit getroffen. Als er das Treffen zum Fußballschauen abgesagt hat und ich ihn im Supermarkt darauf angesprochen habe, hatte er keine Ahnung wovon ich gesprochen habe und dann seine Geschichte verändert, um Ausreden zu suchen. Beantwortet Annegret etwa Nachrichten von Frank hinter seinem Rücken?"
      );
      this.monologueI9 = new Monologue(
        160, 550, 705, 130,
        "Ach ja, die Verletzung an Franks Arm... Er hat auf meine Frage hin defensiv reagiert. Es scheint ziemlich unglaubwürdig, dass die Wunden auf der Arbeit entstanden sind. Könnte es tatsächlich sein, dass Annegret..."
      );
      this.monologueI10 = new Monologue(
        160, 550, 705, 130,
        "Annegret kam aufgebracht zu mir nach Hause. Ich glaube ihr, dass sie gestresst und überfordert ist. Aber die Art und Weise, wie sie über Frank gesprochen hat, war etwas respektlos und herablassend."
      );
      this.monologueI11 = new Monologue(
        160, 550, 705, 130,
        "Das Krachen im Haus! Mag ja sein, dass tatsächlich eine Lampe zerbrochen ist, aber nach all dem, was sonst noch passiert ist, kommt mir das ziemlich suspekt vor. "
      );
      this.monologueI12 = new Monologue(
        160, 550, 705, 130,
        "Nach dem Streit hat Annegret Frank 13 Mal angerufen und 19 Nachrichten verschickt. Vielleicht wollte sie es dringend wieder gut machen. Was mich eher zum Nachdenken bringt, ist, wie beunruhigt Frank darauf reagiert hat. Fast, als hätte er Angst."
      );
      this.monologueI14 = new Monologue(
        160, 550, 705, 130,
        "Je länger ich mir das durch den Kopf gehen lasse, desto mehr habe ich das Gefühl, dass da etwas nicht stimmt. Ich will allerdings nicht fälschlicherweise eingreifen und eine Ehe zerstören."
      );
      this.monologueI15 = new Monologue(
        160, 550, 705, 130,
        "Schließlich bedeuten häufige Streitereien nicht gleich, dass jemand misshandelt wird. Und alles andere könnten lediglich Missverständnisse sein, vielleicht reime ich mir da was ganz Falsches zusammen."
      );
      this.monologueI16 = new Monologue(
        160, 550, 705, 130,
        "Ja, vielleicht waren es nur einmalige Vorfälle und ich ziehe voreilige Schlüsse, doch es tauchen immer mehr Bilder und Situationen in meinem Kopf auf, die meine Befürchtung bestärken. Ich schätze, ich stehe vor einer sehr großen Entscheidung."
      );
      this.decisionI1 = new Decision(
        160, 550, 340, 130,
        "Eingreifen.", "Raushalten."
      );
      this.monologueI17 = new Monologue(
        160, 550, 705, 130,
        "Ich muss dringend mit Frank sprechen. Wenn seine Ehe mit Annegret tatsächlich so ungesund ist, wie es mir scheint, würde ich es mir nie verzeihen, wenn ich nicht versucht hätte, ihm zu helfen."
      );
      this.monologueI18 = new Monologue(
        160, 550, 705, 130,
        "Ich schieße in die Luft, nehme mein Handy in die Hand und rufe sofort bei Frank an. Wenn ich mir weiter den Kopf darüber zerbreche, werde ich mich nur wieder selbst verunsichern und zögern."
      );
      this.monologueI19 = new Monologue(
        160, 550, 705, 130,
        "Adrenalin schießt durch meinen Körper als es anfängt zu piepen und ich laufe nervös in meinem Schlafzimmer auf und ab."
      );
      this.frankI1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Hallo?"
      );
      this.playerI1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Oh, äh, hallo Frank! Hier ist " + this.name.name.join("") + ". Hör mal, ich habe da was für dich, magst du später vorbeikommen, damit ich es dir geben kann?"
      );
      this.frankI2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ähm, ja klar. Ich komm dann so abends kurz vorbei, wenn es dir passt. Ist alles in Ordnung? Du klingst etwas unruhig."
      );
      this.playerI2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Haha, ach wirklich? Nein, bei mir ist alles supi! Wir sehen uns dann später, ja?"
      );
      this.frankI3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Okay, ich bin dann so gegen 18 Uhr bei dir. Bis später."
      );

      this.monologueI20 = new Monologue(
        160, 550, 705, 130,
        "Ich kann mich da nicht einfach so einmischen, vor allem, weil ich überhaupt keine Beweise für meine Vermutung habe. Wenn Frank tatsächlich Hilfe braucht, wird er sicher wissen, dass er sich bei mir melden kann."
      );

      //Szene 5.2
      this.monologueJ1 = new Monologue(
        160, 550, 705, 130,
        "Den Rest des Tages verbrachte ich damit, mir verschiedene Szenarien dafür auszumalen, wie dieses Gespräch verlaufen könnte. Wird er meine Bedenken verstehen? Wird er meine Hilfe annehmen?"
      );
      this.monologueJ2 = new Monologue(
        160, 550, 705, 130,
        "Als es an der Tür klingelt, sprinte ich in schnellen Schritten zur Tür und öffne sie."
      );
      this.monologueJ3 = new Monologue(
        160, 550, 705, 130,
        "Vor mir steht ein leicht verwirrter, aber freundlich lächelnder Frank."
      );
      this.frankJ1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Hi! Wie geht's dir?"
      );
      this.playerJ1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ach, ganz gut, und dir so? Komm erstmal rein und setz dich hin. Magst du was trinken?"
      );
      this.frankJ2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Passt schon, außerdem weiß ich ja wo alles steht, also mach dir dabei mal keine Sorgen. Mir geht’s gut. Was wolltest du mir denn geben?"
      );
      this.playerJ2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ja richtig, warte kurz."
      );
      this.monologueJ4 = new Monologue(
        160, 550, 705, 130,
        "Ich husche schnell in die Küche, um den Tee zu holen, den ich letztens besorgt und immer wieder vergessen habe, ihm zu geben."
      );
      this.monologueJ5 = new Monologue(
        160, 550, 705, 130,
        "Ein Glück hatte ich das noch da. Es war der perfekte Vorwand, um ihn herzubringen."
      );
      this.frankJ3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ach ja, danke schön! Ich kann es kaum erwarten, ihn zu probieren."
      );
      this.playerJ3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Bevor du gehst, möchte ich noch etwas Wichtiges mit dir besprechen..."
      );
      this.monologueJ6 = new Monologue(
        160, 550, 705, 130,
        "Aufmerksam sieht er mich an und lächelt sanft."
      );
      this.frankJ4 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Natürlich, worum geht es denn?"
      );
      this.playerJ4 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Es geht um dich und Annegret. Ich kenne euch ja jetzt schon eine Weile, aber in letzter Zeit kommt es mir immer mehr so vor, dass er Verhältnis nicht so gesund ist. Ist bei dir alles in Ordnung, Frank?"
      );
      this.frankJ5 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ich weiß nicht so ganz, wovon genau du sprichst. Meinst du unseren Konflikt letztens? Dass sich verheiratete Paare streiten ist doch vollkommen normal. "
      );
      this.playerJ5 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Das weiß ich, aber ich denke, dass es in diesem Ausmaß nicht gesund ist. Und dabei spreche ich nicht nur von dem Streit, mir sind mehrere Dinge aufgefallen."
      );
      this.playerJ6 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Weißt du noch als Annegret das mit der Torte gesagt hat? Dass du nichts mehr Essen solltest, weil du auf deine Linie achten solltest. Obwohl du aus so gut wie nur Muskeln bestehst?"
      );
      this.playerJ7 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Diese Geschichte mit der Nachricht war auch nicht wirklich ehrlich, oder? In Wahrheit hat Annegret für dich geantwortet, das war in deiner Reaktion relativ gut herauszufinden."
      );
      this.playerJ8 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Deine Kratzer und blauen Flecken auf deinem Oberarm sind in Wirklichkeit auch nicht einfach so passier, oder? Die Position der Verletzungen stimmt nicht ganz mit deinem gesagten überein und die Kratzer sehen sehr nach tiefen Kratzspuren aus."
      );
      this.playerJ9 = new Text(
        160, 550, 705, 130,
        "Ich",
        "In der Nacht als ich dieses Krachen gehört habe, das hat sich nicht sehr nach Ausversehen angehört. Wir wissen beide, dass das etwas geschmissenes war. Für alles andere war das zu stark und zu schnell."
      );
      this.playerJ10 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Als du die Nachrichten bekommen hast von Annegret, die du verpasst hast. Bist du vollkommen panisch und entgeistert weggerannt. Wärst du nicht mit so einer schockierten Miene davongerannt, hätte ich fast gedacht, dass nichts daran wäre."
      );
      this.monologueJ7 = new Monologue(
        160, 550, 705, 130,
        "Gegenüber von mir beobachtet mich Frank wortlos mit steinernem Blick."
      );
      this.playerJ11 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Es tut mir Leid, dass ich mich so in eure Privatsphäre einmische, aber ich möchte hier das Richtige tun. Ich mache mir Sorgen um dich, weil es nicht so aussieht, als wärst du wirklich glücklich in dieser Beziehung."
      );

      this.monologueJ8 = new Monologue(
        160, 550, 705, 130,
        "Frank sagt immer noch nichts, doch ich sehe ihm an, dass er innerlich mit sich ringt. Es tut weh, ihn so leidend zu sehen."
      );
      this.frankJ6 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Das siehst du ganz falsch, Annegret macht sich einfach nur Sorgen um mich. Sie meint es gut, sie will mir nicht weh tun..."
      );
      this.playerJ12 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Mag sein, dass sie sich Sorgen um dich macht, aber das geht weit darüber hinaus. Es gibt ihr keine Berechtigung, dich so zu kontrollieren und dir wehzutun."
      );
      this.frankJ7 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Du weißt doch, wie Annegret ist. Sie ist einfach nur sehr fürsorglich und manchmal etwas intensiv. Aber ich weiß, dass sie mich liebt."
      );
      this.playerJ13 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Frank... Ihre Liebe bedeutet nicht, dass du den Schmerz, den sie dir zufügt, tolerieren musst. Du bist ihr nichts schuldig. Wie oft nimmt sie Rücksicht darauf, was du willst und wie du dich fühlst? Ist es wirklich Liebe, wenn sie deine Gefühle und Bedürfnisse vernachlässigt?"
      );
      this.monologueJ9 = new Monologue(
        160, 550, 705, 130,
        "Der Fakt, dass Frank meine Argumente nicht widerlegt, zeigt mir, dass ich mit meinen Schlüssen wohl richtig lag."
      );
      this.frankJ8 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Was denkst du, was ich tun sollte?"
      );
      this.monologueJ10 = new Monologue(
        160, 550, 705, 130,
        "Frank sieht mich mit glasigen Augen an und seine Stimme ist brüchig. Das ist das erste Mal, dass ich ihn so zerstört sehe. Es rammt mir Schwerter in die Brust. Was soll ich ihm sagen? Ich kann ihm nicht diktieren, was er tun sollte, ich weiß es ja selbst nicht."
      );
      this.playerJ14 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Ich weiß leider auch nicht, was das Beste wäre und vor allem, was du gerade willst und brauchst. Ich würde dir ja anbieten, dass du hier bleiben kannst, aber vermutlich ist das zu nah bei Annegret."
      );
      this.playerJ15 = new Text(
        160, 550, 705, 130,
        "Ich",
        "So oder so ist es aber meiner Meinung nach wichtig, dass du erstmal Distanz zu ihr gewinnst und dann schauen wir weiter. Ich werde dich auf jeden Fall unterstützen, egal was jetzt kommt."
      );
      this.monologueJ11 = new Monologue(
        160, 550, 705, 130,
        "Ich lächle ihn so warm ich kann an und halte ihm meine Hand hin, falls er sie braucht. Seufzend nimmt er sie an und drückt sie, seine Schultern sacken erschöpft zusammen."
      );
      this.frankJ9 = new Text(
        160, 550, 705, 130,
        "Ich schätze du hast recht, ich kann jetzt nicht einfach zurück nach Hause gehen und so tun als wäre nichts..."
      );
      this.playerJ16 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Vielleicht kannst du vorübergehend bei jemand anderem unterkommen, zum Beispiel bei deiner Mutter. Ich fahre dich auch gerne hin."
      );
      this.frankJ10 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Das klingt nach einer guten Idee. Vielen Dank, " + this.name.name.join("")
      );
      this.monologueJ12 = new Monologue(
        160, 550, 705, 130,
        "Nachdem er sich etwas gefangen hat und er bereit ist loszufahren, steigen wir ins Auto auf dem Weg zu seiner Mutter. Er meint, das wäre der Ort, an dem er jetzt am liebsten wäre. Seine Augen blicken dabei ins Leere und er sieht vollkommen am Ende aus."
      );
      this.monologueJ13 = new Monologue(
        160, 550, 705, 130,
        "Als wir dort ankommen, umarme ich ihn ein letztes Mal und begrüße seine Mutter höflich, bevor ich nach Hause fahre. Ich hoffe wirklich sehr, dass ich das Richtige getan habe."
      );
      
      this.frankJ11 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Aber das bin ich! Ja natürlich streiten wir uns, wir sind von Grund auf verschieden! Aber wir arbeiten daran. Annegret ist eine super Ehefrau, manchmal vielleicht etwas aufbrausend und emotional, aber sie hat ein Herz und sie ist das Wichtigste in meinem Leben!"
      );
      this.frankJ12 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Wenn ich mir das so bei dir anhöre, bin ich mir nicht sicher, ob es dir wirklich um mein Wohl geht, oder es nicht doch einen anderen Grund hat. Eines kann ich dir aber sagen, du liegst falsch. Und wärst du ein wahrer Freund, dann wüsstest du das."
      );
      this.monologueJ14 = new Monologue(
        160, 550, 705, 130,
        "Frank sieht mich mit einem stechenden Blick an."
      )
      this.frankJ13 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Vielen Dank für den Tee, ich gehe jetzt. Ich habe dir schon einmal gesagt, dass du dich nicht in unsere Privatangelegenheiten einmischen sollst. Respektier das."
      );
      this.monologueJ15 = new Monologue(
        160, 550, 705, 130,
        "Bevor ich noch etwas äußern kann, läuft er die Tür hinaus, ohne einmal zurück zu sehen.  Verzweifelt raufe ich mir die Haare. Was habe ich nur getan? Lag ich falsch? Geht es ihm wirklich gut? Der Schmerz in meiner Brust lähmt mich, da ich genau weiß, dass ich soeben meinen besten Freund verloren habe."
      );

      //good ending
      this.monologueK1 = new Monologue(
        160, 550, 705, 130,
        "In den darauf folgenden Tagen schreibe ich immer mal wieder mit Frank, um zu schauen, wie es ihm geht. Es tut mir leid, dass er so eine schwere Zeit durchmachen muss."
      );
      this.monologueK2 = new Monologue(
        160, 550, 705, 130,
        "Er erzählte mir, dass er für eine kleine Zeit bei seiner Mutter wohnen wird, bis er eine andere Wohnung gefunden hat. Er hatte auch ein kurzes Telefonat mit Annegret, in welchem er den Schlussstrich gezogen hat."
      );
      this.monologueK3 = new Monologue(
        160, 550, 705, 130,
        "Es freut mich zwar zu sehen, dass er sich endlich darum kümmert, was er braucht, nur kann ich mir gut vorstellen, dass das immense Kraft von ihm verlangt."
      );
      this.monologueK4 = new Monologue(
        160, 550, 705, 130,
        "Auch heute klingelt mein Handy, während ich etwas auf der Couch esse. Schnell nehme ich ab, denn ich weiß schon genau, wer anruft."
      );
      this.playerK1 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Hey, na? Wie geht es dir?"
      );
      this.frankK1 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Man lebt und atmet. Hör mal, ich komme gleich vorbei, um ein paar meiner Sachen zu holen. Kannst du mir dabei bitte helfen? Ich bin mir nicht sicher, ob ich dort alleine hin kann."
      );
      this.playerK2 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Klar, kein Problem. Schreib mir einfach, wenn du da bist und ich komme raus."
      );
      this.frankK2 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Super, danke! Übrigens, erinnerst du dich noch an das Therapiezentrum in der Nähe des Einkaufszentrums, wo ich arbeite? Ich hab mich doch da auf einen Platz beworben."
      );
      this.playerK3 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Natürlich erinnere ich mich. Haben sie sich etwa schon bei dir gemeldet?"
      );
      this.frankK3 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Ja, ich habe einen Termin in zwei Wochen für das Erstgespräch ausgemacht! Es wird dann ausgemacht, ob ich dort einen Therapieplatz bekomme, mal sehen."
      );
      this.monologueK5 = new Monologue(
        160, 550, 705, 130,
        "Glücklich springe ich auf und werfe dabei fast das Glas Wasser um, das auf dem Tisch steht."
      );
      this.playerK4 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Das ist super! Ich freu mich so für dich und ich bin zuversichtlich, dass das was wird."
      );
      this.frankK4 = new Text(
        160, 550, 705, 130,
        "Frank",
        "Hehe, danke. Wir sehen uns später, ja? Ich muss noch ein bisschen was erledigen."
      );
      this.playerK5 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Alles klar, bis später!"
      );
      this.monologueK6 = new Monologue(
        160, 550, 705, 130,
        "Zufrieden lege ich mein Handy neben mich. Natürlich ist die Situation keineswegs angenehm und ich weiß immer noch nicht, wie ich mit Annegret umgehen soll, wenn ich sie auf der Straße treffe, aber es ist eine, in welcher es ihm gut geht und er anfängt, weiterzugehen."
      );
      this.monologueK7 = new Monologue(
        160, 550, 705, 130,
        "Das wird zwar eine ganze Weile brauchen, bis er sich erholt hat und die vollständige Normalität eintrifft, aber jeder kleinste Schritt zählt."
      );

      //bad ending
      this.monologueL1 = new Monologue(
        160, 550, 705, 130,
        "Am nächsten Tag treffe ich auf Annegret, die vor ihrem Haus die Post holt. Höflich lächle ich sie an und winke ihr zur Begrüßung zu, dabei ernte ich nur einen eisigen Blick von ihr. "
      );
      this.monologueL2 = new Monologue(
        160, 550, 705, 130,
        "Trauer und Frustration breitet sich wieder wie ein Feuer in mir aus. Natürlich hat Frank ihr davon erzählt, was denn sonst. Verletzt setze ich meinen Tag wie gewohnt fort."
      );
      this.monologueL3 = new Monologue(
        160, 550, 705, 130,
        "Das läuft einige Wochen lang so. Frank ignoriert mich vollkommen und Annegret verhält sich weiterhin wie die gekrönte Eiskönigin."
      );
      this.monologueL4 = new Monologue(
        160, 550, 705, 130,
        "Als ich eines Abends von einem weiteren, anstrengenden Arbeitstag nach Hause komme, bin ich mehr als überrascht, als ich mehrere Polizeiwagen vor dem Haus von Annegret und Frank stehen sehe."
      );
      this.monologueL5 = new Monologue(
        160, 550, 705, 130,
        "Dutzende Szenarien darüber, was passiert sein könnte, spielen sich in meinem Kopf ab, als ich mich besorgt zu den neugierigen Nachbarn und Passanten stelle."
      );
      this.playerL1 = new Text(
        160, 550, 705, 130, 
        "Ich",
        "Was ist hier los? Ist etwas Schlimmes passiert?"
      );
      this.personL1 = new Text(
        160, 550, 705, 130,
        "Nachbarin",
        "Es ist eine tragische Geschichte. Die Frau in dem Haus soll ihren Mann mehrmals mit einem Messer angegriffen haben. Ich hätte das selbst nicht geglaubt, hätte ich den Armen nicht blutend auf einer Trage gesehen."
      );
      this.monologueL6 = new Monologue(
        160, 550, 705, 130,
        "Mein Herz sackt in meine Hose und mir ist schlagartig kotzübel. Alles beginnt sich zu drehen und ich stütze mich mit meiner letzten Kraft an dem Hydranten neben mir ab."
      );
      this.monologueL7 = new Monologue(
        160, 550, 705, 130,
        "Das ist meine Schuld. Ich hätte damals etwas machen müssen, irgendwas. Ich hätte versuchen müssen, ihn zum Verstehen zu bringen, dass er nicht bei Annegret bleiben soll, dann wäre das alles nicht passiert. Wie konnte ich nur so naiv sein?"
      );
      this.personL2 = new Text(
        160, 550, 705, 130,
        "Nachbarin",
        "Es ist nicht deine Schuld."
      );
      this.monologueL8 = new Monologue(
        160, 550, 705, 130,
        "Überrascht blicke ich auf. Habe ich das etwa laut gesagt?"
      );
      this.personL3 = new Text(
        160, 550, 705, 130,
        "Nachbarin",
        "Woher solltest du denn ahnen können, dass es so weit kommen würde? Das, was passiert ist, ist furchtbar, aber du trägst dabei keine Schuld."
      );
      this.monologueL9 = new Monologue(
        160, 550, 705, 130,
        "Mit Tränen in den Augen blicke ich sie an und versinke in ihren Armen, als sie sie mir entgegen streckt. Zu einem gewissen Grad ist mir bewusst, dass es nicht meine Schuld ist, was Frank widerfahren ist, doch ich weiß genau, dass ich mehr hätte tun können."
      )

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
    this.playerB1.changeNext(this.michaelB1, this);
    this.michaelB1.changeNext(this.michaelB2, this);
    this.michaelB2.changeNext(this.monologueB3, this);
    this.monologueB3.changeNext(this.monologueB4, this);
    this.monologueB4.changeNext(this.monologueB5, this);
    this.monologueB5.changeNext(this.monologueB6, this);
    this.monologueB6.changeNext(this.playerB2, this);
    this.playerB2.changeNext(this.nameplate, this);
    this.nameplate.changeNext(this.michaelB3, this);
    this.michaelB3.changeNext(this.michaelB4, this);
    this.michaelB4.changeNext(this.monologueB7, this);
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
    this.monologueC2.changeNext(this.decisionC1, this);
    this.decisionC1.changeNext1(this.playerC3, this);
    this.decisionC1.changeNext2(this.monologueC3, this);
    this.playerC3.changeNext(this.frankC2, this);
    this.frankC2.changeNext(this.monologueC3, this);

    //Szene 2.1
    this.monologueC3.changeNext(this.monologueD1, this);
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
    this.frankE5.changeNext(this.frankE6, this);
    this.monologueE2.changeNext(this.monologueE3, this);
    this.monologueE3.changeNext(this.annegretE1, this);
    this.playerE7.changeNext(this.monologueE4, this);
    this.monologueE4.changeNext(this.monologueE5, this);
    this.monologueE5.changeNext(this.frankE7, this);
    this.frankE7.changeNext(this.playerE8, this);
    this.playerE8.changeNext(this.frankE8, this);
    this.frankE8.changeNext(this.monologueE6, this);
    this.monologueE6.changeNext(this.playerE9, this);
    this.playerE9.changeNext(this.monologueE7, this);
    this.monologueE7.changeNext(this.frankE9, this);
    this.frankE9.changeNext(this.annegretE1, this);
    this.annegretE1.changeNext(this.monologueE8, this);
    this.monologueE8.changeNext(this.annegretE2, this);
    this.annegretE2.changeNext(this.monologueE9, this);
    this.monologueE9.changeNext(this.annegretE3, this);
    this.annegretE3.changeNext(this.playerE10, this);
    this.playerE10.changeNext(this.annegretE4, this);
    this.annegretE4.changeNext(this.frankE10, this);
    this.frankE10.changeNext(this.monologueE10, this);
    this.monologueE10.changeNext(this.playerE11, this);

    //Szene 3
    this.playerE11.changeNext(this.monologueF1, this);
    this.monologueF1.changeNext(this.monologueF2, this);
    this.monologueF2.changeNext(this.playerF1, this);
    this.playerF1.changeNext(this.monologueF3, this);
    this.monologueF3.changeNext(this.annegretF1, this);
    this.annegretF1.changeNext(this.monologueF4, this);
    this.monologueF4.changeNext(this.annegretF2, this);
    this.annegretF2.changeNext(this.annegretF3, this);
    this.annegretF3.changeNext(this.playerF2, this);
    this.playerF2.changeNext(this.annegretF4, this);
    this.annegretF4.changeNext(this.annegretF5, this);
    this.annegretF5.changeNext(this.monologueF5, this);
    this.monologueF5.changeNext(this.monologueF6, this);
    this.monologueF6.changeNext(this.playerF3, this);
    this.playerF3.changeNext(this.monologueF7, this);
    this.monologueF7.changeNext(this.annegretF6, this);
    this.annegretF6.changeNext(this.annegretF7, this);
    this.annegretF7.changeNext(this.playerF4, this);
    this.playerF4.changeNext(this.annegretF8, this);
    this.monologueF.changeNext(this.annegretF9, this);
    this.annegretF9.changeNext(this.decisionF1, this);
    this.decisionF1.changeNext1(this.playerF5, this);
    this.decisionF1.changeNext2(this.playerF9, this);
    this.playerF5.changeNext(this.annegretF10, this);
    this.annegretF10.changeNext(this.monologueF8, this);
    this.monologueF8.changeNext(this.playerF6, this);
    this.playerF6.changeNext(this.annegretF11, this);
    this.annegretF11.changeNext(this.playerF7, this);
    this.playerF7.changeNext(this.annegretF12, this);
    this.annegretF12.changeNext(this.playerF8, this);
    this.playerF8.changeNext(this.monologueF9, this);
    this.monologueF9.changeNext(this.monologueF12, this);
    this.playerF9.changeNext(this.monologueF10, this);
    this.monologueF10.changeNext(this.annegretF13, this);
    this.annegretF13.changeNext(this.playerF10, this);
    this.playerF10.changeNext(this.annegretF14, this);
    this.annegretF14.changeNext(this.playerF11, this);
    this.playerF11.changeNext(this.monologueF11, this);
    this.monologueF11.changeNext(this.monologueF12, this);
    this.monologueF12.changeNext(this.decisionF2, this);
    this.decisionF2.changeNext1(this.playerF12, this);
    this.decisionF2.changeNext2(this.monologueF21, this);
    this.playerF12.changeNext(this.monologueF13, this);
    this.monologueF13.changeNext(this.frankF1, this);
    this.frankF1.changeNext(this.playerF13, this);
    this.playerF13.changeNext(this.frankF2, this);
    this.frankF2.changeNext(this.playerF14, this);
    this.playerF14.changeNext(this.frankF3, this);
    this.frankF3.changeNext(this.monologueF14, this);
    this.monologueF14.changeNext(this.playerF15, this);
    this.playerF15.changeNext(this.frankF4, this);
    this.frankF4.changeNext(this.decisionF3, this);
    this.decisionF3.changeNext1(this.playerF16, this);
    this.decisionF3.changeNext2(this.playerF19, this);
    this.playerF16.changeNext(this.frankF5, this);
    this.frankF5.changeNext(this.playerF17, this);
    this.playerF17.changeNext(this.monologueF15, this);
    this.monologueF15.changeNext(this.frankF6, this);
    this.frankF6.changeNext(this.playerF18, this);
    this.playerF18.changeNext(this.monologueF16, this);
    this.playerF19.changeNext(this.frankF7, this);
    this.frankF7.changeNext(this.monologueF17, this);
    this.monologueF17.changeNext(this.playerF20, this);
    this.playerF20.changeNext(this.monologueF18, this);
    this.monologueF18.changeNext(this.frankF8, this);
    this.frankF8.changeNext(this.monologueF19, this);
    this.monologueF19.changeNext(this.frankF9, this);
    this.frankF9.changeNext(this.playerF21, this);
    this.playerF21.changeNext(this.monologueF20, this);

    //Szene 4.1
    this.monologueF16.changeNext(this.playerG1, this);
    this.monologueF20.changeNext(this.playerG1, this);
    this.monologueF21.changeNext(this.playerG1, this);
    this.playerG1.changeNext(this.monologueG1, this);
    this.monologueG1.changeNext(this.playerG2, this);
    this.playerG2.changeNext(this.monologueG2, this);
    this.monologueG2.changeNext(this.monologueG4, this);
    this.monologueG3.changeNext(this.playerG3, this);
    this.playerG3.changeNext(this.monologueG4, this);

    //Szene 4.2
    this.monologueG4.changeNext(this.monologueH1, this);
    this.monologueH1.changeNext(this.playerH1, this);
    this.playerH1.changeNext(this.monologueH2, this);
    this.monologueH2.changeNext(this.frankH1, this);
    this.frankH1.changeNext(this.decisionH1, this);
    this.decisionH1.changeNext1(this.playerH2, this);
    this.decisionH1.changeNext2(this.decisionH2, this);
    this.playerH2.changeNext(this.monologueH3, this);
    this.monologueH3.changeNext(this.frankH2, this);
    this.frankH2.changeNext(this.monologueH4, this);
    this.monologueH4.changeNext(this.playerH3, this);
    this.playerH3.changeNext(this.frankH3, this);
    this.frankH3.changeNext(this.playerH4, this);
    this.playerH4.changeNext(this.decisionH2, this);
    this.decisionH2.changeNext1(this.playerH5, this);
    this.decisionH2.changeNext2(this.monologueH8, this);
    this.playerH5.changeNext(this.frankH4, this);
    this.frankH4.changeNext(this.decisionH3, this);
    this.decisionH3.changeNext1(this.monologueH5, this);
    this.decisionH3.changeNext2(this.monologueH6, this);
    this.monologueH5.changeNext(this.playerH6, this);
    this.playerH6.changeNext(this.frankH5, this);
    this.frankH5.changeNext(this.monologueH8, this);
    this.monologueH6.changeNext(this.playerH7, this);
    this.playerH7.changeNext(this.monologueH7, this);
    this.monologueH7.changeNext(this.frankH6, this);
    this.frankH6.changeNext(this.monologueH8, this);
    this.monologueH8.changeNext(this.frankH7, this);
    this.monologueH9.changeNext(this.frankH7, this);
    this.frankH7.changeNext(this.playerH8, this);
    this.playerH8.changeNext(this.frankH8, this);
    this.frankH8.changeNext(this.monologueH10, this);
    this.monologueH10.changeNext(this.frankH9, this);
    this.frankH9.changeNext(this.monologueH11, this);

    //Szene 5.1
    this.monologueI1.changeNext(this.monologueI2, this);
    this.monologueI2.changeNext(this.monologueI3, this);
    this.monologueI3.changeNext(this.monologueI4, this);
    this.monologueI4.changeNext(this.monologueI5, this);
    this.monologueI5.changeNext(this.monologueI6, this);
    this.monologueI12.changeNext(this.monologueI14, this);
    this.monologueI14.changeNext(this.monologueI15, this);
    this.monologueI15.changeNext(this.monologueI16, this);
    this.monologueI16.changeNext(this.decisionI1, this);
    this.decisionI1.changeNext1(this.monologueI17, this);
    this.decisionI1.changeNext2(this.monologueI20, this);
    this.monologueI17.changeNext(this.monologueI18, this);
    this.monologueI18.changeNext(this.monologueI19, this);
    this.monologueI19.changeNext(this.frankI1, this);
    this.frankI1.changeNext(this.playerI1, this);
    this.playerI1.changeNext(this.frankI2, this);
    this.frankI2.changeNext(this.playerI2, this);
    this.playerI2.changeNext(this.frankI3, this);

    //Szene 5.2
    this.frankI3.changeNext(this.monologueJ1, this);
    this.monologueJ1.changeNext(this.monologueJ2, this);
    this.monologueJ2.changeNext(this.monologueJ3, this);
    this.monologueJ3.changeNext(this.frankJ1, this);
    this.frankJ1.changeNext(this.playerJ1, this);
    this.playerJ1.changeNext(this.frankJ2, this);
    this.frankJ2.changeNext(this.playerJ2, this);
    this.playerJ2.changeNext(this.monologueJ4, this);
    this.monologueJ4.changeNext(this.monologueJ5, this);
    this.monologueJ5.changeNext(this.frankJ3, this);
    this.frankJ3.changeNext(this.playerJ3, this);
    this.playerJ3.changeNext(this.monologueJ6, this);
    this.monologueJ6.changeNext(this.frankJ4, this);
    this.frankJ4.changeNext(this.playerJ4, this);
    this.playerJ4.changeNext(this.frankJ5, this);
    this.frankJ5.changeNext(this.playerJ5, this);

    this.playerJ10.changeNext(this.monologueJ7, this);
    this.monologueJ7.changeNext(this.playerJ11, this);
    
    this.monologueJ8.changeNext(this.frankJ6, this);
    this.frankJ6.changeNext(this.playerJ12, this);
    this.playerJ12.changeNext(this.frankJ7, this);
    this.frankJ7.changeNext(this.playerJ13, this);
    this.playerJ13.changeNext(this.monologueJ9, this);
    this.monologueJ9.changeNext(this.frankJ8, this);
    this.frankJ8.changeNext(this.monologueJ10, this);
    this.monologueJ10.changeNext(this.playerJ14, this);
    this.playerJ14.changeNext(this.playerJ15, this);
    this.playerJ15.changeNext(this.monologueJ11, this);
    this.monologueJ11.changeNext(this.frankJ9, this);
    this.frankJ9.changeNext(this.playerJ16, this);
    this.playerJ16.changeNext(this.frankJ10, this);
    this.frankJ10.changeNext(this.monologueJ12, this);
    this.monologueJ12.changeNext(this.monologueJ13, this);

    this.frankJ11.changeNext(this.frankJ12, this);
    this.frankJ12.changeNext(this.monologueJ14, this);
    this.monologueJ14.changeNext(this.frankJ13, this);
    this.frankJ13.changeNext(this.monologueJ15, this);
    
    //good ending
    this.monologueJ15.changeNext(this.monologueK1, this);
    this.monologueK1.changeNext(this.monologueK2, this);
    this.monologueK2.changeNext(this.monologueK3, this);
    this.monologueK3.changeNext(this.monologueK4, this);
    this.monologueK4.changeNext(this.playerK1, this);
    this.playerK1.changeNext(this.frankK1, this);
    this.frankK1.changeNext(this.playerK2, this);
    this.playerK2.changeNext(this.frankK2, this);
    this.frankK2.changeNext(this.playerK3, this);
    this.playerK3.changeNext(this.frankK3, this);
    this.frankK3.changeNext(this.monologueK5, this);
    this.monologueK5.changeNext(this.playerK4, this);
    this.playerK4.changeNext(this.frankK4, this);
    this.frankK4.changeNext(this.playerK5, this);
    this.playerK5.changeNext(this.monologueK6, this);
    this.monologueK6.changeNext(this.monologueK7, this);
    this.monologueK7.changeNext(this.end, this);

    this.monologueJ15.changeNext(this.monologueL1, this);
    this.monologueL1.changeNext(this.monologueL2, this);
    this.monologueL2.changeNext(this.monologueL3, this);
    this.monologueL3.changeNext(this.monologueL4, this);
    this.monologueL4.changeNext(this.monologueL5, this);
    this.monologueL5.changeNext(this.playerL1, this);
    this.playerL1.changeNext(this.personL1, this);
    this.personL1.changeNext(this.monologueL6, this);
    this.monologueL6.changeNext(this.monologueL7, this);
    this.monologueL7.changeNext(this.personL2, this);
    this.personL2.changeNext(this.monologueL8, this);
    this.monologueL8.changeNext(this.personL3, this);
    this.personL2.changeNext(this.monologueL9, this);
    this.monologueL9.changeNext(this.end, this); 
  }

  //name insertion
  get playerB4name() {
    this.playerB4.text =
    "H-hallo, mein Name ist " + this.name.name.join("") +
    ". Ich bin gerade in das Haus gegenüber von euch eingezogen, wie man vielleicht sieht.";
    return this.playerB4;
  }
  get michaelB3name() {
    this.michaelB3.text =
    this.name.name.join("") + ", wir brauchen hier noch so ca. eine Stunde. Wenn du magst, kannst du dich ja mal in der Nachbarschaft umschauen und dich eventuell schon vorstellen?";
    return this.michaelB3;
  }
  get frankD1name() {
    this.frankD1.text =
    "Tut mir Leid, " + this.name.name.join("") + ". Wir sind dieses Wochenende schon verplant."
    return this.frankD1;
  }
  get frankE1name() {
    this.frankE1.text=
    "Was zum-! Oh, hallo " + this.name.name.join("") + "! Tut mir Leid, ich war völlig in Gedanken verloren.";
    return this.frankE1;
  }
  get annegretE3name() {
    this.annegretE3.text =
    "Freut mich, dich zu sehen, " + this.name.name.join("") + ". Ich würde gerne noch etwas quatschen, aber wir haben leider heute einiges vor."
    return this.annegretE3;
  }
  get annegretF11name() {
    this.annegretF11.text =
    "Dankeschön, " + this.name.name.join("") + ". Es tut gut, verstanden zu werden."
    return this.annegretF11;
  }
  get frankF6name() {
    this.frankF6.text =
    "Danke, " + this.name.name.join("") + ". Ich gehe mal versuchen, es wieder gut zu machen. Wir sehen uns.";
    return this.frankF6;
  }
  get frankF9name() {
    this.frankF9.text =
    "Naja, ich sollte mal wieder reingehen und versuchen, das mit Annegret zu klären. Danke für deine Unterstützung, " + this.name.name.join("") + ".";
    return this.frankF9;
  }
  get playerI1name() {
    this.playerI1.text =
    "Oh, äh, hallo Frank! Hier ist " + this.name.name.join("") + ". Hör mal, ich habe da was für dich, magst du später vorbeikommen, damit ich es dir geben kann?";
    return this.playerI1;
  }
  get frankJ10name() {
    this.frankJ10.text =
    "Das klingt nach einer guten Idee. Vielen Dank, " + this.name.name.join("");
    return this.frankJ10;
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