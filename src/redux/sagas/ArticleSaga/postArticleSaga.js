import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import * as types from '../../actions/ArticleActions/types';

export const apiClient = { createUserArticle: payload => api.post('/articles/', payload) };

export function* postArticleWorker({ payload }) {
  try {
    const response = yield call(apiClient.createUserArticle, { article: payload });
    yield put({
      type: types.ARTICLE_POST_SUCCESS,
      payload: { data: response.data },
    });
  } catch (error) {
    yield put({
      type: types.ARTICLE_POST_ERROR,
      payload: { errors: error.response.data.article.errors },
    });
  }
}

export default function* postArticleWatcher() {
  yield takeEvery(types.ARTICLE_POST, postArticleWorker);
}
