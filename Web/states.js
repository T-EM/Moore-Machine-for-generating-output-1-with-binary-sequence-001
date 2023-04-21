let q5Com = document.getElementById("q5-com");
let string = document.getElementById("ipstring");

let isFormed = false;

function solveString() {
  let ip = string.value;
  try {
    new MooreMachine(ip);
    setTimeout(() => {
      // alert(totalString);
      moore_output.innerText = totalString;
    }, 1000 * ip.length + 1000);
  } catch (e) {
    console.log("--END OF STRING--");
  }
}

function clearString() {
  string.value = "";
  moore_output.innerText = "";
}

function toogle(i) {
  if (i === 1) {
    if (isFormed === false) {
      q12 = new LeaderLine(q1, q2, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        middleLabel: LeaderLine.pathLabel("O", { fontSize: "20px" }),
      });
      q15 = new LeaderLine(q1, q5, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "left",
        middleLabel: LeaderLine.pathLabel("1", { fontSize: "20px" }),
      });
      q23 = new LeaderLine(q2, q3, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        middleLabel: LeaderLine.pathLabel("O", { fontSize: "20px" }),
      });
      q25 = new LeaderLine(q2, q5, {
        hide: true,
        path: "arc",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "top",
        middleLabel: LeaderLine.pathLabel("1", { fontSize: "20px" }),
      });
      q34 = new LeaderLine(q3, q4, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        middleLabel: LeaderLine.pathLabel("1", { fontSize: "20px" }),
      });
      q35 = new LeaderLine(q3, q5, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "right",
        middleLabel: LeaderLine.pathLabel("O", { fontSize: "20px" }),
      });
      q42 = new LeaderLine(q2, q4, {
        hide: true,
        path: "arc",
        color: "#f6f6f6",
        startSocket: "top",
        endSocket: "top",
        startPlug: "arrow1",
        endPlug: "behind",
        middleLabel: LeaderLine.pathLabel("O", { fontSize: "20px" }),
      });
      q45 = new LeaderLine(q4, q5, {
        hide: true,
        path: "straight",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "right",
        middleLabel: LeaderLine.pathLabel("1", { fontSize: "20px" }),
      });
      q52 = new LeaderLine(q5, q2, {
        hide: true,
        path: "arc",
        color: "#f6f6f6",
        startSocket: "top",
        endSocket: "bottom",
        middleLabel: LeaderLine.pathLabel("O", { fontSize: "20px" }),
      });
      q55 = new LeaderLine(q5Com, q5, {
        hide: true,
        path: "arc",
        color: "#f6f6f6",
        startSocket: "bottom",
        endSocket: "bottom",
        middleLabel: LeaderLine.pathLabel("1", { fontSize: "20px" }),
      });
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
    q55.show("draw");
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
    q55.hide("draw");
  }
}
