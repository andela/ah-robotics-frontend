import * as types from './types';

export const selectedRating = payload => ({
  type: types.SELECT_RATE,
  payload,
});
export const ratingSuccess = payload => ({
  type: types.RATING_SUCCESS,
  payload,
});
export const ratingUpdate = payload => ({
  type: types.UPDATE_RATE,
  payload,
});
export const ratingError = payload => ({
  type: types.RATING_ERROR,
  payload,
});
