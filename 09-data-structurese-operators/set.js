'use strict';

const ordersSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza',
]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

ordersSet.delete('Risotto');
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

ordersSet.clear();
console.log(ordersSet);

// Get unique values from an array
const arr = ['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'];
const unique = new Set(arr);
console.log(unique);

// Convert it to an array
const uniqueArray = [...unique];
console.log(uniqueArray);
