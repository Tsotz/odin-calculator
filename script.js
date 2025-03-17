const add = function (num1, num2) { return num1 + num2;};

const subtract = function (num1, num2) {return num1 - num2;};

const multiply = function (num1, num2) {return num1 * num2;};

const divide = function (num1, num2) {return num1 / num2;};

let firstNum ;
let secondNum ;
let operator ;


const operate = function (operator, firstNum, secondNum) {

    return operator(firstNum, secondNum);

}

const buttons = document.querySelectorAll("button")

let pressedButton;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        
       pressedButton =  displayF(button.textContent);
        return pressedButton;
    }); 
});





const display = document.querySelector("#display");
display.style.backgroundColor = "black";
display.style.color = "white";

const displayF = function(input) {display.textContent = input};


console.log(add(2,9));
console.log(subtract(2,9));
console.log(multiply(2,9));
console.log(divide(2,9))