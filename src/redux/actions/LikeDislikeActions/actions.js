import * as types from './types';

export const likeRequest = payload => ({
  type: types.LIKE_ARTICLE_REQUEST,
  payload,
});

export const dislikeRequest = payload => ({
  type: types.DISLIKE_ARTICLE_REQUEST,
  payload,
});
export const likeSuccess = payload => ({
  type: types.LIKE_ARTICLE_SUCCESS,
  payload,
});

export const likeFailure = payload => ({
  type: types.LIKE_ARTICLE_ERROR,
  payload,
});

export const dislikeSuccess = payload => ({
  type: types.DISLIKE_ARTICLE_SUCCESS,
  payload,
});

export const dislikeFailure = payload => ({
  type: types.DISLIKE_ARTICLE_ERROR,
  payload,
});
