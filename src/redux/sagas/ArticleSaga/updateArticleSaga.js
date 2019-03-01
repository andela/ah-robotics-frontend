import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import * as types from '../../actions/ArticleActions/types';

const apiUrl = '/articles/';

export const apiClient = {
  updateUserArticle: (payload) => {
    const { slug } = payload;
    const url = slug ? `${apiUrl}${slug}/` : apiUrl;
    return api.put(url, { article: payload });
  },
};

export function* updateArticleWorker({ payload }) {
  try {
    const response = yield call(apiClient.updateUserArticle, payload);
    yield put({
      type: types.ARTICLE_UPDATE_SUCCESS,
      payload: { data: response.data },
    });
  } catch (error) {
    yield put({
      type: types.ARTICLE_UPDATE_ERROR,
      payload: { errors: error.response.data.article.errors },
    });
  }
}

export default function* updateArticleWatcher() {
  yield takeEvery(types.ARTICLE_UPDATE, updateArticleWorker);
}
