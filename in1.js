"use-strict";

// if (size[0] === "a" && size.length > 3) {
//   console.log("Good String");
// } else {
//   console.log("Not Good String");
// }

// const name = prompt("Enter your name");
// const age = prompt("Enter your age");
// alert(`name is ${name} and age is ${age}`);

//**********------------**********-------- */

// let arr = [
//   ["X", null, "O"],
//   ["O", "X", "O"],
//   [null, "O", "X"],
// ];
// console.log(arr);
// console.log(arr);
// arr[1][2] = "X";

// console.log("************------------");

// console.log(Number.MAX_SAFE_INTEGER);
// const size = "   ajay   ";
// console.log(size.length);
// console.log(size.includes("a"));
// console.log(size.indexOf("a"));
// console.log(size.lastIndexOf("a"));
// console.log(size.slice(3, 7));
// console.log(size.replace("a", "A").trim());
// console.log(size.repeat(2).trim());

// console.log(size.slice(-1)); //size.length-1 i.e last character of string
// console.log(size.trim(), size.trim().length); // no change in original string
// const a = ["ak", "bk", "ck", "dk", "ek"]; // first conv to string and then sort()

// const b = a.splice(1, 0, "kk");
// console.log(a.slice());
// console.log(a.sort());
// console.log(a.slice(-2)); // last 2 element
// console.log(a.slice()); //copy of original array
// console.log(a);

// let num = [1, 5, 89, 45, 3, 56, 23, 40, 77, 83];

// console.log(num.sort((a, b) => a - b));

// const another = a;
// console.log(a.reverse().indexOf("ck"));
// another.splice(0, 1, "fk", "hh");
// console.log(another);
// console.log(another.splice(0, 1, "fk"));

// console.log("************------------");
// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [9, 0, -2]

// let arr1 = [7, 9, 0, -2];
// let n = 3;
// console.log(arr1.slice(0, 3));
// console.log(arr1.slice(arr1.length - n));

// Qs3. Write a JavaScript program to check whether a string is blank or not.

// let str = "";
// console.log(str.length === 0 ? "string is blank" : "strin have content");

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

// let str1 = "Hello";
// console.log(str1[1]);
// console.log(str1[0] == str1[0].toLowerCase()); // IMPORTANT LOGIC

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

// let str2 = "hello i am a good boy";
// console.log(str2 === str2.trim());

// Qs6. Write a JavaScript program to check if an element exists in an array or not.

// let arr2 = [1, 5, 89, 45, 3, 56, 23, 40, 77, 83];
// console.log(arr2.includes(45));

// // self function
// console.log(check(45));
// function check(a) {
//   for (let i = 0; i < arr2.length; i++) {
//     if (a === arr2[i]) {
//       return true;
//     }
//   }
// }

// Loops
// Iterate i.e repeat

// print odd number

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] % 2 === 0) {
//     console.log("Even number ", arr2[i]);
//   } else {
//     console.log("Odd number ", arr2[i]);
//   }
// }

// TABLE

// const num1 = +prompt("Enter a nummber to generate table");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num1} x ${i}= ${num1 * i}`);
// }

// Nested loops

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }

// BREAK Get out of loop where it exist

// **********------------***********
// FAVOURITE MOVIES
// **********------------***********

// let favMovie = "avatar";

// let userData = prompt("Enter your favourite movie");
// while (favMovie !== userData) {
//   if (userData === "quit") {
//     break;
//   }
//   userData = prompt('Plz try again or "quit"');
// }

// if (userData === favMovie) {
//   alert("correct");
// }

// **********------------***********
//
// **********------------***********

// let fruits = ["mango", "apple", "banana", "litchi", "pineapple"];

// let bb = [];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
//   bb.push(fruits[i]);
// }
// console.log(bb);
// console.log(fruits.join(", "));

// **********------------***********
//
// **********------------***********

// let hero = [
//   ["super", "moto", "flash"],
//   ["indices", "matt", "thrower"],
// ];

// for (let i = 0; i < hero.length; i++) {
//   for (let j = 0; j < hero[i].length; j++) {
//     console.log(hero[i][j]); // IMPORTANT LOGIC
//   }
// }

