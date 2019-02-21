import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../../actions/RatingsActions/types';

function* ratingWorker({ payload }) {
  const token = localStorage.getItem('accessToken');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `TOKEN ${token}`,
};
  try {
    const apiUrl = 'https://ah-robotics-staging.herokuapp.com/api/v1/rate/this-is-africa/';
    const response = yield call(axios.post, apiUrl, { user_rating: payload.rating }, { headers });
    yield put({
      type: types.RATING_SUCCESS,
      payload: { rating: response.data },
    });
    yield put({
      type: types.UPDATE_RATE,
      payload: { rating: response.data },
    });
  } catch (error) {
    yield put({
      type: types.RATING_ERROR,
      payload: { error: error.response.data },
    });
  }
}

function* watchSelectRating() {
  yield takeLatest(types.SELECT_RATE, ratingWorker);
}

export default watchSelectRating;
