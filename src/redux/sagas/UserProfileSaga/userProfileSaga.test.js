import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import watchUserProfile, {
    userProfileSaga,
  apiClient,
} from './UserProfileSaga';
import * as types from '../../actions/userProfileActions/types';

let dispatchedActions = [];
const fakeStore = {
  dispatch: action => dispatchedActions.push(action),
  getState: () => ({
 profileData: {},
    error: {},
    profileUpdate: false,
    isLoading: false,
    Followers: 0,
    Following: 0,
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
    apiClient.fetchUserProfile = jest.fn(() => Promise.resolve(response));
    await runSaga(fakeStore, userProfileSaga, { payload: { payload: { username: 'test' } } }).done;
    expect(apiClient.fetchUserProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'PROFILE_DATA_SUCCESS', payload: { profile: { bio: '' } } }]);
  });
  it('it should handle upload profile error', async () => {
    dispatchedActions = [];
    const errors = {
      response: {
        data: {
            errors: {
              error: 'something is wrong',
            },
          },
      },
    };
    apiClient.fetchUserProfile = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, userProfileSaga, { payload: { payload: { username: 'test' } } }).done;
    expect(apiClient.fetchUserProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(
        [{ payload: { errors: { data: { errors: { error: 'something is wrong' } } } }, type: 'PROFILE_ERROR' }],
);
  });

  it('should listen for the required actions', () => {
    const generator = watchUserProfile();
    put({ type: types.PROFILE_DATA });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery('PROFILE_DATA', userProfileSaga));
  });
});
