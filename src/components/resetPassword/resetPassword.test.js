import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordComponent from './index';

const response = {
  errors: {},
};
it('render a label', () => {
  const wrapper = shallow(
    <ResetPasswordComponent response={response} />,
);
  expect(wrapper.length).toBe(1);
});
