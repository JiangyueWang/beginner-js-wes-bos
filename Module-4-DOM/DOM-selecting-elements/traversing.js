const myParagraph = document.querySelector('.name');

console.log(myParagraph);

// difference between a node and an element
console.log(myParagraph.children);//returns all the child elements, HTMLCollection [em]
console.log(myParagraph.childNodes);//returns all the child nodes, NodeList(3) [text, em, text]


console.log(myParagraph.firstElementChild);
console.log(myParagraph.lastElementChild);

console.log(myParagraph.previousElementSibling);
console.log(myParagraph.nextElementSibling);

console.log(myParagraph.parentElement);

// remvoe element
const p = document.createElement('p');
p.textContent = 'i will be removed';
document.body.appendChild(p);
p.remove();

console.log(p);//still have access to the element
document.body.appendChild(p);//you can still put it back in