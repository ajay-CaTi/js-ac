// Promise is an Object

// saveDb(
//   "bro",
//   () => {
//     console.log("success2: Data is Saved!");
//     saveDb(
//       "hello World",
//       () => {
//         console.log("success2: Data is Saved!");
//         saveDb(
//           "hello World",
//           () => {
//             console.log("success3: Data is Saved!");
//           },
//           () => {
//             console.log("failure3: Data not Save!");
//           }
//         );
//       },
//       () => {
//         console.log("failure2: Data not Save!");
//       }
//     );
//   },
//   () => {
//     console.log("failure: Data is Not save week connection!");
//   }
// );

function saveDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("reject: data not saved");
    }
  });
}
// 1. code
// let request = saveDb("bro");
// request
//   .then(() => {
//     console.log("Promise resolved");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Promise rejected");
//   });
// console.log(request);

// 2. code
saveDb("bro")
  .then((data) => {
    console.log("Promise resolved");
    console.log(data);
  })
  .catch((err) => {
    console.log("Promise rejected");
    console.log(err);
  });
console.log(request);
