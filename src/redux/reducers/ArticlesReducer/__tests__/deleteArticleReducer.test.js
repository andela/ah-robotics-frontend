import deleteArticlesReducer, { initialState } from '../deleteArticleReducer';
import * as types from '../../../actions/ArticleActions/types';

describe('Fetch articles reducer tests', () => {
  it('should have an initial state', () => {
    expect(deleteArticlesReducer(initialState, {})).toBe(initialState);
  });
  it('should show isDeleting when ARTICLE_DELETE is dispatched', () => {
    expect(deleteArticlesReducer(initialState,
      { type: types.ARTICLE_DELETE }).isDeleting).toBe(true);
  });
  it('should set isDeleting to false when ARTICLE_DELETE_SUCCESS is dispatched', () => {
    expect(deleteArticlesReducer(initialState,
      { type: types.ARTICLE_DELETE_SUCCESS, payload: {} }).isDeleting).toBe(false);
  });
  it('should set isDeleted to true when ARTICLE_DELETE_SUCCESS is dispatched', () => {
    expect(deleteArticlesReducer(initialState,
      { type: types.ARTICLE_DELETE_SUCCESS, payload: {} }).isDeleted).toBe(true);
  });
  it('should set isDeleting to false when ARTICLE_DELETE_ERROR is dispatched', () => {
    expect(deleteArticlesReducer(initialState,
      { type: types.ARTICLE_DELETE_ERROR, payload: {} }).isDeleting).toBe(false);
  });
});
