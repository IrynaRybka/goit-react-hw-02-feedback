
import PropTypes from 'prop-types';
import React from "react";

import css from "./statistics.module.css"

function SectionStatistics({ title, children }) {
    return (
        <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
      </section>
      )
    
}

SectionStatistics.propTypes = {
    title: PropTypes.string,
}



export default SectionStatistics;