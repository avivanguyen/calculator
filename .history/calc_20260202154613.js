let calculation = '';

function updateDisplay() {
  document.getElementById('display').innerText = calculation;
}

//NUMBERS BTN
function addOne() {
  calculation += '1';
  console.log(`${calculation}`);
  updateDisplay();
}

function addTwo() {
  calculation += '2';
  console.log(`${calculation}`);
  updateDisplay();
}

function addThree() {
  calculation += '3';
  console.log(`${calculation}`);
  updateDisplay();
}

function addFour() {
  calculation += '4';
  console.log(`${calculation}`);
  updateDisplay();
}

function addFive() {
  calculation += '5';
  console.log(`${calculation}`);
  updateDisplay();
}

function addSix() {
  calculation += '6';
  console.log(`${calculation}`);
  updateDisplay();
}

function addSeven() {
  calculation += '7';
  console.log(`${calculation}`);
  updateDisplay();
}

function addEight() {
  calculation += '8';
  console.log(`${calculation}`);
  updateDisplay();
}

function addNine() {
  calculation += '9';
  console.log(`${calculation}`);
  updateDisplay();
}

function addZero() {
  calculation += '0';
  console.log(`${calculation}`)
  updateDisplay
}

//SYMBOLS BTN
function plus() {
  calculation += ' + ';
  console.log(`${calculation}`);
  updateDisplay();
}

function minus() {
  calculation += ' - ';
  console.log(`${calculation}`);
  updateDisplay();
}

function multiply() {
  calculation += ' * ';
  console.log(`${calculation}`);
  updateDisplay();
}

function divide() {
  calculation += ' / ';
  console.log(`${calculation}`);
  updateDisplay();
}

function equals() {
  calculation = eval(calculation);
  console.log(`${calculation}`);
  updateDisplay();
}

function decimal() {
  calculation += '.';
  console.log(`${calculation}`);
  updateDisplay();
}

function clearCalc() {
  calculation = '';
  console.log('Cleared');
  console.log(`${calculation}`);
  updateDisplay();
}