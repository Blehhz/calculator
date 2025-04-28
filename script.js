const buttonValues = [
  "AC", "+/−", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "=",
];

const functionButtons = ["AC", "+/−", "%"];
const operatorButtons = ["÷", "×", "−", "+", "="];

const display = document.getElementById("display");

let A = 0;
let B = null;
let operator = null;

function clearAll() {
  A = 0;
  B = null;
  operator = null;
}

for (let i = 0; i < buttonValues.length; i++) {
  //<button>value</button>
  let value = buttonValues[i];
  let button = document.createElement("button");
  button.innerText = value;

  //styling button colors
  if (value == "0") {
    button.style.gridColumn = "span 2";
    button.style.width = "94%";
    button.style.textAlign = "left";
    button.style.paddingLeft = "30px";
  }

  if (operatorButtons.includes(value)) {
    button.style.backgroundColor = "#FF9500";
  } else if (functionButtons.includes(value)) {
    button.style.backgroundColor = "#D4D4D2";
    button.style.color = "#000000";
  }

  //process button clicks
  button.addEventListener("click", function () {
    if (operatorButtons.includes(value)) {

      if (value == "=") {
        if (A != null) {
          B = display.value;
          let numA = Number(A);
          let numB = Number(B);

          if (operator == "÷") {
            display.value = numA / numB;
          }
          else if (operator == "×") {
            display.value = numA * numB;
          }
          else if (operator == "−") {
            display.value = numA - numB;
          }
          else if (operator == "+") {
            display.value = numA + numB;
          }
          clearAll();
        }
      }
      else {
        operator = value;
        A = display.value;
        display.value = '';
      }
    }
    else if (functionButtons.includes(value)) {

      if (value == "AC") {
        clearAll();
        display.value = '';
      }
      else if (value == "+/−") {
        if (display.value != '' && display.value != '0') {
          if (display.value[0] == '-') {
            display.value = display.value.slice(1);
          } else {
            display.value = '-' + display.value;
          }
        }
      }
      else if (value == "%") {
        display.value = Number(display.value) / 100;
      }
    }
    else {
      
      if (value == ".") {
        if (display.value != '' && !display.value.includes(value)) {
          display.value += value;
        }
      }
      else if (display.value == "0") {
        display.value = value;
      }
      else {
        display.value += value;
      }
    }
  });

  document.getElementById("buttons").appendChild(button);
}
