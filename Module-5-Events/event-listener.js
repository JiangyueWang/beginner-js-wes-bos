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