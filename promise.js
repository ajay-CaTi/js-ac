// AGain An example of real life example of call back hELL

function saveDb(data, success, failed) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failed();
  }
}
saveDb(
  "bro",
  () => {
    console.log("success2: Data is Saved!");
    saveDb(
      "hello World",
      () => {
        console.log("success2: Data is Saved!");
        saveDb(
          "hello World",
          () => {
            console.log("success3: Data is Saved!");
          },
          () => {
            console.log("failure3: Data not Save!");
          }
        );
      },
      () => {
        console.log("failure2: Data not Save!");
      }
    );
  },
  () => {
    console.log("failure: Data is Not save week connection!");
  }
);
