import React from 'react';
import ResetPasswordComponent from './index';
import { shallow } from 'enzyme';

test('render a label', () => {
  const wrapper = shallow(
    <ResetPasswordComponent />);
  expect(wrapper).toMatchSnapshot();
});
