let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");

let q12;
let q15;
let q23;
let q25;
let q34;
let q35;
let q42;
let q45;
let q52;
let q55;
let isFormed = false;

function toogle(i) {
  if (i === 1) {
    if (isFormed === false) {
      q12 = new LeaderLine(q1, q2, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        middleLabel: LeaderLine.pathLabel("0"),
      });
      q15 = new LeaderLine(q1, q5, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "left",
        middleLabel: LeaderLine.pathLabel("1"),
      });
      q23 = new LeaderLine(q2, q3, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        middleLabel: LeaderLine.pathLabel("0"),
      });
      q25 = new LeaderLine(q2, q5, {
        hide: true,
        path: "arc",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "top",
        middleLabel: LeaderLine.pathLabel("1"),
      });
      q34 = new LeaderLine(q3, q4, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        middleLabel: LeaderLine.pathLabel("1"),
      });
      q35 = new LeaderLine(q3, q5, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "right",
        middleLabel: LeaderLine.pathLabel("0"),
      });
      q42 = new LeaderLine(q2, q4, {
        hide: true,
        path: "arc",
        color: "#f6f6f6",
        startSocket: "top",
        endSocket: "top",
        startPlug: "arrow1",
        endPlug: "behind",
        middleLabel: LeaderLine.pathLabel("0"),
      });
      q45 = new LeaderLine(q4, q5, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "right",
        middleLabel: LeaderLine.pathLabel("1"),
      });
      q52 = new LeaderLine(q5, q2, {
        hide: true,
        path: "arc",
        color: "#f6f6f6",
        startSocket: "top",
        endSocket: "bottom",
        middleLabel: LeaderLine.pathLabel("0"),
      });
      // q55 = new LeaderLine(q5, q5, {
      //   hide: true,
      //   path: "arc",
      //   color: "#f6f6f6",
      //   startSocket: "bottom",
      //   endSocket: "bottom",
      //   middleLabel: LeaderLine.pathLabel("1"),
      // });
      isFormed = true;
    }
    q12.show("draw");
    q15.show("draw");
    q23.show("draw");
    q25.show("draw");
    q34.show("draw");
    q35.show("draw");
    q42.show("draw");
    q45.show("draw");
    q52.show("draw");
    // q55.show("draw");
  } else {
    q12.hide("draw");
    q15.hide("draw");
    q23.hide("draw");
    q25.hide("draw");
    q34.hide("draw");
    q35.hide("draw");
    q42.hide("draw");
    q45.hide("draw");
    q52.hide("draw");
    // q55.hide("draw");
  }
}
