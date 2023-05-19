'use strict';

// .split
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
	const names = name.split(' ');
	const namesUpper = [];

	for (const n of names) {
		namesUpper.push(n[0].toUpperCase() + n.slice(1));
	}

	console.log(namesUpper.join(' '));
};
const passenger = 'jessica ann smith davis';
capitalizeName(passenger);

// .padStart
// .padEnd
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));

// Example
const maskCreditCard = function (number) {
	const str = number + '';
	const last = str.slice(-4);

	return last.padStart(str.length, '*');
};
console.log(maskCreditCard(1324123435344948));

// .repeat
const message2 = 'Bad weater... All Departues Delayed...';
console.log(message2.repeat(4));
