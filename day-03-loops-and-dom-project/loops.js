/*-------------------DAY 3----------------------------*/

// ITERATION : THE FOR LOOP
for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

//LOOPING ARRAYS, BREAKING AND CONTINUING
const person = [
  "James",
  "Thompson",
  2037 - 1991,
  "musician",
  ["Gabriel", "David", "Soloman"],
];

for (let i = 0; i < person.length; i++) {
  console.log(person[i], typeof person[i]);
}

//Continue and Break statement

for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(`Lifting weights repetition ${i}`);
  if (i === 7) break;
}

//Looping backwards

for (let i = person.length - 1; i >= 0; i--) {
  console.log(person[i]);
}

//Nested loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting Exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
  }
}

//While Loop
let i = 0;
while (i < person.length) {
  console.log(person[i], typeof person[i++]);
}

let randomNumber = Math.trunc(Math.random() * 6 + 1, 1);

//do...while loop
do {
  console.log(`You rolled a ${randomNumber}`);
  randomNumber = Math.trunc(Math.random() * 6 + 1, 1);
} while (randomNumber !== 6);
