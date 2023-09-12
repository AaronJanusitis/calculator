function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if(operator == '+') {
        return add(num1, num2);
    }
    else if(operator == '-') {
        return subtract(num1, num2);
    }
    else if(operator == '*') {
        return multiply(num1, num2);
    }
    else if(operator == '/') {
        return divide(num1, num2);
    }
    else {
        return 'Invalid operator';
    }
}

function changeDisplay() {
    displayText.textContent = displayValue;
}

function clearInput() {
    calcOperator = '';
    calcNum1 = '';
    calcNum2 = '';
    displayValue = '';
}

let calcNum1 = '';
let calcNum2 = '';
let calcOperator = '';
let displayValue = '';

const btn7 = document.querySelector('#btn_7');
const btn8 = document.querySelector('#btn_8');
const btn9 = document.querySelector('#btn_9');
const btn4 = document.querySelector('#btn_4');
const btn5 = document.querySelector('#btn_5');
const btn6 = document.querySelector('#btn_6');
const btn1 = document.querySelector('#btn_1');
const btn2 = document.querySelector('#btn_2');
const btn3 = document.querySelector('#btn_3');
const btn0 = document.querySelector('#btn_0');
const btnPlus = document.querySelector('#btn_plus');
const btnMinus = document.querySelector('#btn_minus');
const btnTimes = document.querySelector('#btn_times');
const btnDivide = document.querySelector('#btn_divide');
const btnClear = document.querySelector('#btn_clear');
const btnEquals = document.querySelector('#btn_equals');
const displayText = document.querySelector('.display_text');

btn7.addEventListener('click', () => {
    displayValue += '7';
    changeDisplay();  
});

btn8.addEventListener('click', () => {
    displayValue += '8';
    changeDisplay();  
});

btn9.addEventListener('click', () => {
    displayValue += '9';
    changeDisplay();  
});

btn4.addEventListener('click', () => {
    displayValue += '4';
    changeDisplay();  
});

btn5.addEventListener('click', () => {
    displayValue += '5';
    changeDisplay();  
});

btn6.addEventListener('click', () => {
    displayValue += '6';
    changeDisplay();  
});

btn1.addEventListener('click', () => {
    displayValue += '1';
    changeDisplay();  
});

btn2.addEventListener('click', () => {
    displayValue += '2';
    changeDisplay();  
});

btn3.addEventListener('click', () => {
    displayValue += '3';
    changeDisplay();  
});

btn0.addEventListener('click', () => {
    displayValue += '0';
    changeDisplay();  
});

btnPlus.addEventListener('click', () => {
    calcOperator = '+';
    calcNum1 = Number(displayValue);
    displayValue = '';
    changeDisplay(); 

});

btnMinus.addEventListener('click', () => {
    calcOperator = '-';
    calcNum1 = Number(displayValue);
    displayValue = '';
    changeDisplay();
});

btnTimes.addEventListener('click', () => {
    calcOperator = '*';
    calcNum1 = Number(displayValue);
    displayValue = '';
    changeDisplay();
});

btnDivide.addEventListener('click', () => {
    calcOperator = '/';
    calcNum1 = Number(displayValue);
    displayValue = '';
    changeDisplay();
});

btnClear.addEventListener('click', () => {
    clearInput();
    changeDisplay();  
});

btnEquals.addEventListener('click', () => {
    calcNum2 = Number(displayValue);
    displayValue = operate(calcNum1, calcNum2, calcOperator);
    changeDisplay();
});