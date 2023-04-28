function Slider(slider) {
    // check if someone passes the slider element
    if(!(slider instanceof Element)) {
        throw new Error('No slide passed in!');
    } 

    // create variables for working sliders
    // this.current;
    // this.prev;
    // this.next;
    // selected needed elements
    this.slider = slider;

    this.slides = slider.querySelector('.slides');
    const prevBtn = slider.querySelector('.goToPrev');
    const nextBtn = slider.querySelector('.goToNext');
    

    this.startSlider();
    this.applyClasses();

    // event listners 
    prevBtn.addEventListener('click', () => this.move('back'));
    nextBtn.addEventListener('click', () => this.move());
    
}

Slider.prototype.startSlider = function() {
    // if there are no element has current class on it, then the current will be the firstElement of the slides div
    this.current = this.slides.querySelector('.current') || this.slides.firstElementChild;
    this.prev = this.current.previousElementSibling || this.slides.lastElementChild
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;

}    
Slider.prototype.applyClasses = function() {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
}
Slider.prototype.move = function(direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if(direction === 'back') {
        // make an new array of the new values
        // and destructure them over an into the prev, current and next variables
        [this.prev, this.current, this.next] = [this.prev.previousElementSibling || this.slides.lastElementChild, this.prev, this.current];
    } else {
        [this.prev, this.current, this.next] = [this.current, this.next, this.next.nextElementSibling || this.slides.firstElementChild];
    }
    this.applyClasses();
}

const slider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));