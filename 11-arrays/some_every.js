'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// SOME
// check of existance of an element with specific condition
console.log(movements.some((mov) => mov > 0));

// EVERY
// tests if every element in an array satisfies specific condition
console.log(movements.every((mov) => mov > -100));
