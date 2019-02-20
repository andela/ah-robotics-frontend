import reducer from './deleteCommentReducer';
import {
  DELETE_COMMENT_START,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
} from '../../actions/CommentActions/types';

const comment = {
  id: 1,
};

describe('Delete Comment Reducer Test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        comment: {},
        errors: {},
        isDeleting: false,
      });
  });

  it('should handle DELETE_COMMENT_START', () => {
    expect(
      reducer([], { type: DELETE_COMMENT_START, payload: comment }),
    ).toEqual({
      isDeleting: true,
    });
  });

  it('should handle DELETE_COMMENT_SUCCESS', () => {
    expect(
      reducer([], { type: DELETE_COMMENT_SUCCESS, payload: comment }),
    ).toEqual({
      errors: {},
      isDeleting: false,
    });
  });

  it('should handle DELETE_COMMENT_FAIL', () => {
    expect(
      reducer([], { type: DELETE_COMMENT_FAIL, payload: comment }),
    ).toEqual({
      isDeleting: false,
    });
  });
});
