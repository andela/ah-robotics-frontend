import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import * as types from '../../actions/ArticleActions/types';

const apiUrl = '/articles/';

export const apiClient = {
  fetchUserArticles: (slug) => {
    const url = slug ? `${apiUrl}${slug}/` : apiUrl;
    return api.get(url);
  },
};

export function* fetchArticleWorker({ slug }) {
  try {
    const response = yield call(apiClient.fetchUserArticles, slug);
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
