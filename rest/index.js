// fetch("https://type.fit/api/quotes", { method: "get" })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     return data;
//   })
//   .catch((err) => console.log(err));

/************************ */

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

/************************ */

/**
 * Method: The request method is either GET or POST.

Headers

Body: The body can be any of the following: Body.array.Buffer(), Body.Blob(), Body.formData(), Body.json(), Body.text().

Mode

Credentials

Cache
 */

/************************ */

// let div = document.getElementById("demo");
// let para = document.createElement("p");

// para.innerHTML = "paragraph";
// document.getElementById("demo").append(para);

// // Create element:
// let paraa = document.createElement("p");
// paraa.innerHTML = "This is a paragraph.";

// // Append to another element:
// document.getElementById("demo").appendChild(paraa);

/************************ */

const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

showAllTasks();

function showAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");

    btn.innerText = "-";

    btn.addEventListener("click", () => {
      removeTasks();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showAllTasks();
    });

    div.append(btn);
    container.append(div);
  });
}

function removeTasks() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();

  tasks.push({
    title: title.value,
    description: description.value,
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  showAllTasks();
});

/*********************** */

let str = "My name is Robin";
// console.log(str.length);

let a = (str) => {
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    j++;
  }
  return j;
};
console.log(a());
// console.log(str.slice(0, 2));

// let aa = str.split(" ");
// console.log(aa);
