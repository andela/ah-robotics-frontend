import updateArticlesReducer, { initialState } from '../updateArticleReducer';
import * as types from '../../../actions/ArticleActions/types';

describe('Update article reducer tests', () => {
  it('should have an initial state', () => {
    expect(updateArticlesReducer(initialState, {})).toBe(initialState);
  });
  it('should show isUpdating when ARTICLE_UPDATE is dispatched', () => {
    expect(updateArticlesReducer(initialState,
      { type: types.ARTICLE_UPDATE, payload: {} }).isUpdating).toBe(true);
  });
  it('should set isUpdating to false when ARTICLE_UPDATE_SUCCESS is dispatched', () => {
    expect(updateArticlesReducer(initialState,
      { type: types.ARTICLE_UPDATE_SUCCESS, payload: {} }).isUpdating).toBe(false);
  });
  it('should set isUpdated to true when ARTICLE_UPDATE_SUCCESS is dispatched', () => {
    expect(updateArticlesReducer(initialState,
      { type: types.ARTICLE_UPDATE_SUCCESS, payload: {} }).isUpdated).toBe(true);
  });
  it('should set isUpdating to false when ARTICLE_UPDATE_ERROR is dispatched', () => {
    expect(updateArticlesReducer(initialState,
      { type: types.ARTICLE_UPDATE_ERROR, payload: {} }).isUpdating).toBe(false);
  });
  it('should set isUpdated to false when ARTICLE_UPDATE_ERROR  is dispatched', () => {
    expect(updateArticlesReducer(initialState,
      { type: types.ARTICLE_UPDATE_ERROR, payload: {} }).isUpdated).toBe(false);
  });
});
