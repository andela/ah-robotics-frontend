import React from 'react';
import HomeView from '.';

it('app should render Home page', () => {
  const wrapper = shallow(<HomeView />);
  expect(wrapper.length).toBe(1);
});
it('app should match the snapshop', () => {
  const wrapper = shallow(<HomeView />);
    expect(wrapper).toMatchSnapshot();
});
