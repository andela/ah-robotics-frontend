import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import * as types from '../../actions/ArticleActions/articles.action.types';

const apiUrl = '/articles/';

export const apiClient = {
  fetchUserArticles: (slug, page) => {
  const url = slug ? `${apiUrl}${slug}/` : page ? `${apiUrl}?page=${page}` : apiUrl;
  return api.get(url);
  },
};

export function* fetchArticleWorker({ payload }) {
const { page, slug } = payload || { page: 1, slug: '' };
  try {
    const response = yield call(apiClient.fetchUserArticles, slug, page);
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
