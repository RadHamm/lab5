// app.js
import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
 
addAndLogUpper(10, 20);  // Test the new function

 
// Call the functions and log results (your choice of arguments)
console.log('Add: ', add(5, 3));  // Test your add function
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log('multiply: ', multiply(4, 5)); // Test the default export
console.log('max: ', findMax([1, 2, 3, 4, 5])); // test findMax
console.log('reversed: ', reverseArray([1, 2, 3])); // Test reverseArray

const numbers = [1, 2, 3, 4, 5];
const multiplier = 10;
const result = toUpperCase(multiply(findMax(numbers), multiplier).toString());

console.log('Max from array: ', numbers) // Shows max # from array
console.log('multiplier: ', multiplier) // Shows the multiplier being applied
console.log('Converted to uppercase: ', result); // end-result is max # from array multiplied by multiplier given.