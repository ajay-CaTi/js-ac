let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changeColor("red", 1000)
  .then(() => {
    console.log("red color changed");
    return changeColor("green", 1000);
  })
  .then(() => {
    console.log("red color changed");
    return changeColor("blue", 1000);
  })
  .catch((err) => {
    console.log(err);
    return changeColor("violet", 1000);
  })
  .finally(() => {
    console.log("finally reached");
  });

// NESTING in call back ::-- callback HELL

// changeColor("red", 1000, () => {
//   changeColor("blue", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("pink", 1000, () => {
//         changeColor("brown", 1000);
//       });
//     });
//   });
// });
