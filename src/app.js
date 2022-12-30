/* eslint-disable*/
// import "~bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let array4 = Math.floor(Math.random() * who.length);
  let array5 = Math.floor(Math.random() * what.length);
  let array6 = Math.floor(Math.random() * when.length);
  document.getElementById("excuse").innerHTML =
    who[array4] + " " + what[array5] + " " + when[array6];
};
