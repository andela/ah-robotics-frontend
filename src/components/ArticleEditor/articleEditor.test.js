import React from 'react';
import ArticleEditor from './index';

const handleArticlePost = jest.fn();
const onEditorChange = jest.fn();
const onInputChange = jest.fn();
const wrapper = shallow(<ArticleEditor
  createArticle={{}}
  handleArticlePost={handleArticlePost}
  onEditorChange={onEditorChange}
  body=""
  onInputChange={onInputChange}
/>);

describe('test article editor component', () => {
  it('it render article editor component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
