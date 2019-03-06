import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import updateArticleWatcher, { updateArticleWorker, apiClient } from '../updateArticleSaga';
import * as types from '../../../actions/ArticleActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({ isUpdating: false, success: false, isUpdated: false }),
};

describe('test update article saga', () => {
  it('should handle update article success', async () => {
    dispatchedActions = [];
    const message = 'updated successfully';
    apiClient.updateUserArticle = jest.fn(() => Promise.resolve(message));
    await runSaga(fakeStore, updateArticleWorker, {}).done;
    expect(apiClient.updateUserArticle.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'ARTICLE_UPDATE_SUCCESS', payload: { data: undefined } }]);
  });
  it('should handle update article error', async () => {
    dispatchedActions = [];
    const errors = {
      response: {
        data: {
          article: {
            errors: {
              title: 'title is required',
            },
          },
        },
      },
    };

    apiClient.updateUserArticle = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, updateArticleWorker, {}).done;
    expect(apiClient.updateUserArticle.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{
      payload: { errors: { title: 'title is required' } },
      type: 'ARTICLE_UPDATE_ERROR',
    }]);
  });

  it('should listen for correct actions', () => {
    dispatchedActions = [];
    const generator = updateArticleWatcher();
    put({ type: types.ARTICLE_UPDATE });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.ARTICLE_UPDATE, updateArticleWorker));
  });
});
