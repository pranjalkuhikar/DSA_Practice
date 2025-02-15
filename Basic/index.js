const prompt = require("prompt-sync")();

// -----------------------------------Basic-----------------------------------

// Question 1: Print Hello World
// console.log("Hello World");

// Question 2: Calculation
// console.log(5 + 5);

// Question 3: What is the sum of 4 and 3?
// let a = 4;
// let b = 3;
// console.log(`The Sum of ${a} and ${b} is ${a + b}`);

// Question 4: Enter two numbers to calculate their sum.
// let a = Number(prompt("Enter the First Number :- "));
// let b = Number(prompt("Enter the Second Number :- "));
// console.log(`The Sum of ${a} and ${b} is ${a + b}`);

// Question 5: Enter your name and age.
// let name = prompt("Enter Your Name :- ");
// let age = Number(prompt("Enter Your Age :- "));
// console.log(`My name is ${name} and My age is ${age}`);

// -----------------------------------Formula-----------------------------------

// Question 6: What is the perimeter and area of a rectangle with length 3 and breadth 2?
// let length = 3;
// let breadth = 2;
// console.log(`Perimeter of Rectangle is ${2 * (length + breadth)} `);
// console.log(`Area of Rectangle is ${length * breadth}`);

// Question 7: What is the perimeter and area of a triangle with sides 3, 2, and 5?
// let length = 3;
// let height = 2;
// let width = 5;
// console.log(`Perimeter of Triangle is ${length + width + height} `);
// console.log(`Area of Triangle is ${0.5 * width * height}`);

// Question 8: What is the perimeter and area of a circle with radius 5?
// let radius = 5;
// console.log(`Perimeter of Circle is ${Math.floor(2 * Math.PI * radius)} `);
// console.log(`Area of Circle is ${Math.floor(Math.PI * radius * radius)}`);

// Question 9: Convert 23 degrees Celsius to Fahrenheit.
// let temperature = 23;
// let fahrenheit = (temperature * 9) / 5 + 32;
// console.log(fahrenheit);

// Question 10: Convert 73 degrees Fahrenheit to Celsius.
// let fahrenheit = 73;
// let temperature = ((fahrenheit - 32) * 5) / 9;
// console.log(temperature);

// Question 11: Convert 50 kilometers to miles.
// let km = 50;
// let miles = km * 0.6;
// console.log(miles);

// Question 12: Convert 50 miles to kilometers.
// let miles = 50;
// let km = miles * 1.6;
// console.log(km);

// Question 13: Convert 2 hours and 30 minutes to total minutes.
// let hour = 2;
// let min = 30;
// let totalMin = hour * 60 + min;
// console.log(totalMin);

// Question 14: Convert 150 minutes to hours and minutes.
// let totalMin = 150;
// let hour = Math.floor(totalMin / 60);
// let min = totalMin % 60;
// console.log(`${hour} : ${min}`);

// Question 15: Calculate the simple interest for principal 20, rate 23%, and time 60 years.
// let p = 20;
// let r = 23;
// let t = 60;
// let SI = (p * r * t) / 100;
// console.log(SI);

// Question 16: Calculate the fuel efficiency for a total distance of 230 km and fuel consumed of 2 liters.
// let totalDistance = 230;
// let fuelConsumed = 2;
// let average = Math.floor(totalDistance / fuelConsumed);
// console.log(average);

// -----------------------------------Swapping-----------------------------------

// Question 17: Swap the values of a and b using a temporary variable.
// let a = 2;
// let b = 3;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// Question 18: Swap the values of a and b without using a temporary variable.
// let a = 2;
// let b = 3;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// -----------------------------------Condition-----------------------------------

// Question 19: Enter two numbers to check if they are equal or not.
// let num1 = Number(prompt("Enter the num1 :-  "));
// let num2 = Number(prompt("Enter the num2 :- "));
// console.log(`Is num1 and num2 is ${num1 === num2 ? "Equal" : "Not Equal"}`);

// Question 20: Enter a year to check if it is a leap year or not.
// let Year = Number(prompt("Enter the Year :- "));
// if (Year % 4 === 0 && (Year % 100 != 0 || Year % 400 === 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// Question 21: Compare two numbers to find the greater number.
// let a = 3;
// let b = 2;
// if (a > b) {
//   console.log("A is Greater Number");
// } else {
//   console.log("B is Greater Number");
// }

// Question 22: Compare three numbers to find the greatest number.
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

// Question 23: Check if a number is positive or negative.
// let a = 3;
// if (a > 0) {
//   console.log("Positive Number");
// } else {
//   console.log("Negative Number");
// }

// Question 24: Check if a number is even or odd.
// let a = 2;
// if (a % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// Question 25: Classify a number as positive/negative and even/odd.
// let a = 6;
// if (a > 0 && a % 2 === 0) {
//   console.log("Positive and Even");
// } else if (a > 0 && a % 2 != 0) {
//   console.log("Positive and Odd");
// } else if (a < 0 && a % 2 === 0) {
//   console.log("Negative and Even");
// } else if (a < 0 && a % 2 != 0) {
//   console.log("Negative and Odd");
// }

