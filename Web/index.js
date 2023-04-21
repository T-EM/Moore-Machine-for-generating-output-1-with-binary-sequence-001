let probState = document.getElementById("pstatement");
let lgState = document.getElementById("lgstate");
let content = document.getElementById("content");
let solState = document.getElementById("solstate");

function home() {
  probState.style.transform = "translateY(-150px)";
  lgState.style.transform = "translateY(100px)";
  lgState.style.fontSize = "90px";
  solState.style.transform = "translateY(600px)";
  content.style.overflowY = "hidden";
}

function proClick() {
  probState.style.transform = "translateY(200px)";
  lgState.style.transform = "translateY(380px)";
  lgState.style.fontSize = "50px";
  solState.style.transform = "translateY(600px)";
  content.style.overflowY = "hidden";
}

function solClick() {
  home();
  lgState.style.transform = "translateY(-150px)";
  solState.style.transform = "translateY(-100px)";
  lgState.style.fontSize = "70px";
  content.style.overflowY = null;
}
