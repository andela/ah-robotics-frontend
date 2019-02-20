import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import * as types from '../../actions/ArticleActions/articles.action.types';

function* fetchArticleWorker() {
  const apiUrl = '/articles/';
  try {
    const response = yield call(api.get, apiUrl);
  yield put({
    type: types.ARTICLE_FETCH_SUCCESS,
    payload: { data: response.data },
  });
} catch (error) {
    yield put({
      type: types.ARTICLE_FETCH_ERROR,
      payload: { errors: error.response.data.errors },
    });
  }
}

function* fetchArticleWatcher() {
  yield takeEvery(types.ARTICLE_FETCH, fetchArticleWorker);
}
export default fetchArticleWatcher;
