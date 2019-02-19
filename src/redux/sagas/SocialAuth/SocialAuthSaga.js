import { put, call, takeEvery } from 'redux-saga/effects';
import * as types from '../../actions/socialAuth/types';
import setUserToken, { api, setCurrentUser } from '../../../utils/auth';

const apiUrl = '/login/social/';

export const apiClient = {
  fetchSocialLoginOptions: (payload) => {
    const { authData } = payload;
    return api.post(apiUrl, authData);
  },
};

export function* SocialAuthSaga({ payload }) {
  try {
    const { userDetails } = payload;
    const response = yield call(apiClient.fetchSocialLoginOptions, payload);
    yield put({
      type: types.SOCIAL_LOGIN_SUCCESS,
      payload: { user: response.data.user },
    });
    const user = {
      email: userDetails.email,
      username: (userDetails.email).match(/^([^@]*)@/)[1],
    };
    setUserToken(response.data.token);
    setCurrentUser(user);
  } catch (error) {
    yield put({
      type: types.SOCIAL_LOGIN_ERROR,
      payload: { errors: error.response ? error.response.data.errors : {} },
    });
  }
}

function* socialAuthWatcher() {
  yield takeEvery(types.SOCIAL_LOGIN_START, SocialAuthSaga);
}

export default socialAuthWatcher;
