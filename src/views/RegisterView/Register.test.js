import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegisterView from './index';
import RegisterComponent from '../../components/Register';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const registerSuccess = {
    register: {},
  };
  const handleSubmit = jest.fn();
  const onChange = jest.fn();
  const errors = {};

  const wrapper = shallow(<RegisterComponent
    registerSuccess={registerSuccess}
    loading={false}
    errors={errors}
    onChange={onChange}
    handleSubmit={handleSubmit}
  />);

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
    const wrapper = shallow(<RegisterView />);
    expect(wrapper).toMatchSnapshot();
  });
});
