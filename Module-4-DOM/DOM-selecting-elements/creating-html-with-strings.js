const item = document.querySelector('.item');
const width = 230;
const imgSrc = `https://picsum.photos/${width}`

// myHTML is not an element at this stage, it is just a string
// can apply methods like .classList, .classList.add,
// if you want to manipulate the class you need to add on the page first then pull it out
const myHTML = `
    <div class="wrapper">
        <p>this is the div created by js string literal</p>
        <img src=${imgSrc}></img>
    </div>`



// item.innerHTML = myHTML
// document.body.insertAdjacentElement('afterbegin', item);

// const myWrapper = document.querySelector('.wrapper');
// console.log(myWrapper);
// myWrapper.querySelector('img').classList.add('round');


// turn string myHTML into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment)//#document-fragment, essentially this is HTML

document.body.appendChild(myFragment)