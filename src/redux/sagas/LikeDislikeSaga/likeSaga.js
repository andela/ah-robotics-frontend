import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/LikeDislikeActions/types';
import { api } from '../../../utils/auth';

const slug = 'django-sims';

export const apiLikeClient = {
  likeUrl: slug => api.post(`/articles/${slug}/like/`),
};


export function* like({ payload }) {
  try {
    const response = yield call(apiLikeClient.likeUrl, slug);
    yield put({
      type: types.LIKE_ARTICLE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: types.LIKE_ARTICLE_ERROR,
      payload: { error: error.response.data },
    });
  }
}


function* watchLikeArticle() {
  yield takeLatest(types.LIKE_ARTICLE_REQUEST, like);
}


export default watchLikeArticle;
