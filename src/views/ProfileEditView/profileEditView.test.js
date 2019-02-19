import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProfileEditComponent from '../../components/Profile/ProfileEdit';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const profile = {};
  const handleSubmit = () => ({});
  const onChange = () => ({});

  const wrapper = shallow(
    <ProfileEditComponent handleSubmit={handleSubmit} profile={profile} onChange={onChange} />,
);

  return {
    wrapper,
  };
}

describe('Profile View', () => {
  it('should render self and subcomponents', () => {
    const { wrapper } = setup();
    expect(wrapper.find('button')).toBeDefined();
  });

  it('app should match the snapshot', () => {
    const wrapper = shallow(<profileEditView />);
    expect(wrapper).toMatchSnapshot();
  });
});