// let hero1 = [["super", "moto", "flash", "indices", "matt", "thrower"]];

// for (const i of hero1) {
//   console.log(i);
// }

//*******************------------- */
//
//*******************------------- */

// let todo = [];

// let req = prompt("enter your request");

// while (true) {
//   if (req === "add") {
//     req = prompt("Enter request to add task");
//     todo.push(req);
//   }
//   if (req == "quit") {
//     console.log("user quit");
//     break;
//   }
//   if (req === "list") {
//     console.log("--------------");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("--------------");
//   }
//   if (req == "delete") {
//     let idn = +prompt("enter task index");
//     todo.splice(idn, 1);
//     console.log("task delete");
//     for (const i of todo) {
//       console.log(i);
//     }
//     break;
//   }
//   req = prompt("enter your request");
// }

//*******************------------- */
//
//*******************------------- */

// const post = {
//   un: "ajay@gmail.com",
//   content: "dggd jsjsskks ryry iiie",
//   like: 150,
//   repost: 5,
//   tag: ["ggdg", "gh"],
// };

// delete post.tag;
// console.log(post);

// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(Math.floor(Math.random() * (10 - 5) + 1) + 5); // MAX number between 2 number
// console.log(Math.floor(Math.random() * 10) + 20);

//*******************------------- */
//
//*******************------------- */

// GUESS A NUMBER GAME

// let num = +prompt("guess a number in between 1 and 10");

// let randomNum = Math.floor(Math.random() * 10);

// while (true) {
//   if (num === "quit") {
//     console.log("quit");
//     break;
//   }
//   if (randomNum === num) {
//     alert(`Big Win ${randomNum}`);
//     break;
//   }
//   if (num < randomNum) {
//     alert("too low number");
//     num = +prompt("guess a number in between 1 and 10");
//   }
//   if (num > randomNum) {
//     alert("too large number");
//     num = +prompt("guess a number in between 1 and 10");
//   }
// }

//*******************------------- */
//
//*******************------------- */

// function dice() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

//*******************------------- */
//
//*******************------------- */

// let arr2 = [1, 5, 89, 45, 3, 56, 23, 40, 77, 83];

// let first = arr2.reduce((max, cur) => {
//   if (max < cur) {
//     return cur;
//   } else {
//     return max;
//   }
// }, 0);

// console.log(first);

//*******************------------- */
//
//*******************------------- */

// Every no is multiple of 10

// let every = arr2.every((i) => i % 10 === 0);
// console.log(every);
// console.log(...arr2);

// Qs1. Write a JavaScript function that returns array elements larger than a number

// let arr3 = [1, 5, 89, 45, 3, 56, 23, 40, 77, 83];

// let some = arr3.filter((i) => i > 77);
// console.log(some);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// let a = "abcdabcdefgggh";
// let str = "";
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
//   if (!str.includes(a[i])) {
//     str += a[i];
//   }
// }
// console.log(str);

// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output :
// "United States of America"

// let country = ["Australia", "Germany", "India that is Bharat"];

// let max = 0;
// const longestName = function longestCountryName(country) {
//   for (const i of country) {
//     console.log(i);
//     if (max < i.length) {
//       max = i.length;
//     }
//   }
//   return max;
// };
// console.log(longestName(country));

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

// let str3 = "abcdabcdefgggh";
// let vowels = ["a", "e", "i", "o", "u"];

// let str = "";
// for (let i = 0; i < str3.length; i++) {
//   for (let j = 0; j < vowels.length; j++) {
//     if (vowels[j] === str3[i]) {
//       console.log(vowels[j], str3[i]);
//       str += str3[i];
//     }
//   }
// }
// console.log(str);
// let set = new Set([...str]);
// console.log(set);

//*******************------------- */
//
//*******************------------- */
// Qs5. Write a JavaScript function to generate a random number within a range (start, end).

// console.log(Math.floor(Math.random() * (10 - 5) + 1) + 5);

// let str3 = "abcdabcdefgggh";
// console.log([...str3]); // String To Array

// Accept array of num return avg of number

// let arr3 = [1, 5, 89, 45, 3, 56, 23, 40, 77, 83];

