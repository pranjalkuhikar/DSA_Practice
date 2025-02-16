const prompt = require("prompt-sync")();

// let n = 5;
// if (n >= 0) {
//   console.log("Positive Number");
// } else {
//   console.log("Negative Number");
// }

// let n = 8;
// if (n % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// let n1 = 12;
// let n2 = 15;
// let sum = 0;
// for (let i = n1; i <= n2; i++) {
//   sum += i;
// }
// console.log(sum);

// let n1 = 12;
// let n2 = 3;
// if (n1 > n2) {
//   console.log("Greater Number is", n1);
// } else {
//   console.log("Smaller Number is", n2);
// }

// let n1 = 12;
// let n2 = 9;
// let n3 = 14;
// if (n1 > n2 && n1 > n3) {
//   console.log("n1 is Greater which is", n1);
// } else if (n2 > n1 && n2 > n3) {
//   console.log("n2 is Greater which is", n2);
// } else {
//   console.log("n3 is Greater which is", n3);
// }

// let year = 2024;
// if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// let n = 23;
// let count = 0;
// for (let i = 1; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     count++;
//     if (n / i != i) {
//       count++;
//     }
//   }
// }
// console.log(count === 2 ? "Prime Number" : "Not a Prime Number");

// function checkPrime(n) {
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
// let start = 2;
// let end = 10;
// for (let i = start; i <= end; i++) {
//   if (checkPrime(i)) {
//     console.log(i);
//   }
// }

// let n = 1234;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let n = 123;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

// let n = 121;
// let rev = 0;
// let temp = n;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev === temp ? "Palindrome Number" : "Not a Palindrome Number");

let n = 153;
let temp = n;
let copy = n;
let count = 0;
let sum = 0;
while (temp != 0) {
  count++;
  temp = Math.floor(temp / 10);
}
while (n != 0) {
  let lastDigit = n % 10;
  sum += Math.pow(lastDigit, count);
  n = Math.floor(n / 10);
}
console.log(copy === sum ? "Armstrong Number" : "Not a Armstrong Number");
