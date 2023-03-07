const niceImg = document.querySelector('.nice');

//.classList returns all the class on tne element
console.log(niceImg.classList)

// niceImg.classList.add('round');
// niceImg.classList.remove('round');


function handleImgClick() {
    niceImg.classList.toggle('round')
}

niceImg.addEventListener('click', handleImgClick);


// adding attributes to the elements using dot methods
niceImg.alt = `buildings`;
niceImg.width = 200;
console.log(niceImg.naturalWidth);//getter only, cannot be changed, returns 0 as it needs to wait the page to finish load the img

// wait img to load the console.log the naturalWidth
niceImg.addEventListener('load', function() {
    console.log(niceImg.naturalWidth);// returns 600
})

// //other ways to change attibutes on the element, works for nonstandard attributes
// niceImg.setAttribute('alt', 'mountain');
// console.log(niceImg.getAttribute('alt'));

// set own attributes by adding data- on the element
// <img data-name="lux" src="https://picsum.photos/200" />

// access data attribute using .dataset
const custom = document.querySelector('.custom');
console.log(custom.dataset);
// add new custom attribute to the element
custom.setAttribute('data-last', 'lastName');