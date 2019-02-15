import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/VerifyRegistrationActions/types';


function* verifyRegistrationSaga({ payload }) {
  try {
    const response = yield call(axios.get, `https://ah-robotics-staging.herokuapp.com/api/v1/users/verify/${payload.token}`);
    console.log(response.data);
    yield put({
      type: types.VERIFY_SUCCESS,
      payload: { data: response.data },
    });
  } catch (err) {
    yield put({
      type: types.VERIFY_ERROR,
      payload: { errors: err.response },
    });
  }
}

function* watchVerify() {
  yield takeEvery(
    types.VERIFY_START, verifyRegistrationSaga,
);
}

export default watchVerify;
