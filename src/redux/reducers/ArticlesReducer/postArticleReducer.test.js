import postArticlesReducer, { initialState } from './postArticlesReducer';
import * as types from '../../actions/ArticleActions/types';

describe('Post article reducer tests', () => {
  it('should have an initial state', () => {
    expect(postArticlesReducer(initialState, {})).toBe(initialState);
  });
  it('should show isPosting when ARTICLE_POST is dispatched', () => {
    expect(postArticlesReducer(initialState,
      { type: types.ARTICLE_POST, payload: {} }).isPosting).toBe(true);
  });
  it('should set isPosting to false when ARTICLE_POST_SUCCESS is dispatched', () => {
    expect(postArticlesReducer(initialState,
      { type: types.ARTICLE_POST_SUCCESS, payload: {} }).isPosting).toBe(false);
  });
  it('should set isPosted to true when ARTICLE_POST_SUCCESS is dispatched', () => {
    expect(postArticlesReducer(initialState,
      { type: types.ARTICLE_POST_SUCCESS, payload: {} }).isPosted).toBe(true);
  });
  it('should set isPosting to false when ARTICLE_POST_ERROR is dispatched', () => {
    expect(postArticlesReducer(initialState,
      { type: types.ARTICLE_POST_ERROR, payload: {} }).isPosting).toBe(false);
  });
  it('should set isPosted to false when ARTICLE_POST_ERROR  is dispatched', () => {
    expect(postArticlesReducer(initialState,
      { type: types.ARTICLE_POST_ERROR, payload: {} }).isPosted).toBe(false);
  });
});
