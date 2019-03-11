import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import watchfollowing, {
  FollowingUserSaga,
  apiClient,
} from './FollowingSaga';
import * as types from '../../actions/UserFollowActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({
    error: {},
    isLoading: false,
}),
};

describe('upload user profile  saga tests', () => {
  it('it should handle upload user profile success', async () => {
    dispatchedActions = [];
    const response = {
         data: {
             profile: {
                 bio: '',
             },
         },
    };
    apiClient.loadUserProfile = jest.fn(() => Promise.resolve(response));
    await runSaga(fakeStore, FollowingUserSaga, { payload: {} }).done;
    expect(apiClient.loadUserProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'PROFILE_FOLLOW_DATA_SUCCESS', payload: { profile: { bio: '' } } }]);
  });

  it('should listen for the required actions', () => {
    const generator = watchfollowing();
    put({ type: types.PROFILE_FOLLOW_DATA });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery('PROFILE_FOLLOW_DATA', FollowingUserSaga));
  });
});
