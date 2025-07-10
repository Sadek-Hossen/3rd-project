// JavaScript Basic Problem Solving 
// Submit your assignment by answering the question in your VS code upload the code to your GitHub, then give the link on time. Copying code from AI is strictly prohibited. You will get a zero (0) mark in the assignment if we get any AI-generated code.

const { split } = require("postcss/lib/list");
const { Connect } = require("vite");

//01- Write a function to convert Celsius to Fahrenheit. The function should take a single argument, which is the temperature in Celsius.
function celsiusToFahrenheit(celsius) {
  return (celsius*5/9)+32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(25)); // 77


// 02-Write a function to check if a number is even. The function should take a single argument, which is the number to check.
function isEven(num) {
  return num % 2==0 ;
}


console.log(isEven(4)); // true
console.log(isEven(7)); // false


// ​
// // 03-Write a function to sum two numbers. The function should take two arguments, which are the numbers to sum.
function sum(a, b) {
  return a+b;
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 20)); // 30


// 04-Write a function to find the smallest number in an array. The function should take a single argument, which is the array to search.
function findSmallestNum(arr) {
  return Math.min(...arr)
}

console.log(findSmallestNum([3, 5, 1, 9])); // 1
console.log(findSmallestNum([-1, -5, 0, 10])); // -5


// ​
// //05-Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.


function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return vowels.search("o");
}


console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3
 


// // ​
//06-Write a function to get the first element of an array. The function should take a single argument, which is the array.

function getFirstElement(arr) {

  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"

// ​
// 07-Write a function to check if an array is empty. The function should take a single argument, which is the array.
function isArrayEmpty(arr) {

  if (arr.length  === 0){
    return true
  }
  else{
    return false
  }

}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false

// ​
// // 08-Write a function to return the factorial of a number. The function should take a single argument, which is the number.

function factorialize(num) {
  // if (num === 0 || num === 1) return 1;
  // return num * factorialize(num - 1);
}

console.log(factorialize(5)); // 120
console.log(factorialize(7)); // 5040

// ​
// 09-Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str) {
let store = str.split("")
store.reverse()
return store

}


console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

function toLowerCase(str) {
 const forCase = str.toLowerCase();
 return forCase
}

console.log(toLowerCase("HELLO WORLD")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"

// ​
// // 11-write a function to find the length of a string. The function should take a single argument, which is the string.
function stringLength(str) {
  let forlanth = str.length;
  return forlanth
  l
}

console.log(stringLength("hello")); // 5
console.log(stringLength("world")); // 5

// ​
//  // 12-Write a function to merge two arrays. The function should take two arguments, which are the arrays to merge.


function mergeArrays(arr1, arr2) {
  let myArr =arr1.concat(arr2)
  return myArr;
}


console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]

// ​
// // 13- Write a function to get the last element of an array. The function should take a single argument, which is the array.
function getLastElement(arr) {
 let myArr = arr[arr.length-1];
 return myArr

}

console.log(getLastElement([1, 2, 3])); // 3
console.log(getLastElement(["a", "b", "c"])); // "c"

// ​
//  // 14-Write a function to get the first character of a string. The function should take a single argument, which is the string.
function getFirstCharacter(str) {


return str[0]; 
}

console.log(getFirstCharacter("hello")); // "h"
console.log(getFirstCharacter("world")); // "w"

// ​
// // 15- Write a function to find the sum of all elements in an array. The function should take a single argument, which is the array.
function sumArray(arr) {
 let sum = 0
 for(i = 0 ; i < arr.length; i++){
  sum += arr[i]
 }
 return sum
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([-1, -2, -3, -4])); // -10
console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
