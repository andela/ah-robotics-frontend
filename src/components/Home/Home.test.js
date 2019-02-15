import React from 'react';
import HomeComponent from '.';

it('app should render Home page', () => {
  const user = {
    user: {
      username: '',
    },
  };
  const wrapper = shallow(<HomeComponent user={user} />);
  expect(wrapper.length).toBe(1);
});
