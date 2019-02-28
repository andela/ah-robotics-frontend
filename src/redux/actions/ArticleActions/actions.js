import * as types from './types';

export const articleFetch = payload => ({
  type: types.ARTICLE_FETCH,
  payload,
});

export const articleFetchSuccess = payload => ({
  type: types.ARTICLE_FETCH_SUCCESS,
  payload,
});

export const articleFetchError = payload => ({
  type: types.ARTICLE_FETCH_ERROR,
  payload,
});
export const clearState = () => ({
type: types.CLEAR,
});
export const postArticle = payload => ({
  type: types.ARTICLE_POST,
  payload,
});

export const postArticleSuccess = payload => ({
  type: types.ARTICLE_POST_SUCCESS,
  payload,
});

export const postArticleError = payload => ({
  type: types.ARTICLE_POST_ERROR,
  payload,
});
export const updateUserArticle = payload => ({
  type: types.ARTICLE_UPDATE,
  payload,
});

export const updateUserArticleSuccess = payload => ({
  type: types.ARTICLE_UPDATE_SUCCESS,
  payload,
});

export const updateUserArticleError = payload => ({
  type: types.ARTICLE_UPDATE_ERROR,
  payload,
});
