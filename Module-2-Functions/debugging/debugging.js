const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
  ];
  
people.forEach((person, index) => {
    console.groupCollapsed(`${person.name}`);
    console.log(person.country);
    console.log(person.cool);
    console.log('Done!');
    console.groupEnd(`${person.name}`);
});

// console.table(people);

// Console Methods
// console.error()
// console.warn()
// console.table()
// console.count()
// console.group('someString'); console.groupEnd('someString');
// console.groupCollapsed(`someString`); console.groupEnd(`someString`)
function doALotStuff() {
    debugger;
    console.group('Doing some stuff');
    console.log('console.log one');
    console.warn('watch out!');
    console.error('an error here!');
    console.groupEnd('Doing some stuff');
}
// doALotStuff();

// Callstack

// Grabbing Elements - ONLY in chrome console
// click an element on a page, then in thde Console in the devTool type $0
// $0 reprsents the last element you clicked 
// $1 represents the second last element you clicked 

//$('p') matches the first <p></p> on the page
//$$('p') matches all the <p></p> on the page

// Breakpoints
// pause js from running
// adding debugger into your js

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
// counting how many times this function has been run
// console.count('running Doctorize');
return `Dr. ${name}`;
}

function greet(name) {
doesntExist();//cause an error
return `Hello ${name}`;
}

function go() {
const name = doctorize(greet('Wes'));
console.log(name);
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
    Accept: 'text/plain',
    },
});
const joke = await res.text();
console.log(joke);
return joke;
}