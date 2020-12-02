/* DOM Elements */

const numberBtns = document.querySelectorAll('.calculator__numBtn');
const operatorBtns = document.querySelectorAll('.calculator__operBtn');
const acBtn = document.querySelector('.calculator__ac');
const sumBtn = document.querySelector('.calculator__sum');
const decBtn = document.querySelector('.calculator__decimal');
const displayField = document.querySelector('.calculator__display');

/* Resuable functions */

const updateOutput = (number) => displayField.innerHTML = number;

/* Variables */

let initialNumber = "";
let operator = "";
let secondaryNumber = "";
let storedNumber = 0;
let sum = 0;

/* Number Button Functionality */

numberBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (event) => {
        (!initialNumber) ? initialNumber = event.target.innerHTML : initialNumber += event.target.innerHTML;
        updateOutput(initialNumber);
    })
})

/* Operator Button Functionality */

operatorBtns.forEach(operBtn => {
    operBtn.addEventListener('click', (event) => {
        operator = event.target.value;

        if (initialNumber) {
            storedNumber = parseFloat(initialNumber);
            initialNumber= "";
        }
    })
})

/* Equals Button Functionality */

sumBtn.addEventListener('click', () => {
    if (!initialNumber) secondaryNumber === "" ? initialNumber = storedNumber : initialNumber = secondaryNumber;

    switch(operator) {
        case "add" : 
            sum = storedNumber + parseFloat(initialNumber); 
            break;
        case "subtract" : 
            sum = storedNumber - parseFloat(initialNumber); 
            break;
        case "multiply" : 
            sum = storedNumber * parseFloat(initialNumber); 
            break;
        case "divide" : 
            sum = storedNumber / parseFloat(initialNumber); 
            break;
        default:
            "Sorry invalid operator!";
            break;
    }
    updateOutput(sum);

    // Keep track of initial sum in case user wants to make additional operations.
    storedNumber = sum;
    secondaryNumber = initialNumber;
    initialNumber = "";
})

/* Clear Button Functionality */

acBtn.addEventListener('click', () => {
    const clearOutput = () => {
        // Reset all parameters
        updateOutput(0);
        sum = 0;
        initialNumber = "";
        secondaryNumber = "";
        storedNumber = 0;
    }
    clearOutput();
})

/* Decimal Button Functionality */

decBtn.addEventListener('click', () => {
    // If initial number doesn't include a '.', then attach a '.'.
    if (!initialNumber.includes('.')) {
        initialNumber += '.';
        updateOutput(initialNumber);
    }
})