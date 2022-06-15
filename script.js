const messaggi = [
  { text: "Messaggio numero uno", isActive: true },
  { text: "Messaggio numero due", isActive: false },
];

var app = new Vue({
  el: "#app",
  data: {
    message: "Valore iniziale di message",
    img: "https://picsum.photos/id/237/400/",
    isGreen: true,
    colori: ["blue", "red", "green"],
    msgs: messaggi,
    messaggioCorrente: messaggi[0],
  },
  methods: {
    // Ricorda il this per le variabili di data
    change: function () {
      let valoreBooleanoCorrente = this.isGreen;
      this.isGreen = !valoreBooleanoCorrente;
    },
    print: function (inizioStringa) {
      return inizioStringa + "oggi è il " + this.dataDiOggi();
    },
    toggle: function (message) {
      this.messaggioCorrente.isActive = false;
      this.messaggioCorrente = message;
      this.messaggioCorrente.isActive = true;
    },
    dataDiOggi: function () {
      const today = new Date();
      return today.toLocaleDateString("it-IT");
    },
  },
});
