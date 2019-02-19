import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VerifyRegistrationView from './index';
import VerifyRegistrationComponent from '../../components/VerifyRegistration';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const registerSuccess = {
    register: {},
  };

  const verifyUser = {
    errors: {},
  };

  const wrapper = shallow(
    <VerifyRegistrationComponent registerSuccess={registerSuccess} verifyUser={verifyUser} />,
);

  return {
    // props,
    wrapper,
  };
}


describe('Register View', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();

    expect(wrapper.find('div').hasClass('login-form')).toBe(true);
    expect(wrapper.find('header')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
  });
  it('app should match the snapshot', () => {
    const wrapper = shallow(<VerifyRegistrationView />);
    expect(wrapper).toMatchSnapshot();
  });
});
