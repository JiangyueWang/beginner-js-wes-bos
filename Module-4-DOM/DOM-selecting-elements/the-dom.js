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


const heading = document.querySelector('h2');
//console.dir(heading.textContent);
// innerText only shows human readable element 
// textContent  returns every elements in the node, including <script> and <style> elements

console.log(heading.textContent);//shows hidden element
console.log(heading.innerText);// only shows human readable text

console.log(heading.innerHTML);
console.log(heading.outerHTML);



// select the element on the page
const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// update the content on the page

// slow application method
// pizzaList.textContent =` ${pizzaList.textContent}🍕`;

// recommened way 
pizzaList.insertAdjacentText('beforeend', '🍕')
pizzaList.insertAdjacentText('afterbegin', '🍕')