// Question 26: Check if you are eligible for voting.
// let age = 18;
// if (age >= 18) {
//   console.log("You are 18 Year Old and Your are Eligible for Voting");
// } else {
//   console.log("You are not 18 Year Old and Your are not Eligible for Voting");
// }

// Question 27: Enter marks for Maths, Science, English, and Hindi to get the percentage and grade.
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
// } else if (percentage >= 45 && percentage < 55) {
//   console.log("C Grade");
// } else if (percentage >= 35 && percentage < 45) {
//   console.log("D Grade");
// } else {
//   console.log("F Grade");
// }

// Question 28: Calculate profit or loss based on cost price and selling price.
// let costPrice = 500;
// let sellingPrice = 300;
// if (sellingPrice > costPrice) {
//   console.log("Profit", sellingPrice - costPrice);
// } else {
//   console.log("Loss", costPrice - sellingPrice);
// }

// Question 29: Calculate the discount based on the total price.
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
// } else if (totalPrice > 9000) {
//   console.log(
//     "You Got 20% Discount which is",
//     0.2 * totalPrice,
//     "and final amount is",
//     totalPrice - 0.2 * totalPrice
//   );
// }

// Question 30: Calculate the electricity bill based on the units consumed.
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

// Question 31: Check if a person is tall, average, or dwarf based on height.
// let height = 145;
// if (height >= 200) {
//   console.log("He is Tall");
// } else if (height >= 150 && height < 200) {
//   console.log("He is Average");
// } else {
//   console.log("He is Dwarf");
// }

// Question 32: Check if an alphabet is a vowel or consonant.
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
//   console.log("This is Consonant");
// }

// Question 33: Enter the movie name and rating to get the movie status.
// let name = prompt("Enter the Movie Name :- ");
// let rating = Number(prompt("Enter the Rating :- "));
// if (rating < 2.0) {
//   console.log("Flop");
// } else if (rating < 3.4) {
//   console.log("Semi Hit");
// } else if (rating < 4.5) {
//   console.log("Hit");
// } else if (rating < 5.0) {
//   console.log("Super Hit");
// }

// Question 34: Calculate the salary based on gender, qualification, and years of experience.
// let gender = prompt("Enter the Gender :- ");
// let qualification = prompt("Enter (graduation/post-graduation) :- ");
// let year = Number(prompt("Enter the Year :- "));
// let salary;

// if (gender === "male") {
//   if (qualification === "graduation") {
//     salary = year < 10 ? 7000 : 10000;
//   } else if (qualification === "post-graduation") {
//     salary = year < 10 ? 10000 : 15000;
//   }
// } else if (gender === "female") {
//   if (qualification === "graduation") {
//     salary = year < 10 ? 6000 : 9000;
//   } else if (qualification === "post-graduation") {
//     salary = year < 10 ? 10000 : 12000;
//   }
// }
// console.log(salary ? `${salary}` : "Invalid");

// Question 35: Enter the day number to get the corresponding day name.
// let n = Number(prompt("Enter the day Number :- "));
// switch (n) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Input");
// }

// Question 36: Enter the month number to get the corresponding month name.
// let month = Number(prompt("Enter the Month Number :- "));
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("February");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("August");
//     break;
//   case 9:
//     console.log("September");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid Input");
// }

// Question 37: Enter the operator (+, -, *, /) and two numbers to perform the operation.
// let operator = prompt("Enter the Operator(+,-,*,/) :- ");
// let a = Number(prompt("Enter the num 1 :- "));
// let b = Number(prompt("Enter the num 2 :- "));

// switch (operator) {
//   case "+":
//     console.log("Addition", a + b);
//     break;
//   case "-":
//     console.log("Subtraction ", a - b);
//     break;
//   case "*":
//     console.log("Multiplication = ", a * b);
//     break;
//   case "/":
//     console.log("Division = ", a / b);
//     break;
//   default:
//     console.log("Invalid Operator");
// }

// -----------------------------------Loop-----------------------------------

// let n = Number(prompt("Enter the Number :- "));
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// let num = 5;
// for (let i = 1; i < num; i++) {
//   sum += i;
// }
// console.log(sum);
// console.log(sum / num);

// let n = 12;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// let n = 12;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// let a = 2;
// let b = 4;
// let sum = 1;
// for (let i = 1; i <= b; i++) {
//   sum *= a;
// }
// console.log(sum);

// let even = 0;
// let odd = 0;
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log(even, odd);

// let n = 11;
// let count = 0;
// for (let i = 1; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     count++;
//     if (n / i != i) {
//       count++;
//     }
//   }
// }
// console.log(count == 2 ? "Prime Number" : "Not Prime Number");

// function isPrime(n) {
//   let count = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i != i) {
//         count++;
//       }
//     }
//   }
//   return count === 2;
// }

// for (let i = 1; i <= 500; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// let n = 465;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let n = 7;
// let a = 0;
// let b = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   let temp = b;
//   b = a + b;
//   a = temp;
// }

// let n = 1234;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

// let n = 121;
// let temp = n;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev === temp ? "Palindrome" : "Not Palindrome");

let a = 12;
let b = 20;
let num1 = a;
let num2 = b;
while (b != 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
let GCD = a;
console.log(GCD);

let LCM = (num1 * num2) / a;
console.log(LCM);
