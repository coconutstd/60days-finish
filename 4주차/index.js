const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const ac = document.querySelector(".ac");

let left = 0;
let right = null;
let op = "";
let opClicked = false;

function init() {
  ac.addEventListener("click", () => {
    result.innerText = "0";
    left = 0;
    right = null;
    op = "";
    opClicked = false;
  });

  numbers.forEach(function (button) {
    button.addEventListener("click", () => {
      const number = button.innerText;
      if (result.innerText === "0" || opClicked === true) {
        result.innerText = number;
      } else {
        result.innerText += number;
      }
      right = result.innerText;
      opClicked = false;
    });
  });

  operators.forEach(function (button) {
    button.addEventListener("click", () => {
      const operator = button.innerText;

      if (operator !== "=" && opClicked === true) {
        op = operator;
        return;
      }

      if (operator === "=") {
        result.innerText = calculate(left, right, op);
        left = result.innerText;
      } else {
        if (op === "" && left === 0) {
          op = operator;
          if (op === "+" || op === "÷") {
            left = result.innerText;
            opClicked = true;
            return;
          }
          if (op === "-") {
            left = result.innerText;
            op = operator;
            opClicked = true;
            return;
          }
          if (op === "×") {
            left = result.innerText;
            opClicked = true;
            return;
          }
        }
        left = calculate(left, right, op);
        op = operator;
        result.innerText = left;
      }
      console.log(left, right, op);
      opClicked = true;
    });
  });
}

function calculate(left, right, op) {
  left = parseInt(left);
  right = parseInt(right);
  switch (op) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "×":
      return left * right;
    case "÷":
      if (right !== 0) {
        return left / right;
      } else {
        result.innerText = "숫자 아님";
      }
      break;
    default:
      break;
  }
}

init();
