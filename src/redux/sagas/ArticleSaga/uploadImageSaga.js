import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/ArticleActions/types';
import { api } from '../../../utils/auth';

export const apiClient = {
  updateImage: (slug, form) => {
    const url = `/articles/${slug}/`;
    return api.patch(url, form);
  },
};

export function* uploadImageSaga({ payload }) {
  const { slug, image } = payload;
  const form = new FormData();
  const file = new File([image], 'image.png');
  form.append('image', file);
  try {
    const response = yield call(apiClient.updateImage, slug, form);
    yield put({
      type: types.UPLOAD_ARTICLE_IMAGE_SUCCESS,
      payload: response.data,
    });
    yield put({
      type: types.ARTICLE_FETCH_UPDATE,
      payload: { data: response.data },
    });
  } catch (err) {
    yield put({
      type: types.UPLOAD_ARTICLE_IMAGE_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchArticleImageUpload() {
  yield takeEvery(
    types.UPLOAD_ARTICLE_IMAGE_START, uploadImageSaga,
  );
}

export default watchArticleImageUpload;
