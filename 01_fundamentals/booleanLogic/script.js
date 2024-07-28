const hasDriversLicense = true // A
const hasGoodVision = true // B 
const age = 16;


console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense && hasGoodVision && age >= 18); // false 
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense);


const shouldDirve = hasDriversLicense && hasGoodVision;
console.log(shouldDirve);



const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins > scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}


