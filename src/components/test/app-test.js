import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import App from '../app';
import SearchBar from '../../containers/searchBar/SearchBar';
import WeatherCard from '../../containers/weatherCard/weatherCard';

describe('<App/> compoment', () => {
  it('Should render a searchBar component', () =>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find(SearchBar)).to.have.length(1);
  });

  it('Should render a weatherCard component', () =>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find(WeatherCard)).to.have.length(1);
  });
});
