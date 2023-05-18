'use strict';

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy').set(true, 'We are open :D');

console.log(rest.set(2, 'Lisbon, Portugal'));
console.log(rest.get(true));
console.log(rest.has(1));

rest.delete(1);
console.log(rest);

rest.clear();
console.log(rest);
