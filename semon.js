// SeMON GAME

// // 1. CODE
// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = 0;
// let level = 0;
// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", () => {
//   if (started == false) {
//     console.log("game start");
//     started = true;
//     levelUp();
//   }
// });

// function gameFlash(btn) {
//   btn.classList.add("flash");
//   setTimeout(() => {
//     btn.classList.remove("flash");
//   }, 300);
// }

// function userFlash(btn) {
//   btn.classList.add("userFlash");
//   setTimeout(() => {
//     btn.classList.remove("userFlash");
//   }, 300);
// }

// function levelUp() {
//   userSeq = []; // added just to enter value from start
//   level++;
//   h2.innerText = `Level ${level}`;

//   let randomInx = Math.floor(Math.random() * 3) + 1;
//   let randColor = btns[randomInx];
//   let radBtn = document.querySelector(`.${randColor}`);
//   gameSeq.push(randColor);
//   console.log(gameSeq);
//   // console.log(randColor, radBtn, randomInx);
//   gameFlash(radBtn);
// }

// function checkAns(idx) {
//   console.log(`current level::, ${level}`);
//   // let idx = level - 1;
//   if (userSeq[idx] === gameSeq[idx]) {
//     if (userSeq.length === gameSeq.length) {
//       setTimeout(() => {
//         levelUp();
//       }, 1000);
//     }
//   } else {
//     h2.innerText = `Game over! Press any key to start.`;
//     console.log("different val");
//   }
// }

// function btnPress() {
//   console.log("btn was pressed", this);
//   let btn = this;
//   userFlash(btn);

//   let userColor = btn.getAttribute("id");
//   userSeq.push(userColor);
//   console.log(userColor, userSeq);
//   checkAns(userSeq.length - 1);
// }

// let allBtn = document.querySelectorAll(".btnn");
// console.log(allBtn);
// for (const btn of allBtn) {
//   btn.addEventListener("click", btnPress);
// }

// 2. CODE

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = 0;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game start");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 300);
}

function levelUp() {
  userSeq = []; // added just to enter value from start
  level++;
  h2.innerText = `Level ${level}`;

  let randomInx = Math.floor(Math.random() * 3) + 1;
  let randColor = btns[randomInx];
  let radBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  // console.log(randColor, radBtn, randomInx);
  gameFlash(radBtn);
}

function checkAns(idx) {
  console.log(`current level::, ${level}`);
  // let idx = level - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(() => {
        levelUp();
      }, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start.`;
    setTimeout(() => {
      document.body.style.backgroundColor = "red";
      console.log("different val");
    }, 280);
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 400);

    reset();
  }
}

function btnPress() {
  // console.log("btn was pressed", this);
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  // console.log(userColor, userSeq);
  console.log(userSeq.length - 1);
  checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btnn");
// console.log(allBtn);
for (const btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
