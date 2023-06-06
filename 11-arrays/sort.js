'use strict';

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Doesn't work correctly, treats elements as strings!
console.log(movements.sort());

// Works for numbers
console.log(movements.sort((a, b) => a - b));
