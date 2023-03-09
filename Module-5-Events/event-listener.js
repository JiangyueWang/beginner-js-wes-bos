// select the element, document.querySelector()
// listen for the event, addEventListener()
// go do something, callback function

const myButton = document.querySelector('.btn');

function handleClick() {
    // callback function
   
    console.log('you clicked the button');
}

 // function handleClick is binding to myButton 
myButton.addEventListener('click', handleClick)


myButton.addEventListener('mouseover', (event) => {
    event.target.style.background = "pink";
    console.log('you hovered the button')
})
myButton.addEventListener('mouseout', (event) => {
    event.target.style.background = "green";
    console.log('you hovered out the button')
})


// unbinding function handleClick to myButton 
// you have to use a named function in order to use removeEventListener
//myButton.removeEventListener('click', handleClick)


const myButtons = document.querySelectorAll('.buy');
/**listen on multiple items */
// function handleBuyBtnClick(event) {
//     console.log(`you have bought this item ${event.target.textContent}`)
// }
// function attachBuyBtnListener(btn) {
//     btn.addEventListener('click', (e) => handleBuyBtnClick(e));
// }
// myButtons.forEach(attachBuyBtnListener);

/** understand the event param */
function handleBuyBtnClick(event) {
    // console.log('you are buying this item');
    // console.log(event);
    console.log(event.target);//elements that actually got clicked
    console.log(event.currentTarget);//element that fires up the eventListner
    //console.log(parseFloat(event.target.dataset.price))
    
    // stop this event from bubbling up
    // event.stopPropagation();
}

myButtons.forEach(function(buyBtn) {
    buyBtn.addEventListener('click', handleBuyBtnClick);
})


window.addEventListener('click', function(event) {
    console.log('You clicked the window');
    //stop this event from capture down, the handleBuyBtnClick will never fire up
    event.stopPropagation();
}, {
    capture: true,
})

