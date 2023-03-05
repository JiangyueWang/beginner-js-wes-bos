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

// passing a param/parameters when defining the function
// billAmount and taxRate are parameters
function calculateBillTwo(billAmount, taxRate) {
    console.log("running Calculate Bill Two function");
    const total = billAmount * (1 + taxRate);  
    return total;
}
// 100, 0.13 are called as arguments
const myTotalTwo = calculateBillTwo(100, 0.13);
console.log(`total bill is $${myTotal}`);

//passing variables/references into functions
const newTotal = 500;
const newTaxRate = 0.2;
console.log(`total bill for the newTotal newTaxRate is $${calculateBillTwo(newTotal, newTaxRate)}`);

// passing expression into the function
const myTotalThree = calculateBillTwo(20 + 20, 0.15);

const billOne = 50;
const billTwo = 100;
const updatedTaxRate = 0.35;
const myTotalFour = calculateBillTwo(billOne + billTwo, updatedTaxRate); 

console.log(`bill three is ${myTotalThree}, bill four is ${myTotalFour}`);


//passing function as the argument for the function

function doctorise(name) {
    return `Dr. ${name}`;
}
// setting default value of a parameter
function yell(name = '') {
    return `HEY ${name.toUpperCase()}`;
}
console.log(yell(doctorise('jyp')))