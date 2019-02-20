import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import postArticleWatcher, { postArticleWorker, apiClient } from './postArticleSaga';
import * as types from '../../actions/ArticleActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({ isPosting: false, success: false, isPosted: false }),
};

describe('test post article saga', () => {
it('should handle post article success', async () => {
  dispatchedActions = [];
  const message = 'success';
  apiClient.createUserArticle = jest.fn(() => Promise.resolve(message));
  await runSaga(fakeStore, postArticleWorker, {}).done;
  expect(apiClient.createUserArticle.mock.calls.length).toBe(1);
  expect(dispatchedActions).toEqual([{ type: 'ARTICLE_POST_SUCCESS', payload: { data: undefined } }]);
});
it('should handle post article error', async () => {
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

  apiClient.createUserArticle = jest.fn(() => Promise.reject(errors));
  await runSaga(fakeStore, postArticleWorker, {}).done;
  expect(apiClient.createUserArticle.mock.calls.length).toBe(1);
  expect(dispatchedActions).toEqual([{
    payload: { errors: { title: 'title is required' } },
    type: 'ARTICLE_POST_ERROR',
  }]);
});

it('should listen for correct actions', () => {
  dispatchedActions = [];
  const generator = postArticleWatcher();
  put({ type: types.ARTICLE_POST });
  const next = generator.next();
  expect(next.value).toEqual(takeEvery(types.ARTICLE_POST, postArticleWorker));
});
});
