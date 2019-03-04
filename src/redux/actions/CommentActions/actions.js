import * as types from './types';

// ADD COMMENT ACTIONS
export const addArticleComment = payload => ({
  type: types.ADD_COMMENT_START,
  payload,
});

export const addCommentSuccess = comment => ({
  type: types.ADD_COMMENT_SUCCESS,
  payload: comment,
});

export const addCommentFail = comment => ({
  type: types.ADD_COMMENT_FAIL,
  payload: comment,
});

// UPDATE COMMENT ACTIONS
export const updateArticleComment = payload => ({
  type: types.UPDATE_COMMENT_START,
  payload,
});

export const updateCommentSuccess = comment => ({
  type: types.UPDATE_COMMENT_SUCCESS,
  payload: comment,
});

export const updateCommentFail = comment => ({
  type: types.UPDATE_COMMENT_FAIL,
  payload: comment,
});

// DELETE COMMENT ACTIONS
export const deleteArticleComment = payload => ({
  type: types.DELETE_COMMENT_START,
  payload,
});

export const deleteCommentSuccess = comment => ({
  type: types.DELETE_COMMENT_SUCCESS,
  payload: comment,
});

export const deleteCommentFail = comment => ({
  type: types.DELETE_COMMENT_FAIL,
  payload: comment,
});

// GET COMMENTS ACTIONS
export const getArticleComments = payload => ({
  type: types.GET_COMMENTS_START,
  payload,
});

export const getCommentsSuccess = comment => ({
  type: types.GET_COMMENTS_SUCCESS,
  payload: comment,
});

export const getCommentsFail = comment => ({
  type: types.GET_COMMENTS_FAIL,
  payload: comment,
});
