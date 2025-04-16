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

// let n = 145;
// let sum = 0;
// let copy = n;
// while (n != 0) {
//   let lastDigit = n % 10;
//   let fact = 1;
//   for (let i = 1; i <= lastDigit; i++) {
//     fact *= i;
//   }
//   sum += fact;
//   n = Math.floor(n / 10);
// }
// console.log(sum === copy ? "S" : "NS");

// let n = 25;
// let copy = n;
// let sq = n * n;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// let ans = sq % Math.pow(10, count);
// console.log(ans === copy ? "A" : "NA");

// let n = 12;
// let sum = 0;
// for (let i = 1; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(sum > n ? "A" : "NA");

// let n = 9;
// let copy = n;
// let sq = n * n;
// let sum = 0;
// while (sq != 0) {
//   let lastDigit = sq % 10;
//   sum += lastDigit;
//   sq = Math.floor(sq / 10);
// }
// console.log(sum === copy ? "N" : "NN");

// let n = 6758;
// while (n >= 10) {
//   let sum = 0;
//   while (n != 0) {
//     let lastDigit = n % 10;
//     sum += lastDigit;
//     n = Math.floor(n / 10);
//   }
//   n = sum;
// }
// console.log(n);

// let n = 6758;
// let digitalRoot = 1 + ((n - 1) % 9);
// console.log(digitalRoot);

// let arr = [1, 2, 3, 4, 5];

// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
//   j--;
// }
// console.log(arr);

// let arr = [1, 2, 1];
// let isPalindrome = true;
// for (let i = 0; i < Math.floor(arr.length - 1); i++) {
//   if (arr[i] != arr[arr.length - 1 - i]) {
//     isPalindrome = false;
//   }
// }
// console.log(isPalindrome ? "P" : "NP");

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let arr = [1, -23, 56, -29, 36, 9, -69];
// let positive = [];
// let negative = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) positive.push(arr[i]);
//   else negative.push(arr[i]);
// }
// console.log(positive, negative);

// let arr = [1, 2, 3, 4, 5];
// let k = 4;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === k) {
//     console.log(`found at index ${i}`);
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let k = 5;
// let left = 0;
// let right = arr.length;
// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   if (arr[mid] === k) {
//     console.log(`found at index ${mid}`);
//     break;
//   } else if (k > arr[mid]) left = mid + 1;
//   else right = mid - 1;
// }

// let arr = [1, 2, 3, 7, 4, 4];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let arr = [1, 2, 3, 7, 4, 4];
// let max = arr[0];
// let sMax = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log(max, sMax);

// let arr = [1, 2, 3, 7, 4, 4];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// let arr = [1, 2, 3, 7, 4, 4];
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

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = temp;
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let temp = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
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
// let k = 1;
// // Left rotation by k
// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
// reverse(arr, 0, arr.length - 1);
// console.log(arr);

// // right rotation by k
// reverse(arr, arr.length - k, arr.length - 1);
// reverse(arr, 0, arr.length - k - 1);
// reverse(arr, 0, arr.length - 1);
// console.log(arr);

// let arr = [1, 0, 0, 1, 1, 0];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// let n = 25;
// let copy = n;
// let sq = n * n;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// let ans = sq % Math.pow(10, count);
// console.log(ans === copy ? "A" : "NA");

// let arr = [1, 2, 1];

// let newArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
// }
// console.log(arr);

// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
//   j--;
// }
// console.log(arr);

