'use strict';

// falsy values:
// null, undefined, false, NaN, 0, -0, 0n, ""

// Use ANY data type, return ANY data type
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' is the first thruty value
console.log(NaN || 0 || null); // if all values are falsy than returns the last value (null)

console.log('dog' && 99 && true && 'something'); // if all values are truty than returns the last value (something)
console.log('cat' && false && NaN); // if there is a falsy value, returns the first one (false)
