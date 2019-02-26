import React from 'react';
import ArticlesListing from '.';
import ArticleItem from './ArticleItem';

const article = {
  title: 'hey',
  description: 'hey',
  body: 'this is ...',
  read_time: '034',
  author: {
    username: 'joh doe',
  },

};
const isFetching = false;
const articles = [{}];

it('should render article listing component', () => {
  const wrapper = shallow(<ArticlesListing isFetching={isFetching} articles={articles} />);
  expect(wrapper.length).toBe(1);
});
it('article listing component should match snapshot', () => {
  const wrapper = shallow(<ArticlesListing isFetching={isFetching} articles={articles} />);
  expect(wrapper).toMatchSnapshot();
});

it('it should render article item component', () => {
  const wrapper = shallow(<ArticleItem article={article} />);
  expect(wrapper.length).toBe(1);
});
it('article item component should match snapshot', () => {
  const wrapper = shallow(<ArticleItem article={article} />);
  expect(wrapper.length).toBe(1);
});
