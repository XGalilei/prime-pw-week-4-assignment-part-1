console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`helloName - ${helloName("Ian")}`);

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log("addNumbers 20 and 21 - ", addNumbers(20, 21));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber * secondNumber * thirdNumber;
}
console.log("multiplyThree 2 3 and 4 -", multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if(!Array.isArray(array)) { //better safe than sorry
    return undefined;
  }
  else if(array.length === 0) {
    return undefined;
  }
  else { //Should I pop the last item or simply return the last item? Both are included for safety
    return array[array.length - 1];
  }
  //else {
  //  return array.pop();
  //}
}
console.log("getLast - should be undefined", getLast("apple"));
let arr1 = [];
let arr2 = [1, 2, 3, 4, 5, 6];
console.log("getLast - should be undefined", getLast(arr1));
console.log("getLast = should be 6", getLast(arr2));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for(val of array) {
    if(value === val) {
      return true;
    }
  }
  return false;
}
let arr3 = [1, 4, 9, 16, 25, 36];
console.log("find - should be false", find(2, arr3));
console.log('find - should be true', find(9, arr3));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return (string.charAt(0) === letter);
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  for(i in array) { //logic failed with a for of loop, curious as to why
    sum += array[i];
  }

  return sum;
}
console.log('sumAll - should return 6', sumAll([1, 2, 3]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function sumPositive(array) {
  let array2 = [];
  for(val of array) {
    if(val > 0) {
      array2.push(val);
    }
  }
  return array2;
}
let arr4 = [0, -1, -3, -6];
let arr5 = [1, -2, 3, -4, 5, -6];
console.log("sumPositive - should return empty array", sumPositive(arr4), arr4); //include array in console to ensure no changes made to base array
console.log("sumPositive - should return [1, 3, 5]", sumPositive(arr5), arr5);


// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
function triangularNumber(num) {
  //https://edabit.com/challenge/RMZiERz2cbjmbXruY
  
  //If you had an equilateral triangle composed of dots, and each side of the triangle
  //is n dots long, then the triangular number would represent the total number of dots
  //in the triangle.

  //I'm familiar with the sequence: the formula to determine the triangularNumber is
  // (n * (n + 1)) / 2, so the implementation is quite simple.
  return (num * (num + 1)) / 2;
}
console.log('triangularNumber - should return 55', triangularNumber(10));
