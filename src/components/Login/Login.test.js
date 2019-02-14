import React from 'react';
import LoginComponent from '.';

it('app should render login view page Component', () => {
  const props = {
      errors: {
        error: '',
      },
    };

  const onChange = () => ({});
  const handleSubmit = () => ({});

  const wrapper = shallow(<LoginComponent
    onChange={onChange}
    handleSubmit={handleSubmit}
    login={props}
  />);
  expect(wrapper.length).toBe(1);
});
