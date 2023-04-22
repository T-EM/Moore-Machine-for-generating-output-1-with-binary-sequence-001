let probState = document.getElementById("pstatement");
let lgState = document.getElementById("lgstate");
let content = document.getElementById("content");
let solState = document.getElementById("solstate");

let isLine = false;

content.addEventListener(
  "scroll",
  AnimEvent.add(function () {
    q12.position();
    q15.position();
    q23.position();
    q25.position();
    q34.position();
    q35.position();
    q42.position();
    q45.position();
    q52.position();
    q55.position();
  }),
  false
);

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function home() {
  if (isLine === true) {
    toogle(0);
    setTimeout(() => {
      probState.style.transform = "translateY(-150px)";
      lgState.style.top = "50%";
      lgState.style.transform = "translateY(0)";
      lgState.style.fontSize = "90px";
      solState.style.transform = "translateY(600px)";
      content.style.overflowY = "hidden";
      probState.style.visibility = "hidden";
      solState.style.visibility = "hidden";
    }, 500);
    isLine = false;
  } else {
    probState.style.transform = "translateY(-150px)";
    lgState.style.top = "50%";
    lgState.style.transform = "translateY(0)";
    lgState.style.fontSize = "90px";
    solState.style.transform = "translateY(600px)";
    content.style.overflowY = "hidden";
    probState.style.visibility = "hidden";
    solState.style.visibility = "hidden";
  }
}

function proClick() {
  if (isLine === true) {
    home();
    setTimeout(() => {
      probState.style.visibility = "visible";
      probState.style.transform = "translateY(200px)";
      lgState.style.top = "0";
      lgState.style.transform = "translateY(380px)";
      lgState.style.fontSize = "50px";
      solState.style.transform = "translateY(600px)";
      content.style.overflowY = "hidden";
    }, 600);
  } else {
    home();
    probState.style.visibility = "visible";
    probState.style.transform = "translateY(200px)";
    lgState.style.top = "0";
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
      solState.style.visibility = "visible";
      lgState.style.top = "0";
      lgState.style.transform = "translateY(-150px)";
      solState.style.transform = "translateY(-100px)";
      lgState.style.fontSize = "70px";
      content.style.overflowY = "scroll";
      setTimeout(() => {
        toogle(1);
        isLine = true;
      }, 1000);
    }, 600);
  } else {
    home();
    solState.style.visibility = "visible";
    lgState.style.top = "0";
    lgState.style.transform = "translateY(-150px)";
    solState.style.transform = "translateY(-100px)";
    lgState.style.fontSize = "70px";
    content.style.overflowY = "scroll";
    setTimeout(() => {
      toogle(1);
      isLine = true;
    }, 1000);
  }
}
