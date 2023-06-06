'use strict';

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Calculate optimal food weight
dogs.forEach((dog) => {
    dog.recommendedFood = Math.trunc(Math.pow(dog.weight, 0.75) * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and check if he eats too much or too litle
const sarahsDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(sarahsDog);

const calculateRatio = (curr, recommended) => curr / recommended;

const tooMuch = -1;
const tooLittle = 1;
const justEnough = 0;
const opinion = (ratio) => {
    switch (true) {
        case ratio > 1.1:
            return tooMuch;
        case ratio < 0.9:
            return tooLittle;
        default:
            return justEnough;
    }
};
const opinionText = (marker) => {
    let opinionMarker;
    switch (marker) {
        case tooMuch:
            opinionMarker = 'too much!';
            break;
        case tooLittle:
            opinionMarker = 'too little..';
            break;
        default:
            opinionMarker = 'just enough.';
            break;
    }
    return `Sarah's dog eats ${opinionMarker}`;
};

const SarahsDogOpinion = opinion(
    calculateRatio(sarahsDog.curFood, sarahsDog.recommendedFood)
);
console.log(opinionText(SarahsDogOpinion));

// 3. An array of dogs who eat too much, and an array of dogs who eat too little
const ownersEatTooMuch = dogs.filter(
    (dog) =>
        opinion(calculateRatio(dog.curFood, dog.recommendedFood)) === tooMuch
);
const ownersEatTooLittle = dogs.filter(
    (dog) =>
        opinion(calculateRatio(dog.curFood, dog.recommendedFood)) === tooLittle
);

// 4. Log a string to the console for arrays created
// in 3. like this: "Sarah and John and Michael dogs
// eat too little!"
ownersEatTooMuch.forEach((dog) => {
    console.log(`${dog.owners.join(' and ')} dogs eat too much!`);
});

ownersEatTooLittle.forEach((dog) => {
    console.log(`${dog.owners.join(' and ')} dogs eat too little..`);
});

// 5. Log to the console wheather tere is any dog eating
// EXACTLY the amount of food that is recommended
const exactlyRecommandedExists = dogs.some(
    (dog) => dog.curFood === dog.recommendedFood
);
console.log(exactlyRecommandedExists);

// 6. Log to the console wheather there is any dog eating
// an OKAY amount of food
const balancedExists = dogs.some(
    (dog) =>
        opinion(calculateRatio(dog.curFood, dog.recommendedFood)) === justEnough
);
console.log(balancedExists);

// 7. Create an array containing the dogs that are eating
// an OKAY amount of food
const dogsEatEnough = dogs.filter(
    (dog) =>
        opinion(calculateRatio(dog.curFood, dog.recommendedFood)) === justEnough
);
console.log(dogsEatEnough);

// 8. Create a shallow copy of the dogs array and sort it
// by recommended food portion in an ascending order
const dogsCopy = [...dogs];
dogsCopy.sort((dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood);
console.log(dogsCopy);
