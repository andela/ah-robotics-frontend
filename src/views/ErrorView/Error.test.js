import React from 'react';
import Error from '.';

it('app should render unknown page error message', () => {
  const wrapper = shallow(<Error />);
  expect(wrapper.length).toBe(1);
});
