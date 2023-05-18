'use strict';

const restaurant = {
	openingHours: {
		mon: {
			open: 10,
			close: 0,
		},
		tue: {
			open: 9,
			close: 19,
		},
	},

	open(day, hour) {
		if (
			this.openingHours[day]?.open < hour &&
			this.openingHours[day]?.close > hour
		) {
			return true;
		}

		return false;
	},
};

// optional chaining
console.log(restaurant.openingHours.wen?.open);

const close = restaurant.openingHours.mon?.close ?? 'unknown';
console.log(close);

// Methods
console.log(restaurant.order?.(0, 2) ?? 'Method does not exist');
console.log(restaurant.open?.('tue', 11) ?? 'Method does not exist');
console.log(restaurant.open?.('mon', 11) ?? 'Method does not exist');
