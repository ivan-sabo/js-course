'use strict';

console.log([1, 2, 3, 4, 5, 6, 7]); // [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// ATTENTION: wierd behaviour!
const x = new Array(7); // creates an array of 7 empty elements!
console.log(x); // [ <7 empty items> ]

// Doesn't work
console.log(x.map(() => 5)); // [ <7 empty items> ]

// Mutates the underlying array, fill all elements with value
console.log(x.fill(1)); // [ 1, 1, 1, 1, 1, 1, 1 ]
console.log(x.fill(2)); // [ 2, 2, 2, 2, 2, 2, 2 ]

console.log(x.fill(1, 3, 5)); // [ 2, 2, 2, 1, 1, 2, 2 ]
console.log(x.fill(3, 4)); // [ 2, 2, 2, 1, 1, 2, 2 ]
console.log(x.fill(3, 4)); // [ 2, 2, 2, 1, 3, 3, 3 ]

// ARRAY.FROM
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [ 1, 1, 1, 1, 1, 1, 1 ]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]
