const buttons = document.querySelectorAll('.button'); 
const display = document.querySelector('#display-content');
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
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
        return num1 * num2;
        break;
        case '/':
            return num1 / num2;
            break;
        default:
            return "Invalid operator";
    }
}

//For each button, add click event listener. 
buttons.forEach(button => {
    button.addEventListener("click", event =>{
        display.textContent += event.target.textContent;
    });
});
