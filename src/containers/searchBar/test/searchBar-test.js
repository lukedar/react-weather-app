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

  afterEach(() => {
    store = undefined;
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

  it('Should render default text as London', () => {
    const expected = 'London';
    const component = mount(<SearchBar fetchWeather={actions.fetchWeather}/>);
    const form = component.find('input.weatherLocationInput');

    expect(form.node.defaultValue).to.equal(expected);
  });

  it('Should call the fetch weather action creator when mounting and on form submission', () => {
    const spy = sinon.spy(actions, 'fetchWeather');
    const component = mount(<SearchBar fetchWeather={actions.fetchWeather}/>);
    const form = component.find('form.weatherForm');

    form.simulate('submit');
    expect(spy.callCount).to.equal(2);
  });
});
