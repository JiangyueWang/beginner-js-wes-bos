// selecting elements on the page

// querySelector returns the first matching element
// querySelectorAll returns all the elements in NodeList, array like elements, doesnt have the array built in methods to it, map, filter

const p = document.querySelector('p');
const divs = document.querySelectorAll('.item');

const item2 = document.querySelector('.item2');
const imgesInItem2Div = item2.querySelector('img')
// console.log(p);
// console.log(divs);
// console.log(imgesInItem2Div);

// getElementById
// getElementByClassName