// let avg = (arr3) => {
//   let sum = 0;
//   for (const i of arr3) {
//     sum += i;
//   }
//   return sum / arr3.length;
// };
// console.log(avg(arr3));

// takes single num as arguement and return it even or not

// let num = 54;
// let isEven = (num) => {
//   console.log(num);
//   return num % 2 === 0;
// };
// console.log(isEven());

// const obj = {
//   message: "Hello world",
//   me: this.message,
//   logMessage() {
//     console.log(this.message);
//   },
// };
// setTimeout(obj.logMessage, 1000);

// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

// let arr11 = [1, 2, 3, 4, 5, 6, 7];

// let avgSum = (arr11) => {
//   let sum = 0;
//   for (let i = 0; i < arr11.length; i++) {
//     sum += arr11[i];
//   }
//   console.log("avg is ", sum / arr11.length);
//   return sum;
// };
// console.log(avgSum(arr11));

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

// let arr11 = [1, 2, 3, 4, 5, 6, 7];

// let collect = arr11.map((i) => {
//   return i + 5;
// });
// console.log(collect);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

// const cars = ["BMW", "Volvo", "Mini"];

// let upper = cars.map((i) => {
//   return i.toUpperCase();
// });
// console.log(upper);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

// let arr11 = [1, 2, 3, 4, 5, 6, 7];
// function doubleAndReturnArgs(arr11, ...args) {
//   return [...arr11, ...args.map((i) => i * 2)];
// }
// console.log(doubleAndReturnArgs(arr11, 4, 5, 6, 7, 8, 9));

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// let mergeObjects = (a, b) => {
//   return { ...a, ...b };
// };
// console.log(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4, e: 5, f: 6 }));

// DOM

// console.log(document);
// console.dir(document.all[7].innerHTML);

// console.log(document.getElementById("para").textContent);

//  textContent:- also hidden content
// innetText:-only showed content

// let img = document.getElementsByTagName("img")[0]; // htmlCollection select one

// console.log(img.src); // access attr value

// document.getElementById("head").innerText = "Hello new here";

// console.log(document.getElementById("para").classList);

// let div = document.createElement("div");
// div.innerText = "Hi i am div";

// let p = document.createElement("p");
// p.innerText = "I am Para";
// p.classList.add("mico");

// div.append(p);

// document.body.append(div);

// p.innerText = "change para text";

// let h1 = document.createElement("h1");
// h1.innerText = "hi here bro!";
// div.append(h1);

// let h2 = document.createElement("h2");
// h2.innerText = "hi here bro!";
// div.prepend(h2);

// let heading = document.createElement("h1");
// heading.style.color = "pink";
// heading.innerText = "hi meko!";
// div.insertAdjacentElement("beforeend", heading);

// let div = docum end(div);

//  *** -----------************-----------

// let input = document.createElement("input");
// input.setAttribute("type", "text");
// input.classList.add("type");
// input.setAttribute("placeholder", "username");

// let button = document.createElement("button");
// button.innerText = "Click me";
// button.setAttribute("id", "btn");

// let h1 = document.createElement("h1");
// h1.innerText = "DOM Practice";
// h1.style.textDecoration = "underline";
// h1.style.color = "purple";

// let ppara = document.createElement("p");
// ppara.innerHTML = "Apna College <strong>Delta</strong> Practice";
// ppara.setAttribute("id", "btn");

// div.append(input);
// div.append(button);
// div.append(h1);
// div.append(ppara);

// document.querySelector("#btn").style.backgroundColor = "blue";
// document.querySelector("#btn").style.color = "white";

//  *** -----------************-----------

// Events

// let btn = document.querySelectorAll("button");

// for (const i of btn) {
//   i.onclick = () => {
//     alert("hi alert");
//   };
//   i.onmouseenter = () => {
//     alert("hi alert");
//   };
// }

// btn.onclick = () => {
//   alert("hi alert");
// };

// for (const i of btn) {
//   i.onclick = sayHello();
//   i.onmouseenter = sayName;
// }

// function sayHello() {
//   alert("Hi");
// }

// function sayName() {
//   alert("Hi Bro");
// }

// Event listeners

