import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import fetchArticleWatcher, {
  fetchArticleWorker,
  apiClient,
} from './fetchArticlesSaga';
import * as types from '../../actions/ArticleActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({ isFetching: false, success: false, errors: {} }),
};

describe('fetch article saga tests', () => {
  it('it should handle fetch article success', async () => {
    dispatchedActions = [];
    apiClient.fetchUserArticles = jest.fn(() => Promise.resolve({}));
    await runSaga(fakeStore, fetchArticleWorker, {}).done;
    expect(apiClient.fetchUserArticles.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'ARTICLE_FETCH_SUCCESS', payload: { data: undefined } }]);
  });
  it('it should handle fetch article error', async () => {
    dispatchedActions = [];
    const errors = {
      response: {
        data: {
            errors: {
              error: 'something went wrong',
            },
          },
      },
    };
    apiClient.fetchUserArticles = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, fetchArticleWorker, {}).done;
    expect(apiClient.fetchUserArticles.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(
      [{
 type: 'ARTICLE_FETCH_ERROR',
      payload: { errors: { error: 'something went wrong' } },
}],
);
  });

  it('should listen for the required actions', () => {
    const generator = fetchArticleWatcher();
    put({ type: types.ARTICLE_FETCH });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery(types.ARTICLE_FETCH, fetchArticleWorker));
  });
});
