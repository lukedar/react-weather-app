import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

import * as actions from '../../../actions';
import WeatherSearchBar from '../searchBar';
import {WeatherSearchBarTest as SearchBar} from '../searchBar';

describe('WeatherSearchBar', () => {
  const mockStore = configureMockStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore({
      fetchWeather: () => {}
    });
  });

  it('Should render a form with Input and submit button', () => {
    const componentWrapper = mount(
      <Provider store={store}>
        <WeatherSearchBar/>
      </Provider>
    );

    expect(componentWrapper.find('form.weatherForm').length).to.equal(1);
    expect(componentWrapper.find('input.weatherLocationInput').length).to.equal(1);
    expect(componentWrapper.find('button.weatherSubmit').length).to.equal(1);
  });
  
  it('Should call the fetch weather action creator when mounting', () => {
    const spy = sinon.spy(actions, 'fetchWeather');

    mount(<SearchBar fetchWeather={actions.fetchWeather}/>);

    expect(spy.callCount).to.equal(1);
  });
});
