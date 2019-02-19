import React from 'react';
import ArticleComponent from './index';

describe('single article view tests', () => {
it('it should render single article view', () => {
  const rating = jest.fn();
  const wrapper = shallow(<ArticleComponent article={{}} isFetching={false} rating={rating} />);
  expect(wrapper.length).toBe(1);
  expect(wrapper.find('container')).toBeDefined();
});
});
