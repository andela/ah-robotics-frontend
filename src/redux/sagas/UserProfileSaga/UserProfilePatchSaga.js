import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/userProfileActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
  updateProfile: (username, data) => {
    const url = `/profiles/${username}/`;
    return api.patch(url, data);
  },
};
export function* userProfilePatchSaga({ payload }) {
    const { username, data } = payload;
  try {
    const response = yield call(apiClient.updateProfile, username, data);
    yield put({
      type: types.PROFILE_PATCH_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: types.PROFILE_PATCH_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchUserProfilePatch() {
  yield takeEvery(
    types.PROFILE_PATCH_START, userProfilePatchSaga,
  );
}

export default watchUserProfilePatch;
