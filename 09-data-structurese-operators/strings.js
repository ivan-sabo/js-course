'use strict';

// Strings are immutable primitives
//
// When a method is called on a string, JS automatically converts the string
// (behind the scenes) to a string object with the same content.
// This conversion is called BOXING.
// When the operation is done, the object is converted back to string primitive.
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane.length); // 4

// .indexOf
// .lastIndexOf
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8

// .slice
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(0, airline.indexOf(' '))); // TAP

// Negative starts counting from the end
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portugal

// Example
const checkMiddleSeat = function (seat) {
	// B and E are middle seats
	const s = seat.slice(-1);
	if (s === 'B' || s === 'E') {
		console.log('You got the middle seat');
		return;
	}

	console.log('You got lucky!');
};

checkMiddleSeat('11B'); // You got the middle seat
checkMiddleSeat('23C'); // You got lucky!
checkMiddleSeat('3E'); // You got the middle seat

// .toLowerCase
// .toUpperCase
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
	passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

// .trim
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // hello@jonas.io

// .replace
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceUS);

// Regular expression
const announcement =
	'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// Booleans check
// .includes
const plane2 = 'A320neo';
console.log(plane2.includes('A320')); // true

// .startsWith
console.log(plane2.startsWith('A3')); // true

// .endsWith
console.log(plane2.endsWith('neo')); // true
