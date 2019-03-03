import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/UserFollowActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
  loadUserProfile: (username) => {
    const url = `/profiles/${username}/followers/`;
    return (api.get(url));
  },
};

export function* userFollowersSaga({ payload }) {
  const payloadData = payload;
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

function* watchfollowers() {
  yield takeEvery(
    types.PROFILE_FOLLOW_DATA, userFollowersSaga,
);
}

export default watchfollowers;
