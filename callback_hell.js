let h1 = document.querySelector("h1");

// 1. This type possible

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "blue";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);

// 2. NOT possible

// function changeColor(color) {
//   h1.style.color = color;
// }

// setTimeout(() => {
//   changeColor("red");
// }, 1000);

// setTimeout(() => {
//   changeColor("blue");
// }, 2000);

// setTimeout(() => {
//   changeColor("green");
// }, 3000);

// 3. NOT possible

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    nextColorChange();
  }, delay);
  h1.style.color = color;
}

// NESTING in call back ::-- callback HELL

changeColor("red", 1000, () => {
  changeColor("blue", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("pink", 1000, () => {
        changeColor("brown", 1000);
      });
    });
  });
});

// Prevent from Callback Hell USE PRomise , Async Await
