// defined a function, then it gets to call later

// define a function, function definition
function calculateBill() {
    // this is the function body
    console.log("running Calculate Bill function"); 
    // variable total is a temporary variable
    // variable total defined within the function cannot access outside the function
    // when the function is finished running, the variable gets cleaned up/garbage collected
    const total = 100 * 1.13;  
    return total;
}


// function call or Run
calculateBill()
// capture the return value of the function
const myTotal = calculateBill(); 
console.log(`total bill is $${myTotal}`)