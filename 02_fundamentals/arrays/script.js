'use strict'
/*const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = "peter";

//creation 1
const friends = ['michael', 'steven', 'peter'];
console.log(friends);

//creation 2
const years = new Array(1991, 1984, 2008, 2024);

//index
console.log(friends[0]);
console.log(friends[2]);

//number of elements
console.log(friends.length);
console.log(friends[friends.length - 1]);


//replace 1 : only primitive types are immutable, we can change an array
friends[2] = 'jay'
console.log(friends);

//we can't do this
//friends = ['bob', 'alice'];

//mixed array
const kadir = ['kadir', 'çalı', 27, true, 12.2, friends];
console.log(kadir);

*/

//basic array operations(methods)
const friends = ['michael', 'steven', 'peter'];

//push:adds element to the end of an array
const newlength = friends.push('Jay'); //returns the new length of the array
console.log(friends);
console.log(newlength);

//add elements to the beginnig

friends.unshift('John'); //returns the new length
console.log(friends);


//remove 
const popped = friends.pop(); //removes the last element
console.log(friends); //returns the removed element


//removes the first element
friends.shift();
console.log(friends);


//indexof 
console.log(friends.indexOf('steven'));

//includes
console.log(friends.includes('steven')); // true