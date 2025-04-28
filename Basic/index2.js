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

// let n = 5;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i <= n; i++) {
//   for (let k = i; k < n; k++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write(" ");
//   }
//   for (let j = i; j < n; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i === j || i + j == n - 1) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < 2 * n - 1; j++) {
//     if (i == j || i + j == 2 * n - 2) {
//       process.stdout.write("*");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
//   newArr.push(arr[i]);
// }
// console.log(newArr);
// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
//   j--;
// }
// console.log(arr);

// let arr = [1, 2, 1];
// let isPali = true;
// for (let i = 0; i < Math.floor(Math.sqrt(n)); i++) {
//   if (arr[i] != arr[arr.length - 1 - i]) {
//     isPali = false;
//     break;
//   }
// }
// console.log(isPali);

// let arr = [4, 2, 3554, -21, 12, -2];
// let pos = [];
// let neg = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) pos.push(arr[i]);
//   else neg.push(arr[i]);
// }
// console.log(pos, neg);

// let arr = [3.6432, 23, 22, 61, 3, 61, 0];
// let max = 0;
// let sMax = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log(max, sMax);

// let arr = [3.6432, 23, 22, 61, 3, 61, 1, 1];
// let min = Infinity;
// let sMin = Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     sMin = min;
//     min = arr[i];
//   } else if (arr[i] < sMin && min != arr[i]) {
//     sMin = arr[i];
//   }
// }
// console.log(min, sMin);

// let arr = [3.6432, 23, 22, 61, 3, 61, 1, 1];
// let arr = [1, 2, 3, 4, 5];
// let isSorted = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     isSorted = false;
//     break;
//   }
// }
// console.log(isSorted);

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[arr.length - 1];
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);

// function reverse(arr, i, j) {
//   while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;
// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
// reverse(arr, 0, arr.length - 1);

// reverse(arr, k + 1, arr.length - 1);
// reverse(arr, 0, k);
// reverse(arr, 0, arr.length - 1);

// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
// }
// console.log(arr);
// let isPali = true;
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   if (arr[i] != arr[arr.length - 1 - i]) {
//     isPali = false;
//     break;
//   }
// }
// console.log(isPali);

// let arr = [1, 5, -2, 3, , 5, -21, -5, 1, -21];
// let pos = [];
// let neg = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     pos.push(arr[i]);
//   } else {
//     neg.push(arr[i]);
//   }
// }
// console.log(pos, neg);

// let max = -Infinity;
// let sMax = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log(max, sMax);
// let min = Infinity;
// let sMin = Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     sMin = min;
//     min = arr[i];
//   } else if (arr[i] < sMin && min != arr[i]) {
//     sMin = arr[i];
//   }
// }
// console.log(min, sMin);

// let arr = [1, 2, 3, 6, 5];
// let sorted = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     sorted = false;
//     break;
//   }
// }
// console.log(sorted);

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);
// let temp = arr[arr.length - 1];
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = temp;
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// k = k % arr.length;
// function reverse(arr, i, j) {
//   while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
//   }
// }
// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
// reverse(arr, 0, arr.length - 1);
// reverse(arr, k + 1, arr.length - 1);
// reverse(arr, 0, k);
// reverse(arr, 0, arr.length - 1);
// console.log(arr);

// let arr = [3, 2, 5, 0, 1, 2, 0];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] <= 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// let arr = [1, 5, -2, 3, 5, -21, -5, 1, -21];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] < 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// let arr = [1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1];
// let ans = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 1) {
//     count++;
//   } else {
//     ans = Math.max(ans, count);
//     count = 0;
//   }
// }
// ans = Math.max(ans, count);
// console.log(ans);

// let str = "level";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// for (let i = str.length - 1; i >= 0; i--) {
//   process.stdout.write(str[i]);
// }
// let isPali = true;
// for (let i = 0; i < Math.floor(str.length / 2); i++) {
//   if (str[i] != str[str.length - 1 - i]) {
//     isPali = false;
//     break;
//   }
// }
// console.log(isPali);
// for (let i = 0; i < str.length; i++) {
//   process.stdout.write(`${str[i]} `);
// }

// let str1 = "level";
// let str2 = "levelling";
// console.log(str1 === str2);
// for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
//   process.stdout.write(`${str1[i] || ""}${str2[i] || ""}`);
// }

// let str = "P r a n j a l";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] != " ") {
//     process.stdout.write(str[i]);
//   }
// }

// let str = "Pranjal123@gmail.com ";
// let alpha = 0;
// let num = 0;
// let spe = 0;
// for (let i = 0; i < str.length; i++) {
//   let ascii = str.charCodeAt(i);
//   if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
//     alpha++;
//   } else if (ascii >= 48 && ascii <= 57) {
//     num++;
//   } else {
//     spe++;
//   }
// }
// console.log(alpha, num, spe);
// let vowel = 0;
// let con = 0;
// let space = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] === "a" ||
//     str[i] === "e" ||
//     str[i] === "i" ||
//     str[i] === "o" ||
//     str[i] === "u"
//   ) {
//     vowel++;
//   } else if (str[i] === " ") {
//     space++;
//   } else {
//     con++;
//   }
// }
// console.log(vowel, space, con);

// let str = ["dte", "attitude", "attribute"];
// let prefix = "att";
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i].includes(prefix)) {
//     count++;
//   }
// }
// console.log(count);

// let str = "PranjalKuhikar";
// let ans = "";
// for (let i = 0; i < str.length; i++) {
//   let ascii = str.charCodeAt(i);
//   if (ascii >= 65 && ascii <= 90) {
//     ans += String.fromCharCode(ascii + 32);
//   } else if (ascii >= 97 && ascii <= 122) {
//     ans += String.fromCharCode(ascii - 32);
//   }
// }
// console.log(ans);

// let str = "hello world";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
