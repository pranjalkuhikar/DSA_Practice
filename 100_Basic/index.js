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

let year = 2024;
if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
