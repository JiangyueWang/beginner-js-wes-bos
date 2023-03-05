// Functions are first class citizens
// js functions are values themselves, they can store in variables and can be passed into other functions

// function definition
// function defined with function keywords are hoisted
// it means that js takes all functions and hoist them up
// it gives the ability to use the function before it defines
// function doctorise(firsrName) {
//     return `Dr.${firstName}`;
// }

// anonymous function, function without a name
// function (firsrName) {
//     return `Dr.${firstName}`;
// }

// function expression
// stores a function as a value in a variable
// store an anon function into a variable called doctorise
// function defined with variables do not hoist
// const doctorise = function (firsrName) {
//     return `Dr.${firstName}`;
// }
    

// arrow functions 
// they dont have their own scope in referred to 'this' keyword
// arrow functions are anon functions, always put arrow functions into variables
const inchToCm = inches => inches * 2.54;


// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }
// this add arrow function performs the same as the function above
const add = (a, b = 3) => a + b;

// returning an object
function babyNamefn(first, last) {
    const baby = {
        name: `${first} ${last}`,
        age: 0
    };
    return baby;
}

// const babyNameArrowFn = (first, last) => ({name: `${first} ${last}`, age: 0})


// IIFE
// immediately invoked function expression
// (function(age) {
//     console.log(`immediately invoked function expression`)
//     return `you are cool and age is ${age}`;
// })(10);

// methods are functions live in an object
// console.log(), log is the function lives inside the console object
const person =  {
    name: `name one`,
    // method
    sayHi: function () {
        // this in here refers to the object
        console.log(`Hi ${this.name}`);
        console.log(`Hi`);
    },
    // short hand method
    yellHI() {
        console.log(`Hi ${this.name}`);
        console.log(`HIIII`);
    },
    // arrow function
    wisperHi: () => {
        // this keyword is now working in here
        console.log(`hii`);
    }
}


// callback function
// a function gets to passed into another function and then it is called by the browser at a later
// click callback
const button = document.querySelector('.clickMe');
function handleButtonClick() {
    console.log('button has clicked');
}
// button.addEventListener('click', handleButtonClick);
// passing anon function 
button.addEventListener('click', function() {
    console.log('button has clicked');
})