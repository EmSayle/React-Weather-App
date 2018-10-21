import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <span>
    <div className="forecast-summary__date">{props.date}</div>,
    <div className="forecast-summary__temperature">{props.temperature}</div>,
    <div className="forecast-summary__description">{props.description}</div>,
    <div className="forecast-summary__icon">{props.icon}</div>
  </span>
);

// ForecastSummary.propTypes = {
//   date: PropTypes.number.isRequired,
//   temperature: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
// };

export default ForecastSummary;
