const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentValue = '';
let previousValue = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'C') {
      currentValue = '';
      previousValue = '';
      operator = '';
      result.value = '';
    }  
    else if (buttonText === '=') {
      const display = evaluateExpression();
      result.value = display;
      previousValue = display;
      currentValue = '';
    } else if (['+', '-', '*', '/', '%'].includes(buttonText)) {
      operator = buttonText;
      previousValue = currentValue;
      currentValue = '';
      result.value = previousValue+''+buttonText;
    } else {
      currentValue += buttonText;
      result.value = currentValue;
    }
  });
});

document.addEventListener('keydown', event => {
  const keyValue = event.key;

  if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(keyValue)) {
    currentValue += keyValue;
    result.value = currentValue;
} else if (['+', '-', '*', '/', '%'].includes(keyValue)) {
    operator += keyValue;
    previousValue = currentValue;
    currentValue = '';
    result.value =currentValue;
} else if (keyValue === 'Enter') {
    const display = evaluateExpression();
    display.value = display;
    previousValue = display;
    currentValue = '';
} else if (keyValue === 'Backspace') {
  result.value=result.value.slice(0, -1);
    currentValue='';
} else {
    alert('Only numbers are allowed');
}
});

function evaluateExpression() {
  let display;

  switch (operator) {
    case '+':
      display = parseFloat(previousValue) + parseFloat(currentValue);
      break;
    case '-':
      display = parseFloat(previousValue) - parseFloat(currentValue);
      break;
    case '*':
      display = parseFloat(previousValue) * parseFloat(currentValue);
      break;
    case '/':
      display = parseFloat(previousValue) / parseFloat(currentValue);
      break;
    case '%':
      display = parseFloat(previousValue) % parseFloat(currentValue);
      break;
    default:
      display = currentValue;
  }

  return display;
}