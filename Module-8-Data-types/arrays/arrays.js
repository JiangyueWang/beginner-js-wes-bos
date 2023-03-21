// array is used for holding a list of items that orders matter
// each thing inside the array is called item
// the position of each item is call index
// the number of items inside of an array is called a length
// the items inside array can be any type, string, boolean, another array
// arrays doesnt have key, only index 0, 1, 2


const names = ['jo', 'chu', 'li', 'huang'];
// console.log(typeof(names));//obejct
// console.log(Array.isArray(names));//true, use Array.isArray to test whether it is array or not

// access items inside array, use index, arrays are zero based 
// get the first item of an array 
const firstItemInNames = names[0];
//console.log(`first item in the names array is ${firstItemInNames}`)
// get the number of items inside the array
const namesLength = names.length;
//console.log(`the length of names array is ${namesLength}`);
// get the last item of the array 
const lastItemInNames = names[names.length - 1];
//console.log(`the last item in the names arry is ${lastItemInNames}`);


// mutable methods performs mutation, things can change its original version
// immutable methods returns a new array, does not alter original array 

// mutation methods 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numberReversed = numbers.reverse();//mutable methods as orginal array numbers has changed
// console.log(numberReversed);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(numbers);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 

// take a copy of an array 
const reversedNumbers = [...numbers].reverse();
// console.log(reversedNumbers);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(numbers);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// immutable methods - dont change original data
const pizzaSlice = numbers.slice(2, 4);// slices the original array from index 2 up to 4 (not include)
//console.log(pizzaSlice);
//console.log(numbers)


const namesTwo = ['jo', 'chu', 'li', 'huang'];

// add items to the end of an array, push is the mutable methods
namesTwo.push('Jk');
// console.log(namesTwo);
// add items to the end of an array, immutable method using spread
const namesTwoCopy = [...namesTwo, 'wah'];
// console.log(namesTwo);//['jo', 'chu', 'li', 'huang', 'Jk']
// console.log(namesTwoCopy);//['jo', 'chu', 'li', 'huang', 'Jk', 'wah']


// add items to the beginning of an array, unshfit, mutable method
namesTwo.unshift('haha');
//console.log(namesTwo);// ['haha', 'jo', 'chu', 'li', 'huang', 'Jk']
// add items to the beginning of an array, immutable method, spread operator
const namesTwoCopy2 = ['wh', ...namesTwo];
// console.log(namesTwo);//['haha', 'jo', 'chu', 'li', 'huang', 'Jk']
// console.log(namesTwoCopy2);//['wh', 'haha', 'jo', 'chu', 'li', 'huang', 'Jk']

// taking subset of an array
// slice is immutable
// namesTwo.slice(2, 4);
// console.log(namesTwo.slice(2, 4)); // ['chu', 'li']
// console.log(namesTwo); //['haha', 'jo', 'chu', 'li', 'huang', 'Jk']


// splic is mutable
// array.splice(start[, deleteCount]);
// namesTwo.splice(2, 4);
// console.log(namesTwo.splice(2, 4)); 
// console.log(namesTwo); //['haha', 'jo']

// adding items into the middle of array 
const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [
    ...bikes.slice(0, 2),
    'benotto',
    ...bikes.slice(2),
];
// console.log(newBikes);//['bianchi', 'miele', 'benotto', 'panasonic', 'miyata']


// remove middle items into the array
const newBikes2 = [
    ...newBikes.slice(0, 3),
    ...newBikes.slice(4),
];
// console.log(newBikes2);//['bianchi', 'miele', 'benotto', 'miyata']




/** delete comments from an array */

const comments = [
    {text: 'Cool Beans', id: 123 },
    {text: 'Cool Beans1', id: 124 },
    {text: 'Cool Beans2', id: 125 },
    {text: 'Cool Beans3', id: 126 },
    {text: 'Cool Beans4', id: 127 },
    {text: 'Cool Beans5', id: 128 },
    {text: 'Cool Beans6', id: 129 },
    {text: 'Cool Beans7', id: 130 },
    {text: 'Cool Beans8', id: 131 },
    {text: 'Cool Beans9', id: 132 },
]

function deleteComment(id, comments) {
    let deleteCommentIndex;
    //find the indenx of the item in the array
    comments.findIndex((comment, index) => {
        if(comment.id === id) {
            deleteCommentIndex = index;
            return true;
        }
    })
    // make a new array without that item in it
    const newComments = [
        ...comments.slice(0, deleteCommentIndex),
        ...comments.slice(deleteCommentIndex+1),
    ]
    // return new array
    return newComments;
}

const deleteCommentItem = deleteComment(125, comments);
console.log(deleteCommentItem);