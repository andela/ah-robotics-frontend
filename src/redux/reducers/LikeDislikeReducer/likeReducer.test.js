import likeReducer from './likeReducer';
import {
    LIKE_ARTICLE_REQUEST,
    LIKE_ARTICLE_SUCCESS,
    LIKE_ARTICLE_ERROR,
} from '../../actions/LikeDislikeActions/types';


  it('should handle LIKE_ARTICLE_REQUEST', () => {
    expect(
      likeReducer([], { type: LIKE_ARTICLE_REQUEST, payload: {} }),
    ).toEqual({
        isLiking: true,
        errors: {},
    });
  });

  it('should handle LIKE_ARTICLE_SUCCESS', () => {
    expect(
      likeReducer([], { type: LIKE_ARTICLE_SUCCESS, payload: {} }),
    ).toEqual({
        isLiking: false,
        errors: {},
        like_status: true,
    });
  });

  it('should handle LIKE_ARTICLE_ERROR', () => {
    expect(
      likeReducer([], { type: LIKE_ARTICLE_ERROR, payload: {} }),
    ).toEqual({
        isLiking: false,
        like_status: false,
    });
  });
