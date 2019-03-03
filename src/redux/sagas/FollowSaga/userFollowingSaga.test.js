import { runSaga } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import watchfollowingUserProfile, {
    userFollowingSaga,
  apiClient,
} from './userFollowingSaga';
import * as types from '../../actions/userFollowActions/types';

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
    await runSaga(fakeStore, userFollowingSaga, { payload: {} }).done;
    expect(apiClient.loadUserProfile.mock.calls.length).toBe(1);
    expect(dispatchedActions).toEqual([{ type: 'PROFILE_FOLLOW_DATA_SUCCESS', payload: { profile: { bio: '' } } }]);
  });
//   it('it should handle upload profile error', async () => {
//     dispatchedActions = [];
//     const errors = {
//       response: {
//         data: {
//             errors: {
//               error: 'something is wrong',
//             },
//           },
//       },
//     };
//     apiClient.updateFollowProfile = jest.fn(() => Promise.reject(errors));
//     await runSaga(fakeStore, userFollowingSaga,
//       { payload: { payload: { username: 'test' } } }).done;
//     expect(apiClient.loadUserProfile.mock.calls.length).toBe(1);
//     expect(dispatchedActions).toEqual(
//         [{
//  payload: { errors: { errors: { error: 'something is wrong' } } },
//           type: 'PROFILE_FOLLOW_ERROR',
//         }],
// );
//   });

  it('should listen for the required actions', () => {
    const generator = watchfollowingUserProfile();
    put({ type: types.PROFILE_FOLLOW_DATA });
    const next = generator.next();
    expect(next.value).toEqual(takeEvery('PROFILE_FOLLOW_DATA', userFollowingSaga));
  });
});
