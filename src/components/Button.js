import React from 'react';
import PropTypes from 'prop-types';

const operators = ['÷', 'x', '+', '-', '='];

const btnType = name => (name === '0' ? 'large-btn' : 'btn');

const btnBg = name => (operators.includes(name) ? 'orange-bg' : 'lg-bg');

const Button = ({ name }) => (
  <button className={`${btnType(name)} ${btnBg(name)}`} type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
