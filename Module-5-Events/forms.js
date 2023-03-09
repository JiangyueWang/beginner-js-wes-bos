// preventDefault, stop the default actions of the browser
const bingLink = document.querySelector('.bing');
bingLink.addEventListener('click', function(event) {
    const shouldChangePage = confirm(
        `Do you wish to proceed to Bing?`
    );
    if (!shouldChangePage) {
        event.preventDefault();
    }
})

//attribute selector
const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    console.log(event);
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
})

const nameOnForm = document.querySelector('#name');
nameOnForm.addEventListener('focus', function(event) {
    event.currentTarget.style.background = 'pink'
})

// other useful event
// focus
// blur
// keydown
// keyup