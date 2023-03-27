const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/**static method */
// Array.of() 
// Array.of() is used to create an Array from its argument
// const array1 = Array.of('jo', 'ly'); //['jo', 'ly']
// console.log([...'wejy']);//['w', 'e', 'j', 'y']

// Array.from()
//Array.from({ length: 10 });//returns an array with 10 empty items
// make a function that creates a range from x to y with Array.from()

// create an array range with 10 spots, then filled with the return value from second function it passes in
// const range = Array.from({length:10}, function(){
//     return 'wes';
// })
// // console.log(range);//['wes', 'wes', 'wes', 'wes', 'wes', 'wes', 'wes', 'wes', 'wes', 'wes']

function createRange(start, end) {
    const range = Array.from({length:end-start}, function(item, index) {
        // return index;
        return index+start;
    });
    return range;
};

// take the meats object and make these arrays with Object.entries(); Object.keys(), Object.values()
console.log(Object.entries(meats));//return array
console.log(Object.keys(meats));//return arrays
console.log(Object.values(meats));//return arrays

Object.values(meats).forEach(qty => {
    console.log(qty)
})

Object.values(meats).forEach(qty => {
    const key = entry[0];
    const value = entity[1];
    console.log(key, value);
})
