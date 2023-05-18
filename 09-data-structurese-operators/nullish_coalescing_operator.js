'use strict';

const restaurant = {
	numGuest: 0,
};

// returns 10 only if numGuest is null or undefined
// Nullish: null and undefined
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