// let btn1 = document.querySelector("button");
// btn1.style.backgroundColor = "blue";
// btn1.style.color = "white";
// console.log(btn1);

// btn1.addEventListener("click", () => {
//   alert("Hi developer struggler");
// });

// RANDOM color generator
// let randomGreen = 0;
// let randomBlue = 0;
// let randomRed = 0;
// let color;

// let div2 = document.createElement("div");
// div2.classList.add("momo");
// div2.style.width = "90vw";
// div2.style.height = "200px";
// div2.style.border = "2px solid red";

// document.body.append(div2);

// let bbtn = document.createElement("button");
// document.body.append(bbtn);
// bbtn.innerText = "Generate color";

// bbtn.addEventListener("click", () => {
//   div2.style.backgroundColor = `rgb(
//     ${Math.floor(Math.random() * 255) + 1},
//     ${Math.floor(Math.random() * 255) + 1},
//     ${Math.floor(Math.random() * 255) + 1})`;
//   div2.innerHTML = `<h2>rgb(${Math.floor(Math.random() * 255) + 1},
//     ${Math.floor(Math.random() * 255) + 1},
//     ${Math.floor(Math.random() * 255) + 1})</h2>`;
// });
// console.log(
//   `${Math.floor(Math.random() * 255) + 1}`,
//   `${Math.floor(Math.random() * 255) + 1}`,
//   `${Math.floor(Math.random() * 255) + 1}`
// );

// -----------**********************
//
// -----------**********************

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//   console.log(this.innerText);
//   this.style.bacgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

// let input = document.querySelector("input"); // move forward backware up down
// console.log(input);

// input.addEventListener("keydown", keyGame);

// function keyGame(event) {
//   if (event.code === "Numpad8") {
//     console.log("forward");
//   }
//   if (event.code === "Numpad6") {
//     console.log("right");
//   }
//   if (event.code === "Numpad2") {
//     console.log("backward");
//   }
//   if (event.code === "Numpad4") {
//     console.log("left");
//   }
//   console.log(this.innerText, event);
// }

// -----------**********************
//
// -----------**********************

// FORMS

// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert("Form is submitted");
// });

// -----------**********************
//
// -----------**********************

// Access Forms element

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log(form);

//   let user = this.elements[0]; // form.elements
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);

//   alert(`Hi ${user.value} your email is set to ${pass.value}`);
// });

// INPUT CHANGE TWO important events

// CHANGE :::--- didn't track every key press track initial and final value

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//   console.log("change event");

//   console.log("final value=", this.value);
// });

// user.addEventListener("input", function () {
//   console.log("input event");
//   console.log("final value=", this.value);
// });

// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load

// let input = document.querySelector("input");
// console.log(input);
// input.addEventListener("scroll", function (e) {
//   console.log(e.code);
// });

// -----------**********************
//
// -----------**********************

// plz complete form and work sheet
// incomplete yet

// -----------**********************
//
// -----------**********************

// Event bubbling :- Create event listeners of Nested element known as event bubbling.

// andar vala event istner bahar vale sabhi means its hiercry vale event listeners ko triger kerega

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");

// div.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("div was clicked");
// });

// ul.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("ul was clicked");
// });

// for (const i of li) {
//   i.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

// -----------**********************
//
// -----------**********************

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//   let list = document.createElement("li");
//   list.innerText = inp.value;

//   let delBut = document.createElement("button");

//   delBut.innerText = "delete";
//   delBut.classList.add("delete");

//   list.append(delBut);
//   ul.append(list);
//   inp.value = "";
// });

// Event delegation ; by using dvent bubbling

// ul.addEventListener("click", function (event) {
//   // console.dir(event.target, event.target.nodeName, "button click");
//   if (event.target.nodeName == "BUTTON") {
//     let listItem = event.target.parentElement;
//     listItem.remove();
//     console.log(listItem, "delete");
//   }
// });

// let deleteBtns = document.querySelectorAll(".delete");
// console.log(deleteBtns);
// for (i of deleteBtns) {
//   console.log(i);
//   i.addEventListener("click", function () {
//     console.log("element deleted");
//     let par = this.parentElement;
//     console.log(par);
//   });
// }
