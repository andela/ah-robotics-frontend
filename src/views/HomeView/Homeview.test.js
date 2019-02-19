import React from 'react';
import { shallow } from 'enzyme';
import HomeView from '../../components/Home';


import Home from './index';

const user = {
  username: 'a',
};
it('render a label', () => {
  const wrapper = shallow(
    <HomeView user={user} />,
);
  expect(wrapper.length).toBe(1);
});
