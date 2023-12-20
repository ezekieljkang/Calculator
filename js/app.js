const input = document.querySelector("#output");
const clearInput = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const calculate = document.querySelector(".result");

let firstNum = "";
let secondNum = "";
let operator = "";

// when user clicks on operators store whatever is displayed, the operator clicked, and removes the display
operators.forEach(button => {
  button.addEventListener('click', operand)
  });
function operand() {
  firstNum = parseFloat(input.value);
  console.log(firstNum);
  input.value = "";
  operator = this.dataset.selection;
}

// removes text from input field when clicked
clearInput.addEventListener("click", removeText);
function removeText() {
  input.value = "";
  firstNum = "";
  secondNum = "";
  operator = "";
}

// when user clicks on '=' it grabs whatever is displayed
calculate.addEventListener("click", function() {
  secondNum = parseFloat(input.value);
  console.log(secondNum);
  let finalResult = operate(firstNum, secondNum, operator)
  console.log(finalResult);
  console.log(operator);
  input.value = finalResult;
});

// grabs buttons and displays button value when clicked
numbers.forEach(button => {
  button.addEventListener('click', btnClick)
  });
function btnClick() {
  input.value += this.dataset.selection;
}

// finds which operator to use and runs calculation on numbers based on operator found
function operate(a, b, operation) {
  var operators = {
    '+': function (a, b) { return a + b }, '-': function (a, b) { return a - b }, '*': function (a, b) { return a * b }, '/': function (a, b) { return a / b },
  }
  return operation in operators ? operators[operation](a, b) : NaN
};
console.log(operate(5, 7, '+'));