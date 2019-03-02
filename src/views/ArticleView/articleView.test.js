import React from 'react';
import { ArticleView } from './index';

let wrapper;
let instance;
let props;

describe('article view tests', () => {
  props = {
    match: { params: { slug: '' } },
    fetchSingle: jest.fn(),
    articles: {},
    history: { push: jest.fn() },
    uploadImageAction: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<ArticleView {...props} />);
    instance = wrapper.instance();
  });
  it('should render article view', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state when onImageChange is called', () => {
    const event = {
      target: {
        name: 'image',
        files: [
          [{ name: 'test-image' }],
        ],
      },
    };

    instance.onImageChange(event);
    expect(instance.state.image).toEqual(event.target.files[0]);
  });
  it('should redirect onHandleEdit', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    instance.handleEdit(event);
    expect(instance.props.history.push.mock.calls[0]).toEqual(['/articles/update/']);
  });
});
