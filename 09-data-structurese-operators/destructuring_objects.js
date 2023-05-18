'use strict';

const restaurant = {
	name: 'Classico Italiano',
	starterMenu: ['Foccacia', 'Bruschetta'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	openingHours: {
		thu: {
			open: 10,
			close: 20,
		},
		fri: {
			open: 12,
			close: 22,
		},
		sat: {
			open: 12,
			close: 20,
		},
	},
};

const { name, mainMenu } = restaurant;
console.log(name, mainMenu);

// Assign new variable name
const { name: restaurantName, mainMenu: theMenu } = restaurant;
console.log(restaurantName, theMenu);

// Default values
const { name: theName, nonExistingProperty: defaultValue = 'default' } =
	restaurant;
console.log(theName, defaultValue);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // Has to be wrapped with () because JS interprets {} as a code block, and not a destructuring syntax
console.log(a, b);

// Nested objects
const {
	openingHours: {
		fri: { open, close },
	},
} = restaurant;
console.log(open, close);

const {
	openingHours: {
		fri: { open: o, close: c },
	},
} = restaurant;
console.log(o, c);
