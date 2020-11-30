/* =================================================================================
                                   VARIABLES
================================================================================= */

const numberBtns = document.querySelectorAll('.calculator__numBtn');
const operBtns = document.querySelectorAll('.calculator__operBtn');
const acBtn = document.querySelector('.calculator__ac');
const sumBtn = document.querySelector('.calculator__sum');

const displayField = document.querySelector('.calculator__display');

console.log(numberBtns);
console.log(operBtns);
console.log(displayField);

let sum = [];
let secondaryValue = "";

// Number Buttons
numberBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (event) => {
        const num = event.target;
        const numValue = num.innerHTML;
        const initialValue = displayField.innerHTML;

        if (initialValue === '0') {
            displayField.innerHTML = numValue;
        } else {
            displayField.innerHTML = initialValue + numValue;
        }
    })
})

// Operator Buttons
operBtns.forEach(operBtn => {
    operBtn.addEventListener('click', (event) => {
        console.log(event.target);
        const oper = event.target;
        const operValue = oper.innerHTML;
        console.log(operValue);
    })
})


// Clear Button 
acBtn.addEventListener('click', () => {
    displayField.innerHTML = '0';
    sum = [];
})

// Sum Button
sumBtn.addEventListener('click', () => {
    if (operValue === "+") {
        let sum = initialValue + secondaryValue;
        console.log(sum);
        return;
    }
})



// numberBtns.addEventListener('click', (event) => {
//     const num = event.target;
//     const numValue = num.innerHTML;
//     const displayOutput = displayField.innerHTML;

//     if (displayOutput === '0') {
//         displayField.innerHTML = numValue;
//     } else {
//         displayField.innerHTML = displayOutput + numValue;
//     }
// })



// const updateDisplay = () => {
//     let initialOutput = displayField.innerHTML;

//     if (initialOutput === '0') {
//         initialOutput == '';
//     }
// }


const calculate = (initialValue, operValue, secondaryValue) => {
    let result;
    switch(operValue) {
        case "+":
            result = initialValue + secondaryValue;
            break;
        case "-":
            result = initialValue - secondaryValue;
            break;
        case "*":
            result = initialValue * secondaryValue;
            break;
        case "/":
            result = initialValue / secondaryValue;
            break;
        default:
            result = "Not a valid operater";
            break;
    }
    return result;
}


























// // AC Button to clear output
// const acBtn = document.querySelector('.calculator__ac');
// // Operator variables
// const addBtn = document.querySelector('#calculator__add');
// const multiBtn = document.querySelector('#calculator__multiply');
// const divBtn = document.querySelector('#calculator__divide');
// const subBtn = document.querySelector('#calculator__subtract');
// const sumBtn = document.querySelector('.calculator__sum');
// // Number variables
// const numZeroBtn = document.querySelector('#calculator__zero');
// const numOneBtn = document.querySelector('#calculator__one');
// const numTwoBtn = document.querySelector('#calculator__two');
// const numThreeBtn = document.querySelector('#calculator__three');
// const numFourBtn = document.querySelector('#calculator__four');
// const numFiveBtn = document.querySelector('#calculator__five');
// const numSixBtn = document.querySelector('#calculator__six');
// const numSevenBtn = document.querySelector('#calculator__seven');
// const numEightBtn = document.querySelector('#calculator__eight');
// const numNineBtn = document.querySelector('#calculator__nine');
// const decBtn = document.querySelector('.calculator__decimal');
// // Type arrays
// const numberArray = [numZeroBtn, numOneBtn, numTwoBtn,
//                     numThreeBtn, numFourBtn, numFiveBtn,
//                     numSixBtn, numSevenBtn, numEightBtn, 
//                     numNineBtn];

// const operatorArray = [addBtn, multiBtn, divBtn, subBtn, sumBtn];
// // Display Field 
// const displayOutput = document.querySelector('.calculator__display');
// let initialValue = '0';
// let secondValue;
// let evalStringArray = [];

