import React, { useCallback, useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = useCallback(buttonName => {
    const newState = calculate({ total, next, operation }, buttonName);
    setTotal(newState.total);
    setNext(newState.next);
    setOperation(newState.operation);
  }, [total, next, operation]);

  return (
    <>
      <Display result={total != null ? `${total}${operation || ''}${next || ''}` : undefined} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
