import React from 'react';
import OneArticleView from '.';

it('app should match the snapshot', () => {
    const wrapper = shallow(<OneArticleView />);
    expect(wrapper).toMatchSnapshot();
  });
