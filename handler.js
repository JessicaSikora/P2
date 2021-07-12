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
        "Ja ich war doch noch eine Weile wach, weil wir noch aufgeräumt haben, und dann wollte Annegret etwas vorbereiten für heute, für so ein Treffen, zu dem sie geht,"
      );
      this.frankE6 = new Text(
        160, 550, 705, 130,
        "Frank",
        "und da hat sie meine Hilfe gebraucht, und dann war es so spät, dass ich wohl bei der Müdigkeit die Nachricht vergessen habe, aber jetzt weiß ich es wieder!"
      )
      this.monologueE2 = new Monologue(
        160, 550, 705, 130,
        "Frank lacht verlegen und kratzt sich am Hinterkopf."
      );
      this.playerE7 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Oh, was ist denn da passiert?"
      );
      this.monologueE3 = new Monologue(
        160, 550, 705, 130,
        "Ich deute auf seinen Arm, an dem Kratzer hinter seinem hochgerutschten Ärmel erscheint sind."
      );
      this.monologueE4 = new Monologue(
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
      this.monologueE5 = new Monologue(
        160, 550, 705, 130,
        "Ich muss lachen. Es ist typisch für ihn, durch Tollpatschigkeit in schwierige Situationen zu geraten."
      );
      this.playerE9 = new Text(
        160, 550, 705, 130,
        "Ich",
        "Oh Mann, du musst echt aufpassen, das sieht nicht harmlos aus."
      );
      this.monologueE6 = new Monologue(
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
      this.monologueE7 = new Monologue(
        160, 550, 705, 130,
        "Annegret erscheint hinter ihrem Mann. Ihr Blick ist gereizt, doch er sänftigt sich wieder, als sie mich erblickt."
      );
      this.annegretE2 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Ach, deswegen dauert es so lange. Ich dachte mir schon, dass selbst jemand wie Frank nicht so lange brauchen kann, um die Eier zu finden."
      );
      this.monologueE8 = new Monologue(
        160, 550, 705, 130,
        "Annegret lacht auf, Frank scheint allerdings nicht sonderlich von ihrem Witz amüsiert zu sein."
      );
      this.annegretE3 = new Text(
        160, 550, 705, 130,
        "Annegret",
        "Freut mich, dich zu sehen. Ich würde gerne noch etwas quatschen, aber wir haben leider heute einiges vor."
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
      this.monologueE9 = new Monologue(
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
        "Dankeschön. Es tut gut, verstanden zu werden."
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
        "Danke. Ich gehe mal versuchen, es wieder gut zu machen. Wir sehen uns."
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
        "Naja, ich sollte mal wieder reingehen und versuchen, das mit Annegret zu klären. Danke für deine Unterstützung."
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
        "Ob das tatsächlich von Frank und Annegret kam? Hoffentlich ist nichts Wichtiges kaputt gegangen."
      );
      this.monologueG4 = new Monologue(
        160, 550, 705, 130,
        "Erschöpft werfe ich mich zurück aufs Bett und schlafe wenige Sekunden später ein."
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
    this.frankE5.changeNext(this.frankE6, this);
    this.frankE6.changeNext(this.monologueE2, this);
    this.monologueE2.changeNext(this.annegretE1, this);
    this.playerE7.changeNext(this.monologueE3, this);
    this.monologueE3.changeNext(this.monologueE4, this);
    this.monologueE4.changeNext(this.frankE7, this);
    this.frankE7.changeNext(this.playerE8, this);
    this.playerE8.changeNext(this.frankE8, this);
    this.frankE8.changeNext(this.monologueE5, this);
    this.monologueE5.changeNext(this.playerE9, this);
    this.playerE9.changeNext(this.monologueE6, this);
    this.monologueE6.changeNext(this.frankE9, this);
    this.frankE9.changeNext(this.annegretE1, this);
    this.annegretE1.changeNext(this.monologueE7, this);
    this.monologueE7.changeNext(this.annegretE2, this);
    this.annegretE2.changeNext(this.monologueE8, this);
    this.monologueE8.changeNext(this.annegretE3, this);
    this.annegretE3.changeNext(this.playerE10, this);
    this.playerE10.changeNext(this.annegretE4, this);
    this.annegretE4.changeNext(this.frankE10, this);
    this.frankE10.changeNext(this.monologueE9, this);
    this.monologueE9.changeNext(this.playerE11, this);

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
    this.annegretF8.changeNext(this.annegretF9, this);
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
    this.monologueF20.changeNext(this.playerG1, this);
    this.monologueF21.changeNext(this.playerG1, this);
    this.playerG1.changeNext(this.monologueG1, this);
    this.monologueG1.changeNext(this.playerG2, this);
    this.playerG2.changeNext(this.monologueG2, this);
    this.monologueG2.changeNext(this.monologueG3, this);
    this.monologueG3.changeNext(this.playerG3, this);
    this.playerG3.changeNext(this.monologueG4, this);
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