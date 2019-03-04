import dislikeReducer from './dislikeReducer';
import {
    DISLIKE_ARTICLE_REQUEST,
    DISLIKE_ARTICLE_SUCCESS,
    DISLIKE_ARTICLE_ERROR,
} from '../../actions/LikeDislikeActions/types';


  it('should handle DISLIKE_ARTICLE_REQUEST', () => {
    expect(
      dislikeReducer([], { type: DISLIKE_ARTICLE_REQUEST, payload: {} }),
    ).toEqual({
        isdisLiking: true,
        errors: {},
    });
  });

  it('should handle DISLIKE_ARTICLE_SUCCESS', () => {
    expect(
      dislikeReducer([], { type: DISLIKE_ARTICLE_SUCCESS, payload: {} }),
    ).toEqual({
        isdisLiking: false,
        errors: {},
        dislike_status: true,
    });
  });

  it('should handle DISLIKE_ARTICLE_ERROR', () => {
    expect(
      dislikeReducer([], { type: DISLIKE_ARTICLE_ERROR, payload: {} }),
    ).toEqual({
        isdisLiking: false,
        dislike_status: false,
    });
  });
