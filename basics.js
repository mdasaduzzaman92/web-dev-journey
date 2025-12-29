/*-------------------DAY 2----------------------------*/

//FUNCTIONS

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(5, 2));
console.log(fruitProcessor(5, 8));

//DIFFERENCE BETWEEN FUNCTION DECLARATION AND EXPRESSION
//In function declaration, function can be called before it is defined

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
console.log(calcAge1(1992));

//FUNCTION EXPRESSION OR ANONYMOUS FUNCTION
//In function expression, function cannot be called before it is defined
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge2(1992));

//ARROW FUNCTION
/*
Added in ES6
Faster to write
We cannot use 'this' keyword in arrow function
If there is only one line of code, then we need not mention return keyword explicitly.
*/

//Illustration 1
const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1992));

//Illustration 2
const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  return 65 - age;
};

console.log(yearsUntilRetirement(1992));

//FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

//Introduction to Arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

//push adds elements at the end of the array
const newLength = friends.push("Jay"); //push returns new array length
console.log(friends);
console.log(newLength);

//unshift adds elements at the beginning of the array
const newLength2 = friends.unshift("John"); //unshift returns new array length
console.log(friends);
console.log(newLength2);

//pop removes the last element from the array
let removedElement = friends.pop(); //pop returns the removed element
console.log(friends);
console.log(removedElement);

//shift removes the first element from the array
removedElement = friends.shift(); //shift returns the removed element
console.log(friends);
console.log(removedElement);

console.log(friends.indexOf("Steven") + 1);

console.log(friends.indexOf("Bob")); //-1 if element is not found

console.log(friends.includes("Steven")); //returns true if present, false if not

console.log(friends.includes("Bob"));

//includes does strict equality check
friends.push(25);

console.log(friends.includes("25"));
console.log(friends.includes(25));

//Introduction to Objects

const person = {
  firstName: "John",
  lastName: "Stuart",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

const nameKey = "Name";
//Dot and Bracket notation in Object
console.log(person.friends);
console.log(person["lastName"]);

//we can use expression in bracket notation
console.log(person["first" + nameKey]);
console.log(person["last" + nameKey]);

/*
const reply = prompt("What do you want to know about John?");

if (person[reply]) console.log(person[reply]);
else console.log(`${reply} property doesnt exist`);
*/

//Adding property to the object

person.location = "Kolkata, West Bengal";
console.log(person.location);

console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is ${person.friends[0]}`
);

//Object Methods
const john = {
  firstName: "John",
  lastName: "Stuart",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //only function expression allowed inside object
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(john.calcAge(john.birthYear)); //dot notation
console.log(john["calcAge"](john.birthYear)); //bracket notation

//using this
const james = {
  firstName: "James",
  lastName: "Sebastians",
  birthYear: 1995,
  job: "developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  //only function expression allowed inside object
  //   calcAge: function () {
  //     //this points to james
  //     return 2037 - this.birthYear;
  //     },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} is a ${this.calcAge()} old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driving licence`;
  },
};

console.log(james.calcAge());
console.log(james.age);
console.log(james.summary());
