'use strict';

const calcAverageHumanAge = (dogAges) =>
    dogAges
        .map((dogAge) => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
        .filter((humanAge) => humanAge >= 18)
        .reduce((agg, curr, _, arr) => agg + curr / arr.length, 0);

const dogAges = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(dogAges)); // 44
