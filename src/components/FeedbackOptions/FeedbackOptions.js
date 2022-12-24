import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
    {options.map(option => (
      <li key={option}>
        <button
          type="button"
          value={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
  
  )
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;