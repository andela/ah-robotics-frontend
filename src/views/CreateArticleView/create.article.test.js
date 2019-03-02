import React from 'react';
import { CreateArticle, mapDispatchToProps } from './index';

let wrapper;
let instance;
let stateProps;
let dispatchProps;
let dispatch;

describe('test create article view', () => {
  stateProps = {
    postArticle: jest.fn(),
    createArticle: {},
    history: {},
  };
  beforeEach(() => {
    wrapper = shallow(<CreateArticle {...stateProps} />);
    instance = wrapper.instance();
    dispatch = jest.fn(() => Promise.resolve());
    dispatchProps = mapDispatchToProps(dispatch);
  });
it('it render create article view', () => {
expect(wrapper.length).toBe(1);
});
it('it should match snapshot', () => {
  expect(wrapper).toMatchSnapshot();
});
  it('should dispatch postUserArticle', () => {
    const data = {
      title: 'xxx',
      description: 'xxx',
    };
  dispatchProps.postArticle(data);
  dispatchProps = expect(dispatch).toHaveBeenCalledWith({ payload: data, type: 'ARTICLE_POST' });
  });
  it('should post an article on handleArticlePost', () => {
    instance.state = { title: 'xxx' };
    instance.handleArticlePost();
    expect(stateProps.postArticle).toHaveBeenCalledWith({ title: 'xxx' });
  });
  it('should change state on EditorChange', () => {
    const content = 'hello';
    const event = {
      editor: {
        getData: jest.fn(() => content),
      },
    };
      instance.onEditorChange(event);
      expect(instance.state.body).toEqual(content);
  });
  it('should change state on inputChange ', () => {
    const event = {
      target: {
        name: 'title',
        value: 'robotics',
      },
    };
    instance.onInputChange(event);
    expect(instance.state.title).toEqual(event.target.value);
  });
});
