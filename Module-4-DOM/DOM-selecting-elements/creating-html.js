// creating html elements
// document.createElement(tagName)
const myParagraph = document.createElement('p');
myParagraph.textContent = `I am a paragraph`;
myParagraph.classList.add('special');
console.log(myParagraph)

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/300'
//myImage.setAttribute('src', 'https://picsum.photos/500');
console.log(myImage)

const myDiv = document.createElement('div');
myDiv.textContent = `inside the div`
myDiv.classList.add(`wrapper`);

// insertAddjacentElement
myDiv.insertAdjacentElement('beforeend', myParagraph)


// add element to the body
document.body.appendChild(myDiv)




const myList = document.createElement('ul');
const listItemThree = document.createElement('li');
listItemThree.textContent = 'three';

myList.appendChild(listItemThree)
document.body.insertAdjacentElement('afterbegin', myList);

const listItemFive = document.createElement('li');
listItemFive.textContent = 'five';
listItemThree.insertAdjacentElement('afterend', listItemFive)

// const listItemFive = document.createElement('li');
// listItemFive.textContent = 'five';
// myList.append(listItemFive);

// const listItemOne = listItemFive.cloneNode(true);
// listItemOne.textContent = 'one'
// myList.insertAdjacentElement('afterbegin', listItemOne)