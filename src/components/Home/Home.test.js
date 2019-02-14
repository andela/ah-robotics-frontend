import React from 'react';
import HomeComponent from '.';

it('app should render Home page', () => {
  const wrapper = shallow(<HomeComponent />);
  expect(wrapper.length).toBe(1);
});
