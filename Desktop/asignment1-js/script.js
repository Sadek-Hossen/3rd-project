
// Submit your assignment by answering the question in your VS code upload the code to your GitHub, then give the link on time. Copying code from AI is strictly prohibited. If we get any AI-generated code, you will get a zero (0) mark in the assignment.
//01- Create a variable called carName, assign the value Volvo to it.
// Create a variable called carName, assign the value Volvo to it.

  let carName = "Volvo";
  console.log(carName) 


// ​
// 02-On one single line, declare three variables with the following names and values:
// On one single line, declare three variables with the following names and values:

let = firstName = "John", lastName = "Doe", age = 35
console.log(firstName,lastName,age);


// So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

let FirstName = "John";  // write variable name
let LastName = "Doe" //write variable values 
let Age = 35 ; // write variable name and values both 

// ​
// 03-Use the correct assignment operator that will result in x being 50 (same as x = x * y).
// Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x = 5*10 // what will be the value of x ? 
console.log(x)
// ​
// -04-Use comments to describe the correct data type of the following variables:
// Use comments to describe the correct data type of the following variables:

let length = 16; // number type 
let lastName = "Johnson"; // string type 

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // object type/string type 




// 05-Execute the function named myFunction.
// Execute the function named myFunction.
 
 function myFunction() {
  alert("Hello World!");
}

// // call the function and see the output 
myFunction()​
//06- Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
// 1. Create an object called person with name = John, age = 50, Then,
//    access the object to alert("John is 50").

let person ={
  name:"John",
  age:50,

}
alert(person.name+" is " +person.age)

// ​
// 07-The <button> element should do something when someone clicks on it. Try to fix it!
// 1. The <button> element should do something when someone clicks on it. Try to fix it!

function myFunction() {
  alert("Button was clicked!");
}


// ​
//08- Array Related Question 
// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];

alert(cars.length);


// 2. Change the first item of Brand to "Ford".

	const Brand = ["Volvo", "Jeep", "Mercedes"]; 

Brand[0] = "Frod";


// ​
//09- Math Related Problems

// 1. Use the correct Math method to create a random number.
 let randNumbr = Math.random();
console.log(randNumbr);


// 2. Use the correct Math method to return the largest number of 10 and 20.
let lagNumbr = Math.max(10,20);
console.log(lagNumbr)

// 3. Use the correct Math method to get the square root of 9.

let squrRoot = Math.sqrt(9);
console.log(squrRoot)



// ​
//10- comparison operator related problems! 
// 1. Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

if (x > y) {
  alert(true); 
}





// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 17;

age < 18 ? alert("Too young") : alert("Old enough");
