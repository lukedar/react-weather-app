import React from 'react';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import {expect} from 'chai';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { stub } from 'sinon';

import WeatherSearchBarTest from '../searchBar';

describe('WeatherSearchBar', () => {
	const mockStore = configureMockStore([thunk]);
	let store;
	
	beforeEach(() => {
    store = mockStore({
      fetchWeather: function(){},
    });
  });

	it('Should render a form with Input and submit button', () => {
		const wrapper = mount(
      <Provider store={store}>
        <WeatherSearchBarTest/>
      </Provider>
    );

		expect(wrapper.find('form.weatherForm').length).to.equal(1);
		expect(wrapper.find('input.weatherLocationInput').length).to.equal(1);
		expect(wrapper.find('button.weatherSubmit').length).to.equal(1);
	});
});



