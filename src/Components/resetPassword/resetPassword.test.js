import React from 'react';
import ResetPasswordComponent from './index';
import { shallow } from 'enzyme';

const response ={
  errors:{}
};
it('render a label', () => {
  const wrapper = shallow(
    <ResetPasswordComponent response={response}/>);
  expect(wrapper.length).toBe(1);
});
