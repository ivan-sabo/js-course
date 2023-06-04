'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// doesn't mutate the original array
console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
console.log(arr.slice(-1)); // [ 'e' ]
console.log(arr.slice(1, -2)); // [ 'b', 'c' ]

// SPLICE
// mutates the original array
// extracts the part of array, and returns it
console.log(arr.splice(2)); // [ 'c', 'd', 'e' ]
console.log(arr); // [ 'a', 'b' ]
console.log(arr.splice(-1)); // [ 'b' ]
console.log(arr); // [ 'a' ]

// second argument is a counter (number of elements)
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(1, 2)); // [ 'b', 'c' ]
console.log(arr); // [ 'a', 'd', 'e' ]

// REVERSE
// mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // [ 'f', 'g', 'h', 'i', 'j' ]
console.log(arr2); // [ 'f', 'g', 'h', 'i', 'j' ]

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]

// JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
