import React, {Component} from 'react';
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

  onSubmit = (event) =>  {
    event.preventDefault();
    this.props.fetchWeather(this.state.location);
    // Reset location.
    this.setState({location: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder={this.state.location}
          value={this.state.location}
          onChange={this.onChange} />
          <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(WeatherSearchBar);
