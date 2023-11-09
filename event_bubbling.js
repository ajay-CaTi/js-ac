// Event bubbling :- Create event listeners of Nested element known as event bubbling.

// andar vala event istner bahar vale sabhi means its hiercry vale event listeners ko triger kerega

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul was clicked");
});

for (const i of li) {
  i.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("li was clicked");
  });
}
