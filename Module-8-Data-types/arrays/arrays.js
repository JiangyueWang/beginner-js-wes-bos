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
console.log(`first item in the names array is ${firstItemInNames}`)
// get the number of items inside the array
const namesLength = names.length;
console.log(`the length of names array is ${namesLength}`);
// get the last item of the array 
const lastItemInNames = names[names.length - 1];
console.log(`the last item in the names arry is ${lastItemInNames}`);


// mutable methods performs mutation, things can change its original version
// immutable methods returns a new array, does not alter original array 

// mutation methods 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numberReversed = numbers.reverse();//mutable methods as orginal array numbers has changed
// console.log(numberReversed);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(numbers);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 

// take a copy of an array 
const reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers);//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(numbers);//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// immutable methods - dont change original data
const pizzaSlice = numbers.slice(2, 4);// slices the original array from index 2 up to 4 (not include)
console.log(pizzaSlice);
console.log(numbers)