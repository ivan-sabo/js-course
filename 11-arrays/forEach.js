'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
        continue;
    }

    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}

console.log('-------------');

// FOREACH
movements.forEach(function (movement, i) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
        return;
    }

    console.log(`Movement ${i + 1}: You deposited ${movement}`);
});
