const prompt = require("prompt-sync")();

// -----------------------------------Basic-----------------------------------

// Question: Print Hello World
// console.log("Hello World");

// Question: Calculation
// console.log(5 + 5);

// Question: What is the sum of 4 and 3?
// let a = 4;
// let b = 3;
// console.log(`The Sum of ${a} and ${b} is ${a + b}`);

// Question: Enter two numbers to calculate their sum.
// let a = Number(prompt("Enter the First Number :- "));
// let b = Number(prompt("Enter the Second Number :- "));
// console.log(`The Sum of ${a} and ${b} is ${a + b}`);

// Question: Enter your name and age.
// let name = prompt("Enter Your Name :- ");
// let age = Number(prompt("Enter Your Age :- "));
// console.log(`My name is ${name} and My age is ${age}`);

// -----------------------------------Formula-----------------------------------

// Question: What is the perimeter and area of a rectangle with length 3 and breadth 2?
// let length = 3;
// let breadth = 2;
// console.log(`Perimeter of Rectangle is ${2 * (length + breadth)} `);
// console.log(`Area of Rectangle is ${length * breadth}`);

// Question: What is the perimeter and area of a triangle with sides 3, 2, and 5?
// let length = 3;
// let height = 2;
// let width = 5;
// console.log(`Perimeter of Triangle is ${length + width + height} `);
// console.log(`Area of Triangle is ${0.5 * width * height}`);

// Question: What is the perimeter and area of a circle with radius 5?
// let radius = 5;
// console.log(`Perimeter of Circle is ${Math.floor(2 * Math.PI * radius)} `);
// console.log(`Area of Circle is ${Math.floor(Math.PI * radius * radius)}`);

// Question: Convert 23 degrees Celsius to Fahrenheit.
// let temperature = 23;
// let fahrenheit = (temperature * 9) / 5 + 32;
// console.log(fahrenheit);

// Question: Convert 73 degrees Fahrenheit to Celsius.
// let fahrenheit = 73;
// let temperature = ((fahrenheit - 32) * 5) / 9;
// console.log(temperature);

// Question: Convert 50 kilometers to miles.
// let km = 50;
// let miles = km * 0.6;
// console.log(miles);

// Question: Convert 50 miles to kilometers.
// let miles = 50;
// let km = miles * 1.6;
// console.log(km);

// Question: Convert 2 hours and 30 minutes to total minutes.
// let hour = 2;
// let min = 30;
// let totalMin = hour * 60 + min;
// console.log(totalMin);

// Question: Convert 150 minutes to hours and minutes.
// let totalMin = 150;
// let hour = Math.floor(totalMin / 60);
// let min = totalMin % 60;
// console.log(`${hour} : ${min}`);

// Question: Calculate the simple interest for principal 20, rate 23%, and time 60 years.
// let p = 20;
// let r = 23;
// let t = 60;
// let SI = (p * r * t) / 100;
// console.log(SI);

// Question: Calculate the fuel efficiency for a total distance of 230 km and fuel consumed of 2 liters.
// let totalDistance = 230;
// let fuelConsumed = 2;
// let average = Math.floor(totalDistance / fuelConsumed);
// console.log(average);

// -----------------------------------Swapping-----------------------------------

// Question: Swap the values of a and b using a temporary variable.
// let a = 2;
// let b = 3;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// Question: Swap the values of a and b without using a temporary variable.
// let a = 2;
// let b = 3;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// -----------------------------------Condition-----------------------------------

// Question: Enter two numbers to check if they are equal or not.
// let num1 = Number(prompt("Enter the num1 :-  "));
// let num2 = Number(prompt("Enter the num2 :- "));
// console.log(`Is num1 and num2 is ${num1 === num2 ? "Equal" : "Not Equal"}`);

// Question: Enter a year to check if it is a leap year or not.
// let Year = Number(prompt("Enter the Year :- "));
// if (Year % 4 === 0 && (Year % 100 != 0 || Year % 400 === 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// Question: Compare two numbers to find the greater number.
// let a = 3;
// let b = 2;
// if (a > b) {
//   console.log("A is Greater Number");
// } else {
//   console.log("B is Greater Number");
// }

// Question: Compare three numbers to find the greatest number.
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

