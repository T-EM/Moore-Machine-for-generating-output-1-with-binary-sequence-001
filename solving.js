// Transition Diagrams Starts
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let moore_output = document.getElementById("moore-output");
let setSpeed = document.getElementById("speed");
let notify = document.getElementById("notify");
let notifyContent = document.getElementById("notify-content");

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
// Ends

// Transition Table Starts
let qt1 = document.getElementById("qt1");
let qt2 = document.getElementById("qt2");
let qt3 = document.getElementById("qt3");
let qt4 = document.getElementById("qt4");
let qt5 = document.getElementById("qt5");

let qt12 = document.getElementById("qt12");
let qt15 = document.getElementById("qt15");
let qt23 = document.getElementById("qt23");
let qt25 = document.getElementById("qt25");
let qt35 = document.getElementById("qt35");
let qt34 = document.getElementById("qt34");
let qt42 = document.getElementById("qt42");
let qt45 = document.getElementById("qt45");
let qt52 = document.getElementById("qt52");
let qt55 = document.getElementById("qt55");
// Ends

let totalString = "";
let solvingSpeed = setSpeed.value;
var acceptCount = 0;

class MooreMachine {
  constructor(ip) {
    totalString = "";
    this.str = ip;
    acceptCount = 0;
    this.q1();
  }
  q1() {
    q1.style.backgroundColor = "darkmagenta";
    qt1.style.backgroundColor = "darkmagenta";
    moore_output.innerText = "^";
    if (this.str[0] == "0") {
      qt12.style.backgroundColor = "darkmagenta";
    } else if (this.str[0] == "1") {
      qt15.style.backgroundColor = "darkmagenta";
    }
    setTimeout(() => {
      q1.style.backgroundColor = "transparent";
      qt1.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q12.color = "darkmagenta";
        qt12.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q2();
      } else if (this.str[0] == "1") {
        q15.color = "darkmagenta";
        qt15.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q5();
      } else {
        if (this.str.length == 0) {
          if (acceptCount == 0) {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is rejected!";
            notifyContent.style.backgroundColor = "red";
          } else {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is accepted!";
            notifyContent.style.backgroundColor = "aquamarine";
          }
          setTimeout(() => {
            notify.style.transform = "translateY(0px)";
            notify.style.visibility = "hidden";
          }, 2500);
        }
        return;
      }
    }, solvingSpeed * 1000);
  }
  q2() {
    q2.style.backgroundColor = "darkmagenta";
    qt2.style.backgroundColor = "darkmagenta";
    // console.log("0");
    totalString += "0";
    moore_output.innerText = totalString;
    if (this.str[0] == "0") {
      qt23.style.backgroundColor = "darkmagenta";
    } else if (this.str[0] == "1") {
      qt25.style.backgroundColor = "darkmagenta";
    }
    setTimeout(() => {
      q2.style.backgroundColor = "transparent";
      qt2.style.backgroundColor = "transparent";
      q12.color = "#f6f6f6";
      q52.color = "#f6f6f6";
      q42.color = "#f6f6f6";
      qt12.style.backgroundColor = "transparent";
      qt52.style.backgroundColor = "transparent";
      qt42.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q23.color = "darkmagenta";
        qt23.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q3();
      } else if (this.str[0] == "1") {
        q25.color = "darkmagenta";
        qt25.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q5();
      } else {
        if (this.str.length == 0) {
          if (acceptCount == 0) {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is rejected!";
            notifyContent.style.backgroundColor = "red";
          } else {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is accepted!";
            notifyContent.style.backgroundColor = "aquamarine";
          }
          setTimeout(() => {
            notify.style.transform = "translateY(0px)";
            notify.style.visibility = "hidden";
          }, 2500);
        }
        return;
      }
    }, solvingSpeed * 1000);
  }
  q3() {
    q3.style.backgroundColor = "darkmagenta";
    qt3.style.backgroundColor = "darkmagenta";
    //   console.log("0");
    totalString += "0";
    moore_output.innerText = totalString;
    if (this.str[0] == "0") {
      qt35.style.backgroundColor = "darkmagenta";
    } else if (this.str[0] == "1") {
      qt34.style.backgroundColor = "darkmagenta";
    }
    setTimeout(() => {
      q3.style.backgroundColor = "transparent";
      qt3.style.backgroundColor = "transparent";
      q23.color = "#f6f6f6";
      qt23.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q35.color = "darkmagenta";
        qt35.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q5();
      } else if (this.str[0] == "1") {
        q34.color = "darkmagenta";
        qt34.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q4();
      } else {
        if (this.str.length == 0) {
          if (acceptCount == 0) {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is rejected!";
            notifyContent.style.backgroundColor = "red";
          } else {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is accepted!";
            notifyContent.style.backgroundColor = "aquamarine";
          }
          setTimeout(() => {
            notify.style.transform = "translateY(0px)";
            notify.style.visibility = "hidden";
          }, 2500);
        }
        return;
      }
    }, solvingSpeed * 1000);
  }
  q4() {
    acceptCount += 1;
    q4.style.backgroundColor = "darkgreen";
    qt4.style.backgroundColor = "darkgreen";
    //   console.log("1");
    totalString += "1";
    moore_output.innerText = totalString;
    if (this.str[0] == "0") {
      qt42.style.backgroundColor = "darkmagenta";
    } else if (this.str[0] == "1") {
      qt45.style.backgroundColor = "darkmagenta";
    }
    setTimeout(() => {
      q4.style.backgroundColor = "transparent";
      qt4.style.backgroundColor = "transparent";
      q34.color = "#f6f6f6";
      qt34.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q42.color = "darkmagenta";
        qt42.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q2();
      } else if (this.str[0] == "1") {
        q45.color = "darkmagenta";
        qt45.style.backgroundColor = "darkmagenta";
        // q4.style.backgroundColor = "transparent";
        this.pop();
        this.q5();
      } else {
        acceptCount += 1;
        // console.log(acceptCount);
        if (this.str.length == 0) {
          if (acceptCount == 0) {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is rejected!";
            notifyContent.style.backgroundColor = "red";
          } else {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is accepted!";
            notifyContent.style.backgroundColor = "aquamarine";
          }
          setTimeout(() => {
            notify.style.transform = "translateY(0px)";
            notify.style.visibility = "hidden";
          }, 2500);
        }
        // console.log("The string is accepted!");
        return;
      }
    }, solvingSpeed * 1000);
  }
  q5() {
    q5.style.backgroundColor = "darkmagenta";
    qt5.style.backgroundColor = "darkmagenta";
    //   console.log("0");
    totalString += "0";
    moore_output.innerText = totalString;
    if (this.str[0] == "0") {
      qt52.style.backgroundColor = "darkmagenta";
    } else if (this.str[0] == "1") {
      qt55.style.backgroundColor = "darkmagenta";
    }
    setTimeout(() => {
      q5.style.backgroundColor = "transparent";
      qt5.style.backgroundColor = "transparent";
      q15.color = "#f6f6f6";
      q25.color = "#f6f6f6";
      q35.color = "#f6f6f6";
      q45.color = "#f6f6f6";
      q55.color = "#f6f6f6";
      qt15.style.backgroundColor = "transparent";
      qt25.style.backgroundColor = "transparent";
      qt35.style.backgroundColor = "transparent";
      qt45.style.backgroundColor = "transparent";
      qt55.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q52.color = "darkmagenta";
        qt52.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q2();
      } else if (this.str[0] == "1") {
        q55.color = "darkmagenta";
        qt55.style.backgroundColor = "darkmagenta";
        this.pop();
        this.q5();
      } else {
        if (this.str.length == 0) {
          if (acceptCount == 0) {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is rejected!";
            notifyContent.style.backgroundColor = "red";
          } else {
            notify.style.visibility = "visible";
            notify.style.transform = "translateY(150px)";
            notifyContent.innerHTML = "The String is accepted!";
            notifyContent.style.backgroundColor = "aquamarine";
          }
          setTimeout(() => {
            notify.style.transform = "translateY(0px)";
            notify.style.visibility = "hidden";
          }, 2500);
        }
        return;
      }
    }, solvingSpeed * 1000);
  }
  pop() {
    this.str = this.str.slice(1);
  }
}

// try {
//   var ip = prompt("Enter the string: ");
//   new MooreMachine("0010011");
// } catch (e) {
//   console.log("--END OF STRING--");
// }
