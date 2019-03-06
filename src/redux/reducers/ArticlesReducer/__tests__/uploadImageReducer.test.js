import uploadImageReducer, { initialState } from '../updateImageReducer';
import * as types from '../../../actions/ArticleActions/types';

describe('Update article reducer tests', () => {
  it('should have an initial state', () => {
    expect(uploadImageReducer(initialState, {})).toBe(initialState);
  });
  it('should show isUpdating when UPLOAD_ARTICLE_IMAGE_START is dispatched', () => {
    expect(uploadImageReducer(initialState,
      { type: types.UPLOAD_ARTICLE_IMAGE_START, payload: {} }).isUpdating).toBe(true);
  });
  it('should set isUpdating to false when UPLOAD_ARTICLE_IMAGE_SUCCESS is dispatched', () => {
    expect(uploadImageReducer(initialState,
      { type: types.UPLOAD_ARTICLE_IMAGE_SUCCESS, payload: {} }).isUpdating).toBe(false);
  });
  it('should set isUpdated to true when UPLOAD_ARTICLE_IMAGE_SUCCESS is dispatched', () => {
    expect(uploadImageReducer(initialState,
      { type: types.UPLOAD_ARTICLE_IMAGE_SUCCESS, payload: {} }).isUpdated).toBe(true);
  });
  it('should set isUpdating to false when UPLOAD_ARTICLE_IMAGE_ERROR is dispatched', () => {
    expect(uploadImageReducer(initialState,
      { type: types.UPLOAD_ARTICLE_IMAGE_ERROR, payload: {} }).isUpdating).toBe(false);
  });
  it('should set isUpdated to false when UPLOAD_ARTICLE_IMAGE_ERROR  is dispatched', () => {
    expect(uploadImageReducer(initialState,
      { type: types.UPLOAD_ARTICLE_IMAGE_ERROR, payload: {} }).isUpdated).toBe(false);
  });
});
