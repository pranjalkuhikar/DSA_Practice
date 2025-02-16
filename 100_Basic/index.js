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

let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
