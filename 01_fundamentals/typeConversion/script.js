/*

//type conversion
//string to number
const imputYear = '1997';
const numberYear = Number(imputYear);
console.log(typeof numberYear)


//number to string
let stringYear = String(numberYear);
console.log(typeof stringYear);
*/



/*

//coercion
let num1 = 12; // number
let str = "43"; // string
let result = num1 + str; // 12 + "43"
console.log(result); // "1243" (string)
console.log(typeof ('23' - '10' - 3))  //10
console.log('23' * 2)
console.log('23' / 2)
*/



//truthy and falsy values

//5 falsy values : 0, '',undefined, null ,Nan
const a = 0;
const b = '';
let c;
const d = null;
const e = NaN;
console.log(Boolean(a), Boolean(b), Boolean(c), Boolean(d), Boolean(e))


//it is a bug 
let height = 0;
if (height) {
    console.log("height is defined")
} else {
    console.log("height is undefined")
}