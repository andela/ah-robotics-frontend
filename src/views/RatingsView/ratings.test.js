import React from 'react';
import RatingsView from '.';

describe('test article rating component', () => {
  it('app should render rating component ', () => {
    const wrapper = shallow(<RatingsView />);
    expect(wrapper.length).toBe(1);
  });
});
