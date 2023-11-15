const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "my_app",
  password: "123456789",
});

// simple query INSET NEW DATA

let q = "INSERT INTO user(id, username, email, password) VALUES ?";
let users = [
  ["123a", "123_usera", "abc@gmail.coma", "abca"],
  ["123c", "123_userc", "abc@gmail.comc", "abcc"],
];

try {
  connection.query(q, [users], (err, results, fields) => {
    if (err) throw err;
    console.log(results); // results contains rows returned by server
  });
} catch (error) {
  console.log(error);
}

connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser());

// mysql -u root -p
