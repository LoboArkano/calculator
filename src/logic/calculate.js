import operate from './operate';

const calculate = (calculate, buttonName) => {
  let { total, next, operation } = calculate;
  const boolTotal = Number.isNaN(parseFloat(total));
  const boolNext = Number.isNaN(parseFloat(next));
  const boolBtnName = Number.isNaN(parseFloat(buttonName));
  const operators = ['x', '÷', '+', '-', '%'];

  if (total === 'Syntax ERROR' || total === 'Math ERROR') {
    total = null;
  }

  if (boolBtnName && !operators.includes(buttonName)) {
    switch (buttonName) {
      case '+/-':
        if (!boolTotal) {
          total = operate(total, -1, 'x');
        }
        if (!boolNext) {
          next = operate(next, -1, 'x');
        }
        break;
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;
      case '=':
        if (!boolTotal && !boolNext) {
          total = operate(parseFloat(total), parseFloat(next), operation);
        } else if (boolNext && operation != null) {
          total = 'Syntax ERROR';
        }
        next = null;
        operation = null;
        break;
      case '.':
        if (total == null) {
          total = '0.';
        } else if (operation == null && !total.includes('.')) {
          total += buttonName;
        } else if (operation != null && boolNext && !boolTotal) {
          next = '0.';
        } else if (operation != null && !next.includes('.') && !boolNext) {
          next += buttonName;
        }
        break;
      default:
        break;
    }
  } else if (operation == null && !operators.includes(buttonName)) {
    if (!boolTotal) {
      total += buttonName;
    } else {
      total = buttonName;
    }
  } else if (!boolTotal && operation != null && !operators.includes(buttonName)) {
    if (!boolNext) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  } else if (!boolTotal) {
    operation = buttonName;
  }

  return { total, next, operation };
};

export default calculate;
