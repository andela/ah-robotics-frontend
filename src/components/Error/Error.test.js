import React from 'react';
import Error from '.';

it('app should render unknown page error message if page not there', () => {
  const wrapper = shallow(<Error />);
  expect(wrapper.length).toBe(1);
});
