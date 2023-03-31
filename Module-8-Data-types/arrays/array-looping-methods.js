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

// forEach()
function logToppings(topping, index, toppings) {
    const nextTopping = toppings[index + 1];
    const prevTopping = toppings[index - 1];
    
    // log the topping
    console.log(`current topping is ${topping}`)
    // log the prev topping if there is one
    nextTopping ? console.log(prevTopping) : null;
    // log the next topping if there is one
    nextTopping ? console.log(nextTopping) : null;
    // if it is the last item in the array, say good bye
    index === toppings.length - 1 ? console.log(`Goodbye`) : console.log(`getting the next topping`)
    console.log(`-----🍕-----`)
}

toppings.forEach(logToppings)
