import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import deleteArticleWatcher, {
  deleteArticleWorker,
  apiClient,
} from '../deleteArticleSaga';
import * as types from '../../../actions/ArticleActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({ isDeleting: false, success: false, errors: {} }),
};

describe('delete article saga tests', () => {
  it('it should handle fetch article success', async () => {
    const payload = {
      slug: 'this-is-x',
    };
    dispatchedActions = [];
    apiClient.deleteUserArticle = jest.fn(() => Promise.resolve({}));
    await runSaga(fakeStore, deleteArticleWorker, { payload }).done;
    expect(apiClient.deleteUserArticle.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'ARTICLE_DELETE_SUCCESS', payload: { data: undefined } }]);
  });
  it('it should handle delete article error', async () => {
    dispatchedActions = [];
    const payload = {
      slug: 'this-is-x',
    };
    const errors = {
      response: {
        data: {
          message: 'something went wrong',
        },
      },
    };
    apiClient.deleteUserArticle = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, deleteArticleWorker, { payload }).done;
    expect(apiClient.deleteUserArticle.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(
      [{
        type: 'ARTICLE_DELETE_ERROR',
        payload: { errors: 'something went wrong' },
      }],
    );
  });

  it('should listen for the required actions', () => {
    const generator = deleteArticleWatcher();
    put({ type: types.ARTICLE_DELETE });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.ARTICLE_DELETE, deleteArticleWorker));
  });
});
