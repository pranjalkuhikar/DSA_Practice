// let n = 11;

// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(sum);
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// let even = 0;
// let odd = 0;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log(even, odd);

// let base = 2;
// let exponents = 4;
// let sum = 1;
// for (let i = 1; i <= exponents; i++) {
//   sum *= base;
// }
// console.log(sum);

// let count = 0;
// for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (n % i === 0) {
//     count++;
//     if (n / i != i) {
//       count++;
//     }
//   }
// }
// console.log(count === 2 ? "P" : "NP");

// function prime(n) {
//   let count = 0;
//   for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i != i) {
//         count++;
//       }
//     }
//   }
//   return count === 2;
// }
// let count = 0;
// for (let i = 1; i <= 500; i++) {
//   if (prime(i)) {
//     count++;
//   }
// }
// console.log(count);

// let n = 465;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let n = 5;
// let a = 0;
// let b = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   let temp = a + b;
//   a = b;
//   b = temp;
// }
// console.log(a);

// let n = 5;
// let a = 0;
// let b = 1;

// for (let i = 0; i <= n; i++) {
//   console.log(a);
//   let temp = a + b;
//   a = b;
//   b = temp;
// }

// let a = 10;
// let b = 12;
// let n1 = a;
// let n2 = b;
// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log(a);
// let lcm = (n1 * n2) / a;
// console.log(lcm);

// let n = 121;
// let temp = n;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);
// console.log(rev === temp ? "P" : "NP");

// let n = 24;
// let temp = n;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(temp % sum === 0 ? "H" : "NH");

// let n = 6;
// let temp = n;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(sum === temp ? "P" : "NP");

// let n = 9474;
// let copy = n;
// let temp = n;
// let count = 0;
// let sum = 0;
// while (temp != 0) {
//   count++;
//   temp = Math.floor(temp / 10);
// }
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit ** count;
//   n = Math.floor(n / 10);
// }
// console.log(sum === copy ? "A" : "NA");

// let n = 145;
// let temp = n;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   let fact = 1;
//   for (let i = 1; i <= lastDigit; i++) {
//     fact *= i;
//   }
//   sum += fact;
//   n = Math.floor(n / 10);
// }
// console.log(sum === temp ? "S" : "NS");

// let n = 25;
// let temp = n;
// let sq = n * n;
// let count = 0;
// while (temp != 0) {
//   count++;
//   temp = Math.floor(temp / 10);
// }
// let ans = sq % Math.pow(10, count);
// console.log(n === ans ? "A" : "NA");

// let n = 12;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(sum > n ? "A" : "NA");

// let n = 9;
// let sq = n * n;
// let sum = 0;
// while (sq != 0) {
//   let lastDigit = sq % 10;
//   sum += lastDigit;
//   sq = Math.floor(sq / 10);
// }
// console.log(sum === n ? "N" : "NN");

// let n = 6758;
// let sum = 0;
// while (n > 10) {
//   let sum = 0;
//   while (n != 0) {
//     let lastDigit = n % 10;
//     sum += lastDigit;
//     n = Math.floor(n / 10);
//   }
//   n = sum;
// }
// console.log(n);
