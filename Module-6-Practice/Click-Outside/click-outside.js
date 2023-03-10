const cardBtns = document.querySelectorAll(".card button");
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner')
const modalCloseBtn = modalOuter.querySelector('.close-modal-btn');
const modalCloseDiv = document.querySelector('.close-modal');

function handleCardBtnClick(event) {
    const button = event.currentTarget;
    // find the card element that the button clicks on
    const card = button.closest('.card');
    // Grab the image src
    const imgSrc = card.querySelector("img").src;
    const desc = card.dataset.description;
    const name = card.querySelector("h2").textContent;
    // populate the modal with the new info
    modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
      "200",
      "600"
    )}" alt="${name}"/>
    <p>${desc}</p>
    `;
    // show the modal
    modalOuter.classList.add("open");

    /** initial solution*/
    // Grab the image src
    //const cardImg = card.querySelector('img').cloneNode(true);
    //const cardTitle = card.querySelector('h2').cloneNode(true);
    // remove previously inserted elements
    // const prevCardImg = modalInner.querySelector('img');
    // const prevCardTitle = modalInner.querySelector('h2');
    // if (prevCardImg) {
    //     prevCardImg.remove();
    // }
    // if (prevCardTitle) {
    //     prevCardTitle.remove();
    // }
    // modalInner.insertAdjacentElement('beforeend', cardImg)
    // cardImg.insertAdjacentElement('afterend', cardTitle)
    // modalOuter.classList.add('open');
}

function handleModalCloseClick() {
    modalOuter.classList.remove('open');
}
cardBtns.forEach((btn) => {
    btn.addEventListener('click', handleCardBtnClick)
})

modalCloseBtn.addEventListener('click', handleModalCloseClick);

modalOuter.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal-inner");
    if (isOutside && event.target !== modalCloseDiv) {
        handleModalCloseClick();
    }
  });