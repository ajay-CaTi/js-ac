// Prototype constructor, class, new, this

// All property in array will be in PROTOTYPE

// 1.

// const user1 = {
//   fn: "ak",
//   ln: "bk",
//   age: 26,
//   about: function (a, b) {
//     return `${this.fn} ${this.ln} ${a} ${b}`;
//   },
//   is18: function () {
//     if (this.age >= 18) {
//       return `Age is greater than ${this.age}`;
//     }
//     return `Age is less than ${this.age}`;
//   },
// };

// const user2 = {
//   fn: "xk",
//   ln: "yk",
//   age: 56,
//   about: function (a, b) {
//     return `${this.fn} ${this.ln} ${a} ${b}`;
//   },
//   is18: function () {
//     if (this.age >= 18) {
//       return `Age is greater than ${this.age}`;
//     }
//     return `Age is less than ${this.age}`;
//   },
// };

// console.log(user1, user1.about(4, 5), user1.is18());
// console.log(user2, user2.about(8, 9), user2.is18());

// 2.

// let userMethod = {
//   about: function (a, b) {
//     return `${this.fn} ${this.ln} ${a} ${b}`;
//   },
//   is18: function () {
//     if (this.age >= 18) {
//       return `Age is greater than ${this.age}`;
//     }
//     return `Age is less than ${this.age}`;
//   },
// };

// const user1 = {
//   fn: "ak",
//   ln: "bk",
//   age: 26,
// };
// user1.about = userMethod.about;
// console.log(user1.about(4, 78));

// 3.

// function createUser(fn, ln, age) {
//   const user = {};
//   user.fn = fn;
//   user.ln = ln;
//   user.age = age;
//   (user.about = function () {
//     return `${this.fn} ${this.ln} ${this.age}`;
//   }),
//     (user.is18 = function () {
//       if (this.age >= 18) {
//         return `Age is greater than 18`;
//       }
//       return `Age is less than 18`;
//     });

//   return user;
// }

// const user1 = createUser("ak", "bk", 26);
// const user2 = createUser("xk", "yk", 56);
// console.log(user1.about(), user2.is18());

// 4.

// let user1 = {
//   k1: "v1",
//   k2: "v2",
// };

// let user2 = Object.create(user1);// craete an empty object

// user2.k3 = "v3";
// // let user2 = {
// //   k3: "v3",
// // };

// console.log(user2.k1);

// 5.

// let userMethod = {
//   about: function (a, b) {
//     return `${this.fn} ${this.ln} ${a} ${b}`;
//   },
//   is18: function () {
//     if (this.age >= 18) {
//       return `Age is greater than ${this.age}`;
//     }
//     return `Age is less than ${this.age}`;
//   },
//   song: function () {
//     return "la laa laaa laaah....!";
//   },
// };

// function createUser(fn, ln, age) {
//   const user = Object.create(userMethod);
//   user.fn = fn;
//   user.ln = ln;
//   user.age = age;

//   return user;
// }

// const user1 = createUser("ak", "bk", 26);
// const user2 = createUser("xk", "yk", 56);
// console.log(user1.about(), user2.is18(), user1.song());
// console.log(user1);

// 6.

// function createUser(fn, ln, age) {
//   const user = Object.create(createUser.prototype);
//   user.fn = fn;
//   user.ln = ln;
//   user.age = age;

//   return user;
// }

// createUser.prototype.about = function (a, b) {
//   return `${this.fn} ${this.ln} ${a} ${b}`;
// };

// createUser.prototype.is18 = function () {
//   if (this.age >= 18) {
//     return `Age is greater than ${this.age}`;
//   }
//   return `Age is less than ${this.age}`;
// };

// createUser.prototype.song = function () {
//   return "la laa laaa laaah....!";
// };

// const user1 = createUser("ak", "bk", 26);
// const user2 = createUser("xk", "yk", 56);
// console.log(user1.about(), user2.is18(), user1.song());
// console.log(user1);

// ONLY function provide prototype property
// prototype is an empty OBJECT

// createUser.prototype.abc = "abc";
// console.log(createUser.prototype.abc);

// 7.

// function CreateUser(fn, ln, age) {
//   // this={}
//   this.fn = fn;
//   this.ln = ln;
//   this.age = age;
// }

// CreateUser.prototype.about = function (a, b) {
//   return `${this.fn} ${this.ln} ${a} ${b}`;
// };

