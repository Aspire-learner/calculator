const display = document.getElementById('display');

function appendValue(val) {
  if (display.textContent === '0' && val !== '.') {
    display.textContent = val;
  } else {
    display.textContent += val;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function backspace() {
  let text = display.textContent;
  if (text.length > 1) {
    display.textContent = text.slice(0, -1);
  } else {
    display.textContent = '0';
  }
}

function calculateResult() {
  try {
    let expression = display.textContent.replace('%', '/100');
    let result = eval(expression);
    display.textContent = result;
  } catch {
    display.textContent = 'Error';
    setTimeout(clearDisplay, 1500);
  }
}
