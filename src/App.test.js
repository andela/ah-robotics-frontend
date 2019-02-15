import React from 'react';
import App from './App';

it('app should render unknown page error message', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.length).toBe(1);
});
