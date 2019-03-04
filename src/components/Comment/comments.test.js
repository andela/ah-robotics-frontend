import { shallow } from 'enzyme';
import React from 'react';
import AddCommentComponent from './addComment';
import CommentsListComponent from './commentList';
import SingleCommentComponent from './comment';
import UpdateCommentComponent from './updateComment';


describe('Add Comment Component Tests', () => {
  const wrapper = shallow(<AddCommentComponent />);

  it('app should render AddCommentComponent', () => {
    expect(wrapper.length).toBe(1);
  });

  it('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Comment List Component Tests', () => {
  const user = {};
  const wrapper = shallow(<CommentsListComponent
    user={user}
  />);

  it('app should render CommentsListComponent', () => {
    expect(wrapper.length).toBe(1);
  });

  it('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Single Comment Component Tests', () => {
  const props = {
    author: {
      image: 'adasdas',
    },
  };

  const user = {};

  const wrapper = shallow(<SingleCommentComponent
    comment={props}
    user={user}
  />);

  it('app should render SingleCommentComponent', () => {
    expect(wrapper.length).toBe(1);
  });

  it('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Update Comment Component Tests', () => {
  const commentId = 1;
  const commentDetails = { body: 'hello world' };
  const wrapper = shallow(
    <UpdateCommentComponent
      commentId={commentId}
      commentDetails={commentDetails}
    />,
);

  it('app should render UpdateCommentComponent', () => {
    expect(wrapper.length).toBe(1);
  });

  it('it should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
