import React from 'react';
import { shallow } from 'enzyme';
import { NewPasswordView } from './index';

const response = {
  errors: {},
};
it('render a label', () => {
  const wrapper = shallow(
    <NewPasswordView response={response} />,
);
  expect(wrapper.length).toBe(1);
});
