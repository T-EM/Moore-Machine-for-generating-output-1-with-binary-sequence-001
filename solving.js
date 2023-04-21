let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");
let moore_output = document.getElementById("moore-output");
let setSpeed = document.getElementById("speed");

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

let totalString = "";
let solvingSpeed = setSpeed.value;

class MooreMachine {
  constructor(ip) {
    totalString = "";
    this.str = ip;
    this.q1();
  }
  q1() {
    q1.style.backgroundColor = "darkmagenta";
    moore_output.innerText = "^";
    setTimeout(() => {
      q1.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q12.color = "darkmagenta";
        this.pop();
        this.q2();
      } else if (this.str[0] == "1") {
        q15.color = "darkmagenta";
        this.pop();
        this.q5();
      } else {
        return;
      }
    }, solvingSpeed * 1000);
  }
  q2() {
    q2.style.backgroundColor = "darkmagenta";
    // console.log("0");
    totalString += "0";
    moore_output.innerText = totalString;
    setTimeout(() => {
      q12.color = "#f6f6f6";
      q52.color = "#f6f6f6";
      q42.color = "#f6f6f6";
      q2.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q23.color = "darkmagenta";
        this.pop();
        this.q3();
      } else if (this.str[0] == "1") {
        q25.color = "darkmagenta";
        this.pop();
        this.q5();
      } else {
        return;
      }
    }, solvingSpeed * 1000);
  }
  q3() {
    q3.style.backgroundColor = "darkmagenta";
    //   console.log("0");
    totalString += "0";
    moore_output.innerText = totalString;
    setTimeout(() => {
      q23.color = "#f6f6f6";
      q3.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q35.color = "darkmagenta";
        this.pop();
        this.q5();
      } else if (this.str[0] == "1") {
        q34.color = "darkmagenta";
        this.pop();
        this.q4();
      } else {
        return;
      }
    }, solvingSpeed * 1000);
  }
  q4() {
    q4.style.backgroundColor = "darkgreen";
    //   console.log("1");
    totalString += "1";
    moore_output.innerText = totalString;
    setTimeout(() => {
      q34.color = "#f6f6f6";
      q4.style.backgroundColor = "transparent";
      if (this.str[0] == "0") {
        q42.color = "darkmagenta";
        this.pop();
        this.q2();
      } else if (this.str[0] == "1") {
        q45.color = "darkmagenta";
        // q4.style.backgroundColor = "transparent";
        this.pop();
        this.q5();
      } else {
        return;
      }
    }, solvingSpeed * 1000);
  }
  q5() {
    q5.style.backgroundColor = "darkmagenta";
    //   console.log("0");
    totalString += "0";
    moore_output.innerText = totalString;
    setTimeout(() => {
      q5.style.backgroundColor = "transparent";
      q15.color = "#f6f6f6";
      q25.color = "#f6f6f6";
      q35.color = "#f6f6f6";
      q45.color = "#f6f6f6";
      q55.color = "#f6f6f6";
      if (this.str[0] == "0") {
        q52.color = "darkmagenta";
        this.pop();
        this.q2();
      } else if (this.str[0] == "1") {
        q55.color = "darkmagenta";
        this.pop();
        this.q5();
      } else {
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
