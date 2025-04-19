let display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  if (display.innerText.length === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    const result = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}
