import { runSaga } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';
import watchSelectRating, {
  processRatings,
  apiClient,
} from './RatingSaga';
import * as types from '../../actions/RatingsActions/types';

const dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({
    userRating: {},
    error: {},
    averageRating: 0,
    isLoading: false,
    isSuccess: false,
    isUpdated: false,
    isError: false,
  }),
};

describe('test making a rating', () => {
  it('test that the saga listens and follows all steps', () => {
    const generator = watchSelectRating();
    put({ type: types.SELECT_RATE });
    const next = generator.next();
    expect(next.value).toEqual(takeLatest(types.SELECT_RATE, processRatings));
  });
});
