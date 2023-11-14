// Even if  no promise return statement bur it will return promise

async function greet() {
  Abc();
  //   throw "some random error";
  return "hello";
}

greet();

// let res = greet();
// res.then((re) => {
//   throw "some random error";
//   console.log(re);
// }).catch((err) => console.log(err));