// let isPalindrome = true;
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   if (arr[i] != arr[arr.length - 1 - i]) {
//     isPalindrome = false;
//   }
// }
// console.log(isPalindrome ? "P" : "NP");

// let arr = [2, -56, 34, 78, -3, 2, -3];
// let pos = [];
// let neg = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) pos.push(arr[i]);
//   else neg.push(arr[i]);
// }
// console.log(pos, neg);

// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] > 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// let arr = [1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// let arr = [1, 1, 1, 0, 1, 1, 1, 1];
// let count = 0;
// let ans = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 1) {
//     count++;
//   } else {
//     ans = Math.max(count, ans);
//     count = 0;
//   }
// }
// ans = Math.max(count, ans);
// console.log(ans);

// let arr = [1, 2, 3, 4, 5];
// let target = 4;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     console.log(`found at index ${i}`);
//   }
// }

// let left = 0;
// let right = arr.length - 1;
// while (left <= right) {
//   let mid = Math.floor((left + right) / 2);
//   if (arr[mid] === target) {
//     console.log(`found at index ${mid}`);
//     break;
//   } else if (target > arr[mid]) {
//     left = mid + 1;
//   } else {
//     right = mid - 1;
//   }
// }

// let arr = [3, 6, 2, 7, 12, 1];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
// console.log(arr);

// let arr = [3, 6, 2, 2, 7, 12, 12, 1, 1];
// let max = arr[0];
// let sMax = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log(max, sMax);

// let min = arr[0];
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
// let k = 2;
// k = k % arr.length;

// reverse(arr, 0, k - 1);
// reverse(arr, k, arr.length - 1);
// reverse(arr, 0, arr.length - 1);

// reverse(arr, arr.length - k, arr.length - 1);
// reverse(arr, 0, arr.length - k - 1);
// reverse(arr, 0, arr.length - 1);

// console.log(arr);

// let n = 25;
// let copy = n;
// let sq = n * n;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// let ans = sq % Math.pow(10, count);
// console.log(copy === ans ? "A" : "NA");

// let arr = [5, 3, 8, 23, 1, 2, 4];
// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - 1 - i; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }
// console.log(arr);

// let arr = [0, 5, 0, 0, 1, 2, 0];
// let i = 0;
// let j = 0;
// while (i < arr.length) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);

// let arr = [0, 0, 1, 1, 0, 1];
// let count = 0;
// let ans = 0;
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
// console.log(arr);

// reverse(arr, arr.length - k, arr.length - 1);
// reverse(arr, 0, arr.length - 1 - k);
// reverse(arr, 0, arr.length - 1);
// console.log(arr);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     let sub = arr.slice(i, j + 1);
//     console.log(sub);
//   }
// }

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxSum = arr[0];
// let startIdx = 0;
// let endIdx = 0;

// for (let i = 0; i < arr.length; i++) {
//   let curr = 0;
//   for (let j = i; j < arr.length; j++) {
//     curr += arr[j];
//     if (curr > maxSum) {
//       maxSum = curr;
//       startIdx = i;
//       endIdx = j;
//     }
//   }
// }
// console.log(maxSum);
// console.log(arr.slice(startIdx, endIdx + 1));

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxSum = arr[0];
// let curr = 0;
// let startIdx = 0;
// let endIdx = 0;
// for (let i = 0; i < arr.length; i++) {
//   curr += arr[i];
//   if (curr > maxSum) {
//     maxSum = curr;
//     endIdx = i;
//   }
//   if (curr < 0) {
//     curr = 0;
//     startIdx = i + 1;
//   }
// }
// console.log(maxSum);
// console.log(arr.slice(startIdx, endIdx + 1));

// let arr = [1, 2, 3, 4, 5];
// let k = 5;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   let curr = 0;
//   for (let j = i; j < arr.length; j++) {
//     curr += arr[j];
//     if (curr === k) {
//       count++;
//     }
//   }
// }
// console.log(count);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     process.stdout.write(`${arr[i][j]}`);
//   }
//   console.log();
// }

// let leftSum = 0;
// let rightSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     if (i === j) leftSum += arr[i][j];
//     if (i + j === arr.length - 1) rightSum += arr[i][j];
//   }
// }
// console.log(leftSum, rightSum);

// let arr = [0, 1, 1, 2, 2, 3, 3];
// let j = 1;
// for (let i = 0; i < arr.length - 1; i++) {
//   if (arr[i] != arr[i + 1]) {
//     arr[j] = arr[i + 1];
//     j++;
//   }
// }
// console.log(arr.slice(0, j));

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let newArr = Array.from({ length: arr[0].length }, () => Array(arr.length));
// for (let i = 0; i < newArr.length; i++) {
//   for (let j = 0; j < newArr[i].length; j++) {
//     newArr[i][j] = arr[j][i];
//   }
// }
// console.log(newArr);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr[i].length; j++) {
//     [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
//   }
// }
// console.log(arr);
