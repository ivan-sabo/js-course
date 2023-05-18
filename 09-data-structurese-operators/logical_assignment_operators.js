'use strict';

const rest1 = {
	name: 'Capri',
	numGuest: 20,
};

const rest2 = {
	name: 'La Piazza',
	owner: 'Giovanni Rossi',
	minGuest: 0,
};

// 0 is falsy!!
// rest1.numGuest = rest1.numGuest || 10
rest1.numGuest ||= 10;
// rest2.numGuest = rest2.numGuest || 10
rest2.numGuest ||= 10;

// nullish assignment operator (null or undefined)
rest1.minGuest ??= 5;
rest2.minGuest ??= 5;
