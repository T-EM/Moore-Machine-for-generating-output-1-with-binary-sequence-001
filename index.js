let probState = document.getElementById("pstatement");
let lgState = document.getElementById("lgstate");
let content = document.getElementById("content");
let solState = document.getElementById("solstate");

let isLine = false;

function home() {
  if (isLine === true) {
    toogle(0);
    setTimeout(() => {
      probState.style.transform = "translateY(-150px)";
      lgState.style.transform = "translateY(100px)";
      lgState.style.fontSize = "90px";
      solState.style.transform = "translateY(600px)";
      content.style.overflowY = "hidden";
    }, 500);
    isLine = false;
  } else {
    probState.style.transform = "translateY(-150px)";
    lgState.style.transform = "translateY(100px)";
    lgState.style.fontSize = "90px";
    solState.style.transform = "translateY(600px)";
    content.style.overflowY = "hidden";
  }
}

function proClick() {
  if (isLine === true) {
    home();
    setTimeout(() => {
      probState.style.transform = "translateY(200px)";
      lgState.style.transform = "translateY(380px)";
      lgState.style.fontSize = "50px";
      solState.style.transform = "translateY(600px)";
      content.style.overflowY = "hidden";
    }, 600);
  } else {
    home();
    probState.style.transform = "translateY(200px)";
    lgState.style.transform = "translateY(380px)";
    lgState.style.fontSize = "50px";
    solState.style.transform = "translateY(600px)";
    content.style.overflowY = "hidden";
  }
}

function solClick() {
  if (isLine === true) {
    home();
    setTimeout(() => {
      lgState.style.transform = "translateY(-150px)";
      solState.style.transform = "translateY(-100px)";
      lgState.style.fontSize = "70px";
      content.style.overflowY = null;
      setTimeout(() => {
        toogle(1);
        isLine = true;
      }, 1000);
    }, 600);
  } else {
    home();
    lgState.style.transform = "translateY(-150px)";
    solState.style.transform = "translateY(-100px)";
    lgState.style.fontSize = "70px";
    content.style.overflowY = null;
    setTimeout(() => {
      toogle(1);
      isLine = true;
    }, 1000);
  }
}
