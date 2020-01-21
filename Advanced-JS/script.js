/******************
 * Constructor functions

// Object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Constructor function
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}
Person.prototype.lastName = 'Smith';

// New object using contructor
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// Inheritence in action
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
 */


 /********************
* Object.create function creation

 // Object method
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

// Object.create
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// Object.create using function constructor pattern
var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/


/******************
 * Primites Vs. Objects

// Primitives
var a = 23; 
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
 */


/*******************
 * Functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998]; // Array

function arrayCalc(arr, fn) { // Function in use
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
        // pushes result of fn and iteration of arr
        // fn is your callback function
    }
    return arrRes;
}

function calculateAge(el) { // Callback function
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge); // Sets array and function to be used (arr, fn)
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
 */


 /****************
  * Functions returning Functions

 function interviewQuestion(job) {
     if (job === 'designer') {
         return function(name) {
            console.log(name + ', can you please explain what UX design is?');
         }
     } else if (job === 'teacher') {
         return function(name) {
             console.log(name + ', what subject do you teach?');
         }
     } else {
         return function(name) {
             console.log('Hello ' + name + ', what do you do?');
         }
     }
 }

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
  */


/******************
* Immediately Invoked Function Expressions (IIFE)

function game() { // Normal function
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () { // IIFE
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) { // IIFE
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/ 


/*************************
* Closures


function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

//retirement(66)(1990);

// Closures example
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('designer')('John');
*/

/**************
 * Bind, Call, and Apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + '. I am ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m '  + this.name + ', I\'m a ' + this.job + ', and I am ' + this.age + ' years old.' + ' Have a nice ' + timeOfDay);
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon');
//john.presentation.apply(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('afternoon');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');
 */






