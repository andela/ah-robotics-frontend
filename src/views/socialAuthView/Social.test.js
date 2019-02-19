import React from 'react';

import SocialAuth from '.';
import ButtonComponent from '../../components/common/SocialButton';

function setup() {
  const social = {};
  const handleSubmit = () => ({});
  const onChange = () => ({});

  const wrapper = shallow(
    <SocialAuth handleSubmit={handleSubmit} social={social} onChange={onChange} />,
);

  return {
    wrapper,
  };
}

describe('Social View', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    expect(wrapper.find('button')).toBeDefined();
  });
  it('app should match the snapshot', () => {
    const wrapper = shallow(<SocialAuth />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('app should render social login view page', () => {
  const wrapper = shallow(<SocialAuth />);
  expect(wrapper.length).toBe(1);
});


describe('test create article view', () => {
it('it render create article view', () => {
const wrapper = shallow(<SocialAuth />);
expect(wrapper.length).toBe(1);
});

it('it render social buttons', () => {
  const wrapper = shallow(<ButtonComponent />);
  expect(wrapper.length).toBe(1);
  });

it('it should match snapshot', () => {
  const wrapper = shallow(<SocialAuth />);
  expect(wrapper).toMatchSnapshot();
});
});
