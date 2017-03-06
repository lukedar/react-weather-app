import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/searchBar/SearchBar';
import WeatherCard from '../containers/weatherCard/weatherCard';
import { AppBar } from 'material-ui';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppBar
         className={styles.appBar}
         title='Weather App'
         showMenuIconButton={false}/>
        <div className={styles.wrapper}>
          <h2>Search by city</h2>
          <SearchBar />
          <WeatherCard />
        </div>
      </div>
    );
  }
}
