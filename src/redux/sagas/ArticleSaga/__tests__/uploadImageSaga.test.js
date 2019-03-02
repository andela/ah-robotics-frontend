import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import watchArticleImageUpload, { uploadImageSaga, apiClient } from '../uploadImageSaga';
import * as types from '../../../actions/ArticleActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({ isUpdating: false, success: false, isUpdated: false }),
};

describe('test upload article image saga', () => {
  it('should handle upload image success', async () => {
    dispatchedActions = [];
    const message = 'success';
   const payload = {
      payload: {
        slug: '',
        form: {},
      },
    };
    apiClient.updateImage = jest.fn(() => Promise.resolve(message));
    await runSaga(fakeStore, uploadImageSaga, { payload }).done;
    expect(apiClient.updateImage.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ payload: undefined, type: 'UPLOAD_ARTICLE_IMAGE_SUCCESS' },
      { payload: { data: undefined }, type: 'ARTICLE_FETCH_UPDATE' }]);
  });
  it('should handle upload image error', async () => {
    dispatchedActions = [];
    const payload = {
      payload: {
        slug: '',
        form: {},
      },
    };
    const errors = {
      response: {
        data: {
          article: {
              image: ['invalid file'],
            },
        },
      },
    };

    apiClient.updateImage = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, uploadImageSaga, { payload }).done;
    expect(apiClient.updateImage.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{
      payload: { errors: ['invalid file'] },
      type: 'UPLOAD_ARTICLE_IMAGE_ERROR',
    }]);
  });

  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = watchArticleImageUpload();
    put({ type: types.UPLOAD_ARTICLE_IMAGE_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.UPLOAD_ARTICLE_IMAGE_START, uploadImageSaga));
  });
});
