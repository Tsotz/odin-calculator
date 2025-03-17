const add = function (num1, num2) { return num1 + num2;};

const subtract = function (num1, num2) {return num1 - num2;};

const multiply = function (num1, num2) {return num1 * num2;};

const divide = function (num1, num2) {return num1 / num2;};

let currentInput = "";
let firstNum = null;
let secondNum = null;
let operator = null;
const display = document.querySelector("#display");
display.style.backgroundColor = "black";
display.style.color = "white";



const buttons = document.querySelectorAll("button")



buttons.forEach(button => {
    button.addEventListener("click", () => {

        const pressedButton = button.textContent;

        if (!isNaN(pressedButton))
        {
            currentInput += pressedButton.toString();
            displayF(currentInput);
        } 
        
        if (["+","-","*","/"].includes(pressedButton))
        {
            if (firstNum === null)
            {firstNum = parseFloat(currentInput);}
            else if (currentInput !== "")
            {
            
                secondNum = parseFloat(currentInput);
                firstNum = operate(operator, firstNum, secondNum);
                displayF(firstNum);
            
            }
            operator = pressedButton;
            currentInput = "";
        }   

        if (pressedButton === "=")
        {

            if (firstNum !== null && operator !== null)
            
            {
            
            secondNum = parseFloat(currentInput);
            let result = operate(operator, firstNum, secondNum);
            displayF(result);
            firstNum = result;
            currentInput = "";
            operator = null;
            }

        }  
        
        if (pressedButton === "CLEAR") 
        {
                firstNum = null;
                secondNum = null;
                operator = null;
                currentInput = "";
                displayF("0");
        }

        if (pressedButton === ".")
        
        {

            if (!currentInput.includes("."))
                {

                    currentInput += ".";
                    displayF(currentInput);

                }        

        }

    }); 
});



const operate = function (operator, firstNum, secondNum) {

    if (operator === "+") {return add(firstNum, secondNum)};
    if (operator === "-") {return subtract(firstNum, secondNum)};
    if (operator === "*") {return multiply(firstNum, secondNum)};
    if (operator === "/" && secondNum === 0) {return "ERROR! Division by 0"};
    if (operator === "/") {return divide(firstNum, secondNum)};

}




const displayF = function(input) {display.textContent = input};


console.log(add(2,9));
console.log(subtract(2,9));
console.log(multiply(2,9));
console.log(divide(2,9))