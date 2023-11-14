// MINE

// function changeColor() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       if (num > 4) {
//         resolve();
//       }
//       reject();
//     }, 1000);
//   });
// }

// async function demo() {
//   try {
//     await changeColor();
//     await changeColor();
//     await changeColor();
//   } catch (error) {
//     console.log(error);
//   }
//   console.log("first");
// }

// demo()
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   });

// 2. code
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 4) {
        reject();
      }
      h1.style.color = color;
      console.log(num);
      resolve();
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
  } catch (error) {
    console.log("error catch", error);
  }
  let a = 5;
  console.log(a);
  console.log("new number", a + 3);
}

demo()
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  });

// let config = {headers: {Accept:"application/json"}};
//   let res=await axios.get(url, config)
