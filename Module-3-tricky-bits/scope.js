// scope answers the question about where are my variables and functions available to me

/** global variable */
// global variables: variables are available anywhere in the application
// anything is defined to global, it attaches to the window object, including functions, except const and let
// const globalVariable = 'global';


// var variables are attached to the window object
// var age = 100; // in the console, if you enter windown.age, it will return 100

// let, const doesnt attache to the window object
// let first = 'jyp'; // in the console, if you enter window.first, will return undefined


/**function scope */
// const age = 100;

// function go() {
//     // function scope
//     // when variables declared inside of a function, those variables are only available inside the function
//     const hair = 'black';
//     console.log(hair);
    
//     // console.log(age);//100, as age is not defined inside then go function, it will go up one level up to find it

//     // declare a shadow variable, it has been overwritten 
//     const age = 500;// not good practice
//     console.log(age);//500

// }

// console.log(age);//100
// //console.log(hair);//ReferenceError: hair is not defined 
// go()

/**block scope */

// if (1 === 1) {
//     // code inside the {} are referred as block
//     var cool = true;
//     // let coolToo = false;
//     const coolAlso = true;
// }
// console.log(cool);// true
// // console.log(coolToo);//ReferenceError: coolToo is not defined 
// console.log(coolAlso);//ReferenceError: coolAlso is not defined 


function isCoolName(name) {
    // inside the function scope
    let cool;
    if (name === 'j') {
        // inside the block scope
        cool = true;
        let coolTwo = false;
    }
    console.log(cool);
    console.log(coolTwo);//ReferenceError: coolTwo is not defined
    return cool;
} 

//isCoolName('j');

function isCoolNameTwo(name) {
    if (name === 'j') {
        var cool = true;
    }
    console.log(cool); // var is function scoped
    return cool;
}
//isCoolNameTwo('j')
// var function scoped, if it is declared function, it becomes global scope
// var can be re-declared and reassigned

// let, const block scoped
// ariables declared with let are only accessible within the block (i.e. curly braces)
// let can be reassigned but cannot re-declared
// const cannto be reassigned or re-declared


/** lexical scoping or static scoping */
// scope look up happens when function defined not where they run

const dogName = 'sunny';
function logDog() {
    console.log(dogName);
} 
function logDogTwo(dogName) {
    console.log(dogName)
}

function go() {
    const dogName = 'Oli';
    logDog();//prints sunny
    logDogTwo(dogName);//prints Oli
} 

go();