// Question: Check if a number is positive or negative.
// let a = 3;
// if (a > 0) {
//   console.log("Positive Number");
// } else {
//   console.log("Negative Number");
// }

// Question: Check if a number is even or odd.
// let a = 2;
// if (a % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// Question: Classify a number as positive/negative and even/odd.
// let a = 6;
// if (a > 0 && a % 2 === 0) {
//   console.log("Positive and Even");
// } else if (a > 0 && a % 2 != 0) {
//   console.log("Positive and Odd");
// } else if (a < 0 && a % 2 === 0) {
//   console.log("Negative and Even");
// } else if (a < 0 && a % 2 != 0) {
//   console.log("Negative and Odd");

// let age = 18;
// if (age >= 18) {
//   console.log("You are 18 Year Old and Your are Eligible for Voting");
// } else {
//   console.log("You are not 18 Year Old and Your are not Eligible for Voting");
// }

// let maths = Number(prompt("Enter the Maths Marks :- "));
// let sci = Number(prompt("Enter the Science Marks :- "));
// let eng = Number(prompt("Enter the English Marks :- "));
// let hin = Number(prompt("Enter the Hindi Marks :- "));
// let percentage = ((maths + sci + eng + hin) / 400) * 100;
// console.log(percentage);
// if (percentage > 75) {
//   console.log("A Grade");
// } else if (percentage >= 55 && percentage < 75) {
//   console.log("B Grade");
// } else if (percentage >= 55 && percentage < 75) {
//   console.log("C Grade");
// } else if (percentage >= 45 && percentage < 55) {
//   console.log("D Grade");
// } else if (percentage >= 35 && percentage < 45) {
//   console.log("E Grade");
// } else {
//   console.log("F Grade");
// }

// let costPrice = 500;
// let sellingPrice = 300;
// if (sellingPrice > costPrice) {
//   console.log("Profit", sellingPrice - costPrice);
// } else {
//   console.log("Loss", costPrice - sellingPrice);
// }

// let totalPrice = 15000;
// if (totalPrice <= 5000) {
//   console.log("You Got 0% Discount Your Price is", totalPrice);
// } else if (totalPrice <= 7000) {
//   console.log(
//     "You Got 5% Discount which is",
//     0.05 * totalPrice,
//     "and final amount is",
//     totalPrice - 0.05 * totalPrice
//   );
// } else if (totalPrice <= 9000) {
//   console.log(
//     "You Got 10% Discount which is",
//     0.1 * totalPrice,
//     "and final amount is",
//     totalPrice - 0.1 * totalPrice
//   );
// } else if (totalPrice > 7000) {
//   console.log(
//     "You Got 20% Discount which is",
//     0.2 * totalPrice,
//     "and final amount is",
//     totalPrice - 0.2 * totalPrice
//   );
// }

// let unit = 700;
// if (unit <= 100) {
//   console.log(unit * 4.2);
// } else if (unit <= 200) {
//   console.log(100 * 4.2 + (unit - 100) * 6);
// } else if (unit <= 400) {
//   console.log(100 * 4.2 + 100 * 6 + (unit - 200) * 8);
// } else if (unit > 400) {
//   console.log(100 * 4.2 + 100 * 6 + 200 * 8 + (unit - 400) * 13);
// }

// let height = 145;
// if (height >= 200) {
//   console.log("He is Tall");
// } else if (height >= 150 && height < 200) {
//   console.log("He is  Average");
// } else {
//   console.log("He is Dwarf");
// }

// let alphabet = prompt("Enter the Alphabet :- ").toLowerCase();
// if (
//   alphabet === "a" ||
//   alphabet === "e" ||
//   alphabet === "i" ||
//   alphabet === "o" ||
//   alphabet === "u"
// ) {
//   console.log("This is Vowel");
// } else {
//   console.log("This is Constant");
// }

let name = prompt("Enter the Movie Name :- ");
let rating = Number(prompt("Enter the Rating :- "));
if (rating < 2.0) {
  console.log("Flop");
} else if (rating < 3.4) {
  console.log("Semi Hit");
} else if (rating < 4.5) {
  console.log("Hit");
} else if (rating < 5.0) {
  console.log("Super Hit");
}
