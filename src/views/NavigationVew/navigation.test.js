import React from 'react';
import NavigationView from '.';

it('app should display navigation bar', () => {
  const wrapper = shallow(<NavigationView />);
  expect(wrapper.length).toBe(1);
});
