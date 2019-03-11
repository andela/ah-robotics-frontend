import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/UserFollowActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
  loadUserProfile: (username) => {
    const url = `/profiles/${username}/following/`;
    return (api.get(url));
  },
};

export function* FollowingUserSaga(payload) {
  const payloadData = payload.payload;
  const { username } = payloadData;
  try {
    const response = yield call(apiClient.loadUserProfile, username);
    yield put({
      type: types.PROFILE_FOLLOW_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: types.PROFILE_FOLLOW_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchfollowing() {
  yield takeEvery(
    types.PROFILE_FOLLOW_DATA, FollowingUserSaga,
);
}

export default watchfollowing;
