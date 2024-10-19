// function to add two numbers
export function add(a, b) {
    return a + b;
}

// function to subtract two numbers
export function subtract(a, b) {
    return a - b;
}

// function to multiple two numbers
export default function multiply(a, b) {
    return a * b;
}

import { toUpperCase } from './stringModule.js';
 
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}