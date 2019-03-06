import fetchArticlesReducer, { initialState } from '../fetchArticlesReducer';
import * as types from '../../../actions/ArticleActions/types';

describe('Fetch articles reducer tests', () => {
  it('should have an initial state', () => {
    expect(fetchArticlesReducer(initialState, {})).toBe(initialState);
  });
  it('should show isFetching when ARTICLE_FETCH is dispatched', () => {
    expect(fetchArticlesReducer(initialState,
      { type: types.ARTICLE_FETCH }).isFetching).toBe(true);
  });
  it('should set isFetching to false when ARTICLE_FETCH_SUCCESS is dispatched', () => {
    expect(fetchArticlesReducer(initialState,
      { type: types.ARTICLE_FETCH_SUCCESS, payload: {} }).isFetching).toBe(false);
  });
  it('should set isFetching to false when ARTICLE_FETCH_ERROR is dispatched', () => {
    expect(fetchArticlesReducer(initialState,
      { type: types.ARTICLE_FETCH_ERROR, payload: {} }).isFetching).toBe(false);
  });
});
