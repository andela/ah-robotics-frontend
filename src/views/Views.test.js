import React from 'react';
import { shallow } from 'enzyme';
import ErrorView from './ErrorView';
import NavigationView from './NavigationView';
import LoginView from './LoginView';
import HomeView from './HomeView';

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
    const wrapper = shallow(<HomeView />);
    expect(wrapper.length).toBe(1);
  });
});
