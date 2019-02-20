import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import * as types from '../../actions/ArticleActions/articles.action.types';

function* postArticleWorker({ payload }) {
  console.log(payload);
  const apiUrl = '/articles/';
  try {
    const response = yield call(api.post, apiUrl, { article: payload });
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

function* postArticleWatcher() {
  yield takeEvery(types.ARTICLE_POST, postArticleWorker);
}

export default postArticleWatcher;
