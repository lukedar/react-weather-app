import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log('this.props.weatherData', this.props.weatherData);

    return (
      <div>
          <h1>CARDS HERE</h1>
      </div>
    );
  }
}

function mapStateToProps({weather}) {
  return { 
    weatherData: weather 
  };
}

export default connect(mapStateToProps)(WeatherCard);
