import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(() => ({
      total: newState.total,
      next: newState.next,
      operation: newState.operation,
    }));
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
