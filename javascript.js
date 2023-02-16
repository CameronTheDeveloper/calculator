const buttons = document.querySelectorAll('.button'); 
const displays = document.querySelectorAll('.display');
const topDisplay = document.querySelector('.display.top');
const bottDisplay = document.querySelector('.display.bott');

let op = '';
let num1 = 0;
let num2 = 0;
let result = 0;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, op, num2){

    switch (op){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

//Display the button that was clicked
function displayBtnClicked(buttonClicked){
    switch(buttonClicked){
        case 'clear':
            topDisplay.innerHTML = '';
            bottDisplay.innerHTML = '';
            op = '';
            break;
        case '+':
            num1 = parseFloat(bottDisplay.textContent);
            op = '+';
            topDisplay.textContent = ' ' + num1 + ' ' + op;
            bottDisplay.innerHTML = '';
            break;
        case '-':
            num1 = parseFloat(bottDisplay.textContent);
            op = '-';
            topDisplay.textContent = ' ' + num1 + ' ' + op;
            bottDisplay.innerHTML = '';
            break;
        case 'x':
            num1 = parseFloat(bottDisplay.textContent);
            op = 'x';
            topDisplay.textContent = ' ' + num1 + ' ' + op;
            bottDisplay.innerHTML = '';
            break;
        case '/':
            num1 = parseFloat(bottDisplay.textContent);
            op = '/';
            topDisplay.textContent = ' ' + num1 + ' ' + op;
            bottDisplay.innerHTML = '';
            break;
        case '=':
            num2 = parseFloat(bottDisplay.textContent);
            result = operate(num1, op, num2);
            topDisplay.textContent += ( ' ' + num2 + ' = ')
            bottDisplay.textContent = result;    
            op = '';   
            break;
        default:
            bottDisplay.textContent += buttonClicked;
    }
}

//For each button, add click event listener. 
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        displayBtnClicked(event.target.textContent);
    });
});
