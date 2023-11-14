// AGain An example of real life example of call back hELL

function saveDb(data, success, failed) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failed();
  }
}

// 1.

// saveDb(
//   "bro",
//   () => {
//     console.log("sucess: data saved");
//   },
//   () => {
//     console.log("failed:data failed");
//   }
// );

// 2. NOW make dependency if one is inserted then another goes

saveDb(
  "bro",
  () => {
    console.log("success2: Data is Saved!");
    saveDb(
      "hello World",
      () => {
        console.log("success3: Data is Saved!");
        saveDb(
          "hello World",
          () => {
            console.log("success4: Data is Saved!");
          },
          () => {
            console.log("failure5: Data not Save!");
          }
        );
      },
      () => {
        console.log("failure6: Data not Save!");
      }
    );
  },
  () => {
    console.log("failure7: Data is Not save week connection!");
  }
);
