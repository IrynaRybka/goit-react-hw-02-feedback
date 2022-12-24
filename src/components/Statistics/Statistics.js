
import PropTypes from 'prop-types';
import React from "react";
import css from "./statistics.module.css";


const Statistics = ({props}) => {
    return (
   
      <ul className={css.stat_list}>
      { props.map(prop => ( <li key={prop.id} className={css.item}>
    <span className={css.label}>{prop.label}</span>
    <span className="percentage">{prop.percentage}%</span>
  </li>))}
      </ul>

  );
};

Statistics.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
  };

export default Statistics;
