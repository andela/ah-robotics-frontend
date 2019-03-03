import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/userFollowActions/types';
import { api } from '../../../utils/auth';


export const apiClient = {
  updateFollowProfile: (username, data) => {
    const url = `/profiles/${username}/follow`;
    return api.post(url, data);
  },
};
export function* followPostSaga({ payload }) {
    const { username, data } = payload;
  try {
    const response = yield call(apiClient.updateFollowProfile, username, data);
    yield put({
      type: types.PROFILE_FOLLOW_POST_SUCCESS,
      payload: response.data,
    });
    console.log(response.data);
  } catch (err) {
    yield put({
      type: types.PROFILE_FOLLOW_USER_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchFollowUserPost() {
  yield takeEvery(
    types.PROFILE_FOLLOW_POST_START, followPostSaga,
  );
}

export default watchFollowUserPost;
