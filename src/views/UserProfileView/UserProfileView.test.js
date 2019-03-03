import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileView from './index';
import ProfileComponent from '../../components/Profile';

Enzyme.configure({ adapter: new Adapter() });

  it('app should match the snapshot', () => {
    const wrapper = shallow(<ProfileView />);
    expect(wrapper).toMatchSnapshot();
  });


const response = {
  errors: {},
};
it('render a label', () => {
  const wrapper = shallow(
    <ProfileView response={response} />,
  );
  expect(wrapper.length).toBe(1);
});
it('app should match the snapshot', () => {
    const wrapper = shallow(<ProfileView />);
    expect(wrapper.length).toBe(1);
});
