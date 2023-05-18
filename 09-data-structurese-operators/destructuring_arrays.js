'use strict';

const restaurant = {
    name: 'Classico Italiano',
    starterMenu: ['Foccacia', 'Bruschetta'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const [starter, main] = restaurant.order(1, 0);
console.log(starter, main)

// Destructing an array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

let [x, y, z] = arr;
console.log(x, y, z);

// Value switch
[x, y] = [y, x]
console.log(x, y)

// Nested array
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);