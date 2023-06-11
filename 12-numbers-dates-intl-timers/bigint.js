'use strict';

// Biggest regular integer
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// n transforms regular number to a big int number
console.log(234570789324578973498574n);

// It's not possible to combine big int with regular
// numbers without conversion
const huge = 234570789324578973498574n;
const num = 23;
// console.log(huge * num); // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(huge * BigInt(num)); // 5395128154465316390467202n

// Exception: comparison works
console.log(huge > num); // true
