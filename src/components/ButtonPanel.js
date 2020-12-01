import React from 'react';
import Button from './Button';
import randomKey from '../functions/random';

const buttons = {
  line1: ['AC', '+/-', '%', '÷'],
  line2: ['7', '8', '9', 'x'],
  line3: ['4', '5', '6', '-'],
  line4: ['1', '2', '3', '+'],
  line5: ['0', '.', '='],
};

const ButtonPanel = () => (
  Object.keys(buttons).map(line => (
    <div className="button_panel" key={randomKey()}>
      {
        buttons[line].map(item => (
          <Button key={randomKey()} name={item} />
        ))
      }
    </div>
  ))
);

export default ButtonPanel;
