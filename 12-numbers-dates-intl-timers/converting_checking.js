'use strict';

// In JS all numbers are internally represented as
// floating point numbers (64 base-2 format => binary
// format)

console.log(23 === 23.0); // true

// Problem with fractions representation
//
// It's hard for JS to do high-precision scientific
// calculations
console.log(0.1 + 0.2); // 0.30000000000000004

// Conversion
console.log(Number('23')); // 23
console.log(+'23'); // 23

// Parsing
// Needs to start with a number
console.log(Number.parseInt('30px')); // 30

console.log(Number.parseFloat('2.5rem')); //  2.5

// isNaN
// Check if value is LITTERALLY NaN
console.log('isNaN');
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(Number.isNaN(23 / 0)); // false

// isFinite
// Better way of checking if the value is number
console.log('isFinite');
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger
console.log('isInteger');
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false
