import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import watchUserProfilePatch, {
    userProfilePatchSaga,
  apiClient,
} from './UserProfilePatchSaga';
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

describe('update user profile saga tests', () => {
  it('it should handle update user profile ', async () => {
    dispatchedActions = [];
    const response = {
         data: {
             profile: {
                 bio: '',
             },
         },
    };
    apiClient.updateProfile = jest.fn(() => Promise.resolve(response));
    await runSaga(fakeStore, userProfilePatchSaga, { payload: { payload: { username: 'test' } } }).done;
    expect(apiClient.updateProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'PROFILE_PATCH_SUCCESS', payload: { profile: { bio: '' } } }]);
  });
  it('it should handle update user profile error', async () => {
    dispatchedActions = [];
    const errors = {
      response: {
        data: {
            errors: {
              error: 'something is the matter',
            },
          },
      },
    };
    apiClient.updateProfile = jest.fn(() => Promise.reject(errors));
    await runSaga(fakeStore, userProfilePatchSaga, { payload: { payload: { username: 'test' } } }).done;
    expect(apiClient.updateProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual(
        [{ payload: { errors: { data: { errors: { error: 'something is the matter' } } } }, type: 'PROFILE_PATCH_ERROR' }],
);
  });

  it('should listen for the required actions', () => {
    const generator = watchUserProfilePatch();
    put({ type: types.PROFILE_PATCH_START });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery('PROFILE_PATCH_START', userProfilePatchSaga));
  });
});
