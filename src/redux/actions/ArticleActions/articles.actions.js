import * as types from './articles.action.types';

export const articleFetch = () => ({
  type: types.ARTICLE_FETCH,
});

export const articleFetchSuccess = payload => ({
  type: types.ARTICLE_FETCH_SUCCESS,
  payload,
});

export const articleFetchError = payload => ({
  type: types.ARTICLE_FETCH_ERROR,
  payload,
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
