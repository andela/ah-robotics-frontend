import React from 'react';
import NewPasswordView from './index';
import { shallow } from 'enzyme';

const response ={
  errors:{}
};
it('render a label', () => {
  const wrapper = shallow(
    <NewPasswordView response={response}/>);
  expect(wrapper.length).toBe(1);
});

