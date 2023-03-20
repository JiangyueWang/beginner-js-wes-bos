// objects allows us to group together properties and values, or key value pairs
// use cases: store realted data, stroing functionalities -> creating your own custom types

// the order of the properities does not matter

// create object uses object literal
const person = {
    name: 'jou',//value of an object can any type
    age: 1,
    'is-cool': true,//property can have dash in it
    '777': true,// property can be numbers
};   

// another way of defining Obeject use new keyword
const person2 = new Object(
    {
        name: 'jou',
        age: 1,
        clothing: {
            shirts: 10,
            pants: 5,
        },
        sayHello: function(greeting = 'Hey') {
            return `${greeting} ${this.name}`
        }
    }
)
const sayHello = person2.sayHello()
console.log(sayHello)
// dot notation to access values
console.log(person2.age);
// square brackets to access values,  when the proper is stored in a variable, use square brackets
console.log(person2['name']);
// const propToCheck = prompt('what do you to check?');
// console.log(propToCheck); //type age as an example+
// console.log(person2[propToCheck]);
// reference multiple deepth
console.log(person2.clothing.shirts);

// add a new property after an object is created 
person2.job = 'developer';
// overwrite an exiting property of an object
person2.name = 'lu';
console.log(person2)

// freeze an object that cannot be changed 
const personFreese = Object.freeze(person);  

// delete property on an object 
delete person2.clothing;
console.log(person2.clothing)//returns undefined   

// methods: functions live in side object