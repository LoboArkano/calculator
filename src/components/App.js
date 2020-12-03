/* eslint-disable no-unused-vars */
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
    this.handleClick.bind(this);
  }

  handleClick(name) {
    const result = calculate(this.state, name);
    this.setState(() => ({
      total: result.total,
      next: result.next,
      operation: result.operation,
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
