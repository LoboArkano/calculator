import operate from './operate';

const calculate = (calculate, buttonName) => {
  let { total, next, operation } = calculate;

  switch (buttonName) {
    case '+/-':
      total = operate(total, -1, 'x');
      next = operate(next, -1, 'x');
      break;
    case 'AC':
      total = 0;
      next = 0;
      operation = '';
      break;
    case '=':
      total = operate(total, next, operation);
      next = 0;
      operation = '';
      break;
    default:
      break;
  }

  return { total, next, operation };
};

export default calculate;
