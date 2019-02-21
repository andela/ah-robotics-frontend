import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordComponent from './index';

const response = {
  errors: {},
};
it('render a label', () => {
  const onChange = () => ({});
  const handleSubmit = () => ({});

  const wrapper = shallow(
    <ResetPasswordComponent
      onChange={onChange}
      handleSubmit={handleSubmit}
      response={response}
    />,
);
  expect(wrapper.length).toBe(1);
});
