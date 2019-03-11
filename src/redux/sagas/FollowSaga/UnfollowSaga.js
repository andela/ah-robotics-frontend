import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/UserFollowActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
  updateUnfollowProfile: (username) => {
    const url = `/profiles/${username}/unfollow`;
    return api.delete(url);
  },
};
export function* unFollowPostSaga({ payload }) {
  try {
    const response = yield call(apiClient.updateUnfollowProfile, payload);
    yield put({
      type: types.USER_UNFOLLOW_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    yield put({
      type: types.USER_UNFOLLOW_ERROR,
      payload: { errors: err.response.data },
    });
  }
}

function* watchunFollowUserPost() {
  yield takeEvery(
    types.USER_UNFOLLOW_START, unFollowPostSaga,
  );
}

export default watchunFollowUserPost;
