const acceptBtn = document.querySelector('.accept');
const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');


function obCallback(payload) {
    // this callback will fire every single time that it needs to check that something is on the page
    if(payload[0].intersectionRatio === 1){
        acceptBtn.disabled = false; 
        acceptBtn.opacity = 1;
    } else {
        acceptBtn.disabled = true;
    }
}
const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});
// ob.observe(watch);//starts to observe watch element
ob.observe(terms.lastElementChild);

// function scrollToAccept() {
//     if (!terms) {
//     return;//quit this as there isn't this element on the page
//     } 
    
//     terms.addEventListener('scroll', function(e) { 
//         // console.log(e.currentTarget.scrollTop);// how far scroll from the top
//         // console.log(e.currentTarget.scrollHeight);// how heigh the actuall scroll is
//         // console.log(e.currentTarget.offsetHeight);//returns the height of an element, including the height of any padding, border, and vertical scrollbar (if present), but excluding the margin.
        
//         // intersection observer is to watch whether an element is on, off or half shown on the page
//     })
// }
// scrollToAccept();