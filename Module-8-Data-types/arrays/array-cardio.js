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
// console.log(Object.entries(meats));//return array
// console.log(Object.keys(meats));//return arrays
// console.log(Object.values(meats));//return arrays

// Object.values(meats).forEach(qty => {
//     // console.log(qty)
// })

// Object.values(meats).forEach(qty => {
//     const key = entry[0];
//     const value = entity[1];
//     // console.log(key, value);
// })



/** instance method */

// .join()
// array1.join() turns array1 into a string with comma
// console.log(["egg", "wonder", "brioche"].join());//egg,wonder,brioche
// display all bun types with 'or' -  use join()
//console.log(buns.join(' or '));//egg or wonder or brioche

//.split()
// string1.split() turns string1 into an array
// turn string "hot dogs, hamburgers, sausages, corn" into an array
const foodString = "hot dogs, hamburgers, sausages, corn";
//console.log(foodString.split(','));//['hot dogs', ' hamburgers', ' sausages', ' corn']
//console.log(foodString.split('')); //['h', 'o', 't', ' ', 'd', 'o', 'g', 's', ',', ' ', 'h', 'a', 'm', 'b', 'u', 'r', 'g', 'e', 'r', 's', ',', ' ', 's', 'a', 'u', 's', 'a', 'g', 'e', 's', ',', ' ', 'c', 'o', 'r', 'n']

//.pop(), a mutable method!
//array1.pop() returns the last item within the array, and remove it from the array1
// console.log(toppings);//['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']
// const lastItem = toppings.pop();
// console.log(lastItem);//Cheese
// console.log(toppings);/['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions']

//.push()
// array1.push() add an item to the end of an array
// console.log(toppings);//['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']
// toppings.push('pizza');
// console.log(toppings);//['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese', 'pizza']

//.shift()
//.unshift()
// take the first item off toppings with shift()
const firstItem = toppings.shift();
// console.log(firstItem);
// add it back in with unshift()
toppings.unshift(firstItem);
// Do the last four,but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 1);
// console.log(toppings);//['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']
// console.log(newToppings);//['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions']
// newtoppings = [...newToppings, toppings[toppings.length - 1]];//put the last item from the original toppings into newToppings
// console.log(newtoppings);//['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese']


// // Make a copy of the toppings array with slice()
// const toppingsCopy = toppings.slice(0);
// toppings[0] = 'Mushy Boi';
// console.log(toppings);
// console.log(toppingsCopy);
// // Make a copy of the toppings array with a spread
// const toppingsCopy2 = [...toppings];
// // take out items 3 to 5 of your new toppings array with splice()
// toppingsCopy.splice(3, 3);
// console.log(toppingsCopy);
// // find the index of Avocado with indexOf() / lastIndexOf()
// const avoIndex = toppings.indexOf('Avocado');
// console.log(avoIndex);

// // Check if hot sauce is in the toppings with includes()
// const isInToppings = toppings.includes('Hot Sauce');
// console.log(isInToppings);
// // add it if it's not
// if (!isInToppings) {
//   toppings.push('Hot Sauce');
// }
// console.log(toppings);
// // flip those toppings around with reverse()
// // toppings.reverse();
// const toppingsReversed = [...toppings].reverse();
// console.log(toppingsReversed);


/*
  Callback Methods, mthods that takes a function as an argument, called callback
*/

// find the first rating that talks about a burger with find()
function findBurgRating(singleFeedback) {
  // console.log(singleFeedback)
  // return true;//whenever this function returns true, the item will be printed out
  if(singleFeedback.comment.includes('burg')) {
    return true;
  } else {
    return false;
  }
}
// you can also use arrow function with implicit return for findBurgRating


function FindItemByWord(word) {
  return function(singleFeedback) {
    return singleFeedback.comment.includes(word)
  }
}
const burgFinder = FindItemByWord('burg');
const burgRating = feedback.find(burgFinder);


// find all ratings that are above 2 with filter()
// function filterByMinRating(minRating) {
//   return function(singleFeedback) {
//     return singleFeedback.rating > minRating;
//   }
// }
const ratingAbove2 = feedback.filter(singleFeedback => {
  return singleFeedback.rating >= 2;
})
console.log(ratingAbove2);
// find all ratings that talk about a burger with filter()
const burgsCommentFinder = feedback.filter((singleFeedback) => singleFeedback.comment.includes('burg'))
console.log(burgsCommentFinder);


// Remove the one star rating however you like!
let ratingAboveOne=[];
feedback.filter(singleFeedback => {
  if(singleFeedback.rating > 1) {
    ratingAboveOne.push(singleFeedback);
  } 
})
console.log(ratingAboveOne);
const ratingAboveOne2 = feedback.filter(single => single.rating !== 1);
console.table(ratingAboveOne2) 

// check if there is at least 5 of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(meatValue => meatValue >= 5);
// make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every(meatValue => meatValue >= 3);
// sort the toppings alphabetically with sort()
const numbers = [1, 2, 100, 20, 300, 200, 156, 2];
const sortedNumbers = numbers.sort((num1, num2) => {
  return num1 - num2;
  // if(num1 === num2) {
  //   return 0;
  // } else if(num1 < num2){
  //   return -1;
  // } else {
  //   return 1;
  // }
})
console.log(sortedNumbers)
// sort the order totals from most expensive to least with .sort()
function numSort(a, b) {
  return a-b;
}
console.log(orderTotals.sort(numSort));
// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort(
  function(a,b) {
    return a[1] - b[1];
  }
);
console.table(Object.fromEntries(productsSortedByPrice));