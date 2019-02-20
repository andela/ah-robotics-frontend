import fetchArticlesReducer, { initialState } from './fetch.articles.reducer';
import * as types from '../../actions/ArticleActions/articles.action.types';

describe('Articles reducer tests', () => {
  it('should have an initial state', () => {
    expect(fetchArticlesReducer(initialState, {})).toBe(initialState);
  });
  it('should show isPosting on when ARTICLE_FETCH is dispatched', () => {
    expect(fetchArticlesReducer(initialState,
      { type: types.ARTICLE_FETCH }).isPosting).toBe(true);
  });
  it('should set isPosting to false on when ARTICLE_FETCH_SUCCESS is dispatched', () => {
    expect(fetchArticlesReducer(initialState,
      { type: types.ARTICLE_FETCH_SUCCESS, payload: {} }).isPosting).toBe(false);
  });
  it('should set isPosting to false on when ARTICLE_FETCH_ERROR is dispatched', () => {
    expect(fetchArticlesReducer(initialState,
      { type: types.ARTICLE_FETCH_ERROR, payload: {} }).isPosting).toBe(false);
  });
});
