import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../../actions/index';

class WeatherSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {location: 'London'};
  }

  componentWillMount() {
    this.props.fetchWeather(this.state.location);
  }

  onChange = (event) => {
    // Update input value.
    this.setState({location: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.location);
    // Reset location.
    this.setState({location: ''});
  }

  render() {
    return (
      <form className='weatherForm' onSubmit={this.onSubmit}>
        <input
          className='weatherLocationInput'
          placeholder={this.state.location}
          value={this.state.location}
          onChange={this.onChange} />
          <button className='weatherSubmit' type="submit">Submit</button>
      </form>
    );
  }
}

WeatherSearchBar.propTypes = {
  fetchWeather: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(WeatherSearchBar);

export const WeatherSearchBarTest = WeatherSearchBar;
