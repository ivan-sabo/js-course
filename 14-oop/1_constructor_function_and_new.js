'use strict';

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;

	// Never create a method in a constructor function like this
	this.calcAge = function () {
		console.log(2037 - this.birthYear);
	};
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person { firstName: 'Jonas', birthYear: 1991 }

// 1. New {} is created (empty object)
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

console.log(jonas instanceof Person); // true
