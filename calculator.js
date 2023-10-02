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
    if (operator == null) return;
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
    calcOperator = null;
}

function changeDisplay() {
    tempDisplay = Number(((Number(displayValue)).toFixed(6)).toString());
    displayText.textContent = tempDisplay;
}

function resetDisplay() {
    displayValue = '';
    displayText.textContent = '';
    resetToggle = false;
}

function clearInput() {
    calcOperator = null;
    calcNum1 = '';
    calcNum2 = '';
    displayValue = '';
    displayText.textContent = '0';
    resetToggle = false;
}

function backSpace() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue.endsWith ('.')) displayValue = displayValue.slice(0, -1);
    changeDisplay();
}

function numButtonClick(input) {
    if (resetToggle == true) resetDisplay();
    if (displayValue.includes('.') && input == '.') return;
    displayValue += input;
    if (displayValue == '.') return;
    changeDisplay();  
}

function operatorClick(operatorInput) {
    if (calcOperator != null && resetToggle == false) {
        if (calcOperator == '/' && Number(displayValue) == 0) {
            alert("You can't divide by 0! Resetting calculator")
            clearInput();
            return;
        }
        else {
            calcNum1 = Number(displayValue);
            displayValue = operate(calcNum2, calcNum1, calcOperator);
            displayValue = displayValue.toString();
            console.log(typeof displayValue);
            changeDisplay();
            calcOperator = null;
        }        
    }
    calcNum2 = Number(displayValue);
    calcOperator = operatorInput;
    resetToggle = true;
}

let calcNum1 = '';
let calcNum2 = '';
let calcOperator = null;
let displayValue = '';
let resetToggle = false;

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
const btnDecimal = document.querySelector('#btn_decimal');
const btnBack = document.querySelector('#btn_backspace');

const displayText = document.querySelector('.display_text');

btn7.addEventListener('click', () => {
    numButtonClick('7');
});

btn8.addEventListener('click', () => {
    numButtonClick('8');
});

btn9.addEventListener('click', () => {
    numButtonClick('9'); 
});

btn4.addEventListener('click', () => {
    numButtonClick('4');
});

btn5.addEventListener('click', () => {
    numButtonClick('5'); 
});

btn6.addEventListener('click', () => {
    numButtonClick('6'); 
});

btn1.addEventListener('click', () => {
    numButtonClick('1'); 
});

btn2.addEventListener('click', () => {
    numButtonClick('2');
});

btn3.addEventListener('click', () => {
    numButtonClick('3'); 
});

btn0.addEventListener('click', () => {
    numButtonClick('0'); 
});

btnDecimal.addEventListener('click', () => {
    numButtonClick('.');
});

btnPlus.addEventListener('click', () => {
    operatorClick('+');
});

btnMinus.addEventListener('click', () => {
    operatorClick('-');
});

btnTimes.addEventListener('click', () => {
    operatorClick('*');
});

btnDivide.addEventListener('click', () => {
    operatorClick('/');
});

btnClear.addEventListener('click', () => {
    clearInput();
});

btnBack.addEventListener('click', () => {
    backSpace();
});

btnEquals.addEventListener('click', () => {
    operatorClick();
});

