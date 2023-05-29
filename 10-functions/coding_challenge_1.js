'use strict';

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

const poll = {
	question: 'What is your favourite programming language?',
	options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
	answers: new Array(4).fill(0),
	registerNewAnswer() {
		readline.question(
			`${this.question}\n${this.options.join(
				`\n`
			)}\n(Write option number):`,
			(answer) => {
				const num = Number(answer);
				readline.close();

				if (isNaN(num)) {
					console.log(`Not a number!`);
					return;
				}

				this.answers[num]++;
				poll.displayResults('string');
				poll.displayResults();
				return;
			}
		);
	},
	displayResults(type) {
		switch (type) {
			case 'string':
				console.log(`Results are ${this.answers.join(', ')}`);
				break;
			default:
				console.log(this.answers);
				break;
		}
	},
};

poll.registerNewAnswer();
