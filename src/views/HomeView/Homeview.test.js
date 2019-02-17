import React from 'react';
import HomeView from '../../components/Home';


import Home from './index';
import { shallow } from 'enzyme';

const response ={
  errors:{}
};
it('render a label', () => {
  const wrapper = shallow(
    <HomeView response={response}/>);
  expect(wrapper.length).toBe(1);
});
