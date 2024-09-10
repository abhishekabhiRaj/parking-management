// Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, ariaLabel }) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default Button; // Ensure default export
