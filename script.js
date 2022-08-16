const playerName = prompt("Enter name");
let name = document.querySelector(".player-name");
name.innerHTML = playerName;

let skin = 0;

const choo = document.querySelector(".choose");
const game = document.querySelector(".game");

const X = document.querySelector(".choose-1");
const O = document.querySelector(".choose-2");

X.onclick = function () {
  skin = 0;
  choo.classList.add("none");
  game.classList.remove("none");
};
O.onclick = function () {
  skin = 1;
  choo.classList.add("none");
  game.classList.remove("none");
};

let playerScore = 0;
let perScore = 0;
let reload = 0;

Score();

function Score() {
  let score = document.querySelector(".player-score");
  score.innerHTML = playerScore;
  let score1 = document.querySelector(".per-score");
  score1.innerHTML = perScore;
}

const buttons = {
  btn: document.querySelector(".button"),
  btn1: document.querySelector(".button1"),
  btn2: document.querySelector(".button2"),
  btn3: document.querySelector(".button3"),
  btn4: document.querySelector(".button4"),
  btn5: document.querySelector(".button5"),
  btn6: document.querySelector(".button6"),
  btn7: document.querySelector(".button7"),
  btn8: document.querySelector(".button8"),
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const arrButtons = Object.values(buttons);

let iter = 0;

function Per() {
  while (true) {
    let value = Math.floor(Math.random() * 9);
    if (iter >= 5) break;

    if (
      !arrButtons[value].classList.contains("x") &&
      !arrButtons[value].classList.contains("o")
    ) {
      if (skin === 0) {
        arrButtons[value].classList.add("o");
        arrButtons[value].disabled = true;
      } else {
        arrButtons[value].classList.add("x");
        arrButtons[value].disabled = true;
      }
      Winner();
      iter++;
      break;
    } else continue;
  }
  Re();
}

buttons.btn.onclick = function () {
  if (skin === 0) {
    buttons.btn.classList.add("x");
    buttons.btn.disabled = true;
  } else {
    buttons.btn.classList.add("o");
    buttons.btn.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn1.onclick = function () {
  if (skin === 0) {
    buttons.btn1.classList.add("x");
    buttons.btn1.disabled = true;
  } else {
    buttons.btn1.classList.add("o");
    buttons.btn1.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn2.onclick = function () {
  if (skin === 0) {
    buttons.btn2.classList.add("x");
    buttons.btn2.disabled = true;
  } else {
    buttons.btn2.classList.add("o");
    buttons.btn2.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn3.onclick = function () {
  if (skin === 0) {
    buttons.btn3.classList.add("x");
    buttons.btn3.disabled = true;
  } else {
    buttons.btn3.classList.add("o");
    buttons.btn3.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn4.onclick = function () {
  if (skin === 0) {
    buttons.btn4.classList.add("x");
    buttons.btn4.disabled = true;
  } else {
    buttons.btn4.classList.add("o");
    buttons.btn4.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn5.onclick = function () {
  if (skin === 0) {
    buttons.btn5.classList.add("x");
    buttons.btn5.disabled = true;
  } else {
    buttons.btn5.classList.add("o");
    buttons.btn5.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn6.onclick = function () {
  if (skin === 0) {
    buttons.btn6.classList.add("x");
    buttons.btn6.disabled = true;
  } else {
    buttons.btn6.classList.add("o");
    buttons.btn6.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn7.onclick = function () {
  if (skin === 0) {
    buttons.btn7.classList.add("x");
    buttons.btn7.disabled = true;
  } else {
    buttons.btn7.classList.add("o");
    buttons.btn7.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};
buttons.btn8.onclick = function () {
  if (skin === 0) {
    buttons.btn8.classList.add("x");
    buttons.btn8.disabled = true;
  } else {
    buttons.btn8.classList.add("o");
    buttons.btn8.disabled = true;
  }
  if (Winner()) {
    setTimeout(() => {
      Per();
    }, 300);
  }
  Re();
};

function Winner() {
  if (
    (buttons.btn.classList.contains("x") &&
      buttons.btn1.classList.contains("x") &&
      buttons.btn2.classList.contains("x")) ||
    (buttons.btn.classList.contains("o") &&
      buttons.btn1.classList.contains("o") &&
      buttons.btn2.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn.classList.add("win");
    buttons.btn1.classList.add("win");
    buttons.btn2.classList.add("win");

    if (
      (buttons.btn.classList.contains("x") && skin === 0) ||
      (buttons.btn.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn.classList.contains("x") && skin === 1) ||
      (buttons.btn.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  } else if (
    (buttons.btn3.classList.contains("x") &&
      buttons.btn4.classList.contains("x") &&
      buttons.btn5.classList.contains("x")) ||
    (buttons.btn3.classList.contains("o") &&
      buttons.btn4.classList.contains("o") &&
      buttons.btn5.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn3.classList.add("win");
    buttons.btn4.classList.add("win");
    buttons.btn5.classList.add("win");
    if (
      (buttons.btn3.classList.contains("x") && skin === 0) ||
      (buttons.btn3.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn3.classList.contains("x") && skin === 1) ||
      (buttons.btn3.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  } else if (
    (buttons.btn6.classList.contains("x") &&
      buttons.btn7.classList.contains("x") &&
      buttons.btn8.classList.contains("x")) ||
    (buttons.btn6.classList.contains("o") &&
      buttons.btn7.classList.contains("o") &&
      buttons.btn8.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn6.classList.add("win");
    buttons.btn7.classList.add("win");
    buttons.btn8.classList.add("win");
    if (
      (buttons.btn6.classList.contains("x") && skin === 0) ||
      (buttons.btn6.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn6.classList.contains("x") && skin === 1) ||
      (buttons.btn6.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  } else if (
    (buttons.btn.classList.contains("x") &&
      buttons.btn3.classList.contains("x") &&
      buttons.btn6.classList.contains("x")) ||
    (buttons.btn.classList.contains("o") &&
      buttons.btn3.classList.contains("o") &&
      buttons.btn6.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn.classList.add("win");
    buttons.btn3.classList.add("win");
    buttons.btn6.classList.add("win");
    if (
      (buttons.btn.classList.contains("x") && skin === 0) ||
      (buttons.btn.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn.classList.contains("x") && skin === 1) ||
      (buttons.btn.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  } else if (
    (buttons.btn1.classList.contains("x") &&
      buttons.btn4.classList.contains("x") &&
      buttons.btn7.classList.contains("x")) ||
    (buttons.btn1.classList.contains("o") &&
      buttons.btn4.classList.contains("o") &&
      buttons.btn7.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn1.classList.add("win");
    buttons.btn4.classList.add("win");
    buttons.btn7.classList.add("win");
    if (
      (buttons.btn1.classList.contains("x") && skin === 0) ||
      (buttons.btn1.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn1.classList.contains("x") && skin === 1) ||
      (buttons.btn1.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  } else if (
    (buttons.btn2.classList.contains("x") &&
      buttons.btn5.classList.contains("x") &&
      buttons.btn8.classList.contains("x")) ||
    (buttons.btn2.classList.contains("o") &&
      buttons.btn5.classList.contains("o") &&
      buttons.btn8.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn2.classList.add("win");
    buttons.btn5.classList.add("win");
    buttons.btn8.classList.add("win");
    if (
      (buttons.btn2.classList.contains("x") && skin === 0) ||
      (buttons.btn2.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn2.classList.contains("x") && skin === 1) ||
      (buttons.btn2.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  } else if (
    (buttons.btn.classList.contains("x") &&
      buttons.btn4.classList.contains("x") &&
      buttons.btn8.classList.contains("x")) ||
    (buttons.btn.classList.contains("o") &&
      buttons.btn4.classList.contains("o") &&
      buttons.btn8.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn.classList.add("win");
    buttons.btn4.classList.add("win");
    buttons.btn8.classList.add("win");
    if (
      (buttons.btn.classList.contains("x") && skin === 0) ||
      (buttons.btn.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn.classList.contains("x") && skin === 1) ||
      (buttons.btn.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  } else if (
    (buttons.btn2.classList.contains("x") &&
      buttons.btn4.classList.contains("x") &&
      buttons.btn6.classList.contains("x")) ||
    (buttons.btn2.classList.contains("o") &&
      buttons.btn4.classList.contains("o") &&
      buttons.btn6.classList.contains("o"))
  ) {
    for (i of arrButtons) {
      i.disabled = true;
    }
    buttons.btn2.classList.add("win");
    buttons.btn4.classList.add("win");
    buttons.btn6.classList.add("win");
    if (
      (buttons.btn2.classList.contains("x") && skin === 0) ||
      (buttons.btn2.classList.contains("o") && skin === 1)
    )
      playerScore++;
    else if (
      (buttons.btn2.classList.contains("x") && skin === 1) ||
      (buttons.btn2.classList.contains("o") && skin === 0)
    )
      perScore++;

    Score();
    setTimeout(() => {
      Reload();
    }, 1000);
    return false;
  }

  return true;
}

function Reload() {
  for (i of arrButtons) {
    i.disabled = false;
    i.classList.remove("win");
    i.classList.remove("x");
    i.classList.remove("o");
  }
  iter = 0;
}

function Re() {
  for (i of arrButtons) {
    if (i.classList.contains("x") || i.classList.contains("o")) reload++;
  }
  if (reload >= 9) {
    reload = 0;
    Reload();
  } else {
    reload = 0;
  }
}
