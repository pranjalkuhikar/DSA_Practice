const prompt = require("prompt-sync")();

// -----------------------------------Basic-----------------------------------

// console.log("Hello World");

// console.log(5 + 5);

// let a = 4;
// let b = 3;
// console.log(`The Sum of ${a} and ${b} is ${a + b}`);

// let a = Number(prompt("Enter the First Number :- "));
// let b = Number(prompt("Enter the Second Number :- "));
// console.log(`The Sum of ${a} and ${b} is ${a + b}`);

// let name = prompt("Enter Your Name :- ");
// let age = Number(prompt("Enter Your Age :- "));
// console.log(`My name is ${name} and My age is ${age}`);

// -----------------------------------Formula-----------------------------------

// let length = 3;
// let breadth = 2;
// console.log(`Perimeter of Rectangle is ${2 * (length + breadth)} `);
// console.log(`Area of Rectangle is ${length * breadth}`);

// let length = 3;
// let height = 2;
// let width = 5;
// console.log(`Perimeter of Triangle is ${length + width + height} `);
// console.log(`Area of Triangle is ${0.5 * width * height}`);

// let radius = 5;
// console.log(`Perimeter of Circle is ${Math.floor(2 * Math.PI * radius)} `);
// console.log(`Area of Circle is ${Math.floor(Math.PI * radius * radius)}`);

// let temperature = 23;
// let fahrenheit = (temperature * 9) / 5 + 32;
// console.log(fahrenheit);

// let fahrenheit = 73;
// let temperature = ((fahrenheit - 32) * 5) / 9;
// console.log(temperature);

// let km = 50;
// let miles = km * 0.6;
// console.log(miles);

// let miles = 50;
// let km = miles * 1.6;
// console.log(km);

// let hour = 2;
// let min = 30;
// let totalMin = hour * 60 + min;
// console.log(totalMin);

// let totalMin = 150;
// let hour = Math.floor(totalMin / 60);
// let min = totalMin % 60;
// console.log(`${hour} : ${min}`);

// let p = 20;
// let r = 23;
// let t = 60;
// let SI = (p * r * t) / 100;
// console.log(SI);

// let totalDistance = 230;
// let fuelConsumed = 2;
// let average = Math.floor(totalDistance / fuelConsumed);
// console.log(average);

// -----------------------------------Swapping-----------------------------------

// let a = 2;
// let b = 3;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// let a = 2;
// let b = 3;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// -----------------------------------Condition-----------------------------------

// let num1 = Number(prompt("Enter the num1 :-  "));
// let num2 = Number(prompt("Enter the num2 :- "));
// console.log(`Is num1 and num2 is ${num1 === num2 ? "Equal" : "Not Equal"}`);

// let Year = Number(prompt("Enter the Year :- "));
// if (Year % 4 === 0 && (Year % 100 != 0 || Year % 400 === 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// let a = 3;
// let b = 2;
// if (a > b) {
//   console.log("A is Greater Number");
// } else {
//   console.log("B is Greater Number");
// }

// let a = 3;
// let b = 2;
// let c = 1;
// if (a > b && a > c) {
//   console.log("A is Greater Number");
// } else if (b > a && b > c) {
//   console.log("B is Greater Number");
// } else {
//   console.log("C is Greater Number");
// }

let a = 3;
if (a > 0) {
  console.log("Positive Number");
} else {
  console.log("Negative Number");
}
