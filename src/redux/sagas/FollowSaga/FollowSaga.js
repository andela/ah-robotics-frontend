import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/UserFollowActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
  updateFollowProfile: (username) => {
    const url = `/profiles/${username}/follow`;
    return api.post(url);
  },
};
export function* followPostSaga({ payload }) {
  try {
    const response = yield call(apiClient.updateFollowProfile, payload);
    yield put({
      type: types.PROFILE_FOLLOW_POST_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: types.PROFILE_FOLLOW_USER_ERROR,
      payload: { errors: err.response.data },
    });
  }
}

function* watchFollowUserPost() {
  yield takeEvery(
    types.PROFILE_FOLLOW_POST_START, followPostSaga,
  );
}

export default watchFollowUserPost;
