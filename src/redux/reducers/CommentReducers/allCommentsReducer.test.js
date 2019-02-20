import reducer from './allCommentsReducer';
import {
  GET_COMMENTS_START,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from '../../actions/CommentActions/types';

const comment = {
  body: 'This is an article comment',
};

describe('All Comment Reducer Test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        comments: [],
        errors: {},
        isLoading: false,
      });
  });

  it('should handle GET_COMMENTS_START', () => {
    expect(
      reducer([], { type: GET_COMMENTS_START }),
    ).toEqual({
      isLoading: true,
    });
  });

  it('should handle GET_COMMENTS_SUCCESS', () => {
    expect(
      reducer([], { type: GET_COMMENTS_SUCCESS }),
    ).toEqual({
      errors: {},
      isLoading: false,
    });
  });

  it('should handle GET_COMMENTS_FAIL', () => {
    expect(
      reducer([], { type: GET_COMMENTS_FAIL }),
    ).toEqual({
      isLoading: false,
      comments: [],
    });
  });
});
