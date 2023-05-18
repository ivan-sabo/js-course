'use strict';

function rest(...params) {
	return params;
}

console.log(rest(22, 33));

function spread(first, second, third = 1) {
	return first + second + third;
}

console.log(spread(...[4, 5, 0]));
