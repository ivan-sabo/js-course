'use strict';

const flight = 'LH234';
const jonas = {
	name: 'Jonas Schmedtmann',
	passport: 4422345,
};

const checkIn = function (flightNum, passenger) {
	flightNum = 'LH999';
	passenger.name = 'Mr. ' + passenger.name;

	if (passenger.passport === 4422345) {
		console.log('Check in');
	} else {
		console.log('Wrong passport!');
	}
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassword = function (person) {
	person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassword(jonas);
checkIn(flight, jonas);
