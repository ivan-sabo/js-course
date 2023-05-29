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

const book = lufthansa.book;

// Bind method
// Different from call() because it doesn't immediately call function
// Instead it returns a new method where "this" keyword is bound
const bookEW = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

// *** PARTIAL APPLICATION ***
const bookEW23 = book.bind(lufthansa, 23);
bookEW23(33, 'Jonas Schmedtmann');
