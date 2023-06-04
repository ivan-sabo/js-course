'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance); // 3840

const max = movements.reduce((acc, curr) => {
    if (acc > curr) {
        return acc;
    }
    return curr;
}, movements.at(0));

console.log(max);
