import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/userProfileActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
  fetchUserProfile: (username) => {
    const url = `/profiles/${username}/`;
    return (api.get(url));
  },
};

export function* userProfileSaga(payload) {
  const payloadData = payload.payload;
  const { username } = payloadData;
  try {
    const response = yield call(apiClient.fetchUserProfile, username);
    yield put({
      type: types.PROFILE_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: types.PROFILE_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchuserProfile() {
  yield takeEvery(
    types.PROFILE_DATA, userProfileSaga,
);
}

export default watchuserProfile;
