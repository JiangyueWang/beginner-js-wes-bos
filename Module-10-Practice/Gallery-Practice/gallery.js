// select modal elements
const modal = document.querySelector('.modal');
const prevBtn = modal.querySelector('.prev');
const nextBtn = modal.querySelector('.next');
const modalImg = modal.querySelector('img');


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
      }
    function showImg(el) {
        if(!el) {
            console.info('no image to show');
            return;
        }

        // updated modal with cliked image information
        console.log(el);
        
        modalImg.src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;

        openModal();

    }

    // select images from gallery 
    const images = Array.from(gallery.querySelectorAll('img'));
    images.forEach(img => {
        img.addEventListener('click', (e) => showImg(e.target));
    })

    
}

// select galleries from the page ensure the reusability of the Gallery function
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));