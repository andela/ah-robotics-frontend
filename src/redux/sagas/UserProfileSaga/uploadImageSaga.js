import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/userProfileActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
    updateImageProfile: (username, form) => {
      const url = `/profiles/${username}/`;
      return api.patch(url, form);
    },
  };
export function* uploadImageSaga({ payload }) {
    const { username, data } = payload;

    const form = new FormData();
    const file = new File([data.image], 'image.png');
    form.append('image', file);
    try {
        const response = yield call(apiClient.updateImageProfile, username, form);
        yield put({
            type: types.UPLOAD_IMAGE_SUCCESS,
            payload: response.data,
        });
    } catch (err) {
        yield put({
            type: types.UPLOAD_IMAGE_ERROR,
            payload: { errors: err.response },
        });
    }
}

function* watchImageUpload() {
    yield takeEvery(
        types.UPLOAD_IMAGE_START, uploadImageSaga,
    );
}

export default watchImageUpload;