// /* =================================================================================
//                                    FUNCTIONS
// ================================================================================= */
// // 
// const updateDisplay = (buttonClicked) => {
//     let btnText = buttonClicked.innerHTML;
//     // Reset the display output so that when a number is clicked it does NOT include
//     // the inital '0' value.
//     if(initialValue === '0') {
//         initialValue = '';
//     }
//     initialValue += btnText;
//     displayOutput.innerHTML = initialValue;
    
// }

// const addOperator = (buttonClicked) => {
//     let operator = buttonClicked.innerText;

//     switch (operator) {
//         case '+':
//             // Second value is undefined so need to make it equal to initial value.
//             secondValue = initialValue;
//             initialValue = '0';
//             displayOutput.innerText = initialValue;
//             evalStringArray.push(secondValue);
//             evalStringArray.push('+');
//             break;
        
//         case '-':
//             secondValue = initialValue;
//             initialValue = '0';
//             displayOutput.innerText = initialValue;
//             evalStringArray.push(secondValue);
//             evalStringArray.push('-');
//             break;

//         case 'x':
//             secondValue = initialValue;
//             initialValue = '0';
//             displayOutput.innerText = initialValue;
//             evalStringArray.push(secondValue);
//             evalStringArray.push('*');
//             break;
            
//         case '&#247':
//             secondValue = initialValue;
//             initialValue = '0';
//             displayOutput.innerText = initialValue;
//             evalStringArray.push(secondValue);
//             evalStringArray.push('/');
//             break;
        
//         case '=':
//             evalStringArray.push(initialValue);
//             let sum = eval(evalStringArray.join(' '));
//             initialValue = sum + '';
//             displayOutput.innerText = initialValue;
//             evalStringArray = [];
//             break;
//     }
// }





// /* =================================================================================
//                                ARRAY ITERATIONS
// ================================================================================= */

// // Iterate through number & operator array to add a 'click' event to each.

// for (let i = 0; i < numberArray.length; i++) {
//     numberArray[i].addEventListener('click', (event) => {
//         updateDisplay(event.target);
//     });
// }

// for (let i = 0; i < operatorArray.length; i++) {
//     operatorArray[i].addEventListener('click', (event) => {
//         addOperator(event.target);
//     });
// }



// // CLEAR DISPLAY OUTPUT 
// // 1. Target AC button on click
// acBtn.onclick = () => {
//     // 2. Set display value = 0 
//     initialValue = '0';
//     // 3. Attach to displayOutput
//     displayOutput.innerHTML = initialValue;
// }


// decBtn.addEventListener('click', () => {
//     // If initial value doesn't include a '.', then attach a '.'.
//     if (!initialValue.includes('.')) {
//         initialValue += '.';
//         initialValue = displayOutput.innerText;
//     }
// })




































// Grab value from display output
// const getDisplayOutputAsString = () => {
//     const displayString = displayOutput.textContent;
//     return displayString.split(',').join('');
// }

// const getDisplayOutputAsNumber = () => {
//     return parseFloat(getDisplayOutputAsString());
// }

// const setValue = (valueString) => {
//     if (valueString[valueString.length - 1] === '.') {
//         displayOutput.textContent += '.'
//         return;
//     }
//     displayOutput.textContent = parseFloat(valueString).toLocaleString();
// }

// // For each number button clicked ==> Update the display output. 
// const numberClick = (numString) => {
//     const displayString = getDisplayOutputAsString();

//     if (displayString === '0') {
//         setValue(numString);
//     } else {
//         setValue(displayString + numString);
//     }
// }

// // Iterate through number Array & add a click event to each number button 
// for (let i = 0; i < numberArray.length; i++) {
//     const number = numberArray[i];
//     console.log(number);
//     number.addEventListener('click', () => {
//         numberClick(i.toString());
//     })
// }

// decBtn.addEventListener('click', () => {
//     const displayString = getDisplayOutputAsString();

//     if (!displayString.includes('.')) {
//         setValue(displayString + '.');
//     }
// })



// Making a Calculator 


// Turn button inputs from strings to integers.


/* Functions needed 

1. Function that will target the AC Button and when clicked will clear the output field.

2. Function that will add a divide operator to equation

3. Function that will add the numbers in the equation together

4. "" "" Subtract the numbers

5. "" "" Multiply the numbers together 

*/