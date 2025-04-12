// let n = 23;

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

// for (let i = 0; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// let even = 0;
// let odd = 0;
// for (let i = 0; i < n; i++) {
//   if (i % 2 === 0) even += i;
//   else odd += i;
// }
// console.log(even, odd);

// let base = 2;
// let expo = 4;
// let sum = 1;
// for (let i = 1; i <= expo; i++) {
//   sum *= base;
// }
// console.log(sum);

// let count = 0;
// for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (n % i === 0) {
//     count++;
//     if (n / i != i) {
//       count++;
//     }
//   }
// }
// console.log(count === 2 ? "P" : "NP");

// function primeNumber(n) {
//   let count = 0;
//   for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
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
//   if (primeNumber(i)) {
//     console.log(i);
//   }
// }

// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let a = 0;
// let b = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   let temp = a + b;
//   a = b;
//   b = temp;
// }

// let a = 12;
// let b = 20;
// let temp1 = a;
// let temp2 = b;
// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log(a);
// let lcm = (temp1 * temp2) / a;
// console.log(lcm);

// let copy = n;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);
// console.log(copy === rev ? "P" : "NP");

// let n = 29;
// let copy = n;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(copy % sum === 0 ? "H" : "NH");

// let n = 6;
// let copy = n;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(copy === sum ? "P" : "NP");

// let n = 407;
// let copy = n;
// let temp = n;
// let count = 0;
// let sum = 0;
// while (copy != 0) {
//   count++;
//   copy = Math.floor(copy / 10);
// }
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += Math.pow(lastDigit, count);
//   n = Math.floor(n / 10);
// }
// console.log(sum === temp ? "A" : "NA");
