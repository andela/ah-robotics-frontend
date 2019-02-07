import React from 'react';
import { shallow } from 'enzyme';
import ErrorView from './Error';
import NavigationView from './Navigation';
import LoginView from './Login';
import HomeView from './Home';

describe('RootComponent', () => {
  it('app should render unknown page error message', () => {
    const wrapper = shallow(<ErrorView />);
    expect(wrapper.length).toBe(1);
  });
    
  it('app should render login view page', () => {
    const wrapper = shallow(<LoginView/>);
    expect(wrapper.length).toBe(1);
  });
    
  it('app should display navigation bar', () => {
    const wrapper = shallow(<NavigationView />);
    expect(wrapper.length).toBe(1);
  });
    
  it('app should render Home page', () => {
    const wrapper = shallow(<HomeView/>);
    expect(wrapper.length).toBe(1);
  });
});
