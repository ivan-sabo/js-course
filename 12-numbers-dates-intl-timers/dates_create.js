'use strict';

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('2023-06-08T18:17:00.442Z')); // 2023-06-08T18:17:00.442Z

// Careful with this!!
console.log(new Date('December 25, 2015')); // 2015-12-24T23:00:00.000Z

// Months in JS begin from 0 :S
console.log(new Date(2037, 10, 19, 15, 23, 5)); // 2037-11-19T14:23:05.000Z

// Milliseconds passed since UNIX time
console.log('UNIX');
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 1970-01-04T00:00:00.000Z

// Working with dates
console.log('Working with dates');
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.toISOString());
console.log(future.getTime());
