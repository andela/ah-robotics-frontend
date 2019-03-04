import reducer from './addCommentReducer';
import {
  ADD_COMMENT_START,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from '../../actions/CommentActions/types';

const comment = {
  body: 'This is an article comment',
};

describe('Add Comment Reducer Test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        body: '',
        comment: {},
        errors: {},
        isCommenting: false,
        success: false,
      });
  });

  it('should handle ADD_COMMENT_START', () => {
    expect(
      reducer([], { type: ADD_COMMENT_START, payload: comment }),
    ).toEqual({
      body: 'This is an article comment',
      isCommenting: true,
    });
  });

  it('should handle ADD_COMMENT_SUCCESS', () => {
    expect(
      reducer([], { type: ADD_COMMENT_SUCCESS, payload: comment }),
    ).toEqual({
      body: 'This is an article comment',
      isCommenting: false,
      errors: {},
      success: true,
    });
  });

  it('should handle ADD_COMMENT_FAIL', () => {
    expect(
      reducer([], { type: ADD_COMMENT_FAIL, payload: comment }),
    ).toEqual({
      body: 'This is an article comment',
      isCommenting: false,
      success: false,
    });
  });
});
