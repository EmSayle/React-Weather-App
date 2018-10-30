import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  render() {
    const selectedForecast = this.props.forecasts.find(forecast => forecast.date ===
      this.state.selectedDate);
    return (
      <span>
        <div className="forecast">
          <LocationDetails
            city={this.props.location.city}
            country={this.props.location.country}
          />
          <ForecastSummaries forecasts={this.props.forecasts} />
          <ForecastDetails forecast={selectedForecast} />
        </div>
        <div>{this.state.memo}</div>
      </span>
    );
  }
}

// const App = props => console.log(props) || (
//   <div className="forecast">
//     <LocationDetails
//       city={props.location.city}
//       country={props.location.country}
//     />
//     <ForecastSummaries
//       forecasts={props.forecasts}
//     />
//     <ForecastDetails
//       forecast={props.forecasts[0]}
//     />
//   </div>
// );

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
