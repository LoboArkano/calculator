import React from 'react';
import PropTypes from 'prop-types';

const operators = ['÷', 'x', '+', '-', '='];

const Button = ({ name }) => (
  <button className={`${name === '0' ? 'large-btn' : 'btn'} ${operators.includes(name) ? 'orange-bg' : 'lg-bg'}`} type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
