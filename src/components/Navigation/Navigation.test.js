import React from 'react';
import NavigationComponent from '.';

it('app should display navigation bar', () => {
  const wrapper = shallow(<NavigationComponent />);
  expect(wrapper.length).toBe(1);
});
