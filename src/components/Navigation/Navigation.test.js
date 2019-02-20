import React from 'react';
import NavigationComponent from '.';

it('app should display navigation bar', () => {
  const isAuthenticated = false;
  const wrapper = shallow(<NavigationComponent isAuthenticated={isAuthenticated} />);
  expect(wrapper.length).toBe(1);
});
