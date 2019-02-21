import React from 'react';
import { shallow } from 'enzyme';
import ResetPasswordView from './index';

const response = {
  errors: {},
};
it('render a label', () => {
  const wrapper = shallow(
    <ResetPasswordView response={response} />,
  );
  expect(wrapper.length).toBe(1);
});
