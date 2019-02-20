import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/ArticleActions/articles.action.types';

function* fetchArticleWorker() {
  const apiUrl = 'http://127.0.0.1:8000/api/v1/articles/';
  const response = yield call(axios.get, apiUrl);
  try {
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
