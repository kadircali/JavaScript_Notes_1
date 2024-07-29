'use strict'
/*
//objects : key-value pairs , dynamic

const kadir = {

    firstName: 'kadir',
    lastName: 'cali',
    age: 27,
    job: 'student',
    friends: ['mike', 'peter', 'steven']

}


const list = {
    orange: 1,
    apple: 3,
    cherry: 5
}


const list2 = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday'
}

//dot vs. bracket notation
console.log(kadir.lastName);
console.log(kadir['lastName']);
console.log(list2[1]);

//add elements
kadir.location = 'Turkiye';
kadir['instagram'] = 'kadircali';

console.log(kadir['location']);
console.log(`kadir has ${kadir.friends.length} friends and his best friend is ${kadir.friends[0]}`);
*/



//object methods
const kadir = {

    firstName: 'kadir',
    lastName: 'cali',
    birthYear: 1997,
    hasDriverLicense: true,

    job: 'student',
    friends: ['mike', 'peter', 'steven'],


    // calcAge: function () {
    //     console.log(this);
    //     return 2024 - this.birthYear;
    //  }



    calcAge: function () {
        //age added
        console.log(this);
        this.age = 2024 - this.birthYear
        return this.age;

    },

    getSummary: function () {
        return `${this.firstName} is a ${this.job}`
    }
}

//console.log(kadir.calcAge(kadir.birthYear));
console.log(kadir.calcAge());
console.log(kadir.age);
console.log(kadir.getSummary());



const mark = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,


    calcBMI: function () {

        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'john Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {

        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }

}

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s ${mark.bmi}`)
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
}