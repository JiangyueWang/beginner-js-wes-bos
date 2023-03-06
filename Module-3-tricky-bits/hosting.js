// hoisting allows you to access functions and variables before they have been defined 
sayHi();

function sayHi() {
    console.log('hey!');
    console.log(add(10, 2));
}

function add(a, b) {
    return a + b;
}


// js will hoist the variable declaration, but not the actual value
console.log(age); // undefined
console.log(cool); // error

var age = 10;