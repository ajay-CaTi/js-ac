let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.innerText = inp.value;
  item.append(delBtn);
  console.log(item);
  ul.append(item);
  inp.value = "";
});

// 1. CODE
// let delBtns = document.querySelectorAll(".delete");
// for (const delBtn of delBtns) {
//   delBtn.addEventListener("click", () => {
//     let par = delBtn.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }

// 2. CODE
// EVENT lISTENERS ONLY APPLY over Exixting Elements not on new element

// EVENT DELEGATION ::--using event bubbling
// Explain ::__ donot apply eventListener on child Apply it on PARENT

ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
  console.log("first", event.target.nodeName);
});
