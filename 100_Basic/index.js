const prompt = require("prompt-sync")();

// ---------------------------------------Topic-1---------------------------------------

// Question 1: Check if a number is positive or negative.
// let n = 5;
// if (n >= 0) {
//   console.log("Positive Number");
// } else {
//   console.log("Negative Number");
// }

// Question 2: Check if a number is even or odd.
// let n = 8;
// if (n % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// Question 3: Calculate the sum of numbers from 1 to n.
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// Question 4: Calculate the sum of numbers between two given numbers.
// let n1 = 12;
// let n2 = 15;
// let sum = 0;
// for (let i = n1; i <= n2; i++) {
//   sum += i;
// }
// console.log(sum);

// Question 5: Calculate the factorial of a number.
// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// Question 6: Compare two numbers to find the greater number.
// let n1 = 12;
// let n2 = 3;
// if (n1 > n2) {
//   console.log("Greater Number is", n1);
// } else {
//   console.log("Smaller Number is", n2);
// }

// Question 7: Compare three numbers to find the greatest number.
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

// Question 8: Check if a year is a leap year or not.
// let year = 2024;
// if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// Question 9: Check if a number is prime or not.
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

// Question 10: Print all prime numbers between two given numbers.
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

// Question 11: Calculate the sum of digits of a number.
// let n = 1234;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// Question 12: Reverse a number.
// let n = 123;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);

// Question 13: Check if a number is a palindrome or not.
// let n = 121;
// let rev = 0;
// let temp = n;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev === temp ? "Palindrome Number" : "Not a Palindrome Number");

// Question 14: Check if a number is an Armstrong number.
// let n = 371;
// let temp = n;
// let copy = n;
// let count = 0;
// let sum = 0;
// while (temp != 0) {
//   count++;
//   temp = Math.floor(temp / 10);
// }
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += Math.pow(lastDigit, count);
//   n = Math.floor(n / 10);
// }
// console.log(copy === sum ? "Armstrong Number" : "Not a Armstrong Number");

// Question 15: Print all Armstrong numbers between two given numbers.
// function armstrongNumber(n) {
//   let temp = n;
//   let copy = n;
//   let count = 0;
//   let sum = 0;
//   while (temp != 0) {
//     count++;
//     temp = Math.floor(temp / 10);
//   }
//   while (n != 0) {
//     let lastDigit = n % 10;
//     sum += Math.pow(lastDigit, count);
//     n = Math.floor(n / 10);
//   }
//   return copy === sum;
// }
// let start = 10;
// let end = 1000;
// for (let i = start; i <= end; i++) {
//   if (armstrongNumber(i)) {
//     console.log(i);
//   }
// }

// Question 16: Print the Fibonacci series up to n terms.
// let n = 4;
// let a = 0;
// let b = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   let temp = a;
//   a = a + b;
//   b = temp;
// }

// Question 17: Find the nth term of the Fibonacci series.
// let n = 4;
// let a = 0;
// let b = 1;
// for (let i = 1; i <= n; i++) {
//   let temp = a;
//   a = a + b;
//   b = temp;
// }
// console.log(a);

// Question 18: Calculate the power of a number.
// let n1 = 2;
// let n2 = 3;
// let sum = 1;
// for (let i = 1; i <= 3; i++) {
//   sum *= n1;
// }
// console.log(sum);

// Question 19: Find the factors of a number.
// let n = 10;
// for (let i = 1; i < Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     console.log(i);
//     if (n / i != i) {
//       console.log(n / i);
//     }
//   }
// }

// Question 20: Check if a number is a strong number.
// let n = 145;
// let sum = 0;
// let temp = n;
// while (n != 0) {
//   let lastDigit = n % 10;
//   let fact = 1;
//   for (let i = 1; i <= lastDigit; i++) {
//     fact *= i;
//   }
//   sum += fact;
//   n = Math.floor(n / 10);
// }
// console.log(temp === sum ? "Strong Number" : "Not a Strong Number");

// Question 21: Check if a number is a perfect number.
// let n = 6;
// let sum = 0;
// let temp = n;
// for (let i = 1; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(temp === sum ? "Perfect Number" : "Not a Perfect Number");

// Question 22: Check if a number is a Harshad number.
// let n = 18;
// let sum = 0;
// let temp = n;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(temp % sum === 0 ? "Harshad Number" : "Not a Harshad Number");

// Question 23: Check if a number is an abundant number.
// let n = 12;
// let sum = 0;
// let temp = n;
// for (let i = 1; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(temp < sum ? "Abundant Number" : "Not a Abundant Number");

// Question 24: Check if a number is an automorphic number.
// let n = 25;
// let sq = n * n;
// let temp = n;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(
//   sq % Math.pow(10, count) === temp
//     ? "Automorphic Number"
//     : "Not a Automorphic Number"
// );

// Question 25: Check if a given number is a perfect square.
// let n = 49;
// console.log(
//   Number.isInteger(Math.sqrt(n)) ? "Perfect Square " : "Not a Perfect Square"
// );

// Question 26: Find all prime factors of a given number.
// let n = 12;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//   while (n % i === 0) {
//     console.log(i);
//     n /= i;
//   }
// }
// if (n > 1) {
//   console.log(n);
// }

// Question 27: Check if two numbers are friendly pairs.
// let n1 = 6;
// let n2 = 28;
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 1; i < n1; i++) {
//   if (n1 % i === 0) {
//     sum1 += i;
//   }
// }
// for (let i = 1; i < n2; i++) {
//   if (n2 % i === 0) {
//     sum2 += i;
//   }
// }
// console.log(
//   sum1 === n1 && sum2 === n2 ? "Friendly Pair" : "Not a Friendly Pair"
// );

// ---------------------------------------Topic-2---------------------------------------

// let a = 12;
// let b = 20;
// let num1 = a;
// let num2 = b;
// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// let GCD = a;
// console.log(GCD);
// let LCM = (num1 * num2) / a;
// console.log(LCM);

// let a = 1 / 2;
// let b = 3 / 2;
// let c = a + b;
// console.log(parseFloat(c));

// function reverseNumber(n) {
//   let rev = 0;
//   while (n != 0) {
//     let lastDigit = n % 10;
//     if (lastDigit === 0) {
//       lastDigit = 1;
//     }
//     rev = rev * 10 + lastDigit;
//     n = Math.floor(n / 10);
//   }
//   return rev;
// }
// let n = 706120678;
// let n1 = reverseNumber(n);
// console.log(reverseNumber(n1));

// let r = 5;
// let area = Math.PI * r * r;
// console.log(Math.floor(area));

function primeNumber(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (n / i != i) {
        count++;
      }
    }
  }
  return count === 2;
}

let start = 1;
let end = 100;
for (let i = start; i <= end; i++) {
  if (primeNumber(i)) {
    console.log(i);
  }
}
