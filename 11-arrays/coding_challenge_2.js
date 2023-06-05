'use strict';

const calcAverageHumanAge = function (dogAges) {
    const humanAges = dogAges.map((dogAge) =>
        dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
    );

    return (
        humanAges.reduce((agg, curr) => (curr >= 18 ? agg + curr : agg), 0) /
        humanAges.reduce((agg, curr) => (curr >= 18 ? agg + 1 : agg), 0)
    );
};

const dogAges = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(dogAges)); // 44
