import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import RegisterView from './index';
import Adapter from 'enzyme-adapter-react-16';
import RegisterComponent from '../../components/Register';

Enzyme.configure({adapter: new Adapter()});

function setup() {
  // const props = {
  //   register: jest.fn()
  // };

  const registerSuccess = {
    register: {}
  };

  const wrapper = shallow(<RegisterComponent registerSuccess={registerSuccess}/>);

  return {
    // props,
    wrapper
  };
}


describe('Register View', () => {
  it('should render self and subcomponents', () => {
    const {wrapper} = setup();

    expect(wrapper.find('div').hasClass('login-form')).toBe(true);
    expect(wrapper.find('header')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
  });
  it('app should render Registration page', () => {
    const wrapper = shallow(<RegisterView/>);
    expect(wrapper).toMatchSnapshot();
  });
});

