'use strict';

const arr = ['milan', 'real', 'barca', 'sarajevo', 'paok'];

for (const item of arr) console.log(item);

// .entries() returns an iterator
console.log(...arr.entries());

for (const [i, el] of arr.entries()) {
	console.log(`${i + 1}: ${el}`);
}
