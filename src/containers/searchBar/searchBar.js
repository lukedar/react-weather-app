import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.fetchWeather(this.state.location);
  }

  render() {
    return (
      <form>
        <h1>Search bar here</h1>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
