import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../../utils/auth';
import * as types from '../../actions/ArticleActions/types';

const apiUrl = '/articles/';

export const apiClient = {
  deleteUserArticle: (slug) => {
    const url = slug ? `${apiUrl}${slug}/` : apiUrl;
    return api.delete(url);
  },
};

export function* deleteArticleWorker({ payload }) {
  const { slug } = payload;
  try {
    const response = yield call(apiClient.deleteUserArticle, slug);
    yield put({
      type: types.ARTICLE_DELETE_SUCCESS,
      payload: { data: response.data },
    });
  } catch (error) {
    yield put({
      type: types.ARTICLE_DELETE_ERROR,
      payload: { errors: error.response.data.message },
    });
  }
}
function* deleteArticleWatcher() {
  yield takeEvery(types.ARTICLE_DELETE, deleteArticleWorker);
}

export default deleteArticleWatcher;
