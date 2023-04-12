function Gallery(gallery) {
    this.gallery = gallery;
    if(!gallery) {
        throw new Error('No Gallery Found!');
    }
    // select modal elements
    this.modal = document.querySelector('.modal');
    this.prevBtn = this.modal.querySelector('.prev');
    this.nextBtn = this.modal.querySelector('.next');
    this.modalImg = this.modal.querySelector('img');

    // bind our methods to the instance when we need them 
    this.showNextImg = this.showNextImg.bind(this);
    this.showPrevImg = this.showPrevImg.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    // select images from gallery 
    const images = Array.from(gallery.querySelectorAll('img'));
    // there are event listeners
    images.forEach(img => {
        img.addEventListener('click', (e) => this.showImg(e.target));
        img.addEventListener('keyup', (e) => {
            // when that is keyup'd, check if it was enter
            if (e.key === 'Enter') {
            // if it was, show that image
                this.showImg(e.target);
      }
        })
    })
    this.modal.addEventListener('click', this.handleClickOutside);

    
}

// define prototypes of the Gallery
Gallery.prototype.openModal = function () {
    console.info('Opening Modal...');
    // First check if the modal is already open
    if (this.modal.matches('.open')) {
      console.info('Madal already open');
      return; // stop the function from running
    }
    this.modal.classList.add('open');
    window.addEventListener('keyup', this.handleKeyUp); 
    this.nextBtn.addEventListener('click', this.showNextImg);
    this.prevBtn.addEventListener('click', this.showPrevImg);
  }

Gallery.prototype.closeModal = function () {
    this.modal.classList.remove('open');
    // clean up event listener when modal closed
    window.removeEventListener('keyup', this.handleKeyUp); 
    this.nextBtn.removeEventListener('click', this.showNextImg);
    this.prevBtn.removeEventListener('click', this.showPrevImg);
}

Gallery.prototype.handleClickOutside = function (e) {
    // console.log(e.target);// the actual element you clicked
    // console.log(e.currentTarget);//the element that fires up the eventListener
    /**method 1 */
    if(e.target === e.currentTarget) {
        this.closeModal();
    }
    /**method 2 */
    //uses the "closest" method to determine if the event target element has an ancestor element with a class of "modal-inner"
    // const isOutside = !e.target.closest(".modalInner");
    // if (isOutside) {
    //     closeModal();
    // }
}

Gallery.prototype.handleKeyUp = function (event) {
    if(event.key === 'Escape') return this.closeModal();
    if (event.key === 'ArrowRight') return this.showNextImg();
    if (event.key === 'ArrowLeft') return this.showPrevImg();        
}

Gallery.prototype.showImg = function (el) {
    if(!el) {
        console.info('no image to show');
        return;
    }

    // updated modal with cliked image information
    // console.log(el);
    
    this.modalImg.src = el.src;
    this.modal.querySelector('h2').textContent = el.title;
    this.modal.querySelector('figure p').textContent = el.dataset.description;
    this.currentImg = el;
    this.openModal();

}
Gallery.prototype.showNextImg = function () {
    this.showImg(this.currentImg.nextElementSibling || this.gallery.firstElementChild)
}
Gallery.prototype.showPrevImg = function () {
    this.showImg(this.currentImg.previousElementSibling || this.gallery.lastElementChild);
}
// select galleries from the page ensure the reusability of the Gallery function
const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1);
console.log(gallery2);