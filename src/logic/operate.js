import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = null;

  if (numberOne === null || numberTwo === null) {
    result = 'Syntax ERROR';
  } else {
    switch (operation) {
      case '*':
        result = Big(numberOne) * Big(numberTwo);
        break;
      case '/':
        if (numberTwo === 0) {
          result = 'Math ERROR';
        } else {
          result = Big(numberOne) / Big(numberTwo);
        }
        break;
      case '+':
        result = Big(numberOne) + Big(numberTwo);
        break;
      case '-':
        result = Big(numberOne) - Big(numberTwo);
        break;
      case '%':
        result = (Big(numberTwo) / 100) * Big(numberOne);
        break;
      default:
        result = 0;
        break;
    }
  }

  return result;
};

export default operate;
