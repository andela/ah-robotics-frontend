import articlesReducer, { initialState } from './articles.reducer';
import * as types from '../../actions/ArticleActions/articles.action.types';

describe('Articles reducer tests', () => {
  it('should have an initial state', () => {
    expect(articlesReducer(initialState, {})).toBe(initialState);
  });
  it('should show isFetching on when ARTICLE_FETCH is dispatched', () => {
    expect(articlesReducer(initialState,
      { type: types.ARTICLE_FETCH }).isFetching).toBe(true);
  });
  it('should set isFetching to false on when ARTICLE_FETCH_SUCCESS is dispatched', () => {
    expect(articlesReducer(initialState,
      { type: types.ARTICLE_FETCH_SUCCESS, payload: {} }).isFetching).toBe(false);
  });
  it('should set isFetching to false on when ARTICLE_FETCH_ERROR is dispatched', () => {
    expect(articlesReducer(initialState,
      { type: types.ARTICLE_FETCH_ERROR, payload: {} }).isFetching).toBe(false);
  });
});
