import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import App from '../app';
import SearchBar from '../../containers/searchBar/SearchBar';

describe('<App/>', () => {
  it('Should render a searchBar component', () =>{
    const wrapper = shallow(<App/>);
    expect(wrapper.find(SearchBar)).to.have.length(1);
  });
});