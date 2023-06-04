'use strict';

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (v, i) {
    console.log(`${i}: ${v}`);
});

// Key is the same as the Value
// Set does not have keys, so key and the Value are same
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (v, i) {
    console.log(`${i}: ${v}`);
});

// _ is a throw-away variable
console.log('-------------');
currenciesUnique.forEach(function (v, _) {
    console.log(`${v}: ${v}`);
});
