import React from 'react';
import CreateArticle from './index';
import ArticleEditor from '../../components/ArticleEditor';

describe('test create article view', () => {
it('it render create article view', () => {
const wrapper = shallow(<CreateArticle />);
const handleArticlePost = jest.fn();
const onEditorChange = jest.fn();
const onInputChange = jest.fn();

expect(wrapper.length).toBe(1);
expect(wrapper.find(<ArticleEditor
  createArticle={{}}
  handleArticlePost={handleArticlePost}
  onEditorChange={onEditorChange}
  body=""
  onInputChange={onInputChange}
/>)).toBeDefined();
});
it('it should match snapshot', () => {
  const wrapper = shallow(<CreateArticle />);
  expect(wrapper).toMatchSnapshot();
});
});
