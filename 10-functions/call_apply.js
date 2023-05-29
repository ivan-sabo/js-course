'use strict';

const lufthansa = {
	airline: 'Luthansa',
	iataCode: 'LH',
	bookings: [],
	book(flightNum, name) {
		console.log(
			`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, 'Jonas Schmedtmann');
console.log(lufthansa);

const eurowings = {
	name: 'Eurowings',
	iataCode: 'EW',
	bookings: [],
};

const book = lufthansa.book;

// Call method
// Calls a method with "this" keyword set to an object
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// Apply method - not used that much in the modern JS
// Second argument of apply is an array
const flightData = [444, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);
