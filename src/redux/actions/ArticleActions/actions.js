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
export const deleteUserArticle = payload => ({
  type: types.ARTICLE_DELETE,
  payload,
});

export const deleteUserArticleSuccess = payload => ({
  type: types.ARTICLE_DELETE_SUCCESS,
  payload,
});

export const deleteUserArticleError = payload => ({
  type: types.ARTICLE_DELETE_ERROR,
  payload,
});
export const articleImageUpload = payload => ({
  type: types.UPLOAD_ARTICLE_IMAGE_START,
  payload,
});
export const articleImageUploadSuccess = payload => ({
  type: types.UPLOAD_ARTICLE_IMAGE_SUCCESS,
  payload,
});
export const articleImageUploadError = payload => ({
  type: types.UPLOAD_ARTICLE_IMAGE_ERROR,
  payload,
});
