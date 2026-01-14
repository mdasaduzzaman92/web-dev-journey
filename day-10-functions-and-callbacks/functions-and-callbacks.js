'use strict';

/*
//DEFAULT PARAMETERS
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 10,
  price = 25 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('6E5012', 20);
createBooking('AI0314', 2, 800);
createBooking('AI0314', undefined, 180);
*/

/*
//PASSING ARGUMENTS : VALUE AND REFERENCE
const flight = '6E8129';
const abdullah = {
  name: 'Md Abdullah',
  passport: 875548,
};

const checkIn = function (flightNum, passenger) {
  flightNum = '6E9999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 875548) alert('Checked in');
  else alert('Wrong Passport');
};

checkIn(flight, abdullah);

console.log(flight);
console.log(abdullah);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(abdullah);
checkIn(flight, abdullah);

console.log(abdullah);

*/

//JS supports passing by value and not by reference. Although, in case of object, we pass a value that consist of memory address pointing to object in a heap. So in JS, we pass a reference but not pass by reference.

//First class function and Higher order function

/*
JavaScript is a language that has first class functions means that functions are so-called first citizens. In practice, that means that functions are simply treated as values.

In JS, functions are really just another type of objects in JavaScript.And since objects are values, functions are values too. And since functions are values, we can store them in variables or object properties. We can also pass functions as arguments to other functions. For e.g. when adding event listeners or event handlers to DOM objects. We can also return a function from another function. Since, functions are objects, and many types of objects in JavaScript have methods, like array methods and so there are function methods also i.e. methods that we can call on functions. Example - bind method.

Higher order function: Since, JavaScript has first-class functions, this makes it possible for us to use and write higher order functions. A, higher order function is either a function that receives another function as an argument, or a function that returns a new function.

Example:
1. Function receiving another function as an argument
btn.addEventListener('click',greet);
Here, addEventListener is higher order function and greet in a callback function

2. Function returning a new function
function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}

Here, count() is higher order function and ananymous function is a returned function

*/

//Higher order function in practice
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
  console.log(`---------------------------------`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS uses callback all the time
const high5 = function () {
  console.log('Wave');
};

document.body.addEventListener('click', high5);
['Alice', ' Bob', 'Charles'].forEach(high5);

//callback function allows reusable functiona and also allows us to create level of abstraction
