const cardBtns = document.querySelectorAll(".card button");
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner')
const modalCloseBtn = document.querySelector('.close-modal');

function handleCardBtnClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card')
    const cardImg = card.querySelector('img').cloneNode(true);
    const cardTitle = card.querySelector('h2').cloneNode(true);
    modalOuter.classList.add('open');
    // remove previously inserted elements
    const prevCardImg = modalInner.querySelector('img');
    const prevCardTitle = modalInner.querySelector('h2');
    if (prevCardImg) {
        prevCardImg.remove();
    }
    if (prevCardTitle) {
        prevCardTitle.remove();
    }
    modalInner.insertAdjacentElement('beforeend', cardImg)
    cardImg.insertAdjacentElement('afterend', cardTitle)
}

function handleModalCloseClick() {
    modalOuter.classList.remove('open');
}
cardBtns.forEach((btn) => {
    btn.addEventListener('click', handleCardBtnClick)
})

modalCloseBtn.addEventListener('click', handleModalCloseClick)