import { put, call, takeLatest } from 'redux-saga/effects';
import * as types from '../../actions/RatingsActions/types';
import { api } from '../../../utils/auth';

export const apiClient = {
  ratingsUrl: (slug, payload) => api.post(`/rate/${slug}/`, payload),
};

export function* processRatings({ payload }) {
  try {
    const { slug } = payload.match.params;
    const response = yield call(apiClient.ratingsUrl,
      slug, { user_rating: payload.rating });
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
  yield takeLatest(types.SELECT_RATE, processRatings);
}

export default watchSelectRating;
