'use strict';

const secureBooking = function () {
	let passengerCount = 0;

	return function () {
		passengerCount++;
		console.log(`${passengerCount} passengers`);
	};
};

const booker = secureBooking();
booker();
booker();

const booker2 = secureBooking();
booker2();
booker();
