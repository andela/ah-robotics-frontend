import React from 'react';
import { shallow } from 'enzyme';
import HomeView from '../../components/Home';


import Home from './index';

const response = {
  errors: {},
};
it('render a label', () => {
  const wrapper = shallow(
    <HomeView response={response} />,
);
  expect(wrapper.length).toBe(1);
});
