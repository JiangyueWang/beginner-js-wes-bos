const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const students = [
    {
      id: '11ce',
      first_name: 'Dall',
      last_name: 'Puckring',
    },
    {
      id: '2958',
      first_name: 'Margarete',
      last_name: 'Brandi',
    },
    {
      id: '565a',
      first_name: 'Bendicty',
      last_name: 'Woodage',
    },
    {
      id: '3a16',
      first_name: 'Micki',
      last_name: 'Mattes',
    },
    {
      id: 'f396',
      first_name: 'Flory',
      last_name: 'Gladeche',
    },
    {
      id: 'de5f',
      first_name: 'Jamill',
      last_name: 'Emilien',
    },
    {
      id: '54cb',
      first_name: 'Brett',
      last_name: 'Aizikowitz',
    },
    {
      id: '9135',
      first_name: 'Lorry',
      last_name: 'Smallman',
    },
    {
      id: '978f',
      first_name: 'Gilly',
      last_name: 'Flott',
    },
  ];

  const people = [
    {
      birthday: 'April 22, 1993',
      names: {
        first: 'Keith',
        last: 'Buckley'
      }
    },
    {
      birthday: 'January 3, 1975',
      names: {
        first: 'Larry',
        last: 'Heep'
      }
    },
    {
      birthday: 'February 12, 1944',
      names: {
        first: 'Linda',
        last: 'Bermeer'
      }
    }
  ];


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

  const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

  const inventory = [
    { type: 'shirt', price: 4000 },
    { type: 'pants', price: 4532 },
    { type: 'socks', price: 234 },
    { type: 'shirt', price: 2343 },
    { type: 'pants', price: 2343 },
    { type: 'socks', price: 542 },
    { type: 'pants', price: 123 },
  ];


// forEach()
// forEach() does not return any values
// function logToppings(topping, index, toppings) {
//     const nextTopping = toppings[index + 1];
//     const prevTopping = toppings[index - 1];
    
//     // log the topping
//     console.log(`current topping is ${topping}`)
//     // log the prev topping if there is one
//     nextTopping ? console.log(prevTopping) : null;
//     // log the next topping if there is one
//     nextTopping ? console.log(nextTopping) : null;
//     // if it is the last item in the array, say good bye
//     index === toppings.length - 1 ? console.log(`Goodbye`) : console.log(`getting the next topping`)
//     console.log(`-----🍕-----`)
// }

// toppings.forEach(logToppings)

// map
// whatever you return from your map callback function, it will replace whatever was intially pass in to the map function
function addArms(face) {
    return `👋 ${face}👋`
}
// console.log(faces.map(face => addArms(face)));




const cleanPeople = people.map(function (person) {
    const newObj = {};
    // get person's bday, use getTime method to get the timestamp of a date
    const bday = new Date(person.birthday).getFullYear();
    // find out how old they are
    const now = new Date().getFullYear();
    newObj.name = `${person.names.first} ${person.names.last}`;
    newObj.age = now - bday;
    console.log(newObj)
    return newObj;
    // return their full name and bday in an object
});

