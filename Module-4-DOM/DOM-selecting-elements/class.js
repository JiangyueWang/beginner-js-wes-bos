const niceImg = document.querySelector('.nice');

//.classList returns all the class on tne element
console.log(niceImg.classList)

// niceImg.classList.add('round');
// niceImg.classList.remove('round');


function handleImgClick() {
    niceImg.classList.toggle('round')
}

niceImg.addEventListener('click', handleImgClick);