import React from 'react';
import ButtonComponent from '.';

it('app should render social login button Component', () => {
  const props = {
      provider: 'oauth',
      providerName: 'oauth',
      type: 'oauth',
      className: 'button',
      buttonClass: 'button',
      icon: 'social',
      loading: false,
    };
  const providerName = 'oauth';
  const retrieveSocialData = provider => ({ provider });
  const wrapper = shallow(<ButtonComponent
    circular
    type={props.type}
    providerName={props.providerName}
    className={props.className}
    buttonClass={props.buttonClass}
    icon={props.icon}
    loading={props.loading}
    retrieveSocialData={retrieveSocialData}
    onClick={() => retrieveSocialData()}
  />);
  expect(wrapper.length).toBe(1);
});
