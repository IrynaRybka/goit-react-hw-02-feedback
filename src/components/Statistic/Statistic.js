import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <h2>Statistic</h2>
    <ul>
      <li>
        Good:
        <span>{good}</span>
      </li>
      <li>
        Netural:
        <span>{neutral}</span>
      </li>
      <li>
        Bad:
        <span>{bad}</span>
      </li>
      <li>
        Total:
        <span>{total}</span>
      </li>
      <li>
        Positive feedback:
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistic;