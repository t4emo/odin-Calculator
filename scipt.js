const display = document.querySelector(".display");
const digitButtons = document.querySelectorAll(".digit");

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
  if (b === 0) {
    return "OOPS impossible";
  }
  return a / b;
}

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = button.textContent; // remplace le 0
    } else {
      display.textContent += button.textContent; // accumule
    }
  });
});
