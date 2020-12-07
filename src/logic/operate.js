import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const number1 = Big(numberOne);
  const number2 = Big(numberTwo);
  let result = null;

  if (numberOne === null || numberTwo === null) {
    result = 'Syntax ERROR';
  } else {
    switch (operation) {
      case 'x':
        result = number1.times(number2);
        break;
      case '÷':
        if (numberTwo === 0) {
          result = 'Math ERROR';
        } else {
          result = number1.div(number2);
        }
        break;
      case '+':
        result = number1.plus(number2);
        break;
      case '-':
        result = number1.minus(number2);
        break;
      case '%':
        result = (number2.div(100)).times(number1);
        break;
      default:
        result = 0;
        break;
    }
  }

  return String(result);
};

export default operate;
