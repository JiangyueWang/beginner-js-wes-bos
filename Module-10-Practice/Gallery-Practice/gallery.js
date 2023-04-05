// select modal elements
const modal = document.querySelector('.modal');
const prevBtn = modal.querySelector('.prev');
const nextBtn = modal.querySelector('.next');
const modalImg = modal.querySelector('img');
let currentImg;

function Gallery(gallery) {
    if(!gallery) {
        throw new Error('No Gallery Found!');
    }

    function openModal() {
        console.info('Opening Modal...');
        // First check if the modal is already open
        if (modal.matches('.open')) {
          console.info('Madal already open');
          return; // stop the function from running
        }
        modal.classList.add('open');
        window.addEventListener('keyup', handleKeyUp); 
        nextBtn.addEventListener('click', showNextImg);
        prevBtn.addEventListener('click', showPrevImg);
      }

    function closeModal() {
        modal.classList.remove('open');
        // clean up event listener when modal closed
        window.removeEventListener('keyup', handleKeyUp); 
        nextBtn.removeEventListener('click', showNextImg);
        prevBtn.removeEventListener('click', showPrevImg);
    }

    function handleClickOutside(e) {
        // console.log(e.target);// the actual element you clicked
        // console.log(e.currentTarget);//the element that fires up the eventListener
        /**method 1 */
        if(e.target === e.currentTarget) {
            closeModal();
        }
        /**method 2 */
        //uses the "closest" method to determine if the event target element has an ancestor element with a class of "modal-inner"
        // const isOutside = !e.target.closest(".modalInner");
        // if (isOutside) {
        //     closeModal();
        // }
    }
    
    function handleKeyUp(event) {
        if(event.key === 'Escape') return closeModal();
        if (event.key === 'ArrowRight') return showNextImg();
        if (event.key === 'ArrowLeft') return showPrevImg();
    }

    function showImg(el) {
        if(!el) {
            console.info('no image to show');
            return;
        }

        // updated modal with cliked image information
        // console.log(el);
        
        modalImg.src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImg = el;
        openModal();

    }
    function showNextImg() {
        showImg(currentImg.nextElementSibling || gallery.firstElementChild)
    }
    function showPrevImg() {
        showImg(currentImg.previousElementSibling || gallery.lastElementChild);
    }
    // select images from gallery 
    const images = Array.from(gallery.querySelectorAll('img'));
    // there are event listeners
    images.forEach(img => {
        img.addEventListener('click', (e) => showImg(e.target));
    })
    modal.addEventListener('click', handleClickOutside);

    
}

// select galleries from the page ensure the reusability of the Gallery function
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));