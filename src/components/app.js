import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/searchBar/SearchBar';
import WeatherCard from '../containers/weatherCard/weatherCard';
import { AppBar } from 'material-ui';

const style = {
  margin: '20px'
};

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
         title="Weather App"
         showMenuIconButton={false} />
          <div style={style}>
            <h2>Search by city</h2>
            <SearchBar />
            <WeatherCard />
          </div>
        </div>
    );
  }
}
