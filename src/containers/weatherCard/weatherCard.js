import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Card, CardHeader, CardText} from 'material-ui';

const style = {
  marginBottom: '20px'
};

class WeatherCard extends Component {
  getAvarageWeatherData = (dataType, items) => {
    // Return avarage with no decimal points.
    const output = dataType.reduce((a, b) => a + b) / items;
    return Math.round(output);
  }

  renderWeatherCard = (cityData) => {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const wind = cityData.list.map(weather => weather.wind.speed);
    const pressure = cityData.list.map(weather => weather.main.pressure);

    // Get Averages over 5 days.
    const avarageTempature = this.getAvarageWeatherData(temps, temps.length);
    const avarageWind = this.getAvarageWeatherData(wind, wind.length);
    const avaragePressure = this.getAvarageWeatherData(pressure, pressure.length);

    return (
      <Card key={name} style={style}>
        <CardHeader
          title={<h2>{name}</h2>}
          subtitle="Average 5 day forecast:"
        />
        <CardText>
          <h4>Tempature: {avarageTempature} °c</h4>
          <h4>Wind Speed: {avarageWind} mph </h4>
          <h4>Pressure: {avaragePressure} mb </h4>
        </CardText>
      </Card>
      );
  }

  render() {
    return (
      <div>
        {this.props.weatherData.weather.map(this.renderWeatherCard)}
      </div>
    );
  }
}

WeatherCard.propTypes = {
  weatherData: PropTypes.object
};

function mapStateToProps(weather) {
  return {
    weatherData: weather
  };
}

export default connect(mapStateToProps)(WeatherCard);