// CreateUser.prototype.is18 = function () {
//   if (this.age >= 18) {
//     return `Age is greater than ${this.age}`;
//   }
//   return `Age is less than ${this.age}`;
// };

// CreateUser.prototype.song = function () {
//   return "la laa laaa laaah....!";
// };

// const user1 = new CreateUser("ak", "bk", 26);
// const user2 = new CreateUser("xk", "yk", 56);

// console.log(user1.about(4, 8), user2.is18(), user1.song());

// for (const key in user1) {
//   if (user1.hasOwnProperty(key)) {
//     console.log(key);
//   }
//   //   console.log(key);
// }

// 8.

// class CreateUser {
//   constructor(fn, ln, age) {
//     this.fn = fn;
//     this.ln = ln;
//     this.age = age;
//   }
//   about(a, b) {
//     return `${this.fn} ${this.ln} ${a} ${b}`;
//   }
//   is18() {
//     if (this.age >= 18) {
//       return `Age is greater than ${this.age}`;
//     }
//     return `Age is less than ${this.age}`;
//   }
//   sign() {
//     return "ggf dddhd skksks";
//   }
// }

// let user1 = new CreateUser("ak", "bk", 26);
// console.log(user1.about(4, 5));
// console.log(user1);

// 9.

// class Cat {
//   constructor(name, live) {
//     this.name = name;
//     this.live = live;
//   }
//   about() {
//     return `${this.name} live in ${this.live} from 1 year`;
//   }
// }

// class Dog extends Cat {}

// const animal1 = new Cat("misty", "tunnu pur");
// const animal2 = new Dog("bholu", "bholu pur");

// console.log(animal2);

// 9.

// class Cat {
//   constructor(name, live) {
//     this.name = name;
//     this.live = live;
//   }
//   about() {
//     return `${this.name} live in ${this.live} from 1 year`;
//   }
// }

// class Dog extends Cat {
//   constructor(name, live) {
//     super(name, live); // PARENT CALSS CONSTRUCTOR IS CALLED
//   }
//   run() {
//     return `${this.name} is running`;
//   }
// }

// const animal1 = new Cat("misty", "tunnu pur");
// const animal2 = new Dog("bholu", "bholu pur");

// console.log(animal2.about());
// console.log(animal2.run());

// 10.

// getters SETTERS

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   about() {
//     return `${this.name} and ${this.age}`;
//   }
// }

// let person1 = new Person("bhallu", 26);
// console.log(person1);
// console.log(person1.about()); // want to call about as PROPERTY

// getters

// 11.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get about() {
//     return `${this.name} and ${this.age}`;
//   }
// }

// let person1 = new Person("bhallu", 26);
// console.log(person1);
// console.log(person1.about);

// 12.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get about() {
//     return `${this.name} and ${this.age}`;
//   }
//   setName(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let person1 = new Person("bhallu", 26);

// console.log(person1);
// console.log(person1.name);
// console.log(person1.age);

// console.log(person1.about);

// person1.setName("moku", 22);

// console.log(person1.name);
// console.log(person1.age);

// 13.

// SETTER

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   get about() {
//     return `${this.name} and ${this.age}`;
//   }
//   set fullName(nameAge) {
//     let [name, age] = nameAge.split(" ");
//     this.name = name;
//     this.age = age;
//   }
// }

// let person1 = new Person("bhallu", 26);

// person1.fullName = "tinku 15";

// console.log(person1);

// 14.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static classINfo() {
    return "this is static method";
  }
  static desc = "static property";
  get about() {
    // these methods are related to this object
    // BUT i want to craeted method realted to this class only
    return `${this.name} and ${this.age}`;
  }
  set fullName(nameAge) {
    // these methods are related to this object
    // BUT i want to craeted method realted to this class only
    let [name, age] = nameAge.split(" ");
    this.name = name;
    this.age = age;
  }
  eat() {
    // these methods are related to this object
    // BUT i want to craeted method realted to this class only
    return `${this.name} is eating`;
    // return `${Person.desc}`;
  }
}

let person1 = new Person("meko", 26);

console.log(person1.eat());
// console.log(person1.classINfo()); // ERROR::-- Uncaught TypeError: person1.classINfo is not a function

console.log(Person.classINfo());
console.log(Person.desc);
console.log(person1.eat()); // also return static from other method but do not access other than LINE 394

// Constructor:- method is a special method of a class for creating and initilizing  an object instance of  that class.
