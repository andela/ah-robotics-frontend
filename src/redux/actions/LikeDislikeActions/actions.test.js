import * as types from './types';
import * as actions from './actions';

describe('Add Like action Tests', () => {
  it('should dispatch LIKE_ARTICLE_REQUEST', () => {
    expect(actions.likeRequest({}).type).toEqual(types.LIKE_ARTICLE_REQUEST);
  });
  it('should dispatch LIKE_ARTICLE_SUCCESS', () => {
    expect(actions.likeSuccess({}).type).toEqual(types.LIKE_ARTICLE_SUCCESS);
  });
  it('should dispatch LIKE_ARTICLE_ERROR', () => {
    expect(actions.likeFailure({}).type).toEqual(types.LIKE_ARTICLE_ERROR);
  });
});

describe('Add Dislike action Tests', () => {
    it('should dispatch DISLIKE_ARTICLE_REQUEST', () => {
      expect(actions.dislikeRequest({}).type).toEqual(types.DISLIKE_ARTICLE_REQUEST);
    });
    it('should dispatch DISLIKE_ARTICLE_SUCCESS', () => {
      expect(actions.dislikeSuccess({}).type).toEqual(types.DISLIKE_ARTICLE_SUCCESS);
    });
    it('should dispatch DISLIKE_ARTICLE_ERROR', () => {
      expect(actions.dislikeFailure({}).type).toEqual(types.DISLIKE_ARTICLE_ERROR);
    });
  });
