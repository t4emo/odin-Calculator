const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

let firstNumber = null;
let operator = null;
let shouldReset = false;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "OOPS impossible";
  return a / b;
}

function operate(op, a, b) {
  if (op === "+") return add(a, b);
  if (op === "-") return subtract(a, b);
  if (op === "*") return multiply(a, b);
  if (op === "÷") return divide(a, b);
}

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent === "0" || shouldReset) {
      display.textContent = button.textContent;
      shouldReset = false;
    } else {
      display.textContent += button.textContent;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (firstNumber !== null && operator !== null && !shouldReset) {
      const result = operate(operator, Number(firstNumber), Number(display.textContent));
      display.textContent = result;
      firstNumber = String(result);
    } else {
      firstNumber = display.textContent;
    }
    operator = button.textContent;
    shouldReset = true;
  });
});

equalsButton.addEventListener("click", () => {
  if (firstNumber === null || operator === null) return;
  const secondNumber = display.textContent;
  const result = operate(operator, Number(firstNumber), Number(secondNumber));
  display.textContent = result;
  firstNumber = null;
  operator = null;
  shouldReset = true;
});

clearButton.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = null;
  operator = null;
});
