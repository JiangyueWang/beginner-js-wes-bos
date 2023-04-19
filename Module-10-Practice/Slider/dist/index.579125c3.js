function Slider(slider) {
    // check if someone passes the slider element
    if (!(slider instanceof Element)) throw new Error('No slide passed in!');
    // create variables for working sliders
    let current;
    let prev;
    let next;
    // selected needed elements
    const slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.goToPrev');
    const nextBtn = slider.querySelector('.goToNext');
    function startSlider() {
        // if there are no element has current class on it, then the current will be the firstElement of the slides div
        current = slides.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;
    }
    function applyClasses() {
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');
    }
    function move(direction) {
        // first strip all the classes off the current slides
        const classesToRemove = [
            'prev',
            'current',
            'next'
        ];
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);
        if (direction === 'back') // make an new array of the new values
        // and destructure them over an into the prev, current and next variables
        [prev, current, next] = [
            prev.previousElementSibling || slides.lastElementChild,
            prev,
            current
        ];
        else [prev, current, next] = [
            current,
            next,
            next.nextElementSibling || slides.firstElementChild
        ];
        applyClasses();
    }
    startSlider();
    applyClasses();
    // event listners 
    prevBtn.addEventListener('click', ()=>move('back')
    );
    nextBtn.addEventListener('click', move);
}
const slider1 = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));

//# sourceMappingURL=index.579125c3.js.map
