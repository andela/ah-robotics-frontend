import { shallow } from 'enzyme';
import React from 'react';
import LikeDislikeComponent from './index';

describe('Add LikeDislike Component Tests', () => {
  const wrapper = shallow(<LikeDislikeComponent />);

  it('app should render LikeDislikeComponent', () => {
    expect(wrapper.length).toBe(1);
  });

  it('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
