'use strict';

// Every function in JS has property called 'prototype'

// Every object that is created by a certain constructor function will get access
// to all methods and properties that we define on the constructors prototype property

const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	console.log(2037 - this.birthYear);
};
console.log(Person.prototype);

const jonas = new Person('jonas', 1991);
jonas.calcAge();

console.log(jonas.__proto__);
// Person.prototype is not a prototype of Person, but instead it's what's be used
// as prototype of all the objects created with Person constructor function
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, jonas.__proto__);
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false
