let name1 = `lo`;
let name2 = 'jun';

console.log(name1 === name2);//true
// updating the value of name1
name1 = 'scott';
console.log(name1 === name2);//false, as value of name1 has changed

//update value of name2 to be name1
name2 = name1;
console.log(name1 === name2);//true
name2 = 'alo'
console.log(name1 === name2);// name1's value doesnt updated when value of name2 updated



const person1 = {
    first: 'lu',
    age: 10,
}
const person2 = {
    first: 'lu',
    age:10,
}
//when you comparing to the objects, it is done by the refence to the object iteself
// not the value of the objects
console.log(person1 === person2);//false

const person3 = person1;//person3 points to the original object person1, creating a reference variable points to person1(the orignal objects)
person3.first = 'charlie';
// objects are copies by reference
console.log(person3.first);//charlie
console.log(person1.first);//charlie

// use spread operator to create a copy an object
// spread method is only going to one level deep
const person4 = {...person1};//take every single item inside person1 and spread into person4
person4.first = 'larry';
console.log(person4.first);//larry
console.log(person1.first);//charlie
// second way to cope an object is use .assign method
// const person4 = Object.assign({}, person1)

// deep clone of an object
// lodash https://lodash.com/


const classObj = {
    name: 'jp',
    students: {
        student1: {
            name: 'jo',
            age: 15,
        },
        student2: {
            name: 'tr',
            age:15
        },
    },
    location: 'online'

}
const classObj1 = {...classObj};
classObj1.students.student1.name = 'choc',
console.log(classObj1.students.student1.name);//choc
console.log(classObj.students.student1.name);//choc
// need to use deep copy from lodash
// 1. place lodash script into html
const classObj2 = _.cloneDeep(classObj);
classObj2.students.student1.name = 'ya-ya',
console.log(classObj2.students.student1.name);//ya-ya
console.log(classObj.students.student1.name);//choc

// use spread operator to merge objects 
const meatInventory = {
    bacon: 10,
    sausage: 2,
    oyster: 1,
}
const veggieInventory = {
    letture: 9,
    tomatos: 4,
    oyster: 1000,// this value will replace the oyster value from meatInventory
}
const totalInventory = {
    ...meatInventory,
    ...veggieInventory
}
console.log(totalInventory)

