//for loop

/*
structure

for (let index = 0; index <= 10; index++) {
    console.log(`repetiton :${index}`);
}
*/

/*
//looping arrays

const friends = ['steve', 'mike', 'jay', 'alice', 'greta'];

const kadir = {
    fullName: 'kadir',
    age: 27,
    job: 'student'
}

for (let index = 0; index < friends.length; index++) {

    console.log(`element ${index + 1} is : ${friends[index]}`);

}

//foreach
for (const key in kadir) {
    console.log(`${key}: ${kadir[key]}`);
}

*/


/*

//continue and break

for (let index = 0; index <= 20; index++) {


    if (index % 2 === 1) {
        continue;
    } else {
        console.log(index);
    }

}

for (let index = 0; index <= 20; index++) {


    if (index === 10) {
        break;
    } else {
        console.log(index);
    }

}
*/



/*
//looping backwards
for (let index = 10; index > 0; index--) {
    console.log(index);

}

//loops ins loops
for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {

        console.log(`${i} * ${j} = ${i * j}`);
    }
}



//while loop
let index = 0;
while (index <= 10) {
    console.log(index);
    index++;
}
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
   
   
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
   
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
   
  console.log(bills, tips, totals);
  






