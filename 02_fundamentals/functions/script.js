'use strict'

/*
//functions
//a function is simply a piece of code that we can reuse over and over again

function logger() {
    console.log("my name is xyz");
}
//calling,running,invoking
logger();
logger();

//past data
function sum(a, b) {
    console.log(a + b);
}
sum(3, 5);

//return data
function fruitProcess(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const juice = fruitProcess(3, 2);
console.log(juice);
*/


/*
//function declarations and expressions

//declaration : Can be called before definition
console.log(calcAge1(1997));
function calcAge1(birthYear) {

    return 2024 - birthYear;
}


//expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age2);
*/



/*
//arrow functions :a function that is easier and faster to write.
for now just use for one line functions

const calcAge3 = birthYear => 2024 - birthYear;
console.log(calcAge3(1997));

const sqr = number => number * number;
console.log(sqr(3));

//more lines
//multiple parameter
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1997, 'kadir'));
*/


/*
//function calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcess(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcess(3, 5));

*/

const calcAverage = (p1, p2, p3) => (p1 + p2 + p3) / 3;

const scoreDolpinhs = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(85, 54, 41);



function checkWinner(avgDolpings, avgKoalas) {
    if (avgDolpings > avgKoalas) {
        console.log(`Dolpinhs win (${avgDolpings} vs ${avgKoalas})`);
    } else if (avgKoalas > avgDolpings) {
        console.log(`Koalas win (${avgDolpings} vs ${avgKoalas})`);
    } else {
        console.log("No team wins");
    }
}


checkWinner(scoreDolpinhs, scoreKoalas);