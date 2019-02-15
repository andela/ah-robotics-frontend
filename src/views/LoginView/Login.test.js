import React from 'react';
import LoginView from '.';

it('app should render login view page', () => {
  const wrapper = shallow(<LoginView />);
  expect(wrapper.length).toBe(1);
});
