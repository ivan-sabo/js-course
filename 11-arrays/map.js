'use strict';

const eurToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(function (mov) {
    return mov * eurToUSD;
});

console.log(movements);
console.log(movementsUSD);

const movementsDescriptions = movements.map((mov, i, arr) => {
    if (mov > 0) {
        return `Movement ${i + 1}: You deposited ${mov}`;
    }

    return `Movement ${i + 1}: You deposited ${mov}`;
});
console.log(movementsDescriptions);
