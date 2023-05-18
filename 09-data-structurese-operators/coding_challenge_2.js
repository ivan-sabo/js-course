'use strict';

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Wigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Now 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// Print scoreres
for (const [no, name] of game.scored.entries()) {
	console.log(`Goal ${no + 1}: ${name}`);
}

// Print average odd
let sum = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
	sum += odd;
}
console.log(`Average odd is ${sum / odds.length}`);

// Print odds
for (const [t, odd] of Object.entries(game.odds)) {
	// This can be written more readable :P
	console.log(`Odd of ${game[t] ? `victory ${game[t]}` : `draw`}: ${odd}`);
}

// Print scorers and scored goals
const scorers = {};
for (const name of Object.values(game.scored)) {
	scorers[name] ? scorers[name]++ : (scorers[name] = 1);
}
console.log(scorers);
