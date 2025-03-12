const display = document.getElementById('display');
let expression = '';

function appendValue(value) {
  if (value === '⌫') {
    expression = expression.slice(0, -1);
  } else {
    if (/[+\-*/]/.test(value) && /[+\-*/]$/.test(expression)) {
      return;
    }
    expression += value;
  }
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(expression);
    if (!isFinite(result)) {
      display.value = 'Error';
    } else {
      display.value = result;
      expression = result.toString();
    }
  } catch {
    display.value = 'Error';
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    appendValue('⌫');
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
