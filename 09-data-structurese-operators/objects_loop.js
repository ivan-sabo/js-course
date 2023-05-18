'use strict';

const restaurant = {
	name: 'Classico Italiano',
	starterMenu: ['Foccacia', 'Bruschetta'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
};

for (const prop of Object.keys(restaurant)) {
	console.log(prop);
}

const properties = Object.keys(restaurant);
console.log(properties);

const values = Object.values(restaurant);
console.log(values);

const entries = Object.entries(restaurant);
console.log(entries);
