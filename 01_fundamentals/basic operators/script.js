/*
console.log(3 + 5);
console.log(3 - 5);
console.log(3 * 5);
console.log(3 / 5);


let firstName = 'kadir';
let lastName = 'çalı';
console.log(firstName + lastName);


console.log(46 * 2, 46 / 2, 2 ** 3);
console.log(10 % 6);
console.log(typeof 3);


let x = 5;
x += 10;
console.log(x)

let y = 5;
y -= 3;
console.log(y);

let z = 5;
z *= 5;
console.log(z);

let f = 17;
f %= 2;
console.log(f);

let k = 15;
k /= 3;
console.log(k);

let a = 5;
a++;
console.log(a);



//comparison operators
console.log(3 < 5);
console.log(7 > 5);
console.log(3 <= 5);
console.log(10 >= 5);

*/
/*

== (Eşitlik operatörü): Bu operatör, iki değeri karşılaştırırken tür dönüşümü yapar. Yani, karşılaştırılan değerler
 farklı türdeyse, JavaScript bu değerleri karşılaştırmadan önce birini diğerine dönüştürür.

console.log(5 == 5); // true
console.log(5 == '5');
console.log(5 == 'kadir');


*/




/*
=== (Sıkı eşitlik operatörü): Bu operatör, iki değeri karşılaştırırken tür dönüşümü yapmaz. Değerlerin
 türleri ve değerleri aynı olmalıdır. Eğer türler farklıysa, false döner.
 console.log(5 === 5);
console.log(5 === '5');
console.log('kadir' == 'kadir');
console.log('kadir' === 'kadir');


console.log(4 != 5);
console.log(4 != 4);
console.log(4 !== 5);

console.log(4 < 5 && 3 > 2);
console.log(4 > 5 || 3 > 2);
console.log(!(4 < 5));
*/


//string

const firstName = 'kadir';
const job = "student";
const birthYear = 1997;

const kadir = "I'am " + firstName + " and I'am a " + job + " and I'm " + (2024 - birthYear) + " years old";
console.log(kadir)

//template literal : altgr + virgül
const kadir2 = `My name is ${firstName} I'm a ${job} and I'm ${2024 - birthYear} years old`;
console.log(kadir2)

console.log(`string
    mıltiple
    lines
    `)
