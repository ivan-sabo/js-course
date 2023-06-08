'use strict';

// Squere root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

// Max
console.log('Max');
console.log(Math.max(5, 28, 23, 11, 2)); // 28
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// Min
console.log('Min');
console.log(Math.min(5, 18, 23, 11, 2)); // 2

// PI
console.log('PI');
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// Random
console.log('Random');
console.log(Math.trunc(Math.random() * 6) + 1);

// Rounding integers
console.log('Trunc');
console.log(Math.trunc(23.3)); // 23

console.log('Round');
console.log(Math.round(23.3)); // 23

console.log('Ceil');
console.log(Math.ceil(23.3)); // 24

console.log('Floor');
console.log(Math.floor(23.3)); // 23

// Rounding decimals
// toFixed - returnes string
console.log((2.7).toFixed(0)); // '3'
console.log((2.7).toFixed(3)); // '2.700'
console.log((2.345).toFixed(2)); // '2.35'
